"use client"

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, fadeUp, staggerContainer, staggerItem, viewport } from "@/components/motion"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export function Faq() {
  const { language } = useLanguage()

  const faqs = [
    {
      q: getTranslation(language, "faq.q1"),
      a: getTranslation(language, "faq.a1"),
    },
    {
      q: getTranslation(language, "faq.q2"),
      a: getTranslation(language, "faq.a2"),
    },
    {
      q: getTranslation(language, "faq.q3"),
      a: getTranslation(language, "faq.a3"),
    },
    {
      q: getTranslation(language, "faq.q4"),
      a: getTranslation(language, "faq.a4"),
    },
    {
      q: getTranslation(language, "faq.q5"),
      a: getTranslation(language, "faq.a5"),
    },
    {
      q: getTranslation(language, "faq.q6"),
      a: getTranslation(language, "faq.a6"),
    },
  ]
  return (
    <section id="faq" className="py-24 px-6" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary">
            {getTranslation(language, "faq.label")}
          </span>
        </motion.div>

        <motion.h2
          id="faq-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
          className="font-heading font-bold text-center text-balance text-3xl md:text-4xl mb-12"
        >
          {getTranslation(language, "faq.heading")}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={staggerItem}>
                <AccordionItem
                  value={`item-${i}`}
                  className="glass rounded-xl border-border px-5 data-[state=open]:border-primary/30 transition-all duration-200"
                >
                  <AccordionTrigger className="font-heading font-medium text-foreground text-sm py-4 hover:no-underline hover:text-primary [&[data-state=open]]:text-primary text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
