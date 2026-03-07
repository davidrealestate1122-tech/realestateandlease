"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { AdminLayout } from "@/components/admin-layout"
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  AlertCircle,
  MapPin,
  Loader2,
  Calendar,
  FileText,
  CheckSquare,
  DollarSign,
  Users,
  Edit2,
  Save,
  X,
  TrendingUp,
  BarChart3,
  Home,
  Layers,
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

import TasksManager from "@/components/execution/TasksManager"
import ContractorsManager from "@/components/execution/ContractorsManager"
import TimelineTracker from "@/components/execution/TimelineTracker"
import InspectionTracker from "@/components/execution/InspectionTracker"
import CostHistory from "@/components/execution/CostHistory"
import ExportButtons from "@/components/execution/ExportButtons"
import FileManager from "@/components/execution/FileManager"

interface ChecklistItem {
  _id: string
  label: string
  completed: boolean
  notes?: string
  dueDate?: string
}

interface ExecutionCosts {
  purchasePrice?: number
  rehabCost?: number
  holdingCosts?: number
  closingCosts?: number
  totalCosts?: number
}

interface ExecutionData {
  property?: {
    _id: string
    address: string
    city?: string
    state?: string
    zipCode?: string
  }
  phase1?: {
    arv?: {
      baseArv?: number
      finalArv?: number
      adjustmentSteps?: any[]
    }
    costs?: {
      purchasePrice?: number
      closingCosts?: number
      holdingCosts?: number
      rehabCost?: number
      totalCosts?: number
    }
    deal?: {
      status?: string
      profitPercent?: number
      maxOffer?: number
      assignmentFee?: number
      arvUsed?: number
    }
    rules?: Array<{
      name: string
      passed: boolean
      value?: number
      threshold?: number
      note?: string
    }>
  }
  workspace?: {
    _id: string
    stage: string
    uploadedBy?: string
    executionCosts?: ExecutionCosts
  }
  contractor?: { _id: string }
  checklist?: ChecklistItem[]
}

const stageOrder = ["DUE_DILIGENCE", "BIDDING", "REHAB", "CLOSING"]
const stageLabels: Record<string, string> = {
  DUE_DILIGENCE: "Due Diligence",
  BIDDING: "Bidding",
  REHAB: "Rehab",
  CLOSING: "Closing",
}
const stageColors: Record<string, string> = {
  DUE_DILIGENCE: "#6366f1",
  BIDDING: "#a855f7",
  REHAB: "#f97316",
  CLOSING: "#22c55e",
}

type TabType = "snapshot" | "checklist" | "cost-config" | "tasks" | "contractors" | "timeline" | "inspections"

const TABS: Array<{ id: TabType; label: string; icon: React.ReactNode }> = [
  { id: "snapshot",     label: "Phase 1 Snapshot", icon: <BarChart3 size={14} /> },
  { id: "checklist",    label: "Checklist",         icon: <CheckSquare size={14} /> },
  { id: "cost-config",  label: "Cost Config",       icon: <DollarSign size={14} /> },
  { id: "tasks",        label: "Tasks",             icon: <CheckCircle2 size={14} /> },
  { id: "contractors",  label: "Contractors",       icon: <Users size={14} /> },
  { id: "timeline",     label: "Timeline",          icon: <Calendar size={14} /> },
  { id: "inspections",  label: "Inspections",       icon: <FileText size={14} /> },
]

