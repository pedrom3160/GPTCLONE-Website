import { Link } from 'react-router'
import type { ReactNode } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { NeuralBackdrop } from '../lib/NeuralBackdrop'
import type { DevStatus } from '../i18n/types'

export function Container({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

const STATUS_TONES: Record<DevStatus, string> = {
  completed: 'text-success-strong border-success/35 bg-success/10',
  implemented: 'text-success-strong border-success/35 bg-success/10',
  inProgress: 'text-warning-strong border-warning/35 bg-warning/10',
  planned: 'text-muted border-line bg-transparent',
  blocked: 'text-danger border-danger/35 bg-danger/10',
  specified: 'text-cyan-strong border-cyan/35 bg-cyan/10',
  measured: 'text-blue border-blue/35 bg-blue/10',
}

/** Declared development state pill — the site's honesty device. */
export function StatusBadge({ status }: { status: DevStatus }) {
  const { content } = useLanguage()
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold tracking-wide ${STATUS_TONES[status]}`}>
      <span
        aria-hidden="true"
        className={`inline-block h-1.5 w-1.5 rounded-full bg-current ${status === 'inProgress' ? 'motion-safe:animate-pulse' : ''}`}
      />
      {content.statusLabels[status]}
    </span>
  )
}

export function MonoTag({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-line bg-deep/40 px-2.5 py-0.5 font-mono text-[11px] font-semibold tracking-wider text-muted">{children}</span>
}

export function SectionHeader({
  kicker,
  title,
  text,
  align = 'left',
}: {
  kicker?: string
  title: string
  text?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      {kicker !== undefined && <p className="mono-label mb-3">{kicker}</p>}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {text !== undefined && <p className={`mt-3 max-w-2xl text-[15px] leading-relaxed text-muted ${align === 'center' ? 'mx-auto' : ''}`}>{text}</p>}
    </div>
  )
}

const LINK_BUTTON_VARIANTS = {
  primary: 'border-accent bg-accent text-accent-fg hover:bg-accent-strong',
  secondary: 'border-line-strong bg-transparent text-ink-soft hover:border-accent hover:text-ink hover:bg-accent-soft',
} as const

export function LinkButton({
  to,
  variant = 'primary',
  className = '',
  children,
}: {
  to: string
  variant?: keyof typeof LINK_BUTTON_VARIANTS
  className?: string
  children: ReactNode
}) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-colors duration-150 ${LINK_BUTTON_VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

export interface HeroAction {
  label: string
  to: string
  primary?: boolean
}

/** Page hero with the neural backdrop, shared by every routed page. */
export function PageHero({
  kicker,
  titlePlain,
  titleAccent,
  lede,
  actions,
}: {
  kicker: string
  titlePlain: string
  titleAccent?: string
  lede?: string
  actions?: HeroAction[]
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(58%_64%_at_50%_-12%,var(--glow),transparent_70%)]"
      />
      <div className="absolute inset-x-0 top-0 bottom-0">
        <NeuralBackdrop />
      </div>
      <Container className="relative py-20 sm:py-28">
        <p className="mono-label mb-5">{kicker}</p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
          {titlePlain}
          {titleAccent !== undefined && (
            <>
              {' '}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">{titleAccent}</span>
            </>
          )}
        </h1>
        {lede !== undefined && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{lede}</p>}
        {actions !== undefined && actions.length > 0 && (
          <div className="mt-9 flex flex-wrap gap-3">
            {actions.map((action) => (
              <LinkButton key={action.to} to={action.to} variant={action.primary ? 'primary' : 'secondary'}>
                {action.label}
              </LinkButton>
            ))}
          </div>
        )}
      </Container>
    </header>
  )
}
