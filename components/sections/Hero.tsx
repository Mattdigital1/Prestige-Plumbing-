import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS } from '@/lib/config/business'
import TrustBadges from '@/components/ui/TrustBadges'
import GHLForm from '@/components/ui/GHLForm'

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      className="relative bg-[#0d1b2a] overflow-hidden"
      aria-label="Homepage hero"
    >
      {/* Background image */}
      <Image
        src="/images/plumber-wrench.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={80}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#0d1b2a]/80" />

      {/* Background gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(30,58,95,0.55) 0%, transparent 70%)',
        }}
      />

      {/* Subtle diagonal texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 50%)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Left accent bar */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-blue-600" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: copy ── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              {BUSINESS.tagline} &mdash; 24/7 Emergency Response
            </p>

            {/* H1 */}
            <h1
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              New Construction, Remodels &amp; Emergency Plumbing on the{' '}
              <span className="text-blue-400">Mississippi Gulf Coast</span>
            </h1>

            {/* Supporting copy */}
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {BUSINESS.shortDescription}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-service"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-blue-700 active:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1b2a]"
              >
                Request Service
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/25 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-colors duration-150 hover:border-white/50 hover:bg-white/5 active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1b2a]"
                aria-label={`Call us at ${BUSINESS.phone}`}
              >
                <svg
                  className="h-4 w-4 flex-shrink-0"
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
                Call {BUSINESS.phone}
              </a>
            </div>

            {/* Trust badges */}
            <TrustBadges />
          </div>

          {/* ── Right: quote form ── */}
          <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
            <div className="bg-[#1e3a5f] px-6 py-5">
              <h2 className="text-lg font-bold text-white">Get a Free Estimate</h2>
              <p className="mt-0.5 text-sm text-slate-300">
                Fill out the form or call{' '}
                <a href={BUSINESS.phoneLink} className="font-semibold text-blue-300 hover:text-blue-200">
                  {BUSINESS.phone}
                </a>
              </p>
            </div>
            <div className="bg-white">
              <GHLForm instanceId="inline-Gv4w0P5hFGGrQTL5Qcbe-hero" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
