/**
 * i18n contract types.
 *
 * Every language file must satisfy `SiteContent` exactly: the TypeScript
 * check fails if a translated section or field is missing, which keeps the
 * three languages (and any future languages) structurally complete.
 * `id` fields are machine keys shared across languages (used for anchors
 * and icon lookup) — they must be identical in every translation and are
 * therefore enforced as closed unions.
 */

export type LangCode = 'pt' | 'en' | 'es'

export type PageId =
  | 'home'
  | 'about'
  | 'technology'
  | 'research'
  | 'roadmap'
  | 'contribute'
  | 'donations'
  | 'transparency'
  | 'contact'

/** Development states published across the site. */
export type DevStatus =
  | 'completed'
  | 'inProgress'
  | 'planned'
  | 'blocked'
  | 'implemented'
  | 'specified'
  | 'measured'

/** Roadmap-only states (subset of DevStatus from the project's roadmap). */
export type RoadmapStatus = 'completed' | 'inProgress' | 'planned' | 'blocked'

export type TechId =
  | 'foundations'
  | 'tokenizer'
  | 'transformer'
  | 'training'
  | 'gpu-computing'
  | 'inference'
  | 'data-engineering'
  | 'api-interface'

export type ResearchId =
  | 'precision'
  | 'tokenizer-compression'
  | 'small-scale'
  | 'provenance'
  | 'evaluation'

export type ContributeAreaId =
  | 'python'
  | 'machine-learning'
  | 'deep-learning'
  | 'math'
  | 'transformers'
  | 'cuda'
  | 'infrastructure'
  | 'data-engineering'
  | 'nlp'
  | 'evaluation-docs'

export type FinancialAreaId =
  | 'hardware'
  | 'infrastructure'
  | 'storage'
  | 'electricity'
  | 'maintenance'
  | 'research'

export type HardwareKindId =
  | 'gpu'
  | 'workstation'
  | 'server'
  | 'ram'
  | 'storage'
  | 'cpu'
  | 'motherboard'
  | 'psu'
  | 'network'
  | 'cooling'

export type ContactCategoryId =
  | 'general'
  | 'research-collab'
  | 'technical'
  | 'donations'
  | 'hardware'

export interface PageMeta {
  title: string
  description: string
}

export interface StatItem {
  value: string
  label: string
  tone: 'positive' | 'neutral' | 'warning' | 'blocked'
}

export interface StatusPoint {
  title: string
  text: string
}

export interface TechSection {
  id: TechId
  status: DevStatus
  /** e.g. "M2" — rendered as the related milestone, null when not applicable. */
  milestone: string | null
  title: string
  text: string
  bullets: string[]
}

export interface ResearchLine {
  id: ResearchId
  title: string
  text: string
}

export interface RoadmapMilestone {
  code: string
  title: string
  status: RoadmapStatus
  summary: string
  /** Effort estimate string ("60–90 h") or null (e.g. M0). */
  hours: string | null
}

export interface RoadmapPhase {
  id: string
  title: string
  summary: string
  milestones: RoadmapMilestone[]
}

export interface ContributeArea {
  id: ContributeAreaId
  title: string
  text: string
}

export interface FinancialArea {
  id: FinancialAreaId
  title: string
  text: string
}

export interface HardwareKind {
  id: HardwareKindId
  title: string
  text: string
}

export interface ContactCategory {
  id: ContactCategoryId
  title: string
  text: string
}

export interface HomeRoadmapLine {
  code: string
  title: string
  tone: RoadmapStatus
  text: string
}

export interface SiteContent {
  meta: {
    tagline: string
    pages: Record<PageId, PageMeta>
    notFound: PageMeta
  }

  nav: {
    home: string
    about: string
    technology: string
    research: string
    roadmap: string
    contribute: string
    donations: string
    transparency: string
    contact: string
    /** Label of the desktop dropdown that groups community pages. */
    communityMenu: string
    openMenu: string
    closeMenu: string
    /** Accessible name of the navigation itself. */
    menuAria: string
    languageMenu: string
    themeToggle: string
    skipToContent: string
  }

  footer: {
    blurb: string
    projectTitle: string
    communityTitle: string
    statusTitle: string
    statusLines: string[]
    note: string
    builtNote: string
  }

  statusLabels: Record<DevStatus, string>

  common: {
    learnMore: string
    viewRoadmap: string
    getInTouch: string
  }

  home: {
    heroKicker: string
    heroTitlePlain: string
    heroTitleAccent: string
    heroLede: string
    heroPrimary: string
    heroSecondary: string
    stats: StatItem[]
    missionKicker: string
    missionTitle: string
    missionText: string
    missionBullets: string[]
    honestTitle: string
    honestDone: StatusPoint[]
    honestPlanned: StatusPoint[]
    areasKicker: string
    areasTitle: string
    areasText: string
    areas: { id: TechId; title: string; text: string }[]
    roadmapKicker: string
    roadmapTitle: string
    roadmapText: string
    roadmapPreview: HomeRoadmapLine[]
    collabTitle: string
    collabText: string
    donationsTitle: string
    donationsText: string
    contactTitle: string
    contactText: string
  }

  about: {
    heroKicker: string
    heroTitle: string
    heroLede: string
    historyKicker: string
    historyTitle: string
    history: { date: string; title: string; text: string }[]
    mission: { title: string; text: string }
    vision: { title: string; text: string }
    independenceKicker: string
    independenceTitle: string
    independenceText: string
    usedTitle: string
    used: string[]
    notUsedTitle: string
    notUsed: string[]
    philosophyKicker: string
    philosophyTitle: string
    principles: { title: string; text: string }[]
    nameTitle: string
    nameText: string
    founderTitle: string
    founderText: string
  }

  technology: {
    heroKicker: string
    heroTitle: string
    heroLede: string
    legendText: string
    sections: TechSection[]
    integrityTitle: string
    integrityText: string
    integrityBullets: string[]
  }

  research: {
    heroKicker: string
    heroTitle: string
    heroLede: string
    linesTitle: string
    lines: ResearchLine[]
    logTitle: string
    logText: string
    methodologyTitle: string
    methodology: { title: string; text: string }[]
    releaseNote: string
  }

  roadmap: {
    heroKicker: string
    heroTitle: string
    heroLede: string
    gatesTitle: string
    gates: string[]
    legendNote: string
    phases: RoadmapPhase[]
    blockNoteTitle: string
    blockNoteText: string
    totalNote: string
  }

  contribute: {
    heroKicker: string
    heroTitle: string
    heroLede: string
    audiencesTitle: string
    audiences: string[]
    areasTitle: string
    areas: ContributeArea[]
    processKicker: string
    processTitle: string
    steps: { title: string; text: string }[]
    note: string
  }

  donations: {
    heroKicker: string
    heroTitle: string
    heroLede: string
    noticeTitle: string
    noticeText: string
    financialTitle: string
    financialText: string
    financial: FinancialArea[]
    hardwareTitle: string
    hardwareText: string
    hardware: HardwareKind[]
    processKicker: string
    processTitle: string
    steps: { title: string; text: string }[]
  }

  transparency: {
    heroKicker: string
    heroTitle: string
    heroLede: string
    publishTitle: string
    published: { title: string; text: string }[]
    currentTitle: string
    currentText: string
    principlesTitle: string
    principles: { title: string; text: string }[]
  }

  contact: {
    heroKicker: string
    heroTitle: string
    heroLede: string
    categoriesTitle: string
    categories: ContactCategory[]
    channelTitle: string
    channelText: string
    channelBullets: string[]
    privacyNote: string
  }

  notFound: {
    title: string
    text: string
    cta: string
  }
}
