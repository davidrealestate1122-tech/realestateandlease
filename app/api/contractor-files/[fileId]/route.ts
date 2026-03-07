import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import ContractorFile from "@/models/ContractorFile"
import { unlink } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ fileId: string }> }
) {
  try {
    await connectDB()

    const { fileId } = await context.params

    const file = await ContractorFile.findById(fileId)
    if (!file) return NextResponse.json({ error: "File not found" }, { status: 404 })

    // Delete from disk
    const filePath = path.join(process.cwd(), "public", file.fileUrl)
    if (existsSync(filePath)) await unlink(filePath)

    await ContractorFile.findByIdAndDelete(fileId)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contractor file delete error:", err)
    return NextResponse.json({ error: "Delete failed" }, { status: 500 })
  }
}