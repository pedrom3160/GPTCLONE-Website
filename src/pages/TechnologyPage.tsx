import {
  Database,
  Gauge,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
  Binary,
} from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, MonoTag, PageHero, SectionHeader, StatusBadge } from '../components/ui'
import type { TechId } from '../i18n/types'

const SECTION_ICONS: Record<TechId, typeof Terminal> = {
  foundations: Terminal,
  tokenizer: Binary,
  transformer: Network,
  training: Workflow,
  'gpu-computing': Gauge,
  inference: Zap,
  'data-engineering': Database,
  'api-interface': Server,
}

export function TechnologyPage() {
  usePageMeta('technology')
  const { content } = useLanguage()
  const tech = content.technology

  return (
    <>
      <PageHero
        kicker={tech.heroKicker}
        titlePlain={tech.heroTitle}
        lede={tech.heroLede}
      />

      <Container className="pt-16">
        <p className="panel-raised flex items-start gap-3 p-4 text-[13px] leading-relaxed text-muted">
          <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
          <span>{tech.legendText}</span>
        </p>
      </Container>

      {/* Component sections with declared states */}
      <Container className="pt-10">
        <ul className="flex flex-col gap-4">
          {tech.sections.map((section) => {
            const Icon = SECTION_ICONS[section.id]
            return (
              <li key={section.id} id={section.id} className="panel-raised scroll-mt-24 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-deep/60">
                    <Icon className="h-5 w-5 text-cyan" />
                  </span>
                  <h2 className="min-w-0 flex-1 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {section.title}
                  </h2>
                  <StatusBadge status={section.status} />
                  {section.milestone !== null && <MonoTag>{section.milestone}</MonoTag>}
                </div>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{section.text}</p>
                <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </Container>

      {/* Integrity guarantees */}
      <Container className="pt-20">
        <SectionHeader title={tech.integrityTitle} text={tech.integrityText} />
        <ul className="panel grid gap-x-8 gap-y-3 p-6 sm:grid-cols-2 sm:p-8">
          {tech.integrityBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
