"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"

export function CtaSection() {
  const { locale } = useLocale()

  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
            <div className="flex-1">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
                {t(ui["cta.title"], locale)}
              </h2>
              <p className="mt-3 text-base text-accent-foreground/80">
                {t(ui["cta.subtitle"], locale)}
              </p>
            </div>
            <Link
              href="/contacts"
              className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              {t(ui["cta.button"], locale)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
