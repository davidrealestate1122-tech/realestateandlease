import { NextResponse } from "next/server"
import Rule from "@/models/Rule"
import {connectDB} from "@/lib/db"
import { NextRequest } from "next/server"

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  await connectDB()
  const { value } = await req.json()

  const { id } = await context.params;
  const rule = await Rule.findById(id)
  if (!rule || rule.locked === false) {
    return NextResponse.json({ error: "Invalid rule" }, { status: 400 })
  }

  rule.value = value
  await rule.save()

  return NextResponse.json(rule)
}
