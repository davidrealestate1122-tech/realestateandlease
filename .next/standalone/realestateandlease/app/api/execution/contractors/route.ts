import { connectDB } from "@/lib/db"
import ExecutionContractor from "@/models/ExecutionContractor"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()

    // Validate required fields
    if (!body.propertyId && !body.executionWorkspaceId) {
      return NextResponse.json(
        { success: false, message: "Property ID or Workspace ID required" },
        { status: 400 }
      )
    }

    if (!body.name) {
      return NextResponse.json(
        { success: false, message: "Contractor name required" },
        { status: 400 }
      )
    }

    if (!body.sowBudget || body.sowBudget <= 0) {
      return NextResponse.json(
        { success: false, message: "SOW Budget must be greater than 0" },
        { status: 400 }
      )
    }

    // Handle payment schedule
    let paymentSchedule = []

    if (body.paymentSchedule && body.paymentSchedule.length > 0) {
      // Use custom milestones provided by user
      console.log("📝 Using custom payment milestones")

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

      // Build payment schedule with amounts
      paymentSchedule = body.paymentSchedule.map((m: any) => ({
        milestone: m.milestone || "Payment",
        percentage: m.percentage,
        amount: Math.round((body.sowBudget * m.percentage) / 100),
        status: "PENDING",
      }))
    } else {
      // Auto-create default milestones if none provided
      console.log("📝 Using default payment milestones")
      const budget = body.sowBudget
      paymentSchedule = [
        {
          milestone: "First",
          percentage: 20,
          amount: Math.round(budget * 0.2),
          status: "PENDING",
        },
        {
          milestone: "Second",
          percentage: 40,
          amount: Math.round(budget * 0.4),
          status: "PENDING",
        },
        {
          milestone: "Third",
          percentage: 60,
          amount: Math.round(budget * 0.6),
          status: "PENDING",
        },
        {
          milestone: "Fourth",
          percentage: 80,
          amount: Math.round(budget * 0.8),
          status: "PENDING",
        },
        {
          milestone: "Final",
          percentage: 100,
          amount: Math.round(budget * 1.0),
          status: "PENDING",
        },
      ]
    }

    // Initialize scope items from all SOW categories
    let scopeItems = body.scopeItems || []
    if (scopeItems.length === 0) {
      const categories = [
        "DEMO",
        "WINDOWS",
        "LANDSCAPING",
        "EXTERIOR",
        "INTERIOR",
        "FLOORING",
        "DOORS",
        "ELECTRICAL",
        "PLUMBING",
        "HVAC",
        "BATHROOMS",
        "KITCHEN",
        "ROOF",
        "GARAGE",
        "PERMITS",
        "FINAL",
      ]
      scopeItems = categories.map((cat) => ({
        category: cat,
        description: "",
        status: "PENDING",
      }))
    }

    const contractor = await ExecutionContractor.create({
      propertyId: body.propertyId || body.executionWorkspaceId,
      executionWorkspaceId: body.executionWorkspaceId,
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
      state: body.state,
      licenseNumber: body.licenseNumber,
      sowBudget: body.sowBudget || 0,
      sowStartDate: body.sowStartDate,
      sowCompletionDate: body.sowCompletionDate,
      sowStatus: "DRAFT",
      sowPaidToDate: 0,
      paymentSchedule,
      scopeItems,
      notes: body.notes,
      isActive: true,
    })

    return NextResponse.json(
      {
        success: true,
        data: contractor,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("POST Contractor Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to create contractor" },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const propertyId = searchParams.get("propertyId")
    const workspaceId = searchParams.get("workspaceId")

    const query: any = {}

    if (propertyId) {
      query.propertyId = propertyId
    }
    if (workspaceId) {
      query.executionWorkspaceId = workspaceId
    }

    const contractors = await ExecutionContractor.find(query).lean()

    const contractorsWithStatus = contractors.map((contractor: any) => {
      const paymentSchedule = contractor.paymentSchedule ?? []
      const scopeItems = contractor.scopeItems ?? []

      const allPaid =
        paymentSchedule.length > 0 &&
        paymentSchedule.every((item: any) => item.status === "PAID")
   const allTAskDone = scopeItems.length > 0 && scopeItems.every((s: any) => s.status === "COMPLETED")
      const budgetsEqual =
        contractor.sowBudget != null &&
        contractor.sowPaidToDate != null &&
        contractor.sowBudget === contractor.sowPaidToDate

      const sowStatus = allPaid && allTAskDone && budgetsEqual ? "COMPLETED" : "DRAFT"

      return { ...contractor, sowStatus }
    })

    return NextResponse.json({
      success: true,
      data: contractorsWithStatus,
    })
  } catch (error) {
    console.error("GET Contractors Error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to fetch contractors" },
      { status: 500 }
    )
  }
}