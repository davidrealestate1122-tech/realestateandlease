import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import DealData from "@/models/DealData"
 
interface SavePayload {
  templateId: string
  propertyId: string
  variables: Array<{
    _id: string
    variable: string
    value?: string
    source?: string
  }>
}

export async function POST(req: NextRequest) {
  await connectDB()
  try {
    const body: SavePayload = await req.json()
    const { templateId, propertyId, variables } = body
 
    if (!templateId || !propertyId) {
      return NextResponse.json({ message: "templateId and propertyId are required" }, { status: 400 })
    }
 
    // Upsert each variable override — only save non-empty values that are user overrides
    const ops = variables
      .filter(v => v.value !== undefined) // save all including empty (user cleared it)
      .map(v =>
        DealData.findOneAndUpdate(
          { templateId, propertyId, variable: v.variable },
          {
            templateId,
            propertyId,
            variable: v.variable,
            value: v.value ?? "",
            source: "override",
            updatedAt: new Date(),
          },
          { upsert: true, new: true }
        )
      )
 
    await Promise.all(ops)
 
    return NextResponse.json({ success: true, saved: variables.length })
  } catch (err) {
    console.error("[save-values] Error:", err)
    return NextResponse.json({ message: "Failed to save values" }, { status: 500 })
  }
}
 