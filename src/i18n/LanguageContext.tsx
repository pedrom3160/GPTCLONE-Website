import { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import type { LangCode, PageId, SiteContent } from './types'
import { LANGUAGES } from './languages'
import type { NavigateFunction } from 'react-router'

export interface LanguageValue {
  lang: LangCode
  content: SiteContent
  /** URL of a page in the current language. */
  pageHref: (page: PageId) => string
  /** Home URL in the current language. */
  homeHref: string
  /**
   * Translate the current URL into another language while keeping the
   * same page (URL prefixes are identical across languages).
   */
  pathIn: (lang: LangCode, pathname: string) => string
  /** Programmatic navigation bound to the current language. */
  navigateTo: (page: PageId, navigate: NavigateFunction) => void
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({
  lang,
  content,
  homeHref,
  children,
}: {
  lang: LangCode
  content: SiteContent
  homeHref: string
  children: ReactNode
}) {
  useEffect(() => {
    document.documentElement.lang = LANGUAGES[lang].htmlLang
  }, [lang])

  const pageHref = useCallback(
    (page: PageId) => {
      const base = homeHref
      if (page === 'home') return base
      return `${base}/${page}`
    },
    [homeHref],
  )

  const pathIn = useCallback((target: LangCode, pathname: string) => {
    const rest = pathname.replace(/^\/(?:pt|en|es)(?=\/|$)/, '')
    return rest === '' || rest === '/' ? `/${target}` : `/${target}${rest}`
  }, [])

  const navigateTo = useCallback(
    (page: PageId, navigate: NavigateFunction) => {
      navigate(pageHref(page))
    },
    [pageHref],
  )

  const value = useMemo<LanguageValue>(
    () => ({ lang, content, pageHref, homeHref, pathIn, navigateTo }),
    [lang, content, pageHref, homeHref, pathIn, navigateTo],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageValue {
  const value = useContext(LanguageContext)
  if (value === null) {
    throw new Error('useLanguage must be used inside a LanguageProvider (site layout).')
  }
  return value
}
