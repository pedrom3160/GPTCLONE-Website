import type { LangCode } from './types'

export interface LanguageMeta {
  code: LangCode
  /** URL prefix used for every route in this language. */
  hrefPrefix: string
  /** Language name written in that language. */
  native: string
  /** Short code shown in the switcher button. */
  short: string
  /** Value for `<html lang>`. */
  htmlLang: string
}

/**
 * Language registry. Adding a future language means: add an entry here,
 * create `src/i18n/<code>.ts` implementing `SiteContent`, and add the
 * language branch in `src/router.tsx`.
 */
export const LANGUAGES: Record<LangCode, LanguageMeta> = {
  pt: { code: 'pt', hrefPrefix: '/pt', native: 'Português (PT)', short: 'PT', htmlLang: 'pt-PT' },
  en: { code: 'en', hrefPrefix: '/en', native: 'English', short: 'EN', htmlLang: 'en' },
  es: { code: 'es', hrefPrefix: '/es', native: 'Español', short: 'ES', htmlLang: 'es' },
}

export const DEFAULT_LANGUAGE: LangCode = 'pt'

export const LONG_CODES: LangCode[] = ['pt', 'en', 'es']
