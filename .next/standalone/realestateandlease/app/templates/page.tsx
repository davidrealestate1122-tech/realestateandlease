"use client"

import { useEffect, useState } from "react"
import { Upload, File, CheckCircle, AlertCircle, Loader2, X } from "lucide-react"
import { AdminLayout } from "@/components/admin-layout"
import List from "./list/page" // adjust import path as needed
import { da } from "date-fns/locale"
type Variable = { _id: string; variable: string; mappedTo?: string; value?: string; required?: boolean; source?: string }

export default function TemplatesPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [uploadCount, setUploadCount] = useState(0) // bumped after each successful upload to remount <List />

const [liveVariables, setLiveVariables] = useState<Variable[]>([])
  const [loading, setLoading] = useState(false)
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    else if (e.type === "dragleave") setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
      setError(null)
      setSuccess(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setError(null)
      setSuccess(false)
    }
  }

  const removeFile = () => {
    setFile(null)
    setSuccess(false)
    setError(null)
  }

  const upload = async () => {
    if (!file) { setError("Please select a file first"); return }
    setUploading(true)
    setError(null)
    setSuccess(false)
    try {
      const form = new FormData()
      form.append("file", file)
      const res = await fetch("/api/templates/upload", { method: "POST", body: form })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || "Upload failed")
      setSuccess(true)
      setFile(null)
      setUploadCount(c => c + 1) // triggers List remount → fresh fetch
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  return (
    <AdminLayout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .tp {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #f8f9fb;
          padding: 36px 40px;
        }

        .tp-header { margin-bottom: 32px; }
        .tp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 30px;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .tp-subtitle {
          font-size: 13px;
          font-weight: 300;
          color: #9ca3af;
          letter-spacing: 0.03em;
        }

        .tp-stats-bar { display: flex; gap: 16px; margin-bottom: 28px; }
        .tp-stat {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px 22px;
          position: relative;
          overflow: hidden;
          flex: 1;
          transition: box-shadow 0.15s;
        }
        .tp-stat:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .tp-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 10px 10px 0 0;
          background: linear-gradient(90deg, rgba(196,162,96,0.85), rgba(196,162,96,0.3));
        }
        .tp-stat-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 4px;
        }
        .tp-stat-value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 28px;
          font-weight: 600;
          color: #111827;
          line-height: 1;
        }
        .tp-stat-value.gold { color: #92700a; }
        .tp-stat-value.green { color: #166534; }
        .tp-stat-value.purple { color: #4f46e5; }

        .tp-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 0;
          position: relative;
        }
        .tp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, rgba(196,162,96,0.7), rgba(196,162,96,0.15));
        }
        .tp-card-body { padding: 28px 32px 32px; }

        .tp-dropzone {
          border: 2px dashed #e5e7eb;
          border-radius: 10px;
          padding: 48px 24px;
          text-align: center;
          transition: border-color 0.15s, background 0.15s;
          cursor: pointer;
        }
        .tp-dropzone:hover { border-color: rgba(196,162,96,0.45); background: rgba(196,162,96,0.02); }
        .tp-dropzone.active { border-color: rgba(196,162,96,0.6); background: rgba(196,162,96,0.05); }
        .tp-dropzone-icon {
          width: 60px; height: 60px;
          background: rgba(196,162,96,0.08);
          border: 1px solid rgba(196,162,96,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .tp-dropzone-icon svg { width: 26px; height: 26px; color: #92700a; }
        .tp-dropzone-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 18px;
          font-weight: 500;
          color: #111827;
          margin-bottom: 6px;
        }
        .tp-dropzone-title span { color: #92700a; text-decoration: underline; text-underline-offset: 3px; }
        .tp-dropzone-formats { font-size: 12px; color: #9ca3af; font-weight: 300; margin-bottom: 4px; }
        .tp-dropzone-limit { font-size: 11px; color: #c4a260; letter-spacing: 0.06em; font-weight: 500; }

        .tp-file-row {
          display: flex; align-items: center; gap: 14px;
          background: #fafafa; border: 1px solid #e5e7eb;
          border-radius: 8px; padding: 14px 16px;
        }
        .tp-file-icon {
          width: 40px; height: 40px;
          background: rgba(196,162,96,0.08); border: 1px solid rgba(196,162,96,0.2);
          border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .tp-file-icon svg { width: 18px; height: 18px; color: #92700a; }
        .tp-file-name { font-size: 13px; font-weight: 500; color: #111827; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; }
        .tp-file-size { font-size: 11px; color: #9ca3af; font-weight: 300; margin-top: 2px; }
        .tp-file-remove {
          background: none; border: 1px solid #e5e7eb; border-radius: 6px; padding: 6px;
          cursor: pointer; color: #9ca3af; display: flex; align-items: center; justify-content: center;
          transition: background 0.12s, border-color 0.12s, color 0.12s; flex-shrink: 0;
        }
        .tp-file-remove:hover { background: #fef2f2; border-color: #fecaca; color: #dc2626; }
        .tp-file-remove svg { width: 14px; height: 14px; }

        .tp-alert {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 16px; border-radius: 8px; margin-top: 16px;
        }
        .tp-alert.error { background: #fef2f2; border: 1px solid #fecaca; }
        .tp-alert.success { background: #f0fdf4; border: 1px solid #bbf7d0; }
        .tp-alert svg { width: 16px; height: 16px; flex-shrink: 0; margin-top: 1px; }
        .tp-alert.error svg { color: #dc2626; }
        .tp-alert.success svg { color: #16a34a; }
        .tp-alert-title { font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 2px; }
        .tp-alert.error .tp-alert-title { color: #991b1b; }
        .tp-alert.success .tp-alert-title { color: #166534; }
        .tp-alert-msg { font-size: 13px; font-weight: 300; }
        .tp-alert.error .tp-alert-msg { color: #b91c1c; }
        .tp-alert.success .tp-alert-msg { color: #15803d; }

        .tp-actions {
          display: flex; justify-content: flex-end; gap: 10px;
          margin-top: 24px; padding-top: 20px; border-top: 1px solid #f3f4f6;
        }
        .tp-btn-cancel {
          padding: 10px 20px; background: #fff; border: 1px solid #e5e7eb; border-radius: 7px;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 400; color: #6b7280;
          cursor: pointer; transition: background 0.12s, border-color 0.12s, color 0.12s;
        }
        .tp-btn-cancel:hover:not(:disabled) { background: #f9fafb; border-color: #d1d5db; color: #374151; }
        .tp-btn-cancel:disabled { opacity: 0.4; cursor: not-allowed; }
        .tp-btn-upload {
          display: flex; align-items: center; gap: 8px; padding: 10px 24px;
          background: linear-gradient(135deg, rgba(196,162,96,0.9), rgba(146,112,10,0.95));
          border: 1px solid rgba(196,162,96,0.4); border-radius: 7px;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #fff;
          cursor: pointer; letter-spacing: 0.03em;
          transition: opacity 0.15s, box-shadow 0.15s;
          box-shadow: 0 2px 8px rgba(196,162,96,0.25);
        }
        .tp-btn-upload:hover:not(:disabled) { opacity: 0.9; box-shadow: 0 4px 16px rgba(196,162,96,0.35); }
        .tp-btn-upload:disabled { opacity: 0.4; cursor: not-allowed; box-shadow: none; }
        .tp-btn-upload svg { width: 15px; height: 15px; }
        .tp-btn-upload .spin { animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .tp-divider {
          display: flex; align-items: center; gap: 14px;
          margin: 32px 0 0;
        }
        .tp-divider-line { flex: 1; height: 1px; background: #e5e7eb; }
        .tp-divider-label {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #c4a260;
        }

        .tp .tl {
          padding: 28px 0 0;
          background: transparent;
          min-height: unset;
        }
      `}</style>

      <div className="tp">

        <div className="tp-header">
          <div className="tp-title">Templates</div>
          <div className="tp-subtitle">Upload and manage your template files</div>
        </div>

        <div className="tp-stats-bar">
          <div className="tp-stat">
            <div className="tp-stat-label">Max File Size</div>
            <div className="tp-stat-value gold">100 MB</div>
          </div>
          <div className="tp-stat">
            <div className="tp-stat-label">Supported Formats</div>
            <div className="tp-stat-value purple">7 Types</div>
          </div>
          <div className="tp-stat">
            <div className="tp-stat-label">Encryption</div>
            <div className="tp-stat-value green">Active</div>
          </div>
        </div>

        <div className="tp-card">
          <div className="tp-card-body">
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {!file ? (
                <>
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.csv"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="file-upload" style={{ display: "block", cursor: "pointer" }}>
                    <div className={`tp-dropzone${dragActive ? " active" : ""}`}>
                      <div className="tp-dropzone-icon"><Upload /></div>
                      <div className="tp-dropzone-title">
                        Drop your file here, or <span>browse</span>
                      </div>
                      <div className="tp-dropzone-formats">PDF · DOC · DOCX · XLS · XLSX · TXT · CSV</div>
                      <div className="tp-dropzone-limit">Maximum 100 MB</div>
                    </div>
                  </label>
                </>
              ) : (
                <div className="tp-file-row">
                  <div className="tp-file-icon"><File /></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="tp-file-name">{file.name}</div>
                    <div className="tp-file-size">{formatFileSize(file.size)}</div>
                  </div>
                  <button className="tp-file-remove" onClick={removeFile} disabled={uploading}><X /></button>
                </div>
              )}
            </div>

            {error && (
              <div className="tp-alert error">
                <AlertCircle />
                <div>
                  <div className="tp-alert-title">Upload Failed</div>
                  <div className="tp-alert-msg">{error}</div>
                </div>
              </div>
            )}

            {success && (
              <div className="tp-alert success">
                <CheckCircle />
                <div>
                  <div className="tp-alert-title">Upload Successful</div>
                  <div className="tp-alert-msg">Your file has been uploaded successfully.</div>
                </div>
              </div>
            )}

            <div className="tp-actions">
              {file && (
                <button className="tp-btn-cancel" onClick={removeFile} disabled={uploading}>Cancel</button>
              )}
              <button className="tp-btn-upload" onClick={upload} disabled={!file || uploading}>
                {uploading ? (
                  <><Loader2 className="spin" />Uploading…</>
                ) : (
                  <><Upload />Upload File</>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="tp-divider">
          <div className="tp-divider-line" />
          <div className="tp-divider-label">Existing Templates</div>
          <div className="tp-divider-line" />
        </div>

        {/* key={uploadCount} forces a full remount + re-fetch on every successful upload */}
        <List key={uploadCount}  setliveVariables={setLiveVariables} />

      </div>
    </AdminLayout>
  )
}