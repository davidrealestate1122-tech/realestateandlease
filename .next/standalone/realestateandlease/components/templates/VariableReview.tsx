"use client"

import { useEffect, useState, useRef } from "react"
import {
  Tag, Save, Loader2, CheckCircle, AlertCircle,
  SlidersHorizontal, User, ChevronDown, RefreshCw,
  Building2, X, Search, Zap, Calendar, Briefcase,
  Landmark, HardHat, Building, Lock, Unlock, Edit2
} from "lucide-react"

type Profile  = { _id: string; name: string; type: string; data: Record<string, string> }
type Property = { _id: string; name?: string; address?: string; city?: string; state?: string; [key: string]: any }
type Variable = {
  _id: string
  variable: string
  mappedTo?: string
  value?: string
  source?: "property" | "profile" | "deal" | "database" | "manual" | ""
  required?: boolean
}
interface Props {
  templateId: string
  propertyId?: string
  onValuesChange?: (vars: Variable[]) => void
  onSave?: (vars: any) => void
}
interface ExecutionData {
  property?: { _id?: string; address?: string; city?: string; state?: string; zipCode?: string }
  phase1?: {
    arv?: { baseArv?: number; finalArv?: number }
    costs?: { purchasePrice?: number; rehabCost?: number; holdingCosts?: number; closingCosts?: number; totalCosts?: number }
  }
  workspace?: {
    executionCosts?: { purchasePrice?: number; rehabCost?: number; holdingCosts?: number; closingCosts?: number; totalCosts?: number }
    startDate?: string; endDate?: string; projectDuration?: string
    loanAmount?: number; interestRate?: number; loanTerm?: string
    lenderName?: string; additionalNotes?: string
  }
  contractor?: { _id?: string; name?: string; email?: string; phone?: string }
  investor?: { name?: string; email?: string; phone?: string; companyName?: string }
}

const norm = (s: string) => s.toLowerCase().replace(/[_\s\-]/g, "")

const PROFILE_TYPE_VARS: Record<string, { varPatterns: string[]; fieldMap: Record<string, string> }> = {
  investor: {
    varPatterns: ["investor", "company"],
    fieldMap: {
      "Full Name": "Investor_Name", "Email": "Investor_Email", "Phone": "Investor_Phone",
      "Entity Name": "Company_Name", "Address": "Investor_Address",
      "Tax ID": "Tax_ID", "Investment Focus": "Investment_Focus",
    }
  },
  lender: {
    varPatterns: ["lender", "loan", "interest", "rate", "term"],
    fieldMap: {
      "Lender Name": "Lender_Name", "Contact Name": "Lender_Contact",
      "Email": "Lender_Email", "Phone": "Lender_Phone",
      "Loan Programs": "Loan_Programs", "Rate Range": "Interest_Rate",
      "Max LTV": "Max_LTV", "Address": "Lender_Address",
    }
  },
  contractor: {
    varPatterns: ["contractor"],
    fieldMap: {
      "Company Name": "Contractor_Company", "Contact Name": "Contractor_Name",
      "Email": "Contractor_Email", "Phone": "Contractor_Phone",
      "License Number": "License_Number", "Trade": "Trade",
      "Address": "Contractor_Address", "Insurance Expiry": "Insurance_Expiry",
    }
  },
  company: {
    varPatterns: ["company", "abn", "director", "website"],
    fieldMap: {
      "Company Name": "Company_Name", "ABN/EIN": "ABN_EIN",
      "Address": "Company_Address", "Phone": "Company_Phone",
      "Email": "Company_Email", "Director Name": "Director_Name", "Website": "Website",
    }
  }
}

function applyProfileToVars(vars: Variable[], profile: Profile): Variable[] {
  const config = PROFILE_TYPE_VARS[profile.type]
  if (!config) return vars
  const lookup: Record<string, string> = {}
  for (const [fieldLabel, templateVar] of Object.entries(config.fieldMap)) {
    const val = profile.data[fieldLabel]?.trim()
    if (val) { lookup[norm(templateVar)] = val; lookup[norm(fieldLabel)] = val }
  }
  return vars.map(v => {
    if (v.source === "manual") return v
    const nv = norm(v.variable)
    const nm = v.mappedTo ? norm(v.mappedTo) : ""
    const val = lookup[nv] ?? lookup[nm]
    if (val) return { ...v, value: val, source: "profile" as const }
    const isRelevant = config.varPatterns.some(p => nv.includes(p))
    if (isRelevant) {
      for (const [k, v2] of Object.entries(lookup)) {
        if (nv.includes(k) || k.includes(nv)) return { ...v, value: v2, source: "profile" as const }
      }
    }
    return v
  })
}

