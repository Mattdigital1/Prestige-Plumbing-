import { BUSINESS } from '@/lib/config/business'

const ITEMS = [
  'Licensed & Insured',
  BUSINESS.tagline,
  BUSINESS.hours,
  'Free Estimates',
  'Residential & Commercial',
]

export function TrustBadges() {
  return (
    <div
      aria-label="Trust indicators"
      className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
    >
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-2 text-sm text-slate-400">
          <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
          {item}
        </span>
      ))}
    </div>
  )
}

export default TrustBadges
