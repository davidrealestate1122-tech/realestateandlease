"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Loader2, Plus, Calendar, AlertCircle, Edit2, Trash2, Clock, Target, CheckCircle2, AlertTriangle, FileText, User, Shield } from "lucide-react"

// Define types
type InspectionType = "ELECTRICAL" | "PLUMBING" | "HVAC" | "STRUCTURAL" | "ROOF" | "FINAL"
type SeverityType = "MINOR" | "MAJOR" | "CRITICAL"

interface Finding {
  item: string
  severity: SeverityType
  resolution: string
  resolved: boolean
}

interface Inspection {
  _id: string
  inspectionType: InspectionType
  inspectionDate: Date
  inspector?: { name: string; license: string }
  passed: boolean
  findings: Finding[]
  overallNotes: string
  executionWorkspaceId: string
}

const inspectionTypeColors: Record<InspectionType, string> = {
  ELECTRICAL: "bg-yellow-500",
  PLUMBING: "bg-cyan-500",
  HVAC: "bg-teal-500",
  STRUCTURAL: "bg-slate-500",
  ROOF: "bg-orange-500",
  FINAL: "bg-emerald-500",
}

const severityConfig: Record<SeverityType, { bg: string; text: string; icon: string; label: string }> = {
  MINOR: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300", icon: "🔹", label: "Minor" },
  MAJOR: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-300", icon: "🔶", label: "Major" },
  CRITICAL: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-300", icon: "🔴", label: "Critical" },
}

