import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Profile from "@/models/Profile"
import mongoose from "mongoose"

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()
  const { id } = await params
  try {
    const profile = await Profile.findById(id).lean()
    if (!profile) return NextResponse.json({ message: "Not found" }, { status: 404 })
    return NextResponse.json(profile)
  } catch {
    return NextResponse.json({ message: "Failed to fetch profile" }, { status: 500 })
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()
  const { id } = await params
  if (!mongoose.Types.ObjectId.isValid(id))
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 })
  try {
    const { name, type, data } = await req.json()
    const profile = await Profile.findByIdAndUpdate(
      id,
      { name, type, data, updatedAt: new Date() },
      { new: true, runValidators: true }
    )
    if (!profile) return NextResponse.json({ message: "Not found" }, { status: 404 })
    return NextResponse.json(profile)
  } catch (err) {
    console.error("[profiles PUT]", err)
    return NextResponse.json({ message: "Failed to update profile" }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()
  const { id } = await params
  try {
    await Profile.findByIdAndDelete(id)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ message: "Failed to delete profile" }, { status: 500 })
  }
}