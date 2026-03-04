"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Package, Send, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { products } from "@/data/products"
import { categories } from "@/data/categories"
import { Reveal } from "@/components/reveal"

export function ProductDetailClient() {
  const { locale } = useLocale()
  const params = useParams()
  const slug = params.slug as string

  const product = products.find((p) => p.slug === slug)
  const category = product ? categories.find((c) => c.id === product.categoryId) : null
  const related = product
    ? products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4)
    : []

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-background">
        <div className="text-center">
          <Package className="mx-auto h-16 w-16 text-muted-foreground/30" />
          <h2 className="mt-4 text-xl font-bold text-foreground">
            {t(ui["catalog.notfound"], locale)}
          </h2>
          <Link
            href="/catalog"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(ui["product.back"], locale)}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t(ui["nav.home"], locale)}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/catalog" className="hover:text-foreground transition-colors">
            {t(ui["nav.catalog"], locale)}
          </Link>
          <ChevronRight className="h-3 w-3" />
          {category && (
            <>
              <Link
                href={`/catalog?category=${category.slug}`}
                className="hover:text-foreground transition-colors"
              >
                {t(category.name, locale)}
              </Link>
              <ChevronRight className="h-3 w-3" />
            </>
          )}
          <span className="text-foreground font-medium truncate">{t(product.name, locale)}</span>
        </div>
      </div>

      {/* Product content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Left: image */}
          <div className="flex items-center justify-center rounded-2xl border border-border bg-secondary p-12">
            <Package className="h-32 w-32 text-muted-foreground/20" />
          </div>

          {/* Right: info */}
          <div>
            {category && (
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {t(category.name, locale)}
              </span>
            )}
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t(product.name, locale)}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t(product.description, locale)}
            </p>

            {/* Specs */}
            {product.specs.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {t(ui["product.specs"], locale)}
                </h3>
                <div className="mt-4 overflow-hidden rounded-xl border border-border">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                        i % 2 === 0 ? "bg-card" : "bg-secondary"
                      }`}
                    >
                      <span className="font-medium text-muted-foreground">{t(spec.label, locale)}</span>
                      <span className="font-semibold text-foreground">{t(spec.value, locale)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                {t(ui["product.request"], locale)}
              </Link>
              <Link
                href="/catalog"
                className="flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                {t(ui["product.back"], locale)}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {t(ui["product.related"], locale)}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((rel, i) => (
                <Reveal key={rel.id} delay={i * 0.1}>
                  <Link
                    href={`/catalog/${rel.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-secondary">
                      <Package className="h-8 w-8 text-muted-foreground/30" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                      {category ? t(category.name, locale) : ""}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {t(rel.name, locale)}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {t(rel.shortDescription, locale)}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
