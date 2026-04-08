"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Building2, Settings, Users, ChevronDown, Home, FileText } from "lucide-react"
import { useState, useEffect } from "react"

interface NavItem {
  href?: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  subItems?: NavItem[]
}

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  {
    label: "Property",
    icon: Building2,
    subItems: [
      { href: "/execution", label: "Property List", icon: Home },
      { href: "#", label: "Property Detail", icon: FileText },
    ],
  },
  { href: "/rules", label: "Rules", icon: Settings },
  { href: "/users", label: "Users", icon: Users },
  { href: "/templates", label: "Templates", icon: FileText },
  {href: "/profiles", label: "Profiles", icon: Users}
]

interface NavItemProps {
  item: NavItem
  isActive: boolean
  pathname: string
}

function NavItemComponent({ item, isActive, pathname }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = item.icon
  const hasSubItems = item.subItems && item.subItems.length > 0

  useEffect(() => {
    if (item.label === "Property" && pathname.includes("/execution")) {
      setIsOpen(true)
    }
  }, [pathname, item.label])

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    if (hasSubItems && !isOpen && item.label === "Property") {
      const firstSubItem = item.subItems?.[0]
      if (firstSubItem?.href) {
        window.location.href = firstSubItem.href
        return
      }
    }
    setIsOpen(!isOpen)
  }

  if (hasSubItems) {
    return (
      <div>
        <button onClick={handleToggle} className={`re-nav-item w-full ${isActive ? "active" : ""}`}>
          <Icon className="re-nav-icon" />
          <span className="re-nav-label">{item.label}</span>
          <ChevronDown className={`re-nav-chevron ${isOpen ? "rotated" : ""}`} />
        </button>

        {isOpen && (
          <div className="re-subnav">
            {item.subItems?.map((subItem) => {
              const SubIcon = subItem.icon
              const isSubActive =
                pathname === subItem.href ||
                (subItem.label === "Property Detail" && pathname.match(/^\/execution\/[a-f0-9]{24}$/))
              return (
                <Link
                  key={subItem.label}
                  href={subItem.href || "#"}
                  className={`re-subnav-item ${isSubActive ? "active" : ""}`}
                >
                  <SubIcon className="re-subnav-icon" />
                  <span>{subItem.label}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={item.href || "#"} className={`re-nav-item ${isActive ? "active" : ""}`}>
      <Icon className="re-nav-icon" />
      <span className="re-nav-label">{item.label}</span>
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Sidebar shell ── */
        .re-sidebar {
          font-family: 'DM Sans', sans-serif;
          width: 240px;
          min-width: 240px;
          background: #ffffff;
          border-right: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
        }

        /* Right-edge gold accent */
        .re-sidebar::after {
          content: '';
          position: absolute;
          top: 0; right: -1px; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent 0%, rgba(196,162,96,0.4) 30%, rgba(196,162,96,0.4) 70%, transparent 100%);
        }

        /* ── Logo / brand area ── */
        .re-sidebar-brand {
          padding: 20px 20px 18px;
          border-bottom: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .re-sidebar-brand-icon {
          width: 28px; height: 28px;
          border: 1.5px solid rgba(196,162,96,0.65);
          display: flex; align-items: center; justify-content: center;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .re-sidebar-brand-icon-inner {
          width: 10px; height: 10px;
          background: rgba(196,162,96,0.85);
        }
        .re-sidebar-brand-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111827;
          line-height: 1;
        }
        .re-sidebar-brand-sub {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #b8943a;
          margin-top: 2px;
        }

        /* ── Nav section label ── */
        .re-nav-section {
          padding: 20px 16px 8px;
        }
        .re-nav-section-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        /* ── Nav items ── */
        .re-nav {
          flex: 1;
          padding: 8px 12px 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow-y: auto;
        }

        .re-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 400;
          color: #4b5563;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background 0.13s, color 0.13s;
          position: relative;
        }
        .re-nav-item:hover {
          background: #f9fafb;
          color: #111827;
        }
        .re-nav-item:hover .re-nav-icon { color: #374151; }

        /* Active state — gold left bar */
        .re-nav-item.active {
          background: linear-gradient(90deg, rgba(196,162,96,0.1) 0%, rgba(196,162,96,0.04) 100%);
          color: #92700a;
          font-weight: 500;
          border: 1px solid rgba(196,162,96,0.18);
        }
        .re-nav-item.active::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 2.5px;
          border-radius: 0 2px 2px 0;
          background: rgba(196,162,96,0.85);
        }
        .re-nav-item.active .re-nav-icon { color: #b8943a; }

        .re-nav-icon {
          width: 16px; height: 16px;
          color: #9ca3af;
          flex-shrink: 0;
          transition: color 0.13s;
        }
        .re-nav-label { flex: 1; }

        .re-nav-chevron {
          width: 13px; height: 13px;
          color: #9ca3af;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .re-nav-chevron.rotated { transform: rotate(180deg); }

        /* ── Sub-nav ── */
        .re-subnav {
          display: flex;
          flex-direction: column;
          gap: 1px;
          margin-top: 2px;
          padding-left: 14px;
          border-left: 1.5px solid #f3f4f6;
          margin-left: 20px;
        }

        .re-subnav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 400;
          color: #6b7280;
          text-decoration: none;
          transition: background 0.13s, color 0.13s;
        }
        .re-subnav-item:hover {
          background: #f9fafb;
          color: #111827;
        }
        .re-subnav-item:hover .re-subnav-icon { color: #374151; }
        .re-subnav-item.active {
          background: rgba(196,162,96,0.08);
          color: #92700a;
          font-weight: 500;
        }
        .re-subnav-item.active .re-subnav-icon { color: #b8943a; }

        .re-subnav-icon {
          width: 14px; height: 14px;
          color: #9ca3af;
          flex-shrink: 0;
          transition: color 0.13s;
        }

        /* ── Divider ── */
        .re-nav-divider {
          height: 1px;
          background: #f3f4f6;
          margin: 6px 4px;
        }

        /* ── Footer ── */
        .re-sidebar-footer {
          padding: 14px 16px;
          border-top: 1px solid #f3f4f6;
        }
        .re-sidebar-footer-text {
          font-size: 10px;
          font-weight: 300;
          color: #9ca3af;
          letter-spacing: 0.06em;
          text-align: center;
        }
        .re-sidebar-footer-gold {
          color: rgba(196,162,96,0.6);
        }
      `}</style>

      <div className="re-sidebar">

        {/* ── Brand ── */}
        <div className="re-sidebar-brand">
          <div className="re-sidebar-brand-icon">
            <div className="re-sidebar-brand-icon-inner" />
          </div>
          <div>
            <div className="re-sidebar-brand-name">Real Estate</div>
            <div className="re-sidebar-brand-sub">Admin Portal</div>
          </div>
        </div>

        {/* ── Nav section label ── */}
        <div className="re-nav-section">
          <span className="re-nav-section-label">Navigation</span>
        </div>

        {/* ── Navigation ── */}
        <nav className="re-nav">
          {navItems.map((item, i) => {
            let isActive = false
            if (item.href) {
              isActive = pathname === item.href
            } else if (item.label === "Property") {
              isActive = pathname.startsWith("/execution")
            }

            return (
              <div key={item.label}>
                {/* Divider before Rules */}
                {item.label === "Rules" && <div className="re-nav-divider" />}
                <NavItemComponent item={item} isActive={isActive} pathname={pathname} />
              </div>
            )
          })}
        </nav>

        {/* ── Footer ── */}
        <div className="re-sidebar-footer">
          <div className="re-sidebar-footer-text">
            <span className="re-sidebar-footer-gold">◆</span>
            {" "}Underwriting System v2.4{" "}
            <span className="re-sidebar-footer-gold">◆</span>
          </div>
        </div>

      </div>
    </>
  )
}