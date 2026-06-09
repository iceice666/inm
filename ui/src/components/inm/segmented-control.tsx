import { cn } from "@/lib/utils"

interface SegmentedControlProps {
  options: string[]
  value: string
  onValueChange: (value: string) => void
  className?: string
}

function SegmentedControl({ options, value, onValueChange, className }: SegmentedControlProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex gap-0.5 p-0.5 rounded-md border border-border bg-inm-raised",
        className
      )}
    >
      {options.map((opt) => (
        <button
          key={opt}
          role="tab"
          aria-selected={opt === value}
          onClick={() => onValueChange(opt)}
          className={cn(
            "inline-flex items-center justify-center rounded-[6px] px-3 py-1.5 min-h-8",
            "text-[13px] font-[740] border-0 transition-[background,color] duration-[140ms] ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
            opt === value
              ? "bg-primary text-primary-foreground"
              : "bg-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export { SegmentedControl }