export default function InspectionTracker() {
  const params = useParams()
  const workspaceId = params?.propertyId as string

  const [inspections, setInspections] = useState<Inspection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const [formData, setFormData] = useState<{
    inspectionType: InspectionType
    inspectorName: string
    inspectorLicense: string
    notes: string
    passed: boolean
    inspectionDate: string
  }>({
    inspectionType: "ELECTRICAL",
    inspectorName: "",
    inspectorLicense: "",
    notes: "",
    passed: false,
    inspectionDate: new Date().toISOString().split('T')[0],
  })

  const [findingForm, setFindingForm] = useState<{
    inspectionId: string
    item: string
    severity: SeverityType
    resolution: string
  }>({
    inspectionId: "",
    item: "",
    severity: "MINOR",
    resolution: "",
  })
  const [showFindingForm, setShowFindingForm] = useState<string | null>(null)

  const fetchInspections = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/execution/inspections?workspaceId=${workspaceId}`)

      if (res.ok) {
        const result = await res.json()
        setInspections(result.data || [])
      }
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load inspections")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!workspaceId) return
    fetchInspections()
  }, [workspaceId])

  const resetForm = () => {
    setFormData({
      inspectionType: "ELECTRICAL",
      inspectorName: "",
      inspectorLicense: "",
      notes: "",
      passed: false,
      inspectionDate: new Date().toISOString().split('T')[0],
    })
    setEditingId(null)
    setShowForm(false)
  }

  const handleEditInspection = (inspection: Inspection) => {
    setFormData({
      inspectionType: inspection.inspectionType,
      inspectorName: inspection.inspector?.name || "",
      inspectorLicense: inspection.inspector?.license || "",
      notes: inspection.overallNotes,
      passed: inspection.passed,
      inspectionDate: new Date(inspection.inspectionDate).toISOString().split('T')[0],
    })
    setEditingId(inspection._id)
    setShowForm(true)
  }

  const handleSubmitInspection = async () => {
    if (!workspaceId || !formData.inspectionType) {
      setError("Please fill in all required fields")
      return
    }

    try {
      setIsSubmitting(true)
      setError(null)

      const payload = {
        executionWorkspaceId: workspaceId,
        inspectionType: formData.inspectionType,
        inspectionDate: new Date(formData.inspectionDate),
        inspector: {
          name: formData.inspectorName,
          license: formData.inspectorLicense,
        },
        passed: formData.passed,
        overallNotes: formData.notes,
      }

      let res
      if (editingId) {
        // Update existing inspection
        res = await fetch(`/api/execution/inspections/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        // Create new inspection
        res = await fetch("/api/execution/inspections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            findings: [],
          }),
        })
      }

      if (!res.ok) {
        throw new Error(editingId ? "Failed to update inspection" : "Failed to add inspection")
      }

      await fetchInspections()
      resetForm()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save inspection")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteInspection = async (id: string) => {
    if (!confirm("Delete this inspection?")) return

    try {
      const res = await fetch(`/api/execution/inspections/${id}`, {
        method: "DELETE",
      })

      if (!res.ok) {
        throw new Error("Failed to delete inspection")
      }

      setInspections(inspections.filter((i) => i._id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete inspection")
    }
  }

  const handleToggleStatus = async (inspection: Inspection) => {
    try {
      const res = await fetch(`/api/execution/inspections/${inspection._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          passed: !inspection.passed,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to update status")
      }

      await fetchInspections()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update status")
    }
  }

  const handleAddFinding = async () => {
    if (!findingForm.inspectionId || !findingForm.item) return

    try {
      const inspection = inspections.find(i => i._id === findingForm.inspectionId)
      if (!inspection) return

      const res = await fetch(`/api/execution/inspections/${findingForm.inspectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          findings: [
            ...inspection.findings,
            {
              item: findingForm.item,
              severity: findingForm.severity,
              resolution: findingForm.resolution,
              resolved: false,
            },
          ],
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to add finding")
      }

      await fetchInspections()
      setFindingForm({ inspectionId: "", item: "", severity: "MINOR", resolution: "" })
      setShowFindingForm(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add finding")
    }
  }

  const handleToggleFindingResolution = async (inspectionId: string, findingIndex: number) => {
    try {
      const inspection = inspections.find(i => i._id === inspectionId)
      if (!inspection) return

      const updatedFindings = [...inspection.findings]
      updatedFindings[findingIndex] = {
        ...updatedFindings[findingIndex],
        resolved: !updatedFindings[findingIndex].resolved,
      }

      const res = await fetch(`/api/execution/inspections/${inspectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          findings: updatedFindings,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to update finding")
      }

      await fetchInspections()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update finding")
    }
  }

  const handleDeleteFinding = async (inspectionId: string, findingIndex: number) => {
    if (!confirm("Delete this finding?")) return

    try {
      const inspection = inspections.find(i => i._id === inspectionId)
      if (!inspection) return

      const updatedFindings = inspection.findings.filter((_, idx) => idx !== findingIndex)

      const res = await fetch(`/api/execution/inspections/${inspectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          findings: updatedFindings,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to delete finding")
      }

      await fetchInspections()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete finding")
    }
  }

  // Statistics
  const stats = {
    total: inspections.length,
    passed: inspections.filter(i => i.passed).length,
    failed: inspections.filter(i => !i.passed).length,
    totalFindings: inspections.reduce((sum, i) => sum + (i.findings?.length || 0), 0),
    unresolvedFindings: inspections.reduce((sum, i) => 
      sum + (i.findings?.filter(f => !f.resolved).length || 0), 0
    ),
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Inspections</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {stats.total} inspection{stats.total !== 1 ? 's' : ''} • {stats.passed} passed • {stats.failed} failed
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
          disabled={isSubmitting}
        >
          <Plus className="w-5 h-5" />
          {editingId ? "Edit Inspection" : "Add Inspection"}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/40 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">Total Inspections</p>
          </div>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stats.total}</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/40 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <p className="text-xs font-semibold text-green-600 dark:text-green-400">Passed</p>
          </div>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">{stats.passed}</p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/40 rounded-lg p-4 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <p className="text-xs font-semibold text-red-600 dark:text-red-400">Failed</p>
          </div>
          <p className="text-2xl font-bold text-red-700 dark:text-red-300">{stats.failed}</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/40 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">Unresolved Issues</p>
          </div>
          <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">{stats.unresolvedFindings}</p>
        </div>
      </div>

      {/* Add/Edit Inspection Form */}
      {showForm && (
        <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blue-600" />
            {editingId ? "Edit Inspection" : "Record New Inspection"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Inspection Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.inspectionType}
                onChange={(e) => setFormData({ ...formData, inspectionType: e.target.value as InspectionType })}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              >
                <option value="ELECTRICAL">⚡ Electrical</option>
                <option value="PLUMBING">🚰 Plumbing</option>
                <option value="HVAC">❄️ HVAC</option>
                <option value="STRUCTURAL">🏗️ Structural</option>
                <option value="ROOF">🏠 Roof</option>
                <option value="FINAL">✓ Final</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Inspection Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.inspectionDate}
                onChange={(e) => setFormData({ ...formData, inspectionDate: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Inspector Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                value={formData.inspectorName}
                onChange={(e) => setFormData({ ...formData, inspectorName: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                License Number
              </label>
              <input
                type="text"
                placeholder="LIC-123456"
                value={formData.inspectorLicense}
                onChange={(e) => setFormData({ ...formData, inspectorLicense: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={formData.passed === true}
                    onChange={() => setFormData({ ...formData, passed: true })}
                    className="w-4 h-4 text-green-600"
                    disabled={isSubmitting}
                  />
                  <span className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-semibold text-sm">
                    ✓ PASSED
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={formData.passed === false}
                    onChange={() => setFormData({ ...formData, passed: false })}
                    className="w-4 h-4 text-red-600"
                    disabled={isSubmitting}
                  />
                  <span className="px-4 py-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 font-semibold text-sm">
                    ✗ NEEDS WORK
                  </span>
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Overall Notes
              </label>
              <textarea
                placeholder="Add inspection notes, findings, and recommendations..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="flex gap-2 justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={resetForm}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 font-medium disabled:opacity-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitInspection}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 flex items-center gap-2"
              disabled={isSubmitting || !formData.inspectionType || !formData.inspectionDate}
            >
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSubmitting ? "Saving..." : editingId ? "Update Inspection" : "Save Inspection"}
            </button>
          </div>
        </div>
      )}

      {/* Inspections List */}
      {inspections.length > 0 ? (
        <div className="space-y-4">
          {inspections.map((inspection) => (
            <div
              key={inspection._id}
              className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all p-6 space-y-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className={`px-4 py-1.5 rounded-lg text-dark font-bold text-sm ${inspectionTypeColors[inspection.inspectionType]}`}>
                      {inspection.inspectionType}
                    </span>
                    <button
                      onClick={() => handleToggleStatus(inspection)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-semibold cursor-pointer hover:opacity-80 transition-opacity ${
                        inspection.passed
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                          : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                      }`}
                      title="Click to toggle status"
                    >
                      {inspection.passed ? "✓ PASSED" : "✗ NEEDS WORK"}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(inspection.inspectionDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditInspection(inspection)}
                    className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    title="Edit inspection"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteInspection(inspection._id)}
                    className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Delete inspection"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Inspector Info */}
              {inspection.inspector?.name && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <User className="w-4 h-4" />
                  <span>Inspector: <span className="font-medium">{inspection.inspector.name}</span></span>
                  {inspection.inspector.license && (
                    <span className="text-xs">({inspection.inspector.license})</span>
                  )}
                </div>
              )}

              {/* Notes */}
              {inspection.overallNotes && (
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-semibold mb-1 flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    Notes:
                  </p>
                  {inspection.overallNotes}
                </div>
              )}

              {/* Findings */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Findings ({inspection.findings?.length || 0})
                  </p>
                  <button
                    onClick={() => {
                      setFindingForm({ ...findingForm, inspectionId: inspection._id })
                      setShowFindingForm(inspection._id)
                    }}
                    className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    Add Finding
                  </button>
                </div>

                {/* Add Finding Form */}
                {showFindingForm === inspection._id && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg space-y-3 border border-blue-200 dark:border-blue-800">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Issue Description <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Exposed wiring in basement"
                        value={findingForm.item}
                        onChange={(e) => setFindingForm({ ...findingForm, item: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Severity
                        </label>
                        <select
                          value={findingForm.severity}
                          onChange={(e) => setFindingForm({ ...findingForm, severity: e.target.value as SeverityType })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 text-sm"
                        >
                          <option value="MINOR">🔹 Minor</option>
                          <option value="MAJOR">🔶 Major</option>
                          <option value="CRITICAL">🔴 Critical</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Resolution
                        </label>
                        <input
                          type="text"
                          placeholder="How to fix"
                          value={findingForm.resolution}
                          onChange={(e) => setFindingForm({ ...findingForm, resolution: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => {
                          setShowFindingForm(null)
                          setFindingForm({ inspectionId: "", item: "", severity: "MINOR", resolution: "" })
                        }}
                        className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded-lg hover:bg-gray-300 text-xs font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleAddFinding}
                        disabled={!findingForm.item}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs font-medium disabled:opacity-50"
                      >
                        Add Finding
                      </button>
                    </div>
                  </div>
                )}

                {/* Findings List */}
                {inspection.findings && inspection.findings.length > 0 ? (
                  <div className="space-y-2">
                    {inspection.findings.map((finding, idx) => {
                      const config = severityConfig[finding.severity]
                      return (
                        <div key={idx} className={`p-3 rounded-lg ${config.bg} ${config.text} relative group`}>
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              checked={finding.resolved}
                              onChange={() => handleToggleFindingResolution(inspection._id, idx)}
                              className="mt-1 w-4 h-4 cursor-pointer"
                              title="Mark as resolved/unresolved"
                            />
                            <div className="flex-1">
                              <div className="flex items-start gap-2">
                                <span className="text-lg">{config.icon}</span>
                                <div className="flex-1">
                                  <p className={`font-medium ${finding.resolved ? 'line-through opacity-60' : ''}`}>
                                    {finding.item}
                                  </p>
                                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20">
                                    {config.label}
                                  </span>
                                  {finding.resolution && (
                                    <p className="text-xs mt-1 opacity-75">
                                      <span className="font-semibold">Resolution:</span> {finding.resolution}
                                    </p>
                                  )}
                                  {finding.resolved && (
                                    <p className="text-xs mt-1 font-semibold text-green-600 dark:text-green-400">
                                      ✓ Resolved
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleDeleteFinding(inspection._id, idx)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-200 dark:hover:bg-red-900/40 rounded"
                              title="Delete finding"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic text-center py-2">
                    No findings recorded
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <AlertTriangle className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-600 dark:text-gray-400 font-medium">No inspections recorded yet</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Add your first inspection to get started</p>
        </div>
      )}
    </div>
  )
}