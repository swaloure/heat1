"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { faqItems } from "@/data/site-content"
import { Reveal } from "@/components/reveal"

export function FaqSection() {
  const { locale } = useLocale()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t(ui["faq.title"], locale)}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {t(item.question, locale)}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-6 py-5">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {t(item.answer, locale)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
