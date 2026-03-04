"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, Package } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"
import { products } from "@/data/products"
import { categories } from "@/data/categories"
import { Reveal } from "@/components/reveal"

const ITEMS_PER_PAGE = 12

export function CatalogClient() {
  const { locale } = useLocale()
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState<"default" | "name">("default")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== "all") {
      result = result.filter((p) => {
        const cat = categories.find((c) => c.id === p.categoryId)
        return cat?.slug === selectedCategory
      })
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          t(p.name, locale).toLowerCase().includes(q) ||
          t(p.shortDescription, locale).toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    }

    if (sortBy === "name") {
      result.sort((a, b) => t(a.name, locale).localeCompare(t(b.name, locale), locale))
    }

    return result
  }, [selectedCategory, search, sortBy, locale])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug)
    setPage(1)
  }

  const handleSearchChange = (val: string) => {
    setSearch(val)
    setPage(1)
  }

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
            {t(ui["catalog.title"], locale)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-base opacity-60"
          >
            {filtered.length} {t(ui["catalog.items"], locale)}
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Filters bar */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={t(ui["catalog.search"], locale)}
              className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowUpDown className="h-4 w-4" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "default" | "name")}
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
              >
                <option value="default">{t(ui["catalog.sort.default"], locale)}</option>
                <option value="name">{t(ui["catalog.sort.name"], locale)}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground hover:bg-secondary"
            }`}
          >
            {t(ui["catalog.all"], locale)}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                selectedCategory === cat.slug
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {t(cat.name, locale)}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-8">
          {paginated.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Package className="h-12 w-12 text-muted-foreground/40" />
              <p className="mt-4 text-lg font-semibold text-foreground">
                {t(ui["catalog.notfound"], locale)}
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <AnimatePresence mode="popLayout">
                  {paginated.map((product, i) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                    >
                      <Link
                        href={`/catalog/${product.slug}`}
                        className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                      >
                        {/* Image placeholder */}
                        <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-secondary">
                          <Package className="h-10 w-10 text-muted-foreground/30" />
                        </div>

                        <div className="flex flex-1 flex-col">
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                            {t(
                              categories.find((c) => c.id === product.categoryId)?.name || {
                                ru: "",
                                kz: "",
                                en: "",
                              },
                              locale
                            )}
                          </span>
                          <h3 className="mt-1.5 text-sm font-bold leading-snug text-foreground group-hover:text-accent transition-colors">
                            {t(product.name, locale)}
                          </h3>
                          <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                            {t(product.shortDescription, locale)}
                          </p>
                          <span className="mt-4 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                            {t(ui["common.learnmore"], locale)} →
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-4">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-3 w-3" />
                    {t(ui["catalog.prev"], locale)}
                  </button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-all ${
                          p === page
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    className="flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {t(ui["catalog.next"], locale)}
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
