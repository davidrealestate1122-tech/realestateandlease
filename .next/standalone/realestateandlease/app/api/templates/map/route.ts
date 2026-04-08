import { connectDB } from "@/lib/db"
import Variable from "@/models/Variable"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  await connectDB()

  const { id, mappedTo } = await req.json()

  const updated = await Variable.findByIdAndUpdate(
    id,
    { mappedTo },
    { new: true }
  )

  return NextResponse.json(updated)
}