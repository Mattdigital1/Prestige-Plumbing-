'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/config/business'
import MobileNav from '@/components/layout/MobileNav'

const SERVICE_DROPDOWN = [
  { label: 'Emergency Plumbing', href: '/emergency' },
  { label: 'Residential Plumbing', href: '/services#residential' },
  { label: 'Commercial Plumbing', href: '/services#commercial' },
  { label: 'New Construction', href: '/services#new-construction' },
  { label: 'Water Heaters', href: '/services#water-heaters' },
  { label: 'Plumbing Remodels', href: '/services#remodels' },
]

const SERVICE_AREAS_DROPDOWN = [
  { label: 'Biloxi', href: '/service-areas/biloxi' },
  { label: 'Ocean Springs', href: '/service-areas/ocean-springs' },
  { label: 'Gulfport', href: '/service-areas/gulfport' },
  { label: 'Bay St. Louis', href: '/service-areas/bay-st-louis' },
  { label: 'Vancleave', href: '/service-areas/vancleave' },
  { label: "D'Iberville", href: '/service-areas/diberville' },
  { label: 'Gautier', href: '/service-areas/gautier' },
  { label: 'Pascagoula', href: '/service-areas/pascagoula' },
  { label: 'Moss Point', href: '/service-areas/moss-point' },
  { label: 'Long Beach', href: '/service-areas/long-beach' },
  { label: 'Pass Christian', href: '/service-areas/pass-christian' },
]


export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center gap-4">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded-sm"
                aria-label={`${BUSINESS.name} — home`}
              >
                <Image
                  src="/logo.png"
                  alt="Prestige Plumbing LLC"
                  width={160}
                  height={96}
                  className="h-14 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop navigation — centered */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex flex-1 items-center justify-center gap-1"
            >
              {/* Home */}
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
              >
                About
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
                >
                  Services
                  <svg
                    className={`h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Services dropdown panel */}
                <div
                  role="menu"
                  aria-label="Services submenu"
                  className={`absolute left-0 top-full mt-1 w-72 rounded-lg bg-white shadow-xl ring-1 ring-black/5 transition-all duration-150 ${
                    servicesOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="p-3">
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICE_DROPDOWN.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:bg-blue-50 focus:text-blue-700 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-gray-100 pt-2">
                      <Link
                        href="/services"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-center gap-1.5 rounded-md px-3 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 focus:outline-none focus:bg-blue-50 transition-colors"
                      >
                        View All Services
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={areasOpen}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
                >
                  Service Areas
                  <svg
                    className={`h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Service Areas dropdown panel */}
                <div
                  role="menu"
                  aria-label="Service Areas submenu"
                  className={`absolute left-0 top-full mt-1 w-52 rounded-lg bg-white shadow-xl ring-1 ring-black/5 transition-all duration-150 ${
                    areasOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="p-2">
                    {SERVICE_AREAS_DROPDOWN.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setAreasOpen(false)}
                        className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:bg-blue-50 focus:text-blue-700 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-gray-100 pt-1">
                      <Link
                        href="/service-areas"
                        role="menuitem"
                        onClick={() => setAreasOpen(false)}
                        className="flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 focus:outline-none focus:bg-blue-50 transition-colors"
                      >
                        All Service Areas
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <Link
                href="/reviews"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
              >
                Reviews
              </Link>

              {/* Gallery */}
              <Link
                href="/gallery"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
              >
                Gallery
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop right side: phone + CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href={BUSINESS.phoneLink}
                className="text-sm font-bold text-[#0d1b2a] hover:text-blue-600 transition-colors"
              >
                {BUSINESS.phone}
              </a>
              <Link
                href="/request-service"
                className="inline-flex items-center rounded-md bg-[#0d1b2a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
              >
                Request Service
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              className="lg:hidden ml-auto flex-shrink-0 rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  )
}
