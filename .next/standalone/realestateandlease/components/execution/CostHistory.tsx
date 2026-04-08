"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, TrendingUp, Calendar, User } from "lucide-react"

const costTypeLabels: Record<string, string> = {
  purchasePrice: "Purchase Price",
  rehabCost: "Rehab Cost",
  holdingCosts: "Holding Costs",
  closingCosts: "Closing Costs",
}

const costTypeColors: Record<string, { bg: string; text: string; icon: string }> = {
  purchasePrice: { 
    bg: "bg-blue-50 dark:bg-blue-900/20", 
    text: "text-blue-700 dark:text-blue-300",
    icon: "🏠"
  },
  rehabCost: { 
    bg: "bg-orange-50 dark:bg-orange-900/20", 
    text: "text-orange-700 dark:text-orange-300",
    icon: "🔨"
  },
  holdingCosts: { 
    bg: "bg-purple-50 dark:bg-purple-900/20", 
    text: "text-purple-700 dark:text-purple-300",
    icon: "⏱️"
  },
  closingCosts: { 
    bg: "bg-emerald-50 dark:bg-emerald-900/20", 
    text: "text-emerald-700 dark:text-emerald-300",
    icon: "✅"
  },
}

interface HistoryItem {
  _id: string
  costType: string
  oldPrice: number
  newPrice: number
  changedBy: string
  createdAt: string
}

const ITEMS_PER_PAGE = 5

export default function CostHistory({ workspaceId, refreshTrigger }: { workspaceId: any, refreshTrigger?: number }) {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState<string | null>(null)

  // Function to fetch history
  const fetchHistory = () => {
    if (!workspaceId) return

    setIsLoading(true)
    setError(null)
    
    fetch(`/api/execution/costs/workspace/${workspaceId}/history`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch history")
        return res.json()
      })
      .then((data) => {
        console.log("✅ History fetched:", data)
        setHistory(Array.isArray(data) ? data : [])
        setCurrentPage(1)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("❌ Error fetching history:", err)
        setError("Could not load cost history")
        setHistory([])
        setIsLoading(false)
      })
  }

  // Initial fetch
  useEffect(() => {
    fetchHistory()
  }, [workspaceId])

  // Refetch when refreshTrigger changes or after a few seconds
  useEffect(() => {
    fetchHistory()
  }, [refreshTrigger])

  if (isLoading) {
    return (
      <div className="py-8 px-4">
        <div className="flex items-center justify-center gap-3">
          <div className="animate-spin">
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full dark:border-blue-400 dark:border-t-transparent"></div>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Loading cost history...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-6 px-4">
        <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      </div>
    )
  }

  if (!history.length) {
    return (
      <div className="py-12 px-4 text-center">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">No price changes yet</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">Updates will appear here when you modify costs</p>
      </div>
    )
  }

  // Pagination
  const totalPages = Math.ceil(history.length / ITEMS_PER_PAGE)
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const endIdx = startIdx + ITEMS_PER_PAGE
  const paginatedHistory = history.slice(startIdx, endIdx)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return `Today at ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday at ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`
    } else {
      return date.toLocaleDateString("en-US", { 
        month: "short", 
        day: "numeric", 
        year: date.getFullYear() !== today.getFullYear() ? "numeric" : undefined,
        hour: "2-digit",
        minute: "2-digit"
      })
    }
  }

  const calculateChangePercent = (oldPrice: number, newPrice: number) => {
    if (oldPrice === 0) return 0
    return (((newPrice - oldPrice) / oldPrice) * 100).toFixed(1)
  }

  const isIncrease = (oldPrice: number, newPrice: number) => newPrice > oldPrice

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
              <TrendingUp className="w-4 h-4 text-white" />
            </span>
            Price Change History
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {history.length} total change{history.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* History Items */}
      <div className="space-y-2">
        {paginatedHistory.map((item) => {
          const colors = costTypeColors[item.costType] || costTypeColors.purchasePrice
          const changePercent = calculateChangePercent(item.oldPrice, item.newPrice)
          const increase = isIncrease(item.oldPrice, item.newPrice)

          return (
            <div
              key={item._id}
              className={`${colors.bg} border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all hover:shadow-md dark:hover:shadow-lg/20 hover:border-gray-300 dark:hover:border-gray-600`}
            >
              {/* Top Row - Label and Change */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{colors.icon}</span>
                  <div>
                    <h4 className={`font-semibold text-sm ${colors.text}`}>
                      {costTypeLabels[item.costType] || item.costType}
                    </h4>
                  </div>
                </div>
                <div className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                  increase
                    ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                    : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                }`}>
                  {increase ? "↑" : "↓"} {Math.abs(Number(changePercent))}%
                </div>
              </div>

              {/* Price Change */}
              <div className="bg-white dark:bg-gray-800/50 rounded p-3 mb-3 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">From</p>
                    <p className="text-sm font-mono font-semibold text-gray-600 dark:text-gray-300">
                      ${item.oldPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded">
                    <span className="text-gray-400 dark:text-gray-500">→</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">To</p>
                    <p className="text-sm font-mono font-semibold text-gray-900 dark:text-gray-50">
                      ${item.newPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
                {item.newPrice !== item.oldPrice && (
                  <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      <span className={increase ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"}>
                        {increase ? "+" : "-"}${Math.abs(item.newPrice - item.oldPrice).toLocaleString()}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Footer - User and Date */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <User className="w-3.5 h-3.5" />
                  <span className="font-medium">{item.changedBy}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(item.createdAt)}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 mt-6">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Showing <span className="font-semibold">{startIdx + 1}</span> to{" "}
            <span className="font-semibold">{Math.min(endIdx, history.length)}</span> of{" "}
            <span className="font-semibold">{history.length}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                    currentPage === i + 1
                      ? "bg-blue-600 dark:bg-blue-700 text-white"
                      : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}