import { connectDB } from "@/lib/db"
import ExecutionTimeline from "@/models/ExecutionTimeline"
import { NextRequest, NextResponse } from "next/server"

// POST - Create timeline
export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()
    const {
      executionWorkspaceId,
      projectStartDate,
      projectTargetDate,
    } = body

    if (!executionWorkspaceId || !projectStartDate || !projectTargetDate) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    const newTimeline = await ExecutionTimeline.create({
      executionWorkspaceId,
      projectStartDate,
      projectTargetDate,
      milestones: [
        {
          name: "Project Start",
          plannedDate: projectStartDate,
          status: "SCHEDULED",
        },
        {
          name: "Project Completion",
          plannedDate: projectTargetDate,
          status: "SCHEDULED",
        },
      ],
    })

    return NextResponse.json(newTimeline, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create timeline" },
      { status: 500 }
    )
  }
}

// GET - Fetch timeline
export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const workspaceId = searchParams.get("workspaceId")

    const timeline = await ExecutionTimeline.findOne({
      executionWorkspaceId: workspaceId,
    })

    if (!timeline) {
      return NextResponse.json(
        { message: "Timeline not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: timeline,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch timeline" },
      { status: 500 }
    )
  }
}

