import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import type { PageId } from '../i18n/types'

const SITE_NAME = 'GPTCLONE'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, value: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (element === null) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

/**
 * Per-language, per-page document metadata: `<title>`, description and the
 * Open Graph title/description. Re-applied whenever the page or language
 * changes — no external SEO library required.
 */
export function usePageMeta(page: PageId): void {
  const { content } = useLanguage()
  useEffect(() => {
    const meta = content.meta.pages[page]
    document.title = `${meta.title} — ${SITE_NAME}`
    setMeta('meta[name="description"]', 'name', 'description', meta.description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', `${meta.title} — ${SITE_NAME}`)
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
  }, [content, page])
}

/** Same as usePageMeta but for arbitrary titles (e.g. the 404 page). */
export function useRawPageMeta(title: string, description: string): void {
  useEffect(() => {
    document.title = `${title} — ${SITE_NAME}`
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', `${title} — ${SITE_NAME}`)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
  }, [title, description])
}
