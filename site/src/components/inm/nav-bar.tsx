import * as React from "react"
import { cn } from "@/lib/utils"

interface NavLink {
  label: string
  href?: string
  active?: boolean
}

interface NavBarProps {
  brand?: React.ReactNode
  links?: NavLink[]
  tail?: React.ReactNode
  className?: string
}

function NavBar({ brand, links, tail, className }: NavBarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-20 border-b border-border",
        "bg-[color-mix(in_oklch,var(--background)_88%,transparent)] backdrop-blur-[18px]",
        className
      )}
    >
      <nav className="flex items-center justify-between gap-4 min-h-[68px] px-6 max-w-[1160px] mx-auto">
        {brand && (
          <div className="flex items-center gap-2.5 font-[820] min-w-0">
            {brand}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href ?? "#"}
                className={cn(
                  "inline-flex items-center min-h-[38px] px-3 py-2 rounded-md text-[14px] font-[700]",
                  "transition-[background,color] duration-[160ms] ease-out",
                  link.active
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {tail && (
          <div className="flex items-center gap-2">
            {tail}
          </div>
        )}
      </nav>
    </header>
  )
}

export { NavBar, type NavLink }
