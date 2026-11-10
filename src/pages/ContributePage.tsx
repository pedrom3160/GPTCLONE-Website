import {
  Binary,
  Code2,
  Cpu,
  Database,
  FileText,
  LineChart,
  MessageSquare,
  Network,
  Server,
  Sigma,
  Users,
} from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, LinkButton, MonoTag, PageHero, SectionHeader } from '../components/ui'
import type { ContributeAreaId } from '../i18n/types'

const AREA_ICONS: Record<ContributeAreaId, typeof Code2> = {
  python: Code2,
  'machine-learning': LineChart,
  'deep-learning': Binary,
  math: Sigma,
  transformers: Network,
  cuda: Cpu,
  infrastructure: Server,
  'data-engineering': Database,
  nlp: MessageSquare,
  'evaluation-docs': FileText,
}

const AUDIENCE_ICON = Users

export function ContributePage() {
  usePageMeta('contribute')
  const { content, pageHref } = useLanguage()
  const contribute = content.contribute

  return (
    <>
      <PageHero kicker={contribute.heroKicker} titlePlain={contribute.heroTitle} lede={contribute.heroLede} />

      {/* Audience */}
      <Container className="pt-16">
        <div className="flex flex-wrap items-center gap-3">
          <MonoTag>{contribute.audiencesTitle}</MonoTag>
          {contribute.audiences.map((audience) => (
            <span key={audience} className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm font-medium text-ink-soft">
              <AUDIENCE_ICON aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
              {audience}
            </span>
          ))}
        </div>
      </Container>

      {/* Areas of interest */}
      <Container className="pt-14">
        <SectionHeader title={contribute.areasTitle} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contribute.areas.map((area) => {
            const Icon = AREA_ICONS[area.id]
            return (
              <li key={area.id} className="panel p-6">
                <Icon aria-hidden="true" className="h-5 w-5 text-cyan" />
                <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{area.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{area.text}</p>
              </li>
            )
          })}
        </ul>
      </Container>

      {/* Process */}
      <Container className="pt-20">
        <SectionHeader kicker={contribute.processKicker} title={contribute.processTitle} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contribute.steps.map((step, index) => (
            <li key={step.title} className="panel-raised relative p-6">
              <p className="mono-label">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <LinkButton to={pageHref('contact')}>{content.common.getInTouch}</LinkButton>
          <p className="max-w-xl text-[13px] leading-relaxed text-muted">{contribute.note}</p>
        </div>
      </Container>
    </>
  )
}
