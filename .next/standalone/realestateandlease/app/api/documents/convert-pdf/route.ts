import { NextRequest, NextResponse } from "next/server"
import { existsSync, mkdirSync } from "fs"
import path from "path"
import mammoth from "mammoth"
import puppeteer from "puppeteer"
import { connectDB } from "@/lib/db"
import Document from "@/models/Document"

export async function POST(req: NextRequest) {
  await connectDB()
  const { documentId } = await req.json()

  try {
    const doc = await Document.findById(documentId)
    if (!doc) return NextResponse.json({ message: "Document not found" }, { status: 404 })

    // Return cached PDF if already converted
    if (doc.pdfUrl) return NextResponse.json({ pdfUrl: doc.pdfUrl })

    const absDocx = doc.filePath ?? path.join(process.cwd(), "public", doc.fileUrl)
    if (!existsSync(absDocx)) {
      return NextResponse.json({ message: "DOCX file not found on disk" }, { status: 404 })
    }

    const pdfDir = path.join(process.cwd(), "public", "generated", doc.propertyId, "pdfs")
    if (!existsSync(pdfDir)) mkdirSync(pdfDir, { recursive: true })

    const pdfFilename = path.basename(absDocx, ".docx") + ".pdf"
    const pdfPath     = path.join(pdfDir, pdfFilename)
    const pdfUrl      = `/generated/${doc.propertyId}/pdfs/${pdfFilename}`

    // 1. Convert DOCX → HTML
    const { value: html } = await mammoth.convertToHtml({ path: absDocx })

    // 2. Wrap in styled page
    const styledHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body {
              font-family: 'Times New Roman', Times, serif;
              font-size: 12pt;
              line-height: 1.6;
              color: #111;
              padding: 72px;
            }
            h1 { font-size: 20pt; margin-bottom: 12px; }
            h2 { font-size: 16pt; margin-bottom: 10px; }
            h3 { font-size: 13pt; margin-bottom: 8px; }
            p  { margin-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 14px; }
            td, th { border: 1px solid #ccc; padding: 6px 10px; font-size: 11pt; }
            th { background: #f5f5f5; font-weight: 600; }
            ul, ol { margin-left: 24px; margin-bottom: 10px; }
            li { margin-bottom: 4px; }
            strong { font-weight: 700; }
            em { font-style: italic; }
          </style>
        </head>
        <body>${html}</body>
      </html>
    `

    // 3. Print to PDF via Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })
    const page = await browser.newPage()
    await page.setContent(styledHtml, { waitUntil: "networkidle0" })
    await page.pdf({
      path:          pdfPath,
      format:        "A4",
      printBackground: true,
      margin:        { top: "0.5in", bottom: "0.5in", left: "0.5in", right: "0.5in" },
    })
    await browser.close()

    if (!existsSync(pdfPath)) {
      return NextResponse.json({ message: "PDF generation failed" }, { status: 500 })
    }

    // 4. Save back to DB
    doc.pdfUrl  = pdfUrl
    doc.pdfPath = pdfPath
    await doc.save()

    return NextResponse.json({ pdfUrl })
  } catch (err: any) {
    console.error("[convert-pdf]", err)
    return NextResponse.json({ message: "Conversion failed", error: err.message }, { status: 500 })
  }
}