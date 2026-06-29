import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import EmergencyCallout from '@/components/sections/EmergencyCallout'
import FinalCTA from '@/components/sections/FinalCTA'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

import { BUSINESS } from '@/lib/config/business'
import { SERVICE_AREAS, FEATURED_AREAS } from '@/lib/config/serviceAreas'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Service Areas | Prestige Plumbing LLC | Mississippi Gulf Coast',
  description:
    'Prestige Plumbing LLC serves Biloxi, Ocean Springs, Gulfport, Bay St. Louis, Vancleave, and all communities across the Mississippi Gulf Coast.',
  alternates: {
    canonical: '/service-areas',
  },
  openGraph: {
    title: 'Service Areas | Prestige Plumbing LLC | Mississippi Gulf Coast',
    description:
      'Prestige Plumbing LLC serves Biloxi, Ocean Springs, Gulfport, Bay St. Louis, Vancleave, and all communities across the Mississippi Gulf Coast.',
    url: `${BUSINESS.siteUrl}/service-areas`,
    siteName: BUSINESS.name,
    locale: 'en_US',
    type: 'website',
  },
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const KEY_SERVICES = [
  '24/7 Emergency Plumbing',
  'Residential Plumbing',
  'Commercial Plumbing',
  'Water Heater Installation & Repair',
  'Pipe Repair & Drain Service',
]

// Areas that are NOT featured
const OTHER_AREAS = SERVICE_AREAS.filter((a) => !a.featured)

// ---------------------------------------------------------------------------
// Structured data
// ---------------------------------------------------------------------------

function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BUSINESS.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Service Areas',
        item: `${BUSINESS.siteUrl}/service-areas`,
      },
    ],
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ServiceAreasPage() {
  const breadcrumbSchema = getBreadcrumbSchema()

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* 1. Page header                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#0d1b2a] pb-12 pt-10 sm:pb-14 sm:pt-12">
        <Image
          src="/images/commercial-construction.jpg"
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
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: 'Service Areas' }]}
              className="[&_a]:text-blue-400 [&_a:hover]:text-blue-300 [&_span]:text-slate-400 [&_.font-medium]:text-slate-200"
            />
          </div>

          {/* Eyebrow */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
            Mississippi Gulf Coast
          </p>

          {/* H1 */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Plumbing Service Areas
          </h1>

          {/* Lead copy */}
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            {BUSINESS.name} proudly serves homeowners, businesses, contractors, and property
            owners throughout Biloxi and the surrounding Mississippi Gulf Coast. From Harrison
            County to Jackson County and Hancock County, our licensed plumbers are never far away.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. All service areas quick-navigation grid                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-slate-50 py-12 sm:py-14" aria-labelledby="all-areas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="all-areas-heading"
            className="mb-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            All Service Areas
          </h2>
          <p className="mb-8 text-base text-slate-600">
            Jump to any community below for details on local plumbing services.
          </p>

          {/* Featured areas — larger emphasis */}
          <div className="mb-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Primary Service Areas
            </p>
            <div className="flex flex-wrap gap-3">
              {FEATURED_AREAS.map((area) => (
                <Link
                  key={area.id}
                  href={`/service-areas/${area.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <MapPinIcon className="h-3.5 w-3.5 flex-shrink-0" />
                  {area.name}, {area.state}
                </Link>
              ))}
            </div>
          </div>

          {/* All other areas — subtler pills */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Additional Communities
            </p>
            <div className="flex flex-wrap gap-2.5">
              {OTHER_AREAS.map((area) => (
                <Link
                  key={area.id}
                  href={`/service-areas/${area.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-700"
                >
                  {area.name}, {area.state}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. Featured city sections                                           */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-white">
        {FEATURED_AREAS.map((area, index) => {
          const isAlternate = index % 2 !== 0
          return (
            <section
              key={area.id}
              id={area.id}
              className={`py-14 sm:py-16 lg:py-20 scroll-mt-20 ${isAlternate ? 'bg-slate-50' : 'bg-white'}`}
              aria-labelledby={`heading-${area.id}`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Left column */}
                  <div>
                    {/* County badge */}
                    <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
                      <MapPinIcon className="h-3 w-3" />
                      {area.county}
                    </span>

                    {/* H2 */}
                    <h2
                      id={`heading-${area.id}`}
                      className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
                    >
                      Plumber in {area.name}, MS
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                      {area.description}
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/service-areas/${area.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
                      >
                        View {area.name} Page
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/request-service"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Request Service in {area.name}
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right column — key services */}
                  <div className="mt-10 lg:mt-0">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                        Plumbing Services in {area.name}
                      </h3>
                      <ul className="mt-5 space-y-3" role="list">
                        {KEY_SERVICES.map((service) => (
                          <li key={service} className="flex items-start gap-3">
                            <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                            <span className="text-sm text-slate-700 sm:text-base">{service}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 border-t border-slate-200 pt-5">
                        <p className="text-xs text-slate-500">
                          Licensed #{BUSINESS.license} &bull; Fully Insured &bull; Free Estimates
                        </p>
                        <a
                          href={BUSINESS.phoneLink}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-600"
                          aria-label={`Call ${BUSINESS.name} for plumbing in ${area.name}`}
                        >
                          <PhoneIcon className="h-4 w-4" />
                          {BUSINESS.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 4. Other service areas list                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0d1b2a] py-14 sm:py-16" aria-labelledby="other-areas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
                Additional Coverage
              </p>
              <h2
                id="other-areas-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                We Also Serve These Communities
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                In addition to our primary service cities, {BUSINESS.name} provides plumbing
                service throughout the following Mississippi Gulf Coast communities. Contact us to
                confirm availability in your specific area.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <ul className="space-y-4" role="list">
                {OTHER_AREAS.map((area) => (
                  <li key={area.id} className="flex items-start gap-3">
                    <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <div>
                      <Link
                        href={`/service-areas/${area.slug}`}
                        className="font-semibold text-white hover:text-blue-300 transition-colors"
                      >
                        {area.name}, {area.state}
                      </Link>
                      <span className="ml-2 text-sm text-slate-400">— {area.county}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/request-service"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Request Service
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. Service-area business notice                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y border-slate-200 bg-amber-50 py-8" aria-label="Service notice">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:text-left sm:items-start">
            <InfoIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600 sm:mt-1" />
            <p className="text-sm leading-relaxed text-amber-900 sm:text-base">
              <strong>{BUSINESS.name} is a service-area business.</strong> Our team comes to
              you — we do not have walk-in office locations. We travel throughout Biloxi and the
              Mississippi Gulf Coast to serve our customers on-site.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6 & 7. Emergency callout + Final CTA                               */}
      {/* ------------------------------------------------------------------ */}
      <EmergencyCallout />
      <FinalCTA />
    </>
  )
}

// ---------------------------------------------------------------------------
// Inline SVG icon helpers (keep page self-contained, no icon library needed)
// ---------------------------------------------------------------------------

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"
      />
    </svg>
  )
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  )
}
