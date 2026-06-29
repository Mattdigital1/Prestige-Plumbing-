import type { CSSProperties } from 'react'

type SectionHeaderAlign = 'left' | 'center' | 'right'

type SectionHeaderProps = {
  /** Primary heading text */
  title: string
  /** Optional supporting paragraph below the heading */
  subtitle?: string
  /** Legacy: short uppercase label rendered above the heading */
  eyebrow?: string
  /** Horizontal alignment of the entire block */
  align?: SectionHeaderAlign
  /** Light variant for use on dark backgrounds */
  light?: boolean
  className?: string
}

const alignClasses: Record<SectionHeaderAlign, string> = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const headingColor = light ? 'text-white' : 'text-[#0d1b2a]'
  const subtitleColor = light ? 'text-slate-300' : 'text-slate-600'
  const eyebrowColor = light ? 'text-blue-300' : 'text-blue-600'

  return (
    <div className={`flex flex-col gap-3 ${alignClasses[align]} ${className}`}>
      {/* Blue accent bar */}
      <div
        aria-hidden="true"
        className="h-1 w-12 rounded-full bg-blue-600"
      />

      {eyebrow && (
        <p className={`text-sm font-semibold tracking-widest uppercase ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${headingColor}`}
        style={{ textWrap: 'balance' } as CSSProperties}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${subtitleColor}`}
          style={{ textWrap: 'pretty' } as CSSProperties}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
