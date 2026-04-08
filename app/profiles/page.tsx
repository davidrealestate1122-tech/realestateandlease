"use client"

import { useEffect, useState } from "react"
import {
  User, Plus, Trash2, Save, Loader2, CheckCircle,
  AlertCircle, ChevronDown, ChevronUp, Building2, Hammer, Landmark, X
} from "lucide-react"
import { AdminLayout } from "@/components/admin-layout"

const PROFILE_TYPES = ["investor", "lender", "contractor", "company"] as const
type ProfileType = typeof PROFILE_TYPES[number]

interface Profile {
  _id: string
  name: string
  type: ProfileType
  data: Record<string, string>
  createdAt?: string
}

const TYPE_ICONS: Record<ProfileType, any> = {
  investor: User,
  lender: Landmark,
  contractor: Hammer,
  company: Building2,
}

const FIELD_TEMPLATES: Record<ProfileType, string[]> = {
  investor: ["Full Name", "Email", "Phone", "Entity Name", "Address", "Tax ID", "Investment Focus"],
  lender: ["Lender Name", "Contact Name", "Email", "Phone", "Loan Programs", "Rate Range", "Max LTV", "Address"],
  contractor: ["Company Name", "Contact Name", "Email", "Phone", "License Number", "Trade", "Address", "Insurance Expiry"],
  company: ["Company Name", "ABN/EIN", "Address", "Phone", "Email", "Director Name", "Website"],
}

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [openId, setOpenId] = useState<string | null>(null)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [savedId, setSavedId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [newName, setNewName] = useState("")
  const [newType, setNewType] = useState<ProfileType>("investor")
  const [createError, setCreateError] = useState("")

  useEffect(() => {
    fetch("/api/profiles")
      .then(r => r.json())
      .then(d => { setProfiles(Array.isArray(d) ? d : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const createProfile = async () => {
    if (!newName.trim()) { setCreateError("Name is required"); return }
    setCreateError("")
    const fields: Record<string, string> = {}
    FIELD_TEMPLATES[newType].forEach(f => { fields[f] = "" })
    const res = await fetch("/api/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim(), type: newType, data: fields }),
    })
    const data = await res.json()
    if (!res.ok) { setCreateError(data.message || "Failed to create"); return }
    setProfiles(prev => [data, ...prev])
    setNewName(""); setCreating(false); setOpenId(data._id)
  }

  const updateField = (profileId: string, key: string, value: string) => {
    setProfiles(prev => prev.map(p =>
      p._id === profileId ? { ...p, data: { ...p.data, [key]: value } } : p
    ))
  }

  const saveProfile = async (profile: Profile) => {
    setSavingId(profile._id)
    await fetch(`/api/profiles/${profile._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: profile.name, type: profile.type, data: profile.data }),
    })
    setSavingId(null)
    setSavedId(profile._id)
    setTimeout(() => setSavedId(null), 1800)
  }

  const deleteProfile = async (id: string) => {
    if (!confirm("Delete this profile? This cannot be undone.")) return
    setDeletingId(id)
    await fetch(`/api/profiles/${id}`, { method: "DELETE" })
    setProfiles(prev => prev.filter(p => p._id !== id))
    setDeletingId(null)
    if (openId === id) setOpenId(null)
  }

  const grouped = PROFILE_TYPES.reduce((acc, t) => {
    acc[t] = profiles.filter(p => p.type === t)
    return acc
  }, {} as Record<ProfileType, Profile[]>)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .pf { font-family:'DM Sans',sans-serif; min-height:100vh; background:#f8f9fb; padding:36px 40px; }
        .pf-title { font-family:'Cormorant Garamond',Georgia,serif; font-size:30px; font-weight:600; color:#111827; letter-spacing:-.01em; margin-bottom:4px; }
        .pf-sub { font-size:13px; font-weight:300; color:#9ca3af; letter-spacing:.03em; margin-bottom:28px; }

        .pf-stats { display:flex; gap:16px; margin-bottom:28px; }
        .pf-stat { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:16px 22px; flex:1; position:relative; overflow:hidden; transition:box-shadow .15s; }
        .pf-stat:hover { box-shadow:0 4px 16px rgba(0,0,0,.06); }
        .pf-stat::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; border-radius:10px 10px 0 0; background:linear-gradient(90deg,rgba(196,162,96,.85),rgba(196,162,96,.3)); }
        .pf-stat-lbl { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#9ca3af; margin-bottom:4px; }
        .pf-stat-val { font-family:'Cormorant Garamond',Georgia,serif; font-size:28px; font-weight:600; color:#92700a; line-height:1; }

        /* Create form */
        .pf-create-card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; margin-bottom:24px; overflow:hidden; position:relative; }
        .pf-create-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,rgba(196,162,96,.7),rgba(196,162,96,.15)); border-radius:10px 10px 0 0; }
        .pf-create-header { display:flex; align-items:center; justify-content:space-between; padding:16px 22px; }
        .pf-create-title { font-family:'Cormorant Garamond',Georgia,serif; font-size:16px; font-weight:600; color:#111827; }
        .pf-new-btn { display:flex; align-items:center; gap:6px; padding:8px 16px; background:linear-gradient(135deg,rgba(196,162,96,.9),rgba(146,112,10,.95)); border:1px solid rgba(196,162,96,.4); border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12.5px; font-weight:500; color:#fff; cursor:pointer; box-shadow:0 2px 8px rgba(196,162,96,.22); }
        .pf-new-btn:hover { opacity:.9; }
        .pf-new-btn svg { width:13px; height:13px; }
        .pf-create-form { padding:0 22px 20px; border-top:1px solid #f3f4f6; background:#fafafa; }
        .pf-create-row { display:flex; gap:10px; margin-top:16px; align-items:flex-end; flex-wrap:wrap; }
        .pf-form-group { display:flex; flex-direction:column; gap:5px; flex:1; min-width:180px; }
        .pf-form-lbl { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#9ca3af; }
        .pf-form-input { padding:9px 12px; background:#fff; border:1px solid #e5e7eb; border-radius:7px; font-family:'DM Sans',sans-serif; font-size:13px; color:#111827; outline:none; transition:border-color .15s,box-shadow .15s; }
        .pf-form-input:focus { border-color:rgba(196,162,96,.5); box-shadow:0 0 0 3px rgba(196,162,96,.08); }
        .pf-form-select { padding:9px 12px; background:#fff; border:1px solid #e5e7eb; border-radius:7px; font-family:'DM Sans',sans-serif; font-size:13px; color:#111827; outline:none; cursor:pointer; }
        .pf-create-error { font-size:12px; color:#dc2626; margin-top:8px; }
        .pf-create-actions { display:flex; gap:8px; margin-top:16px; }
        .pf-cancel-btn { padding:9px 16px; background:#fff; border:1px solid #e5e7eb; border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12.5px; color:#6b7280; cursor:pointer; }
        .pf-create-btn { display:flex; align-items:center; gap:6px; padding:9px 20px; background:linear-gradient(135deg,rgba(196,162,96,.9),rgba(146,112,10,.95)); border:1px solid rgba(196,162,96,.4); border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12.5px; font-weight:500; color:#fff; cursor:pointer; }

        /* Group sections */
        .pf-group { margin-bottom:24px; }
        .pf-group-title { font-size:10px; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#9ca3af; margin-bottom:10px; padding-left:2px; display:flex; align-items:center; gap:8px; }
        .pf-group-title svg { width:13px; height:13px; }
        .pf-group-count { font-size:10px; background:rgba(196,162,96,.1); color:#92700a; border-radius:3px; padding:1px 6px; }

        /* Profile card */
        .pf-card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; margin-bottom:8px; position:relative; transition:border-color .15s,box-shadow .15s; }
        .pf-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,rgba(196,162,96,.6),rgba(196,162,96,.12)); border-radius:10px 10px 0 0; }
        .pf-card:hover { border-color:rgba(196,162,96,.35); box-shadow:0 4px 12px rgba(0,0,0,.05); }
        .pf-card.open { border-color:rgba(196,162,96,.45); }
        .pf-card-header { display:flex; align-items:center; gap:12px; padding:14px 18px; cursor:pointer; user-select:none; }
        .pf-card-ico { width:36px; height:36px; background:rgba(196,162,96,.08); border:1px solid rgba(196,162,96,.2); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .pf-card-ico svg { width:15px; height:15px; color:#92700a; }
        .pf-card-name { font-size:14px; font-weight:500; color:#111827; flex:1; }
        .pf-card-type-badge { font-size:9px; font-weight:500; letter-spacing:.08em; text-transform:uppercase; padding:2px 8px; border-radius:4px; background:rgba(196,162,96,.1); border:1px solid rgba(196,162,96,.2); color:#92700a; }
        .pf-chevron { width:15px; height:15px; color:#9ca3af; flex-shrink:0; }

        /* Profile fields */
        .pf-fields { padding:16px 18px 20px; border-top:1px solid #f3f4f6; background:#fafafa; }
        .pf-fields-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px; }
        .pf-field { display:flex; flex-direction:column; gap:5px; }
        .pf-field-lbl { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#9ca3af; }
        .pf-field-input { padding:8px 12px; background:#fff; border:1px solid #e5e7eb; border-radius:6px; font-family:'DM Sans',sans-serif; font-size:12.5px; color:#111827; outline:none; transition:border-color .15s,box-shadow .15s; }
        .pf-field-input:focus { border-color:rgba(196,162,96,.5); box-shadow:0 0 0 3px rgba(196,162,96,.08); }
        .pf-field-input.filled { border-color:rgba(196,162,96,.25); background:rgba(196,162,96,.02); }
        .pf-fields-footer { display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px solid #f0f0f0; }
        .pf-delete-btn { display:flex; align-items:center; gap:5px; padding:7px 12px; background:#fff; border:1px solid #fecaca; border-radius:6px; font-family:'DM Sans',sans-serif; font-size:12px; color:#dc2626; cursor:pointer; transition:background .12s; }
        .pf-delete-btn:hover { background:#fef2f2; }
        .pf-delete-btn svg { width:13px; height:13px; }
        .pf-save-btn { display:flex; align-items:center; gap:6px; padding:8px 18px; border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12.5px; font-weight:500; cursor:pointer; border:1px solid transparent; transition:opacity .15s; }
        .pf-save-btn svg { width:13px; height:13px; }
        .pf-save-btn.idle { background:linear-gradient(135deg,rgba(196,162,96,.9),rgba(146,112,10,.95)); border-color:rgba(196,162,96,.4); color:#fff; }
        .pf-save-btn.idle:hover { opacity:.9; }
        .pf-save-btn.saving { background:#f9fafb; border-color:#e5e7eb; color:#6b7280; }
        .pf-save-btn.saved { background:#f0fdf4; border-color:#bbf7d0; color:#15803d; }
        .pf-spin { animation:pfspin .7s linear infinite; }
        @keyframes pfspin { to{transform:rotate(360deg)} }

        /* Skeleton */
        .pf-skel { background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%); background-size:200% 100%; animation:pfskel 1.4s infinite; border-radius:8px; }
        @keyframes pfskel { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .pf-skel-row { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:14px 18px; display:flex; align-items:center; gap:12px; margin-bottom:8px; }

        /* Empty group */
        .pf-group-empty { padding:20px; text-align:center; font-size:12px; color:#9ca3af; background:#fff; border:1px dashed #e5e7eb; border-radius:8px; }
      `}</style>
    <AdminLayout>
      <div className="pf">
        <div className="pf-title">Profiles</div>
        <div className="pf-sub">Manage investor, lender, contractor and company profiles for auto-filling documents</div>

        {/* Stats */}
        <div className="pf-stats">
          {PROFILE_TYPES.map(t => (
            <div key={t} className="pf-stat">
              <div className="pf-stat-lbl">{t}s</div>
              <div className="pf-stat-val">{loading ? "—" : profiles.filter(p => p.type === t).length}</div>
            </div>
          ))}
        </div>

        {/* Create card */}
        <div className="pf-create-card">
          <div className="pf-create-header">
            <div className="pf-create-title">Create New Profile</div>
            {!creating && (
              <button className="pf-new-btn" onClick={() => setCreating(true)}>
                <Plus /> New Profile
              </button>
            )}
          </div>
          {creating && (
            <div className="pf-create-form">
              <div className="pf-create-row">
                <div className="pf-form-group">
                  <label className="pf-form-lbl">Profile Name</label>
                  <input
                    className="pf-form-input"
                    placeholder="e.g. Acme Capital Partners"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                  />
                </div>
                <div className="pf-form-group" style={{ flex: "0 0 180px" }}>
                  <label className="pf-form-lbl">Type</label>
                  <select className="pf-form-select" value={newType} onChange={e => setNewType(e.target.value as ProfileType)}>
                    {PROFILE_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
                  </select>
                </div>
              </div>
              {createError && <div className="pf-create-error">{createError}</div>}
              <div className="pf-create-actions">
                <button className="pf-cancel-btn" onClick={() => { setCreating(false); setNewName(""); setCreateError("") }}>
                  Cancel
                </button>
                <button className="pf-create-btn" onClick={createProfile}>
                  <Plus /> Create Profile
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile groups */}
        {loading ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="pf-skel-row">
              <div className="pf-skel" style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 8 }} />
              <div className="pf-skel" style={{ flex: 1, height: 14 }} />
              <div className="pf-skel" style={{ width: 70, height: 20, borderRadius: 4 }} />
            </div>
          ))
        ) : (
          PROFILE_TYPES.map(type => {
            const Icon = TYPE_ICONS[type]
            const group = grouped[type]
            return (
              <div key={type} className="pf-group">
                <div className="pf-group-title">
                  <Icon />
                  {type.charAt(0).toUpperCase() + type.slice(1)}s
                  <span className="pf-group-count">{group.length}</span>
                </div>

                {group.length === 0 ? (
                  <div className="pf-group-empty">No {type}s yet — create one above</div>
                ) : (
                  group.map(profile => {
                    const isOpen = openId === profile._id
                    const Icon2 = TYPE_ICONS[profile.type]
                    const isSaving = savingId === profile._id
                    const isSaved = savedId === profile._id
                    return (
                      <div key={profile._id} className={`pf-card${isOpen ? " open" : ""}`}>
                        <div className="pf-card-header" onClick={() => setOpenId(isOpen ? null : profile._id)}>
                          <div className="pf-card-ico"><Icon2 /></div>
                          <div className="pf-card-name">{profile.name}</div>
                          <span className="pf-card-type-badge">{profile.type}</span>
                          {isOpen ? <ChevronUp className="pf-chevron" /> : <ChevronDown className="pf-chevron" />}
                        </div>

                        {isOpen && (
                          <div className="pf-fields">
                            <div className="pf-fields-grid">
                              {Object.entries(profile.data).map(([key, val]) => (
                                <div key={key} className="pf-field">
                                  <label className="pf-field-lbl">{key}</label>
                                  <input
                                    className={`pf-field-input${val?.trim() ? " filled" : ""}`}
                                    placeholder={`Enter ${key.toLowerCase()}…`}
                                    value={val || ""}
                                    onChange={e => updateField(profile._id, key, e.target.value)}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="pf-fields-footer">
                              <button
                                className="pf-delete-btn"
                                onClick={() => deleteProfile(profile._id)}
                                disabled={deletingId === profile._id}
                              >
                                {deletingId === profile._id
                                  ? <Loader2 className="pf-spin" />
                                  : <Trash2 />}
                                Delete
                              </button>
                              <button
                                className={`pf-save-btn ${isSaving ? "saving" : isSaved ? "saved" : "idle"}`}
                                onClick={() => saveProfile(profile)}
                                disabled={isSaving}
                              >
                                {isSaving ? <><Loader2 className="pf-spin" /> Saving…</>
                                  : isSaved ? <><CheckCircle /> Saved</>
                                  : <><Save /> Save Profile</>}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })
                )}
              </div>
            )
          })
        )}
      </div>
      </AdminLayout>
    </>
  )
}