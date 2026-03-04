"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"

export function HeroSection() {
  const { locale } = useLocale()

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center lg:pb-32 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2 text-xs font-medium"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {locale === "ru"
            ? "Надёжные поставки с 2012 года"
            : locale === "kz"
              ? "2012 жылдан бері сенімді жеткізілімдер"
              : "Reliable supply since 2012"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          {t(ui["hero.title"], locale)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed opacity-60 sm:text-lg"
        >
          {t(ui["hero.subtitle"], locale)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/catalog"
            className="flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
          >
            {t(ui["hero.cta.catalog"], locale)}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contacts"
            className="flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/5"
          >
            {t(ui["hero.cta.contact"], locale)}
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-16"
        >
          {[
            { value: "10+", label: locale === "ru" ? "лет на рынке" : locale === "kz" ? "жыл нарықта" : "years experience" },
            { value: "100+", label: locale === "ru" ? "наименований" : locale === "kz" ? "атауы" : "product names" },
            { value: "50+", label: locale === "ru" ? "партнёров" : locale === "kz" ? "серіктестер" : "partners" },
            { value: "5", label: locale === "ru" ? "стран поставок" : locale === "kz" ? "жеткізу елі" : "delivery countries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs opacity-50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <ChevronDown className="h-5 w-5 animate-bounce opacity-30" />
        </motion.div>
      </div>
    </section>
  )
}
