import { AlertCircle, CheckCircle2, Clock3, Lock } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, PageHero } from '../components/ui'
import type { RoadmapStatus } from '../i18n/types'

const STATUS_META: Record<RoadmapStatus, { icon: typeof CheckCircle2; iconClass: string; lineClass: string; chipClass: string }> = {
  completed: {
    icon: CheckCircle2,
    iconClass: 'text-success',
    lineClass: 'after:bg-success',
    chipClass: 'border-success/40 text-success',
  },
  inProgress: {
    icon: Clock3,
    iconClass: 'text-warning',
    lineClass: 'after:bg-warning',
    chipClass: 'border-warning/40 text-warning',
  },
  planned: {
    icon: Clock3,
    iconClass: 'text-muted',
    lineClass: 'after:bg-line-strong',
    chipClass: 'border-line text-muted',
  },
  blocked: {
    icon: AlertCircle,
    iconClass: 'text-danger',
    lineClass: 'after:bg-danger',
    chipClass: 'border-danger/40 text-danger',
  },
}

export function RoadmapPage() {
  usePageMeta('roadmap')
  const { content } = useLanguage()
  const roadmap = content.roadmap

  return (
    <>
      <PageHero
        kicker={roadmap.heroKicker}
        titlePlain={roadmap.heroTitle}
        lede={roadmap.heroLede}
      />

      {/* Progression rules */}
      <Container className="pt-16">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1.6fr]">
          <div className="panel-raised relative overflow-hidden p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink">
              <Lock aria-hidden="true" className="h-4.5 w-4.5 text-cyan" />
              {roadmap.gatesTitle}
            </h2>
            <ol className="mt-4 flex flex-col gap-2.5">
              {roadmap.gates.map((gate, index) => (
                <li key={gate} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <span className="mono-label mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                  <span>{gate}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">{roadmap.legendNote}</p>
          </div>
          <div className="panel-raised p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold tracking-tight text-ink">{roadmap.blockNoteTitle}</h2>
            <div className="mt-4 rounded-xl border border-danger/25 bg-danger/5 p-4">
              <p className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-danger">
                <AlertCircle aria-hidden="true" className="h-4 w-4" />
                M1
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{roadmap.blockNoteText}</p>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">{roadmap.totalNote}</p>
          </div>
        </div>
      </Container>

      {/* Phases timeline */}
      <Container className="pt-20">
        <ol className="flex flex-col gap-12">
          {roadmap.phases.map((phase) => (
            <li key={phase.id}>
              <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{phase.title}</h2>
                <p className="text-sm text-muted">{phase.summary}</p>
              </div>
              <ul className="relative ml-3 space-y-2 border-l border-line">
                {phase.milestones.map((milestone) => {
                  const meta = STATUS_META[milestone.status]
                  const Icon = meta.icon
                  return (
                    <li key={milestone.code} className="relative pl-8">
                      <span aria-hidden="true" className={`absolute -left-[5.5px] top-4 h-2.5 w-2.5 rounded-full ${meta.lineClass}`} />
                      <div className="panel group grid gap-4 p-5 transition-colors hover:border-line-strong sm:grid-cols-[auto_1fr_auto] sm:items-center">
                        <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-mono text-xs font-bold ${meta.chipClass}`}>
                          {milestone.code}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink">
                            {milestone.title}
                            {milestone.hours !== null && <span className="ml-2.5 font-mono text-[11px] font-medium normal-case text-muted">{milestone.hours}</span>}
                          </h3>
                          <p className="mt-1 text-[13px] leading-relaxed text-muted">{milestone.summary}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${meta.iconClass}`}>
                          <Icon aria-hidden="true" className="h-4 w-4" />
                          {content.statusLabels[milestone.status]}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </>
  )
}
