import { ShieldCheck, Table2, TriangleAlert } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, PageHero, SectionHeader, StatusBadge } from '../components/ui'

export function TransparencyPage() {
  usePageMeta('transparency')
  const { content } = useLanguage()
  const transparency = content.transparency

  return (
    <>
      <PageHero kicker={transparency.heroKicker} titlePlain={transparency.heroTitle} lede={transparency.heroLede} />

      {/* What will be published */}
      <Container className="pt-20">
        <SectionHeader title={transparency.publishTitle} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transparency.published.map((item, index) => (
            <li key={item.title} className="panel p-6">
              <div className="flex items-center justify-between gap-3">
                <Table2 aria-hidden="true" className="h-5 w-5 text-cyan" />
                <span className="mono-label">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* Current status — honest empty state */}
      <Container className="pt-20">
        <article className="rounded-2xl border border-dashed border-line bg-deep/30 p-8 text-center sm:p-12">
          <div className="mx-auto mb-4 flex w-fit items-center justify-center rounded-full border border-line bg-elevated px-3 py-1">
            <StatusBadge status="planned" />
          </div>
          <h2 className="font-display text-xl font-semibold tracking-tight text-ink">{transparency.currentTitle}</h2>
          <TriangleAlert aria-hidden="true" className="mx-auto mt-4 h-5 w-5 text-warning/70" />
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted">{transparency.currentText}</p>
        </article>
      </Container>

      {/* Commitments */}
      <Container className="pt-20">
        <SectionHeader title={transparency.principlesTitle} />
        <ul className="grid gap-4 sm:grid-cols-2">
          {transparency.principles.map((principle) => (
            <li key={principle.title} className="panel-raised flex items-start gap-4 p-6">
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink">{principle.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{principle.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
