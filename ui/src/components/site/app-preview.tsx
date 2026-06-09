import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LayoutGrid,
  Layers,
  Inbox,
  Image,
  Settings2,
  Search,
  Bell,
  Plus,
  Command,
} from "lucide-react"

// ---- Types ----
interface WorkspaceRow {
  id: number
  title: string
  meta: string
  edited: string
  status: "Active" | "Review" | "Ready"
}

// ---- Seed data ----
const SEED: WorkspaceRow[] = [
  { id: 1, title: "Editorial workspace", meta: "Muted surfaces, clear text", edited: "2h ago", status: "Active" },
  { id: 2, title: "Dashboard controls", meta: "Clay for intent, mist for state", edited: "5h ago", status: "Review" },
  { id: 3, title: "Portfolio index", meta: "Warm canvas, compact rhythm", edited: "1d ago", status: "Ready" },
  { id: 4, title: "Creative console", meta: "Dark without pure black glare", edited: "1d ago", status: "Active" },
  { id: 5, title: "Status stream", meta: "Cool support for quiet signals", edited: "3d ago", status: "Ready" },
  { id: 6, title: "Review queue", meta: "Soft accent, steady borders", edited: "4d ago", status: "Review" },
]

const METRICS = [
  { k: "Active", v: "8", delta: "+2 this week", color: "var(--color-accent)" },
  { k: "In review", v: "4", delta: "2 awaiting you", color: "var(--color-accent-soft)" },
  { k: "Synced", v: "12", delta: "All up to date", color: "var(--color-cool)" },
  { k: "Avg. APCA", v: "63", delta: "Lc, readable", color: "var(--color-muted)" },
]

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "workspaces", label: "Workspaces", icon: Layers, count: "12" },
  { id: "queue", label: "Review queue", icon: Inbox, count: "4" },
  { id: "library", label: "Library", icon: Image },
]

const FILTERS = ["All", "Active", "Review", "Ready"] as const
type Filter = (typeof FILTERS)[number]

const STATUS_DOT: Record<WorkspaceRow["status"], string> = {
  Active: "var(--color-accent)",
  Review: "var(--color-accent-soft)",
  Ready: "var(--color-cool)",
}

// ---- Sub-components ----

function AppSidebar({ activeNav, onNavigate }: { activeNav: string; onNavigate: (id: string) => void }) {
  return (
    <aside className="ap-sidebar">
      <div className="ap-brand">
        <span className="ap-brand-icon">
          <img src="/favicon.svg" alt="" width={18} height={18} />
        </span>
        <span>inm console</span>
      </div>

      <nav className="ap-nav-group" aria-label="Workspace">
        <div className="ap-nav-label">Workspace</div>
        {NAV_ITEMS.map(({ id, label, icon: Icon, count }) => (
          <button
            key={id}
            type="button"
            className={"ap-nav-item" + (activeNav === id ? " active" : "")}
            onClick={() => onNavigate(id)}
          >
            <Icon size={15} aria-hidden="true" />
            {label}
            {count && <span className="ap-count">{count}</span>}
          </button>
        ))}
      </nav>

      <nav className="ap-nav-group" aria-label="System">
        <div className="ap-nav-label">System</div>
        <button
          type="button"
          className={"ap-nav-item" + (activeNav === "settings" ? " active" : "")}
          onClick={() => onNavigate("settings")}
        >
          <Settings2 size={15} aria-hidden="true" />
          Settings
        </button>
      </nav>

      <div className="ap-foot">
        <span className="ap-avatar" aria-hidden="true">IM</span>
        <span className="ap-who">
          Ida Mraz
          <small>Maintainer</small>
        </span>
      </div>
    </aside>
  )
}

