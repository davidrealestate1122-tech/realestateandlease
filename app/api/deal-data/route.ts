import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import DealData from "@/models/DealData"

export async function POST(req: NextRequest) {
  await connectDB()

  const { propertyId, data } = await req.json()

  const existing = await DealData.findOne({ propertyId })

  if (existing) {
    existing.data = data
    await existing.save()
    return NextResponse.json(existing)
  }

  const newData = await DealData.create({ propertyId, data })
  return NextResponse.json(newData)
}
export async function GET(req: NextRequest) {
  await connectDB()

  const propertyId = req.nextUrl.searchParams.get("propertyId")

  const data = await DealData.findOne({ propertyId })

  return NextResponse.json(data || {})
}