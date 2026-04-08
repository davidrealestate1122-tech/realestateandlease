"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { LogOut, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const { admin, logout } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [time, setTime] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    setEmail(localStorage.getItem("email") ?? "")
  }, [])

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const initials = email
    ? email.split("@")[0].slice(0, 2).toUpperCase()
    : "AD"

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .re-header {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        /* Gold accent line along the bottom edge */
        .re-header::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(196,162,96,0.55) 25%, rgba(196,162,96,0.55) 75%, transparent 100%);
        }

        /* ── Left ── */
        .re-header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .re-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .re-brand-icon {
          width: 26px; height: 26px;
          border: 1.5px solid rgba(196,162,96,0.65);
          display: flex; align-items: center; justify-content: center;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .re-brand-icon-inner {
          width: 9px; height: 9px;
          background: rgba(196,162,96,0.85);
        }
        .re-brand-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111827;
          white-space: nowrap;
        }

        .re-divider-v {
          width: 1px;
          height: 22px;
          background: #e5e7eb;
        }

        .re-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #9ca3af;
          letter-spacing: 0.03em;
        }
        .re-breadcrumb-active {
          color: #374151;
          font-weight: 500;
        }
        .re-breadcrumb-sep {
          color: rgba(196,162,96,0.7);
          font-size: 14px;
          line-height: 1;
        }

        /* ── Center ── */
        .re-header-center {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          pointer-events: none;
        }
        .re-time {
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          letter-spacing: 0.05em;
        }
        .re-date {
          font-size: 10px;
          font-weight: 300;
          color: #9ca3af;
          letter-spacing: 0.05em;
        }

        /* ── Right ── */
        .re-header-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Status pill */
        .re-status {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border: 1px solid #bbf7d0;
          background: #f0fdf4;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 400;
          color: #15803d;
          letter-spacing: 0.04em;
        }
        .re-status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 5px rgba(34,197,94,0.55);
          animation: re-pulse 2.2s ease infinite;
        }
        @keyframes re-pulse {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* User button */
        .re-user-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 5px 12px 5px 5px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 7px;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
          position: relative;
        }
        .re-user-btn:hover {
          background: #f3f4f6;
          border-color: rgba(196,162,96,0.45);
          box-shadow: 0 1px 6px rgba(0,0,0,0.07);
        }

        .re-avatar {
          width: 30px; height: 30px;
          border-radius: 5px;
          background: linear-gradient(135deg, #c4a260, #9c7a38);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .re-user-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
          text-align: left;
        }
        .re-user-name {
          font-size: 12px;
          font-weight: 500;
          color: #111827;
          max-width: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .re-user-role {
          font-size: 10px;
          font-weight: 400;
          color: #b8943a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .re-chevron {
          color: #9ca3af;
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .re-user-btn.open .re-chevron { transform: rotate(180deg); }

        /* Dropdown */
        .re-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 215px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 10px 36px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
          padding: 6px;
          z-index: 50;
          animation: re-dropdown-in 0.14s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes re-dropdown-in {
          from { opacity: 0; transform: translateY(-5px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .re-dropdown-header {
          padding: 10px 12px 12px;
          border-bottom: 1px solid #f3f4f6;
          margin-bottom: 4px;
        }
        .re-dropdown-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b8943a;
          margin-bottom: 3px;
        }
        .re-dropdown-email {
          font-size: 12px;
          color: #6b7280;
          word-break: break-all;
        }

        .re-dropdown-item {
          display: flex;
          align-items: center;
          gap: 9px;
          width: 100%;
          padding: 8px 12px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 400;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          transition: background 0.12s, color 0.12s;
          text-align: left;
        }
        .re-dropdown-item svg { color: #9ca3af; flex-shrink: 0; transition: color 0.12s; }
        .re-dropdown-item:hover { background: #f9fafb; }
        .re-dropdown-item.danger:hover {
          background: #fef2f2;
          color: #dc2626;
        }
        .re-dropdown-item.danger:hover svg { color: #dc2626; }
      `}</style>

      <header className="re-header">

        {/* ── Left ── */}
        <div className="re-header-left">
          <div className="re-brand">
            <div className="re-brand-icon">
              <div className="re-brand-icon-inner" />
            </div>
            <span className="re-brand-name">Real Estate</span>
          </div>

          <div className="re-divider-v" />

          <div className="re-breadcrumb">
            <span>Platform</span>
            <span className="re-breadcrumb-sep">›</span>
            <span className="re-breadcrumb-active">Underwriting Dashboard</span>
          </div>
        </div>

        {/* ── Center ── */}
        <div className="re-header-center">
          <div className="re-time">{time}</div>
          <div className="re-date">{today}</div>
        </div>

        {/* ── Right ── */}
        <div className="re-header-right">

          <div className="re-status">
            <span className="re-status-dot" />
            All Systems Operational
          </div>

          <div style={{ position: "relative" }}>
            <button
              className={`re-user-btn ${showDropdown ? "open" : ""}`}
              onClick={() => setShowDropdown(v => !v)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            >
              <div className="re-avatar">{initials}</div>
              <div className="re-user-info">
                <div className="re-user-name">{email || "Administrator"}</div>
                <div className="re-user-role">Admin</div>
              </div>
              <ChevronDown className="re-chevron" size={13} />
            </button>

            {showDropdown && (
              <div className="re-dropdown">
                <div className="re-dropdown-header">
                  <div className="re-dropdown-label">Signed in as</div>
                  <div className="re-dropdown-email">{email || "Administrator"}</div>
                </div>
                <button className="re-dropdown-item danger" onClick={handleLogout}>
                  <LogOut size={14} />
                  Sign out
                </button>
              </div>
            )}
          </div>

        </div>
      </header>
    </>
  )
}