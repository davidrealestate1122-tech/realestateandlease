import { connectDB } from "@/lib/db"
import ExecutionTimeline from "@/models/ExecutionTimeline"
import { NextRequest, NextResponse } from "next/server"

// PUT - Update timeline
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params
    const body = await req.json()

    if (!id) {
      return NextResponse.json(
        { message: "Timeline ID is required" },
        { status: 400 }
      )
    }

    const updatedTimeline = await ExecutionTimeline.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    )

    if (!updatedTimeline) {
      return NextResponse.json(
        { message: "Timeline not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: updatedTimeline,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update timeline" },
      { status: 500 }
    )
  }
}

// DELETE - Delete timeline
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { message: "Timeline ID is required" },
        { status: 400 }
      )
    }

    const deletedTimeline = await ExecutionTimeline.findByIdAndDelete(id)

    if (!deletedTimeline) {
      return NextResponse.json(
        { message: "Timeline not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Timeline deleted successfully",
        data: deletedTimeline,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete timeline" },
      { status: 500 }
    )
  }
}