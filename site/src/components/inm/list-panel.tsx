import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ListRow {
  title: string
  meta?: string
  status?: string
  dotColor?: string
}

interface ListPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode
  headingBadge?: React.ReactNode
  rows: ListRow[]
  footer?: React.ReactNode
}

function ListPanel({ heading, headingBadge, rows, footer, className, ...props }: ListPanelProps) {
  return (
    <div
      className={cn("rounded-md border border-border overflow-hidden bg-card", className)}
      {...props}
    >
      {(heading || headingBadge) && (
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border text-[14px] font-[780]">
          {heading && <span>{heading}</span>}
          {headingBadge}
        </div>
      )}

      {rows.map((row, i) => (
        <div
          key={i}
          className={cn(
            "grid items-center gap-3.5 min-h-14 px-4 py-2.5 bg-card transition-colors hover:bg-inm-raised",
            i > 0 && "border-t border-border"
          )}
          style={{ gridTemplateColumns: "11px minmax(0,1fr) auto" }}
        >
          {row.dotColor ? (
            <span
              className="inline-block size-[11px] shrink-0 rounded-full"
              style={{ background: row.dotColor }}
            />
          ) : (
            <span />
          )}
          <div>
            <div className="text-[14px] font-[740]">{row.title}</div>
            {row.meta && (
              <div className="mt-0.5 text-[12.5px] font-[600] text-muted-foreground">{row.meta}</div>
            )}
          </div>
          {row.status && (
            <Badge dot={row.dotColor}>{row.status}</Badge>
          )}
        </div>
      ))}

      {footer && (
        <div className="flex items-center justify-between gap-3 min-h-13 border-t border-border bg-inm-raised px-4 py-2.5 text-[13px] font-[700] text-muted-foreground">
          {footer}
        </div>
      )}
    </div>
  )
}

export { ListPanel, type ListRow }
