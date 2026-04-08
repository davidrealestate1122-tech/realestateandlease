import { connectDB } from "@/lib/db"
import Template from "@/models/Template"
import { NextResponse } from "next/server"

export async function GET() {
  await connectDB()
  const data = await Template.find()
  return NextResponse.json(data)
}