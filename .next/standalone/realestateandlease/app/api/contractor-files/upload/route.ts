import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import { connectDB } from "@/lib/db"
import ContractorFile from "@/models/ContractorFile"

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const formData = await req.formData()

    const file = formData.get("file") as File
    const contractorId = formData.get("contractorId") as string
    const fileType = formData.get("fileType") as string
    const description = formData.get("description") as string | null
    const uploadedBy = formData.get("uploadedBy") as string

    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 })
    if (!contractorId) return NextResponse.json({ error: "Contractor ID required" }, { status: 400 })

    const validTypes = ["signed_sow", "invoice", "payment_confirmation", "progress_photo"]
    if (!validTypes.includes(fileType)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
    }

    // Save to disk
    const uploadDir = path.join(process.cwd(), "public", "contractor-uploads", contractorId)
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    const timestamp = Date.now()
    const originalName = file.name.replace(/\s+/g, "-")
    const fileName = `${timestamp}-${originalName}`
    const filePath = path.join(uploadDir, fileName)

    const bytes = await file.arrayBuffer()
    await writeFile(filePath, Buffer.from(bytes))

    const fileUrl = `/contractor-uploads/${contractorId}/${fileName}`

    // Save to MongoDB
    const saved = await ContractorFile.create({
      contractorId,
      fileName,
      originalName: file.name,
      fileUrl,
      fileSize: file.size,
      mimeType: file.type,
      fileType,
      description: description || "",
      uploadedBy: uploadedBy || "Admin",
    })

    return NextResponse.json({ success: true, data: saved })
  } catch (err) {
    console.error("Contractor file upload error:", err)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}