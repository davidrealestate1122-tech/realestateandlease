import { NextRequest, NextResponse } from "next/server"
import { existsSync, mkdirSync, writeFileSync } from "fs"
import path from "path"
import mammoth from "mammoth"
import { connectDB } from "@/lib/db"
import Document from "@/models/Document"
import { jsPDF } from "jspdf"

export async function POST(req: NextRequest) {
  await connectDB()
  const { documentId } = await req.json()

  try {
    const doc = await Document.findById(documentId)
    if (!doc) return NextResponse.json({ message: "Document not found" }, { status: 404 })

    if (doc.pdfUrl) return NextResponse.json({ pdfUrl: doc.pdfUrl })

    const absDocx = doc.filePath ?? path.join(process.cwd(), "public", doc.fileUrl)
    if (!existsSync(absDocx)) {
      return NextResponse.json({ message: "DOCX file not found on disk" }, { status: 404 })
    }

    const pdfDir = path.join(process.cwd(), "public", "generated", doc.propertyId, "pdfs")
    if (!existsSync(pdfDir)) mkdirSync(pdfDir, { recursive: true })

    const pdfFilename = path.basename(absDocx, ".docx") + ".pdf"
    const pdfPath = path.join(pdfDir, pdfFilename)
    const pdfUrl = `/generated/${doc.propertyId}/pdfs/${pdfFilename}`

    // 1. Extract text from DOCX
    const { value: text } = await mammoth.extractRawText({ path: absDocx })

    // 2. Create PDF from text
    const pdf = new jsPDF()
    const lines = pdf.splitTextToSize(text, 180)
    let y = 15
    for (const line of lines) {
      if (y > 280) {
        pdf.addPage()
        y = 15
      }
      pdf.text(line, 15, y)
      y += 7
    }

    // 3. Save PDF
    const pdfBuffer = Buffer.from(pdf.output("arraybuffer"))
    writeFileSync(pdfPath, pdfBuffer)

    if (!existsSync(pdfPath)) {
      return NextResponse.json({ message: "PDF generation failed" }, { status: 500 })
    }

    doc.pdfUrl = pdfUrl
    doc.pdfPath = pdfPath
    await doc.save()

    return NextResponse.json({ pdfUrl })
  } catch (err: any) {
    console.error("[convert-pdf]", err)
    return NextResponse.json({ message: "Conversion failed", error: err.message }, { status: 500 })
  }
}