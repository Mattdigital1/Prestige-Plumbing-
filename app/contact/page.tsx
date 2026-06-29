import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { BUSINESS } from '@/lib/config/business'
import ServiceRequestForm from '@/components/forms/ServiceRequestForm'
import EmergencyCallout from '@/components/sections/EmergencyCallout'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Contact Prestige Plumbing LLC | (228) 327-6151',
  description:
    'Contact Prestige Plumbing LLC for plumbing service on the Mississippi Gulf Coast. Call (228) 327-6151 or submit a service request online. Available 24/7.',
  alternates: {
    canonical: '/contact',
  },
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d1b2a] py-12 sm:py-16">
        <Image
          src="/images/sink-drain-repair.jpg"
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
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white focus:outline-none focus-visible:text-white"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">
                /
              </li>
              <li className="text-slate-300" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Contact Prestige Plumbing LLC
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We are available 24 hours a day, 7 days a week for your plumbing needs.
          </p>
        </div>
      </section>

      {/* ── Contact Info Cards ────────────────────────────────────────────────── */}
      <section
        className="bg-white py-14 sm:py-16"
        aria-labelledby="contact-cards-heading"
      >
        <h2 id="contact-cards-heading" className="sr-only">
          Contact Information
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Card 1 — Phone */}
            <div className="flex flex-col items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
              {/* Icon */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100"
                aria-hidden="true"
              >
                <svg
                  className="h-5 w-5 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Call or Text
                </p>
                <a
                  href={BUSINESS.phoneLink}
                  className="mt-1 block text-2xl font-extrabold tracking-tight text-[#0d1b2a] transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
                  aria-label={`Call or text Prestige Plumbing at ${BUSINESS.phone}`}
                >
                  {BUSINESS.phone}
                </a>
                <p className="mt-2 text-sm text-slate-500">Available 24/7 for emergencies</p>
              </div>
            </div>

            {/* Card 2 — Email */}
            <div className="flex flex-col items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
              {/* Icon */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100"
                aria-hidden="true"
              >
                <svg
                  className="h-5 w-5 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Send an Email
                </p>
                <a
                  href={BUSINESS.emailLink}
                  className="mt-1 block break-all text-base font-semibold text-[#0d1b2a] transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
                >
                  {BUSINESS.email}
                </a>
                <p className="mt-2 text-sm text-slate-500">
                  We respond as quickly as possible — for urgent issues, please call.
                </p>
              </div>
            </div>

            {/* Card 3 — Hours & Area */}
            <div className="flex flex-col items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
              {/* Icon */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100"
                aria-hidden="true"
              >
                <svg
                  className="h-5 w-5 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Hours &amp; Service Area
                </p>
                <p className="mt-1 text-xl font-extrabold tracking-tight text-[#0d1b2a]">
                  {BUSINESS.hours}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Serving the {BUSINESS.serviceArea}
                </p>
              </div>
            </div>
          </div>

          {/* Service-area-only note */}
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p className="text-sm leading-relaxed text-amber-900">
              <strong className="font-semibold">Prestige Plumbing LLC is a service-area business.</strong>{' '}
              We come to you throughout the Mississippi Gulf Coast — we do not have a walk-in
              customer location.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Request Form ──────────────────────────────────────────────── */}
      <section
        className="bg-gray-900 py-14 sm:py-16"
        aria-labelledby="contact-form-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="contact-form-heading"
            className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Submit a Service Request
          </h2>
          <ServiceRequestForm darkBackground />
        </div>
      </section>

      {/* ── Emergency Callout ─────────────────────────────────────────────────── */}
      <EmergencyCallout />
    </>
  )
}
