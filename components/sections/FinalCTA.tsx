import Link from 'next/link'
import { BUSINESS } from '@/lib/config/business'

export default function FinalCTA() {
  return (
    <section className="bg-[#0d1b2a] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
          {BUSINESS.serviceArea}
        </p>

        {/* Headline */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Get Started?
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Contact {BUSINESS.name} today for fast, professional plumbing service across
          the {BUSINESS.serviceArea}.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/request-service"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm
              transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
              w-full sm:w-auto"
          >
            Request Service
          </Link>
          <a
            href={BUSINESS.phoneLink}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-7 py-3.5 text-base font-semibold text-white
              transition-colors hover:bg-white hover:text-[#0d1b2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
              w-full sm:w-auto"
          >
            <PhoneIcon />
            Call {BUSINESS.phone}
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <span>Licensed #{BUSINESS.license}</span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-600">|</span>
          <span>Fully Insured</span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-600">|</span>
          <span>Free Estimates</span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-600">|</span>
          <span>24/7 Emergency Service</span>
        </div>

      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
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
