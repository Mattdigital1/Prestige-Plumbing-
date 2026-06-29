import Link from 'next/link'
import ReviewCard from '@/components/ui/ReviewCard'
import { BUSINESS } from '@/lib/config/business'

// ---------------------------------------------------------------------------
// TODO: Replace all three placeholder reviews below with verified customer
// reviews once they have been collected. Each object is clearly marked as a
// placeholder — do NOT use this copy in production.
// ---------------------------------------------------------------------------

const PLACEHOLDER_REVIEWS = [
  {
    // TODO: Replace with a verified customer review
    name: undefined, // Do not invent a name
    location: 'Biloxi, MS',
    rating: 5,
    text:
      'Placeholder review — replace with a verified customer testimonial once collected. This card is intentionally left generic until real reviews are available.',
    date: undefined,
    isPlaceholder: true,
  },
  {
    // TODO: Replace with a verified customer review
    name: undefined,
    location: 'Ocean Springs, MS',
    rating: 5,
    text:
      'Placeholder review — replace with a verified customer testimonial once collected. This card is intentionally left generic until real reviews are available.',
    date: undefined,
    isPlaceholder: true,
  },
  {
    // TODO: Replace with a verified customer review
    name: undefined,
    location: 'Gulfport, MS',
    rating: 5,
    text:
      'Placeholder review — replace with a verified customer testimonial once collected. This card is intentionally left generic until real reviews are available.',
    date: undefined,
    isPlaceholder: true,
  },
] as const

export default function ReviewsSection() {
  return (
    <section
      className="bg-slate-100"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Customer Reviews
          </p>
          <h2
            id="reviews-heading"
            className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            What Our Customers Say
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            {BUSINESS.name} is built on honest work and word-of-mouth referrals throughout the
            Mississippi Gulf Coast.
          </p>
        </div>

        {/* Review cards grid */}
        {/* TODO: Replace placeholder reviews with verified customer reviews once collected */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Placeholder notice banner */}
        {/* TODO: Remove this banner once real reviews are in place */}
        <div
          className="mx-auto mt-6 max-w-5xl rounded-lg border border-amber-200 bg-amber-50 px-5 py-3 text-center text-xs font-medium text-amber-700"
          aria-live="polite"
        >
          {/* TODO: Remove this entire notice once placeholder reviews are replaced with verified customer reviews */}
          The review cards above are placeholders. Replace them with verified customer reviews
          before going live.
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          {/*
            TODO: Replace href below with BUSINESS.socialLinks.google once a real Google
            Business Profile URL is available. Example:
            href={BUSINESS.socialLinks.google || '/reviews'}
          */}
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-100"
          >
            Read More Reviews
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
