import Link from 'next/link'
import { BUSINESS } from '@/lib/config/business'

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden" role="navigation" aria-label="Mobile quick actions">
      {/* Call Now */}
      <a
        href={BUSINESS.phoneLink}
        aria-label={`Call us now at ${BUSINESS.phone}`}
        className="flex w-1/2 items-center justify-center gap-2 bg-blue-600 px-4 py-4 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
      >
        {/* Phone icon */}
        <svg
          className="h-5 w-5 flex-shrink-0"
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
        <span>Call Now</span>
      </a>

      {/* Divider */}
      <div className="w-px bg-white/20 flex-shrink-0" aria-hidden="true" />

      {/* Request Service */}
      <Link
        href="/request-service"
        className="flex w-1/2 items-center justify-center gap-2 bg-[#0d1b2a] px-4 py-4 text-sm font-semibold text-white hover:bg-slate-800 active:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
      >
        {/* Clipboard/form icon */}
        <svg
          className="h-5 w-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <span>Request Service</span>
      </Link>
    </div>
  )
}
