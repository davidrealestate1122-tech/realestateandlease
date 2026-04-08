import { NextRequest, NextResponse } from "next/server"
import {connectDB} from "@/lib/db"
import Cost from "@/models/ExecutionCost"

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ workspaceId: string }> }
) {
  try {
    await connectDB()

    const { workspaceId } = await context.params

    const costs = await Cost.find({ executionWorkspaceId: workspaceId }).sort({
      createdAt: -1,
    })

    return NextResponse.json(costs)
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch costs" },
      { status: 500 }
    )
  }
}
