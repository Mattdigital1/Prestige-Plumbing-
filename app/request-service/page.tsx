import type { Metadata } from 'next'
import Link from 'next/link'

import { BUSINESS } from '@/lib/config/business'
import ServiceRequestForm from '@/components/forms/ServiceRequestForm'
import EmergencyCallout from '@/components/sections/EmergencyCallout'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Request Plumbing Service | Prestige Plumbing LLC',
  description:
    'Request plumbing service from Prestige Plumbing LLC. Fill out our form or call (228) 327-6151. Emergency service available 24/7 across the Mississippi Gulf Coast.',
  alternates: {
    canonical: '/request-service',
  },
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RequestServicePage() {
  return (
    <>
      {/* ── Page Header ──────────────────────────────────────────────────────── */}
      <section className="bg-[#0d1b2a] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                Request Service
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Request Plumbing Service
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Complete the form below and our team will contact you to discuss your plumbing needs.
            For immediate assistance, call{' '}
            <a
              href={BUSINESS.phoneLink}
              className="font-semibold text-white underline decoration-white/40 underline-offset-2 transition-colors hover:decoration-white focus:outline-none focus-visible:decoration-white"
            >
              {BUSINESS.phone}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Form + Sidebar ────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16" aria-label="Service request">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            {/* LEFT — Form (2/3) */}
            <div className="lg:col-span-2">
              <ServiceRequestForm />
            </div>

            {/* RIGHT — Sidebar (1/3) */}
            <aside aria-label="Contact information" className="flex flex-col gap-6">
              {/* Immediate help card */}
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-[#0d1b2a]">
                  Need Immediate Help?
                </h2>

                {/* Large call button */}
                <a
                  href={BUSINESS.phoneLink}
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-blue-700 px-5 py-4 text-xl font-extrabold tracking-tight text-white shadow-md transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  aria-label={`Call Prestige Plumbing at ${BUSINESS.phone}`}
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  {BUSINESS.phone}
                </a>

                {/* Hours */}
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-slate-400"
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
                  <span>
                    <strong className="font-semibold text-[#0d1b2a]">{BUSINESS.hours}</strong>
                    {' '}— including weekends &amp; holidays
                  </span>
                </div>

                {/* Emergency note */}
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  For plumbing emergencies, please call directly rather than submitting a form.
                  We answer immediately, day or night.
                </p>
              </div>

              {/* Trust badges */}
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Why Prestige Plumbing
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {[
                    {
                      label: 'Licensed Plumber',
                      detail: `License #${BUSINESS.license}`,
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      ),
                    },
                    {
                      label: 'Fully Insured',
                      detail: 'Protected for every job',
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ),
                    },
                    {
                      label: 'Free Estimates',
                      detail: 'No-surprise pricing',
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ),
                    },
                    {
                      label: '5th-Generation Family Business',
                      detail: BUSINESS.tagline,
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      ),
                    },
                    {
                      label: '24/7 Emergency Service',
                      detail: 'Always available when you need us',
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                      ),
                    },
                  ].map(({ label, detail, icon }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-4 w-4 text-blue-700"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          {icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0d1b2a]">{label}</p>
                        <p className="text-xs text-slate-500">{detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Emergency Callout ─────────────────────────────────────────────────── */}
      <EmergencyCallout />
    </>
  )
}
