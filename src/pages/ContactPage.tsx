import {
  Building2,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Heart,
  Inbox,
  Mail,
  MessageSquare,
  ShieldOff,
} from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, PageHero, SectionHeader, StatusBadge } from '../components/ui'
import type { ContactCategoryId } from '../i18n/types'

const CATEGORY_ICONS: Record<ContactCategoryId, typeof Mail> = {
  general: Mail,
  'research-collab': GraduationCap,
  technical: MessageSquare,
  donations: Heart,
  hardware: Cpu,
}

const STATUS_ICONS = {
  channel: Inbox,
  privacy: ShieldOff,
  ready: Building2,
}

export function ContactPage() {
  usePageMeta('contact')
  const { content } = useLanguage()
  const contact = content.contact

  return (
    <>
      <PageHero kicker={contact.heroKicker} titlePlain={contact.heroTitle} lede={contact.heroLede} />

      {/* Categories */}
      <Container className="pt-20">
        <SectionHeader title={contact.categoriesTitle} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contact.categories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id]
            return (
              <li key={category.id} className="panel p-6">
                <Icon aria-hidden="true" className="h-5 w-5 text-cyan" />
                <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{category.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{category.text}</p>
              </li>
            )
          })}
        </ul>
      </Container>

      {/* Honest channel status */}
      <Container className="pt-20">
        <article className="panel-raised grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <StatusBadge status="planned" />
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {contact.channelTitle}
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">{contact.channelText}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {contact.channelBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col justify-center gap-4 rounded-xl border border-line bg-deep/40 p-6">
            <li className="flex items-start gap-3 text-sm text-muted">
              <STATUS_ICONS.channel aria-hidden="true" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted" />
              <span>{contact.channelText}</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted">
              <STATUS_ICONS.privacy aria-hidden="true" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted" />
              <span>{contact.channelBullets[0]}</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted">
              <STATUS_ICONS.ready aria-hidden="true" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted" />
              <span>{contact.channelBullets[1]}</span>
            </li>
          </ul>
        </article>
        <p className="mt-6 text-[13px] text-muted">{contact.privacyNote}</p>
      </Container>
    </>
  )
}
