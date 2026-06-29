import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS } from '@/lib/config/business'
import { SERVICE_AREAS } from '@/lib/config/serviceAreas'
import { getLocalBusinessSchema, getFAQSchema } from '@/lib/schema/structured-data'

export const metadata: Metadata = {
  title: '24/7 Emergency Plumber | Mississippi Gulf Coast | Prestige Plumbing LLC',
  description:
    'Burst pipe? Sewage backup? Flooding? Prestige Plumbing LLC responds 24/7 to plumbing emergencies across Biloxi, Gulfport, Ocean Springs, and the full Mississippi Gulf Coast. Call (228) 327-6151 now.',
  keywords: [
    'emergency plumber Mississippi',
    'emergency plumber Biloxi MS',
    '24 hour plumber Gulf Coast',
    '24 hour plumber Biloxi',
    'burst pipe repair Mississippi',
    'sewage backup repair Biloxi',
    'emergency plumbing service Gulf Coast',
    'flooding plumber Mississippi',
    'after hours plumber Biloxi',
    'emergency water heater repair',
    'gas line emergency plumber MS',
  ],
  openGraph: {
    title: '24/7 Emergency Plumber | Mississippi Gulf Coast | Prestige Plumbing LLC',
    description:
      'Burst pipe? Sewage backup? Flooding? We respond 24/7 across the Mississippi Gulf Coast. Call (228) 327-6151.',
    url: `${BUSINESS.siteUrl}/emergency`,
    siteName: BUSINESS.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Emergency Plumber | Mississippi Gulf Coast',
    description: 'Prestige Plumbing LLC responds to plumbing emergencies 24/7. Call (228) 327-6151.',
  },
  alternates: {
    canonical: `/emergency`,
  },
}

const EMERGENCY_TYPES = [
  {
    title: 'Burst & Broken Pipes',
    description:
      'A burst pipe can dump hundreds of gallons into your home within minutes. We arrive fast, shut off the source, and make a code-compliant repair — same visit when possible.',
    icon: BurstPipeIcon,
  },
  {
    title: 'Sewage Backups',
    description:
      'Sewage backing up into drains, toilets, or tubs is a health hazard that cannot wait. We clear blockages and restore proper flow so your property is safe.',
    icon: DrainIcon,
  },
  {
    title: 'Major Leaks & Water Damage',
    description:
      'Active leaks behind walls, under slabs, or at fixtures can cause structural damage fast. Our team locates and stops the leak before it spreads.',
    icon: LeakIcon,
  },
  {
    title: 'Water Heater Failure',
    description:
      'No hot water, flooding, or a failed water heater needs immediate attention. We carry stock of common units for same-day replacement when needed.',
    icon: WaterHeaterIcon,
  },
  {
    title: 'Toilet Overflow & Flooding',
    description:
      'An overflowing toilet that won\'t stop is a sewage emergency. We stop the flow, clear the obstruction, and sanitize the affected area.',
    icon: ToiletIcon,
  },
  {
    title: 'Storm & Flood Damage',
    description:
      'Gulf Coast storms can overwhelm drain systems and damage plumbing. We respond after weather events to assess, repair, and restore your plumbing.',
    icon: StormIcon,
  },
]

const EMERGENCY_FAQS = [
  {
    question: 'How quickly can you respond to a plumbing emergency?',
    answer:
      'We respond to emergency calls as fast as possible — typically within the hour for Gulf Coast locations. When you call (228) 327-6151, our on-call team dispatches immediately. Response time depends on your location and current call volume.',
  },
  {
    question: 'Do you charge extra for nights, weekends, or holidays?',
    answer:
      'Call us at (228) 327-6151 for current emergency service rates. We are transparent about pricing before we begin any work — no surprise charges after the job is done.',
  },
  {
    question: 'What should I do while waiting for the emergency plumber?',
    answer:
      'Locate and shut off the main water supply valve to your home — usually near the meter or where the water line enters the building. For sewage backups, stop using all drains and toilets. For gas-related emergencies, evacuate the building and call 911 first. Our team will walk you through immediate steps when you call.',
  },
  {
    question: 'What counts as a plumbing emergency?',
    answer:
      'Any situation where waiting until business hours would cause significant water damage, health hazards, or property damage: burst pipes, sewage backups, active flooding, no water at all, gas line leaks (call 911 first), or a failed water heater causing flooding. When in doubt, call — we will help you assess the urgency.',
  },
  {
    question: 'Do you handle plumbing emergencies for commercial properties?',
    answer:
      'Yes. We respond to emergency plumbing calls for businesses, apartment complexes, restaurants, and commercial properties across the Mississippi Gulf Coast, not just residential homes.',
  },
  {
    question: 'Which areas do you cover for emergency plumbing?',
    answer:
      'We respond to plumbing emergencies throughout the Mississippi Gulf Coast, including Biloxi, Gulfport, Ocean Springs, Vancleave, Bay St. Louis, D\'Iberville, Pass Christian, Long Beach, Gautier, Pascagoula, and Waveland. Call us and we will confirm coverage for your location.',
  },
]