export default function ExecutionWorkspace() {
  const params = useParams()
  const propertyId = params?.propertyId as string | null
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const [data, setData] = useState<ExecutionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>("snapshot")
  const [error, setError] = useState<string | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([])

  const [isEditingCosts, setIsEditingCosts] = useState(false)
  const [editedCosts, setEditedCosts] = useState<ExecutionCosts>({
    purchasePrice: 0, rehabCost: 0, holdingCosts: 0, closingCosts: 0, totalCosts: 0,
  })

  useEffect(() => { setIsReady(true) }, [])

  useEffect(() => {
    if (!isReady || !propertyId) return
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`/api/execution/properties/${propertyId}`, { cache: "no-store" })
        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.message || `Error ${res.status}`)
        }
        const result = await res.json()
        setData(result)
        if (result.checklist && checklistItems.length === 0) setChecklistItems(result.checklist)
        const wc = result.workspace?.executionCosts
        const pc = result.phase1?.costs
        setEditedCosts({
          purchasePrice: wc?.purchasePrice ?? pc?.purchasePrice ?? 0,
          rehabCost:     wc?.rehabCost     ?? pc?.rehabCost     ?? 0,
          holdingCosts:  wc?.holdingCosts  ?? pc?.holdingCosts  ?? 0,
          closingCosts:  wc?.closingCosts  ?? pc?.closingCosts  ?? 0,
          totalCosts:    wc?.totalCosts    ?? pc?.totalCosts    ?? 0,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [isReady, propertyId])

  const handleUpdateCosts = async () => {
    const localStorageUser = localStorage.getItem("user")
    if (!data?.workspace?._id) return
    try {
      setIsSaving(true)
      const total = (editedCosts.purchasePrice || 0) + (editedCosts.rehabCost || 0) + (editedCosts.holdingCosts || 0) + (editedCosts.closingCosts || 0)
      const updatedCosts = { ...editedCosts, totalCosts: total }
      const res = await fetch("/api/execution/costs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workspaceId: data.workspace._id,
          executionCosts: updatedCosts,
          changedBy: localStorageUser ? JSON.parse(localStorageUser).email : "Admin",
        }),
      })
      if (!res.ok) throw new Error("Failed to update costs")
      const result = await res.json()
      setData({ ...data, workspace: { ...data.workspace, executionCosts: result.data.executionCosts } })
      setEditedCosts(result.data.executionCosts)
      setIsEditingCosts(false)
      setError(null)
      setRefreshTrigger(p => p + 1)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update costs")
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancelEdit = () => {
    const wc = data?.workspace?.executionCosts
    const pc = data?.phase1?.costs
    setEditedCosts({
      purchasePrice: wc?.purchasePrice ?? pc?.purchasePrice ?? 0,
      rehabCost:     wc?.rehabCost     ?? pc?.rehabCost     ?? 0,
      holdingCosts:  wc?.holdingCosts  ?? pc?.holdingCosts  ?? 0,
      closingCosts:  wc?.closingCosts  ?? pc?.closingCosts  ?? 0,
      totalCosts:    wc?.totalCosts    ?? pc?.totalCosts    ?? 0,
    })
    setIsEditingCosts(false)
    setError(null)
  }

  const handleStageChange = async (newStage: string) => {
    if (!data?.workspace) return
    try {
      setIsSaving(true)
      const res = await fetch("/api/execution/stage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workspaceId: data.workspace._id, stage: newStage }),
      })
      if (!res.ok) throw new Error("Failed to update stage")
      setData({ ...data, workspace: { ...data.workspace, stage: newStage } })
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update stage")
    } finally {
      setIsSaving(false)
    }
  }

  const handleChecklistChange = async (itemId: string, completed: boolean) => {
    try {
      const res = await fetch("/api/execution/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId, completed }),
      })
      if (!res.ok) throw new Error("Failed to update checklist")
      setChecklistItems(prev => prev.map(item => item._id === itemId ? { ...item, completed } : item))
      setError(null)
    } catch {
      setError("Failed to update checklist")
    }
  }

  // ── Loading ──
  if (!isReady || !propertyId || isLoading) {
    return (
      <AdminLayout>
        <div style={{ minHeight: "100vh", background: "#f8f9fb", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <Loader2 size={36} style={{ color: "#b8943a", animation: "spin 1s linear infinite", margin: "0 auto 12px" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#9ca3af" }}>Loading workspace…</p>
          </div>
        </div>
      </AdminLayout>
    )
  }

  if (!data) {
    return (
      <AdminLayout>
        <div style={{ padding: 40 }}>
          <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 8, padding: "14px 18px", color: "#92400e", fontSize: 13 }}>
            No data found for this property.
          </div>
        </div>
      </AdminLayout>
    )
  }

  const currentStageIndex = stageOrder.indexOf(data.workspace?.stage || "DUE_DILIGENCE")
  const currentStage = data.workspace?.stage || "DUE_DILIGENCE"
  const stageColor = stageColors[currentStage] || "#6366f1"

  const completedCount  = checklistItems.filter(i => i.completed).length
  const totalCount      = checklistItems.length
  const checklistPct    = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  const currentCosts  = data.workspace?.executionCosts || data.phase1?.costs || {}
  const displayCosts  = {
    purchasePrice: currentCosts.purchasePrice || 0,
    rehabCost:     currentCosts.rehabCost     || 0,
    holdingCosts:  currentCosts.holdingCosts  || 0,
    closingCosts:  currentCosts.closingCosts  || 0,
    totalCosts:    currentCosts.totalCosts    || 0,
  }
  const editedTotal = (editedCosts.purchasePrice || 0) + (editedCosts.rehabCost || 0) + (editedCosts.holdingCosts || 0) + (editedCosts.closingCosts || 0)

  const p1 = data.phase1
  const arv      = p1?.arv?.finalArv     || p1?.arv?.baseArv     || 0
  const purchase = p1?.costs?.purchasePrice || 0
  const rehab    = p1?.costs?.rehabCost     || 0
  const holding  = p1?.costs?.holdingCosts  || 0
  const closing  = p1?.costs?.closingCosts  || 0
  const p1Total  = p1?.costs?.totalCosts    || (purchase + rehab + holding + closing)
  const grossProfit = arv - p1Total
  const profitPct   = p1Total > 0 ? ((grossProfit / arv) * 100).toFixed(1) : "—"
  const maxOffer    = p1?.deal?.maxOffer
  const assignmentFee = p1?.deal?.assignmentFee

  return (
    <AdminLayout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .ws { font-family: 'DM Sans', sans-serif; min-height: 100vh; background: #f8f9fb; padding: 32px 40px; }

        /* ── Back + Export row ── */
        .ws-topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
        .ws-back { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; color: #9ca3af; text-decoration: none; letter-spacing: 0.04em; transition: color 0.15s; }
        .ws-back:hover { color: #b8943a; }
        .ws-back svg { width: 14px; height: 14px; }

        /* ── Error ── */
        .ws-error { display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; font-size: 13px; color: #b91c1c; margin-bottom: 20px; }
        .ws-error-close { margin-left: auto; background: none; border: none; cursor: pointer; color: #b91c1c; display: flex; }
        .ws-error-close svg { width: 14px; height: 14px; }

        /* ── Property header card ── */
        .ws-prop-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; margin-bottom: 20px; }
        .ws-prop-card-top { height: 4px; }
        .ws-prop-card-body { padding: 24px 28px; }
        .ws-prop-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; }
        .ws-prop-address { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 26px; font-weight: 600; color: #111827; letter-spacing: -0.01em; margin-bottom: 6px; }
        .ws-prop-loc { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #9ca3af; font-weight: 300; }
        .ws-prop-loc svg { width: 13px; height: 13px; }

        /* Stage badge */
        .ws-stage-badge { display: inline-flex; align-items: center; gap: 7px; padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 500; letter-spacing: 0.06em; white-space: nowrap; flex-shrink: 0; }
        .ws-stage-dot { width: 6px; height: 6px; border-radius: 50%; }

        /* Stage progress */
        .ws-progress-label { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 11px; font-weight: 400; color: #9ca3af; letter-spacing: 0.04em; }
        .ws-progress-track { height: 4px; background: #f3f4f6; border-radius: 2px; overflow: hidden; margin-bottom: 16px; }
        .ws-progress-fill { height: 100%; border-radius: 2px; transition: width 0.4s; }
        .ws-stage-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .ws-stage-step { display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer; }
        .ws-stage-step-circle { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; transition: all 0.2s; border: 2px solid transparent; }
        .ws-stage-step-circle.done { color: #fff; }
        .ws-stage-step-circle.current { color: #fff; box-shadow: 0 0 0 3px rgba(196,162,96,0.2); }
        .ws-stage-step-circle.upcoming { background: #f3f4f6; color: #9ca3af; border-color: #e5e7eb; }
        .ws-stage-step-label { font-size: 10px; font-weight: 400; color: #9ca3af; text-align: center; letter-spacing: 0.04em; }
        .ws-stage-step-label.active { color: #374151; font-weight: 500; }

        /* ── Quick stats row ── */
        .ws-quick-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 20px; }
        .ws-qs-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 18px 20px; position: relative; overflow: hidden; }
        .ws-qs-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; border-radius: 10px 10px 0 0; }
        .ws-qs-card.gold::before  { background: linear-gradient(90deg, rgba(196,162,96,0.9), rgba(196,162,96,0.3)); }
        .ws-qs-card.green::before { background: linear-gradient(90deg, rgba(34,197,94,0.8), rgba(34,197,94,0.25)); }
        .ws-qs-card.indigo::before{ background: linear-gradient(90deg, rgba(99,102,241,0.8), rgba(99,102,241,0.25)); }
        .ws-qs-label { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #9ca3af; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
        .ws-qs-label svg { width: 13px; height: 13px; }
        .ws-qs-value { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 30px; font-weight: 600; line-height: 1; color: #111827; margin-bottom: 4px; }
        .ws-qs-value.gold  { color: #92700a; }
        .ws-qs-value.green { color: #15803d; }
        .ws-qs-value.indigo{ color: #4f46e5; }
        .ws-qs-sub { font-size: 11px; color: #9ca3af; font-weight: 300; }

        /* Stage selector inside QS card */
        .ws-stage-selector { display: flex; flex-direction: column; gap: 5px; margin-top: 4px; }
        .ws-stage-btn { display: flex; align-items: center; justify-content: space-between; padding: 7px 10px; border-radius: 6px; font-size: 11px; font-weight: 400; border: 1px solid #e5e7eb; background: #f9fafb; color: #6b7280; cursor: pointer; transition: all 0.12s; }
        .ws-stage-btn:hover { border-color: rgba(196,162,96,0.3); color: #374151; }
        .ws-stage-btn.active { border-color: rgba(196,162,96,0.45); background: rgba(196,162,96,0.07); color: #92700a; font-weight: 500; }
        .ws-stage-btn.active svg { color: #b8943a; }
        .ws-stage-btn svg { width: 13px; height: 13px; color: transparent; }
        .ws-saving-indicator { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #9ca3af; margin-top: 6px; }
        .ws-saving-indicator svg { width: 12px; height: 12px; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Checklist progress bar */
        .ws-cl-track { height: 5px; background: #f3f4f6; border-radius: 3px; overflow: hidden; }
        .ws-cl-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #22c55e, #86efac); transition: width 0.4s; }

        /* ── Tabs ── */
        .ws-tab-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; }
        .ws-tab-nav { display: flex; overflow-x: auto; border-bottom: 1px solid #f3f4f6; padding: 0 4px; scrollbar-width: none; }
        .ws-tab-nav::-webkit-scrollbar { display: none; }
        .ws-tab-btn { display: flex; align-items: center; gap: 6px; padding: 13px 16px; font-size: 12px; font-weight: 400; color: #9ca3af; border: none; background: none; cursor: pointer; border-bottom: 2px solid transparent; white-space: nowrap; transition: color 0.15s, border-color 0.15s; letter-spacing: 0.02em; }
        .ws-tab-btn:hover { color: #374151; }
        .ws-tab-btn.active { color: #92700a; border-bottom-color: rgba(196,162,96,0.7); font-weight: 500; }
        .ws-tab-btn svg { opacity: 0.6; }
        .ws-tab-btn.active svg { opacity: 1; }
        .ws-tab-content { padding: 28px; }

        /* ── Phase 1 Snapshot ── */
        .snap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
        .snap-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px; }
        .snap-card-title { font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #9ca3af; margin-bottom: 14px; display: flex; align-items: center; gap: 6px; }
        .snap-card-title svg { width: 13px; height: 13px; color: rgba(196,162,96,0.7); }
        .snap-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
        .snap-row:last-child { border-bottom: none; }
        .snap-key { font-size: 12px; color: #6b7280; font-weight: 300; }
        .snap-val { font-size: 13px; font-weight: 500; color: #111827; }
        .snap-val.green { color: #15803d; }
        .snap-val.red { color: #b91c1c; }
        .snap-val.gold { color: #92700a; }

        /* Deal verdict banner */
        .snap-verdict { border-radius: 10px; padding: 20px 24px; display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
        .snap-verdict.pass { background: #f0fdf4; border: 1px solid #bbf7d0; }
        .snap-verdict.fail { background: #fef2f2; border: 1px solid #fecaca; }
        .snap-verdict-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .snap-verdict.pass .snap-verdict-icon { background: #dcfce7; }
        .snap-verdict.fail .snap-verdict-icon { background: #fee2e2; }
        .snap-verdict-title { font-size: 14px; font-weight: 600; }
        .snap-verdict.pass .snap-verdict-title { color: #15803d; }
        .snap-verdict.fail .snap-verdict-title { color: #b91c1c; }
        .snap-verdict-sub { font-size: 11px; color: #9ca3af; margin-top: 2px; }

        /* Rule chips */
        .snap-rules { display: flex; flex-direction: column; gap: 6px; }
        .snap-rule { display: flex; align-items: center; justify-content: space-between; padding: 9px 12px; border-radius: 7px; border: 1px solid #e5e7eb; background: #fff; }
        .snap-rule-left { display: flex; align-items: center; gap: 8px; }
        .snap-rule-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .snap-rule-dot.pass { background: #22c55e; }
        .snap-rule-dot.fail { background: #ef4444; }
        .snap-rule-name { font-size: 12px; font-weight: 400; color: #374151; }
        .snap-rule-val { font-size: 11px; color: #9ca3af; }
        .snap-no-data { text-align: center; padding: 40px 24px; }
        .snap-no-data-icon { width: 48px; height: 48px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
        .snap-no-data-icon svg { width: 22px; height: 22px; color: #9ca3af; }
        .snap-no-data-text { font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 4px; }
        .snap-no-data-sub { font-size: 12px; color: #9ca3af; }

        /* ── Checklist tab ── */
        .cl-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .cl-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 20px; font-weight: 600; color: #111827; }
        .cl-count { font-size: 12px; color: #9ca3af; }
        .cl-progress-wrap { margin-bottom: 20px; }
        .cl-progress-labels { display: flex; justify-content: space-between; font-size: 10px; color: #9ca3af; margin-bottom: 5px; letter-spacing: 0.04em; }
        .cl-pct { color: #15803d; font-weight: 600; }
        .cl-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px; border-radius: 8px; border: 1px solid #f3f4f6; background: #fafafa; margin-bottom: 8px; transition: border-color 0.15s, background 0.15s; }
        .cl-item:hover { background: #f9fafb; border-color: #e5e7eb; }
        .cl-item.done { opacity: 0.6; }
        .cl-check-btn { background: none; border: none; cursor: pointer; flex-shrink: 0; padding: 0; margin-top: 1px; transition: transform 0.12s; }
        .cl-check-btn:hover { transform: scale(1.1); }
        .cl-check-btn svg { width: 18px; height: 18px; }
        .cl-check-btn .checked { color: #22c55e; }
        .cl-check-btn .unchecked { color: #d1d5db; }
        .cl-label { font-size: 13px; font-weight: 400; color: #111827; cursor: pointer; }
        .cl-label.done { text-decoration: line-through; color: #9ca3af; }
        .cl-notes { font-size: 11px; color: #6b7280; margin-top: 3px; font-weight: 300; }
        .cl-due { display: flex; align-items: center; gap: 4px; font-size: 10px; color: #9ca3af; margin-top: 4px; }
        .cl-due svg { width: 10px; height: 10px; }
        .cl-status { flex-shrink: 0; margin-left: auto; padding: 2px 9px; border-radius: 12px; font-size: 10px; font-weight: 500; letter-spacing: 0.04em; }
        .cl-status.done { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
        .cl-status.pending { background: #f9fafb; color: #9ca3af; border: 1px solid #e5e7eb; }

        /* ── Cost config tab ── */
        .cc-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
        .cc-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 22px; font-weight: 600; color: #111827; margin-bottom: 3px; }
        .cc-sub { font-size: 12px; color: #9ca3af; font-weight: 300; }
        .cc-edit-btn { display: flex; align-items: center; gap: 6px; padding: 8px 16px; background: rgba(196,162,96,0.08); border: 1px solid rgba(196,162,96,0.3); border-radius: 7px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #92700a; cursor: pointer; transition: all 0.15s; letter-spacing: 0.03em; }
        .cc-edit-btn:hover { background: rgba(196,162,96,0.14); }
        .cc-edit-btn svg { width: 13px; height: 13px; }
        .cc-save-btn { display: flex; align-items: center; gap: 6px; padding: 8px 16px; background: #15803d; border: none; border-radius: 7px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #fff; cursor: pointer; transition: all 0.15s; }
        .cc-save-btn:hover:not(:disabled) { background: #166534; }
        .cc-save-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .cc-save-btn svg { width: 13px; height: 13px; }
        .cc-cancel-btn { display: flex; align-items: center; gap: 6px; padding: 8px 16px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 7px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 400; color: #6b7280; cursor: pointer; margin-right: 6px; }
        .cc-cancel-btn:hover { background: #f3f4f6; }
        .cc-cancel-btn svg { width: 13px; height: 13px; }

        .cc-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
        .cc-field { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 9px; padding: 16px 18px; }
        .cc-field.editing { background: #fff; border-color: rgba(196,162,96,0.35); }
        .cc-field-label { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #9ca3af; margin-bottom: 10px; }
        .cc-input-wrap { position: relative; }
        .cc-dollar { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 14px; color: #9ca3af; font-weight: 400; pointer-events: none; }

        .cc-total-card { background: #111827; border-radius: 10px; padding: 22px 24px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .cc-total-left { display: flex; align-items: center; gap: 12px; }
        .cc-total-icon { width: 38px; height: 38px; border-radius: 8px; background: rgba(196,162,96,0.15); border: 1px solid rgba(196,162,96,0.25); display: flex; align-items: center; justify-content: center; }
        .cc-total-icon svg { width: 18px; height: 18px; color: #c4a260; }
        .cc-total-label { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 3px; }
        .cc-total-val { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 32px; font-weight: 600; color: rgba(196,162,96,0.9); line-height: 1; }

        .cc-info { display: flex; gap: 10px; padding: 12px 14px; background: rgba(196,162,96,0.05); border: 1px solid rgba(196,162,96,0.2); border-radius: 8px; font-size: 12px; color: #92700a; margin-bottom: 20px; }
        .cc-info svg { width: 14px; height: 14px; flex-shrink: 0; margin-top: 1px; }
      `}</style>

      <div className="ws">

        {/* ── Top bar ── */}
        <div className="ws-topbar">
          <Link href="/execution" className="ws-back">
            <ArrowLeft /> Back to Properties
          </Link>
          <ExportButtons
            propertyAddress={data.property?.address || "property"}
            propertyData={data}
            exportElementId={null}
          />
        </div>

        {/* ── Error ── */}
        {error && (
          <div className="ws-error">
            <AlertCircle size={15} />
            {error}
            <button className="ws-error-close" onClick={() => setError(null)}><X size={14} /></button>
          </div>
        )}

        {/* ── Property header card ── */}
        <div className="ws-prop-card">
          <div className="ws-prop-card-top" style={{ background: `linear-gradient(90deg, ${stageColor}cc, ${stageColor}33)` }} />
          <div className="ws-prop-card-body">

            <div className="ws-prop-header">
              <div>
                <div className="ws-prop-address">{data.property?.address}</div>
                <div className="ws-prop-loc">
                  <MapPin />
                  {[data.property?.city, data.property?.state, data.property?.zipCode].filter(Boolean).join(", ") || "Location not specified"}
                </div>
              </div>
              <div className="ws-stage-badge" style={{ background: `${stageColor}12`, border: `1px solid ${stageColor}30`, color: stageColor }}>
                <span className="ws-stage-dot" style={{ background: stageColor }} />
                {stageLabels[currentStage]}
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <FileManager
                workspaceId={data.workspace?._id || ""}
                propertyId={data.property?._id || ""}
                uploadedBy={data.workspace?.uploadedBy || "Unknown"}
                contractorId={data.contractor?._id}
              />
            </div>

            {/* Stage progress */}
            <div className="ws-progress-label">
              <span>Execution Progress</span>
              <span>{currentStageIndex + 1} of {stageOrder.length}</span>
            </div>
            <div className="ws-progress-track">
              <div className="ws-progress-fill" style={{ width: `${((currentStageIndex + 1) / stageOrder.length) * 100}%`, background: stageColor }} />
            </div>
            <div className="ws-stage-steps">
              {stageOrder.map((stage, i) => {
                const isDone    = i < currentStageIndex
                const isCurrent = i === currentStageIndex
                const sc        = stageColors[stage]
                return (
                  <div key={stage} className="ws-stage-step" onClick={() => handleStageChange(stage)}>
                    <div
                      className={`ws-stage-step-circle ${isDone ? "done" : isCurrent ? "current" : "upcoming"}`}
                      style={isDone || isCurrent ? { background: sc, borderColor: sc } : {}}
                    >
                      {isDone ? <CheckCircle2 size={14} /> : <span>{i + 1}</span>}
                    </div>
                    <span className={`ws-stage-step-label ${isCurrent ? "active" : ""}`}>{stageLabels[stage]}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Quick stats ── */}
        <div className="ws-quick-stats">

          {/* Stage selector */}
          <div className="ws-qs-card gold">
            <div className="ws-qs-label"><Calendar size={13} /> Stage</div>
            <div className="ws-stage-selector">
              {stageOrder.map(stage => (
                <button
                  key={stage}
                  onClick={() => handleStageChange(stage)}
                  disabled={isSaving}
                  className={`ws-stage-btn ${currentStage === stage ? "active" : ""}`}
                >
                  <span>{stageLabels[stage]}</span>
                  <CheckCircle2 size={12} style={{ opacity: currentStage === stage ? 1 : 0 }} />
                </button>
              ))}
            </div>
            {isSaving && (
              <div className="ws-saving-indicator">
                <Loader2 size={12} /> Saving…
              </div>
            )}
          </div>

          {/* Checklist progress */}
          <div className="ws-qs-card green">
            <div className="ws-qs-label"><CheckSquare size={13} /> Checklist Progress</div>
            <div className="ws-qs-value green">{completedCount}<span style={{ fontSize: 18, color: "#9ca3af" }}>/{totalCount}</span></div>
            <div className="ws-qs-sub" style={{ marginBottom: 10 }}>{checklistPct.toFixed(0)}% complete</div>
            <div className="ws-cl-track">
              <div className="ws-cl-fill" style={{ width: `${checklistPct}%` }} />
            </div>
            {checklistPct === 100 && (
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8, fontSize: 11, color: "#15803d", fontWeight: 500 }}>
                <CheckCircle2 size={12} /> All items complete!
              </div>
            )}
          </div>

          {/* Cost summary */}
          <div className="ws-qs-card indigo">
            <div className="ws-qs-label"><DollarSign size={13} /> Total Costs</div>
            <div className="ws-qs-value indigo">${displayCosts.totalCosts.toLocaleString()}</div>
            <div className="ws-qs-sub">Project investment</div>
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                ["Purchase", displayCosts.purchasePrice],
                ["Rehab",    displayCosts.rehabCost],
                ["Holding",  displayCosts.holdingCosts],
                ["Closing",  displayCosts.closingCosts],
              ].map(([label, val]) => (
                <div key={label as string} style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#6b7280" }}>
                  <span>{label}</span>
                  <span style={{ fontWeight: 500, color: "#374151" }}>${(val as number).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="ws-tab-card">
          <div className="ws-tab-nav">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`ws-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="ws-tab-content">

            {/* ── Phase 1 Snapshot ── */}
            {activeTab === "snapshot" && (
              <div>
                {!p1 ? (
                  <div className="snap-no-data">
                    <div className="snap-no-data-icon"><BarChart3 /></div>
                    <div className="snap-no-data-text">No Phase 1 data available</div>
                    <div className="snap-no-data-sub">This property hasn't been processed through Phase 1 underwriting yet.</div>
                  </div>
                ) : (
                  <>
                    {/* Deal verdict */}
                    {p1.deal?.status && (
                      <div className={`snap-verdict ${p1.deal.status === "PASS" ? "pass" : "fail"}`}>
                        <div className="snap-verdict-icon">
                          {p1.deal.status === "PASS"
                            ? <CheckCircle2 size={20} color="#15803d" />
                            : <X size={20} color="#b91c1c" />}
                        </div>
                        <div>
                          <div className="snap-verdict-title">
                            {p1.deal.status === "PASS" ? "Deal Passed Underwriting" : "Deal Failed Underwriting"}
                          </div>
                          <div className="snap-verdict-sub">Phase 1 analysis result</div>
                        </div>
                        {p1.deal.profitPercent != null && (
                          <div style={{ marginLeft: "auto", textAlign: "right" }}>
                            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 600, color: p1.deal.status === "PASS" ? "#15803d" : "#b91c1c" }}>
                              {p1.deal.profitPercent.toFixed(1)}%
                            </div>
                            <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "0.04em" }}>PROFIT %</div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="snap-grid">
                      {/* ARV & Costs */}
                      <div className="snap-card">
                        <div className="snap-card-title"><DollarSign /> Financial Summary</div>
                        {[
                          ["ARV (Final)",     arv     > 0 ? `$${arv.toLocaleString()}`     : "—", "gold"],
                          ["Purchase Price",  purchase > 0 ? `$${purchase.toLocaleString()}` : "—", ""],
                          ["Rehab Cost",      rehab    > 0 ? `$${rehab.toLocaleString()}`    : "—", ""],
                          ["Holding Costs",   holding  > 0 ? `$${holding.toLocaleString()}`  : "—", ""],
                          ["Closing Costs",   closing  > 0 ? `$${closing.toLocaleString()}`  : "—", ""],
                          ["Total Costs",     p1Total  > 0 ? `$${p1Total.toLocaleString()}`  : "—", "red"],
                          ["Gross Profit",    grossProfit !== 0 ? `$${grossProfit.toLocaleString()}` : "—", grossProfit >= 0 ? "green" : "red"],
                          ["Profit %",        profitPct !== "—" ? `${profitPct}%` : "—", Number(profitPct) >= 0 ? "green" : "red"],
                        ].map(([k, v, cls]) => (
                          <div key={k as string} className="snap-row">
                            <span className="snap-key">{k}</span>
                            <span className={`snap-val ${cls}`}>{v}</span>
                          </div>
                        ))}
                      </div>

                      {/* Deal details */}
                      {/* <div className="snap-card">
                        <div className="snap-card-title"><TrendingUp /> Deal Details</div>
                        {[
                          ["Max Offer",       maxOffer       != null ? `$${maxOffer.toLocaleString()}`       : "—", ""],
                          ["Assignment Fee",  assignmentFee  != null ? `$${assignmentFee.toLocaleString()}`  : "—", "gold"],
                          ["Base ARV",        p1.arv?.baseArv  != null ? `$${p1.arv.baseArv.toLocaleString()}` : "—", ""],
                          ["ARV Used",        p1.deal?.arvUsed != null ? `$${p1.deal.arvUsed.toLocaleString()}` : "—", ""],
                          ["Adjustment Steps", p1.arv?.adjustmentSteps?.length != null ? `${p1.arv.adjustmentSteps.length} step(s)` : "—", ""],
                        ].map(([k, v, cls]) => (
                          <div key={k as string} className="snap-row">
                            <span className="snap-key">{k}</span>
                            <span className={`snap-val ${cls}`}>{v}</span>
                          </div>
                        ))}
                      </div> */}
                    </div>

                    {/* Underwriting rules */}
                    {p1.rules && p1.rules.length > 0 && (
                      <div className="snap-card" style={{ marginBottom: 0 }}>
                        <div className="snap-card-title" style={{ marginBottom: 16 }}><Layers /> Underwriting Rules</div>
                        <div className="snap-rules">
                          {p1.rules.map((rule, i) => (
                            <div key={i} className="snap-rule">
                              <div className="snap-rule-left">
                                <span className={`snap-rule-dot ${rule.passed ? "pass" : "fail"}`} />
                                <span className="snap-rule-name">{rule.name}</span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                {rule.value != null && (
                                  <span className="snap-rule-val">
                                    {typeof rule.value === "number" && rule.value > 100 ? `$${rule.value.toLocaleString()}` : `${rule.value}`}
                                    {rule.threshold != null && ` / ${rule.threshold}`}
                                  </span>
                                )}
                                <span style={{
                                  padding: "2px 8px", borderRadius: 10, fontSize: 10, fontWeight: 500,
                                  background: rule.passed ? "#f0fdf4" : "#fef2f2",
                                  color: rule.passed ? "#15803d" : "#b91c1c",
                                  border: `1px solid ${rule.passed ? "#bbf7d0" : "#fecaca"}`,
                                }}>
                                  {rule.passed ? "Pass" : "Fail"}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* ── Checklist ── */}
            {activeTab === "checklist" && (
              <div>
                <div className="cl-header">
                  <div className="cl-title">Due Diligence Checklist</div>
                  <span className="cl-count">{completedCount} / {totalCount} completed</span>
                </div>
                <div className="cl-progress-wrap">
                  <div className="cl-progress-labels">
                    <span>Progress</span>
                    <span className="cl-pct">{checklistPct.toFixed(0)}%</span>
                  </div>
                  <div className="ws-cl-track">
                    <div className="ws-cl-fill" style={{ width: `${checklistPct}%` }} />
                  </div>
                </div>

                {checklistItems.length === 0 ? (
                  <div className="snap-no-data">
                    <div className="snap-no-data-icon"><CheckSquare /></div>
                    <div className="snap-no-data-text">No checklist items</div>
                    <div className="snap-no-data-sub">Checklist items will appear here once created.</div>
                  </div>
                ) : (
                  checklistItems.map(item => (
                    <div key={item._id} className={`cl-item ${item.completed ? "done" : ""}`}>
                      <button className="cl-check-btn" onClick={() => handleChecklistChange(item._id, !item.completed)}>
                        {item.completed
                          ? <CheckCircle2 className="checked" />
                          : <Circle className="unchecked" />}
                      </button>
                      <div style={{ flex: 1 }}>
                        <div className={`cl-label ${item.completed ? "done" : ""}`} onClick={() => handleChecklistChange(item._id, !item.completed)}>
                          {item.label}
                        </div>
                        {item.notes && <div className="cl-notes">{item.notes}</div>}
                        {item.dueDate && (
                          <div className="cl-due">
                            <Calendar size={10} />
                            Due: {new Date(item.dueDate).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                      <span className={`cl-status ${item.completed ? "done" : "pending"}`}>
                        {item.completed ? "Done" : "Pending"}
                      </span>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* ── Cost Config ── */}
            {activeTab === "cost-config" && (
              <div>
                <div className="cc-header">
                  <div>
                    <div className="cc-title">Cost Configuration</div>
                    <div className="cc-sub">Manage and update project costs</div>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {isEditingCosts ? (
                      <>
                        <button className="cc-cancel-btn" onClick={handleCancelEdit} disabled={isSaving}>
                          <X size={13} /> Cancel
                        </button>
                        <button className="cc-save-btn" onClick={handleUpdateCosts} disabled={isSaving}>
                          {isSaving ? <><Loader2 size={13} style={{ animation: "spin 1s linear infinite" }} /> Saving…</> : <><Save size={13} /> Save Changes</>}
                        </button>
                      </>
                    ) : (
                      <button className="cc-edit-btn" onClick={() => setIsEditingCosts(true)}>
                        <Edit2 size={13} /> Edit Costs
                      </button>
                    )}
                  </div>
                </div>

                <div className="cc-field-grid">
                  {([
                    ["Purchase Price", "purchasePrice"],
                    ["Rehab Cost",     "rehabCost"],
                    ["Holding Costs",  "holdingCosts"],
                    ["Closing Costs",  "closingCosts"],
                  ] as [string, keyof ExecutionCosts][]).map(([label, key]) => (
                    <div key={key} className={`cc-field ${isEditingCosts ? "editing" : ""}`}>
                      <div className="cc-field-label">{label}</div>
                      <div className="cc-input-wrap">
                        <span className="cc-dollar">$</span>
                        <Input
                          type="number"
                          value={isEditingCosts ? (editedCosts[key] ?? 0) : (displayCosts[key as keyof typeof displayCosts] ?? 0)}
                          onChange={e => setEditedCosts({ ...editedCosts, [key]: parseFloat(e.target.value) || 0 })}
                          disabled={!isEditingCosts}
                          style={{ paddingLeft: 24, fontWeight: 500 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cc-total-card">
                  <div className="cc-total-left">
                    <div className="cc-total-icon"><DollarSign size={18} /></div>
                    <div>
                      <div className="cc-total-label">Total Project Costs</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
                        {isEditingCosts ? "Auto-calculated from inputs" : "Current total investment"}
                      </div>
                    </div>
                  </div>
                  <div className="cc-total-val">
                    ${(isEditingCosts ? editedTotal : displayCosts.totalCosts).toLocaleString()}
                  </div>
                </div>

                <div className="cc-info">
                  <AlertCircle size={14} />
                  <span>Costs are automatically totalled when saved. Changes are logged in the cost history below.</span>
                </div>

                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, padding: 20 }}>
                  <CostHistory workspaceId={data.workspace?._id} refreshTrigger={refreshTrigger} />
                </div>
              </div>
            )}

            {activeTab === "tasks"       && <TasksManager />}
            {activeTab === "contractors" && <ContractorsManager />}
            {activeTab === "timeline"    && <TimelineTracker />}
            {activeTab === "inspections" && <InspectionTracker />}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}