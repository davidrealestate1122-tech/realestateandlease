import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Template from "@/models/Template"
import TemplateVariable from "@/models/Variable"
import DealData from "@/models/DealData"
import Property from "@/models/Property"

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()
  const { id: templateId } = await params
  const { searchParams } = new URL(req.url)
  const propertyId = searchParams.get("propertyId")

  if (!propertyId) {
    return NextResponse.json({ message: "propertyId is required" }, { status: 400 })
  }

  try {
    const variableDefs = await TemplateVariable.find({ templateId }).lean()

    const property = await Property.findById(propertyId).lean() as Record<string, any> | null
    const dealFields: Record<string, string> = property
      ? flattenObject(property)
      : {}

    const savedOverrides = await DealData.find({ templateId, propertyId }).lean()
    const overrideMap: Record<string, { value: string; source: string }> = {}
    for (const o of savedOverrides) {
      overrideMap[o.variable] = { value: o.value, source: o.source ?? "override" }
    }

    const resolved = variableDefs.map((v: any) => {
      const varName = v.variable
      const mappedTo = v.mappedTo ?? ""

      if (overrideMap[varName]) {
        return {
          _id: v._id,
          variable: varName,
          mappedTo,
          required: v.required ?? false,
          value: overrideMap[varName].value,
          source: overrideMap[varName].source,
        }
      }

      if (mappedTo) {
        const dealValue = getNestedValue(dealFields, mappedTo)
        if (dealValue) {
          return {
            _id: v._id,
            variable: varName,
            mappedTo,
            required: v.required ?? false,
            value: String(dealValue),
            source: "deal",
          }
        }
      }

      const directMatch = getNestedValue(dealFields, varName)
      if (directMatch) {
        return {
          _id: v._id,
          variable: varName,
          mappedTo,
          required: v.required ?? false,
          value: String(directMatch),
          source: "database",
        }
      }

      return {
        _id: v._id,
        variable: varName,
        mappedTo,
        required: v.required ?? false,
        value: "",
        source: "",
      }
    })

    return NextResponse.json(resolved)
  } catch (err) {
    console.error("[values] Error resolving variables:", err)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

function flattenObject(obj: Record<string, any>, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {}
  for (const key of Object.keys(obj)) {
    if (key.startsWith("_") || key === "__v") continue
    const val = obj[key]
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (val !== null && typeof val === "object" && !Array.isArray(val) && !(val instanceof Date)) {
      Object.assign(result, flattenObject(val, fullKey))
    } else if (val !== null && val !== undefined) {
      result[fullKey] = String(val)
      result[key] = String(val)
    }
  }
  return result
}

function getNestedValue(flat: Record<string, string>, key: string): string | undefined {
  const lower = key.toLowerCase()
  for (const k of Object.keys(flat)) {
    if (k.toLowerCase() === lower) return flat[k]
  }
  const normalized = lower.replace(/[_\s-]/g, "")
  for (const k of Object.keys(flat)) {
    if (k.toLowerCase().replace(/[_\s-]/g, "") === normalized) return flat[k]
  }
  return undefined
}