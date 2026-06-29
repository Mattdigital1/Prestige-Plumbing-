import GHLForm from '@/components/ui/GHLForm'

interface QuickQuoteFormProps {
  heading?: string
  subtext?: string
  darkBackground?: boolean
  className?: string
  instanceId?: string
}

export default function QuickQuoteForm({
  heading = 'Get a Free Estimate',
  subtext = 'Call or submit a request — we respond fast.',
  darkBackground = true,
  className = '',
  instanceId,
}: QuickQuoteFormProps) {
  return (
    <section
      className={[
        'py-12 sm:py-16',
        darkBackground ? 'bg-[#1e3a5f]' : 'bg-slate-50',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={heading}
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2
            className={[
              'text-2xl font-extrabold tracking-tight sm:text-3xl',
              darkBackground ? 'text-white' : 'text-[#0d1b2a]',
            ].join(' ')}
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {heading}
          </h2>
          <p
            className={[
              'mt-2 text-sm sm:text-base',
              darkBackground ? 'text-slate-300' : 'text-slate-600',
            ].join(' ')}
          >
            {subtext}
          </p>
        </div>

        <div
          className={[
            'overflow-hidden rounded-xl',
            darkBackground ? 'ring-1 ring-white/20' : 'shadow-lg ring-1 ring-slate-200',
          ].join(' ')}
        >
          <GHLForm instanceId={instanceId} />
        </div>
      </div>
    </section>
  )
}
