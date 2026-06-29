import { BUSINESS } from '@/lib/config/business'

const CTX = 'https://schema.org'

export function getLocalBusinessSchema() {
  return {
    '@context': CTX,
    '@type': ['LocalBusiness', 'Plumber'],
    '@id': `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    alternateName: 'Prestige Plumbing',
    description:
      'Prestige Plumbing LLC is a fifth-generation, family-owned plumbing company serving the Mississippi Gulf Coast. We provide residential, commercial, new construction, remodeling, water heater, and 24-hour emergency plumbing services.',
    slogan: 'Fifth-Generation Family Plumbers',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: BUSINESS.siteUrl,
    logo: `${BUSINESS.siteUrl}/logo.png`,
    image: `${BUSINESS.siteUrl}/logo.png`,
    founder: { '@type': 'Person', name: 'Jesse Richard' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.5760,
      longitude: -88.7081,
    },
    areaServed: [
      { '@type': 'City', name: 'Biloxi', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Ocean Springs', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Gulfport', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Bay St. Louis', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Vancleave', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: "D'Iberville", containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Pass Christian', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Long Beach', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Gautier', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Pascagoula', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
      { '@type': 'City', name: 'Waveland', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Plumbing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Plumbing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Plumbing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'New Construction Plumbing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Heater Installation & Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plumbing Remodels' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipe Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leak Detection & Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drain & Sewer Services' } },
      ],
    },
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    knowsAbout: [
      'Plumbing',
      'Emergency Plumbing',
      'Residential Plumbing',
      'Commercial Plumbing',
      'New Construction Plumbing',
      'Water Heater Repair',
      'Water Heater Installation',
      'Pipe Repair',
      'Leak Detection',
      'Drain Cleaning',
      'Sewer Services',
      'Bathroom Plumbing',
      'Kitchen Plumbing',
    ],
  }
}

export function getWebsiteSchema() {
  return {
    '@context': CTX,
    '@type': 'WebSite',
    '@id': `${BUSINESS.siteUrl}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    description:
      'Official website of Prestige Plumbing LLC — fifth-generation family plumbers serving the Mississippi Gulf Coast.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BUSINESS.siteUrl}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    '@context': CTX,
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.siteUrl,
    },
    areaServed: 'Mississippi Gulf Coast',
    serviceType: 'Plumbing',
  }
}

export function getBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': CTX,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.siteUrl}${item.href}`,
    })),
  }
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': CTX,
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

export function getLocalAreaSchema(cityName: string, slug: string) {
  return {
    '@context': CTX,
    '@type': ['LocalBusiness', 'Plumber'],
    name: `${BUSINESS.name} — ${cityName}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: `${BUSINESS.siteUrl}/service-areas/${slug}`,
    description: `Prestige Plumbing LLC provides residential, commercial, and emergency plumbing services in ${cityName}, MS.`,
    areaServed: { '@type': 'City', name: cityName, containedInPlace: { '@type': 'State', name: 'Mississippi' } },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  }
}
