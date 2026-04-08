import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Document from "@/models/Document"

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const propertyId = searchParams.get("propertyId")
    const templateId = searchParams.get("templateId")

    const docs = await Document.find({
      propertyId,
      templateId,
    }).sort({ version: -1 })

    return NextResponse.json(docs)
  } catch (err) {
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}