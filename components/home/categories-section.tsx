"use client"

import Link from "next/link"
import { ArrowRight, FlaskConical, Layers, Settings, Cog } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { categories } from "@/data/categories"
import { Reveal } from "@/components/reveal"

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Layers,
  Settings,
  Cog,
}

export function CategoriesSection() {
  const { locale } = useLocale()

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t(ui["categories.title"], locale)}
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                {t(ui["categories.subtitle"], locale)}
              </p>
            </div>
            <Link
              href="/catalog"
              className="flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              {t(ui["common.viewall"], locale)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || FlaskConical
            return (
              <Reveal key={cat.id} delay={i * 0.15}>
                <Link
                  href={`/catalog?category=${cat.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-foreground">
                      {t(cat.name, locale)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(cat.description, locale)}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {t(ui["common.learnmore"], locale)}
                    <ArrowRight className="h-4 w-4 -translate-x-1 transition-transform group-hover:translate-x-0" />
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
