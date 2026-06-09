// inm showcase v2 — UI Kit: interactive component library preview
function UIKit() {
  const [seg, setSeg] = React.useState("All");

  const tileData = [
    { k: "Active",    v: "8",   d: "+2 this week",      dot: "var(--color-accent)" },
    { k: "In review", v: "4",   d: "2 awaiting",        dot: "var(--color-accent-soft)" },
    { k: "APCA Lc",  v: "63",  d: "body, both modes",  dot: "var(--color-cool)" },
    { k: "Chroma",   v: "Low", d: "0.01–0.07 OKLCH",   dot: "var(--color-muted)" },
  ];

  const rowData = [
    { title: "Editorial workspace",  meta: "Warm canvas · APCA 65",        status: "Active",  dot: "var(--color-accent)" },
    { title: "Dashboard controls",   meta: "Clay for intent, mist for state",  status: "Review",  dot: "var(--color-accent-soft)" },
    { title: "Portfolio index",      meta: "Dense rows, kept scannable",        status: "Ready",   dot: "var(--color-cool)" },
  ];

  return (
    <section className="section alt" id="kit" aria-labelledby="kit-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">06 / UI Kit</span>
            <h2 id="kit-title">Components that stay calm.</h2>
          </div>
          <p>
            Every control draws from the same nine semantic roles &mdash; no raw hex, no
            one-off overrides. A mode switch refreshes every surface without touching a single component.
          </p>
        </div>

        <div className="kit-canvas">
          {/* Row 1: Buttons + Segmented */}
          <div className="kit-two">
            <div className="kit-block">
              <div className="kit-label">Buttons</div>
              <div className="kit-cluster">
                <button className="kit-btn primary">Apply palette</button>
                <button className="kit-btn secondary">Review</button>
                <button className="kit-icon-btn" aria-label="Search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                  </svg>
                </button>
                <button className="kit-icon-btn" aria-label="Notifications">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="kit-block">
              <div className="kit-label">Segmented control</div>
              <div className="kit-seg" role="tablist">
                {["All", "Active", "Review", "Ready"].map(s => (
                  <button key={s} role="tab" className={s === seg ? "on" : ""}
                    onClick={() => setSeg(s)}>{s}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Badges + Search */}
          <div className="kit-two">
            <div className="kit-block">
              <div className="kit-label">Badges</div>
              <div className="kit-cluster">
                <span className="kit-badge"><span className="kit-bd" style={{ background: "var(--color-accent)" }}></span>Active</span>
                <span className="kit-badge"><span className="kit-bd" style={{ background: "var(--color-accent-soft)" }}></span>Review</span>
                <span className="kit-badge"><span className="kit-bd" style={{ background: "var(--color-cool)" }}></span>Synced</span>
                <span className="kit-badge"><span className="kit-bd" style={{ background: "var(--color-muted)" }}></span>Draft</span>
              </div>
            </div>

            <div className="kit-block">
              <div className="kit-label">Input</div>
              <div className="kit-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
                <span>Search workspaces&hellip;</span>
                <kbd>&#8984;K</kbd>
              </div>
            </div>
          </div>

          {/* Metric tiles */}
          <div className="kit-block">
            <div className="kit-label">Metric tiles</div>
            <div className="kit-metrics">
              {tileData.map(m => (
                <div className="kit-tile" key={m.k}>
                  <span className="kit-tk">
                    <span className="kit-dot" style={{ background: m.dot }}></span>
                    {m.k}
                  </span>
                  <strong className="kit-tv">{m.v}</strong>
                  <div className="kit-td">{m.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* List panel */}
          <div className="kit-block">
            <div className="kit-label">List rows + command bar</div>
            <div className="kit-panel">
              <div className="kit-panel-head">
                <span>3 workspaces</span>
                <span className="kit-badge">
                  <span className="kit-bd" style={{ background: "var(--color-cool)" }}></span>
                  Auto-synced
                </span>
              </div>
              {rowData.map(r => (
                <div className="kit-list-row" key={r.title}>
                  <span className="kit-rdot" style={{ background: r.dot }}></span>
                  <div>
                    <div className="kit-rt">{r.title}</div>
                    <div className="kit-rm">{r.meta}</div>
                  </div>
                  <span className="kit-badge">
                    <span className="kit-bd" style={{ background: r.dot }}></span>
                    {r.status}
                  </span>
                </div>
              ))}
              <div className="kit-cmd">
                <span>Primary action keeps APCA contrast in range across light and dark.</span>
                <button className="kit-btn primary"
                  style={{ fontSize: 13, minHeight: 36, padding: "7px 13px" }}>
                  Apply palette
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.UIKit = UIKit;
