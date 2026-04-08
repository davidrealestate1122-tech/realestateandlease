import PizZip from "pizzip"
import fs from "fs"

export function extractDocxVariables(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath)  // ← Buffer, not "binary" string
    const zip = new PizZip(content)

    const entry = zip.files["word/document.xml"]
    if (!entry) {
      console.error("DOCX EXTRACT: word/document.xml not found in ZIP")
      return []
    }

    const xml = entry.asText()
    if (!xml) {
      console.error("DOCX EXTRACT: word/document.xml is empty")
      return []
    }

    return extractVariablesFromXml(xml)
  } catch (err) {
    console.error("DOCX EXTRACT ERROR:", err)
    return []
  }
}

/**
 * Reconstructs paragraph text by joining <w:t> runs within each <w:p>,
 * THEN applies the regex. This handles the common case where Word splits
 * a {{variable}} across multiple runs due to autocorrect, spell-check,
 * or incremental typing.
 */
function extractVariablesFromXml(xml: string): string[] {
  const variables = new Set<string>()

  // ✅ Get ALL text nodes in order (not paragraph-based)
  const matches = [...xml.matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g)]

  const fullText = matches.map(m => m[1]).join("")

  // ✅ Now extract variables safely
  const vars = fullText.match(/{{(.*?)}}/g) ?? []

  for (const v of vars) {
    variables.add(v.replace(/{{|}}/g, "").trim())
  }

  return Array.from(variables)
}