import Link from 'next/link'
import { FEATURED_SERVICES } from '@/lib/config/services'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ServicesOverview() {
  return (
    <section
      className="bg-gray-50 py-16 sm:py-20 lg:py-24"
      aria-label="Our plumbing services"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Plumbing Services"
            subtitle="From emergency repairs to new construction, we provide the full range of residential and commercial plumbing services throughout the Mississippi Gulf Coast."
            align="center"
          />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} variant="default" />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border-2 border-[#1e3a5f] bg-transparent px-7 py-3.5 text-base font-semibold text-[#1e3a5f] transition-colors duration-150 hover:bg-[#1e3a5f] hover:text-white active:bg-[#0d1b2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            View All Services
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
        </div>

      </div>
    </section>
  )
}
