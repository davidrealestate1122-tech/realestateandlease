"use client"

import { useEffect, useState } from "react"
import {
  Package, Square, CheckSquare, ChevronDown, ChevronUp,
  Loader2, CheckCircle, AlertCircle, Download, Eye,
  Layers, FileText, RefreshCw
} from "lucide-react"

type Doc    = { _id: string; fileUrl?: string; pdfUrl?: string; createdAt?: string; status?: string }
type Packet = { _id: string; name: string; version: number; pdfUrl: string; createdAt: string; documents: any[] }

interface Props {
  propertyId:  string
  templateId:  string
  variables?:  { variable: string; value?: string }[]
}

function getDocTitle(doc: Doc) {
  return doc.fileUrl?.split("/").pop()?.replace(/_v\d+_\d+\.docx$/, "").replace(/_/g, " ") || "Document"
}

export default function InvestorPacketBuilder({ propertyId, templateId, variables = [] }: Props) {
  const [docs,       setDocs]       = useState<Doc[]>([])
  const [selected,   setSelected]   = useState<string[]>([])
  const [packets,    setPackets]    = useState<Packet[]>([])
  const [converting, setConverting] = useState<Record<string, boolean>>({})
  const [generating, setGenerating] = useState(false)
  const [status,     setStatus]     = useState<"idle"|"success"|"error">("idle")
  const [errorMsg,   setErrorMsg]   = useState("")
  const [expanded,   setExpanded]   = useState(true)
  const [packetName, setPacketName] = useState("Investor Packet")
  const [loadingDocs, setLoadingDocs] = useState(true)

  // Fetch generated documents for this template+property
  useEffect(() => {
    if (!templateId || !propertyId) return
    setLoadingDocs(true)
    fetch(`/api/documents?templateId=${templateId}&propertyId=${propertyId}`)
      .then(r => r.json())
      .then(d => setDocs(Array.isArray(d) ? d : []))
      .catch(() => setDocs([]))
      .finally(() => setLoadingDocs(false))
  }, [templateId, propertyId])

  // Fetch existing packets
  useEffect(() => {
    if (!propertyId) return
    fetch(`/api/investor-packet?propertyId=${propertyId}`)
      .then(r => r.json())
      .then(d => setPackets(Array.isArray(d) ? d : []))
      .catch(() => setPackets([]))
  }, [propertyId])

  const toggleDoc = (id: string) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const toggleAll = () =>
    setSelected(selected.length === docs.length ? [] : docs.map(d => d._id))

  // Convert single DOCX → PDF
  const convertDoc = async (doc: Doc): Promise<boolean> => {
    if (doc.pdfUrl) return true
    setConverting(prev => ({ ...prev, [doc._id]: true }))
    try {
      const res = await fetch("/api/documents/convert-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentId: doc._id }),
      })
      if (res.ok) {
        const { pdfUrl } = await res.json()
        setDocs(prev => prev.map(d => d._id === doc._id ? { ...d, pdfUrl } : d))
        return true
      }
      return false
    } catch { return false }
    finally { setConverting(prev => ({ ...prev, [doc._id]: false })) }
  }

  // Build deal summary from variables
  const buildSummary = () => {
    const get = (key: string) => variables.find(v => v.variable === key)?.value || ""
    return {
      propertyAddress: get("Property_Address"),
      investorName:    get("Investor_Name"),
      purchasePrice:   get("Purchase_Price"),
      arv:             get("ARV"),
      rehabBudget:     get("Rehab_Budget"),
      holdingCosts:    get("Holding_Costs"),
      closingCosts:    get("Closing_Costs"),
      totalCosts:      get("Total_Project_Cost"),
      estimatedProfit: get("Estimated_Profit"),
      loanAmount:      get("Loan_Amount"),
      lenderName:      get("Lender_Name"),
      startDate:       get("Start_Date"),
      endDate:         get("End_Date"),
      projectDuration: get("Project_Duration"),
    }
  }

  const generate = async () => {
    if (!selected.length) return
    setGenerating(true); setStatus("idle"); setErrorMsg("")
    try {
      // Convert all selected docs to PDF first
      const selectedDocs = docs.filter(d => selected.includes(d._id))
      const convertResults = await Promise.all(selectedDocs.map(convertDoc))
      const allConverted = convertResults.every(Boolean)
      if (!allConverted) {
        setErrorMsg("Some documents failed to convert. They will be skipped.")
      }

      const res = await fetch("/api/investor-packet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId,
          documentIds: selected,
          dealSummary: buildSummary(),
          name: packetName,
        }),
      })
      if (!res.ok) {
        const d = await res.json()
        throw new Error(d.message || "Failed")
      }
      const { packet } = await res.json()
      setPackets(prev => [packet, ...prev])
      setStatus("success")
      setSelected([])
      setTimeout(() => setStatus("idle"), 3000)
    } catch (err: any) {
      setErrorMsg(err.message || "Generation failed")
      setStatus("error")
      setTimeout(() => { setStatus("idle"); setErrorMsg("") }, 3500)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .ip{font-family:'DM Sans',sans-serif;margin-top:16px}
        .ip-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;position:relative}
        .ip-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#4f46e5,rgba(79,70,229,.15));border-radius:12px 12px 0 0}

        .ip-header{display:flex;align-items:center;justify-content:space-between;padding:16px 22px;cursor:pointer;border-bottom:1px solid #f3f4f6;user-select:none}
        .ip-header-left{display:flex;align-items:center;gap:10px}
        .ip-hicon{width:34px;height:34px;background:rgba(79,70,229,.07);border:1px solid rgba(79,70,229,.2);border-radius:8px;display:flex;align-items:center;justify-content:center}
        .ip-hicon svg{width:15px;height:15px;color:#4f46e5}
        .ip-htitle{font-size:15px;font-weight:600;color:#111827}
        .ip-hbadge{font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:20px;background:rgba(79,70,229,.08);color:#4f46e5}
        .ip-chevron{width:16px;height:16px;color:#9ca3af}

        .ip-body{padding:18px 22px}

        .ip-name-row{display:flex;align-items:center;gap:10px;margin-bottom:18px}
        .ip-name-lbl{font-size:11px;color:#9ca3af;white-space:nowrap;min-width:80px}
        .ip-name-input{flex:1;padding:8px 12px;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:13px;color:#111827;outline:none;transition:border-color .15s,box-shadow .15s}
        .ip-name-input:focus{border-color:rgba(79,70,229,.4);box-shadow:0 0 0 3px rgba(79,70,229,.06)}

        .ip-section-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
        .ip-section-lbl{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af}
        .ip-select-all{font-size:11px;color:#4f46e5;cursor:pointer;background:none;border:none;font-family:'DM Sans',sans-serif;padding:0;transition:opacity .12s}
        .ip-select-all:hover{opacity:.7}

        .ip-doc-list{display:flex;flex-direction:column;gap:6px;margin-bottom:18px}
        .ip-doc-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid #e5e7eb;border-radius:8px;cursor:pointer;transition:all .12s;user-select:none}
        .ip-doc-item:hover{border-color:rgba(79,70,229,.3);background:rgba(79,70,229,.02)}
        .ip-doc-item.sel{border-color:rgba(79,70,229,.45);background:rgba(79,70,229,.04)}
        .ip-chk{width:16px;height:16px;flex-shrink:0}
        .ip-chk.on{color:#4f46e5}
        .ip-chk.off{color:#d1d5db}
        .ip-doc-ico{width:28px;height:28px;background:#f3f4f6;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .ip-doc-ico svg{width:13px;height:13px;color:#6b7280}
        .ip-doc-info{flex:1;min-width:0}
        .ip-doc-name{font-size:12.5px;font-weight:500;color:#111827;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .ip-doc-meta{font-size:11px;color:#9ca3af;margin-top:1px}
        .ip-doc-pdf-badge{font-size:9px;font-weight:600;padding:1px 6px;border-radius:3px;background:#dcfce7;color:#15803d;flex-shrink:0}
        .ip-converting-badge{font-size:9px;color:#9ca3af;display:flex;align-items:center;gap:3px;flex-shrink:0}
        .ip-converting-badge svg{width:10px;height:10px;animation:ipspin .7s linear infinite}

        .ip-empty{padding:28px 16px;text-align:center;color:#9ca3af;font-size:12px;background:#fafafa;border:1px dashed #e5e7eb;border-radius:8px;margin-bottom:18px}
        .ip-empty-ico{width:36px;height:36px;background:#f3f4f6;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 8px}
        .ip-empty-ico svg{width:15px;height:15px;color:#9ca3af}

        .ip-footer{display:flex;align-items:center;gap:12px}
        .ip-sel-count{font-size:12px;color:#6b7280}
        .ip-gen-btn{display:flex;align-items:center;gap:7px;padding:10px 22px;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;border:none;transition:all .15s;margin-left:auto}
        .ip-gen-btn:disabled{opacity:.5;cursor:not-allowed}
        .ip-gen-btn.idle{background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;box-shadow:0 2px 10px rgba(79,70,229,.22)}
        .ip-gen-btn.idle:hover:not(:disabled){opacity:.9;box-shadow:0 4px 16px rgba(79,70,229,.32)}
        .ip-gen-btn.loading{background:#f9fafb;border:1px solid #e5e7eb;color:#6b7280}
        .ip-gen-btn.success{background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d}
        .ip-gen-btn.error{background:#fef2f2;border:1px solid #fecaca;color:#dc2626}
        .ip-gen-btn svg{width:14px;height:14px}
        .ip-spin{animation:ipspin .7s linear infinite}
        @keyframes ipspin{to{transform:rotate(360deg)}}

        .ip-toast{margin-top:12px;display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:7px;font-size:12px;animation:ipfade .2s ease}
        .ip-toast.success{background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d}
        .ip-toast.error{background:#fef2f2;border:1px solid #fecaca;color:#dc2626}
        .ip-toast svg{width:13px;height:13px;flex-shrink:0}
        @keyframes ipfade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}

        .ip-divider{height:1px;background:#f3f4f6;margin:20px 0}
        .ip-history-lbl{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px}
        .ip-packet-list{display:flex;flex-direction:column;gap:8px}
        .ip-packet-item{display:flex;align-items:center;gap:12px;padding:12px 14px;background:#fafafa;border:1px solid #e5e7eb;border-radius:8px}
        .ip-packet-ico{width:32px;height:32px;background:rgba(79,70,229,.07);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .ip-packet-ico svg{width:14px;height:14px;color:#4f46e5}
        .ip-packet-info{flex:1;min-width:0}
        .ip-packet-name{font-size:13px;font-weight:500;color:#111827;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .ip-packet-meta{font-size:11px;color:#9ca3af;margin-top:1px}
        .ip-packet-ver{font-size:10px;font-weight:600;padding:2px 7px;border-radius:3px;background:rgba(79,70,229,.08);color:#4f46e5;white-space:nowrap;flex-shrink:0}
        .ip-pkt-actions{display:flex;gap:6px;flex-shrink:0}
        .ip-pkt-btn{display:flex;align-items:center;gap:5px;padding:6px 11px;border-radius:6px;font-family:'DM Sans',sans-serif;font-size:11.5px;font-weight:500;cursor:pointer;transition:all .12s;text-decoration:none;border:1px solid}
        .ip-pkt-btn.view{background:#fff;border-color:#e5e7eb;color:#374151}
        .ip-pkt-btn.view:hover{border-color:#4f46e5;color:#4f46e5}
        .ip-pkt-btn.dl{background:#4f46e5;border-color:#4f46e5;color:#fff}
        .ip-pkt-btn.dl:hover{background:#4338ca;border-color:#4338ca}
        .ip-pkt-btn svg{width:12px;height:12px}

        .ip-skel{background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);background-size:200% 100%;animation:ipskel 1.4s infinite;border-radius:7px}
        @keyframes ipskel{0%{background-position:200% 0}100%{background-position:-200% 0}}
      `}</style>

      <div className="ip">
        <div className="ip-card">

          {/* Header */}
          <div className="ip-header" onClick={() => setExpanded(e => !e)}>
            <div className="ip-header-left">
              <div className="ip-hicon"><Package /></div>
              <span className="ip-htitle">Investor Packet</span>
              {packets.length > 0 && (
                <span className="ip-hbadge">{packets.length} saved</span>
              )}
            </div>
            {expanded
              ? <ChevronUp   className="ip-chevron" />
              : <ChevronDown className="ip-chevron" />}
          </div>

          {expanded && (
            <div className="ip-body">

              {/* Packet name */}
              <div className="ip-name-row">
                <span className="ip-name-lbl">Packet name</span>
                <input
                  className="ip-name-input"
                  value={packetName}
                  onChange={e => setPacketName(e.target.value)}
                  placeholder="Investor Packet"
                />
              </div>

              {/* Document selection */}
              <div className="ip-section-hdr">
                <span className="ip-section-lbl">Select documents</span>
                {docs.length > 0 && (
                  <button className="ip-select-all" onClick={toggleAll}>
                    {selected.length === docs.length ? "Deselect all" : "Select all"}
                  </button>
                )}
              </div>

              {loadingDocs ? (
                <div className="ip-doc-list">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="ip-skel" style={{ height: 52 }} />
                  ))}
                </div>
              ) : docs.length === 0 ? (
                <div className="ip-empty">
                  <div className="ip-empty-ico"><FileText /></div>
                  <div>No documents generated yet.</div>
                  <div style={{ marginTop: 4, fontSize: 11 }}>Generate documents above first.</div>
                </div>
              ) : (
                <div className="ip-doc-list">
                  {docs.map(doc => {
                    const isSel  = selected.includes(doc._id)
                    const isConv = converting[doc._id]
                    return (
                      <div
                        key={doc._id}
                        className={`ip-doc-item${isSel ? " sel" : ""}`}
                        onClick={() => toggleDoc(doc._id)}
                      >
                        {isSel
                          ? <CheckSquare className="ip-chk on" />
                          : <Square      className="ip-chk off" />}
                        <div className="ip-doc-ico"><FileText /></div>
                        <div className="ip-doc-info">
                          <div className="ip-doc-name">{getDocTitle(doc)}</div>
                          <div className="ip-doc-meta">
                            {doc.createdAt
                              ? new Date(doc.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                              : ""}
                          </div>
                        </div>
                        {isConv ? (
                          <span className="ip-converting-badge">
                            <Loader2 /> Converting…
                          </span>
                        ) : doc.pdfUrl ? (
                          <span className="ip-doc-pdf-badge">PDF ✓</span>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Generate button */}
              <div className="ip-footer">
                {selected.length > 0 && (
                  <span className="ip-sel-count">
                    {selected.length} doc{selected.length > 1 ? "s" : ""} selected
                  </span>
                )}
                <button
                  className={`ip-gen-btn ${generating ? "loading" : status}`}
                  onClick={generate}
                  disabled={generating || selected.length === 0}
                >
                  {generating
                    ? <><Loader2 className="ip-spin" /> Generating…</>
                    : status === "success" ? <><CheckCircle /> Packet Ready</>
                    : status === "error"   ? <><AlertCircle /> Failed — Retry</>
                    : <><Layers /> Generate Investor Packet</>}
                </button>
              </div>

              {/* Toast */}
              {status === "success" && (
                <div className="ip-toast success"><CheckCircle /> Investor packet created successfully.</div>
              )}
              {status === "error" && (
                <div className="ip-toast error"><AlertCircle /> {errorMsg || "Generation failed. Please try again."}</div>
              )}

              {/* Saved packets */}
              {packets.length > 0 && (
                <>
                  <div className="ip-divider" />
                  <div className="ip-history-lbl">Saved Packets</div>
                  <div className="ip-packet-list">
                    {packets.map(p => (
                      <div key={p._id} className="ip-packet-item">
                        <div className="ip-packet-ico"><Package /></div>
                        <div className="ip-packet-info">
                          <div className="ip-packet-name">{p.name}</div>
                          <div className="ip-packet-meta">
                            {new Date(p.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            {" · "}{p.documents?.length ?? 0} doc{p.documents?.length !== 1 ? "s" : ""}
                          </div>
                        </div>
                        <span className="ip-packet-ver">v{p.version}</span>
                        <div className="ip-pkt-actions flex gap-4 ">
                          <a href={p.pdfUrl} target="_blank" rel="noreferrer" className="ip-pkt-btn view ">
                            <Eye /> View
                          </a>
                          <a href={p.pdfUrl} download className="ip-pkt-btn view">
                            <Download /> Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>
          )}
        </div>
      </div>
    </>
  )
}