import { useState, useEffect } from "react"
import "./index.css"
import "./site.css"
import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { Anchors } from "@/components/site/anchors"
import { TokensSection } from "@/components/site/tokens-section"
import { Modes } from "@/components/site/modes"
import { Principles } from "@/components/site/principles"
import { Install, SiteFooter } from "@/components/site/install"
import { UIKitSection } from "@/components/site/ui-kit-section"
import { SlidesShowcase } from "@/components/site/slides-showcase"

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <>
      <SiteHeader dark={dark} onToggle={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <Anchors />
        <TokensSection />
        <Modes />
        <Principles />
        <Install />
        <UIKitSection />
        <SlidesShowcase />
      </main>
      <SiteFooter />
    </>
  )
}
