import { Suspense } from "react"
import { CatalogClient } from "@/components/catalog/catalog-client"

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogClient />
    </Suspense>
  )
}
