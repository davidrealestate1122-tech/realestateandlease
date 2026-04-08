"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import {
  FileText, ChevronDown, ChevronUp, Tag, ArrowRight,
  Check, Loader2, Search, X
} from "lucide-react"
import DocumentList from "@/components/templates/DocumentList"
import GenerateDocument from "@/components/templates/GenerateDocument"
import VariableReview from "@/components/templates/VariableReview"
import InvestorPacketBuilder from "@/components/templates/InvestorPacket"

type Variable = { _id: string; variable: string; mappedTo?: string; value?: string; required?: boolean; source?: string }

interface Props {
 
  setliveVariables?: (vars: Variable[]) => void  // callback to sync live variables up to parent
}

export default function List({  setliveVariables : propsetliveVariables }: Props) {
  // Get propertyId from route params if not passed as prop
  const params = useParams()
  const [fetchedPropertyIds, setFetchedPropertyIds] = useState<Record<string, string>>({})
 const  setLiveVariables = propsetliveVariables ?? (() => {})  // no-op if not provided
  const [templates, setTemplates] = useState<any[]>([])
  const [variables, setVariables] = useState<Variable[]>([])
  const [liveVarsMap, setLiveVarsMap] = useState<Record<string, { variable: string; value?: string }[]>>({})
   // kept in sync with VariableReview
  const [activeId, setActiveId] = useState<string | null>(null)
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [savedId, setSavedId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    fetch("/api/templates")
      .then(res => res.json())
      .then(data => { setTemplates(Array.isArray(data) ? data : []); setIsLoading(false) })
      .catch(() => setIsLoading(false))
  }, [])

  const loadVars = async (id: string) => {
    if (activeId === id) { setActiveId(null); setVariables([]); setLiveVariables([]); return }
    setLoadingId(id)
    setActiveId(id)
     const propRes = await fetch("/api/templates/get-values", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ templateId: id }),
  })
  const fetchedPropertyId = await propRes.json()
  if (fetchedPropertyId) {
    setFetchedPropertyIds(prev => ({ ...prev, [id]: fetchedPropertyId }))
  }
    const res = await fetch(`/api/templates/${id}/variables`)
    const data = await res.json()
    const vars = Array.isArray(data) ? data : []
    setVariables(vars)
    setLiveVariables(vars)
    setLoadingId(null)
  }

  const updateMap = async (id: string, value: string) => {
    setSavingId(id)
    await fetch("/api/templates/map", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, mappedTo: value }),
    })
    setSavingId(null)
    setSavedId(id)
    setTimeout(() => setSavedId(null), 1800)
  }

  const filtered = templates.filter(t =>
    t.name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="tl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .tl { font-family:'DM Sans',sans-serif; min-height:100vh; background:#f8f9fb; padding:36px 40px; }
        .tl-title { font-family:'Cormorant Garamond',Georgia,serif; font-size:30px; font-weight:600; color:#111827; letter-spacing:-.01em; margin-bottom:4px; }
        .tl-subtitle { font-size:13px; font-weight:300; color:#9ca3af; letter-spacing:.03em; margin-bottom:28px; }
        .tl-stats { display:flex; gap:16px; margin-bottom:28px; }
        .tl-stat { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:16px 22px; position:relative; overflow:hidden; flex:1; transition:box-shadow .15s; }
        .tl-stat:hover { box-shadow:0 4px 16px rgba(0,0,0,.06); }
        .tl-stat::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; border-radius:10px 10px 0 0; background:linear-gradient(90deg,rgba(196,162,96,.85),rgba(196,162,96,.3)); }
        .tl-stat-label { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#9ca3af; margin-bottom:4px; }
        .tl-stat-value { font-family:'Cormorant Garamond',Georgia,serif; font-size:28px; font-weight:600; line-height:1; color:#111827; }
        .tl-stat-value.gold { color:#92700a; }
        .tl-stat-value.purple { color:#4f46e5; }

        .tl-search-wrap { position:relative; margin-bottom:20px; }
        .tl-search-icon { position:absolute; left:14px; top:50%; transform:translateY(-50%); width:15px; height:15px; color:#9ca3af; pointer-events:none; }
        .tl-search { width:100%; padding:10px 14px 10px 38px; background:#fff; border:1px solid #e5e7eb; border-radius:8px; font-family:'DM Sans',sans-serif; font-size:13px; color:#111827; outline:none; transition:border-color .15s,box-shadow .15s; box-sizing:border-box; }
        .tl-search::placeholder { color:#9ca3af; }
        .tl-search:focus { border-color:rgba(196,162,96,.5); box-shadow:0 0 0 3px rgba(196,162,96,.08); }
        .tl-clear { position:absolute; right:12px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#9ca3af; display:flex; align-items:center; transition:color .12s; padding:2px; }
        .tl-clear:hover { color:#374151; }
        .tl-clear svg { width:14px; height:14px; }

        .tl-list { display:flex; flex-direction:column; gap:10px; }
        .tl-row { background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; transition:border-color .15s,box-shadow .15s; position:relative; }
        .tl-row::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,rgba(196,162,96,.6),rgba(196,162,96,.12)); border-radius:10px 10px 0 0; }
        .tl-row:hover { border-color:rgba(196,162,96,.4); box-shadow:0 4px 16px rgba(0,0,0,.06); }
        .tl-row.open { border-color:rgba(196,162,96,.45); }
        .tl-row-header { display:flex; align-items:center; gap:14px; padding:16px 20px; cursor:pointer; user-select:none; }
        .tl-row-icon { width:38px; height:38px; background:rgba(196,162,96,.08); border:1px solid rgba(196,162,96,.2); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .tl-row-icon svg { width:16px; height:16px; color:#92700a; }
        .tl-row-name { font-size:14px; font-weight:500; color:#111827; flex:1; }
        .tl-row-badge { font-size:10px; font-weight:500; letter-spacing:.08em; text-transform:uppercase; color:#92700a; background:rgba(196,162,96,.1); border:1px solid rgba(196,162,96,.2); border-radius:4px; padding:3px 8px; }
        .tl-row-chevron { width:16px; height:16px; color:#9ca3af; transition:color .12s; flex-shrink:0; }
        .tl-row:hover .tl-row-chevron { color:#92700a; }
        .tl-spin { animation:spin .7s linear infinite; }
        @keyframes spin { to{transform:rotate(360deg)} }

        .tl-panel { border-top:1px solid #f3f4f6; background:#fafafa; }

        .tl-vars { padding:20px 24px; }
        .tl-vars-label { font-size:10px; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#9ca3af; margin-bottom:14px; }
        .tl-vars-list { display:flex; flex-direction:column; gap:10px; }
        .tl-var-row { display:flex; align-items:center; gap:12px; }
        .tl-var-name { font-family:'Cormorant Garamond',Georgia,serif; font-size:14px; font-weight:500; color:#374151; min-width:160px; display:flex; align-items:center; gap:6px; }
        .tl-var-name svg { width:12px; height:12px; color:rgba(196,162,96,.7); flex-shrink:0; }
        .tl-arrow { color:#d1d5db; flex-shrink:0; }
        .tl-arrow svg { width:14px; height:14px; }
        .tl-var-input-wrap { position:relative; flex:1; }
        .tl-var-input { width:100%; padding:8px 36px 8px 12px; background:#fff; border:1px solid #e5e7eb; border-radius:6px; font-family:'DM Sans',sans-serif; font-size:12px; color:#111827; outline:none; transition:border-color .15s,box-shadow .15s; box-sizing:border-box; }
        .tl-var-input::placeholder { color:#c4c9d4; }
        .tl-var-input:focus { border-color:rgba(196,162,96,.5); box-shadow:0 0 0 3px rgba(196,162,96,.08); }
        .tl-var-status { position:absolute; right:10px; top:50%; transform:translateY(-50%); display:flex; align-items:center; }
        .tl-var-status svg { width:13px; height:13px; }
        .tl-var-status.saving svg { color:#9ca3af; }
        .tl-var-status.saved svg { color:#16a34a; }

        .tl-sub-divider { height:1px; background:#e5e7eb; margin:0 24px; }
        .tl-sub-components { padding:20px 24px 24px; display:flex; flex-direction:column; gap:0; }

        .skel { background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%); background-size:200% 100%; animation:skel 1.4s infinite; border-radius:4px; }
        @keyframes skel { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .tl-row-skel { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:16px 20px; display:flex; align-items:center; gap:14px; }

        .tl-empty { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:56px 24px; text-align:center; }
        .tl-empty-icon { width:52px; height:52px; background:#f9fafb; border:1px solid #e5e7eb; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 14px; }
        .tl-empty-icon svg { width:22px; height:22px; color:#9ca3af; }
        .tl-empty-title { font-size:14px; font-weight:500; color:#374151; margin-bottom:4px; }
        .tl-empty-sub { font-size:12px; color:#9ca3af; font-weight:300; }
      `}</style>

      <div className="tl-title">Templates</div>
      <div className="tl-subtitle">Browse templates and map their variables to data fields</div>

      <div className="tl-stats">
        <div className="tl-stat">
          <div className="tl-stat-label">Total Templates</div>
          <div className="tl-stat-value gold">{isLoading ? "—" : templates.length}</div>
        </div>
        <div className="tl-stat">
          <div className="tl-stat-label">Active Variables</div>
          <div className="tl-stat-value purple">{activeId ? variables.length : "—"}</div>
        </div>
        <div className="tl-stat">
          <div className="tl-stat-label">Mapped</div>
          <div className="tl-stat-value">{activeId ? variables.filter(v => v.mappedTo).length : "—"}</div>
        </div>
        {/* <div className="tl-stat">
          <div className="tl-stat-label">Property</div>
          <div className="tl-stat-value" style={{ fontSize: 16, paddingTop: 4 }}>{propertyId || "—"}</div>
        </div> */}
      </div>

      <div className="tl-search-wrap">
        <Search className="tl-search-icon" />
        <input
          type="text"
          placeholder="Search templates…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="tl-search"
        />
        {searchQuery && (
          <button className="tl-clear" onClick={() => setSearchQuery("")}><X /></button>
        )}
      </div>

      <div className="tl-list">
        {isLoading ? (
          [...Array(4)].map((_, i) => (
            <div key={i} className="tl-row-skel">
              <div className="skel" style={{ width: 38, height: 38, borderRadius: 8, flexShrink: 0 }} />
              <div className="skel" style={{ flex: 1, height: 14 }} />
              <div className="skel" style={{ width: 60, height: 20, borderRadius: 4 }} />
            </div>
          ))
        ) : filtered.length === 0 ? (
          <div className="tl-empty">
            <div className="tl-empty-icon">{searchQuery ? <Search /> : <FileText />}</div>
            <div className="tl-empty-title">
              {searchQuery ? "No templates match your search" : "No templates found"}
            </div>
            <div className="tl-empty-sub">
              {searchQuery ? "Try adjusting your search terms" : "Upload a template to get started"}
            </div>
          </div>
        ) : (
          filtered.map((t, index) => {
            const isOpen = activeId === t._id
            const isLoadingThis = loadingId === t._id
            return (
              <div key={t._id} className={`tl-row${isOpen ? " open" : ""}`}>
                <div className="tl-row-header" onClick={() => loadVars(t._id)}>
                  <div className="tl-row-icon"><FileText /></div>
                  <div className="tl-row-name">{t.name || "Untitled Template"}</div>
                  {isOpen && <span className="tl-row-badge">Active</span>}
                  {isLoadingThis
                    ? <Loader2 className="tl-row-chevron tl-spin" />
                    : isOpen
                      ? <ChevronUp className="tl-row-chevron" />
                      : <ChevronDown className="tl-row-chevron" />}
                </div>

                {isOpen && !isLoadingThis && (
                  <div className="tl-panel">

                    {/* Variable mapping — one row per variable */}
                    {/* <div className="tl-vars">
                      <div className="tl-vars-label">Variable Mapping</div>
                      {variables.length === 0 ? (
                        <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 300 }}>
                          No variables found for this template.
                        </div>
                      ) : (
                        <div className="tl-vars-list">
                          {variables.map(v => (
                            <div key={v._id} className="tl-var-row">
                              <div className="tl-var-name"><Tag />{v.variable}</div>
                              <div className="tl-arrow"><ArrowRight /></div>
                              <div className="tl-var-input-wrap">
                                <input
                                  className="tl-var-input"
                                  placeholder="map to field…"
                                  defaultValue={v.mappedTo}
                                  onBlur={e => updateMap(v._id, e.target.value)}
                                />
                                {savingId === v._id && (
                                  <span className="tl-var-status saving"><Loader2 className="tl-spin" /></span>
                                )}
                                {savedId === v._id && (
                                  <span className="tl-var-status saved"><Check /></span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div> */}

                    {/* Sub-components — rendered ONCE per template */}
                    <div className="tl-sub-divider" />
                    <div className="tl-sub-components">
                      {/* VariableReview syncs its live state up to parent via onValuesChange */}
                      <VariableReview
                      key={t._id}
                        templateId={t._id}
                        propertyId={fetchedPropertyIds[t._id]}  // pass corresponding propertyId for this template
                        onSave={fetchedPropertyIds => {
                        
                       fetch(`/api/templates/get-values`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({ templateId: t._id, propertyId: fetchedPropertyIds[t._id] })
                        }).then(async res => await res.json()
                         ).then(fetchedPropertyIds => {fetchedPropertyIds && setFetchedPropertyIds(prev => ({ ...prev, [t._id]: fetchedPropertyIds }))})
                         setFetchedPropertyIds(result => ({ ...result, [t._id]: fetchedPropertyIds[t._id] }))
                        }}
                         onValuesChange={vars => setLiveVarsMap(prev => ({ ...prev, [t._id]: vars }))}
                         // re-mount to reset internal state when template changes
                        
                      />

                      {/* GenerateDocument receives liveVariables for client-side validation */}
                      {fetchedPropertyIds[t._id] ? (
                      <GenerateDocument
                        templateId={t._id}
                        propertyId={fetchedPropertyIds[t._id]}  // pass corresponding propertyId for this template
                       variables={variables}
                    
                     onGenerated={() => setRefreshKey(prev => prev + 1)}
              
                      />
  ):(<></>)}
                      {/* DocumentList re-fetches when refreshKey changes after generation */}
                      
                    {fetchedPropertyIds[t._id] ? (    <DocumentList
                        key={refreshKey}
                        templateId={t._id}
                        propertyId={fetchedPropertyIds[t._id]}
                     
                        onDocumentGenerated={() => setRefreshKey(prev => prev + 1)}  // trigger refresh after document generation
                      />  ):(<></>)}
                    </div>

                  </div>
                )}
                {fetchedPropertyIds[t._id] && (
  <InvestorPacketBuilder
    templateId={t._id}
    propertyId={fetchedPropertyIds[t._id]}
    variables={liveVarsMap[t._id] ?? []}
  />
)}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}