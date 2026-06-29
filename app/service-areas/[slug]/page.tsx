import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { SERVICE_AREAS } from '@/lib/config/serviceAreas'
import { BUSINESS } from '@/lib/config/business'
import { getLocalBusinessSchema, getFAQSchema } from '@/lib/schema/structured-data'
import CityPageTemplate from '@/components/templates/CityPageTemplate'

// Pre-generate all city pages at build time
export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }))
}

// Per-city SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = SERVICE_AREAS.find((a) => a.slug === slug)

  if (!area) {
    return {
      title: 'Service Area Not Found | Prestige Plumbing LLC',
    }
  }

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: {
      canonical: `/service-areas/${slug}`,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      url: `${BUSINESS.siteUrl}/service-areas/${slug}`,
      siteName: BUSINESS.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: area.seoTitle,
      description: area.seoDescription,
    },
  }
}

const CITY_FAQS = (cityName: string, county: string) => [
  {
    question: `Does Prestige Plumbing LLC serve ${cityName}, MS?`,
    answer: `Yes. Prestige Plumbing LLC provides residential, commercial, and emergency plumbing throughout ${cityName} and all of ${county}. Call (228) 327-6151 or submit a service request online.`,
  },
  {
    question: `Do you offer 24/7 emergency plumbing in ${cityName}?`,
    answer: `Yes. We respond to plumbing emergencies in ${cityName} at any hour — including nights, weekends, and holidays. For urgent issues like burst pipes, sewage backups, or flooding, call us immediately at (228) 327-6151.`,
  },
  {
    question: `Are you licensed to do plumbing work in ${cityName}, Mississippi?`,
    answer: `Yes. Prestige Plumbing LLC holds Mississippi plumbing license #19086 and is fully insured. All work in ${cityName} meets Mississippi state and local building codes.`,
  },
  {
    question: `What plumbing services do you offer in ${cityName}?`,
    answer: `We provide a full range of services in ${cityName}: residential plumbing repairs and installations, commercial plumbing, new construction rough-in, water heater repair and replacement, drain cleaning, pipe repair, leak detection, and 24/7 emergency response.`,
  },
  {
    question: `How do I get a free estimate for plumbing work in ${cityName}?`,
    answer: `Call us at (228) 327-6151 or use the service request form on our website. We offer free estimates for residential and commercial plumbing projects throughout ${cityName} and ${county}.`,
  },
]

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = SERVICE_AREAS.find((a) => a.slug === slug)

  if (!area) {
    notFound()
  }

  // City-specific LocalBusiness schema
  const schema = {
    ...getLocalBusinessSchema(),
    areaServed: `${area.name}, ${area.state}`,
  }

  const faqSchema = getFAQSchema(CITY_FAQS(area.name, area.county))

  return (
    <>
      {/* JSON-LD structured data for this city page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CityPageTemplate area={area} />
    </>
  )
}
