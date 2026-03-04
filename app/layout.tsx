import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { LocaleProvider } from '@/lib/locale-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Heat Energy Capital — Industrial Chemicals, Metals & Equipment',
  description: 'Reliable supplier of industrial chemicals, metals, alloys and mining equipment for mining, metallurgy and processing industries. Kazakhstan, CIS and international deliveries.',
  keywords: ['industrial chemicals', 'metals', 'mining equipment', 'ferroalloys', 'Kazakhstan', 'промышленная химия', 'металлы', 'оборудование'],
  openGraph: {
    title: 'Heat Energy Capital — Industrial Solutions',
    description: 'Chemicals, metals, equipment — for mining, metallurgy and processing industries',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LocaleProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" richColors />
        </LocaleProvider>
      </body>
    </html>
  )
}
