"use client"

import { AdminLayout } from "@/components/admin-layout"
import { useEffect, useState } from "react"
import { Building2, BarChart3, ArrowRight, MapPin, Calendar, TrendingUp, Clock, RefreshCw } from "lucide-react"
import Link from "next/link"

interface Property {
  _id: string
  address: string
  city?: string
  state?: string
  zipCode?: string
  createdAt?: string
  updatedAt?: string
}

export default function DashboardPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProperties = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/execution/properties")
      if (!res.ok) throw new Error("Failed to fetch properties")
      const result = await res.json()
      setProperties(Array.isArray(result) ? result : result.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchProperties() }, [])

  const totalProperties = properties.length

  const recentProperties = [...properties]
    .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
    .slice(0, 5)

  const oneWeekAgo  = new Date(Date.now() - 7  * 24 * 60 * 60 * 1000)
  const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  const thisWeekCount  = properties.filter(p => p.createdAt && new Date(p.createdAt) >= oneWeekAgo).length
  const thisMonthCount = properties.filter(p => p.createdAt && new Date(p.createdAt) >= oneMonthAgo).length

  const stateBreakdown = properties.reduce<Record<string, number>>((acc, p) => {
    const key = p.state?.trim() || "Unknown"
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {})
  const topStates = Object.entries(stateBreakdown).sort((a, b) => b[1] - a[1]).slice(0, 4)

  return (
    <AdminLayout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .dash { font-family: 'DM Sans', sans-serif; min-height: 100vh; background: #f8f9fb; padding: 36px 40px; }

        .dash-header { margin-bottom: 32px; display: flex; align-items: flex-start; justify-content: space-between; }
        .dash-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 30px; font-weight: 600; color: #111827; margin-bottom: 4px; letter-spacing: -0.01em; }
        .dash-subtitle { font-size: 13px; font-weight: 300; color: #9ca3af; letter-spacing: 0.03em; }

        .refresh-btn { display: flex; align-items: center; gap: 6px; padding: 8px 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 400; color: #6b7280; cursor: pointer; transition: all 0.15s; }
        .refresh-btn:hover { border-color: rgba(196,162,96,0.4); color: #92700a; }
        .refresh-btn svg { width: 13px; height: 13px; }
        .refresh-btn.spinning svg { animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Section label */
        .dash-section-label { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #9ca3af; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .dash-section-label::after { content: ''; flex: 1; height: 1px; background: #e5e7eb; }

        /* Stat cards */
        .dash-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }

        .stat-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 22px 24px; position: relative; overflow: hidden; transition: box-shadow 0.15s, border-color 0.15s; }
        .stat-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); border-color: #d1d5db; }
        .stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; border-radius: 10px 10px 0 0; }
        .stat-card.gold::before  { background: linear-gradient(90deg, rgba(196,162,96,0.9), rgba(196,162,96,0.35)); }
        .stat-card.green::before { background: linear-gradient(90deg, rgba(34,197,94,0.8), rgba(34,197,94,0.25)); }
        .stat-card.blue::before  { background: linear-gradient(90deg, rgba(99,102,241,0.8), rgba(99,102,241,0.25)); }
        .stat-card.slate::before { background: linear-gradient(90deg, rgba(100,116,139,0.8), rgba(100,116,139,0.25)); }

        .stat-icon-wrap { width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .stat-icon-wrap.gold  { background: rgba(196,162,96,0.1); }
        .stat-icon-wrap.green { background: rgba(34,197,94,0.1); }
        .stat-icon-wrap.blue  { background: rgba(99,102,241,0.1); }
        .stat-icon-wrap.slate { background: rgba(100,116,139,0.1); }
        .stat-icon-wrap svg { width: 18px; height: 18px; }
        .stat-icon-wrap.gold  svg { color: #b8943a; }
        .stat-icon-wrap.green svg { color: #16a34a; }
        .stat-icon-wrap.blue  svg { color: #6366f1; }
        .stat-icon-wrap.slate svg { color: #64748b; }

        .stat-label { font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #9ca3af; margin-bottom: 6px; }
        .stat-value { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 38px; font-weight: 600; letter-spacing: -0.02em; line-height: 1; margin-bottom: 8px; color: #111827; }
        .stat-value.gold  { color: #92700a; }
        .stat-value.green { color: #15803d; }
        .stat-value.blue  { color: #4f46e5; }
        .stat-value.slate { color: #475569; }
        .stat-sub { font-size: 12px; font-weight: 300; color: #9ca3af; }

        /* Skeleton pulse */
        .skel { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: skel-anim 1.4s infinite; border-radius: 4px; }
        @keyframes skel-anim { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        /* Mid row */
        .dash-mid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }

        /* Property CTA dark card */
        .property-cta-card { background: #111827; border-radius: 10px; padding: 32px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; min-height: 200px; }
        .property-cta-card::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(196,162,96,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(196,162,96,0.05) 1px, transparent 1px); background-size: 32px 32px; }
        .property-cta-card::after { content: ''; position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; background: radial-gradient(circle, rgba(196,162,96,0.2) 0%, transparent 70%); pointer-events: none; }
        .cta-label { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(196,162,96,0.7); margin-bottom: 8px; position: relative; z-index: 1; }
        .cta-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 26px; font-weight: 500; color: #fff; margin-bottom: 6px; position: relative; z-index: 1; line-height: 1.2; }
        .cta-sub { font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.38); margin-bottom: 24px; position: relative; z-index: 1; }
        .cta-count { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 42px; font-weight: 600; color: rgba(196,162,96,0.9); line-height: 1; position: relative; z-index: 1; }
        .cta-count-label { font-size: 11px; color: rgba(255,255,255,0.3); letter-spacing: 0.06em; position: relative; z-index: 1; margin-bottom: 20px; }
        .cta-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: rgba(196,162,96,0.9); border: none; border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #111827; text-decoration: none; cursor: pointer; transition: background 0.15s, transform 0.12s; position: relative; z-index: 1; width: fit-content; }
        .cta-btn:hover { background: rgba(196,162,96,1); transform: translateY(-1px); }
        .cta-btn svg { width: 14px; height: 14px; }

        /* State breakdown card */
        .breakdown-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 28px; }
        .breakdown-title { font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #9ca3af; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
        .breakdown-title svg { width: 14px; height: 14px; color: rgba(196,162,96,0.7); }
        .breakdown-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #f9fafb; }
        .breakdown-row:last-child { border-bottom: none; }
        .breakdown-state { font-size: 13px; font-weight: 500; color: #374151; min-width: 80px; }
        .breakdown-bar-wrap { flex: 1; height: 5px; background: #f3f4f6; border-radius: 3px; overflow: hidden; }
        .breakdown-bar { height: 100%; border-radius: 3px; background: linear-gradient(90deg, rgba(196,162,96,0.85), rgba(196,162,96,0.35)); }
        .breakdown-count { font-size: 13px; font-weight: 600; color: #6b7280; min-width: 24px; text-align: right; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; }
        .breakdown-empty { font-size: 13px; color: #9ca3af; text-align: center; padding: 24px 0; }

        /* Recent properties table */
        .activity-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; }
        .activity-head { padding: 20px 24px; border-bottom: 1px solid #f3f4f6; display: flex; align-items: center; justify-content: space-between; }
        .activity-head-title { font-size: 13px; font-weight: 500; color: #374151; }
        .activity-head-sub { font-size: 11px; color: #9ca3af; margin-top: 2px; }
        .activity-view-all { font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #b8943a; text-decoration: none; display: flex; align-items: center; gap: 4px; transition: opacity 0.15s; }
        .activity-view-all:hover { opacity: 0.7; }
        .activity-view-all svg { width: 12px; height: 12px; }

        .activity-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 24px; border-bottom: 1px solid #f9fafb; transition: background 0.12s; }
        .activity-row:last-child { border-bottom: none; }
        .activity-row:hover { background: #fafafa; }

        .activity-left { display: flex; align-items: flex-start; gap: 12px; }
        .activity-icon-wrap { width: 34px; height: 34px; border-radius: 7px; background: rgba(196,162,96,0.08); border: 1px solid rgba(196,162,96,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .activity-icon-wrap svg { width: 15px; height: 15px; color: #b8943a; }
        .activity-addr { font-size: 13px; font-weight: 500; color: #111827; margin-bottom: 2px; }
        .activity-loc { font-size: 11px; color: #9ca3af; font-weight: 300; }

        .activity-right { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
        .activity-date { font-size: 11px; color: #9ca3af; display: flex; align-items: center; gap: 4px; }
        .activity-date svg { width: 11px; height: 11px; }

        .view-btn { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 500; color: #9ca3af; text-decoration: none; padding: 5px 10px; border-radius: 5px; border: 1px solid #e5e7eb; transition: all 0.12s; letter-spacing: 0.04em; }
        .view-btn:hover { border-color: rgba(196,162,96,0.4); color: #92700a; background: rgba(196,162,96,0.04); }
        .view-btn svg { width: 11px; height: 11px; }

        /* Empty / error state */
        .empty-state { text-align: center; padding: 48px 24px; }
        .empty-icon { width: 48px; height: 48px; background: #f3f4f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
        .empty-icon svg { width: 22px; height: 22px; color: #9ca3af; }
        .empty-text { font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 4px; }
        .empty-sub { font-size: 12px; color: #9ca3af; }

        .error-banner { margin-bottom: 24px; padding: 12px 16px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; font-size: 13px; color: #b91c1c; }
      `}</style>

      <div className="dash">

        {/* ── Header ── */}
        <div className="dash-header">
          <div>
            <div className="dash-title">Dashboard</div>
            <div className="dash-subtitle">Overview of your real estate property portfolio</div>
          </div>
          <button className={`refresh-btn ${isLoading ? "spinning" : ""}`} onClick={fetchProperties} disabled={isLoading}>
            <RefreshCw />
            Refresh
          </button>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {/* ── Stat cards ── */}
        <div className="dash-section-label">Portfolio Overview</div>
        <div className="dash-stats">

          <div className="stat-card gold">
            <div className="stat-icon-wrap gold"><Building2 /></div>
            <div className="stat-label">Total Properties</div>
            {isLoading
              ? <div className="skel" style={{ height: 42, width: 80, marginBottom: 8 }} />
              : <div className="stat-value gold">{totalProperties}</div>
            }
            <div className="stat-sub">In execution pipeline</div>
          </div>

          <div className="stat-card green">
            <div className="stat-icon-wrap green"><TrendingUp /></div>
            <div className="stat-label">Added This Week</div>
            {isLoading
              ? <div className="skel" style={{ height: 42, width: 60, marginBottom: 8 }} />
              : <div className="stat-value green">{thisWeekCount}</div>
            }
            <div className="stat-sub">Last 7 days</div>
          </div>

          <div className="stat-card blue">
            <div className="stat-icon-wrap blue"><Calendar /></div>
            <div className="stat-label">Added This Month</div>
            {isLoading
              ? <div className="skel" style={{ height: 42, width: 60, marginBottom: 8 }} />
              : <div className="stat-value blue">{thisMonthCount}</div>
            }
            <div className="stat-sub">Last 30 days</div>
          </div>

          {/* <div className="stat-card slate">
            <div className="stat-icon-wrap slate"><MapPin /></div>
            <div className="stat-label">States Covered</div>
            {isLoading
              ? <div className="skel" style={{ height: 42, width: 60, marginBottom: 8 }} />
              : <div className="stat-value slate">{Object.keys(stateBreakdown).length}</div>
            }
            <div className="stat-sub">Unique locations</div>
          </div> */}

        </div>

        {/* ── Mid row: CTA + state breakdown ── */}
        <div className="dash-section-label">Property Management</div>
        <div className="">

          {/* Dark CTA card */}
          <div className="property-cta-card">
            <div>
              <div className="cta-label">Execution Pipeline</div>
              <div className="cta-title">Property Portfolio</div>
              <div className="cta-sub">Search, filter and manage all properties under execution</div>
              {isLoading
                ? <div className="skel" style={{ height: 42, width: 80, marginBottom: 4 }} />
                : <><div className="cta-count">{totalProperties}</div>
                   <div className="cta-count-label">Total Properties</div></>
              }
            </div>
            <Link href="/execution" className="cta-btn">
              View All Properties
              <ArrowRight />
            </Link>
          </div>

          {/* State breakdown */}
          {/* <div className="breakdown-card">
            <div className="breakdown-title">
              <BarChart3 />
              Properties by State
            </div>
            {isLoading ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[...Array(4)].map((_, i) => <div key={i} className="skel" style={{ height: 20 }} />)}
              </div>
            ) : topStates.length === 0 ? (
              <div className="breakdown-empty">No location data available</div>
            ) : (
              topStates.map(([state, count]) => (
                <div key={state} className="breakdown-row">
                  <div className="breakdown-state">{state}</div>
                  <div className="breakdown-bar-wrap">
                    <div className="breakdown-bar" style={{ width: `${(count / totalProperties) * 100}%` }} />
                  </div>
                  <div className="breakdown-count">{count}</div>
                </div>
              ))
            )}
          </div> */}

        </div>

        {/* ── Recent Properties ── */}
        <div className="dash-section-label">Recent Properties</div>
        <div className="activity-card">
          <div className="activity-head">
            <div>
              <div className="activity-head-title">Latest Additions</div>
              <div className="activity-head-sub">5 most recently added properties</div>
            </div>
            <Link href="/execution" className="activity-view-all">
              View all <ArrowRight />
            </Link>
          </div>

          {isLoading ? (
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
              {[...Array(5)].map((_, i) => <div key={i} className="skel" style={{ height: 52 }} />)}
            </div>
          ) : recentProperties.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon"><Building2 /></div>
              <div className="empty-text">No properties yet</div>
              <div className="empty-sub">Properties added to the execution pipeline will appear here</div>
            </div>
          ) : (
            recentProperties.map((property) => (
              <div key={property._id} className="activity-row">
                <div className="activity-left">
                  <div className="activity-icon-wrap"><MapPin /></div>
                  <div>
                    <div className="activity-addr">{property.address || "Address not specified"}</div>
                    <div className="activity-loc">
                      {[property.city, property.state, property.zipCode].filter(Boolean).join(", ") || "Location not specified"}
                    </div>
                  </div>
                </div>

                <div className="activity-right">
                  {property.createdAt && (
                    <div className="activity-date">
                      <Clock />
                      {new Date(property.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </div>
                  )}
                  <Link href={`/execution/${property._id}`} className="view-btn">
                    Details <TrendingUp />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </AdminLayout>
  )
}