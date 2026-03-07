"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import {
  Loader2,
  Plus,
  Edit2,
  Trash2,
  DollarSign,
  User,
  Building2,
  Phone,
  Mail,
  Badge,
  CalendarDays,
  Briefcase,
  ChevronDown,
  ChevronUp,
  X,
  CheckCircle2,
  TrendingUp,
  ClipboardList,
  MapPin,
  Calendar,
  AlertTriangle,
  TrendingDown,
} from "lucide-react"
import ContractorFileManager from "./ContractorFileManager"

interface ScopeItem {
  _id?: string
  category: string
  description?: string
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED"
}

interface PaymentMilestone {
  _id?: string
  milestone: string
  percentage: number
  amount: number
  status: "PENDING" | "INVOICED" | "PAID"
  paidDate?: string | null
}

interface Contractor {
  _id: string
  name: string
  email?: string | null
  phone?: string | null
  address?: string | null
  state?: string | null
  licenseNumber?: string | null
  sowStatus: "DRAFT" | "SENT" | "SIGNED" | "ACTIVE" | "COMPLETED" | "TERMINATED"
  sowBudget: number
  sowPaidToDate: number
  sowStartDate?: string | null
  sowCompletionDate?: string | null
  scopeItems: ScopeItem[]
  paymentSchedule: PaymentMilestone[]
  notes?: string | null
  isActive: boolean
}

