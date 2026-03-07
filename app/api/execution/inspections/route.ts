import { connectDB } from "@/lib/db"
import ExecutionInspection from "@/models/ExecutionInspection"
import { NextRequest, NextResponse } from "next/server"
import { DELETE } from "../timeline/[id]/route"

// POST - Create inspection record
export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()
    const {
      executionWorkspaceId,
      taskId,
      inspectionType,
      inspectionDate,
      inspector,
      findings,
      passed,
      overallNotes,
    } = body

    if (!executionWorkspaceId || !inspectionType) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Determine passed status based on findings if not explicitly set
    const finalPassed = passed !== undefined 
      ? passed 
      : !findings?.some((f: any) => f.severity === "CRITICAL" && !f.resolved)

    const newInspection = await ExecutionInspection.create({
      executionWorkspaceId,
      taskId,
      inspectionType,
      inspectionDate: inspectionDate ? new Date(inspectionDate) : new Date(),
      inspector,
      findings: findings || [],
      passed: finalPassed,
      overallNotes: overallNotes || "",
    })

    const populatedInspection = await ExecutionInspection.findById(
      newInspection._id
    )
      .populate("taskId", "title category")
      .lean()

    return NextResponse.json(
      {
        success: true,
        data: populatedInspection,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create inspection error:", error)
    return NextResponse.json(
      { message: "Failed to create inspection" },
      { status: 500 }
    )
  }
}

// GET - Fetch inspections
export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const workspaceId = searchParams.get("workspaceId")
    const inspectionType = searchParams.get("type")
    const passed = searchParams.get("passed")

    const filter: any = {}
    if (workspaceId) filter.executionWorkspaceId = workspaceId
    if (inspectionType) filter.inspectionType = inspectionType
    if (passed !== null && passed !== undefined) {
      filter.passed = passed === "true"
    }

    const inspections = await ExecutionInspection.find(filter)
      .populate("taskId", "title category")
      .sort({ inspectionDate: -1 })
      .lean()

    return NextResponse.json(
      {
        success: true,
        data: inspections,
        count: inspections.length,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Fetch inspections error:", error)
    return NextResponse.json(
      { message: "Failed to fetch inspections" },
      { status: 500 }
    )
  }
}
