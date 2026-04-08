"use client"

import { useEffect, useState } from "react"
import {
  File,
  FileText,
  Image,
  Receipt,
  Trash2,
  Download,
  Loader2,
  Plus,
  FileJson,
  Search,
  Grid3x3,
  List,
  Calendar,
  User,
  HardDrive,
  Eye,
  Filter,
} from "lucide-react"
import FileUploadDialog from "./FileUploadDialog"
import { useFileManagement } from "@/lib/useFileManagement"

interface FileManagerProps {
  workspaceId: string
  propertyId: string
  uploadedBy: string
  contractorId?: string
}

const fileTypeIcons: Record<string, React.ReactNode> = {
  pdf: <FileText className="w-5 h-5 text-red-500" />,
  photo: <Image className="w-5 h-5 text-blue-500" />,
  invoice: <Receipt className="w-5 h-5 text-green-500" />,
  contractor_document: <FileJson className="w-5 h-5 text-purple-500" />,
}

const fileTypeLabels: Record<string, string> = {
  pdf: "PDF",
  photo: "Photo",
  invoice: "Invoice",
  contractor_document: "Contractor Doc",
}

const fileTypeColors: Record<string, string> = {
  pdf: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300",
  photo: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300",
  invoice: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300",
  contractor_document: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300",
}

export default function FileManager({
  workspaceId,
  propertyId,
  uploadedBy,
  contractorId,
}: FileManagerProps) {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  const { files, isLoading, error, uploadFile, fetchFiles, deleteFile } =
    useFileManagement()

  useEffect(() => {
    loadFiles()
  }, [selectedFilter])

  const loadFiles = async () => {
    try {
      await fetchFiles({
        workspaceId,
        propertyId,
        fileType: selectedFilter || undefined,
        contractorId: contractorId || undefined,
      })
    } catch (err) {
      console.error("Failed to load files:", err)
    }
  }

  const handleUpload = async (
    file: File,
    fileType: string,
    description?: string
  ) => {
    await uploadFile(
      file,
      fileType,
      workspaceId,
      propertyId,
      uploadedBy,
      description,
      contractorId
    )
    loadFiles()
  }

  const handleDelete = async (fileId: string) => {
    if (confirm("Are you sure you want to delete this file?")) {
      await deleteFile(fileId)
    }
  }

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = fileName
    link.click()
  }

  const filterOptions = [
    { value: "pdf", label: "PDFs", icon: <FileText className="w-4 h-4" />, count: 0 },
    { value: "photo", label: "Photos", icon: <Image className="w-4 h-4" />, count: 0 },
    { value: "invoice", label: "Invoices", icon: <Receipt className="w-4 h-4" />, count: 0 },

  ]

  // Calculate counts
  filterOptions.forEach(option => {
    option.count = files.filter(f => f.fileType === option.value).length
  })

  // Filter files based on search
  const filteredFiles = files.filter(file =>
    file.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Calculate total size
  const totalSize = files.reduce((acc, file) => acc + (file.fileSize || 0), 0)
  const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2)

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 flex items-center gap-2">
              <HardDrive className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              File Management
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Manage all property-related documents and files
            </p>
          </div>

          <button
            onClick={() => setIsUploadDialogOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Upload File
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Total Files</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">{files.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Total Size</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">{totalSizeMB} MB</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Photos</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {files.filter(f => f.fileType === "photo").length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Documents</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {files.filter(f => f.fileType !== "photo").length}
            </p>
          </div>
        </div>
      </div>

      {/* Upload Dialog */}
      <FileUploadDialog
        isOpen={isUploadDialogOpen}
        onClose={() => setIsUploadDialogOpen(false)}
        onUpload={handleUpload}
        isLoading={isLoading}
      />

      {/* Controls Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
        {/* Search and View Toggle */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search files by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
              title="List view"
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
              title="Grid view"
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <button
            onClick={() => setSelectedFilter(null)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedFilter === null
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            All Files
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs">{files.length}</span>
          </button>
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedFilter(option.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedFilter === option.value
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {option.icon}
              {option.label}
              {option.count > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs">{option.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
            <File className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-red-700 dark:text-red-300">Error</p>
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-16">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 dark:text-blue-400 mb-4" />
          <p className="text-gray-600 dark:text-gray-400 font-medium">Loading files...</p>
        </div>
      )}

      {/* File List/Grid */}
      {!isLoading && filteredFiles.length > 0 && (
        <>
          {viewMode === "list" ? (
            <div className="space-y-3">
              {filteredFiles.map((file) => (
                <div
                  key={file._id}
                  className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all"
                >
                  <div className="flex items-center gap-4">
                    {/* File Preview/Icon */}
                    {file.fileType === "photo" ? (
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <img
                          src={file.fileUrl}
                          alt={file.fileName}
                          className="w-full h-full object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors" />
                      </div>
                    ) : (
                      <div className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 flex-shrink-0 ${fileTypeColors[file.fileType] || "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"}`}>
                        {fileTypeIcons[file.fileType] || <File className="w-6 h-6" />}
                      </div>
                    )}

                    {/* File Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-gray-900 dark:text-gray-50 truncate mb-1">
                        {file.fileName}
                      </p>
                      <div className="flex items-center gap-3 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                        <span className={`px-2.5 py-1 rounded-full font-medium border ${fileTypeColors[file.fileType] || "bg-gray-100 dark:bg-gray-700"}`}>
                          {fileTypeLabels[file.fileType]}
                        </span>
                        <span className="flex items-center gap-1">
                          <HardDrive className="w-3 h-3" />
                          {(file.fileSize / 1024 / 1024).toFixed(2)} MB
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {file.uploadedBy}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(file.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                      </div>
                      {file.description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-1">
                          {file.description}
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {file.fileType === "photo" ? (
                        <button
                          onClick={() => window.open(file.fileUrl, "_blank")}
                          className="p-2.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                          title="View full image"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDownload(file.fileUrl, file.fileName)}
                          className="p-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(file._id)}
                        className="p-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredFiles.map((file) => (
                <div
                  key={file._id}
                  className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all"
                >
                  {/* Preview */}
                  <div className="aspect-square relative bg-gray-100 dark:bg-gray-700">
                    {file.fileType === "photo" ? (
                      <img
                        src={file.fileUrl}
                        alt={file.fileName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {fileTypeIcons[file.fileType] || <File className="w-12 h-12 text-gray-400" />}
                      </div>
                    )}
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      {file.fileType === "photo" ? (
                        <button
                          onClick={() => window.open(file.fileUrl, "_blank")}
                          className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Eye className="w-5 h-5 text-gray-900" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDownload(file.fileUrl, file.fileName)}
                          className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Download className="w-5 h-5 text-gray-900" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(file._id)}
                        className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 truncate mb-2">
                      {file.fileName}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span className={`px-2 py-0.5 rounded-full ${fileTypeColors[file.fileType]}`}>
                        {fileTypeLabels[file.fileType]}
                      </span>
                      <span>{(file.fileSize / 1024 / 1024).toFixed(1)} MB</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Empty State */}
      {!isLoading && filteredFiles.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
          <div className="inline-flex p-4 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
            <File className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
            {searchQuery ? "No files found" : "No files uploaded"}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {searchQuery 
              ? "Try adjusting your search terms" 
              : "Upload your first file to get started"}
          </p>
          {!searchQuery && (
            <button
              onClick={() => setIsUploadDialogOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              <Plus className="w-5 h-5" />
              Upload File
            </button>
          )}
        </div>
      )}
    </div>
  )
}