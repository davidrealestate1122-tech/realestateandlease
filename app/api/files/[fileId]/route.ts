// app/api/files/[fileId]/route.ts
import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import FileModel from "@/models/File"
import { unlink } from "fs/promises"
import path from "path"
import { existsSync } from "fs"
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ fileId: string }> }  // ✅ Promise type
) {
  try {
    await connectDB()

    const { fileId } = await context.params  // ✅ await params

    console.log("🗑️ Deleting fileId:", fileId)

    if (!fileId) {
      return NextResponse.json({ error: "File ID required" }, { status: 400 })
    }

    const file = await FileModel.findById(fileId)
    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 404 })
    }

    const filePath = path.join(process.cwd(), "public", file.fileUrl)
    if (existsSync(filePath)) {
      await unlink(filePath)
    }

    await FileModel.findByIdAndDelete(fileId)

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error("Delete error:", err)
    return NextResponse.json({ error: "Delete failed" }, { status: 500 })
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ fileId: string }> }  // ✅ Promise type
) {
  try {
    await connectDB()

    const { fileId } = await context.params  // ✅ await params
    const updates = await req.json()

    const updated = await FileModel.findByIdAndUpdate(fileId, updates, { new: true })

    if (!updated) {
      return NextResponse.json({ error: "File not found" }, { status: 404 })
    }

    return NextResponse.json({ data: updated })

  } catch (err) {
    console.error("Update error:", err)
    return NextResponse.json({ error: "Update failed" }, { status: 500 })
  }
}