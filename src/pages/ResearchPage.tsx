import { BookMarked, Compass, FileCheck, Languages, Radar, Ruler, Scale } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, MonoTag, PageHero, SectionHeader } from '../components/ui'
import type { ResearchId } from '../i18n/types'

const LINE_ICONS: Record<ResearchId, typeof Ruler> = {
  precision: Ruler,
  'tokenizer-compression': Languages,
  'small-scale': Radar,
  provenance: FileCheck,
  evaluation: Scale,
}

const METHOD_ICON = Compass

export function ResearchPage() {
  usePageMeta('research')
  const { content } = useLanguage()
  const research = content.research

  return (
    <>
      <PageHero
        kicker={research.heroKicker}
        titlePlain={research.heroTitle}
        lede={research.heroLede}
      />

      {/* Research lines */}
      <Container className="pt-20">
        <SectionHeader title={research.linesTitle} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {research.lines.map((line, index) => {
            const Icon = LINE_ICONS[line.id]
            return (
              <li key={line.id} className="panel flex flex-col p-6">
                <MonoTag>{`R${String(index + 1).padStart(2, '0')}`}</MonoTag>
                <h3 className="mt-3 flex items-start gap-2 font-display text-base font-semibold tracking-tight text-ink">
                  <Icon aria-hidden="true" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-cyan" />
                  {line.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{line.text}</p>
              </li>
            )
          })}
        </ul>
      </Container>

      {/* Experiment log */}
      <Container className="pt-20">
        <article className="panel-raised relative overflow-hidden p-6 sm:p-10">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(45%_70%_at_100%_-10%,var(--glow),transparent_70%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight text-ink">
                <BookMarked aria-hidden="true" className="h-6 w-6 text-cyan" />
                {research.logTitle}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">{research.logText}</p>
            </div>
            <p className="rounded-xl border border-line bg-deep/40 p-4 font-mono text-xs leading-relaxed text-muted">
              {research.releaseNote}
            </p>
          </div>
        </article>
      </Container>

      {/* Method */}
      <Container className="pt-20">
        <SectionHeader title={research.methodologyTitle} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {research.methodology.map((method) => (
            <li key={method.title} className="panel p-6">
              <METHOD_ICON aria-hidden="true" className="h-5 w-5 text-blue" />
              <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{method.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{method.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* Research and social responsibility */}
      <Container className="pt-20">
        <article className="panel-raised relative overflow-hidden p-6 sm:p-10">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(45%_70%_at_100%_-10%,var(--glow),transparent_70%)]" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mono-label mb-3">{research.responsibilityKicker}</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {research.responsibilityTitle}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">{research.responsibilityText}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {research.responsibilityPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Container>
    </>
  )
}
