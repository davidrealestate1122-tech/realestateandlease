/**
 * FILE: /app/api/execution/contractors/[id]/payment/route.ts
 * FIXED WITH COMPREHENSIVE DEBUGGING
 */

import { connectDB } from "@/lib/db"
import ExecutionContractor from "@/models/ExecutionContractor"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    console.log("\n" + "=".repeat(50))
    console.log("🔵 PATCH Payment API - Request Started")
    console.log("=".repeat(50))

    await connectDB()
    const body = await req.json()
    const params = await context.params
    const contractorId = params.id

    console.log("📝 Request Details:")
    console.log("  - Contractor ID:", contractorId)
    console.log("  - Body:", JSON.stringify(body, null, 2))

    // ===== VALIDATION 1: Contractor ID =====
    if (!contractorId || contractorId.length !== 24) {
      console.log("❌ VALIDATION FAILED: Invalid contractor ID format")
      console.log("  - Expected: 24-character MongoDB ID")
      console.log("  - Received:", contractorId)

      return NextResponse.json(
        {
          success: false,
          message: "Invalid contractor ID format",
          details: {
            expected: "24-character MongoDB ObjectId",
            received: contractorId,
            receivedLength: contractorId ? contractorId.length : 0
          }
        },
        { status: 400 }
      )
    }

    // ===== VALIDATION 2: Fetch Contractor =====
    console.log("🔍 Fetching contractor from database...")
    const contractor = await ExecutionContractor.findById(contractorId)

    if (!contractor) {
      console.log("❌ VALIDATION FAILED: Contractor not found")
      console.log("  - ID:", contractorId)

      return NextResponse.json(
        {
          success: false,
          message: "Contractor not found",
          contractorId: contractorId
        },
        { status: 404 }
      )
    }

    console.log("✅ Contractor found:", contractor.name)
    console.log("  - Current paid: $" + contractor.sowPaidToDate)
    console.log("  - Budget: $" + contractor.sowBudget)
    console.log("  - Payments:", contractor.paymentSchedule.length)

    // ===== VALIDATION 3: Payment ID Required =====
    if (!body.paymentId) {
      console.log("❌ VALIDATION FAILED: Missing paymentId")
      console.log("📋 Available payment IDs:")
      contractor.paymentSchedule.forEach((p: any, idx: any) => {
        console.log(`  ${idx + 1}. ${p._id} - ${p.milestone} (${p.percentage}%) - $${p.amount} - ${p.status}`)
      })

      return NextResponse.json(
        {
          success: false,
          message: "Payment ID required",
          availablePayments: contractor.paymentSchedule.map((p: any) => ({
            id: p._id.toString(),
            milestone: p.milestone,
            percentage: p.percentage,
            amount: p.amount,
            status: p.status
          }))
        },
        { status: 400 }
      )
    }

    console.log("📍 Looking for payment ID:", body.paymentId)

    // ===== VALIDATION 4: Find Payment Milestone =====
    const milestone = contractor.paymentSchedule.id(body.paymentId)

    if (!milestone) {
      console.log("❌ VALIDATION FAILED: Payment milestone not found")
      console.log("📋 Available payment IDs in system:")
      contractor.paymentSchedule.forEach((p: any) => {
        console.log(`  - ${p._id.toString()} (${p.milestone})`)
      })
      console.log("❌ Requested ID does not exist:", body.paymentId)

      return NextResponse.json(
        {
          success: false,
          message: "Payment milestone not found",
          requestedId: body.paymentId,
          availableIds: contractor.paymentSchedule.map((p: any) => p._id.toString())
        },
        { status: 404 }
      )
    }

    console.log("✅ Payment milestone found!")
    console.log(`  - Milestone: ${milestone.milestone}`)
    console.log(`  - Amount: $${milestone.amount}`)
    console.log(`  - Current status: ${milestone.status}`)
    console.log(`  - Percentage: ${milestone.percentage}%`)

    // ===== VALIDATION 5: Status Update =====
    if (body.status === "PAID") {
      console.log("\n📊 Processing PAID status...")
      console.log("  - Current sowPaidToDate: $" + contractor.sowPaidToDate)
      console.log("  - Adding milestone amount: $" + milestone.amount)

      const newTotal = contractor.sowPaidToDate + milestone.amount
      console.log("  - New total would be: $" + newTotal)
      console.log("  - Budget: $" + contractor.sowBudget)
      console.log("  - Remaining budget: $" + (contractor.sowBudget - newTotal))

      // Check if milestone is already paid
      if (milestone.status === "PAID") {
        console.log("⚠️  WARNING: This payment is already marked as PAID")
        console.log("  - Paid date:", milestone.paidDate)

        return NextResponse.json(
          {
            success: false,
            message: "Payment is already marked as PAID",
            paidDate: milestone.paidDate
          },
          { status: 400 }
        )
      }

      // Validate budget
      if (newTotal > contractor.sowBudget) {
        console.log("❌ VALIDATION FAILED: Payment exceeds budget!")
        console.log(`  - Would exceed by: $${newTotal - contractor.sowBudget}`)

        return NextResponse.json(
          {
            success: false,
            message: "Payment exceeds budget",
            details: {
              milestoneAmount: milestone.amount,
              currentPaid: contractor.sowPaidToDate,
              wouldTotal: newTotal,
              budget: contractor.sowBudget,
              exceedsBy: newTotal - contractor.sowBudget
            }
          },
          { status: 400 }
        )
      }

      console.log("✅ Budget check passed!")

      // Update milestone
      milestone.status = "PAID"
      milestone.paidDate = new Date()
      contractor.sowPaidToDate = newTotal

      console.log("  - Updated status: PAID")
      console.log("  - Updated paid date:", milestone.paidDate)
      console.log("  - Updated sowPaidToDate: $" + contractor.sowPaidToDate)
    } else {
      // Update to other status
      console.log("📊 Updating status to:", body.status || "PENDING")
      milestone.status = body.status || "PENDING"
    }

    // ===== SAVE TO DATABASE =====
    console.log("\n💾 Saving contractor to database...")
    await contractor.save()
    console.log("✅ Contractor saved successfully!")

    console.log("\n" + "=".repeat(50))
    console.log("🟢 SUCCESS - Payment updated successfully")
    console.log("=".repeat(50) + "\n")

    return NextResponse.json(
      {
        success: true,
        data: contractor,
        message: "Payment updated successfully",
        updatedPayment: {
          milestone: milestone.milestone,
          status: milestone.status,
          paidDate: milestone.paidDate,
          amount: milestone.amount
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("\n" + "=".repeat(50))
    console.error("🔴 ERROR - Exception caught")
    console.error("=".repeat(50))
    console.error("Error type:", error instanceof Error ? error.constructor.name : "Unknown")
    console.error("Message:", error instanceof Error ? error.message : error)
    console.error("Stack:", error instanceof Error ? error.stack : "No stack trace")
    console.error("=".repeat(50) + "\n")

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update payment",
        error: error instanceof Error ? error.message : "Unknown error",
        errorType: error instanceof Error ? error.constructor.name : "Unknown"
      },
      { status: 500 }
    )
  }
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    console.log("\n" + "=".repeat(50))
    console.log("🔵 GET Payment Schedule - Request Started")
    console.log("=".repeat(50))

    await connectDB()
    const params = await context.params
    const contractorId = params.id

    console.log("🔍 Fetching contractor:", contractorId)

    const contractor = await ExecutionContractor.findById(contractorId)

    if (!contractor) {
      console.log("❌ Contractor not found")

      return NextResponse.json(
        { success: false, message: "Contractor not found" },
        { status: 404 }
      )
    }

    console.log("✅ Contractor found:", contractor.name)
    console.log("📋 Payment Schedule:")
    console.log(`  - Total payments: ${contractor.paymentSchedule.length}`)
    console.log(`  - Total budget: $${contractor.sowBudget}`)
    console.log(`  - Total paid: $${contractor.sowPaidToDate}`)
    console.log(`  - Remaining: $${contractor.sowBudget - contractor.sowPaidToDate}`)
    console.log("\n  Details:")

    contractor.paymentSchedule.forEach((payment:any, idx: any) => {
      console.log(`  ${idx + 1}. ${payment.milestone}`)
      console.log(`     - ID: ${payment._id.toString()}`)
      console.log(`     - Amount: $${payment.amount} (${payment.percentage}%)`)
      console.log(`     - Status: ${payment.status}`)
      if (payment.paidDate) {
        console.log(`     - Paid Date: ${payment.paidDate}`)
      }
    })

    console.log("\n" + "=".repeat(50))
    console.log("🟢 SUCCESS - Payment schedule retrieved")
    console.log("=".repeat(50) + "\n")

    return NextResponse.json(
      {
        success: true,
        data: {
          contractor: {
            id: contractor._id,
            name: contractor.name,
            sowBudget: contractor.sowBudget,
            sowPaidToDate: contractor.sowPaidToDate
          },
          paymentSchedule: contractor.paymentSchedule.map((p: any) => ({
            id: p._id.toString(),
            milestone: p.milestone,
            percentage: p.percentage,
            amount: p.amount,
            status: p.status,
            paidDate: p.paidDate
          }))
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("🔴 GET Payment Error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch payments",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}