"use client"

"use client"

import { Apple, Download, Monitor, Terminal } from "lucide-react"
import { motion, fadeUp, staggerContainer, staggerItem, viewport } from "@/components/motion"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export function DownloadSection() {
  const { language } = useLanguage()

  const downloads = [
    {
      icon: Monitor,
      os: "Windows",
      version: "v3.2.1",
      detail: getTranslation(language, "download.windows"),
      size: "48 MB",
      file: "VoxelCraft-Setup-3.2.1.exe",
      recommended: true,
    },
    {
      icon: Apple,
      os: "macOS",
      version: "v3.2.1",
      detail: getTranslation(language, "download.macos"),
      size: "52 MB",
      file: "VoxelCraft-3.2.1.dmg",
      recommended: false,
    },
    {
      icon: Terminal,
      os: "Linux",
      version: "v3.2.1",
      detail: getTranslation(language, "download.linux"),
      size: "46 MB",
      file: "VoxelCraft-3.2.1.AppImage",
      recommended: false,
    },
  ]
  return (
    <section id="download" className="py-24 px-6" aria-labelledby="download-heading">
      <div className="mx-auto max-w-5xl">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary">
            <Download className="size-3" aria-hidden="true" />
            {getTranslation(language, "download.label")}
          </span>
        </motion.div>

        <motion.h2
          id="download-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
          className="font-heading font-bold text-center text-balance text-3xl md:text-4xl lg:text-5xl"
        >
          {getTranslation(language, "download.heading")}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.2}
          className="mt-3 text-center text-muted-foreground text-sm"
        >
          {getTranslation(language, "download.subtitle")}
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {downloads.map((item) => (
            <motion.div
              key={item.os}
              variants={staggerItem}
              className={`relative flex flex-col gap-5 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                item.recommended
                  ? "border-primary/50 bg-primary/5 shadow-[0_0_40px_-8px_oklch(0.70_0.20_145/30%)]"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {item.recommended && (
                <span className="absolute -top-3.5 left-5 rounded-full bg-primary px-3 py-1 text-[11px] font-mono font-semibold text-primary-foreground shadow-sm">
                  {getTranslation(language, "download.recommended")}
                </span>
              )}

              {/* OS icon + name */}
              <div className="flex items-center gap-3">
                <div className={`size-11 rounded-xl flex items-center justify-center ${item.recommended ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-lg leading-none">{item.os}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                </div>
              </div>

              {/* File info */}
              <div className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-2.5">
                <span className="text-[11px] font-mono text-muted-foreground truncate">{item.file}</span>
                <span className="ml-3 shrink-0 text-[11px] font-mono text-muted-foreground/60">{item.size}</span>
              </div>

              {/* Download button */}
              <a
                href="#"
                className={`group flex items-center justify-center gap-2.5 rounded-xl py-3 px-5 font-heading font-semibold text-sm transition-all duration-300 ${
                  item.recommended
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_oklch(0.70_0.20_145/25%)] hover:shadow-[0_0_32px_oklch(0.70_0.20_145/40%)] hover:bg-primary/90"
                    : "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/30"
                }`}
              >
                <Download className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
                {getTranslation(language, "download.btn")}
                <span className="text-xs opacity-60 font-mono font-normal">{item.version}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Other releases */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.4}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          {getTranslation(language, "download.older")}{" "}
          <a href="#" className="text-primary underline-offset-4 hover:underline">
            {getTranslation(language, "download.github")}
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
