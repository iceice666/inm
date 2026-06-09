// inm console — Sidebar navigation
function Sidebar({ active, onNavigate }) {
  const nav = [
    { id: "overview", label: "Overview", icon: "grid" },
    { id: "workspaces", label: "Workspaces", icon: "layers", count: "12" },
    { id: "queue", label: "Review queue", icon: "inbox", count: "4" },
    { id: "library", label: "Library", icon: "image" },
  ];
  return (
    <aside className="sidebar">
      <div className="side-brand">
        <img src="../../assets/icon.svg" alt="" />
        <span>inm console</span>
      </div>
      <nav className="side-group" aria-label="Primary">
        <div className="side-label">Workspace</div>
        {nav.map((n) => (
          <button key={n.id} className={"side-item" + (active === n.id ? " active" : "")} onClick={() => onNavigate(n.id)}>
            <Icon name={n.icon} className="ic" />
            {n.label}
            {n.count && <span className="count">{n.count}</span>}
          </button>
        ))}
      </nav>
      <nav className="side-group" aria-label="Settings">
        <div className="side-label">System</div>
        <button className={"side-item" + (active === "settings" ? " active" : "")} onClick={() => onNavigate("settings")}>
          <Icon name="settings" className="ic" />
          Settings
        </button>
      </nav>
      <div className="side-foot">
        <span className="avatar">IM</span>
        <span className="who">Ida Mraz<small>Maintainer</small></span>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