function buildExecutionMap(d: ExecutionData): Record<string, string> {
  const fmt = (n?: number) => n != null ? String(n) : ""
  const costs = d.workspace?.executionCosts ?? d.phase1?.costs ?? {}
  const arv   = d.phase1?.arv?.finalArv ?? d.phase1?.arv?.baseArv ?? 0
  const gross = arv && costs.totalCosts ? arv - costs.totalCosts : undefined
  return Object.fromEntries(Object.entries({
    Property_Address: d.property?.address ?? "", City: d.property?.city ?? "",
    State: d.property?.state ?? "", Zip_Code: d.property?.zipCode ?? "",
    Investor_Name: d.investor?.name ?? "", Company_Name: d.investor?.companyName ?? "",
    Investor_Email: d.investor?.email ?? "", Investor_Phone: d.investor?.phone ?? "",
    Purchase_Price: fmt(costs.purchasePrice), ARV: fmt(arv),
    Rehab_Budget: fmt(costs.rehabCost), Holding_Costs: fmt(costs.holdingCosts),
    Closing_Costs: fmt(costs.closingCosts), Total_Project_Cost: fmt(costs.totalCosts),
    Estimated_Profit: gross != null ? String(gross) : "",
    Loan_Amount: fmt(d.workspace?.loanAmount),
    Interest_Rate: d.workspace?.interestRate != null ? String(d.workspace.interestRate) : "",
    Loan_Term: d.workspace?.loanTerm ?? "", Lender_Name: d.workspace?.lenderName ?? "",
    Contractor_Name: d.contractor?.name ?? "", Contractor_Email: d.contractor?.email ?? "",
    Contractor_Phone: d.contractor?.phone ?? "",
    Start_Date: d.workspace?.startDate ?? "", End_Date: d.workspace?.endDate ?? "",
    Project_Duration: d.workspace?.projectDuration ?? "",
    Additional_Notes: d.workspace?.additionalNotes ?? "",
  }).filter(([, v]) => v !== ""))
}

function applyExecMap(vars: Variable[], execMap: Record<string, string>): Variable[] {
  return vars.map(v => {
    const nv = norm(v.variable)
    for (const [k, val] of Object.entries(execMap)) {
      if (norm(k) === nv && val) return { ...v, value: val, source: "property" as const }
    }
    if (v.mappedTo) {
      const nm = norm(v.mappedTo)
      for (const [k, val] of Object.entries(execMap)) {
        if (norm(k) === nm && val) return { ...v, value: val, source: "property" as const }
      }
    }
    return v
  })
}

const isDateVar = (name: string) => {
  const n = norm(name)
  return n.includes("date") || n.includes("startdate") || n.includes("enddate") || n.includes("expiry")
}

const SOURCE_STYLES: Record<string, { label: string; color: string; bg: string }> = {
  property:  { label: "property", color: "#1d6f42", bg: "rgba(29,110,66,0.10)"    },
  profile:   { label: "profile",  color: "#4f46e5", bg: "rgba(79,70,229,0.10)"    },
  deal:      { label: "deal",     color: "#0369a1", bg: "rgba(3,105,161,0.10)"    },
  database:  { label: "db",       color: "#6b7280", bg: "rgba(107,114,128,0.10)"  },
  manual:    { label: "edited",   color: "#92700a", bg: "rgba(196,162,96,0.12)"   },
}

const PROFILE_TYPE_CONFIG: Record<string, { label: string; icon: any; color: string; bg: string; border: string }> = {
  investor:   { label: "Investor",   icon: User,     color: "#0369a1", bg: "rgba(3,105,161,0.06)",   border: "rgba(3,105,161,0.2)"   },
  lender:     { label: "Lender",     icon: Landmark, color: "#7c3aed", bg: "rgba(124,58,237,0.06)",  border: "rgba(124,58,237,0.2)"  },
  contractor: { label: "Contractor", icon: HardHat,  color: "#b45309", bg: "rgba(180,83,9,0.06)",    border: "rgba(180,83,9,0.2)"    },
  company:    { label: "Company",    icon: Building, color: "#1d6f42", bg: "rgba(29,110,66,0.06)",   border: "rgba(29,110,66,0.2)"   },
}

const VAR_GROUPS: { label: string; match: (n: string) => boolean }[] = [
  { label: "Property",   match: n => n.includes("property") || n.includes("address") || n === "city" || n === "state" || n.includes("zip") },
  { label: "Investor",   match: n => n.includes("investor") || (n.includes("company") && !n.includes("contractor")) },
  { label: "Financials", match: n => n.includes("purchase") || n === "arv" || n.includes("rehab") || n.includes("holding") || n.includes("closing") || n.includes("total") || n.includes("profit") },
  { label: "Loan",       match: n => n.includes("loan") || n.includes("interest") || n.includes("lender") || n.includes("rate") || n.includes("term") },
  { label: "Contractor", match: n => n.includes("contractor") },
  { label: "Timeline",   match: n => n.includes("start") || n.includes("end") || n.includes("date") || n.includes("duration") },
  { label: "Other",      match: () => true },
]

