"use client"

import { useState } from "react"
import { Sparkles, Loader2, CheckCircle, AlertCircle, FileOutput, ShieldAlert } from "lucide-react"

type Variable = { _id: string; variable: string; value?: string; required?: boolean }

interface Props {
  templateId: string
  propertyId: string
  variables?: Variable[]       // passed from parent so we can validate before firing
  onGenerated?: () => void
}

export default function GenerateDocument({ templateId, propertyId, variables = [], onGenerated }: Props) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [missingVars, setMissingVars] = useState<string[]>([])

  const generate = async () => {
    // Client-side validation: block if required variables are empty
    const missing = variables.filter(v => v.required && !v.value?.trim()).map(v => v.variable)
    if (missing.length > 0) {
      setMissingVars(missing)
      return
    }
    setMissingVars([])
    setLoading(true)
    setStatus("idle")
    setErrorMsg("")
    try {
      const res = await fetch("/api/documents/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId, propertyId }),
      })
      const data = await res.json()
      if (!res.ok) {
        // Surface missing variables returned from server
        if (data.missingVariables?.length) {
          setMissingVars(data.missingVariables)
          setErrorMsg(`Server reported missing variables: ${data.missingVariables.join(", ")}`)
        } else {
          setErrorMsg(data.message || "Generation failed. Please try again.")
        }
        throw new Error()
      }
      setStatus("success")
      setTimeout(() => { setStatus("idle"); onGenerated?.() }, 2000)
    } catch {
      setStatus("error")
      setTimeout(() => { setStatus("idle"); setErrorMsg("") }, 3500)
    } finally {
      setLoading(false)
    }
  }

  const filledCount = variables.filter(v => v.value?.trim()).length
  const totalRequired = variables.filter(v => v.required).length
  const allRequiredFilled = variables.filter(v => v.required && !v.value?.trim()).length === 0
  const readyToGenerate = variables.length === 0 || allRequiredFilled

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .gd { font-family:'DM Sans',sans-serif; margin-top:24px; }
        .gd-card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; position:relative; }
        .gd-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,rgba(196,162,96,.7),rgba(196,162,96,.15)); border-radius:10px 10px 0 0; }
        .gd-body { padding:22px 24px; }

        .gd-top { display:flex; align-items:flex-start; gap:14px; margin-bottom:18px; }
        .gd-icon { width:42px; height:42px; background:rgba(196,162,96,.08); border:1px solid rgba(196,162,96,.22); border-radius:9px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .gd-icon svg { width:18px; height:18px; color:#92700a; }
        .gd-title { font-family:'Cormorant Garamond',Georgia,serif; font-size:17px; font-weight:600; color:#111827; letter-spacing:-.01em; line-height:1.2; margin-bottom:3px; }
        .gd-sub { font-size:12px; font-weight:300; color:#9ca3af; letter-spacing:.02em; }

        .gd-meta { display:flex; gap:10px; padding:12px 14px; background:#f9fafb; border:1px solid #f0f0f0; border-radius:8px; margin-bottom:16px; }
        .gd-meta-item { flex:1; }
        .gd-meta-lbl { font-size:9px; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#9ca3af; margin-bottom:3px; }
        .gd-meta-val { font-size:12px; font-weight:500; color:#374151; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .gd-meta-divider { width:1px; background:#e5e7eb; border-radius:1px; }

        /* Readiness bar */
        .gd-readiness { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; margin-bottom:16px; border:1px solid; }
        .gd-readiness.ready { background:#f0fdf4; border-color:#bbf7d0; }
        .gd-readiness.not-ready { background:#fef2f2; border-color:#fecaca; }
        .gd-readiness svg { width:14px; height:14px; flex-shrink:0; }
        .gd-readiness.ready svg { color:#16a34a; }
        .gd-readiness.not-ready svg { color:#dc2626; }
        .gd-readiness-text { font-size:12px; flex:1; }
        .gd-readiness.ready .gd-readiness-text { color:#15803d; }
        .gd-readiness.not-ready .gd-readiness-text { color:#dc2626; }
        .gd-readiness-count { font-size:10px; font-weight:500; padding:2px 7px; border-radius:4px; }
        .gd-readiness.ready .gd-readiness-count { background:#dcfce7; color:#15803d; }
        .gd-readiness.not-ready .gd-readiness-count { background:#fee2e2; color:#dc2626; }

        /* Missing vars list */
        .gd-missing-list { margin-bottom:14px; padding:10px 14px; background:#fef2f2; border:1px solid #fecaca; border-radius:8px; animation:gd-fade .2s ease; }
        .gd-missing-title { font-size:11px; font-weight:500; color:#991b1b; margin-bottom:6px; letter-spacing:.04em; text-transform:uppercase; }
        .gd-missing-tags { display:flex; flex-wrap:wrap; gap:4px; }
        .gd-missing-tag { font-size:11px; padding:2px 8px; background:#fee2e2; border:1px solid #fca5a5; border-radius:4px; color:#dc2626; font-weight:500; }
        @keyframes gd-fade { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }

        .gd-btn { display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:11px 20px; border-radius:8px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:.03em; cursor:pointer; border:1px solid transparent; transition:opacity .15s,box-shadow .15s,background .2s,border-color .2s; }
        .gd-btn:disabled { cursor:not-allowed; opacity:.5; }
        .gd-btn svg { width:15px; height:15px; }
        .gd-btn.idle { background:linear-gradient(135deg,rgba(196,162,96,.9),rgba(146,112,10,.95)); border-color:rgba(196,162,96,.4); color:#fff; box-shadow:0 2px 8px rgba(196,162,96,.25); }
        .gd-btn.idle:hover:not(:disabled) { opacity:.9; box-shadow:0 4px 16px rgba(196,162,96,.35); }
        .gd-btn.blocked { background:#f9fafb; border-color:#e5e7eb; color:#9ca3af; }
        .gd-btn.loading { background:#f9fafb; border-color:#e5e7eb; color:#6b7280; }
        .gd-btn.success { background:#f0fdf4; border-color:#bbf7d0; color:#15803d; }
        .gd-btn.error   { background:#fef2f2; border-color:#fecaca; color:#dc2626; }

        .gd-toast { margin-top:12px; display:flex; align-items:center; gap:8px; padding:10px 14px; border-radius:7px; font-size:12px; animation:gd-fade .2s ease; }
        .gd-toast.success { background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; }
        .gd-toast.error   { background:#fef2f2; border:1px solid #fecaca; color:#dc2626; }
        .gd-toast svg { width:14px; height:14px; flex-shrink:0; }
        .gd-spin { animation:gd-spin .7s linear infinite; }
        @keyframes gd-spin { to{transform:rotate(360deg)} }
      `}</style>

      <div className="gd">
        <div className="gd-card">
          <div className="gd-body">
            <div className="gd-top">
              <div className="gd-icon"><FileOutput /></div>
              <div>
                <div className="gd-title">Generate Document</div>
                <div className="gd-sub">Populate template with current variable values</div>
              </div>
            </div>

            {/* Meta strip */}
            <div className="">
              {/* <div className="gd-meta-item">
                <div className="gd-meta-lbl">Template</div>
                <div className="gd-meta-val">{templateId ?? "—"}</div>
              </div> */}
              <div className="gd-meta-divider" />
              {/* <div className="gd-meta-item">
                <div className="gd-meta-lbl">Property</div>
                <div className="gd-meta-val">{propertyId ?? "—"}</div>
              </div> */}
              {variables.length > 0 && (
                <>
                  {/* <div className="gd-meta-divider" />
                  <div className="gd-meta-item">
                    <div className="gd-meta-lbl">Variables</div>
                    <div className="gd-meta-val">{filledCount} / {variables.length} filled</div>
                  </div> */}
                </>
              )}
            </div>

            {/* Readiness indicator — only shown when we have variable info */}
            {variables.length > 0 && (
              <div className={`gd-readiness ${readyToGenerate ? "ready" : "not-ready"}`}>
                {readyToGenerate
                  ? <CheckCircle />
                  : <ShieldAlert />}
                <span className="gd-readiness-text">
                  {readyToGenerate
                    ? "All required fields filled — ready to generate"
                    : `${variables.filter(v => v.required && !v.value?.trim()).length} required field${variables.filter(v => v.required && !v.value?.trim()).length > 1 ? "s" : ""} still missing`}
                </span>
                {/* <span className="gd-readiness-count">
                  {totalRequired} required
                </span> */}
              </div>
            )}

            {/* Missing variable tags */}
            {missingVars.length > 0 && (
              <div className="gd-missing-list">
                <div className="gd-missing-title">Fill these before generating</div>
                <div className="gd-missing-tags">
                  {missingVars.map(v => (
                    <span key={v} className="gd-missing-tag">{v}</span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA button */}
            <button
            id="gen-btn"
              className={`gd-btn ${loading ? "loading" : !readyToGenerate && variables.length > 0 ? "blocked" : status}`}
              onClick={generate}
              disabled={loading}
            >
              {loading ? (
                <><Loader2 className="gd-spin" /> Generating…</>
              ) : status === "success" ? (
                <><CheckCircle /> Document Ready</>
              ) : status === "error" ? (
                <><AlertCircle /> Generation Failed</>
              ) : !readyToGenerate && variables.length > 0 ? (
                <><ShieldAlert /> Fill Required Fields First</>
              ) : (
                <><Sparkles /> Generate Document</>
              )}
            </button>

            {/* Toast feedback */}
            {status === "success" && (
              <div className="gd-toast success">
                <CheckCircle /> Document generated — refreshing list.
              </div>
            )}
            {status === "error" && (
              <div className="gd-toast error">
                <AlertCircle /> {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}