import * as React from "react"
import { cn } from "@/lib/utils"

interface MetricTileProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  delta?: string
  dotColor?: string
}

function MetricTile({ label, value, delta, dotColor, className, ...props }: MetricTileProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-card px-4 py-3.5",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5 text-[12px] font-[740] text-muted-foreground">
        {dotColor && (
          <span
            className="inline-block size-2.5 shrink-0 rounded-full"
            style={{ background: dotColor }}
          />
        )}
        {label}
      </div>
      <strong className="mt-2.5 block text-[30px] font-[800] leading-none">{value}</strong>
      {delta && (
        <div className="mt-1.5 text-[12px] font-[720] text-inm-cool">{delta}</div>
      )}
    </div>
  )
}

export { MetricTile }
