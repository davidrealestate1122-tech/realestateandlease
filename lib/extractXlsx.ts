import * as xlsx from "xlsx"

export function extractXlsxVariablesFromBuffer(buffer: Buffer) {
  const wb = xlsx.read(buffer, { type: "buffer" })
  const vars = new Set<string>()

  wb.SheetNames.forEach((name) => {
    const sheet = wb.Sheets[name]
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 })

    data.forEach((row: any) => {
      row.forEach((cell: any) => {
        if (typeof cell === "string") {
          const matches = cell.match(/{{(.*?)}}/g)
          if (matches) {
            matches.forEach((m: string) =>
              vars.add(m.replace(/{{|}}/g, "").trim())
            )
          }
        }
      })
    })
  })

  return Array.from(vars)
}