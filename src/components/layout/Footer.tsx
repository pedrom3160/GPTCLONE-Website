import { NavLink } from 'react-router'
import { CheckCircle2, AlertCircle, Clock3 } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Logo } from '../Logo'
import { Container } from '../ui'
import type { PageId } from '../../i18n/types'

const PROJECT_LINKS: PageId[] = ['about', 'technology', 'research', 'roadmap']
const COMMUNITY_LINKS: PageId[] = ['contribute', 'donations', 'transparency', 'contact']

const STATE_ICONS = {
  completed: CheckCircle2,
  blocked: AlertCircle,
  neutral: Clock3,
} as const

function FooterNav({ pages, label }: { pages: PageId[]; label: string }) {
  const { content, pageHref } = useLanguage()
  return (
    <nav aria-label={label}>
      <h3 className="mono-label mb-3">{label}</h3>
      <ul className="flex flex-col gap-2">
        {pages.map((page) => (
          <li key={page}>
            <NavLink to={pageHref(page)} className="text-sm text-ink-soft transition-colors hover:text-accent">
              {content.meta.pages[page].title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function StatusColumn() {
  const { content } = useLanguage()
  return (
    <div>
      <h3 className="mono-label mb-3">{content.footer.statusTitle}</h3>
      <ul className="flex flex-col gap-2.5">
        {content.footer.statusLines.map((line) => {
          const blocked = line.toLowerCase().includes(content.statusLabels.blocked.toLowerCase())
          const done = line.toLowerCase().includes(content.statusLabels.completed.toLowerCase())
          const Icon = blocked ? STATE_ICONS.blocked : done ? STATE_ICONS.completed : STATE_ICONS.neutral
          return (
            <li key={line} className="flex items-start gap-2 text-sm leading-snug text-muted">
              <Icon aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${blocked ? 'text-danger' : done ? 'text-success' : 'text-muted'}`} />
              <span>{line}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function Footer() {
  const { content } = useLanguage()
  return (
    <footer className="mt-24 border-t border-line bg-deep/50">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{content.footer.blurb}</p>
          <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
            {content.footer.tagline}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">{content.footer.builtNote}</p>
        </div>
        <FooterNav pages={PROJECT_LINKS} label={content.footer.projectTitle} />
        <FooterNav pages={COMMUNITY_LINKS} label={content.footer.communityTitle} />
        <StatusColumn />
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-1.5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GPTCLONE — {content.meta.tagline}</p>
          <p>{content.footer.note}</p>
        </Container>
      </div>
    </footer>
  )
}
