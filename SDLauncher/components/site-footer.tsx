"use client"

"use client"

import { ArrowRight, Download } from "lucide-react"
import { motion, fadeUp, staggerContainer, staggerItem, viewport } from "@/components/motion"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export function SiteFooter() {
  const { language } = useLanguage()
  return (
    <footer className="mt-10 border-t border-border">
      {/* CTA band */}
      <div className="px-6 py-20 flex flex-col items-center gap-6 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/6 blur-[100px]" />
        </div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-heading font-bold text-balance text-3xl md:text-4xl max-w-xl"
        >
          Ready to play?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
          className="text-muted-foreground max-w-md leading-relaxed"
        >
          Download VoxelCraft Launcher now and jump into the game world in seconds.
        </motion.p>

        <motion.a
          href="#download"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.2}
          className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 font-heading font-semibold text-primary-foreground text-sm shadow-[0_0_28px_oklch(0.70_0.20_145/30%)] hover:shadow-[0_0_40px_oklch(0.70_0.20_145/45%)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <Download className="size-4" aria-hidden="true" />
          Free download
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </motion.a>
      </div>

      {/* Footer links */}
      <div className="border-t border-border px-6 py-14">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="size-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm select-none">
                V
              </span>
              <span className="font-heading font-semibold text-foreground text-base tracking-tight">
                VoxelCraft
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {getTranslation(language, "footer.about")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {getTranslation(language, "footer.links")}
            </p>
            <ul className="flex flex-col gap-2" role="list">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{getTranslation(language, "nav.features")}</a></li>
              <li><a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{getTranslation(language, "download.label")}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {getTranslation(language, "footer.legal")}
            </p>
            <ul className="flex flex-col gap-2" role="list">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{getTranslation(language, "footer.privacy")}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{getTranslation(language, "footer.terms")}</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Community
            </p>
            <ul className="flex flex-col gap-2" role="list">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>{getTranslation(language, "footer.copyright")}</p>
        <p className="text-center">
          Not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang AB.
        </p>
      </div>
    </footer>
  )
}
