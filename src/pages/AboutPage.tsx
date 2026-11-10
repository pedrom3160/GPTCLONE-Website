import { CheckCircle2, CircleAlert } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, MonoTag, PageHero, SectionHeader } from '../components/ui'

export function AboutPage() {
  usePageMeta('about')
  const { content } = useLanguage()
  const about = content.about

  return (
    <>
      <PageHero
        kicker={about.heroKicker}
        titlePlain={about.heroTitle}
        lede={about.heroLede}
      />

      {/* History timeline */}
      <Container className="pt-20">
        <SectionHeader kicker={about.historyKicker} title={about.historyTitle} />
        <ol className="relative ml-3 border-l border-line">
          {about.history.map((entry) => (
            <li key={entry.title} className="relative pb-10 pl-8 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              <p className="mono-label mb-1.5">{entry.date}</p>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{entry.title}</h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{entry.text}</p>
            </li>
          ))}
        </ol>
      </Container>

      {/* Mission & vision */}
      <Container className="pt-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="panel-raised p-6 sm:p-8">
            <MonoTag>{about.mission.title}</MonoTag>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{about.mission.text}</p>
          </article>
          <article className="panel-raised p-6 sm:p-8">
            <MonoTag>{about.vision.title}</MonoTag>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{about.vision.text}</p>
          </article>
        </div>
      </Container>

      {/* Technological independence */}
      <Container className="pt-20">
        <SectionHeader kicker={about.independenceKicker} title={about.independenceTitle} text={about.independenceText} />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="panel p-6 sm:p-8">
            <h3 className="mb-4 flex items-center gap-2 font-display text-base font-semibold text-success">
              <CheckCircle2 aria-hidden="true" className="h-4.5 w-4.5" />
              {about.usedTitle}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {about.used.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="panel p-6 sm:p-8">
            <h3 className="mb-4 flex items-center gap-2 font-display text-base font-semibold text-danger">
              <CircleAlert aria-hidden="true" className="h-4.5 w-4.5" />
              {about.notUsedTitle}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {about.notUsed.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>

      {/* Philosophy principles */}
      <Container className="pt-20">
        <SectionHeader kicker={about.philosophyKicker} title={about.philosophyTitle} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.principles.map((principle, index) => (
            <li key={principle.title} className="panel p-6">
              <p className="mono-label">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{principle.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{principle.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* Name + founder note */}
      <Container className="pt-20">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <article className="panel-raised relative overflow-hidden p-6 sm:p-8">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(50%_60%_at_100%_0%,var(--glow),transparent_70%)]" />
            <h3 className="relative font-display text-xl font-semibold tracking-tight text-ink">{about.nameTitle}</h3>
            <p className="relative mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{about.nameText}</p>
          </article>
          <article className="panel p-6 sm:p-8">
            <h3 className="font-display text-base font-semibold tracking-tight text-ink">{about.founderTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{about.founderText}</p>
          </article>
        </div>
      </Container>
    </>
  )
}
