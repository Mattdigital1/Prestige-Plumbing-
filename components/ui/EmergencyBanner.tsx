import Link from 'next/link'
import type { CSSProperties } from 'react'
import { BUSINESS } from '@/lib/config/business'

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M6.01 3.17a1.5 1.5 0 0 0-2.14.08L2.5 4.72C1.83 5.47 1.6 6.5 1.88 7.45c1.07 3.58 3.06 6.85 5.97 9.76 2.91 2.91 6.18 4.9 9.76 5.97.95.28 1.98.05 2.73-.62l1.47-1.37a1.5 1.5 0 0 0 .08-2.14l-2.2-2.36a1.5 1.5 0 0 0-1.96-.2l-1.71 1.2a.75.75 0 0 1-.85.02 18.25 18.25 0 0 1-5.63-5.63.75.75 0 0 1 .02-.85l1.2-1.71a1.5 1.5 0 0 0-.2-1.96L6.01 3.17Z"
        fill="currentColor"
      />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M14 2.5L25.5 23H2.5L14 2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="20.5" r="1.25" fill="currentColor" />
    </svg>
  )
}

export function EmergencyBanner() {
  return (
    <div
      role="banner"
      aria-label="Emergency plumbing service"
      className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-600"
    >
      {/* Subtle texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left sm:justify-between">
          {/* Left: Icon + text */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
            <div className="text-orange-200 mt-0.5">
              <AlertIcon />
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl" style={{ textWrap: 'balance' } as CSSProperties}>
                Plumbing Emergency? We Are Available 24/7
              </h2>
              <p className="mt-1 text-sm text-red-100 sm:text-base">
                Burst pipes, flooding, or no hot water — our licensed plumbers respond immediately,
                day or night, across the Mississippi Gulf Coast.
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="shrink-0">
            <Link
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2.5 rounded-md bg-white px-6 py-3.5 text-lg font-bold text-red-700 shadow-md transition-colors duration-150 hover:bg-red-50 active:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600 whitespace-nowrap"
              aria-label={`Call us now at ${BUSINESS.phone}`}
            >
              <PhoneIcon />
              Call {BUSINESS.phone}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmergencyBanner
