import Image from 'next/image'
import Link from 'next/link'
import { type ServiceArea, SERVICE_AREAS } from '@/lib/config/serviceAreas'
import { BUSINESS } from '@/lib/config/business'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import QuickQuoteForm from '@/components/sections/QuickQuoteForm'
import ThreeStepProcess from '@/components/sections/ThreeStepProcess'
import EmergencyCallout from '@/components/sections/EmergencyCallout'
import FeaturedGallery from '@/components/sections/FeaturedGallery'
import ReviewsSection from '@/components/sections/ReviewsSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

// ── Trust badge data ──────────────────────────────────────────────────────────

const TRUST_BADGES = [
  {
    label: 'Licensed & Insured',
    detail: `MS License #${BUSINESS.license}`,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: 'Family Owned',
    detail: BUSINESS.tagline,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: '24/7 Emergency',
    detail: 'Available day and night',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    label: 'Free Estimates',
    detail: 'No cost to get a quote',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
]

// ── Services list ─────────────────────────────────────────────────────────────

const SERVICES_LIST = [
  'Emergency Plumbing',
  'Residential Plumbing',
  'Commercial Plumbing',
  'New Construction',
  'Water Heater Installation & Repair',
  'Plumbing Remodels',
  'Pipe Repair & Replacement',
  'Drain & Sewer Service',
]

// ── Component ─────────────────────────────────────────────────────────────────

type CityPageTemplateProps = {
  area: ServiceArea
}

export default function CityPageTemplate({ area }: CityPageTemplateProps) {
  const otherAreas = SERVICE_AREAS.filter((a) => a.id !== area.id)

  return (
    <>

      {/* ── 1. Hero ───────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#0d1b2a]"
        aria-labelledby="city-hero-heading"
      >
        {/* Background image */}
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

        {/* Background gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(135deg, #1e3a5f 0%, transparent 55%), linear-gradient(to right, #0d1b2a 0%, #0f2035 100%)',
          }}
        />
        {/* Left edge accent */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-blue-600"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: `${area.name}, ${area.state}` },
              ]}
              className="[&_a]:text-blue-400 [&_a:hover]:text-blue-300 [&_span]:text-slate-400 [&_.text-slate-700]:text-slate-200"
            />
          </div>

          {/* Eyebrow */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
            {area.county} &mdash; {area.state}
          </p>

          {/* H1 */}
          <h1
            id="city-hero-heading"
            className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Plumber in {area.name}, MS
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {BUSINESS.name} &mdash; licensed, insured, and ready to serve {area.name} and {area.county}.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href={`/request-service?city=${area.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Request Service in {area.name}
            </Link>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              aria-label={`Call Prestige Plumbing at ${BUSINESS.phone}`}
            >
              <PhoneIcon />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Quick Quote Form (top) ─────────────────────────────────────── */}
      <QuickQuoteForm
        heading={`Request Service in ${area.name}`}
        subtext={`We serve ${area.name} and all of ${area.county}. Submit a request or call us now.`}
        darkBackground={false}
        instanceId="inline-Gv4w0P5hFGGrQTL5Qcbe-a"
      />

      {/* ── 3. Trust Badges ──────────────────────────────────────────────── */}
      <section
        className="bg-white py-12 sm:py-14"
        aria-labelledby="city-trust-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="city-trust-heading" className="sr-only">
            Why Choose Prestige Plumbing in {area.name}
          </h2>
          <ul
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            role="list"
          >
            {TRUST_BADGES.map(({ label, detail, icon }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0d1b2a]">{label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. About / Intro — two-column ────────────────────────────────── */}
      <section
        className="bg-white py-14 sm:py-16 lg:py-20"
        aria-labelledby="city-intro-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Left: text + services list */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Local Plumbing Service
              </p>
              <h2
                id="city-intro-heading"
                className="text-3xl font-extrabold leading-tight tracking-tight text-[#0d1b2a] sm:text-4xl"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Serving {area.name} &amp; {area.county}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {area.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Our licensed plumbers are familiar with the homes and infrastructure of {area.name}.
                Whether you need a same-day repair or a full plumbing installation, {BUSINESS.name}{' '}
                delivers the same professional standard on every job.
              </p>

              {/* Services list */}
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
                {SERVICES_LIST.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  View all services
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>

            {/* Right: image placeholder */}
            <div
              className="relative flex h-72 items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:h-80 lg:h-96"
              aria-hidden="true"
            >
              <div className="flex flex-col items-center gap-3 text-slate-400">
                <svg className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <p className="text-sm">Photo — {area.name} service area</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Three-Step Process ─────────────────────────────────────────── */}
      <ThreeStepProcess />

      {/* ── 6. Emergency Callout ──────────────────────────────────────────── */}
      <EmergencyCallout />

      {/* ── 7. Gallery ────────────────────────────────────────────────────── */}
      <FeaturedGallery />

      {/* ── 7. Reviews ────────────────────────────────────────────────────── */}
      <ReviewsSection />

      {/* ── 8. FAQ ────────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── 9. Other Service Areas ────────────────────────────────────────── */}
      <section
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
        aria-labelledby="other-cities-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Mississippi Gulf Coast
            </p>
            <h2
              id="other-cities-heading"
              className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Other Cities We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              {BUSINESS.name} provides plumbing service across the Mississippi Gulf Coast.
              Select a city to learn more about coverage in your area.
            </p>
          </div>

          <ul
            className="flex flex-wrap justify-center gap-3"
            role="list"
          >
            {otherAreas.map((other) => (
              <li key={other.id}>
                <Link
                  href={`/service-areas/${other.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  {other.name}, {other.state}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              View all service areas
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. Quick Quote Form (bottom, dark) ──────────────────────────── */}
      <QuickQuoteForm
        heading={`Request Plumbing Service in ${area.name}`}
        subtext={`Available 24/7 for emergencies throughout ${area.county}.`}
        darkBackground={true}
        instanceId="inline-Gv4w0P5hFGGrQTL5Qcbe-b"
      />

      {/* ── 11. Final CTA ─────────────────────────────────────────────────── */}
      <FinalCTA />

    </>
  )
}

// ── Icon helpers ──────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}
