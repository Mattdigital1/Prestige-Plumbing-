import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import Hero from '@/components/sections/Hero'
import GHLForm from '@/components/ui/GHLForm'
import QuickQuoteForm from '@/components/sections/QuickQuoteForm'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ServicesOverview from '@/components/sections/ServicesOverview'
import ThreeStepProcess from '@/components/sections/ThreeStepProcess'
import EmergencyCallout from '@/components/sections/EmergencyCallout'
import ResidentialCommercial from '@/components/sections/ResidentialCommercial'
import NewConstructionSection from '@/components/sections/NewConstructionSection'
import WaterHeatersSection from '@/components/sections/WaterHeatersSection'
import FeaturedGallery from '@/components/sections/FeaturedGallery'
import ReviewsSection from '@/components/sections/ReviewsSection'
import ServiceAreasList from '@/components/sections/ServiceAreasList'
import FinalCTA from '@/components/sections/FinalCTA'

const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), {
  ssr: true,
  loading: () => <div className="py-20 bg-white" aria-hidden="true" />,
})

import { BUSINESS } from '@/lib/config/business'

export const metadata: Metadata = {
  title: 'Prestige Plumbing LLC | New Construction, Remodels & Emergency Plumber — Biloxi, MS',
  description:
    'Prestige Plumbing LLC — 5th-generation family plumbers serving the Mississippi Gulf Coast. New construction, remodels, water heater repair, and 24/7 emergency plumbing in Biloxi, Gulfport, Ocean Springs & beyond. Free estimates. MS License #19086.',
  keywords: [
    'new construction plumber Mississippi',
    'plumbing remodels Biloxi MS',
    'emergency plumber Biloxi MS',
    'water heater repair Biloxi',
    'water heater installation Gulf Coast',
    'plumber Biloxi MS',
    'plumber Gulfport MS',
    'plumber Ocean Springs MS',
    'commercial plumber Mississippi Gulf Coast',
    'family owned plumber Mississippi',
  ],
  openGraph: {
    title: 'Prestige Plumbing LLC | New Construction, Remodels & Emergency Plumbing — Biloxi, MS',
    description:
      'Fifth-generation family plumbers on the Mississippi Gulf Coast. New construction, remodels, water heater service, and 24/7 emergency plumbing. Free estimates. Call (228) 327-6151.',
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* Mobile-only quote form — desktop sees form inside hero */}
      <section className="lg:hidden bg-[#1e3a5f] px-4 py-10">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-1 text-xl font-extrabold text-white text-center">Get a Free Estimate</h2>
          <p className="mb-6 text-sm text-slate-300 text-center">
            Fill out the form or call{' '}
            <a href={BUSINESS.phoneLink} className="font-semibold text-blue-300 hover:text-blue-200">
              {BUSINESS.phone}
            </a>
          </p>
          <div className="overflow-hidden rounded-xl bg-white">
            <GHLForm instanceId="inline-Gv4w0P5hFGGrQTL5Qcbe-mobile" />
          </div>
        </div>
      </section>

      {/* 2. About / founder — WhyChooseUs */}
      <WhyChooseUs />

      {/* 4. Services overview */}
      <ServicesOverview />

      {/* 5. How it works / process */}
      <ThreeStepProcess />

      {/* 6. Emergency callout */}
      <EmergencyCallout />

      {/* 7. Residential & Commercial */}
      <ResidentialCommercial />

      {/* 8. New Construction */}
      <NewConstructionSection />

      {/* 9. Water Heaters */}
      <WaterHeatersSection />

      {/* 10. Gallery */}
      <FeaturedGallery />

      {/* 11. Reviews */}
      <ReviewsSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. Service areas */}
      <ServiceAreasList />

      {/* 14. Second quick quote form — before footer */}
      <QuickQuoteForm
        heading="Request Plumbing Service"
        subtext="Fill out the form below or call us at (228) 327-6151."
        darkBackground={true}
        instanceId="inline-Gv4w0P5hFGGrQTL5Qcbe-b"
      />

      {/* 15. Final CTA */}
      <FinalCTA />
    </>
  )
}
