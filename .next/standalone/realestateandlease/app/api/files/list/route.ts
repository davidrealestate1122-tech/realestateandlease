// app/api/files/list/route.ts
import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import FileModel from "@/models/File"

export async function GET(req: NextRequest) {
  try {
    await connectDB() // ✅ missing this

    const { searchParams } = new URL(req.url)
    
    const workspaceId = searchParams.get("workspaceId")
    const propertyId = searchParams.get("propertyId")
    const fileType = searchParams.get("fileType")
    const contractorId = searchParams.get("contractorId")

    const query: any = { workspaceId }
    if (propertyId) query.propertyId = propertyId
    if (fileType) query.fileType = fileType
    if (contractorId) query.contractorId = contractorId

    const files = await FileModel.find(query).sort({ createdAt: -1 })

    return NextResponse.json({ 
      data: files,
      count: files.length 
    })
  } catch (err) {
    console.error("List files error:", err) // ✅ log the real error
    return NextResponse.json({ error: "Failed to fetch files" }, { status: 500 })
  }
}