import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import ExecutionTask from "@/models/ExecutionTask"

// POST - Create task
export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()
    const {
      executionWorkspaceId,
      category,
      title,
      description,
      priority,
      assignedContractor,
      dueDate,
      estimatedHours,
    } = body

    if (!executionWorkspaceId || !category || !title) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    const newTask = await ExecutionTask.create({
      executionWorkspaceId,
      category,
      title,
      description,
      priority,
      assignedContractor,
      dueDate,
      estimatedHours,
    })

    return NextResponse.json(newTask, { status: 201 })
  } catch (error) {
    console.error("Error creating task:", error)
    return NextResponse.json(
      { message: "Failed to create task" },
      { status: 500 }
    )
  }
}

// GET - Fetch tasks for workspace
export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const workspaceId = searchParams.get("workspaceId")
    const category = searchParams.get("category")
    const completed = searchParams.get("completed")

    const filter: any = {}
    if (workspaceId) filter.executionWorkspaceId = workspaceId
    if (category) filter.category = category
    if (completed !== null) filter.completed = completed === "true"

    const tasks = await ExecutionTask.find(filter)
      .populate("assignedContractor", "name")
      .sort({ priority: -1, dueDate: 1 })
      .lean()

    return NextResponse.json(
      {
        success: true,
        data: tasks,
        count: tasks.length,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error fetching tasks:", error)
    return NextResponse.json(
      { message: "Failed to fetch tasks" },
      { status: 500 }
    )
  }
}