export type Locale = "ru" | "kz" | "en"

export interface LocalizedString {
  ru: string
  kz: string
  en: string
}

export interface Category {
  id: string
  slug: string
  name: LocalizedString
  description: LocalizedString
  icon: string
}

export interface ProductSpec {
  label: LocalizedString
  value: LocalizedString
}

export interface Product {
  id: string
  slug: string
  categoryId: string
  name: LocalizedString
  description: LocalizedString
  shortDescription: LocalizedString
  specs: ProductSpec[]
  tags: string[]
  image: string
}

export interface Advantage {
  icon: string
  title: LocalizedString
  description: LocalizedString
}

export interface Step {
  number: number
  title: LocalizedString
  description: LocalizedString
}

export interface FAQItem {
  question: LocalizedString
  answer: LocalizedString
}

export interface ContactInfo {
  phone: string
  email: string
  address: LocalizedString
  whatsapp?: string
  telegram?: string
}
