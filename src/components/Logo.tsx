import { Link } from 'react-router'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * Original brand mark: a neural ring forming a stylised "G", echoing the
 * favicon. Rendered inline so it adapts to both themes via currentColor.
 */
export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect x="1.5" y="1.5" width="61" height="61" rx="14" className="fill-elevated stroke-line-strong" strokeWidth="1.5" />
      <path d="M 47.5 21.5 A 19 19 0 1 0 47.5 42.5 L 47.5 34 L 36.5 34" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="47.5" cy="21.5" r="3.4" className="fill-blue" />
      <circle cx="47.5" cy="42.5" r="3.4" className="fill-accent" />
      <circle cx="17" cy="32" r="2.6" className="fill-blue" />
    </svg>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  const { content } = useLanguage()
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5 rounded-lg"
      title={content.meta.tagline}
    >
      <LogoMark className={`h-8 w-8 shrink-0 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none ${compact ? 'max-sm:h-7 max-sm:w-7' : ''}`} />
      <span className="font-display text-[17px] font-bold tracking-tight text-ink">
        GPTCLONE
      </span>
    </Link>
  )
}
