"use client"

import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { steps } from "@/data/site-content"
import { Reveal } from "@/components/reveal"

export function StepsSection() {
  const { locale } = useLocale()

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t(ui["steps.title"], locale)}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              {t(ui["steps.subtitle"], locale)}
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* Connector line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div
                  className={`flex flex-col items-start gap-6 lg:flex-row lg:items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                    <div className="rounded-2xl border border-border bg-card p-8">
                      <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                        {locale === "ru" ? "Шаг" : locale === "kz" ? "Қадам" : "Step"} {step.number}
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-foreground">
                        {t(step.title, locale)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {t(step.description, locale)}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-xl font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div className="hidden flex-1 lg:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
