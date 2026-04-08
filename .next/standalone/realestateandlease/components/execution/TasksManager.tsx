"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import {
  AlertCircle,
  CheckCircle2,
  Circle,
  Loader2,
  Plus,
  Trash2,
  Edit2,
  Filter,
  Search,
  Flag,
  Clock,
  User,
  Tag,
  X,
  Check,
  BarChart3,
} from "lucide-react"

interface Task {
  _id: string
  category: string
  title: string
  description?: string
  completed: boolean
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  assignedContractor?: any
  dueDate?: string
  estimatedHours?: number
  actualHours?: number
  inspectionRequired: boolean
  inspectionPassed?: boolean
}

const CATEGORIES = [
  "DEMO", "WINDOWS", "LANDSCAPING", "EXTERIOR", "INTERIOR",
  "FLOORING", "DOORS", "ELECTRICAL", "PLUMBING", "HVAC",
  "BATHROOMS", "KITCHEN", "ROOF", "GARAGE", "PERMITS", "FINAL"
]

const priorityConfig = {
  LOW: { color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300", icon: "📍" },
  MEDIUM: { color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300", icon: "📌" },
  HIGH: { color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300", icon: "🔶" },
  CRITICAL: { color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300", icon: "🔴" },
}

const categoryColors = {
  DEMO: "bg-red-500",
  WINDOWS: "bg-blue-500",
  LANDSCAPING: "bg-green-500",
  EXTERIOR: "bg-amber-500",
  INTERIOR: "bg-purple-500",
  FLOORING: "bg-orange-500",
  DOORS: "bg-indigo-500",
  ELECTRICAL: "bg-yellow-500",
  PLUMBING: "bg-cyan-500",
  HVAC: "bg-teal-500",
  BATHROOMS: "bg-pink-500",
  KITCHEN: "bg-rose-500",
  ROOF: "bg-slate-500",
  GARAGE: "bg-stone-500",
  PERMITS: "bg-lime-500",
  FINAL: "bg-emerald-500",
}

export default function TasksManager() {
  const params = useParams()
  const workspaceId = params?.propertyId as string

  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<"ALL" | "COMPLETED" | "PENDING">("ALL")
  const [categoryFilter, setCategoryFilter] = useState<string>("")
  const [priorityFilter, setPriorityFilter] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const [formData, setFormData] = useState({
    category: "DEMO",
    title: "",
    description: "",
    priority: "MEDIUM",
    dueDate: "",
    estimatedHours: 0,
  })

  useEffect(() => {
    if (!workspaceId) return

    const fetchTasks = async () => {
      try {
        setLoading(true)
        const query = new URLSearchParams({
          workspaceId: workspaceId,
          ...(categoryFilter && { category: categoryFilter }),
        })

        const res = await fetch(`/api/execution/tasks?${query}`)
        const result = await res.json()

        if (result.success) {
          setTasks(result.data)
        }
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch tasks")
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [workspaceId, categoryFilter])

  const handleSaveTask = async () => {
    try {
      const url = editingTask
        ? `/api/execution/tasks/${editingTask._id}`
        : "/api/execution/tasks"

      const method = editingTask ? "PATCH" : "POST"

      const payload = editingTask
        ? formData
        : { executionWorkspaceId: workspaceId, ...formData }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        const result = await res.json()

        if (editingTask) {
          setTasks(tasks.map((t) => (t._id === editingTask._id ? result.data : t)))
        } else {
          setTasks([...tasks, result.data || result])
        }

        resetForm()
        setShowForm(false)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save task")
    }
  }

  const handleToggleComplete = async (taskId: string) => {
    try {
      const task = tasks.find((t) => t._id === taskId)
      if (!task) return

      const res = await fetch(`/api/execution/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      })

      if (res.ok) {
        const result = await res.json()
        setTasks(tasks.map((t) => (t._id === taskId ? result.data : t)))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update task")
    }
  }

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm("Delete this task?")) return

    try {
      const res = await fetch(`/api/execution/tasks/${taskId}`, {
        method: "DELETE",
      })

      if (res.ok) {
        setTasks(tasks.filter((t) => t._id !== taskId))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete task")
    }
  }

  const resetForm = () => {
    setFormData({
      category: "DEMO",
      title: "",
      description: "",
      priority: "MEDIUM",
      dueDate: "",
      estimatedHours: 0,
    })
    setEditingTask(null)
  }

  const startEdit = (task: Task) => {
    setEditingTask(task)
    setFormData({
      category: task.category,
      title: task.title,
      description: task.description || "",
      priority: task.priority,
      dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
      estimatedHours: task.estimatedHours || 0,
    })
    setShowForm(true)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED" && !task.completed) return false
    if (filter === "PENDING" && task.completed) return false
    if (priorityFilter && task.priority !== priorityFilter) return false
    if (
      searchTerm &&
      !task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false
    return true
  })

  const completedCount = tasks.filter((t) => t.completed).length
  const completionPercentage = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Execution Tasks
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {completedCount} of {tasks.length} tasks completed
            </p>
          </div>
          <button
            onClick={() => {
              resetForm()
              setShowForm(true)
            }}
            className="px-4 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            New Task
          </button>
        </div>

        {/* Progress Visualization */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/40 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Progress</span>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{completionPercentage.toFixed(0)}%</span>
          </div>
          <div className="w-full h-3 bg-white dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex gap-2 flex-wrap">
          {(["ALL", "COMPLETED", "PENDING"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {f === "ALL" ? "All Tasks" : f}
            </button>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
          >
            <option value="">All Priorities</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
            <option value="CRITICAL">Critical</option>
          </select>
        </div>
      </div>

      {/* Task Form */}
      {showForm && (
        <div className="p-6 bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-lg space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2">
            <Edit2 className="w-5 h-5 text-blue-600" />
            {editingTask ? "Edit Task" : "Create New Task"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                <Tag className="w-4 h-4" />
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                <Flag className="w-4 h-4" />
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="CRITICAL">Critical</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Task Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="e.g., Install new electrical panel"
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Add details about the task..."
                rows={3}
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Due Date
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                <BarChart3 className="w-4 h-4" />
                Estimated Hours
              </label>
              <input
                type="number"
                value={formData.estimatedHours}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    estimatedHours: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50"
              />
            </div>
          </div>

          <div className="flex gap-2 justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setShowForm(false)
                resetForm()
              }}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveTask}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              {editingTask ? "Update Task" : "Create Task"}
            </button>
          </div>
        </div>
      )}

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {filter === "ALL" ? "No tasks yet" : `No ${filter.toLowerCase()} tasks`}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Create your first task to get started</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task._id}
              className={`p-4 border-2 rounded-xl transition-all hover:shadow-lg ${
                task.completed
                  ? "bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/30 border-emerald-300 dark:border-emerald-700"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox with animation */}
                <button
                  onClick={() => handleToggleComplete(task._id)}
                  className="mt-1 flex-shrink-0 focus:outline-none transition-transform hover:scale-125 active:scale-95"
                >
                  {task.completed ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse" style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
                      <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400 relative z-10" />
                    </div>
                  ) : (
                    <Circle className="w-7 h-7 text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  {/* Task Header */}
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3
                      className={`font-semibold text-base transition-all ${
                        task.completed
                          ? "text-emerald-700 dark:text-emerald-400 line-through"
                          : "text-gray-900 dark:text-gray-50"
                      }`}
                    >
                      {task.title}
                    </h3>
                    
                    {/* Status Badge */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                        task.completed
                          ? "bg-emerald-500 dark:bg-emerald-600"
                          : "bg-blue-500 dark:bg-blue-600"
                      }`}
                    >
                      {task.completed ? "✓ Done" : "In Progress"}
                    </span>
                  </div>

                  {/* Tags Row */}
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    {/* Category Badge */}
                    <span
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-white ${
                        categoryColors[task.category as keyof typeof categoryColors]
                      }`}
                    >
                      {task.category}
                    </span>

                    {/* Priority Badge */}
                    <span
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                        priorityConfig[task.priority].color
                      }`}
                    >
                      <span>{priorityConfig[task.priority].icon}</span>
                      {task.priority}
                    </span>

                    {/* Inspection Badge */}
                    {task.inspectionRequired && (
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                        🔍 Inspection Req.
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {task.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                      {task.description}
                    </p>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 flex-wrap text-xs text-gray-500 dark:text-gray-400">
                    {task.dueDate && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    )}
                    {task.estimatedHours && (
                      <span className="flex items-center gap-1">
                        <BarChart3 className="w-4 h-4" />
                        {task.estimatedHours}h est.
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1 flex-shrink-0">
                  <button
                    onClick={() => startEdit(task)}
                    className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    title="Edit task"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}