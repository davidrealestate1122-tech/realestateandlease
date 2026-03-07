import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import ExecutionTask from "@/models/ExecutionTask"
// GET - Single task
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await context.params

    const task = await ExecutionTask.findById(id)
      .populate("assignedContractor")

    if (!task) {
      return NextResponse.json(
        { message: "Task not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: task,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch task" },
      { status: 500 }
    )
  }
}

// PATCH - Update task
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await context.params
    const body = await req.json()

    // If completing task, set completion date
    if (body.completed && !body.completionDate) {
      body.completionDate = new Date()
    }

    const updated = await ExecutionTask.findByIdAndUpdate(id, body, {
      new: true,
    }).populate("assignedContractor")

    if (!updated) {
      return NextResponse.json(
        { message: "Task not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: updated,
        message: "Task updated",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error updating task:", error)
    return NextResponse.json(
      { message: "Failed to update task" },
      { status: 500 }
    )
  }
}

// DELETE - Delete task
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await context.params

    const deleted = await ExecutionTask.findByIdAndDelete(id)

    if (!deleted) {
      return NextResponse.json(
        { message: "Task not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Task deleted",
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete task" },
      { status: 500 }
    )
  }
}

