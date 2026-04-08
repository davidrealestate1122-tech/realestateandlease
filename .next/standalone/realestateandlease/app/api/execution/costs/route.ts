import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import ExecutionWorkspace from "@/models/ExecutionWorkspace"
import CostHistory from "@/models/CostHistory"

export async function PUT(req: NextRequest) {
  try {
    console.log("🔵 PUT /api/execution/costs - START")
    
    await connectDB()
    console.log("✅ Database connected")

    const body = await req.json()
    console.log("📥 Request body:", body)
    
    const { workspaceId, executionCosts, changedBy } = body
    console.log("📋 Extracted - workspaceId:", workspaceId, "changedBy:", changedBy)

    // Get workspace with old costs
    const workspace = await ExecutionWorkspace.findById(workspaceId)
    console.log("📦 Found workspace:", workspace?._id)
    
    const oldCosts = workspace?.executionCosts || {}
    console.log("💰 Old costs:", oldCosts)

    // Update workspace
    const updated = await ExecutionWorkspace.findByIdAndUpdate(
      workspaceId,
      { executionCosts },
      { new: true }
    )
    console.log("✅ Workspace updated")

    // Record history for changed costs
    if (changedBy) {
      console.log("📝 Recording history for:", changedBy)
      
      const costFields = ["purchasePrice", "rehabCost", "holdingCosts", "closingCosts"]

      for (const field of costFields) {
        const oldPrice = oldCosts[field] || 0
        const newPrice = executionCosts[field] || 0

        console.log(`  ${field}: ${oldPrice} → ${newPrice}`)

        if (oldPrice !== newPrice) {
          console.log(`  ✏️  CHANGED - Creating history entry`)
          
          const historyEntry = await CostHistory.create({
            workspaceId,
            costType: field,
            oldPrice,
            newPrice,
            changedBy,
          })
          
          console.log(`  ✅ History created:`, historyEntry._id)
        } else {
          console.log(`  ⏭️  No change, skipping`)
        }
      }
    } else {
      console.log("⚠️  No changedBy provided - history not recorded")
    }

    console.log("🟢 PUT /api/execution/costs - SUCCESS")
    return NextResponse.json({ data: updated }, { status: 200 })
  } catch (error) {
    console.error("🔴 PUT /api/execution/costs - ERROR:", error)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}
