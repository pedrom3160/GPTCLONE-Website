import {
  CircuitBoard,
  Cpu,
  FlaskConical,
  HardDrive,
  Heart,
  Info,
  MemoryStick,
  Microchip,
  Monitor,
  Plug,
  Router,
  Server,
  Snowflake,
  Wrench,
  Zap,
} from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, LinkButton, PageHero, SectionHeader } from '../components/ui'
import type { FinancialAreaId, HardwareKindId } from '../i18n/types'

const FINANCIAL_ICONS: Record<FinancialAreaId, typeof Microchip> = {
  hardware: Microchip,
  infrastructure: Server,
  storage: HardDrive,
  electricity: Zap,
  maintenance: Wrench,
  research: FlaskConical,
}

const HARDWARE_ICONS: Record<HardwareKindId, typeof CircuitBoard> = {
  gpu: CircuitBoard,
  workstation: Monitor,
  server: Server,
  ram: MemoryStick,
  storage: HardDrive,
  cpu: Cpu,
  motherboard: CircuitBoard,
  psu: Plug,
  network: Router,
  cooling: Snowflake,
}

const NOTICE_ICON = Info
const HEART_ICON = Heart

export function DonationsPage() {
  usePageMeta('donations')
  const { content, pageHref } = useLanguage()
  const donations = content.donations

  return (
    <>
      <PageHero kicker={donations.heroKicker} titlePlain={donations.heroTitle} lede={donations.heroLede} />

      {/* Honest notice */}
      <Container className="pt-16">
        <aside className="panel-raised flex items-start gap-4 border-warning/30 p-6 sm:p-7">
          <NOTICE_ICON aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
          <div>
            <h2 className="font-display text-base font-semibold tracking-tight text-ink">{donations.noticeTitle}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">{donations.noticeText}</p>
          </div>
        </aside>
      </Container>

      {/* Financial support */}
      <Container className="pt-20">
        <SectionHeader title={donations.financialTitle} text={donations.financialText} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {donations.financial.map((area) => {
            const Icon = FINANCIAL_ICONS[area.id]
            return (
              <li key={area.id} className="panel p-6">
                <Icon aria-hidden="true" className="h-5 w-5 text-blue" />
                <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{area.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{area.text}</p>
              </li>
            )
          })}
        </ul>
      </Container>

      {/* Hardware donation */}
      <Container className="pt-20">
        <SectionHeader title={donations.hardwareTitle} text={donations.hardwareText} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {donations.hardware.map((kind) => {
            const Icon = HARDWARE_ICONS[kind.id]
            return (
              <li key={kind.id} className="panel p-6">
                <Icon aria-hidden="true" className="h-5 w-5 text-cyan" />
                <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{kind.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{kind.text}</p>
              </li>
            )
          })}
        </ul>
      </Container>

      {/* Process */}
      <Container className="pt-20">
        <SectionHeader kicker={donations.processKicker} title={donations.processTitle} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {donations.steps.map((step, index) => (
            <li key={step.title} className="panel-raised p-6">
              <p className="mono-label">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <LinkButton to={pageHref('transparency')} variant="secondary">
            {content.nav.transparency}
          </LinkButton>
          <LinkButton to={pageHref('contact')}>
            <HEART_ICON aria-hidden="true" className="h-4 w-4" />
            {content.common.getInTouch}
          </LinkButton>
        </div>
      </Container>
    </>
  )
}
