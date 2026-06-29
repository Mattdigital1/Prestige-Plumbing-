import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import ReviewCard from '@/components/ui/ReviewCard'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Customer Reviews | Prestige Plumbing LLC',
  description:
    'See what customers say about Prestige Plumbing LLC. Serving the Mississippi Gulf Coast with honest, professional plumbing service.',
  alternates: {
    canonical: '/reviews',
  },
}

// ---------------------------------------------------------------------------
// Placeholder review data — DO NOT publish as if these are real reviews
// ---------------------------------------------------------------------------

/* TODO: Replace with verified customer reviews once collected */
const PLACEHOLDER_REVIEWS = [
  {
    rating: 5,
    text: 'Great experience with Prestige Plumbing LLC. Professional, clean, and on time. Highly recommend.',
    isPlaceholder: true,
  },
  {
    rating: 5,
    text: 'Called for an emergency and they were out quickly. Fixed the issue the same day. Very satisfied with the service.',
    isPlaceholder: true,
  },
  {
    rating: 5,
    text: 'Very knowledgeable and friendly. Explained everything before starting the work. Fair pricing and quality results.',
    isPlaceholder: true,
  },
  {
    rating: 5,
    text: 'Installed our new water heater quickly and efficiently. Left the work area clean. Would use again.',
    isPlaceholder: true,
  },
  {
    rating: 5,
    text: 'Honest, reliable, and professional. Got the job done right the first time. Excellent communication throughout.',
    isPlaceholder: true,
  },
  {
    rating: 5,
    text: 'Used Prestige Plumbing for our bathroom remodel. Showed up when scheduled and the quality of work was top notch.',
    isPlaceholder: true,
  },
] as const

// ---------------------------------------------------------------------------
// Google icon
// ---------------------------------------------------------------------------

function GoogleColorIcon() {
  return (
    <svg
      className="h-8 w-8 flex-shrink-0"
      viewBox="0 0 24 24"
      aria-label="Google"
      role="img"
    >
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-5 w-5 ${filled ? 'text-amber-400' : 'text-slate-300'}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ReviewsPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-[#0d1b2a] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Reviews' }]} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
            Customer Reviews
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We&apos;re proud to serve the Mississippi Gulf Coast with honest, professional
            plumbing work. Hear directly from our customers about their experience with
            Prestige Plumbing LLC.
          </p>
        </div>
      </section>

      {/* ── Google Review CTA ── */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-slate-50 border border-slate-200 px-6 py-10 text-center sm:px-10 md:flex-row md:text-left md:items-start">
            {/* Icon */}
            <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
              <GoogleColorIcon />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl text-balance">
                Read Our Reviews Online
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Our reviews live on our Google Business Profile, where customers can share
                their honest experiences. If you&apos;ve worked with us, we&apos;d appreciate
                hearing from you — it helps other homeowners and businesses in the Gulf
                Coast area find trustworthy plumbing service.
              </p>

              {/* Stars display */}
              <div className="mt-3 flex items-center gap-2" aria-label="5 star rating">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={true} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700">5.0</span>
                <span className="text-sm text-slate-500">on Google</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3 md:items-end">
              {/* TODO: Replace GOOGLE_REVIEW_LINK with actual Google Business Profile review URL */}
              <a
                href="GOOGLE_REVIEW_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1e3a5f] px-6 py-3 text-sm font-semibold text-white shadow-sm
                  transition-colors hover:bg-[#2d5a9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                  whitespace-nowrap"
              >
                Leave a Review on Google
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <p className="text-xs text-slate-500 text-center md:text-right">
                Opens Google Business Profile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Review Cards Grid ── */}
      <section className="bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What Our Customers Say
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Sample reviews shown below. Verified customer testimonials will be published as they are collected.
            </p>
          </div>

          {/* TODO: Replace with verified customer reviews once collected */}
          <ul
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Customer reviews"
          >
            {PLACEHOLDER_REVIEWS.map((review, index) => (
              <li key={index}>
                {/* TODO: Replace with verified customer reviews once collected */}
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>

          {/* Notice */}
          <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-center">
            <p className="text-sm text-blue-800 leading-relaxed">
              Reviews will be updated with verified customer testimonials as they are collected.{' '}
              <Link
                href="/contact"
                className="font-semibold underline underline-offset-2 hover:text-blue-600 transition-colors"
              >
                Contact us
              </Link>{' '}
              to share your feedback.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
