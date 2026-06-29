import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/config/business'

function RepairIcon() {
  return (
    <svg
      className="h-7 w-7 text-blue-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
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

function InstallIcon() {
  return (
    <svg
      className="h-7 w-7 text-blue-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export default function WaterHeatersSection() {
  return (
    <section
      className="bg-[#1e3a5f]"
      aria-labelledby="water-heaters-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── Left: Content ── */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-300">
              Water Heater Services
            </p>
            <h2
              id="water-heaters-heading"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Water Heater Repair &amp; Installation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-blue-100/70">
              No hot water is more than an inconvenience. {BUSINESS.name} repairs and replaces
              both tank and tankless water heaters for homes and commercial properties throughout
              the Mississippi Gulf Coast. We carry stock of the most common units for same-day
              replacements.
            </p>

            {/* Feature cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Repair card */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-blue-800/60 ring-1 ring-white/10">
                    <RepairIcon />
                  </div>
                  <h3 className="font-bold text-white">Water Heater Repair</h3>
                </div>
                <p className="text-sm leading-relaxed text-blue-100/65">
                  Pilot light failures, thermostat issues, sediment buildup, leaking tanks —
                  we diagnose and fix fast to restore your hot water.
                </p>
              </div>

              {/* Installation card */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-blue-800/60 ring-1 ring-white/10">
                    <InstallIcon />
                  </div>
                  <h3 className="font-bold text-white">Water Heater Installation</h3>
                </div>
                <p className="text-sm leading-relaxed text-blue-100/65">
                  Traditional tank and tankless units — properly sized, code-compliant, and
                  installed for long-term performance in your home or business.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/request-service"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#1e3a5f] shadow-sm transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1e3a5f]"
              >
                Request Service
              </Link>
            </div>
          </div>

          {/* ── Right: Water heater image ── */}
          <div className="relative min-h-[320px] overflow-hidden rounded-xl ring-1 ring-white/10 lg:min-h-[420px]">
            <Image
              src="/images/water-heater-install.jpg"
              alt="Plumber installing water heater and overhead pipe system"
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
