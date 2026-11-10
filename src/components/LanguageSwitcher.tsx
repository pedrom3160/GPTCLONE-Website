import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { Link, CheckCircle2, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { LANGUAGES } from '../i18n/languages'
import type { LangCode } from '../i18n/types'

/** Language selector: navigates to the same page in the target language. */
export function LanguageSwitcher() {
  const { content, lang, pathIn } = useLanguage()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (event: MouseEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LANGUAGES[lang]

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${current.short} — ${content.nav.languageMenu}`}
        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-line bg-transparent px-2.5 font-mono text-xs font-semibold text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
      >
        {current.short}
        <ChevronDown aria-hidden="true" className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute right-0 top-[calc(100%+6px)] z-50 w-44 overflow-hidden rounded-xl border border-line bg-elevated p-1 shadow-xl shadow-black/10">
          {(Object.keys(LANGUAGES) as LangCode[]).map((code) => {
            const language = LANGUAGES[code]
            const active = code === lang
            return (
              <li key={code}>
                <Link
                  to={pathIn(code, location.pathname)}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? 'bg-accent-soft font-semibold text-ink' : 'text-ink-soft hover:bg-accent-soft hover:text-ink'
                  }`}
                  lang={language.htmlLang}
                  aria-current={active ? 'true' : undefined}
                >
                  {language.native}
                  {active && <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent" />}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
