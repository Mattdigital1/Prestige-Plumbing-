import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCallBar from '@/components/layout/MobileCallBar'
import { getLocalBusinessSchema, getWebsiteSchema } from '@/lib/schema/structured-data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://prestigeplumbingllc.com'),
  title: {
    default: 'Prestige Plumbing LLC | Plumber in Biloxi & Mississippi Gulf Coast',
    template: '%s | Prestige Plumbing LLC',
  },
  description:
    'Prestige Plumbing LLC — fifth-generation, family-owned plumbers serving Biloxi, Gulfport, Ocean Springs, and the full Mississippi Gulf Coast. Residential, commercial, new construction, water heaters, and 24/7 emergency plumbing. Call (228) 327-6151.',
  keywords: [
    'plumber Biloxi MS',
    'plumbing company Biloxi Mississippi',
    'emergency plumber Gulf Coast',
    'plumber Gulfport MS',
    'plumber Ocean Springs MS',
    'residential plumber Mississippi',
    'commercial plumber Gulf Coast',
    'water heater repair Biloxi',
    '24 hour emergency plumber Mississippi',
    'plumbing contractor Gulf Coast',
    'new construction plumber Mississippi',
    'plumbing remodel Biloxi',
    'plumber near me Mississippi',
    'Prestige Plumbing LLC',
    'Jesse Richard plumber',
    'licensed plumber Mississippi',
  ],
  authors: [{ name: 'Prestige Plumbing LLC' }],
  creator: 'Prestige Plumbing LLC',
  publisher: 'Prestige Plumbing LLC',
  openGraph: {
    type: 'website',
    siteName: 'Prestige Plumbing LLC',
    locale: 'en_US',
    url: 'https://prestigeplumbingllc.com',
    title: 'Prestige Plumbing LLC | Plumber in Biloxi & Mississippi Gulf Coast',
    description:
      'Fifth-generation, family-owned plumbers serving the Mississippi Gulf Coast. Residential, commercial, new construction, water heaters, and 24/7 emergency plumbing. Call (228) 327-6151.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Prestige Plumbing LLC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prestige Plumbing LLC | Mississippi Gulf Coast Plumbers',
    description:
      'Fifth-generation family plumbers. Residential, commercial, emergency plumbing across the MS Gulf Coast. Call (228) 327-6151.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://prestigeplumbingllc.com',
  },
  verification: {
    google: 'add-your-google-search-console-token-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = getLocalBusinessSchema()
  const websiteSchema = getWebsiteSchema()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <AnnouncementBar />
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
        <Script
          src="https://links.m2squareddigital.com/js/form_embed.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a4fcd8db90c051587e163df"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
