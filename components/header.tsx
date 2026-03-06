"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { t, ui, locales, localeShort } from "@/lib/i18n"
import type { Locale } from "@/types"

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.catalog", href: "/catalog" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contacts", href: "/contacts" },
]

export function Header() {
  const { locale, setLocale } = useLocale()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground tracking-tight">HE</span>
          </div>
          <span className="hidden text-lg font-bold tracking-tight text-foreground sm:block">
            Heat Energy Capital
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(ui[link.key], locale)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          {/* 
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {localeShort[locale]}
              <ChevronDown className="h-3 w-3" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 min-w-[100px] overflow-hidden rounded-lg border border-border bg-card shadow-lg"
                >
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLocale(l as Locale)
                        setLangOpen(false)
                      }}
                      className={`block w-full px-4 py-2 text-left text-xs font-medium transition-colors hover:bg-secondary ${
                        l === locale ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {localeShort[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          */}

          {/* CTA */}
          <Link
            href="/contacts"
            className="hidden rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-accent-foreground transition-all hover:opacity-90 sm:block"
          >
            {t(ui["hero.cta.contact"], locale)}
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {t(ui[link.key], locale)}
                </Link>
              ))}
              <Link
                href="/contacts"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                {t(ui["hero.cta.contact"], locale)}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
