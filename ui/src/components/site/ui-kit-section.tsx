import { useState } from "react"
import { Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SegmentedControl } from "@/components/inm/segmented-control"
import { MetricTile } from "@/components/inm/metric-tile"
import { SearchInput } from "@/components/inm/search-input"
import { ListPanel } from "@/components/inm/list-panel"

const TILES = [
  { label: "Active",    value: "8",   delta: "+2 this week",    dotColor: "var(--color-accent)" },
  { label: "In review", value: "4",   delta: "2 awaiting",      dotColor: "var(--color-accent-soft)" },
  { label: "APCA Lc",  value: "63",  delta: "body, both modes", dotColor: "var(--color-cool)" },
  { label: "Chroma",   value: "Low", delta: "0.01–0.07 OKLCH",  dotColor: "var(--color-muted)" },
]

const ROWS = [
  { title: "Editorial workspace", meta: "Warm canvas · APCA 65",           status: "Active", dotColor: "var(--color-accent)" },
  { title: "Dashboard controls",  meta: "Clay for intent, mist for state",  status: "Review", dotColor: "var(--color-accent-soft)" },
  { title: "Portfolio index",     meta: "Dense rows, kept scannable",       status: "Ready",  dotColor: "var(--color-cool)" },
]

export function UIKitSection() {
  const [seg, setSeg] = useState("All")

  return (
    <section className="section alt" id="kit" aria-labelledby="kit-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">06 / UI Kit</span>
            <h2 id="kit-title">Components that stay calm.</h2>
          </div>
          <p>
            Every control draws from the same nine semantic roles — no raw hex, no
            one-off overrides. A mode switch refreshes every surface without touching a single component.
          </p>
        </div>

        <div className="kit-canvas">
          <div className="kit-two">
            <div className="kit-block">
              <div className="kit-label">Buttons</div>
              <div className="kit-cluster">
                <Button>Apply palette</Button>
                <Button variant="secondary">Review</Button>
                <Button size="icon-sm" variant="secondary" aria-label="Search">
                  <Search className="size-[15px]" />
                </Button>
                <Button size="icon-sm" variant="secondary" aria-label="Notifications">
                  <Bell className="size-[15px]" />
                </Button>
              </div>
            </div>

            <div className="kit-block">
              <div className="kit-label">Segmented control</div>
              <SegmentedControl
                className="w-fit"
                options={["All", "Active", "Review", "Ready"]}
                value={seg}
                onValueChange={setSeg}
              />
            </div>
          </div>

          <div className="kit-two">
            <div className="kit-block">
              <div className="kit-label">Badges</div>
              <div className="kit-cluster">
                <Badge dot="var(--color-accent)">Active</Badge>
                <Badge dot="var(--color-accent-soft)">Review</Badge>
                <Badge dot="var(--color-cool)">Synced</Badge>
                <Badge dot="var(--color-muted)">Draft</Badge>
              </div>
            </div>

            <div className="kit-block">
              <div className="kit-label">Search input</div>
              <SearchInput asDecorative placeholder="Search workspaces…" kbd="⌘K" />
            </div>
          </div>

          {/* Metric tiles */}
          <div className="kit-block">
            <div className="kit-label">Metric tiles</div>
            <div className="kit-metrics">
              {TILES.map((t) => (
                <MetricTile key={t.label} {...t} />
              ))}
            </div>
          </div>

          {/* List panel */}
          <div className="kit-block">
            <div className="kit-label">List rows + command bar</div>
            <ListPanel
              heading="3 workspaces"
              headingBadge={<Badge dot="var(--color-cool)">Auto-synced</Badge>}
              rows={ROWS}
              footer={
                <>
                  <span>Primary action keeps APCA contrast in range across light and dark.</span>
                  <Button>Apply palette</Button>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
