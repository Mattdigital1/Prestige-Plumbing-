import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import ServiceCard from '@/components/ui/ServiceCard'
import SectionHeader from '@/components/ui/SectionHeader'
import EmergencyCallout from '@/components/sections/EmergencyCallout'
import FinalCTA from '@/components/sections/FinalCTA'

import { SERVICES, FEATURED_SERVICES, SERVICE_CATEGORIES } from '@/lib/config/services'
import { BUSINESS } from '@/lib/config/business'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema/structured-data'

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
// Category section config — maps SERVICE_CATEGORIES ids to anchor IDs, labels,
// accent colors, and filtered service lists.
// ---------------------------------------------------------------------------

type CategorySectionConfig = {
  /** Anchor ID used for deep-linking (e.g. "emergency") */
  anchorId: string
  /** Human-readable label */
  label: string
  /** Description shown beneath the label */
  description: string
  /** Service category values to include */
  categoryKeys: string[]
  /** Visual variant */
  variant: 'emergency' | 'standard' | 'dark'
}

const CATEGORY_SECTIONS: CategorySectionConfig[] = [
  {
    anchorId: 'emergency',
    label: 'Emergency Plumbing',
    description:
      'Plumbing emergencies do not wait for business hours. We respond 24 hours a day, 7 days a week — including weekends and holidays — across the Mississippi Gulf Coast.',
    categoryKeys: ['emergency'],
    variant: 'emergency',
  },
  {
    anchorId: 'residential',
    label: 'Residential Plumbing',
    description:
      'From routine repairs to complete system installations, we handle all residential plumbing needs with clean, professional workmanship inside your home.',
    categoryKeys: ['residential'],
    variant: 'standard',
  },
  {
    anchorId: 'commercial',
    label: 'Commercial Plumbing',
    description:
      'Efficient, code-compliant plumbing services for offices, retail spaces, restaurants, multi-family properties, and commercial buildings of all sizes.',
    categoryKeys: ['commercial'],
    variant: 'dark',
  },
  {
    anchorId: 'new-construction',
    label: 'New Construction Plumbing',
    description:
      'Full-system plumbing installation for new residential and commercial builds. We coordinate with your schedule and deliver code-compliant work from rough-in to finish.',
    categoryKeys: ['construction'],
    variant: 'standard',
  },
  {
    anchorId: 'remodels',
    label: 'Plumbing Remodels',
    description:
      'Relocating supply and drain lines, installing new fixtures, and ensuring your bathroom or kitchen renovation meets all code requirements.',
    categoryKeys: ['remodel'],
    variant: 'dark',
  },
  {
    anchorId: 'water-heaters',
    label: 'Water Heater Services',
    description:
      'Repair and replacement for all types of tank and tankless water heaters. We assess your situation and recommend the right solution.',
    categoryKeys: ['water-heater'],
    variant: 'standard',
  },
  {
    anchorId: 'repairs',
    label: 'Repairs, Maintenance & More',
    description:
      'Leak detection, pipe repair, drain cleaning, plumbing maintenance, inspections, and general service plumbing for any residential or commercial need.',
    categoryKeys: ['repair', 'general'],
    variant: 'dark',
  },
]

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function ServicesPage() {
  // Build JSON-LD: one Service schema per featured service + breadcrumb
  const serviceSchemas = FEATURED_SERVICES.map((s) =>
    getServiceSchema(s.name, s.longDescription)
  )

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
  ])

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* JSON-LD structured data                                              */}
      {/* ------------------------------------------------------------------ */}
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {serviceSchemas.map((schema, i) => (
        <Script
          key={`service-schema-${i}`}
          id={`service-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ------------------------------------------------------------------ */}
      {/* 1. Page header                                                       */}
      {/* ------------------------------------------------------------------ */}
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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-white font-medium" aria-current="page">
                Services
              </li>
            </ol>
          </nav>

          {/* Heading block */}
          <div className="max-w-3xl">
            {/* Blue accent bar */}
            <div aria-hidden="true" className="mb-4 h-1 w-12 rounded-full bg-blue-600" />

            <h1
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ textWrap: 'balance' } as CSSProperties}
            >
              Plumbing Services
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Comprehensive plumbing services for homeowners, contractors, and businesses across
              the Mississippi Gulf Coast. From 24/7 emergency response to new construction,
              {' '}{BUSINESS.name} handles it all.
            </p>

            {/* Quick-jump category nav */}
            <nav
              aria-label="Jump to service category"
              className="mt-8 flex flex-wrap gap-2"
            >
              {SERVICE_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={cat.href}
                  className="inline-flex items-center rounded-full border border-slate-600 px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-blue-500 hover:bg-blue-600/10 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {cat.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Featured category sections                                        */}
      {/* ------------------------------------------------------------------ */}
      {CATEGORY_SECTIONS.map((section) => {
        const sectionServices = SERVICES.filter((s) =>
          section.categoryKeys.includes(s.category)
        )

        if (sectionServices.length === 0) return null

        // --- Emergency variant ---
        if (section.variant === 'emergency') {
          return (
            <section
              key={section.anchorId}
              id={section.anchorId}
              aria-labelledby={`cat-heading-${section.anchorId}`}
              className="relative overflow-hidden bg-[#1a0505] py-16 sm:py-20 lg:py-24"
              style={{
                background:
                  'linear-gradient(135deg, #7f1d1d 0%, #1a0505 55%)',
              }}
            >
              {/* Left edge accent */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-red-600"
                aria-hidden="true"
              />

              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="mb-10 max-w-3xl">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-400">
                    Available 24 Hours a Day, 7 Days a Week
                  </p>
                  <h2
                    id={`cat-heading-${section.anchorId}`}
                    className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                    style={{ textWrap: 'balance' } as CSSProperties}
                  >
                    {section.label}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-red-100/70 sm:text-lg">
                    {section.description}
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={BUSINESS.phoneLink}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-red-700 px-6 py-3 text-base font-bold text-white shadow-lg shadow-red-950/50 transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#1a0505]"
                      aria-label={`Call for emergency plumbing at ${BUSINESS.phone}`}
                    >
                      <PhoneIcon className="h-4 w-4 flex-shrink-0" />
                      Call Now — {BUSINESS.phone}
                    </a>
                    <span className="text-sm text-red-200/60">
                      Licensed #{BUSINESS.license} &nbsp;·&nbsp; Insured &nbsp;·&nbsp; {BUSINESS.serviceArea}
                    </span>
                  </div>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {sectionServices.map((service) => (
                    <ServiceCard key={service.id} service={service} variant="featured" />
                  ))}
                </div>
              </div>
            </section>
          )
        }

        // --- Dark variant ---
        if (section.variant === 'dark') {
          return (
            <section
              key={section.anchorId}
              id={section.anchorId}
              aria-labelledby={`cat-heading-${section.anchorId}`}
              className="bg-[#111c2b] py-16 sm:py-20 lg:py-24"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader
                  title={section.label}
                  subtitle={section.description}
                  align="left"
                  light
                  className="mb-10"
                />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {sectionServices.map((service) => (
                    <ServiceCard key={service.id} service={service} variant="featured" />
                  ))}
                </div>
              </div>
            </section>
          )
        }

        // --- Standard (light) variant ---
        return (
          <section
            key={section.anchorId}
            id={section.anchorId}
            aria-labelledby={`cat-heading-${section.anchorId}`}
            className="bg-slate-50 py-16 sm:py-20 lg:py-24"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeader
                title={section.label}
                subtitle={section.description}
                align="left"
                className="mb-10"
              />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sectionServices.map((service) => (
                  <ServiceCard key={service.id} service={service} variant="default" />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ------------------------------------------------------------------ */}
      {/* 3. All services grid                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="all-services-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="All Services"
            subtitle={`${BUSINESS.name} provides ${SERVICES.length} distinct plumbing services for residential and commercial customers across the ${BUSINESS.serviceArea}.`}
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. Emergency callout                                                 */}
      {/* ------------------------------------------------------------------ */}
      <EmergencyCallout />

      {/* ------------------------------------------------------------------ */}
      {/* 5. Final CTA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <FinalCTA />
    </>
  )
}

// ---------------------------------------------------------------------------
// Local icon helpers
// ---------------------------------------------------------------------------

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-5 w-5'}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  )
}
