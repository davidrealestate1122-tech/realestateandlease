"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Loader2, Plus, Calendar, AlertCircle, Edit2, Trash2, Clock, Target, CheckCircle2, AlertTriangle } from "lucide-react"

interface Milestone {
  name: string
  plannedDate: Date
  actualDate?: Date
  status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "DELAYED"
}

interface Timeline {
  _id: string
  projectStartDate: Date
  projectTargetDate: Date
  projectActualDate?: Date
  milestones: Milestone[]
  daysOverBudget: number
  executionWorkspaceId: string
}

const milestoneStatusConfig = {
  SCHEDULED: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300", icon: "📅", label: "Scheduled" },
  IN_PROGRESS: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-300", icon: "⚙️", label: "In Progress" },
  COMPLETED: { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-700 dark:text-emerald-300", icon: "✓", label: "Completed" },
  DELAYED: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-300", icon: "⚠️", label: "Delayed" },
}

export default function TimelineTracker() {
  const params = useParams()
  const workspaceId = params?.propertyId as string

  const [timeline, setTimeline] = useState<Timeline | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    plannedDate: "",
    status: "SCHEDULED" as const,
  })

  const fetchTimeline = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/execution/timeline?workspaceId=${workspaceId}`)
      
      if (!res.ok) {
        if (res.status === 404) {
          const createRes = await fetch("/api/execution/timeline", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              executionWorkspaceId: workspaceId,
              projectStartDate: new Date(),
              projectTargetDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            }),
          })
          
          if (createRes.ok) {
            const newTimeline = await createRes.json()
            setTimeline(newTimeline)
          }
        } else {
          throw new Error("Failed to fetch timeline")
        }
      } else {
        const result = await res.json()
        setTimeline(result.data)
      }
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load timeline")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!workspaceId) return
    fetchTimeline()
  }, [workspaceId])

  const handleAddMilestone = async () => {
    if (!timeline || !formData.name || !formData.plannedDate) {
      setError("Please fill in all required fields")
      return
    }

    try {
      setIsSubmitting(true)
      setError(null)
      
      const res = await fetch(`/api/execution/timeline/${timeline._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          milestones: [
            ...timeline.milestones,
            {
              name: formData.name,
              plannedDate: new Date(formData.plannedDate),
              status: formData.status,
            },
          ],
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to add milestone")
      }

      const updated = await res.json()
      setTimeline(updated.data)
      setFormData({ name: "", plannedDate: "", status: "SCHEDULED" })
      setShowForm(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add milestone")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteMilestone = async (index: number) => {
    if (!timeline) return

    if (!confirm("Are you sure you want to delete this milestone?")) {
      return
    }

    try {
      setError(null)
      const newMilestones = timeline.milestones.filter((_, i) => i !== index)
      
      // Use PUT to update milestones array
      const res = await fetch(`/api/execution/timeline/${timeline._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ milestones: newMilestones }),
      })

      if (!res.ok) {
        throw new Error("Failed to delete milestone")
      }

      const updated = await res.json()
      setTimeline(updated.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete milestone")
    }
  }

  const handleUpdateMilestoneStatus = async (index: number, newStatus: Milestone["status"]) => {
    if (!timeline) return

    try {
      setError(null)
      const updatedMilestones = [...timeline.milestones]
      updatedMilestones[index] = {
        ...updatedMilestones[index],
        status: newStatus,
        ...(newStatus === "COMPLETED" && !updatedMilestones[index].actualDate 
          ? { actualDate: new Date() } 
          : {}
        ),
      }

      const res = await fetch(`/api/execution/timeline/${timeline._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ milestones: updatedMilestones }),
      })

      if (!res.ok) {
        throw new Error("Failed to update milestone")
      }

      const updated = await res.json()
      setTimeline(updated.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update milestone")
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
      </div>
    )
  }

  if (!timeline) {
    return (
      <div className="text-center py-12">
        <Calendar className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-400">No timeline data</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Project Timeline</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{timeline.milestones.length} milestones</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          <Plus className="w-5 h-5" />
          Add Milestone
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Project Duration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/40 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
            <p className="text-xs font-semibold text-green-600 dark:text-green-400">Start Date</p>
          </div>
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            {new Date(timeline.projectStartDate).toLocaleDateString()}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/40 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">Target Completion</p>
          </div>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {new Date(timeline.projectTargetDate).toLocaleDateString()}
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/40 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">Duration</p>
          </div>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {Math.ceil(
              (new Date(timeline.projectTargetDate).getTime() - new Date(timeline.projectStartDate).getTime()) /
              (1000 * 60 * 60 * 24)
            )}{" "}
            days
          </p>
        </div>
      </div>

      {/* Add Milestone Form */}
      {showForm && (
        <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Create New Milestone
          </h3>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Milestone Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Electrical Inspection"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Planned Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.plannedDate}
                onChange={(e) => setFormData({ ...formData, plannedDate: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isSubmitting}
              >
                <option value="SCHEDULED">Scheduled</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="DELAYED">Delayed</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setShowForm(false)
                setFormData({ name: "", plannedDate: "", status: "SCHEDULED" })
                setError(null)
              }}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={handleAddMilestone}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              disabled={isSubmitting || !formData.name || !formData.plannedDate}
            >
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSubmitting ? "Adding..." : "Add Milestone"}
            </button>
          </div>
        </div>
      )}

      {/* Milestones Timeline */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-blue-600" />
          Milestones
        </h3>

        {timeline.milestones.length > 0 ? (
          <div className="space-y-3">
            {timeline.milestones.map((milestone, index) => {
              const config = milestoneStatusConfig[milestone.status]
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all hover:shadow-lg ${config.bg} border-opacity-50`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h4 className="font-bold text-gray-900 dark:text-gray-50">{milestone.name}</h4>
                        <select
  value={milestone.status}
  onChange={(e) => handleUpdateMilestoneStatus(index, e.target.value as Milestone["status"])}
  className={`px-3 py-1 rounded-full text-xs font-bold ${config.bg} ${config.text} border-0 cursor-pointer hover:opacity-80 [&>option]:bg-gray-900 [&>option]:text-gray-100 [&>option]:font-medium`}
>
  <option value="SCHEDULED">📅 Scheduled</option>
  <option value="IN_PROGRESS">⚙️ In Progress</option>
  <option value="COMPLETED">✓ Completed</option>
  <option value="DELAYED">⚠️ Delayed</option>
</select>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Planned: {new Date(milestone.plannedDate).toLocaleDateString()}
                        </span>
                        {milestone.actualDate && (
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            Actual: {new Date(milestone.actualDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteMilestone(index)}
                      className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      title="Delete milestone"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">No milestones yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  )
}