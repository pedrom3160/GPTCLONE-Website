import { Link } from 'react-router'
import {
  AlertCircle, ArrowRight, Binary, CheckCircle2, Clock3, Cpu, Database, Gauge, GraduationCap, HeartHandshake, Microscope, Network, Quote, Server, Sparkles, Terminal, Workflow, Zap,
} from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, LinkButton, MonoTag, PageHero, SectionHeader, StatusBadge } from '../components/ui'
import type { HomeRoadmapLine, Pillar, PillarId, StatItem, TechId } from '../i18n/types'

const AREA_ICONS: Record<TechId, typeof Terminal> = {
  foundations: Terminal,
  tokenizer: Binary,
  transformer: Network,
  training: Workflow,
  'gpu-computing': Gauge,
  inference: Zap,
  'data-engineering': Database,
  'api-interface': Server,
}

const PILLAR_ICONS: Record<PillarId, typeof Cpu> = {
  ai: Cpu,
  research: Microscope,
  academy: GraduationCap,
  human: HeartHandshake,
}

const STAT_TONES: Record<StatItem['tone'], string> = {
  positive: 'text-success',
  neutral: 'text-ink',
  warning: 'text-warning',
  blocked: 'text-danger',
}

const ROADMAP_TONES: Record<HomeRoadmapLine['tone'], { icon: typeof CheckCircle2; className: string }> = {
  completed: { icon: CheckCircle2, className: 'text-success' },
  inProgress: { icon: Clock3, className: 'text-warning' },
  planned: { icon: Clock3, className: 'text-muted' },
  blocked: { icon: AlertCircle, className: 'text-danger' },
}

