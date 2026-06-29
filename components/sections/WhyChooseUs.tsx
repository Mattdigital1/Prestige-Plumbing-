import { BUSINESS } from '@/lib/config/business'
import SectionHeader from '@/components/ui/SectionHeader'

// ─── Differentiators list ─────────────────────────────────────────────────────

const DIFFERENTIATORS = [
  '5th-generation family business — locally owned and operated',
  'Fast response: we show up when we say we will',
  'Honest, upfront pricing — no surprise invoices',
  'Clean work on every job, every time',
  'New construction, remodels, service work & emergencies',
  'Licensed MS #19086 · Fully insured · 24/7 availability',
] as const

// ─── Blue checkmark icon ──────────────────────────────────────────────────────

function CheckmarkIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600"
    >
      <svg
        className="h-3 w-3 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.8}
        viewBox="0 0 12 12"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
      </svg>
    </span>
  )
}

// ─── Image placeholder ────────────────────────────────────────────────────────

function TeamIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f]"
    >
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full border border-blue-700/25 sm:h-80 sm:w-80" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-52 w-52 rounded-full border border-blue-600/20 sm:h-60 sm:w-60" />
      </div>

      {/* Central badge */}
      <div className="relative flex flex-col items-center gap-3 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 ring-1 ring-blue-500/40">
          <svg
            className="h-10 w-10 text-blue-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">5 Generations</p>
          <p className="text-sm text-blue-300">of plumbing expertise</p>
        </div>
      </div>

      {/* Stat chips */}
      <div className="absolute top-6 left-6">
        <div className="flex flex-col gap-0.5 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm ring-1 ring-white/10">
          <span className="text-lg font-bold text-white leading-none">24/7</span>
          <span className="text-xs text-blue-200">Emergency</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6">
        <div className="flex flex-col gap-0.5 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm ring-1 ring-white/10">
          <span className="text-lg font-bold text-white leading-none">MS #{BUSINESS.license}</span>
          <span className="text-xs text-blue-200">Licensed</span>
        </div>
      </div>

      {/* TODO: Replace with <Image> of plumbing team, technician, or truck */}
    </div>
  )
}

// ─── WhyChooseUs ──────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-label="Why choose Prestige Plumbing"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: content ── */}
          <div className="flex flex-col">
            <SectionHeader
              eyebrow="Why Prestige Plumbing"
              title="Experience You Can Count On"
              subtitle={BUSINESS.longDescription}
              align="left"
            />

            {/* Differentiator checklist */}
            <ul
              className="mt-8 flex flex-col gap-3.5"
              aria-label="Our differentiators"
            >
              {DIFFERENTIATORS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckmarkIcon />
                  <span className="text-base text-gray-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: image placeholder ── */}
          <div className="h-72 sm:h-96 lg:h-[460px]">
            <TeamIllustration />
          </div>

        </div>
      </div>
    </section>
  )
}
