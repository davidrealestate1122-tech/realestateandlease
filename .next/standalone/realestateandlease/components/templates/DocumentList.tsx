"use client"

import { useEffect, useState } from "react"
import { FileText, ExternalLink, Clock, Eye, Loader2, FolderOpen, Download, FileDown, File } from "lucide-react"

export default function DocumentList({ templateId, propertyId }: any) {
  const [docs, setDocs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [converting, setConverting] = useState<Record<string, boolean>>({})

  const loadDocs = () => {
    setLoading(true)
    fetch(`/api/documents?propertyId=${propertyId}&templateId=${templateId}`)
      .then(res => res.json())
      .then(data => { setDocs(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => {
    if (!templateId) return
    loadDocs()
  }, [templateId])

  const downloadPdf = async (doc: any) => {
    // Already has PDF — download directly
    if (doc.pdfUrl) {
      triggerDownload(doc.pdfUrl, getPdfName(doc))
      return
    }

    // Convert first, then download
    setConverting(prev => ({ ...prev, [doc._id]: true }))
    try {
      const res = await fetch("/api/documents/convert-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentId: doc._id }),
      })
      if (!res.ok) throw new Error("Conversion failed")
      const { pdfUrl } = await res.json()
      // Update local doc state with new pdfUrl
      setDocs(prev => prev.map(d => d._id === doc._id ? { ...d, pdfUrl } : d))
      triggerDownload(pdfUrl, getPdfName(doc))
    } catch (err) {
      alert("PDF conversion failed. Make sure LibreOffice is installed on the server.")
    } finally {
      setConverting(prev => ({ ...prev, [doc._id]: false }))
    }
  }

  const triggerDownload = (url: string, filename: string) => {
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
  }

  const getPdfName = (doc: any) => {
    const base = doc.fileUrl?.split("/").pop()?.replace(/\.docx$/, "") || `document_v${doc.version}`
    return `${base}.pdf`
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .dl { font-family: 'DM Sans', sans-serif; margin-top: 24px; }
        .dl-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; position: relative; }
        .dl-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, rgba(196,162,96,0.7), rgba(196,162,96,0.15)); border-radius: 10px 10px 0 0; }

        .dl-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px 14px; border-bottom: 1px solid #f3f4f6; }
        .dl-header-left { display: flex; align-items: center; gap: 10px; }
        .dl-header-icon { width: 32px; height: 32px; background: rgba(196,162,96,0.08); border: 1px solid rgba(196,162,96,0.2); border-radius: 7px; display: flex; align-items: center; justify-content: center; }
        .dl-header-icon svg { width: 14px; height: 14px; color: #92700a; }
        .dl-header-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 16px; font-weight: 600; color: #111827; letter-spacing: -0.01em; }
        .dl-badge { font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #92700a; background: rgba(196,162,96,0.1); border: 1px solid rgba(196,162,96,0.2); border-radius: 4px; padding: 3px 8px; }

        .dl-skel-wrap { padding: 16px 22px; display: flex; flex-direction: column; gap: 10px; }
        .dl-skel { height: 52px; background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%); background-size: 200% 100%; animation: dl-skel 1.4s infinite; border-radius: 8px; }
        @keyframes dl-skel { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        .dl-empty { padding: 48px 24px; text-align: center; }
        .dl-empty-icon { width: 48px; height: 48px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
        .dl-empty-icon svg { width: 20px; height: 20px; color: #9ca3af; }
        .dl-empty-title { font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 3px; }
        .dl-empty-sub { font-size: 12px; color: #9ca3af; font-weight: 300; }

        .dl-list { padding: 12px 22px 16px; display: flex; flex-direction: column; gap: 8px; }
        .dl-row { display: flex; align-items: center; gap: 12px; padding: 12px 14px; background: #fafafa; border: 1px solid #f0f0f0; border-radius: 8px; transition: border-color 0.15s, box-shadow 0.15s; }
        .dl-row:hover { border-color: rgba(196,162,96,0.3); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }

        .dl-row-icon { width: 34px; height: 34px; background: rgba(196,162,96,0.07); border: 1px solid rgba(196,162,96,0.18); border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .dl-row-icon svg { width: 14px; height: 14px; color: #92700a; }

        .dl-row-body { flex: 1; min-width: 0; }
        .dl-row-title { font-size: 13px; font-weight: 500; color: #111827; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .dl-row-meta { display: flex; align-items: center; gap: 6px; margin-top: 2px; font-size: 11px; color: #9ca3af; font-weight: 300; }
        .dl-row-meta svg { width: 10px; height: 10px; }
        .dl-pdf-badge { font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 3px; background: #dcfce7; color: #15803d; margin-left: 4px; }

        .dl-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .dl-btn { display: flex; align-items: center; gap: 5px; padding: 6px 11px; border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.02em; transition: all 0.12s; flex-shrink: 0; cursor: pointer; text-decoration: none; border: 1px solid; }
        .dl-btn.view { background: #fff; border-color: #e5e7eb; color: #374151; }
        .dl-btn.view:hover { background: rgba(196,162,96,0.06); border-color: rgba(196,162,96,0.35); color: #92700a; }
        .dl-btn.pdf { background: #fff; border-color: #e5e7eb; color: #374151; }
        .dl-btn.pdf:hover { background: #f0fdf4; border-color: #bbf7d0; color: #15803d; }
        .dl-btn.pdf.converting { background: #f9fafb; border-color: #e5e7eb; color: #9ca3af; cursor: not-allowed; }
        .dl-btn svg { width: 11px; height: 11px; }
        .dl-spin { animation: dlspin .7s linear infinite; }
        @keyframes dlspin { to { transform: rotate(360deg); } }

        .dl-footer { padding: 10px 22px 14px; border-top: 1px solid #f3f4f6; font-size: 11px; color: #9ca3af; font-weight: 300; letter-spacing: 0.04em; }
      `}</style>

      <div className="dl">
        <div className="dl-card">
          <div className="dl-header">
            <div className="dl-header-left">
              <div className="dl-header-icon"><FileText /></div>
              <div className="dl-header-title">Generated Documents</div>
            </div>
            {!loading && docs.length > 0 && (
              <span className="dl-badge">{docs.length} File{docs.length !== 1 ? "s" : ""}</span>
            )}
          </div>

          {loading ? (
            <div className="dl-skel-wrap">
              {[...Array(3)].map((_, i) => <div key={i} className="dl-skel" />)}
            </div>
          ) : docs.length === 0 ? (
            <div className="dl-empty">
              <div className="dl-empty-icon"><FolderOpen /></div>
              <div className="dl-empty-title">No documents yet</div>
              <div className="dl-empty-sub">Generate a document to see it here</div>
            </div>
          ) : (
            <>
              <div className="dl-list">
                {docs.map((doc, i) => {
                  const isConverting = converting[doc._id]
                  const hasPdf       = !!doc.pdfUrl
                  return (
                    <div key={doc._id} className="dl-row">
                      <div className="dl-row-icon"><FileText /></div>
                      <div className="dl-row-body">
                        <div className="dl-row-title">
                          Version {doc.version ?? i + 1}
                          {hasPdf && <span className="dl-pdf-badge">PDF ✓</span>}
                        </div>
                        <div className="dl-row-meta">
                          <Clock />
                          {doc.createdAt
                            ? new Date(doc.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
                            : "Recently generated"}
                        </div>
                      </div>

                      <div className="dl-actions">
                        {/* View DOCX */}
                        <a href={doc.fileUrl} target="_blank" rel="noreferrer" className="dl-btn view">
                          <File /> Download DOCX
                        </a>

                        {/* Download PDF */}
                        <button
                          className={`dl-btn pdf${isConverting ? " converting" : ""}`}
                          onClick={() => downloadPdf(doc)}
                          disabled={isConverting}
                        >
                          {isConverting
                            ? <><Loader2 className="dl-spin" /> Converting…</>
                            : hasPdf
                              ? <><Download /> PDF</>
                              : <><FileDown /> Export PDF</>}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="dl-footer">
                {docs.length} document{docs.length !== 1 ? "s" : ""} · Property {propertyId}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}