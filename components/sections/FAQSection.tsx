'use client'

import { useState } from 'react'
import { BUSINESS } from '@/lib/config/business'
import SectionHeader from '@/components/ui/SectionHeader'

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: 'Do you offer free estimates?',
    answer: `Yes, Prestige Plumbing LLC provides free estimates for residential and commercial plumbing projects throughout the Mississippi Gulf Coast. Contact us to schedule an estimate.`,
  },
  {
    question: 'Are you available for plumbing emergencies?',
    answer: `Yes. We offer 24-hour emergency plumbing service across the Mississippi Gulf Coast. If you have a burst pipe, major leak, sewer backup, or any urgent plumbing issue, call us any time at ${BUSINESS.phone}.`,
  },
  {
    question: 'Are you licensed and insured?',
    answer: `Yes. Prestige Plumbing LLC is fully licensed (License #${BUSINESS.license}) and insured. We carry the appropriate licensing and insurance for both residential and commercial plumbing work in Mississippi.`,
  },
  {
    question: 'What areas do you serve?',
    answer: `We serve communities throughout the Mississippi Gulf Coast, including Biloxi, Ocean Springs, Gulfport, Bay St. Louis, Vancleave, D'Iberville, Pass Christian, Long Beach, Gautier, Pascagoula, and Waveland. Contact us if you are unsure whether your location falls within our service area.`,
  },
  {
    question: 'Do you handle both residential and commercial plumbing?',
    answer: `Yes. Prestige Plumbing LLC provides plumbing services for homeowners, landlords, property managers, businesses, and general contractors. We handle residential repairs, new construction, remodeling, and commercial plumbing projects.`,
  },
  {
    question: 'What is the best way to contact you for a service request?',
    answer: `You can call or text us at ${BUSINESS.phone} or submit a service request using the form on this website. For plumbing emergencies, calling directly is the fastest way to reach our team.`,
  },
] as const

// ─── Plus / Minus toggle icon ─────────────────────────────────────────────────

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`
        flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full
        transition-colors duration-200
        ${open ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}
      `}
    >
      <svg
        className="h-3.5 w-3.5 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 14 14"
      >
        {/* Horizontal bar — always visible */}
        <line x1="2" y1="7" x2="12" y2="7" strokeLinecap="round" />
        {/* Vertical bar — hidden when open */}
        <line
          x1="7"
          y1="2"
          x2="7"
          y2="12"
          strokeLinecap="round"
          style={{
            transformOrigin: '7px 7px',
            transform: open ? 'scaleY(0)' : 'scaleY(1)',
            transition: 'transform 0.2s ease',
          }}
        />
      </svg>
    </span>
  )
}

// ─── Single accordion item ────────────────────────────────────────────────────

type FAQItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div
      className={`
        border-b border-gray-200 transition-colors duration-150
        ${isOpen ? 'border-b-blue-100' : ''}
      `}
    >
      <button
        type="button"
        id={`faq-btn-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        className={`
          group flex w-full items-center justify-between gap-4 py-5 text-left
          focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2
          focus-visible:rounded-sm
        `}
      >
        <span
          className={`
            text-base font-semibold leading-snug transition-colors duration-150 sm:text-[17px]
            ${isOpen ? 'text-blue-700' : 'text-[#0d1b2a] group-hover:text-blue-700'}
          `}
        >
          {question}
        </span>
        <ToggleIcon open={isOpen} />
      </button>

      {/*
        Animate height with max-height trick.
        max-height is set generously (500px) so the transition feels fast on short answers.
      */}
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p className="pb-5 pr-11 text-sm leading-relaxed text-slate-600 sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  )
}

// ─── FAQSection ───────────────────────────────────────────────────────────────

type FAQSectionProps = {
  className?: string
}

export default function FAQSection({ className = '' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      className={`bg-gray-50 py-16 sm:py-20 lg:py-24 ${className}`}
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Prestige Plumbing LLC."
          align="center"
        />

        {/* Accordion list */}
        <div
          className="mt-10 rounded-xl border border-gray-200 bg-white px-5 shadow-sm sm:mt-12 sm:px-8"
          role="list"
        >
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Still have questions?{' '}
          <a
            href={BUSINESS.phoneLink}
            className="font-semibold text-blue-600 underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
          >
            Call us at {BUSINESS.phone}
          </a>
          {' '}— we are happy to help.
        </p>

      </div>
    </section>
  )
}
