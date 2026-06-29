import Link from 'next/link'
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white border-transparent shadow-sm hover:shadow',
  secondary:
    'bg-[#0d1b2a] hover:bg-[#1e3a5f] active:bg-[#0a1520] text-white border-transparent shadow-sm hover:shadow',
  outline:
    'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white bg-transparent',
  ghost:
    'bg-transparent border-transparent text-blue-600 hover:underline active:text-blue-800',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2.5',
}

const baseClasses =
  'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-150 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none leading-none'

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children?: React.ReactNode
}

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

function buildClassName(variant: ButtonVariant, size: ButtonSize, extra?: string): string {
  return [baseClasses, variantClasses[variant], sizeClasses[size], extra ?? '']
    .filter(Boolean)
    .join(' ')
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      className,
      children,
      href,
      ...rest
    } = props

    const resolvedClass = buildClassName(variant, size, className)

    if (href !== undefined) {
      return (
        <Link
          href={href}
          className={resolvedClass}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      )
    }

    return (
      <button
        className={resolvedClass}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonVariant, ButtonSize }
