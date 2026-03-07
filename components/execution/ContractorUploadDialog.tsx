"use client"

import { useState } from "react"
import { Loader2, X } from "lucide-react"

const fileTypeConfig = {
  signed_sow: {
    label: "Signed SOW",
    emoji: "📝",
    accept: ".pdf,.doc,.docx",
  },
  invoice: {
    label: "Invoice",
    emoji: "🧾",
    accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  },
  payment_confirmation: {
    label: "Payment Confirmation",
    emoji: "✅",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  progress_photo: {
    label: "Progress Photo",
    emoji: "📸",
    accept: "image/*",
  },
}

interface ContractorUploadDialogProps {
  isOpen: boolean
  onClose: () => void
  onUpload: (file: File, fileType: string, description?: string) => Promise<void>
  isLoading: boolean
}

export default function ContractorUploadDialog({
  isOpen,
  onClose,
  onUpload,
  isLoading,
}: ContractorUploadDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileType, setFileType] = useState<string>("signed_sow")
  const [description, setDescription] = useState("")
  const [dragOver, setDragOver] = useState(false)

  const handleSubmit = async () => {
    if (!selectedFile) return
    await onUpload(selectedFile, fileType, description || undefined)
    // reset
    setSelectedFile(null)
    setDescription("")
    setFileType("signed_sow")
  }

  const handleClose = () => {
    setSelectedFile(null)
    setDescription("")
    setFileType("signed_sow")
    setDragOver(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md">

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Upload Contractor Document
          </h3>
          <button
            onClick={handleClose}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-5 space-y-4">

          {/* File Type Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Document Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(fileTypeConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => {
                    setFileType(key)
                    setSelectedFile(null)
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition-all text-left ${
                    fileType === key
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                      : "border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"
                  }`}
                >
                  <span className="text-lg">{config.emoji}</span>
                  {config.label}
                </button>
              ))}
            </div>
          </div>

          {/* Drop Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragOver(false)
              const file = e.dataTransfer.files[0]
              if (file) setSelectedFile(file)
            }}
            onClick={() => document.getElementById("contractor-file-input")?.click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
              dragOver
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-[1.02]"
                : selectedFile
                ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                : "border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            }`}
          >
            <input
              id="contractor-file-input"
              type="file"
              className="hidden"
              accept={fileTypeConfig[fileType as keyof typeof fileTypeConfig]?.accept || "*"}
              onChange={(e) => e.target.files?.[0] && setSelectedFile(e.target.files[0])}
            />
            {selectedFile ? (
              <div>
                <p className="text-3xl mb-2">✅</p>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 truncate px-4">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedFile(null) }}
                  className="mt-2 text-xs text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div>
                <p className="text-3xl mb-2">📁</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Drop file here or{" "}
                  <span className="text-blue-600 dark:text-blue-400">browse</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Accepted: {fileTypeConfig[fileType as keyof typeof fileTypeConfig]?.accept}
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Description{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Invoice #1042, Week 3 progress..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 justify-end p-5 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleClose}
            disabled={isLoading}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedFile || isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Upload"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}