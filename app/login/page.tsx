"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    try {
      await login(email, password)
      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .rе-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          background: #0c0f14;
        }

        /* ── Left panel — architectural image ── */
        .re-image-panel {
          display: none;
          position: relative;
          overflow: hidden;
          background: #0c0f14;
        }
        @media (min-width: 1024px) {
          .re-image-panel { display: block; width: 52%; }
        }

        .re-image-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&fit=crop');
          background-size: cover;
          background-position: center;
        }
        .re-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(12,15,20,0.72) 0%,
            rgba(12,15,20,0.35) 50%,
            rgba(12,15,20,0.68) 100%
          );
        }
        .re-image-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 52px 56px;
        }

        .re-logo-mark {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .re-logo-icon {
          width: 36px;
          height: 36px;
          border: 1.5px solid rgba(196,162,96,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
        }
        .re-logo-icon-inner {
          width: 14px;
          height: 14px;
          background: rgba(196,162,96,0.85);
          transform: rotate(0deg);
        }
        .re-logo-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.92);
          text-transform: uppercase;
        }

        .re-tagline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 46px;
          font-weight: 300;
          line-height: 1.18;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .re-tagline em {
          font-style: italic;
          color: rgba(196,162,96,0.9);
        }
        .re-tagline-sub {
          margin-top: 16px;
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.52);
          letter-spacing: 0.04em;
          line-height: 1.6;
          max-width: 340px;
        }

        .re-stats {
          display: flex;
          gap: 40px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .re-stat-value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 28px;
          font-weight: 500;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .re-stat-label {
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.42);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ── Right panel — form ── */
        .re-form-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 32px;
          background: #0f1218;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid texture */
        .re-form-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(196,162,96,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,162,96,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* Top accent line */
        .re-form-panel::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(196,162,96,0.6) 40%, rgba(196,162,96,0.6) 60%, transparent);
        }

        .re-form-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 400px;
        }

        /* Mobile logo */
        .re-mobile-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 44px;
        }
        @media (min-width: 1024px) {
          .re-mobile-logo { display: none; }
        }
        .re-mobile-logo-icon {
          width: 28px; height: 28px;
          border: 1px solid rgba(196,162,96,0.6);
          display: flex; align-items: center; justify-content: center;
          transform: rotate(45deg);
        }
        .re-mobile-logo-inner { width: 10px; height: 10px; background: rgba(196,162,96,0.8); }
        .re-mobile-logo-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 16px; font-weight: 500;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.88);
          text-transform: uppercase;
        }

        .re-form-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 34px;
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .re-form-subheading {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.05em;
          margin-bottom: 40px;
        }

        .re-field {
          margin-bottom: 22px;
        }
        .re-label {
          display: block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .re-field.focused .re-label {
          color: rgba(196,162,96,0.85);
        }

        .re-input-wrap {
          position: relative;
        }
        .re-input-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 1.5px;
          width: 0%;
          background: linear-gradient(90deg, rgba(196,162,96,0.9), rgba(196,162,96,0.4));
          transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .re-field.focused .re-input-line {
          width: 100%;
        }

        .re-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-bottom: none;
          border-radius: 4px 4px 0 0;
          padding: 13px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #fff;
          outline: none;
          transition: background 0.2s, border-color 0.2s;
          letter-spacing: 0.02em;
        }
        .re-input::placeholder { color: rgba(255,255,255,0.2); }
        .re-input:focus {
          background: rgba(196,162,96,0.05);
          border-color: rgba(196,162,96,0.2);
        }

        .re-error {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 12px 14px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 4px;
          font-size: 13px;
          color: #fca5a5;
          letter-spacing: 0.02em;
          animation: re-shake 0.3s ease;
        }
        @keyframes re-shake {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        .re-submit {
          width: 100%;
          height: 50px;
          background: linear-gradient(135deg, rgba(196,162,96,0.92) 0%, rgba(176,140,72,0.92) 100%);
          border: none;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0c0f14;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: opacity 0.2s, transform 0.15s;
          margin-bottom: 28px;
        }
        .re-submit:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-1px);
        }
        .re-submit:active:not(:disabled) { transform: translateY(0); }
        .re-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        .re-submit-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255,255,255,0.25) 50%,
            transparent 70%
          );
          transform: translateX(-100%);
          animation: re-shimmer 2.4s infinite;
        }
        @keyframes re-shimmer {
          0% { transform: translateX(-100%); }
          60%,100% { transform: translateX(200%); }
        }
        .re-submit:disabled .re-submit-shimmer { display: none; }

        .re-submit-loader {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .re-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(12,15,20,0.3);
          border-top-color: #0c0f14;
          border-radius: 50%;
          animation: re-spin 0.7s linear infinite;
        }
        @keyframes re-spin { to { transform: rotate(360deg); } }

        .re-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .re-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }
        .re-divider-text {
          font-size: 11px;
          color: rgba(255,255,255,0.22);
          letter-spacing: 0.08em;
        }

        .re-help {
          padding: 16px 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 4px;
        }
        .re-help-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(196,162,96,0.65);
          margin-bottom: 6px;
        }
        .re-help-text {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
        }

        .re-footer {
          margin-top: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.18);
          letter-spacing: 0.08em;
        }
        .re-footer-dot { color: rgba(196,162,96,0.4); }

        /* Entrance animation */
        .re-form-inner { animation: re-fadein 0.6s cubic-bezier(0.4,0,0.2,1) both; }
        @keyframes re-fadein {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="rе-root">

        {/* ── Left: architectural image panel ── */}
        <div className="re-image-panel">
          <div className="re-image-bg" />
          <div className="re-image-overlay" />
          <div className="re-image-content">

            {/* Logo */}
            <div className="re-logo-mark">
              <div className="re-logo-icon">
                <div className="re-logo-icon-inner" />
              </div>
              <span className="re-logo-text">Real Estate </span>
            </div>

            {/* Tagline */}
            <div>
              <div className="re-tagline">
                Precision in<br />
                <em>every</em> acquisition.
              </div>
              <div className="re-tagline-sub">
                Institutional-grade underwriting tools for commercial real estate professionals.
              </div>

              {/* Stats */}
              <div className="re-stats" style={{ marginTop: 40 }}>
                <div>
                  <div className="re-stat-value">$4.2B</div>
                  <div className="re-stat-label">Assets Analyzed</div>
                </div>
                <div>
                  <div className="re-stat-value">1,400+</div>
                  <div className="re-stat-label">Deals Underwritten</div>
                </div>
                <div>
                  <div className="re-stat-value">99.8%</div>
                  <div className="re-stat-label">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: form panel ── */}
        <div className="re-form-panel">
          <div className="re-form-inner">

            {/* Mobile logo */}
            <div className="re-mobile-logo">
              <div className="re-mobile-logo-icon">
                <div className="re-mobile-logo-inner" />
              </div>
              <span className="re-mobile-logo-text">Real Estate</span>
            </div>

            <div className="re-form-heading">Welcome back</div>
            <div className="re-form-subheading">Real Estate Underwriting System · Secure Access</div>

            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className={`re-field ${focusedField === 'email' ? 'focused' : ''}`}>
                <label className="re-label" htmlFor="email">Email Address</label>
                <div className="re-input-wrap">
                  <input
                    id="email"
                    className="re-input"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    autoComplete="email"
                  />
                  <div className="re-input-line" />
                </div>
              </div>

              {/* Password */}
              <div className={`re-field ${focusedField === 'password' ? 'focused' : ''}`}>
                <label className="re-label" htmlFor="password">Password</label>
                <div className="re-input-wrap">
                  <input
                    id="password"
                    className="re-input"
                    type="password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    required
                    autoComplete="current-password"
                  />
                  <div className="re-input-line" />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="re-error">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#fca5a5" strokeWidth="1.2"/>
                    <path d="M7 4v3.5M7 9.5v.5" stroke="#fca5a5" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  {error}
                </div>
              )}

              {/* Submit */}
              <button type="submit" className="re-submit" disabled={isLoading}>
                <div className="re-submit-shimmer" />
                {isLoading ? (
                  <span className="re-submit-loader">
                    <span className="re-spinner" />
                    Authenticating…
                  </span>
                ) : (
                  'Sign In to Platform'
                )}
              </button>

            </form>

            <div className="re-divider">
              <div className="re-divider-line" />
              <span className="re-divider-text">Need access?</span>
              <div className="re-divider-line" />
            </div>

            <div className="re-help">
              <div className="re-help-title">Credentials & Access</div>
              <div className="re-help-text">
                Contact your system administrator to reset credentials or request access to this platform.
              </div>
            </div>

            <div className="re-footer">
              <span>© 2026 Real Estate Group</span>
              <span className="re-footer-dot">◆</span>
              <span>Confidential</span>
              <span className="re-footer-dot">◆</span>
              <span>v2.4.1</span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}