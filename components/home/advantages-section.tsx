"use client"

import { ShieldCheck, Truck, Users, Globe } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { advantages } from "@/data/site-content"
import { Reveal } from "@/components/reveal"

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Truck,
  Users,
  Globe,
}

export function AdvantagesSection() {
  const { locale } = useLocale()

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t(ui["advantages.title"], locale)}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              {t(ui["advantages.subtitle"], locale)}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => {
            const Icon = iconMap[adv.icon] || ShieldCheck
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {t(adv.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(adv.description, locale)}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
