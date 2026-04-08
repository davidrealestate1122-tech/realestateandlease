import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Property from "@/models/Property"

export async function GET() {
  await connectDB()
  const data = await Property.find()
  return NextResponse.json(data)
}
