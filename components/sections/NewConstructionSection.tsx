import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/config/business'

const features = [
  {
    title: 'Rough-In to Finish',
    description:
      'Complete plumbing from underground rough-in through finish trim, coordinated with your build schedule at every phase.',
  },
  {
    title: 'Code Compliance',
    description:
      'All work meets Mississippi state and local building codes. We handle inspections so your project stays on track.',
  },
  {
    title: 'Contractor Coordination',
    description:
      'We communicate directly with your GC and sub-contractors to avoid delays and keep the job moving.',
  },
  {
    title: 'Kitchen & Bath Remodels',
    description:
      'Full plumbing for bathroom additions, kitchen renovations, and fixture upgrades — from demo through final connection.',
  },
]

function WrenchIcon() {
  return (
    <svg
      className="h-5 w-5 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  )
}

export default function NewConstructionSection() {
  return (
    <section
      className="bg-slate-50"
      aria-labelledby="new-construction-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── Left: Text content ── */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
              New Construction &amp; Remodeling
            </p>
            <h2
              id="new-construction-heading"
              className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              New Construction &amp; Remodeling Plumbing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              {BUSINESS.name} partners with general contractors, custom home builders, and
              property owners across the Mississippi Gulf Coast to deliver precision plumbing from
              the ground up. Whether it&rsquo;s a new home, a multi-unit build, or a complete
              kitchen and bath remodel, we bring five generations of experience to every project.
            </p>

            {/* Feature list */}
            <ul className="mt-8 space-y-6">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-blue-50 ring-1 ring-blue-100">
                    <WrenchIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0d1b2a]">{feature.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/request-service"
                className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Request Service
              </Link>
            </div>
          </div>

          {/* ── Right: New construction image ── */}
          <div className="relative min-h-[360px] overflow-hidden rounded-xl lg:min-h-[480px]">
            <Image
              src="/images/commercial-construction.jpg"
              alt="Commercial plumber on ladder installing overhead pipe system"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
