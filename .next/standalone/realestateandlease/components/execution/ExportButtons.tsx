"use client"

import { useState } from "react"
import { Download, FileText, Loader2 } from "lucide-react"
import { 
  exportPropertyPDF, 
  exportPropertyCSV, 
  exportPropertyJSON
} from "@/lib/exportUtils"
import { useParams } from "next/navigation"

interface ExportButtonsProps {
  propertyAddress: string
  propertyData: any
  exportElementId?: string | null
}

export default function ExportButtons({
  propertyAddress = "property",
  propertyData = {},
  exportElementId = null,
}: ExportButtonsProps) {
  const params = useParams()
  const propertyId = params?.propertyId as string

  const [isExporting, setIsExporting] = useState(false)
  const [exportType, setExportType] = useState<"pdf" | "csv" | "json" | null>(null)
  const [showMenu, setShowMenu] = useState(false)

  const fetchContractors = async () => {
    try {
      const res = await fetch(`/api/execution/contractors?propertyId=${propertyId}`)
      const result = await res.json()
      
      if (result.success && result.data) {
        return Array.isArray(result.data) ? result.data : [result.data]
      } else if (Array.isArray(result)) {
        return result
      }
      return []
    } catch (error) {
      console.error("Error fetching contractors:", error)
      return []
    }
  }

  const handleExportPDF = async () => {
    try {
      setIsExporting(true)
      setExportType("pdf")

      const contractors = await fetchContractors()

      await exportPropertyPDF(
        propertyAddress || "property",
        document.body,
        propertyData,
        contractors
      )
    } catch (error) {
      console.error("❌ Error exporting PDF:", error)
      alert(`Failed to export PDF: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsExporting(false)
      setExportType(null)
      setShowMenu(false)
    }
  }

  const handleExportCSV = async () => {
    try {
      setIsExporting(true)
      setExportType("csv")

      const contractors = await fetchContractors()

      exportPropertyCSV(propertyData, propertyAddress || "property", contractors)
    } catch (error) {
      console.error("❌ Error exporting CSV:", error)
      alert(`Failed to export CSV: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsExporting(false)
      setExportType(null)
      setShowMenu(false)
    }
  }

  const handleExportJSON = async () => {
    try {
      setIsExporting(true)
      setExportType("json")

      exportPropertyJSON(propertyData, propertyAddress || "property")
    } catch (error) {
      console.error("❌ Error exporting JSON:", error)
      alert(`Failed to export JSON: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsExporting(false)
      setExportType(null)
      setShowMenu(false)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        title="Download property details as PDF or CSV"
      >
        {isExporting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Exporting {exportType?.toUpperCase()}...
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            Export
          </>
        )}
      </button>

      {showMenu && !isExporting && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left disabled:opacity-50 cursor-pointer"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded">
              <FileText className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                Download PDF
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Full property report
              </p>
            </div>
          </button>

          <button
            onClick={handleExportCSV}
            disabled={isExporting}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left border-t border-gray-200 dark:border-gray-700 disabled:opacity-50 cursor-pointer"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded">
              <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                Download CSV
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Spreadsheet format
              </p>
            </div>
          </button>
        </div>
      )}
    </div>
  )
}