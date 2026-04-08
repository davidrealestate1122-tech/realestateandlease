import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Profile from "@/models/Profile"
 
export async function GET(req: NextRequest) {
  await connectDB()
  try {
    const { searchParams } = new URL(req.url)
    const type = searchParams.get("type")
    const filter = type ? { type } : {}
    const profiles = await Profile.find(filter).sort({ createdAt: -1 }).lean()
    return NextResponse.json(profiles)
  } catch (err) {
    console.error("[profiles GET]", err)
    return NextResponse.json({ message: "Failed to fetch profiles" }, { status: 500 })
  }
}
 
export async function POST(req: NextRequest) {
  await connectDB()
  try {
    const body = await req.json()
    const { name, type, data } = body
 
    if (!name?.trim()) {
      return NextResponse.json({ message: "name is required" }, { status: 400 })
    }
    if (!["investor", "lender", "contractor", "company"].includes(type)) {
      return NextResponse.json({ message: "Invalid type" }, { status: 400 })
    }
 
    const profile = await Profile.create({
      name: name.trim(),
      type,
      data: data ?? {},
      createdAt: new Date(),
    })
 
    return NextResponse.json(profile, { status: 201 })
  } catch (err) {
    console.error("[profiles POST]", err)
    return NextResponse.json({ message: "Failed to create profile" }, { status: 500 })
  }
}