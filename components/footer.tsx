"use client"

import Link from "next/link"
import { Phone, Mail, MessageCircle, Send } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { contactInfo } from "@/data/site-content"

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.catalog", href: "/catalog" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contacts", href: "/contacts" },
  { key: "nav.privacy", href: "/privacy-policy" },
]

export function Footer() {
  const { locale } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-bold text-accent-foreground tracking-tight">HE</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Heat Energy Capital</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              {t(ui["about.description"], locale).slice(0, 120)}...
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">
              {t(ui["footer.navigation"], locale)}
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  {t(ui[link.key], locale)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">
              {t(ui["contacts.title"], locale)}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Messengers */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">
              {t(ui["footer.social"], locale)}
            </h4>
            <div className="flex flex-col gap-3">
              {contactInfo.whatsapp && (
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              )}
              {contactInfo.telegram && (
                <a
                  href={`https://t.me/${contactInfo.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs opacity-50">
              &copy; {year} Heat Energy Capital. {t(ui["footer.rights"], locale)}.
            </p>
            <Link
              href="/privacy-policy"
              className="text-xs opacity-50 transition-opacity hover:opacity-100"
            >
              {t(ui["nav.privacy"], locale)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
