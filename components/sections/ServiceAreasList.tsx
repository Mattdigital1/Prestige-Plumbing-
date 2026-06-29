import Link from 'next/link'
import { SERVICE_AREAS } from '@/lib/config/serviceAreas'

function MapPinIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 flex-shrink-0 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  )
}

export default function ServiceAreasList() {
  return (
    <section
      className="bg-slate-50"
      aria-labelledby="service-areas-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Where We Work
          </p>
          <h2
            id="service-areas-heading"
            className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Serving the Mississippi Gulf Coast
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Prestige Plumbing LLC proudly serves homeowners, businesses, contractors, and property
            owners throughout Biloxi and the surrounding Mississippi Gulf Coast. If you&rsquo;re
            not sure if we cover your area, give us a call — we&rsquo;ll let you know.
          </p>
        </div>

        {/* Service area pill grid */}
        <ul
          className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          aria-label="Service areas list"
        >
          {SERVICE_AREAS.map((area) => (
            <li key={area.id}>
              <Link
                href={`/service-areas/${area.slug}`}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <MapPinIcon />
                <span>{area.name}, {area.state}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            View full service area details
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
