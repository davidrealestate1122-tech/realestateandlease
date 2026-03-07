import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Property from "@/models/Property"
import Phase1Snapshot from "@/models/Phase1Snapshot"
import ExecutionWorkspace from "@/models/ExecutionWorkspace"
import DueDiligenceItem from "@/models/DueDiligenceItem"

// Request validation helpers
const isValidMongoId = (id: string): boolean => {
  return /^[0-9a-fA-F]{24}$/.test(id)
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ propertyId: string }> }
) {
  try {
    // IMPORTANT: Await params in Next.js 15+
    const { propertyId } = await params

    // Validate propertyId parameter
    if (!propertyId || typeof propertyId !== "string") {
      return NextResponse.json(
        {
          error: "Invalid request",
          message: "Missing or invalid propertyId parameter",
          code: "INVALID_PROPERTY_ID",
        },
        { status: 400 }
      )
    }

    // Validate MongoDB ObjectId format
    if (!isValidMongoId(propertyId)) {
      return NextResponse.json(
        {
          error: "Invalid format",
          message: "propertyId must be a valid MongoDB ID",
          code: "INVALID_MONGO_ID",
        },
        { status: 400 }
      )
    }

    // Connect to database
    await connectDB()

    // Fetch property - return 404 if not found
    const property = await Property.findById(propertyId).lean()
    
    if (!property) {
      return NextResponse.json(
        {
          error: "Not found",
          message: "Property not found in database",
          code: "PROPERTY_NOT_FOUND",
        },
        { status: 404 }
      )
    }

    // Fetch related data in parallel for better performance
    const [phase1, workspace] = await Promise.all([
      Phase1Snapshot.findOne({ propertyId }).lean(),
      ExecutionWorkspace.findOne({ propertyId }).lean(),
    ])

    // Fetch checklist items only if workspace exists
    let checklist: any[] = []
    if (workspace?._id) {
      checklist = await DueDiligenceItem.find({
        executionWorkspaceId: workspace._id,
      })
        .sort({ createdAt: 1 })
        .lean()
    }

    // Format checklist items
    const formattedChecklist = checklist.map(item => ({
      _id: item._id,
      label: item.label,
      completed: item.completed,
      notes: item.notes || undefined,
      dueDate: item.dueDate || undefined,
    }))

    // SIMPLIFIED RESPONSE FORMAT - Compatible with frontend
    const responseData = {
      property: {
        _id: property._id,
        address: property.address,
        city: property.city,
        state: property.state,
        zipCode: property.zipCode,
        createdAt: property.createdAt,
        updatedAt: property.updatedAt,
      },
      phase1: phase1 || null,
      workspace: workspace
        ? {
            _id: workspace._id,
            stage: workspace.stage,
            executionCosts: workspace.executionCosts || null, // ADD THIS LINE
            createdAt: workspace.createdAt,
            updatedAt: workspace.updatedAt,
          }
        : null,
      checklist: formattedChecklist,
    }

    // Set cache headers for GET requests (5 minutes)
    const headers = new Headers()
    headers.set("Cache-Control", "private, max-age=300")
    headers.set("Content-Type", "application/json")

    return NextResponse.json(responseData, { 
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("[EXECUTION_DETAIL_GET_ERROR]", error)

    // Handle MongoDB connection errors
    if (error instanceof Error && error.message.includes("MongoDB")) {
      return NextResponse.json(
        {
          error: "Database error",
          message: "Failed to connect to database",
          code: "DATABASE_CONNECTION_ERROR",
        },
        { status: 503 }
      )
    }

    // Handle unexpected errors
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "An unexpected error occurred while fetching property details",
        code: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS(request: Request) {
  return NextResponse.json({}, { status: 200 })
}