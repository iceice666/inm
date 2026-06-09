// inm console — Top bar with title, search, theme toggle, primary action
function TopBar({ title, theme, onToggle, onNew }) {
  return (
    <header className="topbar">
      <h1>{title}</h1>
      <label className="search">
        <Icon name="search" className="" />
        <input type="text" placeholder="Search workspaces…" />
        <kbd>⌘K</kbd>
      </label>
      <div className="topbar-actions">
        <IconButton name="bell" label="Notifications" />
        <IconButton name={theme === "dark" ? "moon" : "sun"} label="Toggle color mode" onClick={onToggle} />
        <button className="btn primary" onClick={onNew}>
          <Icon name="plus" className="ic" />
          New workspace
        </button>
      </div>
    </header>
  );
}

window.TopBar = TopBar;
