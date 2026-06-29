import { BUSINESS } from '@/lib/config/business'

export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4">
      <p className="text-center">
        <span className="hidden sm:inline">24/7 Emergency Plumbing — Mississippi Gulf Coast — </span>
        <span className="sm:hidden">24/7 Emergency Plumbing — </span>
        <a
          href={BUSINESS.phoneLink}
          className="font-semibold underline hover:text-blue-300 transition-colors"
          aria-label={`Call us at ${BUSINESS.phone}`}
        >
          {BUSINESS.phone}
        </a>
      </p>
    </div>
  )
}
