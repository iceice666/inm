import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  kbd?: string
  asDecorative?: boolean
}

function SearchInput({ className, kbd, asDecorative = false, placeholder = "Search…", ...props }: SearchInputProps) {
  if (asDecorative) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 min-h-10 rounded-md border border-border bg-inm-raised px-3",
          "text-[14px] text-muted-foreground",
          className
        )}
      >
        <Search className="size-4 shrink-0" />
        <span className="flex-1">{placeholder}</span>
        {kbd && (
          <kbd className="font-mono text-[11px] border border-border rounded-[5px] px-1.5 py-0.5 bg-card">
            {kbd}
          </kbd>
        )}
      </div>
    )
  }

  return (
    <div className={cn("relative flex items-center", className)}>
      <Search className="absolute left-3 size-4 text-muted-foreground pointer-events-none" />
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-border bg-inm-raised pl-9 pr-3 py-2",
          "text-[14px] text-foreground placeholder:text-muted-foreground",
          "transition-[border-color] duration-[160ms] ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:border-primary",
          "hover:border-inm-accent-soft",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
        placeholder={placeholder}
        {...props}
      />
      {kbd && (
        <kbd className="absolute right-3 font-mono text-[11px] border border-border rounded-[5px] px-1.5 py-0.5 bg-card text-muted-foreground pointer-events-none">
          {kbd}
        </kbd>
      )}
    </div>
  )
}

export { SearchInput }
