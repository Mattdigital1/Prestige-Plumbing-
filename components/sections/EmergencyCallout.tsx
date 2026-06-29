import Link from 'next/link'
import { BUSINESS } from '@/lib/config/business'

const STANDARDS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: '24/7 Emergency Response',
    description: 'We respond around the clock — nights, weekends, and holidays. Burst pipes and sewer backups can\'t wait, and neither do we.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast On-Site Arrival',
    description: 'Our licensed plumbers are dispatched immediately across the full Mississippi Gulf Coast — Biloxi, Gulfport, Ocean Springs, and beyond.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: 'Call First, We\'ll Guide You',
    description: 'Not sure what to do? Call us right now. We\'ll walk you through shutting off water, isolating the problem, and minimizing damage until we arrive.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Licensed & Insured',
    description: 'Every emergency call is handled by a licensed Mississippi plumber. MS License #19086. Fully insured so you\'re protected on every job.',
  },
]

export default function EmergencyCallout() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="emergency-heading"
      id="emergency"
      style={{ background: '#1e3a5f' }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(37,99,235,.15) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.14em] text-blue-300">
            24/7 Emergency Plumbing — Mississippi Gulf Coast
          </p>
          <h2
            id="emergency-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Plumbing Emergency? We Respond Immediately.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Burst pipes, sewage backups, flooding, and water heater failures can&rsquo;t wait for business hours.
            Our licensed plumbers are available day or night across the full Mississippi Gulf Coast.
          </p>
        </div>

        {/* Standards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STANDARDS.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/10 p-6 text-center"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg text-blue-300" style={{ background: 'rgba(37,99,235,0.3)' }}>
                {s.icon}
              </div>
              <p className="mb-2 text-sm font-bold text-white">{s.title}</p>
              <p className="text-xs leading-relaxed text-slate-400">{s.description}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BUSINESS.phoneLink}
            className="inline-flex items-center gap-2.5 rounded-md bg-blue-600 px-7 py-4 text-xl font-extrabold tracking-tight text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#1e3a5f]"
            aria-label={`Call Prestige Plumbing for emergencies at ${BUSINESS.phone}`}
          >
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/emergency"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-4 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#1e3a5f]"
          >
            Emergency guide &amp; what to do
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
