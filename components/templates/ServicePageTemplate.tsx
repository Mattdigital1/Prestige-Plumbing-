import Image from 'next/image'
import Link from 'next/link'
import { type Service } from '@/lib/config/services'
import { type ServiceDetails } from '@/lib/config/serviceDetails'
import { BUSINESS } from '@/lib/config/business'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import ServiceRequestForm from '@/components/forms/ServiceRequestForm'
import EmergencyCallout from '@/components/sections/EmergencyCallout'
import FinalCTA from '@/components/sections/FinalCTA'

// ── Why-choose bullet data ─────────────────────────────────────────────────────

const WHY_CHOOSE_BULLETS = [
  {
    heading: 'Licensed & Insured',
    body: `${BUSINESS.name} holds Mississippi plumbing license #${BUSINESS.license} and carries full liability insurance on every job.`,
  },
  {
    heading: 'Five Generations of Experience',
    body: `${BUSINESS.tagline}. That depth of knowledge informs how we approach every service call, from diagnosis through completion.`,
  },
  {
    heading: 'Honest, Upfront Communication',
    body: 'We explain what we find, what we recommend, and what it will cost — before any work begins. No surprises on the invoice.',
  },
  {
    heading: '24/7 Emergency Availability',
    body: 'Plumbing problems do not follow business hours. Our team is available around the clock for urgent situations across the Mississippi Gulf Coast.',
  },
]

// ── CheckIcon ─────────────────────────────────────────────────────────────────

function CheckCircleIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

type ServicePageTemplateProps = {
  service: Service
  details?: ServiceDetails
}

export default function ServicePageTemplate({ service, details }: ServicePageTemplateProps) {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#0d1b2a]"
        aria-labelledby="service-hero-heading"
      >
        {/* Background image */}
        <Image
          src={details?.heroImage ?? '/images/plumbing-tools.jpg'}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#0d1b2a]/80" />

        {/* Diagonal accent */}
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
                { label: 'Services', href: '/services' },
                { label: service.name },
              ]}
              className="[&_a]:text-blue-400 [&_a:hover]:text-blue-300 [&_span]:text-slate-400 [&_.text-slate-700]:text-slate-200"
            />
          </div>

          {/* Eyebrow */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
            {BUSINESS.serviceArea}
          </p>

          {/* H1 */}
          <h1
            id="service-hero-heading"
            className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {details?.heroH1 ?? service.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {service.shortDescription}
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#request-service"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Request This Service
            </a>
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

      {/* ── Service Description ───────────────────────────────────────────── */}
      <section
        className="bg-white py-14 sm:py-16 lg:py-20"
        aria-labelledby="service-description-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                About This Service
              </p>
              <h2
                id="service-description-heading"
                className="text-3xl font-extrabold leading-tight tracking-tight text-[#0d1b2a] sm:text-4xl"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                {service.name} from {BUSINESS.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {service.longDescription}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {BUSINESS.shortDescription} We serve residential and commercial customers
                throughout the {BUSINESS.serviceArea} and are available 24/7 for emergencies.
              </p>
            </div>

            {/* Why choose us */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Why Choose {BUSINESS.name}
              </p>
              <ul className="space-y-5" role="list">
                {WHY_CHOOSE_BULLETS.map(({ heading, body }) => (
                  <li key={heading} className="flex items-start gap-3">
                    <CheckCircleIcon />
                    <div>
                      <p className="text-sm font-semibold text-[#0d1b2a]">{heading}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ──────────────────────────────────────────────── */}
      {details?.includes && (
        <section
          className="bg-slate-50 py-14 sm:py-16 lg:py-20"
          aria-labelledby="service-includes-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Scope of Work
            </p>
            <h2
              id="service-includes-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#0d1b2a] sm:text-4xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              What&rsquo;s Included
            </h2>
            <ul
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
              role="list"
            >
              {details.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <CheckCircleIcon />
                  <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      {details?.faqs && (
        <section
          className="bg-white py-14 sm:py-16 lg:py-20"
          aria-labelledby="service-faq-heading"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Common Questions
            </p>
            <h2
              id="service-faq-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#0d1b2a] sm:text-4xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Frequently Asked Questions
            </h2>
            <dl className="mt-10 divide-y divide-slate-200">
              {details.faqs.map(({ q, a }) => (
                <div key={q} className="py-6 first:pt-0 last:pb-0">
                  <dt className="text-base font-bold text-[#0d1b2a]">{q}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-slate-600">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Request Service Form ──────────────────────────────────────────── */}
      <section
        id="request-service"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
        aria-labelledby="service-form-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form intro */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Get Started
              </p>
              <h2
                id="service-form-heading"
                className="text-3xl font-extrabold leading-tight tracking-tight text-[#0d1b2a] sm:text-4xl"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Request {service.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Fill out the form and a member of our team will be in touch shortly. For immediate
                assistance, call us directly at{' '}
                <a
                  href={BUSINESS.phoneLink}
                  className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {BUSINESS.phone}
                </a>
                .
              </p>

              {/* Quick trust signals */}
              <div className="mt-8 space-y-3">
                {[
                  'Free estimates on all jobs',
                  'Licensed plumbers on every call',
                  'Available 24/7 for emergencies',
                  'Serving the full Mississippi Gulf Coast',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircleIcon />
                    <span className="text-sm text-slate-700">{point}</span>
                  </div>
                ))}
              </div>

              {/* Direct contact */}
              <div className="mt-8 rounded-lg border border-slate-200 bg-white px-5 py-5">
                <p className="text-sm font-semibold text-[#0d1b2a]">Prefer to call?</p>
                <a
                  href={BUSINESS.phoneLink}
                  className="mt-2 inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label={`Call Prestige Plumbing at ${BUSINESS.phone}`}
                >
                  <PhoneIcon />
                  {BUSINESS.phone}
                </a>
                <p className="mt-1 text-xs text-slate-500">{BUSINESS.hours}</p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-lg border border-slate-200 bg-white px-6 py-8 shadow-sm">
              <ServiceRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services ──────────────────────────────────────────────── */}
      <section
        className="bg-white py-14 sm:py-16"
        aria-labelledby="related-services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
                More From Us
              </p>
              <h2
                id="related-services-heading"
                className="text-2xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-3xl"
              >
                Explore All Our Services
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                {BUSINESS.name} provides a comprehensive range of plumbing services for homes and
                businesses across the {BUSINESS.serviceArea}.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              View All Services
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service Areas ─────────────────────────────────────────────────── */}
      <section
        className="bg-slate-50 py-14 sm:py-16"
        aria-labelledby="service-areas-cta-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Coverage
              </p>
              <h2
                id="service-areas-cta-heading"
                className="text-2xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-3xl"
              >
                We Serve the Full Gulf Coast
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                From Biloxi and Gulfport to Ocean Springs, Bay St. Louis, and beyond — {BUSINESS.name} serves
                communities throughout South Mississippi.
              </p>
            </div>
            <Link
              href="/service-areas"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              View All Service Areas
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Emergency Callout ─────────────────────────────────────────────── */}
      <EmergencyCallout />

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <FinalCTA />

    </>
  )
}

// ── Icon helpers ──────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
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

function ArrowRightIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}
