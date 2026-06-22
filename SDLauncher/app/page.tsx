import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DownloadSection } from "@/components/download-section"
import { Showcase } from "@/components/showcase"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <DownloadSection />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
