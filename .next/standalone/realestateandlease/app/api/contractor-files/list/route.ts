import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import ContractorFile from "@/models/ContractorFile"

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const contractorId = searchParams.get("contractorId")
    const fileType = searchParams.get("fileType")

    if (!contractorId) {
      return NextResponse.json({ error: "contractorId required" }, { status: 400 })
    }

    const query: any = { contractorId }
    if (fileType) query.fileType = fileType

    const files = await ContractorFile.find(query).sort({ createdAt: -1 })

    return NextResponse.json({ success: true, data: files, count: files.length })
  } catch (err) {
    console.error("Contractor file list error:", err)
    return NextResponse.json({ error: "Failed to fetch files" }, { status: 500 })
  }
}