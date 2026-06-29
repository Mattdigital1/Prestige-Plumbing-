// ---------------------------------------------------------------------------
// ReviewCard — customer testimonial card
// ---------------------------------------------------------------------------

interface ReviewProps {
  review: {
    name?: string
    location?: string
    rating: number
    text: string
    date?: string
    isPlaceholder?: boolean
  }
}

// ---------------------------------------------------------------------------
// Star rating
// ---------------------------------------------------------------------------

function StarRating({ rating }: { rating: number }) {
  // Clamp to 0–5
  const clamped = Math.max(0, Math.min(5, Math.round(rating)))

  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${clamped} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 flex-shrink-0 ${i < clamped ? 'text-amber-400' : 'text-slate-200'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Google "G" logo — simple inline SVG, no external resource
// ---------------------------------------------------------------------------

function GoogleLogo() {
  return (
    <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google review" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ReviewCard({ review }: ReviewProps) {
  const displayName = review.name ?? 'Verified Customer'
  const hasLocation = Boolean(review.location)

  return (
    <article className="flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm p-6 gap-4 hover:shadow-md transition-shadow duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
      {/* TODO: Replace with verified customer review */}
      {review.isPlaceholder && (
        <div
          className="inline-flex items-center gap-1.5 self-start rounded-full bg-amber-50 border border-amber-200 px-2.5 py-1 text-xs font-medium text-amber-700"
          aria-label="Placeholder review — not yet verified"
        >
          {/* TODO: Replace with verified customer review */}
          <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          Sample review
        </div>
      )}

      {/* Stars + platform */}
      <div className="flex items-center justify-between gap-2">
        <StarRating rating={review.rating} />
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <GoogleLogo />
          <span>Google</span>
        </div>
      </div>

      {/* Review text */}
      <blockquote className="flex-1">
        <p className="text-sm italic text-slate-700 leading-relaxed">
          &ldquo;{review.text}&rdquo;
        </p>
      </blockquote>

      {/* Reviewer attribution */}
      <footer className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Avatar initial */}
          <div
            className="flex-shrink-0 h-8 w-8 rounded-full bg-[#1e3a5f] flex items-center justify-center text-xs font-bold text-white uppercase"
            aria-hidden="true"
          >
            {displayName.charAt(0)}
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">
              {displayName}
            </p>
            {hasLocation && (
              <p className="text-xs text-slate-500 truncate">{review.location}</p>
            )}
          </div>
        </div>

        {review.date && (
          <time
            className="flex-shrink-0 text-xs text-slate-400 tabular-nums"
            dateTime={review.date}
          >
            {review.date}
          </time>
        )}
      </footer>
    </article>
  )
}
