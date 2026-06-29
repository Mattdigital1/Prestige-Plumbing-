// ---------------------------------------------------------------------------
// ImagePlaceholder — drop-in for areas awaiting real photography
// ---------------------------------------------------------------------------

interface ImagePlaceholderProps {
  alt: string
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2'
  className?: string
  label?: string
}

// Maps the aspect-ratio prop to a padding-bottom percentage so the element
// maintains its ratio before the CSS `aspect-ratio` property is available,
// and also provides the Tailwind aspect-ratio class as a redundant hint.
const ASPECT_MAP: Record<
  NonNullable<ImagePlaceholderProps['aspectRatio']>,
  { paddingBottom: string; tailwind: string }
> = {
  '16/9': { paddingBottom: '56.25%', tailwind: 'aspect-video' },
  '4/3':  { paddingBottom: '75%',    tailwind: 'aspect-[4/3]' },
  '1/1':  { paddingBottom: '100%',   tailwind: 'aspect-square' },
  '3/2':  { paddingBottom: '66.67%', tailwind: 'aspect-[3/2]' },
}

export default function ImagePlaceholder({
  alt,
  aspectRatio = '16/9',
  className = '',
  label,
}: ImagePlaceholderProps) {
  const { paddingBottom, tailwind } = ASPECT_MAP[aspectRatio]
  const displayLabel = label ?? alt

  return (
    // Outer wrapper maintains aspect ratio via padding-bottom trick; the inner
    // div is positioned absolutely to fill it.
    <figure
      className={`relative w-full overflow-hidden rounded-lg ${tailwind} ${className}`}
      style={{ paddingBottom: `clamp(0px, ${paddingBottom}, 9999px)` }}
      role="img"
      aria-label={`Placeholder image: ${alt}`}
    >
      {/* Inner fill — absolutely positioned */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100">

        {/* Diagonal stripe pattern via SVG background */}
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={`stripes-${alt.replace(/\s+/g, '-').toLowerCase()}`}
              patternUnits="userSpaceOnUse"
              width="16"
              height="16"
              patternTransform="rotate(45)"
            >
              <rect width="16" height="16" fill="#f1f5f9" />
              <line x1="0" y1="0" x2="0" y2="16" stroke="#e2e8f0" strokeWidth="6" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#stripes-${alt.replace(/\s+/g, '-').toLowerCase()})`}
          />
        </svg>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-4 text-center">
          {/* Camera icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-sm ring-1 ring-slate-200">
            <svg
              className="h-6 w-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
          </div>

          {/* Alt text as descriptive label */}
          <p className="max-w-[20ch] text-sm font-medium text-slate-500 leading-snug text-balance">
            {displayLabel}
          </p>

          {/* Developer TODO indicator */}
          <p className="font-mono text-xs text-slate-400 bg-white/60 px-2 py-1 rounded border border-slate-200 leading-none">
            {/* TODO: Add photo: {alt} */}
            TODO: Add photo
          </p>
        </div>
      </div>
    </figure>
  )
}
