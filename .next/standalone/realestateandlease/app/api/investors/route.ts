import { connectDB } from "@/lib/db"
import Investor from "@/models/Investor"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  await connectDB()
  const data = await Investor.find()
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  await connectDB()
  const body = await req.json()
  const investor = await Investor.create(body)
  return NextResponse.json(investor)
}