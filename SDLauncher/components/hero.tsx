"use client"

"use client"

import Image from "next/image"
import { Apple, ArrowRight, Monitor, ShieldCheck, Terminal } from "lucide-react"
import { motion, fadeUp, scaleIn, staggerContainer, staggerItem, viewport } from "@/components/motion"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()

  const platforms = [
    { icon: Monitor,  label: "Windows" },
    { icon: Apple,    label: "macOS" },
    { icon: Terminal, label: "Linux" },
  ]
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden"
      aria-label="Bosh qism"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/6 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      {/* Pill badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          {getTranslation(language, "hero.badge")}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="font-heading font-bold text-center text-balance leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
      >
        {getTranslation(language, "hero.heading").split(" ").slice(0, -3).join(" ")}{" "}
        <span className="text-primary glow-emerald">{getTranslation(language, "hero.highlight")}</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="mt-6 text-center text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl"
      >
        {getTranslation(language, "hero.subtitle")}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        {/* Primary download */}
        <motion.a
          variants={staggerItem}
          href="#download"
          className="group relative inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-heading font-semibold text-primary-foreground text-sm shadow-[0_0_24px_oklch(0.70_0.20_145/30%)] hover:shadow-[0_0_36px_oklch(0.70_0.20_145/45%)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Monitor className="size-4" aria-hidden="true" />
          {getTranslation(language, "hero.download")}
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </motion.a>

        {/* Secondary */}
        <motion.a
          variants={staggerItem}
          href="#download"
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary/50 px-6 py-3 font-heading font-medium text-foreground text-sm hover:bg-secondary hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          {getTranslation(language, "hero.other")}
        </motion.a>
      </motion.div>

      {/* Platform + trust pills */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="mt-5 flex items-center gap-4 flex-wrap justify-center"
      >
        {platforms.map((p) => (
          <span key={p.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <p.icon className="size-3.5" aria-hidden="true" />
            {p.label}
          </span>
        ))}
        <span className="text-border" aria-hidden="true">·</span>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
          {getTranslation(language, "hero.free")}
        </span>
      </motion.div>

      {/* Launcher preview image */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="mt-16 w-full max-w-4xl"
      >
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_0_80px_-12px_oklch(0.70_0.20_145/20%)]">
          <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary border-b border-border">
            <span className="size-3 rounded-full bg-destructive/60" aria-hidden="true" />
            <span className="size-3 rounded-full bg-muted-foreground/30" aria-hidden="true" />
            <span className="size-3 rounded-full bg-muted-foreground/30" aria-hidden="true" />
            <span className="ml-4 text-xs text-muted-foreground font-mono">VoxelCraft Launcher v3.2.1</span>
          </div>
          <Image
            src="/hero-launcher.png"
            alt={getTranslation(language, "hero.preview")}
            width={1280}
            height={720}
            className="w-full object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
