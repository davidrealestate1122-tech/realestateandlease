import { useState, useCallback } from "react"

export function useFileManagement() {
  const [files, setFiles] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Upload file
  const uploadFile = useCallback(
    async (
      file: File,
      fileType: string,
      workspaceId: string,
      propertyId: string,
      uploadedBy: string,
      description?: string,
      contractorId?: string
    ) => {
      try {
        setIsLoading(true)
        setError(null)

        const formData = new FormData()
        formData.append("file", file)
        formData.append("fileType", fileType)
        formData.append("workspaceId", workspaceId)
        formData.append("propertyId", propertyId)
        formData.append("uploadedBy", uploadedBy)
        if (description) formData.append("description", description)
        if (contractorId) formData.append("contractorId", contractorId)

        console.log("📤 Uploading file:", file.name)

        const res = await fetch("/api/files/upload", {
          method: "POST",
          body: formData,
        })

        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || "Upload failed")
        }

        const data = await res.json()
        setFiles((prev) => [data.data, ...prev])

        console.log("✅ File uploaded successfully")
        return data.data
      } catch (err) {
        const message = err instanceof Error ? err.message : "Upload failed"
        setError(message)
        throw err
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  // Fetch files
  const fetchFiles = useCallback(
    async (filters: {
      workspaceId?: string
      propertyId?: string
      fileType?: string
      contractorId?: string
    }) => {
      try {
        setIsLoading(true)
        setError(null)

        const params = new URLSearchParams()
        if (filters.workspaceId) params.append("workspaceId", filters.workspaceId)
        if (filters.propertyId) params.append("propertyId", filters.propertyId)
        if (filters.fileType) params.append("fileType", filters.fileType)
        if (filters.contractorId) params.append("contractorId", filters.contractorId)

        console.log("🔍 Fetching files...")

        const res = await fetch(`/api/files/list?${params}`)

        if (!res.ok) throw new Error("Failed to fetch files")

        const data = await res.json()
        setFiles(data.data)

        console.log(`✅ Fetched ${data.count} files`)
        return data.data
      } catch (err) {
        const message = err instanceof Error ? err.message : "Fetch failed"
        setError(message)
        throw err
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  // Update file
  const updateFile = useCallback(
    async (
      fileId: string,
      updates: { description?: string; tags?: string[] }
    ) => {
      try {
        setIsLoading(true)
        setError(null)

        console.log("✏️ Updating file:", fileId)

        const res = await fetch(`/api/files/${fileId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updates),
        })

        if (!res.ok) throw new Error("Update failed")

        const data = await res.json()

        setFiles((prev) =>
          prev.map((f) => (f._id === fileId ? data.data : f))
        )

        console.log("✅ File updated")
        return data.data
      } catch (err) {
        const message = err instanceof Error ? err.message : "Update failed"
        setError(message)
        throw err
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  // Delete file
  const deleteFile = useCallback(async (fileId: string) => {
    try {
      setIsLoading(true)
      setError(null)

      console.log("🗑️ Deleting file:", fileId)

      const res = await fetch(`/api/files/${fileId}`, {
        method: "DELETE",
      })

      if (!res.ok) throw new Error("Delete failed")

      setFiles((prev) => prev.filter((f) => f._id !== fileId))

      console.log("✅ File deleted")
    } catch (err) {
      const message = err instanceof Error ? err.message : "Delete failed"
      setError(message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    files,
    isLoading,
    error,
    uploadFile,
    fetchFiles,
    updateFile,
    deleteFile,
  }
}