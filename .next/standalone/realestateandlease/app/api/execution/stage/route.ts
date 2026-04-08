import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import ExecutionWorkspace from "@/models/ExecutionWorkspace"

export async function POST(req: Request) {
  await connectDB()
  const { workspaceId, stage } = await req.json()

  await ExecutionWorkspace.findByIdAndUpdate(workspaceId, { stage })
  return NextResponse.json({ success: true })
}
