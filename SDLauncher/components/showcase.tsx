"use client"

"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { motion, fadeUp, scaleIn, staggerContainer, staggerItem, viewport } from "@/components/motion"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export function Showcase() {
  const { language } = useLanguage()

  const stats = [
    { value: "2.4M+", label: "Downloads" },
    { value: "150+",  label: "Supported versions" },
    { value: "4.9",   label: "User rating" },
    { value: "99.9%", label: "Uptime" },
  ]

  const points = [
    "Fast launch with favorites",
    "Dark mode and customizable themes",
    "Auto-detect Java and RAM settings",
  ]
  return (
    <section id="screenshots" className="py-24 px-6" aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-6xl flex flex-col gap-20">

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="glass rounded-2xl px-5 py-7 flex flex-col gap-1 text-center"
            >
              <span className="font-heading font-bold text-3xl text-primary glow-emerald">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary">
              Showcase
            </span>
            <h2
              id="showcase-heading"
              className="font-heading font-bold text-balance text-3xl md:text-4xl leading-tight"
            >
              Clean UI,{" "}
              <span className="text-primary">powerful features</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every detail designed for faster access to gameplay.
              Switch versions, manage mods, and connect to servers.
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {points.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image side */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.15}
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-[0_0_60px_-12px_oklch(0.70_0.20_145/20%)]">
              <Image
                src="/showcase-launcher.png"
                alt="VoxelCraft Launcher — mod management and server view"
                width={720}
                height={450}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
