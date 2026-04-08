/**
 * FILE: /app/api/execution/contractors/[id]/scope/route.ts
 * Manage scope items
 */

import { connectDB } from "@/lib/db"
import ExecutionContractor from "@/models/ExecutionContractor"
import { NextRequest, NextResponse } from "next/server"

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const body = await req.json()
    const params = await context.params

    const contractor = await ExecutionContractor.findById(params.id)

    if (!contractor) {
      return NextResponse.json(
        { success: false, message: "Contractor not found" },
        { status: 404 }
      )
    }

    // Validate scope item
    if (!body.category) {
      return NextResponse.json(
        { success: false, message: "Category required" },
        { status: 400 }
      )
    }

    // Check if category already exists
    const exists = contractor.scopeItems.some((item: any) => item.category === body.category)
    if (exists) {
      return NextResponse.json(
        { success: false, message: "Category already exists" },
        { status: 400 }
      )
    }

    contractor.scopeItems.push({
      category: body.category,
      description: body.description || "",
      status: "PENDING",
    })

    await contractor.save()

    return NextResponse.json(
      {
        success: true,
        data: contractor,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("POST Scope Item Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to add scope item" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const body = await req.json()
    const params = await context.params

    const contractor = await ExecutionContractor.findById(params.id)

    if (!contractor) {
      return NextResponse.json(
        { success: false, message: "Contractor not found" },
        { status: 404 }
      )
    }

    // Validate scope item ID
    if (!body.scopeItemId) {
      return NextResponse.json(
        { success: false, message: "Scope item ID required" },
        { status: 400 }
      )
    }

    // Find and update scope item
    const item = contractor.scopeItems.id(body.scopeItemId)
    if (!item) {
      return NextResponse.json(
        { success: false, message: "Scope item not found" },
        { status: 404 }
      )
    }

    if (body.status) {
      // Validate status
      if (!["PENDING", "IN_PROGRESS", "COMPLETED"].includes(body.status)) {
        return NextResponse.json(
          { success: false, message: "Invalid status value" },
          { status: 400 }
        )
      }
      item.status = body.status
    }

    if (body.description) {
      item.description = body.description
    }

    await contractor.save()

    return NextResponse.json(
      {
        success: true,
        data: contractor,
      }
    )
  } catch (error) {
    console.error("PATCH Scope Item Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to update scope item" },
      { status: 500 }
    )
  }
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const params = await context.params

    const contractor = await ExecutionContractor.findById(params.id)

    if (!contractor) {
      return NextResponse.json(
        { success: false, message: "Contractor not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: contractor.scopeItems,
      }
    )
  } catch (error) {
    console.error("GET Scope Items Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to fetch scope items" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const body = await req.json()
    const params = await context.params

    const contractor = await ExecutionContractor.findById(params.id)

    if (!contractor) {
      return NextResponse.json(
        { success: false, message: "Contractor not found" },
        { status: 404 }
      )
    }

    if (!body.scopeItemId) {
      return NextResponse.json(
        { success: false, message: "Scope item ID required" },
        { status: 400 }
      )
    }

    contractor.scopeItems.id(body.scopeItemId).deleteOne()
    await contractor.save()

    return NextResponse.json(
      {
        success: true,
        message: "Scope item deleted",
        data: contractor,
      }
    )
  } catch (error) {
    console.error("DELETE Scope Item Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to delete scope item" },
      { status: 500 }
    )
  }
}