import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/config/business'

const residentialServices = [
  'Water heater repair & installation',
  'Fixture installation & replacement',
  'Leak detection & repair',
  'Bathroom & kitchen plumbing',
  'Drain cleaning & clearing',
]

const commercialServices = [
  'Code-compliant commercial installations',
  'Tenant improvements & build-outs',
  'Restaurants, offices & retail plumbing',
  'Maintenance contracts & service agreements',
  'Backflow prevention & inspections',
]

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg
      className="h-6 w-6 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg
      className="h-6 w-6 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15l-.75 18H5.25L4.5 3zM9 3v18M15 3v18M4.5 9h15M4.5 15h15"
      />
    </svg>
  )
}

export default function ResidentialCommercial() {
  return (
    <section
      className="bg-white"
      aria-labelledby="res-comm-heading"
    >
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </p>
          <h2
            id="res-comm-heading"
            className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Residential &amp; Commercial Plumbing
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            {BUSINESS.name} delivers dependable plumbing solutions for homeowners and businesses
            throughout the Mississippi Gulf Coast.
          </p>
        </div>
      </div>

      {/* Two-card grid */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Residential Card ── */}
          <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
            <div className="relative h-52 overflow-hidden">
              <Image
                src="/images/plumbing-tools.jpg"
                alt="Plumbing tools and equipment for residential plumbing service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Card body */}
            <div className="p-7">
              <div className="mb-4 flex items-center gap-2.5">
                <HomeIcon />
                <h3 className="text-xl font-bold text-[#0d1b2a]">Residential Plumbing</h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">
                From routine repairs to full bathroom renovations, we handle every plumbing need
                in your home. Our licensed plumbers work clean, communicate clearly, and stand
                behind every job.
              </p>
              <ul className="mb-7 space-y-2.5">
                {residentialServices.map((service) => (
                  <li key={service} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    {service}
                  </li>
                ))}
              </ul>
              <Link
                href="/request-service"
                className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Request Service
              </Link>
            </div>
          </div>

          {/* ── Commercial Card ── */}
          <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
            <div className="relative h-52 overflow-hidden">
              <Image
                src="/images/commercial-pipes.jpg"
                alt="Commercial plumbing pipe system with valves and pressure gauges"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Card body */}
            <div className="p-7">
              <div className="mb-4 flex items-center gap-2.5">
                <BuildingIcon />
                <h3 className="text-xl font-bold text-[#0d1b2a]">Commercial Plumbing</h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">
                We partner with property managers, contractors, and business owners to deliver
                commercial plumbing that meets code, stays on schedule, and keeps operations
                running without interruption.
              </p>
              <ul className="mb-7 space-y-2.5">
                {commercialServices.map((service) => (
                  <li key={service} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    {service}
                  </li>
                ))}
              </ul>
              <Link
                href="/request-service"
                className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Request Service
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
