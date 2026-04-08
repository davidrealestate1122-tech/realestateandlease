import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Template from "@/models/Template"
import TemplateVariable from "@/models/Variable"
import DealData from "@/models/DealData"
import Document from "@/models/Document"
import Property from "@/models/Property"
import { readFile, writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import createReport from "docx-templates"

export async function POST(req: NextRequest) {
  await connectDB()
  try {
    const { templateId, propertyId } = await req.json()

    if (!templateId || !propertyId) {
      return NextResponse.json({ message: "templateId and propertyId are required" }, { status: 400 })
    }

    // 1. Load template record
    const template = await Template.findById(templateId).lean() as any
    if (!template) {
      return NextResponse.json({ message: "Template not found" }, { status: 404 })
    }

    // 2. Resolve all variables
    const variableDefs = await TemplateVariable.find({ templateId }).lean() as any[]
    const property = await Property.findById(propertyId).lean() as Record<string, any> | null
    const dealFields = property ? flattenObject(property) : {}
    const savedOverrides = await DealData.find({ templateId, propertyId }).lean() as any[]
    const overrideMap: Record<string, string> = {}
    for (const o of savedOverrides) overrideMap[o.variable] = o.value

    const resolved: Record<string, string> = {}
    const missing: string[] = []

    for (const v of variableDefs) {
      const varName = v.variable as string

      if (overrideMap[varName] !== undefined && overrideMap[varName] !== "") {
        resolved[varName] = overrideMap[varName]
        continue
      }

      const dealValue = v.mappedTo ? getNestedValue(dealFields, v.mappedTo) : undefined
      if (dealValue) { resolved[varName] = dealValue; continue }

      const directMatch = getNestedValue(dealFields, varName)
      if (directMatch) { resolved[varName] = directMatch; continue }

      resolved[varName] = ""
      if (v.required) missing.push(varName)
    }

    // 3. Validate required variables
    if (missing.length > 0) {
      return NextResponse.json(
        { message: "Required variables are missing", missingVariables: missing },
        { status: 422 }
      )
    }

    // 4. Load the DOCX file from disk
    const templatePath = template.filePath
      ? template.filePath
      : template.fileUrl
      ? path.join(process.cwd(), "public", template.fileUrl.startsWith("/") ? template.fileUrl.slice(1) : template.fileUrl)
      : null

    console.log("[generate] templatePath:", templatePath)
    if (!templatePath || !existsSync(templatePath)) {
      return NextResponse.json({ message: "Template file not found on disk" }, { status: 404 })
    }

    const fileBuffer = await readFile(templatePath)

    // 5. Render document
    try {
      const generatedBuffer = await createReport({
        template: fileBuffer,
        data: resolved,
        cmdDelimiter: ["{{", "}}"],
        failFast: false,
      }) as Buffer

      // 6. Determine version number
      const existingDocs = await Document.countDocuments({ templateId, propertyId })
      const version = existingDocs + 1

      // 7. Save file to disk
      const outputDir = path.resolve(process.cwd(), "public", "generated", propertyId)
      if (!existsSync(outputDir)) await mkdir(outputDir, { recursive: true })
      const filename = `${template.name ?? "document"}_v${version}_${Date.now()}.docx`
      const outputPath = path.join(outputDir, filename)
      await writeFile(outputPath, generatedBuffer)

      const fileUrl = `/generated/${propertyId}/${filename}`

      // 8. Save document record
      const docRecord = await Document.create({
        templateId,
        propertyId,
        version,
        fileUrl,
        filePath: outputPath,
        resolvedVariables: resolved,
        status: "generated",
        createdAt: new Date(),
      })

      return NextResponse.json({
        success: true,
        document: {
          _id: docRecord._id,
          version: docRecord.version,
          fileUrl: docRecord.fileUrl,
          createdAt: docRecord.createdAt,
          status: docRecord.status,
        },
      })

    } catch (err: any) {
      console.error("[generate] render error:", err)
      return NextResponse.json(
        { message: "Failed to render template", error: err.message },
        { status: 500 }
      )
    }

  } catch (err: any) {
    console.error("[generate] Unexpected error:", err)
    return NextResponse.json({ message: "Internal server error", error: err.message }, { status: 500 })
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