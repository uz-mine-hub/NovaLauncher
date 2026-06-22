"use client"

"use client"

import { Boxes, Gauge, Layers, RefreshCw, ServerCog, ShieldCheck } from "lucide-react"
import { motion, fadeUp, staggerContainer, staggerItem, viewport } from "@/components/motion"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export function Features() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Layers,
      title: getTranslation(language, "features.f1"),
      description: getTranslation(language, "features.f1desc"),
    },
    {
      icon: Boxes,
      title: getTranslation(language, "features.f2"),
      description: getTranslation(language, "features.f2desc"),
    },
    {
      icon: Gauge,
      title: getTranslation(language, "features.f3"),
      description: getTranslation(language, "features.f3desc"),
    },
    {
      icon: ServerCog,
      title: getTranslation(language, "features.f4"),
      description: getTranslation(language, "features.f4desc"),
    },
    {
      icon: RefreshCw,
      title: getTranslation(language, "features.f5"),
      description: getTranslation(language, "features.f5desc"),
    },
    {
      icon: ShieldCheck,
      title: getTranslation(language, "features.f6"),
      description: getTranslation(language, "features.f6desc"),
    },
  ]
  return (
    <section id="features" className="py-24 px-6" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary">
            {getTranslation(language, "features.label")}
          </span>
        </motion.div>

        <motion.h2
          id="features-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
          className="font-heading font-bold text-center text-balance text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto"
        >
          {getTranslation(language, "features.heading")}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.2}
          className="mt-4 text-center text-muted-foreground max-w-lg mx-auto leading-relaxed"
        >
          {getTranslation(language, "features.subtitle")}
        </motion.p>

        {/* Feature grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="glass rounded-2xl p-6 flex flex-col gap-4 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <feature.icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-base">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
