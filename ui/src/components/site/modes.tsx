interface PreviewMetric { label: string; value: string }
interface PreviewRow    { title: string; meta: string; action: string }

interface PreviewWindowProps {
  mode: "light" | "dark"
  title: string
  metrics: PreviewMetric[]
  rows: PreviewRow[]
  footNote: string
  footAction: string
}

function PreviewWindow({ mode, title, metrics, rows, footNote, footAction }: PreviewWindowProps) {
  return (
    <article className={`preview ${mode}`} aria-label={`${mode} mode preview`}>
      <div className="preview-bar">
        <div className="window-controls" aria-hidden="true">
          <span /><span /><span />
        </div>
        <span className="preview-title">{title}</span>
      </div>
      <div className="preview-content">
        <div className="metric-row">
          {metrics.map((m) => (
            <div className="metric" key={m.label}>
              <span>{m.label}</span>
              <strong>{m.value}</strong>
            </div>
          ))}
        </div>
        <div className="preview-list">
          {rows.map((r) => (
            <div className="preview-row" key={r.title}>
              <span className="status-dot" />
              <div>
                <div className="row-title">{r.title}</div>
                <div className="row-meta">{r.meta}</div>
              </div>
              <span className="row-action">{r.action}</span>
            </div>
          ))}
        </div>
        <div className="preview-command">
          <span>{footNote}</span>
          <strong>{footAction}</strong>
        </div>
      </div>
    </article>
  )
}

export function Modes() {
  return (
    <section className="section" id="modes" aria-labelledby="modes-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">03 / Modes</span>
            <h2 id="modes-title">Light and dark share the same behavior.</h2>
          </div>
          <p>
            Both modes keep identical semantic roles, so a product switches mood
            without rewriting component logic or losing hierarchy.
          </p>
        </div>

        <div className="preview-grid">
          <PreviewWindow
            mode="light"
            title="Light mode"
            metrics={[
              { label: "Readability", value: "65" },
              { label: "Accent",      value: "47" },
              { label: "Chroma",      value: "Low" },
            ]}
            rows={[
              { title: "Editorial workspace", meta: "Muted surfaces, clear text",          action: "Active" },
              { title: "Dashboard controls",  meta: "Clay for intent, mist for state",     action: "Review" },
              { title: "Portfolio index",     meta: "Warm canvas, compact rhythm",         action: "Ready" },
            ]}
            footNote="Primary action keeps APCA in range"
            footAction="Apply palette"
          />
          <PreviewWindow
            mode="dark"
            title="Dark mode"
            metrics={[
              { label: "Readability", value: "-82" },
              { label: "Accent",      value: "-51" },
              { label: "Canvas",      value: "Plum" },
            ]}
            rows={[
              { title: "Creative console", meta: "Dark without pure-black glare",   action: "Live" },
              { title: "Review queue",     meta: "Soft accent, steady borders",     action: "Open" },
              { title: "Status stream",    meta: "Cool support for quiet signals",  action: "Synced" },
            ]}
            footNote="Dark tokens override at the root"
            footAction="data-theme"
          />
        </div>
      </div>
    </section>
  )
}
