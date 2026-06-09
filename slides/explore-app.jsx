// inm — slide exploration canvas app.
const { useRef } = React;
const S = window.INM_SLIDES;

// Render verbatim slide HTML at 1280×720 inside an artboard.
function Slide({ html }) {
  return (
    <div
      style={{ width: 1280, height: 720, position: "relative", overflow: "hidden" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function App() {
  return (
    <DesignCanvas>
      <DCSection id="table" title="1 · Data table / spec sheet" subtitle="Key-value spec rows vs. a full token table">
        <DCArtboard id="spec" label="A · Spec sheet (light)" width={1280} height={720}><Slide html={S.specSheet} /></DCArtboard>
        <DCArtboard id="table-dark" label="B · Data table (dark)" width={1280} height={720}><Slide html={S.dataTable} /></DCArtboard>
      </DCSection>

      <DCSection id="steps" title="2 · Vertical process / steps" subtitle="Numbered rail, light and dark takes">
        <DCArtboard id="vsteps-l" label="A · Four steps (light)" width={1280} height={720}><Slide html={S.vstepsLight} /></DCArtboard>
        <DCArtboard id="vsteps-d" label="B · Three steps (dark)" width={1280} height={720}><Slide html={S.vstepsDark} /></DCArtboard>
      </DCSection>

      <DCSection id="features" title="3 · Feature / icon grid" subtitle="Geometric block glyphs — no emoji">
        <DCArtboard id="feat-3" label="A · Six features, 3-col" width={1280} height={720}><Slide html={S.featGrid3} /></DCArtboard>
        <DCArtboard id="feat-2" label="B · Two features, 2-col" width={1280} height={720}><Slide html={S.featGrid2} /></DCArtboard>
      </DCSection>

      <DCSection id="code" title="4 · Code / mono showcase" subtitle="Window chrome + tonal syntax tokens">
        <DCArtboard id="code-l" label="A · CSS tokens (light)" width={1280} height={720}><Slide html={S.codeLight} /></DCArtboard>
        <DCArtboard id="code-d" label="B · Component (dark)" width={1280} height={720}><Slide html={S.codeDark} /></DCArtboard>
      </DCSection>

      <DCSection id="split" title="5 · Image + text 50/50" subtitle="Full-bleed media beside a copy panel">
        <DCArtboard id="split-l" label="A · Image left (light)" width={1280} height={720}><Slide html={S.splitLeft} /></DCArtboard>
        <DCArtboard id="split-r" label="B · Image right (dark)" width={1280} height={720}><Slide html={S.splitRight} /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
