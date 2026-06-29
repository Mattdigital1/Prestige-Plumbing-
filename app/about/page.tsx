import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS } from '@/lib/config/business'
import { getBreadcrumbSchema } from '@/lib/schema/structured-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import EmergencyCallout from '@/components/sections/EmergencyCallout'
import FinalCTA from '@/components/sections/FinalCTA'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'About Prestige Plumbing LLC | Fifth-Generation Family Plumbers',
  description:
    'Learn about Prestige Plumbing LLC — a fifth-generation, family-owned plumbing company serving homeowners and businesses across the Mississippi Gulf Coast.',
  alternates: {
    canonical: '/about',
  },
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

// ─── Feature card icons ───────────────────────────────────────────────────────

function GenerationsIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {/* Family/tree icon */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 0a4 4 0 100 8 4 4 0 000-8zm0 8v9m-4-5h8M9 21H5a2 2 0 01-2-2v-1a4 4 0 014-4h2m6 0h2a4 4 0 014 4v1a2 2 0 01-2 2h-4"
      />
    </svg>
  )
}

function FamilyIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  )
}

function LicenseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  )
}

function EmergencyIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function ResidentialCommercialIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </svg>
  )
}

function PricingIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
      />
    </svg>
  )
}

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-blue-900/50 bg-[#0f1e30] p-6">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  )
}

// ─── Arrow icon ───────────────────────────────────────────────────────────────

function ArrowRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ])

  const features: FeatureCardProps[] = [
    {
      icon: <GenerationsIcon />,
      title: 'Fifth-Generation Experience',
      description:
        'Plumbing knowledge passed down through five generations of the Richard family means a depth of craft and problem-solving instinct that cannot be learned from a manual. Every job benefits from that accumulated expertise.',
    },
    {
      icon: <FamilyIcon />,
      title: 'Family-Owned & Operated',
      description:
        'When you call Prestige Plumbing, you reach a business owner — not a call center. That personal accountability means we stand behind every repair, installation, and inspection we complete.',
    },
    {
      icon: <LicenseIcon />,
      title: 'Licensed & Insured',
      description:
        `Mississippi License #${BUSINESS.license}. We carry full insurance coverage so your home, your business, and our crew are protected on every job — no exceptions.`,
    },
    {
      icon: <EmergencyIcon />,
      title: '24/7 Emergency Service',
      description:
        'Burst pipes, sewage backups, and gas line issues don\'t schedule themselves for business hours. Our team is available around the clock, every day of the year, across the Gulf Coast.',
    },
    {
      icon: <ResidentialCommercialIcon />,
      title: 'Residential & Commercial',
      description:
        'From single-family homes and rental properties to commercial buildings and new construction sites, we have the equipment and experience to handle plumbing work at any scale.',
    },
    {
      icon: <PricingIcon />,
      title: 'Honest Pricing',
      description:
        'We provide free estimates and walk you through the scope of work before anything begins. No hidden fees, no surprise charges — just straightforward pricing and clear communication.',
    },
  ]

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. Page Hero ── */}
      <section
        className="relative overflow-hidden bg-[#0d1b2a]"
        aria-labelledby="about-page-heading"
      >
        <Image
          src="/images/plumber-wrench.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#0d1b2a]/80" />

        {/* Radial gradient accent — matches site hero style */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 15% 50%, rgba(30,58,95,0.45) 0%, transparent 65%)',
          }}
        />

        {/* Subtle diagonal texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Left edge accent bar */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-blue-600/60"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm" role="list">
              <li>
                <Link
                  href="/"
                  className="text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </li>
              <li>
                <span aria-current="page" className="font-medium text-slate-300">
                  About
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            {BUSINESS.tagline}
          </p>

          {/* H1 */}
          <h1
            id="about-page-heading"
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            About {BUSINESS.name}
          </h1>

          {/* Subtext */}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            Fifth-Generation Family Plumbers Serving the Mississippi Gulf Coast
          </p>
        </div>
      </section>

      {/* ── 2. Our Story ── */}
      <section
        className="bg-[#081422] py-16 sm:py-20 lg:py-24"
        aria-labelledby="our-story-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Text column */}
            <div className="flex flex-col">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Our Story
              </p>
              <h2
                id="our-story-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                A Family Tradition of Quality Plumbing
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300">
                <p>
                  Plumbing is not just a trade in the Richard family — it is a legacy. Five
                  generations have passed down the skills, standards, and work ethic that define
                  what good plumbing looks like. That depth of knowledge shapes how every job is
                  approached, from the first assessment to the final walkthrough.
                </p>
                <p>
                  A heritage like that is not about time alone. It is about the accumulated
                  understanding of how systems fail, why certain repairs hold and others don't, and
                  what separates a job done quickly from a job done right. When a fifth-generation
                  plumber looks at a problem, they are drawing on a well of experience that extends
                  far beyond their own career.
                </p>
                <p>
                  Jesse Richard carries that tradition forward at Prestige Plumbing LLC. His
                  commitment to the craft reflects everything this family has stood for across
                  generations — integrity in the work, honesty with customers, and pride in leaving
                  every job cleaner and more reliable than he found it.
                </p>
                <p>
                  The Mississippi Gulf Coast is home, and that matters. The people we serve are
                  neighbors, not accounts. We invest in this community because we live here, and
                  that investment shows in every repair, installation, and emergency call we answer.
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className="relative">
              {/* Decorative border frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-xl border border-blue-800/30"
              />
              <ImagePlaceholder
                alt="Jesse Richard, owner of Prestige Plumbing LLC"
                aspectRatio="4/3"
                label="Jesse Richard — Owner, Prestige Plumbing LLC"
                className="relative z-10"
              />
              {/* Credential chip */}
              <div className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2.5 rounded-full bg-[#1e3a5f] px-4 py-2 shadow-xl ring-1 ring-blue-600/40">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-blue-100 whitespace-nowrap">
                  License #{BUSINESS.license}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. What Sets Us Apart ── */}
      <section
        className="bg-[#0d1b2a] py-16 sm:py-20 lg:py-24"
        aria-labelledby="what-sets-us-apart-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Why Choose Us
            </p>
            <h2
              id="what-sets-us-apart-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              What Sets Prestige Plumbing Apart
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Five generations of plumbing knowledge, combined with the accountability of a
              family-owned business — here is what that means for you.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. Our Services ── */}
      <section
        className="bg-[#081422] py-16 sm:py-20"
        aria-labelledby="our-services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                What We Do
              </p>
              <h2
                id="our-services-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Full-Spectrum Plumbing Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                From emergency repairs to new construction, water heater installation to full
                plumbing remodels, {BUSINESS.name} handles residential and commercial plumbing work
                of every size and complexity across the {BUSINESS.serviceArea}. Whatever the job
                requires, we bring the same fifth-generation commitment to doing it right.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081422]"
              >
                View All Services
                <ArrowRightIcon />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Service Areas ── */}
      <section
        className="bg-[#0d1b2a] py-16 sm:py-20"
        aria-labelledby="service-areas-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Thin top rule */}
          <div className="mb-12 h-px bg-blue-900/60" aria-hidden="true" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Where We Work
              </p>
              <h2
                id="service-areas-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Serving the Mississippi Gulf Coast
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Prestige Plumbing serves homeowners and businesses throughout the Gulf Coast,
                including Biloxi, Ocean Springs, Gulfport, Bay St. Louis, Vancleave,
                D&rsquo;Iberville, Gautier, Pascagoula, and the surrounding communities. If you
                are on the Coast, we are in your area.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1b2a]"
              >
                View Service Areas
                <ArrowRightIcon />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. Emergency Callout ── */}
      <EmergencyCallout />

      {/* ── 7. Final CTA ── */}
      <FinalCTA />
    </>
  )
}
