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

export async function POST(req: Request) {
  await connectDB()
  try {
    const { templateId } = await req.json()

    if (templateId) {
      // Return single propertyId for this templateId
      const doc = await DealData.findOne({ templateId }).sort({ _id: 1 })
      return NextResponse.json(doc?.propertyId ?? null)
    }

    // No templateId = return all in insertion order
    const pairs = await DealData.aggregate([
      {
        $group: {
          _id: { templateId: "$templateId", propertyId: "$propertyId" },
          firstSeen: { $first: "$_id" }
        }
      },
      { $sort: { firstSeen: 1 } },
      { $project: { _id: 0, propertyId: "$_id.propertyId" } }
    ])

    const propertyIds = pairs.map((p: { propertyId: string }) => p.propertyId)
    return NextResponse.json(propertyIds)
  } catch (err) {
    return NextResponse.json({ message: "Failed" }, { status: 500 })
  }
}