import { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/config/business'
import { SERVICE_AREAS } from '@/lib/config/serviceAreas'
import { SERVICES } from '@/lib/config/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/emergency`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/service-areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/request-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES
    .filter((s) => s.slug !== 'emergency-plumbing')
    .map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }))

  const cityPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${base}/service-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...servicePages, ...cityPages]
}
