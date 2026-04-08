import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import DueDiligenceItem from "@/models/DueDiligenceItem"

export async function POST(req: Request) {
  try {
    await connectDB()

    const { itemId, completed } = await req.json()

    if (!itemId) {
      return NextResponse.json(
        { error: "Missing itemId" },
        { status: 400 }
      )
    }

    const updated = await DueDiligenceItem.findByIdAndUpdate(
      itemId,
      { completed },
      { new: true }
    )

    if (!updated) {
      return NextResponse.json(
        { error: "Item not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
