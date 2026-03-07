"use client"

import { useEffect, useState, useCallback } from "react"
import {
  FileText,
  Receipt,
  Trash2,
  Download,
  Loader2,
  Plus,
  X,
  Image,
  FileSignature,
} from "lucide-react"
import ContractorUploadDialog from "./ContractorUploadDialog"
import { is } from "date-fns/locale"

interface ContractorFile {
  _id: string
  fileName: string
  originalName: string
  fileUrl: string
  fileSize: number
  mimeType: string
  fileType: "signed_sow" | "invoice" | "payment_confirmation" | "progress_photo"
  description?: string
  uploadedBy: string
  createdAt: string
}

interface ContractorFileManagerProps {
  contractorId: string
  uploadedBy?: string
}

export default function ContractorFileManager({
  contractorId,
  uploadedBy = "Admin",
}: ContractorFileManagerProps) {
  const fileTypeConfig = {
    signed_sow: {
      label: "Signed SOW",
      icon: <FileSignature className="w-5 h-5 text-indigo-500" />,
      emoji: "📝",
    },
    invoice: {
      label: "Invoice",
      icon: <Receipt className="w-5 h-5 text-green-500" />,
      emoji: "🧾",
    },
    payment_confirmation: {
      label: "Payment Confirmation",
      icon: <FileText className="w-5 h-5 text-emerald-500" />,
      emoji: "✅",
    },
    progress_photo: {
      label: "Progress Photo",
      icon: <Image className="w-5 h-5 text-orange-500" />,
      emoji: "📸",
    },
  }

  const [files, setFiles] = useState<ContractorFile[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const fetchFiles = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const params = new URLSearchParams({ contractorId })
      if (selectedFilter) params.append("fileType", selectedFilter)
      const res = await fetch(`/api/contractor-files/list?${params}`)
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || "Failed to fetch files")
      setFiles(result.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch files")
    } finally {
      setIsLoading(false)
    }
  }, [contractorId, selectedFilter])

  useEffect(() => {
    if (contractorId) fetchFiles()
  }, [fetchFiles])

  const handleUpload = async (
    file: File,
    fileType: string,
    description?: string
  ) => {
    try {
      setIsUploading(true)
      setError(null)
      const formData = new FormData()
      formData.append("file", file)
      formData.append("contractorId", contractorId)
      formData.append("fileType", fileType)
      formData.append("uploadedBy", uploadedBy)
      if (description) formData.append("description", description)
      const res = await fetch("/api/contractor-files/upload", {
        method: "POST",
        body: formData,
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || "Upload failed")
      setFiles((prev) => [result.data, ...prev])
      setIsDialogOpen(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setIsUploading(false)
    }
  }

  const handleDelete = async (fileId: string) => {
    if (!confirm("Delete this file?")) return
    try {
      setError(null)
      const res = await fetch(`/api/contractor-files/${fileId}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error("Delete failed")
      setFiles((prev) => prev.filter((f) => f._id !== fileId))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed")
    }
  }

  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Contractor Documents
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {files.length} file{files.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Upload
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedFilter(null)}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
            selectedFilter === null
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          All
        </button>
        {Object.entries(fileTypeConfig).map(([key, config]) => (
          <button
            key={key}
            onClick={() => setSelectedFilter(key)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              selectedFilter === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {config.emoji} {config.label}
          </button>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-700 dark:text-red-300 flex-1">{error}</p>
          <button onClick={() => setError(null)}>
            <X className="w-4 h-4 text-red-500" />
          </button>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center py-6">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
        </div>
      )}

      {/* File List */}
      {!isLoading && files.length > 0 && (
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {files.map((file) => {
            const config = fileTypeConfig[file.fileType]
            const isPhoto = file.fileType === "progress_photo"

            return (
              <div
                key={file._id}
                className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow"
              >
                {/* Thumbnail or Icon */}
                {isPhoto ? (
                  <img
                    src={file.fileUrl}
                    alt={file.originalName}
                    className="w-12 h-12 object-cover rounded-lg border border-gray-200 dark:border-gray-600 flex-shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0">
                    {config?.icon}
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {file.originalName}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">
                      {config?.label}
                    </span>
                    <span className="text-xs text-gray-400">
                      {(file.fileSize / 1024 / 1024).toFixed(2)} MB
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(file.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {file.description && (
                    <p className="text-xs text-gray-400 mt-0.5 truncate">
                      {file.description}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  {isPhoto && (
                    <button
                      onClick={() => window.open(file.fileUrl, "_blank")}
                      className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      title="View photo"
                    >
                      <Image className="w-4 h-4" />
                    </button>
                  )}
                  
                   <a href={file.fileUrl}
                    download={file.originalName}
                    className="p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleDelete(file._id)}
                    className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && files.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
          <p className="text-3xl mb-2">📁</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">No documents yet</p>
          <p className="text-xs text-gray-400 mt-1">Click Upload to add files</p>
        </div>
      )}

      {/* Upload Dialog */}
      <ContractorUploadDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onUpload={handleUpload}
        isLoading={isUploading}
      />
    </div>
  )
}