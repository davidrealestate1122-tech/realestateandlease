import { connectDB } from "@/lib/db"
import Variable from "@/models/Variable"
import { NextResponse } from "next/server"

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()

  const { id } = await params // ✅ IMPORTANT FIX

  const vars = await Variable.find({ templateId: id })

  return NextResponse.json(vars)
}