// ─────────────────────────────────────────────────────────────────────────────
export default function VariableReview({ templateId, propertyId: initPropertyId, onValuesChange, onSave }: Props) {
  const [variables,        setVariables]        = useState<Variable[]>([])
  const [profiles,         setProfiles]         = useState<Profile[]>([])
  const [properties,       setProperties]       = useState<Property[]>([])
  const [selectedProperty, setSelectedProperty] = useState(initPropertyId ?? "")
  const [selectedProfiles, setSelectedProfiles] = useState<Record<string, string>>({})
  const [loading,          setLoading]          = useState(true)
  const [loadingProps,     setLoadingProps]      = useState(true)
  const [loadingProfiles,  setLoadingProfiles]   = useState(true)
  const [saving,           setSaving]           = useState(false)
  const [saveStatus,       setSaveStatus]       = useState<"idle"|"success"|"error">("idle")
  const [showMissing,      setShowMissing]      = useState(false)
  const [propOpen,         setPropOpen]         = useState(false)
  const [profileOpenType,  setProfileOpenType]  = useState<string|null>(null)
  const [propSearch,       setPropSearch]       = useState("")
  const [autoFilled,       setAutoFilled]       = useState(0)
  // ── NEW: lock state ───────────────────────────────────────────────────────
 const [propertyLocked, setPropertyLocked] = useState(!!initPropertyId)

  const propRef    = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  // notify parent after commit, never inside a state setter
  const onValuesChangeRef = useRef(onValuesChange)
  const onSaveRef = useRef(onSave)
  useEffect(() => { onValuesChangeRef.current = onValuesChange })
  const prevVarsRef = useRef(variables)
  useEffect(() => {
    if (prevVarsRef.current === variables) return
    prevVarsRef.current = variables
    onValuesChangeRef.current?.(variables)
  })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (propRef.current    && !propRef.current.contains(e.target as Node))    setPropOpen(false)
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpenType(null)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const loadVariables = async (keepValues = false, propertyIdOverride?: string) => {
    onSaveRef.current?.(variables);
    setLoading(true)
   const pid = propertyIdOverride ?? selectedProperty ?? initPropertyId  
    try {
      const [varsRes, savedRes] = await Promise.all([
        fetch(`/api/templates/${templateId}/variables`),
        pid ? fetch(`/api/templates/${templateId}/values?propertyId=${pid}`) : Promise.resolve(null)
      ])
      const vars = await varsRes.json()
      const saved = savedRes ? await savedRes.json() : []
      if (!Array.isArray(vars)) { setVariables([]); return }
      const savedMap: Record<string, { value: string; source: string }> = {}
      if (keepValues && Array.isArray(saved)) {
        for (const s of saved) {
          if (s.value?.trim()) savedMap[s.variable] = { value: s.value, source: s.source ?? "manual" }
        }
      }
      const merged: any = vars.map((v: Variable) => {
        const override = savedMap[v.variable]
        if (override?.value) return { ...v, value: override.value, source: override.source as Variable["source"] }
        return { ...v, value: "", source: "" }
      })
      setVariables(merged)
    } catch { setVariables([]) }
    finally  { setLoading(false) }
  }

  useEffect(() => {
    if (!templateId) return
    setVariables([])
    setSelectedProperty(initPropertyId ?? "")
    setSelectedProfiles({})
    setAutoFilled(0)
    setShowMissing(false)
    setSaveStatus("idle")
    // unlock when template changes
    setPropertyLocked(!!initPropertyId)
    loadVariables(true)
    fetch("/api/execution/properties").then(r => r.json())
      .then(d => setProperties(Array.isArray(d) ? d : [])).catch(() => setProperties([]))
      .finally(() => setLoadingProps(false))
    fetch("/api/profiles").then(r => r.json())
      .then(d => setProfiles(Array.isArray(d) ? d : [])).catch(() => setProfiles([]))
      .finally(() => setLoadingProfiles(false))
  }, [templateId])

  const applyProperty = async (propertyId: string) => {
    setSelectedProperty(propertyId)
    setPropOpen(false)
    setPropSearch("")
    setAutoFilled(0)
    if (!propertyId) { await loadVariables(true); return }
    try {
      const [execRes, savedRes] = await Promise.all([
        fetch(`/api/execution/properties/${propertyId}`, { cache: "no-store" }),
        fetch(`/api/templates/${templateId}/values?propertyId=${propertyId}`)
      ])
      const exec: ExecutionData = await execRes.json()
      const saved = await savedRes.json()
      const savedMap: Record<string, { value: string; source: string }> = {}
      if (Array.isArray(saved)) {
        for (const s of saved) savedMap[s.variable] = { value: s.value, source: s.source ?? "manual" }
      }
      const execMap = buildExecutionMap(exec)
      setVariables(prev => {
        const updated = prev.map(v => {
          const sv = savedMap[v.variable]
          if (sv?.value) return { ...v, value: sv.value, source: sv.source as Variable["source"] }
          const nv = norm(v.variable)
          for (const [k, val] of Object.entries(execMap)) {
            if (norm(k) === nv && val) return { ...v, value: val, source: "property" as const }
          }
          return v
        })
        setAutoFilled(updated.filter(v => v.value?.trim()).length)
        return updated
      })
    } catch {}
  }

  const applyProfileType = (type: string, profileId: string) => {
    setSelectedProfiles(prev => ({ ...prev, [type]: profileId }))
    setProfileOpenType(null)
    if (!profileId) return
    const profile = profiles.find(p => p._id === profileId)
    if (!profile) return
    setVariables(prev => {
      const updated = applyProfileToVars(prev, profile)
      setAutoFilled(updated.filter(v => v.source === "profile" && v.value?.trim()).length)
      return updated
    })
  }

  const updateValue = (id: string, value: string) => {
    setVariables(prev => {
      const updated = prev.map(v => v._id === id ? { ...v, value, source: "manual" as const } : v)
      const startVar = updated.find(v => norm(v.variable).includes("start") && norm(v.variable).includes("date"))
      const endVar   = updated.find(v => norm(v.variable).includes("end")   && norm(v.variable).includes("date"))
      const durVar   = updated.find(v => norm(v.variable).includes("duration") || norm(v.variable).includes("projectduration"))
      if (startVar?.value && endVar?.value && durVar) {
        const start = new Date(startVar.value)
        const end   = new Date(endVar.value)
        const days  = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
        if (days > 0) {
          const weeks = Math.floor(days / 7), months = Math.floor(days / 30)
          const duration = months >= 2 ? `${months} months`
            : weeks >= 1 ? `${weeks} week${weeks > 1 ? "s" : ""} (${days} days)`
            : `${days} day${days > 1 ? "s" : ""}`
          return updated.map(v => v._id === durVar._id ? { ...v, value: duration, source: "manual" as const } : v)
        }
      }
      return updated
    })
    setShowMissing(false)
  }

  const save = async () => {
    const missing = variables.filter(v => v.required && !v.value?.trim())
    if (missing.length > 0) { setShowMissing(true); return }
    setSaving(true); setSaveStatus("idle")
    try {
      const res = await fetch("/api/templates/save-values", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId, propertyId: selectedProperty, variables }),
      })
      if (!res.ok) throw new Error()
      setSaveStatus("success")
      // ── LOCK the property selector after a successful save ──
      setPropertyLocked(true)
    } catch { setSaveStatus("error") }
    finally { setSaving(false); setTimeout(() => setSaveStatus("idle"), 2200) }
  }

  // unlock: allow the user to pick a different property (clears saved lock)
  const unlockProperty = () => {
   // setPropertyLocked(false)
   alert("cant change property because this template is locked to the current property. To change the property, please create a new Template.")
  }

  const filledCount     = variables.filter(v => v.value?.trim()).length
  const missingRequired = variables.filter(v => v.required && !v.value?.trim())
  const selectedPropObj = properties.find(p => p._id === selectedProperty)
  const filteredProps   = properties.filter(p =>
    (p.name ?? p.address ?? "").toLowerCase().includes(propSearch.toLowerCase()) ||
    (p.address ?? "").toLowerCase().includes(propSearch.toLowerCase())
  )
  const pct = variables.length ? Math.round((filledCount / variables.length) * 100) : 0

  const grouped: { label: string; vars: Variable[] }[] = []
  const assigned = new Set<string>()
  for (const g of VAR_GROUPS) {
    const vars = variables.filter(v => !assigned.has(v._id) && g.match(norm(v.variable)))
    if (vars.length) { vars.forEach(v => assigned.add(v._id)); grouped.push({ label: g.label, vars }) }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .vr{font-family:'DM Sans',sans-serif;margin-top:24px}
        .vr-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:visible;position:relative}
        .vr-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#c4a260,rgba(196,162,96,.1));border-radius:12px 12px 0 0}

        .vr-header{display:flex;align-items:center;justify-content:space-between;padding:18px 22px 14px;border-bottom:1px solid #f3f4f6}
        .vr-header-left{display:flex;align-items:center;gap:10px}
        .vr-hicon{width:34px;height:34px;background:rgba(196,162,96,.08);border:1px solid rgba(196,162,96,.2);border-radius:8px;display:flex;align-items:center;justify-content:center}
        .vr-hicon svg{width:15px;height:15px;color:#92700a}
        .vr-htitle{font-family:'Cormorant Garamond',Georgia,serif;font-size:17px;font-weight:600;color:#111827;letter-spacing:-.01em}
        .vr-hright{display:flex;align-items:center;gap:12px}
        .vr-pct-ring{position:relative;width:38px;height:38px}
        .vr-pct-ring svg{transform:rotate(-90deg)}
        .vr-pct-ring circle{transition:stroke-dashoffset .4s}
        .vr-pct-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:600;color:#92700a}
        .vr-filled-badge{font-size:10.5px;font-weight:500;color:#92700a;background:rgba(196,162,96,.1);padding:4px 10px;border-radius:20px}

        .vr-toast{margin:10px 22px 0;padding:9px 14px;border-radius:7px;background:rgba(79,70,229,.06);border:1px solid rgba(79,70,229,.18);display:flex;align-items:center;gap:8px;font-size:12px;color:#4f46e5;animation:vr-fade .25s ease}
        .vr-toast svg{width:13px;height:13px;flex-shrink:0}
        @keyframes vr-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}

        /* ── Property bar — locked vs unlocked states ── */
        .vr-prop-bar{padding:12px 22px;border-bottom:1px solid #f3f4f6;background:#fafafa;display:flex;align-items:center;gap:10px}
        .vr-prop-lbl{font-size:11px;color:#9ca3af;font-weight:400;white-space:nowrap;min-width:68px}

        /* locked display */
        .vr-prop-locked{display:flex;align-items:center;gap:10px;flex:1}
        .vr-prop-locked-pill{display:flex;align-items:center;gap:8px;flex:1;padding:8px 14px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px}
        .vr-prop-locked-pill svg.lock-ico{width:13px;height:13px;color:#15803d;flex-shrink:0}
        .vr-prop-locked-name{font-size:12.5px;font-weight:500;color:#111827;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .vr-prop-locked-tag{font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border-radius:3px;background:#dcfce7;color:#15803d;flex-shrink:0}
        .vr-change-btn{display:flex;align-items:center;gap:5px;padding:7px 13px;background:#fff;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:11.5px;font-weight:500;color:#374151;cursor:pointer;white-space:nowrap;transition:border-color .15s,color .15s;flex-shrink:0}
        .vr-change-btn:hover{border-color:rgba(196,162,96,.4);color:#92700a}
        .vr-change-btn svg{width:12px;height:12px}

        /* unlocked selector */
        .vr-sel-wrap{position:relative;flex:1}
        .vr-sel-btn{display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;background:#fff;border:1px solid #e5e7eb;border-radius:7px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12.5px;color:#374151;transition:border-color .15s;text-align:left}
        .vr-sel-btn:hover{border-color:rgba(196,162,96,.45)}
        .vr-sel-btn.active{border-color:rgba(196,162,96,.5);background:rgba(196,162,96,.03)}
        .vr-sel-btn .ico{width:13px;height:13px;color:#9ca3af;flex-shrink:0}
        .vr-sel-btn .chv{width:13px;height:13px;color:#9ca3af;margin-left:auto;flex-shrink:0}
        .vr-sel-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .vr-sel-name.ph{color:#9ca3af}
        .vr-applied-pill{font-size:10px;font-weight:500;letter-spacing:.05em;padding:3px 9px;border-radius:20px;white-space:nowrap;flex-shrink:0}
        .vr-applied-pill.property{background:rgba(29,110,66,.1);color:#1d6f42}
        .vr-clear-btn{display:flex;align-items:center;gap:4px;padding:4px 9px;background:#fff;border:1px solid #e5e7eb;border-radius:5px;font-size:10px;color:#6b7280;cursor:pointer;white-space:nowrap;transition:all .1s;flex-shrink:0}
        .vr-clear-btn:hover{background:#fef2f2;border-color:#fca5a5;color:#dc2626}
        .vr-clear-btn svg{width:10px;height:10px}

        /* profiles */
        .vr-profiles-section{padding:12px 22px;border-bottom:1px solid #f3f4f6;background:#fafafa}
        .vr-profiles-title{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px}
        .vr-profiles-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
        .vr-profile-card{border-radius:8px;border:1px solid #e5e7eb;background:#fff;overflow:visible;position:relative}
        .vr-profile-card-header{display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid #f3f4f6}
        .vr-profile-type-icon{width:26px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .vr-profile-type-icon svg{width:12px;height:12px}
        .vr-profile-type-label{font-size:11px;font-weight:600;letter-spacing:.05em}
        .vr-profile-selector{padding:7px 10px;display:flex;align-items:center;gap:6px;cursor:pointer;position:relative}
        .vr-profile-sel-btn{display:flex;align-items:center;gap:6px;width:100%;padding:6px 10px;background:#fafafa;border:1px solid #e5e7eb;border-radius:6px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:11.5px;color:#374151;transition:border-color .15s;text-align:left}
        .vr-profile-sel-btn:hover{border-color:rgba(196,162,96,.4)}
        .vr-profile-sel-btn.active{border-color:rgba(196,162,96,.5);background:rgba(196,162,96,.04)}
        .vr-profile-sel-btn svg{width:11px;height:11px;color:#9ca3af;flex-shrink:0}
        .vr-profile-sel-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11.5px}
        .vr-profile-sel-name.ph{color:#9ca3af}
        .vr-profile-clear{display:flex;align-items:center;padding:2px 6px;border:1px solid #e5e7eb;border-radius:4px;font-size:9px;color:#9ca3af;cursor:pointer;background:#fff;gap:3px;flex-shrink:0;transition:all .1s}
        .vr-profile-clear:hover{background:#fef2f2;border-color:#fca5a5;color:#dc2626}
        .vr-profile-clear svg{width:9px;height:9px}
        .vr-profile-applied{font-size:9px;font-weight:600;letter-spacing:.06em;padding:2px 7px;border-radius:3px;background:rgba(79,70,229,.08);color:#4f46e5;flex-shrink:0}

        /* dropdown */
        .vr-dd{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:300;background:#fff;border:1px solid #e5e7eb;border-radius:9px;box-shadow:0 8px 32px rgba(0,0,0,.13);overflow:hidden}
        .vr-dd-search{display:flex;align-items:center;gap:8px;padding:9px 13px;border-bottom:1px solid #f3f4f6}
        .vr-dd-search svg{width:13px;height:13px;color:#9ca3af;flex-shrink:0}
        .vr-dd-search input{flex:1;border:none;outline:none;font-family:'DM Sans',sans-serif;font-size:12.5px;color:#111827;background:transparent}
        .vr-dd-scroll{max-height:200px;overflow-y:auto}
        .vr-dd-item{display:flex;align-items:center;gap:10px;padding:9px 13px;cursor:pointer;font-size:12.5px;color:#374151;transition:background .1s}
        .vr-dd-item:hover{background:#fafafa}
        .vr-dd-item.sel{background:rgba(196,162,96,.07)}
        .vr-dd-item svg{width:13px;height:13px;color:#9ca3af;flex-shrink:0}
        .vr-dd-body{flex:1;min-width:0}
        .vr-dd-name{font-size:12.5px;font-weight:500;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .vr-dd-sub{font-size:11px;color:#9ca3af;margin-top:1px}
        .vr-dd-empty{padding:16px;font-size:12px;color:#9ca3af;text-align:center}

        /* priority chain */
        .vr-chain{display:flex;align-items:center;gap:6px;padding:8px 22px;border-bottom:1px solid #f3f4f6;background:#f9fafb;flex-wrap:wrap}
        .vr-chain-lbl{font-size:10px;color:#9ca3af;font-weight:300}
        .vr-chain-step{font-size:10px;font-weight:500;padding:2px 9px;border-radius:4px;transition:all .2s}
        .vr-chain-step.on{background:rgba(196,162,96,.12);color:#92700a}
        .vr-chain-step.off{background:#f3f4f6;color:#c4c9d4}
        .vr-chain-arr{font-size:10px;color:#e5e7eb}

        .vr-missing{margin:12px 22px 0;padding:10px 14px;border-radius:7px;background:#fef2f2;border:1px solid #fecaca;display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#dc2626;animation:vr-fade .2s ease}
        .vr-missing svg{width:14px;height:14px;flex-shrink:0;margin-top:1px}

        .vr-section{padding:0 22px}
        .vr-section-title{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#c4c9d4;padding:14px 0 8px;display:flex;align-items:center;gap:8px}
        .vr-section-title::after{content:'';flex:1;height:1px;background:#f3f4f6}

        .vr-row{display:grid;grid-template-columns:190px 1fr;align-items:center;gap:12px;padding:5px 0}
        .vr-label{display:flex;align-items:center;gap:7px;font-size:12.5px;font-weight:500;color:#374151;overflow:hidden}
        .vr-lico{width:22px;height:22px;background:rgba(196,162,96,.06);border:1px solid rgba(196,162,96,.14);border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .vr-lico svg{width:10px;height:10px;color:rgba(146,112,10,.6)}
        .vr-ltext{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .vr-req-dot{width:5px;height:5px;border-radius:50%;background:#dc2626;flex-shrink:0}
        .vr-input-row{display:flex;align-items:center;gap:7px}
        .vr-input-wrap{position:relative;flex:1}
        .vr-input{width:100%;padding:8px 13px;background:#fafafa;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:12.5px;color:#111827;outline:none;transition:all .15s;box-sizing:border-box}
        .vr-input::placeholder{color:#d1d5db;font-weight:300}
        .vr-input:focus{background:#fff;border-color:rgba(196,162,96,.5);box-shadow:0 0 0 3px rgba(196,162,96,.07)}
        .vr-input.filled{border-color:rgba(196,162,96,.22);background:rgba(196,162,96,.02)}
        .vr-input.err{border-color:#fca5a5;background:#fef2f2}
        .vr-date-wrap{position:relative;flex:1}
        .vr-date-icon{position:absolute;left:11px;top:50%;transform:translateY(-50%);pointer-events:none}
        .vr-date-icon svg{width:13px;height:13px;color:#9ca3af}
        .vr-date-input{width:100%;padding:8px 13px 8px 34px;background:#fafafa;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:12.5px;color:#111827;outline:none;transition:all .15s;box-sizing:border-box;cursor:pointer}
        .vr-date-input:focus{background:#fff;border-color:rgba(196,162,96,.5);box-shadow:0 0 0 3px rgba(196,162,96,.07)}
        .vr-date-input.filled{border-color:rgba(196,162,96,.22);background:rgba(196,162,96,.02)}
        .vr-date-input.err{border-color:#fca5a5;background:#fef2f2}
        .vr-date-input::-webkit-calendar-picker-indicator{opacity:.5;cursor:pointer}
        .vr-src{font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border-radius:3px;white-space:nowrap;flex-shrink:0}

        .vr-footer{display:flex;align-items:center;justify-content:space-between;padding:14px 22px 18px;border-top:1px solid #f3f4f6;gap:12px;flex-wrap:wrap;margin-top:8px}
        .vr-foot-left{display:flex;flex-direction:column;gap:5px}
        .vr-foot-hint{font-size:11px;color:#9ca3af;font-weight:300}
        .vr-legend{display:flex;gap:10px;flex-wrap:wrap}
        .vr-leg-item{display:flex;align-items:center;gap:4px;font-size:10px;color:#9ca3af}
        .vr-leg-dot{width:6px;height:6px;border-radius:2px}
        .vr-foot-right{display:flex;gap:8px;align-items:center}
        .vr-refresh{display:flex;align-items:center;gap:5px;padding:8px 13px;background:#fff;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:12px;color:#6b7280;cursor:pointer;transition:background .12s}
        .vr-refresh:hover{background:#f9fafb}
        .vr-refresh svg{width:12px;height:12px}
        .vr-save{display:flex;align-items:center;gap:7px;padding:9px 22px;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:12.5px;font-weight:500;letter-spacing:.03em;cursor:pointer;border:1px solid transparent;transition:all .15s}
        .vr-save:disabled{cursor:not-allowed;opacity:.55}
        .vr-save svg{width:13px;height:13px}
        .vr-save.idle{background:linear-gradient(135deg,rgba(196,162,96,.92),rgba(146,112,10,.96));border-color:rgba(196,162,96,.4);color:#fff;box-shadow:0 2px 8px rgba(196,162,96,.22)}
        .vr-save.idle:hover:not(:disabled){opacity:.9;box-shadow:0 4px 14px rgba(196,162,96,.32)}
        .vr-save.saving{background:#f9fafb;border-color:#e5e7eb;color:#6b7280}
        .vr-save.success{background:#f0fdf4;border-color:#bbf7d0;color:#15803d}
        .vr-save.error{background:#fef2f2;border-color:#fecaca;color:#dc2626}
        .vr-spin{animation:vr-spin .7s linear infinite}
        @keyframes vr-spin{to{transform:rotate(360deg)}}

        .vr-skel-wrap{padding:16px 22px;display:flex;flex-direction:column;gap:12px}
        .vr-skel-row{display:flex;align-items:center;gap:10px}
        .vr-skel{background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);background-size:200% 100%;animation:vskel 1.4s infinite;border-radius:5px}
        @keyframes vskel{0%{background-position:200% 0}100%{background-position:-200% 0}}
        .vr-empty{padding:44px 24px;text-align:center}
        .vr-eico{width:46px;height:46px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px}
        .vr-eico svg{width:18px;height:18px;color:#9ca3af}
        .vr-etitle{font-size:13px;font-weight:500;color:#374151;margin-bottom:3px}
        .vr-esub{font-size:12px;color:#9ca3af;font-weight:300}
      `}</style>

      <div className="vr">
        <div className="vr-card">

          {/* Header */}
          <div className="vr-header">
            <div className="vr-header-left">
              <div className="vr-hicon"><SlidersHorizontal /></div>
              <div className="vr-htitle">Variable Review</div>
            </div>
            {!loading && variables.length > 0 && (
              <div className="vr-hright">
                <span className="vr-filled-badge">{filledCount}/{variables.length} filled</span>
                <div className="vr-pct-ring">
                  <svg width="38" height="38" viewBox="0 0 38 38">
                    <circle cx="19" cy="19" r="15" fill="none" stroke="#f0f0f0" strokeWidth="3"/>
                    <circle cx="19" cy="19" r="15" fill="none" stroke="#c4a260" strokeWidth="3"
                      strokeDasharray={`${2 * Math.PI * 15}`}
                      strokeDashoffset={`${2 * Math.PI * 15 * (1 - pct / 100)}`}
                      strokeLinecap="round"/>
                  </svg>
                  <span className="vr-pct-num">{pct}%</span>
                </div>
              </div>
            )}
          </div>

          {/* Auto-fill toast */}
          {autoFilled > 0 && (
            <div className="vr-toast">
              <Zap /><span><strong>{autoFilled} fields</strong> auto-filled</span>
            </div>
          )}

          {/* ── Property bar — locked vs unlocked ── */}
          <div className="vr-prop-bar" ref={propRef}>
            <span className="vr-prop-lbl">Property:</span>

            {propertyLocked && selectedPropObj ? (
              /* LOCKED state — shows green pill + Change button */
              <div className="vr-prop-locked">
                <div className="vr-prop-locked-pill">
                  <Lock className="lock-ico" />
                  <span className="vr-prop-locked-name">
                    {selectedPropObj.address || selectedPropObj.name || "Selected property"}
                  </span>
                  <span className="vr-prop-locked-tag">saved</span>
                </div>
                <button className="vr-change-btn" onClick={unlockProperty}>
                  <Edit2 /> Change
                </button>
              </div>
            ) : (
              /* UNLOCKED state — normal dropdown */
              <>
                <div className="vr-sel-wrap">
                  <button
                    className={`vr-sel-btn${selectedPropObj ? " active" : ""}`}
                    onClick={() => { setPropOpen(o => !o); setProfileOpenType(null) }}
                  >
                    <Building2 className="ico" />
                    <span className={`vr-sel-name${!selectedPropObj ? " ph" : ""}`}>
                      {loadingProps ? "Loading…"
                        : selectedPropObj
                          ? (selectedPropObj.address || selectedPropObj.name || "Selected property")
                          : "Select a property…"}
                    </span>
                    <ChevronDown className="chv" />
                  </button>

                  {propOpen && (
                    <div className="vr-dd">
                      <div className="vr-dd-search">
                        <Search />
                        <input autoFocus placeholder="Search properties…" value={propSearch}
                          onChange={e => setPropSearch(e.target.value)} />
                      </div>
                      <div className="vr-dd-scroll">
                        <div className="vr-dd-item" onClick={() => applyProperty("")}>
                          <Building2 /><div className="vr-dd-body"><div className="vr-dd-name">None</div></div>
                        </div>
                        {filteredProps.map(p => (
                          <div key={p._id}
                            className={`vr-dd-item${selectedProperty === p._id ? " sel" : ""}`}
                            onClick={() => applyProperty(p._id)}>
                            <Building2 />
                            <div className="vr-dd-body">
                              <div className="vr-dd-name">{p.address || p.name || p._id}</div>
                              {p.city && <div className="vr-dd-sub">{[p.city, p.state].filter(Boolean).join(", ")}</div>}
                            </div>
                          </div>
                        ))}
                        {filteredProps.length === 0 && <div className="vr-dd-empty">No properties match</div>}
                      </div>
                    </div>
                  )}
                </div>

                {selectedPropObj && (
                  <>
                    <span className="vr-applied-pill property">applied</span>
                    <button className="vr-clear-btn" onClick={() => applyProperty("")}><X /> Clear</button>
                  </>
                )}
              </>
            )}
          </div>

          {/* Profile selectors — 2×2 grid */}
          <div className="vr-profiles-section" ref={profileRef}>
            <div className="vr-profiles-title">Profiles</div>
            <div className="vr-profiles-grid">
              {(["investor","lender","contractor","company"] as const).map(type => {
                const cfg        = PROFILE_TYPE_CONFIG[type]
                const Icon       = cfg.icon
                const typeProfiles = profiles.filter(p => p.type === type)
                const selId      = selectedProfiles[type] ?? ""
                const selProfile = typeProfiles.find(p => p._id === selId)
                const isOpen     = profileOpenType === type
                return (
                  <div key={type} className="vr-profile-card">
                    <div className="vr-profile-card-header">
                      <div className="vr-profile-type-icon" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
                        <Icon style={{ color: cfg.color }} />
                      </div>
                      <span className="vr-profile-type-label" style={{ color: cfg.color }}>{cfg.label}</span>
                      {selProfile && <span className="vr-profile-applied">applied</span>}
                    </div>
                    <div className="vr-profile-selector">
                      <div style={{ position: "relative", flex: 1 }}>
                        <button
                          className={`vr-profile-sel-btn${selProfile ? " active" : ""}`}
                          onClick={() => setProfileOpenType(isOpen ? null : type)}
                        >
                          <Icon />
                          <span className={`vr-profile-sel-name${!selProfile ? " ph" : ""}`}>
                            {loadingProfiles ? "Loading…"
                              : selProfile ? selProfile.name
                              : typeProfiles.length === 0 ? "No profiles"
                              : `Select ${cfg.label}…`}
                          </span>
                          <ChevronDown style={{ width: 11, height: 11, color: "#9ca3af", marginLeft: "auto", flexShrink: 0 }} />
                        </button>
                        {isOpen && typeProfiles.length > 0 && (
                          <div className="vr-dd" style={{ minWidth: "100%" }}>
                            <div className="vr-dd-scroll">
                              <div className="vr-dd-item" onClick={() => applyProfileType(type, "")}>
                                <Icon /><div className="vr-dd-body"><div className="vr-dd-name">None</div></div>
                              </div>
                              {typeProfiles.map(p => (
                                <div key={p._id}
                                  className={`vr-dd-item${selId === p._id ? " sel" : ""}`}
                                  onClick={() => applyProfileType(type, p._id)}>
                                  <Icon />
                                  <div className="vr-dd-body">
                                    <div className="vr-dd-name">{p.name}</div>
                                    <div className="vr-dd-sub">{Object.keys(p.data).length} fields</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {selProfile && (
                        <button className="vr-profile-clear" onClick={() => applyProfileType(type, "")}>
                          <X /> Clear
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Priority chain */}
          <div className="vr-chain">
            <span className="vr-chain-lbl">Priority:</span>
            <span className={`vr-chain-step ${variables.some(v => v.source === "manual") ? "on" : "off"}`}>manual</span>
            <span className="vr-chain-arr">›</span>
            <span className={`vr-chain-step ${Object.values(selectedProfiles).some(Boolean) ? "on" : "off"}`}>profile</span>
            <span className="vr-chain-arr">›</span>
            <span className={`vr-chain-step ${selectedPropObj ? "on" : "off"}`}>property</span>
            <span className="vr-chain-arr">›</span>
            <span className="vr-chain-step off">database</span>
          </div>

          {/* Missing alert */}
          {showMissing && missingRequired.length > 0 && (
            <div className="vr-missing">
              <AlertCircle />
              <span>{missingRequired.length} required field{missingRequired.length > 1 ? "s" : ""} missing:{" "}
                <strong>{missingRequired.map(v => v.variable).join(", ")}</strong></span>
            </div>
          )}

          {/* Variable list */}
          {loading ? (
            <div className="vr-skel-wrap">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="vr-skel-row">
                  <div className="vr-skel" style={{ width: 150, height: 32, flexShrink: 0 }} />
                  <div className="vr-skel" style={{ flex: 1, height: 36 }} />
                </div>
              ))}
            </div>
          ) : variables.length === 0 ? (
            <div className="vr-empty">
              <div className="vr-eico"><Tag /></div>
              <div className="vr-etitle">No variables to review</div>
              <div className="vr-esub">Map template variables first</div>
            </div>
          ) : (
            <>
              {grouped.map(({ label, vars }) => (
                <div key={label} className="vr-section">
                  <div className="vr-section-title">{label}</div>
                  {vars.map(v => {
                    const src    = v.source ? SOURCE_STYLES[v.source] : null
                    const isErr  = showMissing && v.required && !v.value?.trim()
                    const isDate = isDateVar(v.variable)
                    return (
                      <div key={v._id} className="vr-row">
                        <div className="vr-label">
                          <div className="vr-lico">
                            {isDate
                              ? <Calendar style={{ width: 10, height: 10, color: "rgba(146,112,10,.6)" }} />
                              : <Tag />}
                          </div>
                          <span className="vr-ltext" title={v.variable}>{v.variable}</span>
                          {v.required && <div className="vr-req-dot" title="Required" />}
                        </div>
                        <div className="vr-input-row">
                          {isDate ? (
                            <div className="vr-date-wrap">
                              <div className="vr-date-icon"><Calendar /></div>
                              <input type="date"
                                className={`vr-date-input${v.value?.trim() ? " filled" : ""}${isErr ? " err" : ""}`}
                                value={v.value || ""}
                                onChange={e => updateValue(v._id, e.target.value)}
                              />
                            </div>
                          ) : (
                            <div className="vr-input-wrap">
                              <input
                                className={`vr-input${v.value?.trim() ? " filled" : ""}${isErr ? " err" : ""}`}
                                placeholder={v.required ? `${v.variable} (required)` : `Value for ${v.variable}…`}
                                value={v.value || ""}
                                onChange={e => updateValue(v._id, e.target.value)}
                              />
                            </div>
                          )}
                          {src && (
                            <span className="vr-src" style={{ background: src.bg, color: src.color }}>
                              {src.label}
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}

              <div className="vr-footer">
                <div className="vr-foot-left">
                  <span className="vr-foot-hint">
                    {filledCount === variables.length ? "✓ All variables filled" : `${variables.length - filledCount} remaining`}
                  </span>
                  <div className="vr-legend">
                    {Object.entries(SOURCE_STYLES).map(([key, s]) => (
                      <div key={key} className="vr-leg-item">
                        <div className="vr-leg-dot" style={{ background: s.color + "99" }} />
                        {s.label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="vr-foot-right">
                  <button className="vr-refresh" onClick={() => loadVariables(true,selectedProperty || initPropertyId)}>
                    <RefreshCw /> Refresh
                  </button>
                  <button className={`vr-save ${saving ? "saving" : saveStatus}`} onClick={save} disabled={saving}>
                    {saving              ? <><Loader2 className="vr-spin" /> Saving…</>
                    : saveStatus === "success" ? <><CheckCircle /> Saved</>
                    : saveStatus === "error"   ? <><AlertCircle /> Failed</>
                    : <><Save /> Save Values</>}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}