const sowStatusConfig = {
  DRAFT: { bg: "bg-slate-50 dark:bg-slate-900/30", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-700", icon: "📋", label: "Draft" },
  SENT: { bg: "bg-blue-50 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-700", icon: "📤", label: "Sent" },
  SIGNED: { bg: "bg-emerald-50 dark:bg-emerald-900/30", text: "text-emerald-700 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-700", icon: "✍️", label: "Signed" },
  ACTIVE: { bg: "bg-amber-50 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-300", border: "border-amber-200 dark:border-amber-700", icon: "⚙️", label: "Active" },
  COMPLETED: { bg: "bg-green-50 dark:bg-green-900/30", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-700", icon: "✅", label: "Completed" },
  TERMINATED: { bg: "bg-red-50 dark:bg-red-900/30", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-700", icon: "⛔", label: "Terminated" },
}

const paymentStatusConfig = {
  PENDING: { bg: "bg-slate-100 dark:bg-slate-700", text: "text-slate-700 dark:text-slate-300", icon: "⏳", label: "Pending" },
  INVOICED: { bg: "bg-orange-100 dark:bg-orange-700", text: "text-orange-700 dark:text-orange-300", icon: "📄", label: "Invoiced" },
  PAID: { bg: "bg-emerald-100 dark:bg-emerald-700", text: "text-emerald-700 dark:text-emerald-300", icon: "✓", label: "Paid" },
}

const scopeStatusConfig = {
  PENDING: { bg: "bg-slate-100 dark:bg-slate-700", text: "text-slate-700 dark:text-slate-300", icon: "⏳", label: "Pending" },
  IN_PROGRESS: { bg: "bg-blue-100 dark:bg-blue-700", text: "text-blue-700 dark:text-blue-300", icon: "🔄", label: "In Progress" },
  COMPLETED: { bg: "bg-emerald-100 dark:bg-emerald-700", text: "text-emerald-700 dark:text-emerald-300", icon: "✓", label: "Completed" },
}

const emptyMilestone = () => ({ milestone: "", percentage: 0 })

export default function ContractorsManager() {
  const params = useParams()
  const workspaceId = params?.propertyId as string

  const [contractors, setContractors] = useState<Contractor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [editingContractor, setEditingContractor] = useState<Contractor | null>(null)
  const [expandedContractors, setExpandedContractors] = useState<Set<string>>(new Set())
  const [filterStatus, setFilterStatus] = useState<string>("ALL")
  const [searchQuery, setSearchQuery] = useState("")
  const [milestones, setMilestones] = useState<{ milestone: string; percentage: number }[]>([emptyMilestone()])
  const [useCustomMilestones, setUseCustomMilestones] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    licenseNumber: "",
    sowBudget: 0,
    sowStartDate: "",
    sowCompletionDate: "",
    notes: "",
  })

  useEffect(() => {
    if (!workspaceId) return
    fetchContractors()
  }, [workspaceId])

  const fetchContractors = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/execution/contractors?propertyId=${workspaceId}`)
      const result = await res.json()
      if (result.success && result.data) {
        setContractors(Array.isArray(result.data) ? result.data : [result.data])
         console.log("data here is ", result.data)
      } else if (Array.isArray(result)) {
        setContractors(result)
         console.log("data here is ", result)
      } else {
        setContractors([])
      }
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch contractors")
      setContractors([])
    } finally {
     
      setLoading(false)
    }
  }

  const totalMilestonePercentage = milestones.reduce((sum, m) => sum + (Number(m.percentage) || 0), 0)
  const milestonePercentageError =
    useCustomMilestones && totalMilestonePercentage !== 100
      ? `Total must be 100% (currently ${totalMilestonePercentage}%)`
      : null

  const addMilestoneRow = () => setMilestones([...milestones, emptyMilestone()])

  const removeMilestoneRow = (index: number) => {
    setMilestones(milestones.filter((_, i) => i !== index))
  }

  const updateMilestone = (index: number, field: "milestone" | "percentage", value: string | number) => {
    const updated = milestones.map((m, i) =>
      i === index ? { ...m, [field]: field === "percentage" ? Number(value) : value } : m
    )
    setMilestones(updated)
  }

  const handleSaveContractor = async () => {
    if (useCustomMilestones && milestonePercentageError) {
      setError(milestonePercentageError)
      return
    }
    try {
      const url = editingContractor
        ? `/api/execution/contractors/${editingContractor._id}`
        : "/api/execution/contractors"
      const method = editingContractor ? "PATCH" : "POST"
      const payload: any = { ...formData, propertyId: workspaceId, executionWorkspaceId: workspaceId }
      if (useCustomMilestones && milestones.length > 0 && milestones.some((m) => m.milestone)) {
        payload.paymentSchedule = milestones
          .filter((m) => m.milestone)
          .map((m) => ({ milestone: m.milestone, percentage: m.percentage, status: "PENDING" }))
      }
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await res.json()
      if (res.ok) {
        const newContractor = result.data || result
        if (editingContractor) {
          setContractors(contractors.map((c) => (c._id === editingContractor._id ? newContractor : c)))
        } else {
          setContractors([...contractors, newContractor])
        }
        resetForm()
        setShowForm(false)
      } else {
        setError(result.message || "Failed to save contractor")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save contractor")
    }
  }

  const handleMarkPaymentPaid = async (contractorId: string, paymentId: string) => {
    try {
      if (!paymentId) { setError("Payment ID is missing"); return }
      const res = await fetch(`/api/execution/contractors/${contractorId}/payment`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId, status: "PAID" }),
      })
      const result = await res.json()
      if (res.ok) {
        setContractors(contractors.map((c) => (c._id === contractorId ? (result.data || result) : c)))
        setError(null)
      } else {
        setError(result.message || "Failed to update payment")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update payment")
    }
  }

  const handleUpdateScopeStatus = async (contractorId: string, scopeItemId: string, status: string) => {
    try {
      if (!scopeItemId) { setError("Scope item ID is missing"); return }
      const res = await fetch(`/api/execution/contractors/${contractorId}/scope`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scopeItemId, status }),
      })
      const result = await res.json()
      if (res.ok) {
        setContractors(contractors.map((c) => (c._id === contractorId ? (result.data || result) : c)))
      } else {
        setError(result.message || "Failed to update scope status")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update scope status")
    }
  }

  const handleDeleteContractor = async (contractorId: string) => {
    if (!confirm("Delete this contractor? This action cannot be undone.")) return
    try {
      const res = await fetch(`/api/execution/contractors/${contractorId}`, { method: "DELETE" })
      if (res.ok) {
        setContractors(contractors.filter((c) => c._id !== contractorId))
        setError(null)
      } else {
        const result = await res.json()
        setError(result.message || "Failed to delete contractor")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete contractor")
    }
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", address: "", state: "", licenseNumber: "", sowBudget: 0, sowStartDate: "", sowCompletionDate: "", notes: "" })
    setEditingContractor(null)
    setMilestones([emptyMilestone()])
    setUseCustomMilestones(true)
  }

  const startEdit = (contractor: Contractor) => {
    setEditingContractor(contractor)
    setFormData({
      name: contractor.name || "",
      email: contractor.email || "",
      phone: contractor.phone || "",
      address: contractor.address || "",
      state: contractor.state || "",
      licenseNumber: contractor.licenseNumber || "",
      sowBudget: contractor.sowBudget || 0,
      sowStartDate: contractor.sowStartDate ? contractor.sowStartDate.split("T")[0] : "",
      sowCompletionDate: contractor.sowCompletionDate ? contractor.sowCompletionDate.split("T")[0] : "",
      notes: contractor.notes || "",
    })
    if (contractor.paymentSchedule && contractor.paymentSchedule.length > 0) {
      setMilestones(contractor.paymentSchedule.map((p) => ({ milestone: p.milestone, percentage: p.percentage, _id: p._id })))
      setUseCustomMilestones(true)
    } else {
      setMilestones([emptyMilestone()])
      setUseCustomMilestones(true)
    }
    setShowForm(true)
  }

  const toggleExpandContractor = (contractorId: string) => {
    const newExpanded = new Set(expandedContractors)
    if (newExpanded.has(contractorId)) newExpanded.delete(contractorId)
    else newExpanded.add(contractorId)
    setExpandedContractors(newExpanded)
  }

  // ── FIX: properly closed loading guard ──
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading contractors...</p>
        </div>
      </div>
    )
  }

  const totalBudget = contractors.reduce((sum, c) => sum + (c?.sowBudget || 0), 0)
  const totalPaid = contractors.reduce((sum, c) => sum + (c?.sowPaidToDate || 0), 0)
 const activeCount = contractors.filter((c) => {
  if (!c) return false
  const scopeItems = c.scopeItems || []
  const sowPaidToDate = c.sowPaidToDate || 0
  const sowBudget = c.sowBudget || 0
  const paymentProgress = sowBudget > 0 ? (sowPaidToDate / sowBudget) * 100 : 0
  
  // same logic as sowConfig in ContractorCard
  if (scopeItems.length === 0 && paymentProgress === 0) return false // DRAFT
  if (scopeItems.length > 0 && 
      scopeItems.filter((s) => s?.status === "COMPLETED").length === scopeItems.length && 
      paymentProgress === 100) return false // COMPLETED
  return true // ACTIVE
}).length
    const variance = totalBudget - totalPaid
const completedCount = contractors.filter((c) => {
  if (!c) return false
  const scopeItems = c.scopeItems || []
  const sowPaidToDate = c.sowPaidToDate || 0
  const sowBudget = c.sowBudget || 0
  const paymentProgress = sowBudget > 0 ? (sowPaidToDate / sowBudget) * 100 : 0

  return (
    scopeItems.length > 0 &&
    scopeItems.filter((s) => s?.status === "COMPLETED").length === scopeItems.length &&
    paymentProgress === 100
  )
}).length

  const filteredContractors = contractors.filter((c) => {
    if (!c) return false
    const matchesStatus = filterStatus === "ALL" || c.sowStatus === filterStatus
    const matchesSearch =
      (c.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.phone || "").toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Contractors </h1>
              <p className="text-gray-600 dark:text-gray-400">Manage and track all contractor agreements and payments</p>
            </div>
            <button
              onClick={() => { resetForm(); setShowForm(true) }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              Add Contractor
            </button>
          </div>

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-700 dark:text-red-300 text-sm font-medium flex-1">{error}</p>
              <button onClick={() => setError(null)} className="text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 p-1 rounded">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-4">
          {activeCount > 0 && <StatCard icon={<ClipboardList className="w-6 h-6" />} label="Active" value={activeCount.toString()} color="blue" />}
          <StatCard icon={<DollarSign className="w-6 h-6" />} label="Total Budget" value={`$${totalBudget.toLocaleString()}`} color="blue" />
          <StatCard icon={<TrendingUp className="w-6 h-6" />} label="Total Paid" value={`$${totalPaid.toLocaleString()}`} color="emerald" />
          <StatCard 
            icon={variance >= 0 ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />} 
            label="Variance" 
            value={`${variance >= 0 ? '+' : ''}$${variance.toLocaleString()}`} 
            color={variance >= 0 ? "amber" : "red"}
            subtitle={variance >= 0 ? "Under Budget" : "Over Budget"}
          />
          <StatCard icon={<CheckCircle2 className="w-6 h-6" />} label="Completed" value={completedCount.toString()} color="green" />
        </div>

        {/* Search & Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search contractors by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white font-medium"
          >
            <option value="ALL">All Status</option>
            {Object.entries(sowStatusConfig).map(([key, config]) => (
              <option key={key} value={key}>{config.label}</option>
            ))}
          </select>
        </div>

        {/* Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  {editingContractor ? "Edit Contractor" : "Add New Contractor"}
                </h2>
                <button onClick={() => { setShowForm(false); resetForm() }} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Contractor Name" icon={<User className="w-4 h-4" />} type="text" placeholder="e.g., ABC Electrical Services" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <FormField label="Email" icon={<Mail className="w-4 h-4" />} type="email" placeholder="contractor@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  <FormField label="Phone" icon={<Phone className="w-4 h-4" />} type="tel" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  <FormField label="License Number" icon={<Badge className="w-4 h-4" />} type="text" placeholder="LIC-2024-001" value={formData.licenseNumber} onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })} />
                  <FormField label="Address" icon={<MapPin className="w-4 h-4" />} type="text" placeholder="123 Main St" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                  <FormField label="State" icon={<Building2 className="w-4 h-4" />} type="text" placeholder="CA" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
                  <FormField label="SOW Budget" icon={<DollarSign className="w-4 h-4" />} type="number" placeholder="50000" value={formData.sowBudget} onChange={(e) => setFormData({ ...formData, sowBudget: Number(e.target.value) })} required />
                  <FormField label="Start Date" icon={<Calendar className="w-4 h-4" />} type="date" placeholder="" value={formData.sowStartDate} onChange={(e) => setFormData({ ...formData, sowStartDate: e.target.value })} />
                  <FormField label="Completion Date" icon={<CalendarDays className="w-4 h-4" />} type="date" placeholder="" value={formData.sowCompletionDate} onChange={(e) => setFormData({ ...formData, sowCompletionDate: e.target.value })} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Notes</label>
                  <textarea
                    placeholder="Add notes about this contractor..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Payment Milestones */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Payment Milestones</span>
                      {!useCustomMilestones && <span className="text-xs text-gray-500 dark:text-gray-400 italic">(auto: 20/40/60/80/100%)</span>}
                    </div>
                    <button
                      type="button"
                      onClick={() => { setUseCustomMilestones(!useCustomMilestones); if (!useCustomMilestones && milestones.length === 0) setMilestones([emptyMilestone()]) }}
                      className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${useCustomMilestones ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300"}`}
                    >
                      {useCustomMilestones ? "✓ Custom" : "Use Custom"}
                    </button>
                  </div>

                  {useCustomMilestones && (
                    <div className="p-4 space-y-3">
                      <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 px-1">
                        <span className="col-span-6">Milestone Name</span>
                        <span className="col-span-4">Percentage (%)</span>
                        <span className="col-span-2 text-center">Remove</span>
                      </div>
                      {milestones.map((m, idx) => (
                        <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                          <input type="text" placeholder="e.g., Deposit, Framing, Final" value={m.milestone} onChange={(e) => updateMilestone(idx, "milestone", e.target.value)} className="col-span-6 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                          <input type="number" placeholder="e.g., 25" min={0} max={100} value={m.percentage || ""} onChange={(e) => updateMilestone(idx, "percentage", e.target.value)} className="col-span-4 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                          <div className="col-span-2 flex justify-center">
                            <button type="button" onClick={() => removeMilestoneRow(idx)} disabled={milestones.length === 1} className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold ${totalMilestonePercentage === 100 ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                            Total: {totalMilestonePercentage}%{totalMilestonePercentage === 100 && " ✓"}
                          </span>
                          {milestonePercentageError && <span className="text-xs text-red-500">{milestonePercentageError}</span>}
                        </div>
                        <button type="button" onClick={addMilestoneRow} className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1.5 rounded-lg transition-colors">
                          <Plus className="w-4 h-4" />
                          Add Row
                        </button>
                      </div>
                      {formData.sowBudget > 0 && milestones.some((m) => m.milestone && m.percentage > 0) && (
                        <div className="mt-2 space-y-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                          <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">Preview Amounts</p>
                          {milestones.filter((m) => m.milestone && m.percentage > 0).map((m, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-gray-700 dark:text-gray-300">
                              <span>{m.milestone}</span>
                              <span className="font-semibold">${Math.round((formData.sowBudget * m.percentage) / 100).toLocaleString()} ({m.percentage}%)</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 justify-end p-6 border-t border-gray-200 dark:border-gray-700">
                <button onClick={() => { setShowForm(false); resetForm() }} className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 font-medium transition-colors">
                  Cancel
                </button>
                <button onClick={handleSaveContractor} disabled={useCustomMilestones && !!milestonePercentageError} className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {editingContractor ? "Update Contractor" : "Add Contractor"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contractors List */}
        {filteredContractors.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600">
            <Building2 className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">No contractors found</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {searchQuery || filterStatus !== "ALL" ? "Try adjusting your filters" : contractors.length === 0 ? "Add your first contractor to get started" : ""}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredContractors.length} of {contractors.length} contractor{contractors.length !== 1 ? "s" : ""}
            </p>
            {filteredContractors.map((contractor) => (
              <ContractorCard
                key={contractor._id}
                contractor={contractor}
                isExpanded={expandedContractors.has(contractor._id)}
                onToggleExpand={() => toggleExpandContractor(contractor._id)}
                onEdit={() => startEdit(contractor)}
                onDelete={() => handleDeleteContractor(contractor._id)}
                onMarkPaymentPaid={handleMarkPaymentPaid}
                onUpdateScopeStatus={handleUpdateScopeStatus}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Sub-components ──────────────────────────────────────────────────────────

function StatCard({ 
  icon, 
  label, 
  value, 
  color,
  subtitle 
}: { 
  icon: React.ReactNode
  label: string
  value: string
  color: "blue" | "emerald" | "amber" | "green" | "red"
  subtitle?: string
}) {
  const colorConfig = {
    blue: "from-blue-500 to-blue-600 text-blue-600 dark:text-blue-400",
    emerald: "from-emerald-500 to-emerald-600 text-emerald-600 dark:text-emerald-400",
    amber: "from-amber-500 to-amber-600 text-amber-600 dark:text-amber-400",
    green: "from-green-500 to-green-600 text-green-600 dark:text-green-400",
    red: "from-red-500 to-red-600 text-red-600 dark:text-red-400",
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{label}</p>
          <p className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorConfig[color]}`}>{value}</p>
          {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
        </div>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorConfig[color]} flex items-center justify-center text-white flex-shrink-0`}>
          {icon}
        </div>
      </div>
    </div>
  )
}
function FormField({ label, icon, type, placeholder, value, onChange, required, disabled = false }: { label: string; icon: React.ReactNode; type: string; placeholder: string; value: string | number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; disabled?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
        <span className="text-blue-600 dark:text-blue-400">{icon}</span>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} className="w-full px-4 py-2.5 border rounded-lg transition-all bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  )
}

function ContractorCard({ contractor, isExpanded, onToggleExpand, onEdit, onDelete, onMarkPaymentPaid, onUpdateScopeStatus }: { contractor: Contractor; isExpanded: boolean; onToggleExpand: () => void; onEdit: () => void; onDelete: () => void; onMarkPaymentPaid: (contractorId: string, paymentId: string) => void; onUpdateScopeStatus: (contractorId: string, scopeItemId: string, status: string) => void }) {
  const name = contractor.name || "Unnamed Contractor"
  const sowBudget = contractor.sowBudget || 0
  const sowPaidToDate = contractor.sowPaidToDate || 0
  const paymentProgress = sowBudget > 0 ? (sowPaidToDate / sowBudget) * 100 : 0
    const scopeItems = contractor.scopeItems || []
const sowConfig = 
  scopeItems.length === 0 && paymentProgress === 0 
    ? sowStatusConfig.DRAFT        // no items = draft
    : scopeItems.filter((s) => s?.status === "COMPLETED").length === scopeItems.length && paymentProgress === 100
      ? sowStatusConfig.COMPLETED  // all items complete + fully paid = completed
      : sowStatusConfig.ACTIVE     // has items but not done = active

  const paymentSchedule = contractor.paymentSchedule || []
  const completedScopes = scopeItems.filter((s) => s?.status === "COMPLETED").length
  const overdue = scopeItems.filter((s) => s?.status === "COMPLETED").length && paymentProgress === 100 ? false : contractor.sowCompletionDate && new Date(contractor.sowCompletionDate) < new Date()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
              <span className={`px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 ${sowConfig.bg} ${sowConfig.text}`}>
                {sowConfig.icon} {sowConfig.label}
              </span>
              {overdue && (
                <span className="px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                  🔴 Overdue
                </span>
              )}
            </div>
            {(contractor.email || contractor.phone) && (
              <div className="flex items-center gap-4 flex-wrap text-sm text-gray-600 dark:text-gray-400">
                {contractor.email && <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" />{contractor.email}</span>}
                {contractor.phone && <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" />{contractor.phone}</span>}
              </div>
            )}
          </div>
          <button onClick={onToggleExpand} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        {contractor.licenseNumber && (
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <Badge className="w-4 h-4" />License: <span className="font-medium">{contractor.licenseNumber}</span>
          </p>
        )}
      </div>

      <div className="px-6 py-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"><DollarSign className="w-4 h-4 text-blue-600" />Budget Progress</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">${sowPaidToDate.toLocaleString()} / ${sowBudget.toLocaleString()}</span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300" style={{ width: `${Math.min(paymentProgress, 100)}%` }} />
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600 dark:text-gray-400">{paymentProgress.toFixed(1)}% Paid</span>
            {sowPaidToDate > sowBudget && <span className="text-red-600 dark:text-red-400 font-semibold">⚠️ Over Budget by ${(sowPaidToDate - sowBudget).toLocaleString()}</span>}
          </div>
        </div>
        {scopeItems.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"><ClipboardList className="w-4 h-4 text-emerald-600" />Work Progress</span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">{completedScopes}/{scopeItems.length} Items</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300" style={{ width: `${scopeItems.length > 0 ? (completedScopes / scopeItems.length) * 100 : 0}%` }} />
            </div>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="border-t border-gray-100 dark:border-gray-700 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-700/50 dark:to-transparent p-6 space-y-6">
          {(contractor.sowStartDate || contractor.sowCompletionDate) && (
            <div className="grid grid-cols-2 gap-4">
              {contractor.sowStartDate && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">Start Date</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{new Date(contractor.sowStartDate).toLocaleDateString()}</p>
                </div>
              )}
              {contractor.sowCompletionDate && (
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Completion Date</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{new Date(contractor.sowCompletionDate).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          )}

          {scopeItems.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><ClipboardList className="w-4 h-4" />Scope Items ({completedScopes}/{scopeItems.length})</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {scopeItems.map((item) => {
                  if (!item) return null
                  const config = scopeStatusConfig[item.status] || scopeStatusConfig.PENDING
                  return (
                    <div key={item._id || Math.random()} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">{item.category || "Unknown"}</p>
                        {item.description && <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>}
                      </div>
                      <select value={item.status || "PENDING"} onChange={(e) => onUpdateScopeStatus(contractor._id, item._id || "", e.target.value)} className={`text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer border ${config.bg} ${config.text} transition-colors`}>
                        <option value="PENDING">⏳ Pending</option>
                        <option value="IN_PROGRESS">🔄 In Progress</option>
                        <option value="COMPLETED">✓ Completed</option>
                      </select>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {paymentSchedule.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><DollarSign className="w-4 h-4" />Payment Schedule</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {paymentSchedule.map((payment) => {
                  if (!payment) return null
                  const payConfig = paymentStatusConfig[payment.status] || paymentStatusConfig.PENDING
                  return (
                    <div key={payment._id || Math.random()} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">{payment.milestone || "Payment"} ({payment.percentage || 0}%)</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">${(payment.amount || 0).toLocaleString()}</p>
                      </div>
                      {payment.status === "PAID" ? (
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${payConfig.bg} ${payConfig.text}`}>{payConfig.icon} {payConfig.label}</span>
                      ) : (
                        <button onClick={() => onMarkPaymentPaid(contractor._id, payment._id || "")} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors">
                          ✓ Mark Paid
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {contractor.notes && (
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
              <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mb-2">Notes</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{contractor.notes}</p>
            </div>
          )}
 <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
      <ContractorFileManager
        contractorId={contractor._id}
        uploadedBy="Admin"
      />
    </div>
          <div className="flex gap-2 justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
            <button onClick={onEdit} className="p-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              <Edit2 className="w-5 h-5" />
            </button>
            <button onClick={onDelete} className="p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}