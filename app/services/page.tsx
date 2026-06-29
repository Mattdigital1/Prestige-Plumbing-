import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import ServiceCard from '@/components/ui/ServiceCard'
import EmergencyCallout from '@/components/sections/EmergencyCallout'
import FinalCTA from '@/components/sections/FinalCTA'

import { SERVICES } from '@/lib/config/services'
import { BUSINESS } from '@/lib/config/business'
import { getBreadcrumbSchema } from '@/lib/schema/structured-data'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Plumbing Services | Prestige Plumbing LLC',
  description:
    'Prestige Plumbing LLC offers emergency plumbing, residential, commercial, new construction, water heater, drain, and remodeling plumbing services across the Mississippi Gulf Coast.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Plumbing Services | Prestige Plumbing LLC',
    description:
      'Prestige Plumbing LLC offers emergency plumbing, residential, commercial, new construction, water heater, drain, and remodeling plumbing services across the Mississippi Gulf Coast.',
    url: `${BUSINESS.siteUrl}/services`,
    siteName: BUSINESS.name,
    locale: 'en_US',
    type: 'website',
  },
}

// ---------------------------------------------------------------------------
// Category groupings for the directory layout
// ---------------------------------------------------------------------------

const CATEGORIES = [
  {
    id: 'emergency',
    label: 'Emergency Plumbing',
    eyebrow: 'Available 24/7',
    keys: ['emergency'] as const,
  },
  {
    id: 'residential',
    label: 'Residential Plumbing',
    eyebrow: 'For Homeowners',
    keys: ['residential', 'remodel'] as const,
  },
  {
    id: 'commercial',
    label: 'Commercial Plumbing',
    eyebrow: 'For Businesses & Contractors',
    keys: ['commercial', 'construction'] as const,
  },
  {
    id: 'water-heaters',
    label: 'Water Heater Services',
    eyebrow: 'Tank & Tankless',
    keys: ['water-heater'] as const,
  },
  {
    id: 'repairs',
    label: 'Repairs, Maintenance & More',
    eyebrow: 'Any Job, Any Size',
    keys: ['repair', 'general'] as const,
  },
]

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
  ])

  return (
    <>
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-[#0d1b2a] pt-16 pb-14 sm:pt-20 sm:pb-16">
        <Image
          src="/images/commercial-pipes.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#0d1b2a]/80" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, transparent 55%)' }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-blue-600" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors focus:outline-none focus-visible:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-white font-medium" aria-current="page">Services</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div aria-hidden="true" className="mb-4 h-1 w-12 rounded-full bg-blue-600" />
            <h1
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ textWrap: 'balance' } as CSSProperties}
            >
              Plumbing Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Comprehensive plumbing services for homeowners, contractors, and businesses across
              the Mississippi Gulf Coast — from 24/7 emergency response to new construction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/request-service"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Request Service Online
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Service Directory ─────────────────────────────────────────────────── */}
      {CATEGORIES.map((cat, i) => {
        const services = SERVICES.filter((s) => (cat.keys as readonly string[]).includes(s.category))
        if (services.length === 0) return null

        const isLight = i % 2 === 0

        return (
          <section
            key={cat.id}
            id={cat.id}
            aria-labelledby={`cat-${cat.id}-heading`}
            className={`py-14 sm:py-16 ${isLight ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {cat.eyebrow}
                </p>
                <h2
                  id={`cat-${cat.id}-heading`}
                  className="text-2xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-3xl"
                >
                  {cat.label}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    variant="default"
                    href={service.slug === 'emergency-plumbing' ? '/emergency' : `/services/${service.slug}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Emergency Callout ─────────────────────────────────────────────────── */}
      <EmergencyCallout />

      {/* ── Final CTA ─────────────────────────────────────────────────────────── */}
      <FinalCTA />
    </>
  )
}
