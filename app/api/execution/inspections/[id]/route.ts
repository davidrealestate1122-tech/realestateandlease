import { connectDB } from "@/lib/db"
import ExecutionInspection from "@/models/ExecutionInspection"
import { NextRequest, NextResponse } from "next/server"

// PUT - Update inspection
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
        { message: "Inspection ID is required" },
        { status: 400 }
      )
    }

    // If findings are being updated, recalculate passed status
    if (body.findings) {
      body.passed = !body.findings.some((f: any) => 
        f.severity === "CRITICAL" && !f.resolved
      )
    }

    const updatedInspection = await ExecutionInspection.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    )
      .populate("taskId", "title category")
      .lean()

    if (!updatedInspection) {
      return NextResponse.json(
        { message: "Inspection not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: updatedInspection,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Update inspection error:", error)
    return NextResponse.json(
      { message: "Failed to update inspection" },
      { status: 500 }
    )
  }
}

// DELETE - Delete inspection
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { message: "Inspection ID is required" },
        { status: 400 }
      )
    }

    const deletedInspection = await ExecutionInspection.findByIdAndDelete(id)

    if (!deletedInspection) {
      return NextResponse.json(
        { message: "Inspection not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inspection deleted successfully",
        data: deletedInspection,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Delete inspection error:", error)
    return NextResponse.json(
      { message: "Failed to delete inspection" },
      { status: 500 }
    )
  }
}

// GET - Fetch single inspection by ID
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { message: "Inspection ID is required" },
        { status: 400 }
      )
    }

    const inspection = await ExecutionInspection.findById(id)
      .populate("taskId", "title category")
      .lean()

    if (!inspection) {
      return NextResponse.json(
        { message: "Inspection not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: inspection,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Fetch inspection error:", error)
    return NextResponse.json(
      { message: "Failed to fetch inspection" },
      { status: 500 }
    )
  }
}