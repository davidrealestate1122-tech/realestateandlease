import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Template from "@/models/Template"
import Variable from "@/models/Variable"
import { extractDocxVariables } from "@/lib/extractDocx"
import { extractXlsxVariablesFromBuffer } from "@/lib/extractXlsx"
import { autoMap } from "@/lib/autoMap"
import fs from "fs"
import path from "path"

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const formData = await req.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const dir = path.join(process.cwd(), "public", "uploads")
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const uploadPath = `/uploads/${Date.now()}-${file.name}`
    const fullPath = path.join(process.cwd(), "public", uploadPath)

    fs.writeFileSync(fullPath, buffer)

    const ext = file.name.split(".").pop()?.toLowerCase()

    let variables: string[] = []

    if (ext === "docx") {
      variables = extractDocxVariables(fullPath)
    } else if (ext === "xlsx") {
      variables = extractXlsxVariablesFromBuffer(buffer)
    } else {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
    }

    console.log("VARIABLES:", variables)

    const template = await Template.create({
      name: file.name,
      fileUrl: uploadPath,
      type: ext,
    })

    const mapped = []
    const unmapped = []

    for (let v of variables) {
      const map = autoMap(v)

      await Variable.create({
        templateId: template._id,
        variable: v,
        mappedTo: map,
      })

      map ? mapped.push(v) : unmapped.push(v)
    }

    return NextResponse.json({ template, variables, mapped, unmapped })

  } catch (err: any) {
    console.error("UPLOAD ERROR:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}