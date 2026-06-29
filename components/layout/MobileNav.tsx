'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/config/business'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const SERVICE_LINKS = [
  { label: 'Emergency Plumbing', href: '/emergency' },
  { label: 'Residential Plumbing', href: '/services#residential' },
  { label: 'Commercial Plumbing', href: '/services#commercial' },
  { label: 'New Construction', href: '/services#commercial' },
  { label: 'Water Heaters', href: '/services#water-heaters' },
  { label: 'Plumbing Remodels', href: '/services#remodels' },
  { label: 'Pipe Repair', href: '/services#repairs' },
  { label: 'Drain & Sewer', href: '/services#drain-sewer' },
  { label: 'View All Services', href: '/services' },
]

const AREA_LINKS = [
  { label: 'Biloxi', href: '/service-areas/biloxi' },
  { label: 'Ocean Springs', href: '/service-areas/ocean-springs' },
  { label: 'Gulfport', href: '/service-areas/gulfport' },
  { label: 'Bay St. Louis', href: '/service-areas/bay-st-louis' },
  { label: 'Vancleave', href: '/service-areas/vancleave' },
  { label: "D'Iberville", href: '/service-areas/diberville' },
  { label: 'Gautier', href: '/service-areas/gautier' },
  { label: 'Pascagoula', href: '/service-areas/pascagoula' },
  { label: 'All Service Areas', href: '/service-areas' },
]

const FLAT_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(prev => prev === section ? null : section)
  }

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Focus close button when menu opens; lock body scroll
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setOpenSection(null)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Trap focus within panel
  useEffect(() => {
    if (!isOpen) return
    const panel = panelRef.current
    if (!panel) return
    const focusableSelectors =
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    function handleTab(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      const focusable = Array.from(
        panel!.querySelectorAll<HTMLElement>(focusableSelectors)
      ).filter(el => !el.closest('[aria-hidden="true"]'))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col bg-[#0d1b2a] shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="bg-white rounded px-2 py-1">
            <Image
              src="/logo.png"
              alt="Prestige Plumbing LLC"
              width={100}
              height={60}
              className="h-8 w-auto"
            />
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">

            {/* Home */}
            <li>
              <Link href="/" onClick={onClose} className="flex items-center rounded-md px-3 py-3 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link href="/about" onClick={onClose} className="flex items-center rounded-md px-3 py-3 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                About
              </Link>
            </li>

            {/* Services accordion */}
            <li>
              <button
                type="button"
                onClick={() => toggleSection('services')}
                aria-expanded={openSection === 'services'}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Services
                <svg
                  className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${openSection === 'services' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openSection === 'services' && (
                <ul className="ml-3 mt-1 space-y-0.5 border-l border-white/10 pl-4">
                  {SERVICE_LINKS.map(item => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          item.label.startsWith('View All') || item.label.startsWith('All')
                            ? 'text-blue-400 hover:text-blue-300 hover:bg-white/5'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Service Areas accordion */}
            <li>
              <button
                type="button"
                onClick={() => toggleSection('areas')}
                aria-expanded={openSection === 'areas'}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Service Areas
                <svg
                  className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${openSection === 'areas' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openSection === 'areas' && (
                <ul className="ml-3 mt-1 space-y-0.5 border-l border-white/10 pl-4">
                  {AREA_LINKS.map(item => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          item.label.startsWith('View All') || item.label.startsWith('All')
                            ? 'text-blue-400 hover:text-blue-300 hover:bg-white/5'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Reviews, Gallery, Contact */}
            {FLAT_LINKS.slice(2).map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={onClose} className="flex items-center rounded-md px-3 py-3 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>
        </nav>

        {/* CTA buttons */}
        <div className="border-t border-white/10 px-4 py-5 space-y-3">
          <Link
            href="/request-service"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0d1b2a] transition-colors"
          >
            Request Service
          </Link>
          <a
            href={BUSINESS.phoneLink}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0d1b2a] transition-colors"
            aria-label={`Call us at ${BUSINESS.phone}`}
          >
            <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </>
  )
}
