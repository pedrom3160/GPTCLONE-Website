import { useOutlet } from 'react-router'
import type { ReactNode } from 'react'
import { LanguageProvider } from '../../i18n/LanguageContext'
import { ThemeProvider } from '../../theme/ThemeProvider'
import type { LangCode, SiteContent } from '../../i18n/types'
import { LANGUAGES } from '../../i18n/languages'
import { content as contentPt } from '../../i18n/pt'
import { content as contentEn } from '../../i18n/en'
import { content as contentEs } from '../../i18n/es'
import { Header } from './Header'
import { Footer } from './Footer'

const CONTENTS: Record<LangCode, SiteContent> = {
  pt: contentPt,
  en: contentEn,
  es: contentEs,
}

/**
 * One layout instance per language branch. It wires the language provider
 * (content + URL helpers), the theme provider, the skip link and the main
 * landmark. Renders `<Outlet/>` for nested routes or `children` when used
 * standalone (e.g. inline 404).
 */
export function SiteLayout({ lang, children }: { lang: LangCode; children?: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider lang={lang} content={CONTENTS[lang]} homeHref={LANGUAGES[lang].hrefPrefix}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:border focus:border-line focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          {CONTENTS[lang].nav.skipToContent}
        </a>
        <div className="relative z-[1] flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1 outline-none">
            {useOutlet() ?? children}
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
