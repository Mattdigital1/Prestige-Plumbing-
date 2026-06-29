import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS, FOOTER_LINKS, NAV_LINKS } from '@/lib/config/business'

// Remap service-area anchor links to proper /service-areas/[slug] routes
const SERVICE_AREA_LINKS = [
  { label: 'Biloxi', href: '/service-areas/biloxi' },
  { label: 'Ocean Springs', href: '/service-areas/ocean-springs' },
  { label: 'Gulfport', href: '/service-areas/gulfport' },
  { label: 'Bay St. Louis', href: '/service-areas/bay-st-louis' },
  { label: 'Vancleave', href: '/service-areas/vancleave' },
  { label: "D'Iberville", href: '/service-areas/diberville' },
  { label: 'Gautier', href: '/service-areas/gautier' },
  { label: 'Pascagoula', href: '/service-areas/pascagoula' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200">
      {/* Emergency banner strip */}
      <div className="bg-[#0d1b2a]">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center text-sm sm:px-6 lg:px-8">
          <span className="font-semibold text-white">24/7 Emergency Plumbing</span>
          <span className="mx-2 text-slate-400">—</span>
          <a
            href={BUSINESS.phoneLink}
            className="font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main footer grid — 4 columns on lg, 2 on md, 1 on mobile */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* ── Column 1: Brand / Contact ── */}
          <div className="space-y-5">
            <Image
              src="/logo.png"
              alt="Prestige Plumbing LLC"
              width={200}
              height={120}
              className="h-20 w-auto"
            />

            <p className="text-sm leading-relaxed text-slate-500">
              {BUSINESS.tagline} — serving the Mississippi Gulf Coast with residential,
              commercial, and 24-hour emergency plumbing.
            </p>

            {/* Contact details */}
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <PhoneIcon />
                <a
                  href={BUSINESS.phoneLink}
                  className="font-semibold text-[#0d1b2a] hover:text-blue-600 transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <EmailIcon />
                <a
                  href={BUSINESS.emailLink}
                  className="break-all text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon />
                <span className="text-slate-600">{BUSINESS.hours}</span>
              </li>
            </ul>

            {/* License / insured badge */}
            <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">
              <ShieldIcon />
              <span>Licensed &amp; Insured | License #{BUSINESS.license}</span>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ── */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Services
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Service Areas + Hours ── */}
          <div>
            {/* Service Areas */}
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-1">
              {SERVICE_AREA_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 mb-6">
              <Link
                href="/service-areas"
                className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors underline underline-offset-2"
              >
                View all service areas &rarr;
              </Link>
            </div>

            {/* Hours */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Hours
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ClockIcon />
                  <span className="text-slate-600">
                    <span className="font-medium text-[#0d1b2a]">Monday – Sunday:</span>{' '}
                    Open 24 Hours
                  </span>
                </li>
                <li className="text-slate-500 text-xs leading-relaxed pt-1">
                  Emergency service available at all hours
                </li>
                <li className="text-slate-500 text-xs leading-relaxed">
                  Call{' '}
                  <a
                    href={BUSINESS.phoneLink}
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    {BUSINESS.phone}
                  </a>{' '}
                  for immediate response
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            {/* Copyright */}
            <p className="text-xs text-slate-400">
              &copy; {currentYear} {BUSINESS.name}. All rights reserved.
            </p>

            {/* Privacy link */}
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-400 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-3 text-center text-xs leading-relaxed text-slate-400">
            Prestige Plumbing LLC is a service-area business serving communities throughout the
            Mississippi Gulf Coast.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ── Inline SVG icon helpers (no external dependency) ── */

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-blue-600"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 .82h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-blue-600"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-blue-600"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
