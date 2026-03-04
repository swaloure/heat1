"use client"

import { Building2, Target, Heart, Globe, ShieldCheck, Users, Handshake, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"

const values = [
  {
    icon: ShieldCheck,
    title: { ru: "Качество", kz: "Сапа", en: "Quality" },
    description: { ru: "Строгий контроль на всех этапах", kz: "Барлық кезеңдерде қатаң бақылау", en: "Strict control at every stage" },
  },
  {
    icon: Handshake,
    title: { ru: "Надёжность", kz: "Сенімділік", en: "Reliability" },
    description: { ru: "Выполнение обязательств точно в срок", kz: "Міндеттемелерді уақытында орындау", en: "Fulfilling obligations on time" },
  },
  {
    icon: Users,
    title: { ru: "Партнёрство", kz: "Серіктестік", en: "Partnership" },
    description: { ru: "Долгосрочные отношения с клиентами", kz: "Клиенттермен ұзақ мерзімді қарым-қатынас", en: "Long-term client relationships" },
  },
  {
    icon: Heart,
    title: { ru: "Ответственность", kz: "Жауапкершілік", en: "Responsibility" },
    description: { ru: "Ответственный подход к каждому заказу", kz: "Әр тапсырысқа жауапты көзқарас", en: "Responsible approach to every order" },
  },
]

export default function AboutPage() {
  const { locale } = useLocale()

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="border-b border-border bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t(ui["about.title"], locale)}
          </motion.h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Description */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t(ui["about.description"], locale)}
            </p>
          </div>
        </Reveal>

        {/* Mission */}
        <Reveal>
          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {t(ui["about.mission.title"], locale)}
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t(ui["about.mission.text"], locale)}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {t(ui["about.geography.title"], locale)}
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t(ui["about.geography.text"], locale)}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Values */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">
                {t(ui["about.values.title"], locale)}
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-card p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {t(val.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t(val.description, locale)}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Stats strip */}
        <Reveal>
          <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl bg-primary p-10 text-primary-foreground sm:grid-cols-4">
            {[
              { value: "10+", label: locale === "ru" ? "лет на рынке" : locale === "kz" ? "жыл нарықта" : "years in market" },
              { value: "100+", label: locale === "ru" ? "наименований продукции" : locale === "kz" ? "өнім атауы" : "product names" },
              { value: "50+", label: locale === "ru" ? "постоянных партнёров" : locale === "kz" ? "тұрақты серіктестер" : "regular partners" },
              { value: "5", label: locale === "ru" ? "стран поставок" : locale === "kz" ? "жеткізу елі" : "delivery countries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-xs opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
