import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { SERVICES } from '@/lib/config/services'
import { SERVICE_DETAILS } from '@/lib/config/serviceDetails'
import { BUSINESS } from '@/lib/config/business'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

// ── Per-page metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}

  const details = SERVICE_DETAILS[slug]
  const description = details?.metaDescription ?? service.shortDescription

  return {
    title: `${service.name} | ${BUSINESS.name}`,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.name} | ${BUSINESS.name}`,
      description,
      url: `${BUSINESS.siteUrl}/services/${slug}`,
      siteName: BUSINESS.name,
      locale: 'en_US',
      type: 'website',
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) notFound()

  // The emergency slug has its own dedicated page
  if (service.id === 'emergency') redirect('/emergency')

  const details = SERVICE_DETAILS[slug]

  return <ServicePageTemplate service={service} details={details} />
}