function AppTopBar({ onNew }: { onNew: () => void }) {
  return (
    <header className="ap-topbar">
      <p className="ap-topbar-title">Overview</p>
      <label className="ap-search">
        <Search size={14} aria-hidden="true" />
        <input type="text" placeholder="Search workspaces…" aria-label="Search workspaces" />
        <kbd>⌘K</kbd>
      </label>
      <div className="ap-topbar-actions">
        <button type="button" className="ap-icon-btn" aria-label="Notifications">
          <Bell size={16} />
        </button>
        <Button size="sm" onClick={onNew}>
          <Plus size={14} aria-hidden="true" />
          New workspace
        </Button>
      </div>
    </header>
  )
}

function AppContent({ rows, onNew }: { rows: WorkspaceRow[]; onNew: () => void }) {
  const [filter, setFilter] = useState<Filter>("All")
  const shown = filter === "All" ? rows : rows.filter((r) => r.status === filter)

  return (
    <div className="ap-content">
      <div className="ap-content-head">
        <div>
          <p className="ap-content-title">Workspaces</p>
          <p className="ap-lede">Warm canvas, clay for intent, mist for state. Dense rows, calm and scannable.</p>
        </div>
        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)}>
          <TabsList>
            {FILTERS.map((f) => (
              <TabsTrigger key={f} value={f}>{f}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Metrics */}
      <div className="ap-metrics" aria-label="At a glance">
        {METRICS.map((m) => (
          <div className="ap-metric" key={m.k}>
            <span className="ap-metric-k">
              <span className="ap-dot" style={{ background: m.color }} aria-hidden="true" />
              {m.k}
            </span>
            <strong className="ap-metric-v">{m.v}</strong>
            <div className="ap-metric-delta">{m.delta}</div>
          </div>
        ))}
      </div>

      {/* Workspace list */}
      <div className="ap-panel">
        <div className="ap-panel-head">
          <span>{shown.length} workspace{shown.length === 1 ? "" : "s"}</span>
          <span className="ap-sync-badge">Auto-synced</span>
        </div>
        {shown.map((row) => (
          <div className="ap-list-row" key={row.id}>
            <span
              className="ap-dot"
              style={{ background: STATUS_DOT[row.status] }}
              aria-hidden="true"
            />
            <div className="ap-row-body">
              <div className="ap-row-title">{row.title}</div>
              <div className="ap-row-meta">{row.meta}</div>
            </div>
            <span className="ap-row-edited">{row.edited}</span>
            <span className={`ap-status-badge ${row.status.toLowerCase()}`}>{row.status}</span>
          </div>
        ))}
      </div>

      {/* Command footer */}
      <div className="ap-cmd">
        <span className="ap-cmd-text">Primary action keeps APCA contrast in range across light and dark.</span>
        <Button size="sm" onClick={onNew}>
          <Command size={13} aria-hidden="true" />
          Apply palette
        </Button>
      </div>
    </div>
  )
}

// ---- Section ----

export function AppPreview() {
  const [activeNav, setActiveNav] = useState("overview")
  const [rows, setRows] = useState<WorkspaceRow[]>(SEED)
  const nextIdRef = useRef(100)

  const addWorkspace = () => {
    const n = rows.length + 1
    setRows([
      {
        id: nextIdRef.current++,
        title: "Untitled workspace " + n,
        meta: "New — pick a canvas and accent",
        edited: "just now",
        status: "Active",
      },
      ...rows,
    ])
  }

  return (
    <section className="section alt" id="app" aria-labelledby="app-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">App Preview</span>
            <h2 id="app-title">In practice</h2>
          </div>
          <p>
            A dense console dashboard showing the palette at work — sidebar nav, metrics,
            and a filterable row list. Calm and scannable in both light and dark.
          </p>
        </div>

        <div className="ap-shell">
          <AppSidebar activeNav={activeNav} onNavigate={setActiveNav} />
          <div className="ap-main">
            <AppTopBar onNew={addWorkspace} />
            <AppContent rows={rows} onNew={addWorkspace} />
          </div>
        </div>
      </div>
    </section>
  )
}
