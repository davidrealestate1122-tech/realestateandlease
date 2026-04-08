import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Cost from "@/models/ExecutionCost"
import { ObjectId } from "mongodb"
import mongoose from "mongoose"

/**
 * GET /api/execution/costs/item/[id]
 * Fetch a single execution cost by ID with validation
 */
// export async function GET(
//   req: NextRequest,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     await connectDB()

//     const { id } = await context.params

//     console.log("📥 GET Cost Request - ID:", id)

//     // Validate ObjectId format
//     if (!ObjectId.isValid(id)) {
//       console.error("❌ Invalid ObjectId format:", id)
//       return NextResponse.json(
//         { 
//           success: false,
//           message: "Invalid cost ID format",
//           receivedId: id,
//           expectedFormat: "24 hexadecimal characters"
//         },
//         { status: 400 }
//       )
//     }

//     console.log("✅ ObjectId format valid")

//     // Find cost by ID
//     const cost = await Cost.findById(id)
//       .populate("executionWorkspaceId", "stage")
//       .lean()

//     console.log("🔎 Search result:", cost)

//     if (!cost) {
//       console.error("❌ Cost not found for ID:", id)
      
//       // Check total costs in collection for debugging
//       const totalCosts = await Cost.countDocuments()
//       console.log(`📦 Total costs in collection: ${totalCosts}`)

//       return NextResponse.json(
//         { 
//           success: false,
//           message: "Cost not found",
//           searchedId: id,
//           totalCostsInDatabase: totalCosts
//         },
//         { status: 404 }
//       )
//     }

//     console.log("✅ Cost found successfully")

//     return NextResponse.json(
//       {
//         success: true,
//         data: cost
//       },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.error("❌ Error fetching cost:", error)

//     let errorMessage = "Failed to fetch cost"
//     let statusCode = 500

//     if (error instanceof mongoose.Error.CastError) {
//       errorMessage = "Invalid ID format"
//       statusCode = 400
//     } else if (error instanceof Error) {
//       errorMessage = error.message
//     }

//     return NextResponse.json(
//       { 
//         success: false,
//         message: errorMessage,
//         error: process.env.NODE_ENV === "development" ? String(error) : undefined
//       },
//       { status: statusCode }
//     )
//   }
// }

/**
 * PATCH /api/execution/costs/item/[id]
 * Update an execution cost with validation
 */
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()

    const { id } = await context.params
    const body = await req.json()

    console.log("📝 PATCH Cost Request - ID:", id)
    console.log("📋 Update data:", body)

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      console.error("❌ Invalid ObjectId format:", id)
      return NextResponse.json(
        { 
          success: false,
          message: "Invalid cost ID format"
        },
        { status: 400 }
      )
    }

    // Validate update body is not empty
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { 
          success: false,
          message: "Update body cannot be empty"
        },
        { status: 400 }
      )
    }

    // Prevent updating protected fields
    const allowedFields = ["category", "plannedAmount", "actualAmount", "notes"]
    const updateData: any = {}
    
    for (const key of allowedFields) {
      if (key in body) {
        updateData[key] = body[key]
      }
    }

    console.log("✅ Validated update data:", updateData)

    // Update the cost
    const updated = await Cost.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    ).populate("executionWorkspaceId", "stage")

    if (!updated) {
      console.error("❌ Cost not found for update - ID:", id)
      return NextResponse.json(
        { 
          success: false,
          message: "Cost not found"
        },
        { status: 404 }
      )
    }

    console.log("✅ Cost updated successfully - ID:", id)

    return NextResponse.json(
      {
        success: true,
        data: updated,
        message: "Cost updated successfully"
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("❌ Error updating cost:", error)

    let errorMessage = "Failed to update cost"
    let statusCode = 500

    if (error instanceof mongoose.Error.ValidationError) {
      const messages = Object.values(error.errors)
        .map((e: any) => e.message)
        .join(", ")
      errorMessage = `Validation error: ${messages}`
      statusCode = 400
    } else if (error instanceof mongoose.Error.CastError) {
      errorMessage = "Invalid data format"
      statusCode = 400
    } else if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json(
      { 
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === "development" ? String(error) : undefined
      },
      { status: statusCode }
    )
  }
}

/**
 * DELETE /api/execution/costs/item/[id]
 * Delete an execution cost with validation
 */
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()

    const { id } = await context.params

    console.log("🗑️  DELETE Cost Request - ID:", id)

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      console.error("❌ Invalid ObjectId format:", id)
      return NextResponse.json(
        { 
          success: false,
          message: "Invalid cost ID format"
        },
        { status: 400 }
      )
    }

    console.log("✅ ObjectId format valid")

    // Delete the cost
    const deleted = await Cost.findByIdAndDelete(id)

    if (!deleted) {
      console.error("❌ Cost not found for deletion - ID:", id)
      return NextResponse.json(
        { 
          success: false,
          message: "Cost not found"
        },
        { status: 404 }
      )
    }

    console.log("✅ Cost deleted successfully - ID:", id)

    return NextResponse.json(
      {
        success: true,
        message: "Cost deleted successfully",
        deletedId: id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("❌ Error deleting cost:", error)

    let errorMessage = "Failed to delete cost"
    let statusCode = 500

    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json(
      { 
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === "development" ? String(error) : undefined
      },
      { status: statusCode }
    )
  }
}