export function HomePage() {
  usePageMeta('home')
  const { content, pageHref } = useLanguage()
  const home = content.home

  return (
    <>
      <PageHero
        kicker={home.heroKicker}
        titlePlain={home.heroTitlePlain}
        titleAccent={home.heroTitleAccent}
        lede={home.heroLede}
        tagline={home.heroTagline}
        actions={[
          { label: home.heroPrimary, to: pageHref('about'), primary: true },
          { label: home.heroSecondary, to: pageHref('roadmap') },
        ]}
      />

      {/* Declared status strip */}
      <Container className="relative z-[1] -mt-10 sm:-mt-12">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {home.stats.map((stat) => (
            <li key={stat.label} className="panel-raised px-5 py-4">
              <p className={`font-display text-lg font-semibold tracking-tight ${STAT_TONES[stat.tone]}`}>{stat.value}</p>
              <p className="mt-1 text-[13px] leading-snug text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* Four pillars */}
      <Container className="pt-24">
        <SectionHeader kicker={home.pillarsKicker} title={home.pillarsTitle} text={home.pillarsText} />
        <ul className="grid gap-4 lg:grid-cols-2">
          {home.pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </ul>
      </Container>

      {/* People first — institutional philosophy */}
      <Container className="pt-24">
        <SectionHeader kicker={home.philosophyKicker} title={home.philosophyTitle} />
        <article className="panel-raised relative overflow-hidden p-6 sm:p-10">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_-10%,var(--glow),transparent_70%)]" />
          <blockquote className="relative">
            <Quote aria-hidden="true" className="h-6 w-6 text-accent" />
            <p className="mt-4 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[28px]">
              {home.philosophyQuote}
            </p>
          </blockquote>
          <p className="relative mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">{home.philosophyText}</p>
          <ul className="relative mt-8 flex flex-wrap gap-2.5">
            {home.philosophyValues.map((value) => (
              <li
                key={value}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] font-medium text-ink-soft"
              >
                <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
                {value}
              </li>
            ))}
          </ul>
        </article>
      </Container>

      {/* Mission */}
      <Container className="pt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader kicker={home.missionKicker} title={home.missionTitle} text={home.missionText} />
            <div className="flex flex-wrap gap-3">
              <LinkButton to={pageHref('technology')}>{content.common.learnMore}</LinkButton>
              <LinkButton to={pageHref('research')} variant="secondary">{content.nav.research}</LinkButton>
            </div>
          </div>
          <ul className="panel-raised grid gap-x-6 gap-y-3 p-6 sm:grid-cols-2 sm:p-8">
            {home.missionBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Honest development state */}
      <Container className="pt-24">
        <SectionHeader align="center" kicker={content.statusLabels.measured} title={home.honestTitle} />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="panel-raised p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <StatusBadge status="implemented" />
              <MonoTag>M0</MonoTag>
            </div>
            <ul className="flex flex-col gap-5">
              {home.honestDone.map((point) => (
                <li key={point.title} className="border-l-2 border-success/50 pl-4">
                  <p className="font-semibold text-ink">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{point.text}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="panel-raised p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <StatusBadge status="blocked" />
              <MonoTag>M1–M13</MonoTag>
            </div>
            <ul className="flex flex-col gap-5">
              {home.honestPlanned.map((point) => (
                <li key={point.title} className="border-l-2 border-danger/40 pl-4">
                  <p className="font-semibold text-ink">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{point.text}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>

      {/* Research areas */}
      <Container className="pt-24">
        <SectionHeader kicker={home.areasKicker} title={home.areasTitle} text={home.areasText} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.areas.map((area) => {
            const Icon = AREA_ICONS[area.id]
            return (
              <li key={area.id} className="panel group p-5 transition-colors hover:border-line-strong">
                <Icon aria-hidden="true" className="h-5 w-5 text-cyan" />
                <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{area.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{area.text}</p>
              </li>
            )
          })}
        </ul>
      </Container>

      {/* Roadmap preview */}
      <Container className="pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <div>
            <SectionHeader kicker={home.roadmapKicker} title={home.roadmapTitle} text={home.roadmapText} />
            <LinkButton to={pageHref('roadmap')}>{content.common.viewRoadmap}</LinkButton>
          </div>
          <article className="panel-raised p-6 sm:p-8">
            <ul className="flex flex-col">
              {home.roadmapPreview.map((line) => {
                const Tone = ROADMAP_TONES[line.tone]
                return (
                  <li key={line.title} className="flex items-start gap-4 border-b border-line py-3.5 first:pt-0 last:border-b-0 last:pb-0">
                    <MonoTag>{line.code}</MonoTag>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-snug text-ink">{line.title}</p>
                      <p className="mt-0.5 text-[13px] leading-snug text-muted">{line.text}</p>
                    </div>
                    <Tone.icon aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${Tone.className}`} />
                  </li>
                )
              })}
            </ul>
          </article>
        </div>
      </Container>

      {/* Participation CTAs */}
      <Container className="pt-24">
        <ul className="grid gap-4 lg:grid-cols-3">
          {(
            [
              { title: home.collabTitle, text: home.collabText, page: 'contribute' as const },
              { title: home.donationsTitle, text: home.donationsText, page: 'donations' as const },
              { title: home.contactTitle, text: home.contactText, page: 'contact' as const },
            ]
          ).map((cta) => (
            <li key={cta.page}>
              <NavLinkCard title={cta.title} text={cta.text} to={pageHref(cta.page)} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

/** One institutional pillar — icon, declared status, scope and optional real link. */
function PillarCard({ pillar }: { pillar: Pillar }) {
  const { pageHref } = useLanguage()
  const Icon = PILLAR_ICONS[pillar.id]
  return (
    <li id={`pillar-${pillar.id}`} className="panel-raised flex flex-col p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-accent-soft">
          <Icon className="h-5 w-5 text-accent" />
        </span>
        <StatusBadge status={pillar.status} />
      </div>
      <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{pillar.kicker}</p>
      <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-ink">{pillar.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{pillar.text}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {pillar.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {pillar.formula !== null && (
        <p className="mt-4 w-fit rounded-lg border border-line bg-deep/40 px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
          {pillar.formula}
        </p>
      )}
      {pillar.page !== null && pillar.linkLabel !== null && (
        <div className="mt-5">
          <LinkButton to={pageHref(pillar.page)} variant="secondary">
            {pillar.linkLabel}
          </LinkButton>
        </div>
      )}
    </li>
  )
}

function NavLinkCard({ title, text, to }: { title: string; text: string; to: string }) {
  return (
    <article className="panel group relative block h-full p-6 transition-colors hover:border-accent/60">
      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
      <ArrowRight
        aria-hidden="true"
        className="mt-4 h-4 w-4 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent motion-reduce:transform-none"
      />
      <Link className="absolute inset-0" aria-hidden="true" tabIndex={-1} to={to}>
        {title}
      </Link>
    </article>
  )
}
