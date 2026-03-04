"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, MessageCircle, Paperclip, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { contactInfo } from "@/data/site-content"
import { Reveal } from "@/components/reveal"

export default function ContactsPage() {
  const { locale } = useLocale()
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    toast.success(t(ui["contacts.form.success"], locale))
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const contactCards = [
    {
      icon: Phone,
      title: t(ui["contacts.info.phone"], locale),
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: Mail,
      title: t(ui["contacts.info.email"], locale),
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: MapPin,
      title: t(ui["contacts.info.address"], locale),
      value: t(contactInfo.address, locale),
      href: undefined,
    },
  ]

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
            {t(ui["contacts.title"], locale)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-base opacity-60"
          >
            {t(ui["contacts.subtitle"], locale)}
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex flex-col gap-6">
                {contactCards.map((card, i) => {
                  const Icon = card.icon
                  const Wrapper = card.href ? "a" : "div"
                  const wrapperProps = card.href
                    ? { href: card.href, target: card.href.startsWith("mailto") ? undefined : "_self" }
                    : {}
                  return (
                    <Wrapper
                      key={i}
                      {...(wrapperProps as Record<string, string>)}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {card.title}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-foreground">
                          {card.value}
                        </div>
                      </div>
                    </Wrapper>
                  )
                })}

                {/* Messengers */}
                <div className="flex gap-3">
                  {contactInfo.whatsapp && (
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:shadow-lg"
                    >
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                      WhatsApp
                    </a>
                  )}
                  {contactInfo.telegram && (
                    <a
                      href={`https://t.me/${contactInfo.telegram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:shadow-lg"
                    >
                      <Send className="h-5 w-5 text-[#0088CC]" />
                      Telegram
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-foreground">
                      {t(ui["contacts.form.name"], locale)} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-foreground">
                      {t(ui["contacts.form.email"], locale)} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-foreground">
                    {t(ui["contacts.form.phone"], locale)}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-foreground">
                    {t(ui["contacts.form.message"], locale)} *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Paperclip className="h-4 w-4" />
                    {t(ui["contacts.form.file"], locale)}
                  </button>
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 disabled:opacity-70"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t(ui["contacts.form.sending"], locale)}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t(ui["contacts.form.submit"], locale)}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
