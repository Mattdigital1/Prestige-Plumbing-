export const BUSINESS = {
  name: 'Prestige Plumbing LLC',
  owner: 'Jesse Richard',
  phone: '(228) 327-6151',
  phoneLink: 'tel:+12283276151',
  email: 'Prestigeplumbingllc@yahoo.com',
  emailLink: 'mailto:Prestigeplumbingllc@yahoo.com',
  domain: 'prestigeplumbingllc.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://prestigeplumbingllc.com',
  license: '19086',
  hours: 'Open 24 Hours',
  emergency: true,
  freeEstimates: true,
  licensed: true,
  insured: true,
  address: {
    street: '20958 Old Biloxi Rd',
    city: 'Vancleave',
    state: 'MS',
    zip: '39565',
    full: '20958 Old Biloxi Rd, Vancleave, MS 39565',
  },
  tagline: 'Fifth-Generation Family Plumbers',
  shortDescription:
    'Prestige Plumbing LLC provides new construction, remodels, residential, commercial, water heater, and 24/7 emergency plumbing across Biloxi and the Mississippi Gulf Coast. Family-owned, fast response, honest pricing.',
  longDescription:
    'Prestige Plumbing LLC is a fifth-generation, family-owned plumbing company based in Vancleave, MS. We bring fast response times, honest pricing, and clean workmanship to every job — from new construction rough-in and kitchen or bathroom remodels to emergency repairs and commercial plumbing throughout the Mississippi Gulf Coast.',
  serviceArea: 'Mississippi Gulf Coast',
  state: 'MS',
  announcementBar:
    'New Construction · Remodels · 24/7 Emergency Plumbing — Mississippi Gulf Coast · Call (228) 327-6151',
  socialLinks: {
    // TODO: Add real social profile URLs when available
    facebook: '',
    google: '',
  },
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  main: NAV_LINKS,
  services: [
    { label: 'Emergency Plumbing', href: '/emergency' },
    { label: 'Residential Plumbing', href: '/services#residential' },
    { label: 'Commercial Plumbing', href: '/services#commercial' },
    { label: 'New Construction', href: '/services#new-construction' },
    { label: 'Water Heaters', href: '/services#water-heaters' },
    { label: 'Plumbing Remodels', href: '/services#remodels' },
    { label: 'Pipe Repair', href: '/services#repairs' },
    { label: 'Drain & Sewer', href: '/services#drain-sewer' },
  ],
  areas: [
    { label: 'Biloxi', href: '/service-areas/biloxi' },
    { label: 'Ocean Springs', href: '/service-areas/ocean-springs' },
    { label: 'Gulfport', href: '/service-areas/gulfport' },
    { label: 'Bay St. Louis', href: '/service-areas/bay-st-louis' },
    { label: 'Vancleave', href: '/service-areas/vancleave' },
    { label: "D'Iberville", href: '/service-areas/diberville' },
    { label: 'Gautier', href: '/service-areas/gautier' },
    { label: 'Pascagoula', href: '/service-areas/pascagoula' },
  ],
} as const
