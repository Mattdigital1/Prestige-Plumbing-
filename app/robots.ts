import { MetadataRoute } from 'next';
import { BUSINESS } from '@/lib/config/business';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BUSINESS.siteUrl;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
