"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AdminLayout } from "@/components/admin-layout"
import { Search, MapPin, Calendar, Eye, Trash2, Home, Building2, ChevronLeft, ChevronRight, SlidersHorizontal, X } from "lucide-react"

interface Property {
  _id: string
  address: string
  city?: string
  state?: string
  zipCode?: string
  createdAt?: string
  updatedAt?: string
}

export default function ExecutionList() {
  const [data, setData] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const itemsPerPage = 9

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch("/api/execution/properties")
        if (!res.ok) throw new Error("Failed to fetch properties")
        const result = await res.json()
        setData(Array.isArray(result) ? result : result.data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const deleteProperty = async (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!confirm("Are you sure you want to delete this property?")) return
    setDeletingId(id)
    try {
      await fetch(`/api/execution/properties/${id}`, { method: "DELETE" })
      setData(data.filter(p => p._id !== id))
    } catch {
      alert("Failed to delete property. Please try again.")
    } finally {
      setDeletingId(null)
    }
  }

  const filteredData = data.filter(p => {
    const q = searchQuery.toLowerCase()
    return (
      p.address?.toLowerCase().includes(q) ||
      p.city?.toLowerCase().includes(q) ||
      p.state?.toLowerCase().includes(q) ||
      p.zipCode?.toLowerCase().includes(q)
    )
  })

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => { setCurrentPage(1) }, [searchQuery])

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages)
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages)
    }
    return pages
  }

  return (
    <AdminLayout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .ex {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #f8f9fb;
          padding: 36px 40px;
        }

        /* ── Page header ── */
        .ex-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 32px;
          gap: 16px;
        }
        .ex-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 30px;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .ex-subtitle {
          font-size: 13px;
          font-weight: 300;
          color: #9ca3af;
          letter-spacing: 0.03em;
        }

        /* ── Stats bar ── */
        .ex-stats-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 28px;
        }
        .ex-stat {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px 22px;
          position: relative;
          overflow: hidden;
          flex: 1;
          transition: box-shadow 0.15s;
        }
        .ex-stat:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .ex-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 10px 10px 0 0;
          background: linear-gradient(90deg, rgba(196,162,96,0.85), rgba(196,162,96,0.3));
        }
        .ex-stat-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 4px;
        }
        .ex-stat-value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 28px;
          font-weight: 600;
          color: #111827;
          line-height: 1;
        }
        .ex-stat-value.gold { color: #92700a; }
        .ex-stat-value.blue { color: #4f46e5; }

        /* ── Search + filter row ── */
        .ex-search-row {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
          align-items: center;
        }
        .ex-search-wrap {
          position: relative;
          flex: 1;
        }
        .ex-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px; height: 16px;
          color: #9ca3af;
          pointer-events: none;
        }
        .ex-search {
          width: 100%;
          padding: 10px 14px 10px 40px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #111827;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .ex-search::placeholder { color: #9ca3af; }
        .ex-search:focus {
          border-color: rgba(196,162,96,0.5);
          box-shadow: 0 0 0 3px rgba(196,162,96,0.08);
        }
        .ex-clear-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          display: flex; align-items: center; justify-content: center;
          padding: 2px;
          transition: color 0.12s;
        }
        .ex-clear-btn:hover { color: #374151; }
        .ex-clear-btn svg { width: 14px; height: 14px; }

        .ex-filter-count {
          font-size: 12px;
          color: #6b7280;
          white-space: nowrap;
          padding: 0 4px;
        }

        /* ── Error ── */
        .ex-error {
          margin-bottom: 20px;
          padding: 12px 16px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-size: 13px;
          color: #b91c1c;
        }

        /* ── Grid ── */
        .ex-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        /* Property card */
        .prop-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s, box-shadow 0.2s, transform 0.15s;
          position: relative;
        }
        .prop-card:hover {
          border-color: rgba(196,162,96,0.45);
          box-shadow: 0 8px 28px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .prop-card.deleting {
          opacity: 0.5;
          pointer-events: none;
        }

        /* Card top accent */
        .prop-card-top {
          height: 3px;
          background: linear-gradient(90deg, rgba(196,162,96,0.7), rgba(196,162,96,0.15));
          flex-shrink: 0;
        }

        .prop-card-body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Index number */
        .prop-index {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(196,162,96,0.6);
          letter-spacing: 0.1em;
          margin-bottom: 10px;
        }

        .prop-address {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
          line-height: 1.4;
          margin-bottom: 14px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .prop-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }
        .prop-meta-row {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #6b7280;
          font-weight: 300;
        }
        .prop-meta-row svg { width: 12px; height: 12px; color: #9ca3af; flex-shrink: 0; }

        /* Action buttons */
        .prop-actions {
          display: flex;
          gap: 8px;
          padding: 14px 20px;
          border-top: 1px solid #f3f4f6;
          background: #fafafa;
        }
        .prop-view-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(196,162,96,0.08);
          border: 1px solid rgba(196,162,96,0.2);
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #92700a;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: background 0.15s, border-color 0.15s;
        }
        .prop-view-btn:hover {
          background: rgba(196,162,96,0.14);
          border-color: rgba(196,162,96,0.35);
        }
        .prop-view-btn svg { width: 13px; height: 13px; }

        .prop-del-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 10px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
          color: #9ca3af;
        }
        .prop-del-btn:hover {
          background: #fef2f2;
          border-color: #fecaca;
          color: #dc2626;
        }
        .prop-del-btn svg { width: 13px; height: 13px; }

        /* ── Skeleton ── */
        .skel {
          background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: skel 1.4s infinite;
          border-radius: 4px;
        }
        @keyframes skel { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        .prop-card-skel {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          padding: 20px;
        }
        .prop-card-skel-top { height: 3px; background: #f3f4f6; margin: -20px -20px 16px; }

        /* ── Empty state ── */
        .ex-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 64px 24px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
        }
        .ex-empty-icon {
          width: 56px; height: 56px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .ex-empty-icon svg { width: 24px; height: 24px; color: #9ca3af; }
        .ex-empty-title { font-size: 15px; font-weight: 500; color: #374151; margin-bottom: 6px; }
        .ex-empty-sub { font-size: 13px; color: #9ca3af; font-weight: 300; }

        /* ── Pagination ── */
        .ex-pagination {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .ex-pagination-info {
          font-size: 12px;
          color: #6b7280;
          font-weight: 300;
        }
        .ex-pagination-info strong { color: #111827; font-weight: 500; }
        .ex-pagination-controls { display: flex; align-items: center; gap: 4px; }

        .pg-btn {
          min-width: 34px;
          height: 34px;
          padding: 0 8px;
          display: flex; align-items: center; justify-content: center;
          background: none;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.12s;
        }
        .pg-btn:hover:not(:disabled) {
          background: #f9fafb;
          border-color: rgba(196,162,96,0.35);
          color: #92700a;
        }
        .pg-btn.active {
          background: rgba(196,162,96,0.1);
          border-color: rgba(196,162,96,0.4);
          color: #92700a;
          font-weight: 500;
        }
        .pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .pg-btn svg { width: 14px; height: 14px; }
        .pg-ellipsis { padding: 0 4px; color: #9ca3af; font-size: 13px; }
      `}</style>

      <div className="ex">

        {/* ── Header ── */}
        <div className="ex-header">
          <div>
            <div className="ex-title">Property Executions</div>
            <div className="ex-subtitle">Manage and monitor all properties in the execution pipeline</div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="ex-stats-bar">
          <div className="ex-stat">
            <div className="ex-stat-label">Total Properties</div>
            <div className={`ex-stat-value gold ${isLoading ? "skel" : ""}`} style={isLoading ? { height: 28, width: 48, display: "block" } : {}}>
              {!isLoading && data.length}
            </div>
          </div>
          <div className="ex-stat">
            <div className="ex-stat-label">Filtered Results</div>
            <div className="ex-stat-value blue">
              {isLoading ? "—" : filteredData.length !== data.length ? filteredData.length : "—"}
            </div>
          </div>
          <div className="ex-stat">
            <div className="ex-stat-label">Current Page</div>
            <div className="ex-stat-value">{isLoading ? "—" : `${currentPage} / ${totalPages || 1}`}</div>
          </div>
        </div>

        {/* ── Search ── */}
        <div className="ex-search-row">
          <div className="ex-search-wrap">
            <Search className="ex-search-icon" />
            <input
              type="text"
              placeholder="Search by address, city, state or zip code…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="ex-search"
            />
            {searchQuery && (
              <button className="ex-clear-btn" onClick={() => setSearchQuery("")}>
                <X />
              </button>
            )}
          </div>
          {searchQuery && !isLoading && (
            <span className="ex-filter-count">{filteredData.length} result{filteredData.length !== 1 ? "s" : ""}</span>
          )}
        </div>

        {/* ── Error ── */}
        {error && <div className="ex-error">{error}</div>}

        {/* ── Grid ── */}
        <div className="ex-grid">
          {isLoading ? (
            [...Array(9)].map((_, i) => (
              <div key={i} className="prop-card-skel">
                <div className="prop-card-skel-top" />
                <div className="skel" style={{ height: 10, width: 60, marginBottom: 12 }} />
                <div className="skel" style={{ height: 16, marginBottom: 6 }} />
                <div className="skel" style={{ height: 16, width: "70%", marginBottom: 20 }} />
                <div className="skel" style={{ height: 12, width: "80%", marginBottom: 8 }} />
                <div className="skel" style={{ height: 12, width: "55%", marginBottom: 20 }} />
                <div className="skel" style={{ height: 34, borderRadius: 6 }} />
              </div>
            ))
          ) : filteredData.length === 0 ? (
            <div className="ex-empty">
              <div className="ex-empty-icon">
                {searchQuery ? <Search /> : <Home />}
              </div>
              <div className="ex-empty-title">
                {searchQuery ? "No properties match your search" : "No properties yet"}
              </div>
              <div className="ex-empty-sub">
                {searchQuery
                  ? "Try adjusting your search terms"
                  : "Properties added to the execution pipeline will appear here"}
              </div>
            </div>
          ) : (
            paginatedData.map((property, i) => (
              <div
                key={property._id}
                className={`prop-card ${deletingId === property._id ? "deleting" : ""}`}
              >
                <div className="prop-card-top" />
                <div className="prop-card-body">
                  
                  <div className="prop-address">
                    {property.address || "Address not specified"}
                  </div>
                  <div className="prop-meta">
                    <div className="prop-meta-row">
                      <MapPin />
                      {[property.city, property.state, property.zipCode].filter(Boolean).join(", ") || "Location not specified"}
                    </div>
                    {property.createdAt && (
                      <div className="prop-meta-row">
                        <Calendar />
                        {new Date(property.createdAt).toLocaleDateString("en-US", {
                          month: "short", day: "numeric", year: "numeric"
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className="prop-actions">
                  <Link href={`/execution/${property._id}`} className="prop-view-btn">
                    <Eye />
                    View Details
                  </Link>
                  <button
                    onClick={e => deleteProperty(property._id, e)}
                    className="prop-del-btn"
                    title="Delete property"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── Pagination ── */}
        {!isLoading && totalPages > 1 && (
          <div className="ex-pagination">
            <div className="ex-pagination-info">
              Showing <strong>{startIndex + 1}</strong>–<strong>{Math.min(startIndex + itemsPerPage, filteredData.length)}</strong> of <strong>{filteredData.length}</strong> properties
            </div>
            <div className="ex-pagination-controls">
              <button className="pg-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                <ChevronLeft />
              </button>
              {getPageNumbers().map((page, i) =>
                page === "..." ? (
                  <span key={`e-${i}`} className="pg-ellipsis">…</span>
                ) : (
                  <button
                    key={page}
                    className={`pg-btn ${currentPage === page ? "active" : ""}`}
                    onClick={() => goToPage(page as number)}
                  >
                    {page}
                  </button>
                )
              )}
              <button className="pg-btn" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}