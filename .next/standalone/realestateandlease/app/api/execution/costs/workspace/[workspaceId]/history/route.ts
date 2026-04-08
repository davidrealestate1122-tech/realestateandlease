import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import CostHistory from "@/models/CostHistory"

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ workspaceId: string }> }
) {
  try {
    await connectDB()
    const { workspaceId } = await context.params

    const history = await CostHistory.find({ workspaceId }).sort({ createdAt: -1 })

    return NextResponse.json(history, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}