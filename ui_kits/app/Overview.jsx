// inm console — Overview view: metrics, filterable workspace list, command footer
function Metrics() {
  const data = [
    { k: "Active", v: "8", delta: "+2 this week", dot: "var(--accent)" },
    { k: "In review", v: "4", delta: "2 awaiting you", dot: "var(--accent-soft)" },
    { k: "Synced", v: "12", delta: "All up to date", dot: "var(--cool)" },
    { k: "Avg. APCA", v: "63", delta: "Lc, readable", dot: "var(--muted)" },
  ];
  return (
    <div className="metrics">
      {data.map((m) => (
        <div className="metric" key={m.k}>
          <span className="k"><span className="dot" style={{ background: m.dot }}></span>{m.k}</span>
          <strong className="v">{m.v}</strong>
          <div className="delta">{m.delta}</div>
        </div>
      ))}
    </div>
  );
}

function WorkspaceRow({ row }) {
  const toneFor = { Active: "accent", Review: "soft", Ready: "cool", Synced: "cool", Draft: "muted" };
  return (
    <div className="list-row">
      <span className="dot" style={{ background: row.status === "Active" ? "var(--accent)" : row.status === "Review" ? "var(--accent-soft)" : "var(--cool)" }}></span>
      <div>
        <div className="rt">{row.title}</div>
        <div className="rm">{row.meta}</div>
      </div>
      <span className="rmeta">{row.edited}</span>
      <Badge tone={toneFor[row.status]}>{row.status}</Badge>
    </div>
  );
}

function Overview({ rows }) {
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Active", "Review", "Ready"];
  const shown = filter === "All" ? rows : rows.filter((r) => r.status === filter);
  return (
    <div className="content">
      <div className="content-head">
        <div>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 820 }}>Workspaces</h2>
          <p className="lede">Warm canvas, clay for intent, mist for state. Dense rows kept calm and scannable.</p>
        </div>
        <Segmented options={filters} value={filter} onChange={setFilter} />
      </div>

      <Metrics />

      <div className="panel">
        <div className="panel-head">
          <span className="pt">{shown.length} workspace{shown.length === 1 ? "" : "s"}</span>
          <Badge tone="cool">Auto-synced</Badge>
        </div>
        {shown.map((r) => <WorkspaceRow key={r.id} row={r} />)}
      </div>

      <div className="cmd">
        <span className="ct">Primary action keeps APCA contrast in range across light and dark.</span>
        <button className="btn primary"><Icon name="command" className="ic" />Apply palette</button>
      </div>
    </div>
  );
}

Object.assign(window, { Overview, Metrics, WorkspaceRow });
