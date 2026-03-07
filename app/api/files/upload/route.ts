import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"
import { existsSync } from "fs"
import { connectDB } from "@/lib/db"
import FileModel from "@/models/File"

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    
    const formData = await req.formData()

    const file = formData.get("file") as File
    const fileType = formData.get("fileType") as string
    const workspaceId = formData.get("workspaceId") as string
    const propertyId = formData.get("propertyId") as string
    const uploadedBy = formData.get("uploadedBy") as string
    const description = formData.get("description") as string | null
    const contractorId = formData.get("contractorId") as string | null

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate fileType matches schema enum
    const validFileTypes = ["pdf", "photo", "invoice", "contractor_document"]
    if (!validFileTypes.includes(fileType)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
    }

    // Save to disk
    const uploadDir = path.join(process.cwd(), "public", "uploads", workspaceId)
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    const timestamp = Date.now()
    const originalName = file.name.replace(/\s+/g, "-")
    const fileName = `${timestamp}-${originalName}`
    const filePath = path.join(uploadDir, fileName)

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filePath, buffer)

    const fileUrl = `/uploads/${workspaceId}/${fileName}`

    // Save to MongoDB
    const savedFile = await FileModel.create({
      fileName: file.name,
      fileSize: file.size,
      fileType,
      mimeType: file.type,       // ✅ from File object
      fileUrl,
      workspaceId,               // mongoose will cast string -> ObjectId
      propertyId,                // mongoose will cast string -> ObjectId
      contractorId: contractorId || undefined,
      description: description || "",
      uploadedBy,
    })

    return NextResponse.json({ data: savedFile })
    
  } catch (err) {
    console.error("Upload error:", err)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}