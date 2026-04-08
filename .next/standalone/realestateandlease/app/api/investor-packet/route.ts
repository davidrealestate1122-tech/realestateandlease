import { NextRequest, NextResponse } from "next/server"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import {connectDB} from "@/lib/db"
import InvestorPacket from "@/models/InvestorPacket"
import Document from "@/models/Document"

export async function GET(req: NextRequest) {
  await connectDB()
  const { searchParams } = new URL(req.url)
  const propertyId = searchParams.get("propertyId")
  if (!propertyId) return NextResponse.json([], { status: 200 })
  try {
    const packets = await InvestorPacket.find({ propertyId }).sort({ version: -1 })
    return NextResponse.json(packets)
  } catch (err: any) {
    return NextResponse.json({ message: "Failed" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  await connectDB()
  try {
    const { propertyId, documentIds, dealSummary, name } = await req.json()

    if (!propertyId || !documentIds?.length) {
      return NextResponse.json({ message: "propertyId and documentIds required" }, { status: 400 })
    }

    // 1. Load documents in selected order
    const docs = await Document.find({ _id: { $in: documentIds } })
    const orderedDocs = documentIds
      .map((id: string) => docs.find((d: any) => String(d._id) === id))
      .filter(Boolean)

    if (!orderedDocs.length) {
      return NextResponse.json({ message: "No valid documents found" }, { status: 400 })
    }

    // 2. Create merged PDF
    const mergedPdf  = await PDFDocument.create()
    const font       = await mergedPdf.embedFont(StandardFonts.Helvetica)
    const boldFont   = await mergedPdf.embedFont(StandardFonts.HelveticaBold)

    // 2a. Deal summary cover page
    const coverPage       = mergedPdf.addPage([612, 792])
    const { width, height } = coverPage.getSize()

    // Dark header bar
    coverPage.drawRectangle({
      x: 0, y: height - 90, width, height: 90,
      color: rgb(0.07, 0.07, 0.09),
    })
    coverPage.drawText("INVESTOR PACKET", {
      x: 40, y: height - 44, size: 24,
      font: boldFont, color: rgb(0.77, 0.64, 0.38),
    })
    if (dealSummary.propertyAddress) {
      coverPage.drawText(dealSummary.propertyAddress, {
        x: 40, y: height - 66, size: 10,
        font, color: rgb(0.65, 0.65, 0.65),
      })
    }

    // Gold divider
    coverPage.drawRectangle({ x: 40, y: height - 96, width: 532, height: 2, color: rgb(0.77, 0.64, 0.38) })

    // Summary fields
    const fields: [string, string][] = [
      ["Property Address", dealSummary.propertyAddress],
      ["Investor Name",    dealSummary.investorName],
      ["Purchase Price",   dealSummary.purchasePrice   ? `$${Number(dealSummary.purchasePrice).toLocaleString()}`   : ""],
      ["ARV",              dealSummary.arv              ? `$${Number(dealSummary.arv).toLocaleString()}`              : ""],
      ["Rehab Budget",     dealSummary.rehabBudget      ? `$${Number(dealSummary.rehabBudget).toLocaleString()}`      : ""],
      ["Holding Costs",    dealSummary.holdingCosts     ? `$${Number(dealSummary.holdingCosts).toLocaleString()}`     : ""],
      ["Closing Costs",    dealSummary.closingCosts     ? `$${Number(dealSummary.closingCosts).toLocaleString()}`     : ""],
      ["Total Project Cost", dealSummary.totalCosts     ? `$${Number(dealSummary.totalCosts).toLocaleString()}`       : ""],
      ["Estimated Profit", dealSummary.estimatedProfit  ? `$${Number(dealSummary.estimatedProfit).toLocaleString()}`  : ""],
      ["Loan Amount",      dealSummary.loanAmount       ? `$${Number(dealSummary.loanAmount).toLocaleString()}`       : ""],
      ["Lender",           dealSummary.lenderName],
      ["Start Date",       dealSummary.startDate],
      ["End Date",         dealSummary.endDate],
      ["Duration",         dealSummary.projectDuration],
    ].filter(([, v]) => v?.trim()) as [string, string][]

    // Section title
    let y = height - 124
    coverPage.drawText("DEAL SUMMARY", {
      x: 40, y, size: 9, font: boldFont,
      color: rgb(0.77, 0.64, 0.38),
      // letterSpacing: 2,  // not supported in pdf-lib, skip
    })
    y -= 18

    // Field rows with alternating background
    for (let i = 0; i < fields.length; i++) {
      const [label, value] = fields[i]
      if (i % 2 === 0) {
        coverPage.drawRectangle({ x: 36, y: y - 6, width: 540, height: 20, color: rgb(0.97, 0.97, 0.97) })
      }
      coverPage.drawText(label, { x: 44, y, size: 10, font: boldFont, color: rgb(0.35, 0.35, 0.35) })
      coverPage.drawText(value, { x: 260, y, size: 10, font, color: rgb(0.1, 0.1, 0.1) })
      y -= 22
      if (y < 80) break
    }

    // Documents included list
    y -= 16
    coverPage.drawText("DOCUMENTS INCLUDED", {
      x: 40, y, size: 9, font: boldFont, color: rgb(0.77, 0.64, 0.38),
    })
    y -= 16
    for (let i = 0; i < orderedDocs.length; i++) {
      const d = orderedDocs[i]
      const title = d.fileUrl?.split("/").pop()?.replace(/_v\d+_\d+\.docx$/, "") || `Document ${i + 1}`
      coverPage.drawText(`${i + 1}.  ${title}`, {
        x: 44, y, size: 10, font, color: rgb(0.25, 0.25, 0.25),
      })
      y -= 18
      if (y < 60) break
    }

    // Footer
    coverPage.drawRectangle({ x: 0, y: 0, width, height: 40, color: rgb(0.07, 0.07, 0.09) })
    coverPage.drawText(`Generated ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`, {
      x: 40, y: 14, size: 9, font, color: rgb(0.5, 0.5, 0.5),
    })

    // 2b. Merge each document PDF (must already be converted)
    const skipped: string[] = []
    for (const doc of orderedDocs) {
      const pdfPath = doc.pdfPath ?? (doc.pdfUrl ? path.join(process.cwd(), "public", doc.pdfUrl) : null)
      if (!pdfPath || !existsSync(pdfPath)) { skipped.push(doc._id); continue }
      try {
        const pdfBytes = readFileSync(pdfPath)
        const srcPdf   = await PDFDocument.load(pdfBytes)
        const pages    = await mergedPdf.copyPages(srcPdf, srcPdf.getPageIndices())
        pages.forEach(p => mergedPdf.addPage(p))
      } catch (e) {
        console.warn(`[investor-packet] Skipping doc ${doc._id}:`, e)
        skipped.push(doc._id)
      }
    }

    // 3. Save merged PDF to disk
    const packetBytes = await mergedPdf.save()
    const packetDir   = path.join(process.cwd(), "public", "packets", propertyId)
    if (!existsSync(packetDir)) mkdirSync(packetDir, { recursive: true })

    const existingCount = await InvestorPacket.countDocuments({ propertyId })
    const version       = existingCount + 1
    const filename      = `investor-packet-v${version}-${Date.now()}.pdf`
    const pdfPath       = path.join(packetDir, filename)
    const pdfUrl        = `/packets/${propertyId}/${filename}`

    writeFileSync(pdfPath, packetBytes)

    // 4. Save to DB
    const packet = await InvestorPacket.create({
      propertyId,
      name:    name || `Investor Packet v${version}`,
      version,
      pdfUrl,
      pdfPath,
      documents: orderedDocs.map((d: any, i: number) => ({
        documentId: String(d._id),
        fileUrl:    d.fileUrl,
        title:      d.fileUrl?.split("/").pop()?.replace(/_v\d+_\d+\.docx$/, "") || `Document ${i + 1}`,
        order:      i,
      })),
    })

    return NextResponse.json({
      success: true,
      packet,
      skipped: skipped.length ? skipped : undefined,
    })
  } catch (err: any) {
    console.error("[investor-packet]", err)
    return NextResponse.json({ message: "Failed to generate packet", error: err.message }, { status: 500 })
  }
}