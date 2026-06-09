import { useState, useEffect } from "react"
import "./index.css"
import "./site.css"
import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { Anchors } from "@/components/site/anchors"
import { TokensSection } from "@/components/site/tokens-section"
import { Modes } from "@/components/site/modes"
import { AppPreview } from "@/components/site/app-preview"
import { Principles } from "@/components/site/principles"
import { Install, SiteFooter } from "@/components/site/install"
import { UIKitSection } from "@/components/site/ui-kit-section"
import { SlidesShowcase } from "@/components/site/slides-showcase"

function getInitialDark(): boolean {
  const saved = localStorage.getItem("inm-theme")
  if (saved) return saved === "dark"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export default function App() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("inm-theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <>
      <SiteHeader dark={dark} onToggle={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <Anchors />
        <TokensSection />
        <Modes />
        <AppPreview />
        <Principles />
        <Install />
        <UIKitSection />
        <SlidesShowcase />
      </main>
      <SiteFooter />
    </>
  )
}