export default function EmergencyPage() {
  const schema = {
    ...getLocalBusinessSchema(),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceType: '24/7 Emergency Plumbing',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
  }
  const faqSchema = getFAQSchema(EMERGENCY_FAQS)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#1a0505]"
        aria-labelledby="emerg-hero-heading"
      >
        <Image
          src="/images/pipe-wrench.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#1a0505]/80" />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(135deg, #7f1d1d 0%, transparent 55%), linear-gradient(to right, #1a0505 0%, #2d0a0a 100%)',
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-red-600" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">

            {/* Left: text */}
            <div className="flex-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-400">
                24/7 Emergency Plumbing — Mississippi Gulf Coast
              </p>
              <h1
                id="emerg-hero-heading"
                className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Plumbing Emergency?{' '}
                <span className="text-red-400">We Are Available Right Now.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-red-100/70">
                Burst pipes, sewage backups, flooding, and water heater failures don&rsquo;t wait for
                business hours. {BUSINESS.name} dispatches licensed plumbers across the Mississippi
                Gulf Coast — 24 hours a day, 7 days a week, including weekends and holidays.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-900/40 px-4 py-1.5 text-sm font-medium text-red-200 ring-1 ring-red-700/50">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" aria-hidden="true" />
                  Available Now
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 ring-1 ring-white/10">
                  Licensed &amp; Insured — #19086
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 ring-1 ring-white/10">
                  All Gulf Coast Cities
                </span>
              </div>
            </div>

            {/* Right: call card */}
            <div className="w-full max-w-sm rounded-2xl border border-red-800/50 bg-white/5 p-8 backdrop-blur-sm lg:flex-shrink-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-red-400">
                Call Now — 24/7
              </p>
              <a
                href={BUSINESS.phoneLink}
                className="mt-2 block text-4xl font-extrabold tracking-tight text-white transition-colors hover:text-red-300"
                aria-label={`Call Prestige Plumbing emergency line at ${BUSINESS.phone}`}
              >
                {BUSINESS.phone}
              </a>
              <p className="mt-2 text-sm text-red-200/60">
                Our on-call plumber answers immediately
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={BUSINESS.phoneLink}
                  className="flex items-center justify-center gap-2.5 rounded-lg bg-red-700 px-6 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#1a0505]"
                >
                  <PhoneIcon />
                  Call for Emergency Help
                </a>
                <Link
                  href="/request-service"
                  className="flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  Submit a Service Request
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. What to do while waiting ─────────────────────────────────────── */}
      <section className="bg-[#0d1b2a] py-12 sm:py-14" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="steps-heading" className="sr-only">What to do while you wait for the plumber</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '1', title: 'Call us now', desc: 'Call (228) 327-6151 — we answer 24/7 and dispatch immediately.' },
              { step: '2', title: 'Shut off the water', desc: 'Turn off your main shut-off valve (usually near the meter or where the line enters).' },
              { step: '3', title: 'Stop using drains', desc: 'For sewage issues: don\'t flush or run water until we arrive.' },
              { step: '4', title: 'Move valuables', desc: 'Clear the area of furniture, rugs, or electronics if water is spreading.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/5 p-5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-700/30 text-sm font-extrabold text-red-400 ring-1 ring-red-700/50">
                  {step}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Emergency types ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="types-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
              What We Handle
            </p>
            <h2
              id="types-heading"
              className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Plumbing Emergencies We Respond To
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              If you are dealing with any of the situations below, call us immediately at{' '}
              <a href={BUSINESS.phoneLink} className="font-semibold text-blue-600 hover:underline">
                {BUSINESS.phone}
              </a>
              . We respond across the full Mississippi Gulf Coast.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EMERGENCY_TYPES.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 ring-1 ring-red-100">
                  <Icon />
                </div>
                <h3 className="text-base font-bold text-[#0d1b2a]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#0d1b2a] p-8 text-center">
            <p className="text-lg font-semibold text-white">
              Don&rsquo;t see your emergency listed?
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Call us anyway — we handle all plumbing emergencies across the Gulf Coast.
            </p>
            <a
              href={BUSINESS.phoneLink}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-700 px-8 py-3.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-red-600"
            >
              <PhoneIcon />
              {BUSINESS.phone} — Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Why choose us ────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Why Call Prestige Plumbing
              </p>
              <h2
                id="why-heading"
                className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Emergency Response You Can Count On
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                When water is actively damaging your home or business, you need a plumber who picks
                up the phone and shows up fast. {BUSINESS.name} has served the Mississippi Gulf Coast
                for five generations — we know these homes, these systems, and how to stop a problem
                before it becomes a disaster.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { title: 'Licensed & Insured', desc: `Mississippi License #${BUSINESS.license} — every job is covered.` },
                  { title: 'We Answer 24/7', desc: 'A real plumber answers when you call — no automated menus at 2am.' },
                  { title: 'Transparent Pricing', desc: 'We tell you the price before we start. No surprise invoices.' },
                  { title: 'Same-Day Repairs', desc: 'Most emergency repairs are completed during the first visit.' },
                  { title: 'Five Generations Deep', desc: 'Family-owned since the beginning — our reputation is everything.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0d1b2a]">{title}</p>
                      <p className="text-sm text-slate-500">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#0d1b2a] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Emergency Coverage Area
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">
                Serving the Full Mississippi Gulf Coast
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                We respond to plumbing emergencies in every city below. If your community is not
                listed, call us — we cover more of the coast than you might expect.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <Link
                    key={area.id}
                    href={`/service-areas/${area.slug}`}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-blue-400/40 hover:text-white"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <a
                href={BUSINESS.phoneLink}
                className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-red-600"
              >
                <PhoneIcon />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Common Questions
            </p>
            <h2
              id="faq-heading"
              className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl"
            >
              Emergency Plumbing FAQ
            </h2>
          </div>
          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 px-5 sm:px-8">
            {EMERGENCY_FAQS.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-base font-semibold text-[#0d1b2a]">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            More questions?{' '}
            <a
              href={BUSINESS.phoneLink}
              className="font-semibold text-blue-600 underline-offset-2 hover:underline"
            >
              Call {BUSINESS.phone}
            </a>{' '}
            — we answer 24/7.
          </p>
        </div>
      </section>

      {/* ── 6. Final CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#1a0505] py-14 sm:py-16" aria-label="Emergency contact">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ background: 'linear-gradient(135deg, #7f1d1d 0%, transparent 50%)' }}
        />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
            Available Right Now
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Stop the Damage — Call Us Now
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-red-100/65">
            Every minute a pipe is running or a sewage backup is sitting is more damage. {BUSINESS.name}{' '}
            responds fast, fixes it right, and won&rsquo;t leave until the problem is resolved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2.5 rounded-lg bg-red-700 px-8 py-4 text-xl font-extrabold text-white shadow-lg transition-colors hover:bg-red-600"
            >
              <PhoneIcon />
              {BUSINESS.phone}
            </a>
            <Link
              href="/request-service"
              className="inline-flex items-center rounded-lg border border-white/20 px-7 py-4 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Submit online request
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Icon components ────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function BurstPipeIcon() {
  return (
    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  )
}

function DrainIcon() {
  return (
    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
  )
}

function LeakIcon() {
  return (
    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  )
}

function WaterHeaterIcon() {
  return (
    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  )
}

function ToiletIcon() {
  return (
    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
  )
}

function StormIcon() {
  return (
    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  )
}
