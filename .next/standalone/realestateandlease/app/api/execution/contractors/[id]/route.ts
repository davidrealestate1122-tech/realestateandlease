import { connectDB } from "@/lib/db"
import ExecutionContractor from "@/models/ExecutionContractor"
import { NextRequest, NextResponse } from "next/server"

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

    return NextResponse.json({
      success: true,
      data: contractor,
    })
  } catch (error) {
    console.error("GET Contractor Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to fetch contractor" },
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

    // Handle SOW Status Transitions with validation
    if (body.sowStatus && body.sowStatus !== contractor.sowStatus) {
      const allowedTransitions: any = {
        DRAFT: ["SENT"],
        SENT: ["SIGNED", "DRAFT"],
        SIGNED: ["ACTIVE", "SENT"],
        ACTIVE: ["COMPLETED", "SIGNED"],
        COMPLETED: ["ACTIVE"],
        TERMINATED: ["DRAFT"],
      }

      if (!allowedTransitions[contractor.sowStatus]?.includes(body.sowStatus)) {
        return NextResponse.json(
          {
            success: false,
            message: `Cannot transition from ${contractor.sowStatus} to ${body.sowStatus}`,
          },
          { status: 400 }
        )
      }

      contractor.sowStatus = body.sowStatus
    }

    // Handle payment schedule update with custom milestones
    if (body.paymentSchedule && body.paymentSchedule.length > 0) {
      console.log("📝 Updating with custom payment milestones")

      // Validate percentages add up to 100
      const totalPercentage = body.paymentSchedule.reduce(
        (sum: number, m: any) => sum + (m.percentage || 0),
        0
      )

      if (totalPercentage !== 100) {
        return NextResponse.json(
          {
            success: false,
            message: `Payment percentages must add up to 100% (currently ${totalPercentage}%)`,
          },
          { status: 400 }
        )
      }

      // Use the budget from the update if provided, otherwise use existing
      const budgetForCalculation = body.sowBudget || contractor.sowBudget

      // Build updated payment schedule
      const updatedPaymentSchedule = body.paymentSchedule.map((m: any) => {
        // If milestone already has _id, preserve it (it's an existing milestone being updated)
        return {
          ...(m._id && { _id: m._id }),
          milestone: m.milestone || "Payment",
          percentage: m.percentage,
          amount: Math.round((budgetForCalculation * m.percentage) / 100),
          status: m.status || "PENDING",
          paidDate: m.paidDate || undefined,
        }
      })

      contractor.paymentSchedule = updatedPaymentSchedule
    }

    // Update scope items if provided
    if (body.scopeItems) {
      contractor.scopeItems = body.scopeItems
    }

    // Update paid amount
    if (body.sowPaidToDate !== undefined) {
      if (body.sowPaidToDate > contractor.sowBudget) {
        return NextResponse.json(
          {
            success: false,
            message: "Paid amount exceeds budget",
          },
          { status: 400 }
        )
      }
      contractor.sowPaidToDate = body.sowPaidToDate
    }

    // Update other fields (NOW INCLUDING sowBudget - NOT DISABLED)
    if (body.name) contractor.name = body.name
    if (body.email !== undefined) contractor.email = body.email
    if (body.phone !== undefined) contractor.phone = body.phone
    if (body.address !== undefined) contractor.address = body.address
    if (body.state !== undefined) contractor.state = body.state
    if (body.licenseNumber !== undefined) contractor.licenseNumber = body.licenseNumber

    // IMPORTANT: sowBudget is now updatable
    if (body.sowBudget && body.sowBudget > 0) {
      console.log(`💰 Updating budget from $${contractor.sowBudget} to $${body.sowBudget}`)

      // If budget is updated, recalculate payment schedule amounts if not provided
      if (!body.paymentSchedule && contractor.paymentSchedule.length > 0) {
        contractor.paymentSchedule.forEach((payment: any) => {
          payment.amount = Math.round((body.sowBudget * payment.percentage) / 100)
        })
      }

      contractor.sowBudget = body.sowBudget
    }

    if (body.sowStartDate) contractor.sowStartDate = body.sowStartDate
    if (body.sowCompletionDate) contractor.sowCompletionDate = body.sowCompletionDate
    if (body.notes !== undefined) contractor.notes = body.notes
    if (body.isActive !== undefined) contractor.isActive = body.isActive

    await contractor.save()

    return NextResponse.json(
      {
        success: true,
        data: contractor,
      }
    )
  } catch (error) {
    console.error("PATCH Contractor Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to update contractor" },
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
    const params = await context.params

    const contractor = await ExecutionContractor.findByIdAndDelete(params.id)

    if (!contractor) {
      return NextResponse.json(
        { success: false, message: "Contractor not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contractor deleted successfully",
      }
    )
  } catch (error) {
    console.error("DELETE Contractor Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to delete contractor" },
      { status: 500 }
    )
  }
}