import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, useLocation } from 'react-router'
import { Menu, Moon, Sun, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useTheme } from '../../theme/ThemeProvider'
import { LANGUAGES } from '../../i18n/languages'
import type { LangCode } from '../../i18n/types'
import { Logo } from '../Logo'
import { LanguageSwitcher } from '../LanguageSwitcher'
import type { PageId } from '../../i18n/types'

export interface NavItem {
  page: PageId
  label: string
}

/** Header nav model shared by the desktop bar and the mobile drawer. */
function buildNav(content: ReturnType<typeof useLanguage>['content']): {
  primary: NavItem[]
  community: NavItem[]
  all: NavItem[]
} {
  const primary: NavItem[] = [
    { page: 'home', label: content.nav.home },
    { page: 'about', label: content.nav.about },
    { page: 'technology', label: content.nav.technology },
    { page: 'research', label: content.nav.research },
    { page: 'roadmap', label: content.nav.roadmap },
  ]
  const community: NavItem[] = [
    { page: 'contribute', label: content.nav.contribute },
    { page: 'donations', label: content.nav.donations },
    { page: 'transparency', label: content.nav.transparency },
    { page: 'contact', label: content.nav.contact },
  ]
  return { primary, community, all: [...primary, ...community] }
}

function NavLinkClass({ isActive }: { isActive: boolean }): string {
  const base =
    'inline-flex min-h-10 items-center rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2'
  return isActive ? `${base} text-ink after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-accent` : `${base} text-muted hover:text-ink hover:bg-accent-soft`
}

function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const { content } = useLanguage()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={content.nav.themeToggle}
      aria-pressed={dark}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-transparent text-ink-soft transition-colors hover:border-line-strong hover:text-ink ${className}`}
    >
      {dark ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
    </button>
  )
}

function CommunityDropdown({ items }: { items: NavItem[] }) {
  const { content, pageHref } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

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

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex min-h-10 items-center gap-1 rounded-lg px-3 text-sm font-medium transition-colors ${
          open ? 'bg-accent-soft text-ink' : 'text-muted hover:bg-accent-soft hover:text-ink'
        }`}
      >
        {content.nav.communityMenu}
        <ChevronDown aria-hidden="true" className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute left-0 top-[calc(100%+6px)] z-50 w-48 overflow-hidden rounded-xl border border-line bg-elevated p-1 shadow-xl shadow-black/10">
          {items.map((item) => (
            <li key={item.page}>
              <NavLink
                to={pageHref(item.page)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive ? 'bg-accent-soft font-semibold text-ink' : 'text-ink-soft hover:bg-accent-soft hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Full-screen navigation drawer for small screens (accessible dialog). */
function MobileMenu({ items }: { items: NavItem[] }) {
  const { content, lang, pathIn, pageHref } = useLanguage()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || panelRef.current === null) return
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={content.nav.openMenu}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-transparent text-ink-soft lg:hidden"
      >
        <Menu aria-hidden="true" className="h-4 w-4" />
      </button>
      {/* Portal: freed from the header as containing block (backdrop-filter). */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-[var(--scrim)] backdrop-blur-sm" onClick={() => close()} aria-hidden="true" />
            <div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={content.nav.menuAria}
              className="absolute inset-x-0 top-0 flex max-h-full flex-col overflow-y-auto rounded-b-2xl border-b border-line bg-elevated shadow-2xl"
            >
            <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
              <Logo compact />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label={content.nav.closeMenu}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-soft transition-colors hover:text-ink"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
            <nav aria-label={content.nav.menuAria} className="px-3 py-4">
              <ul className="flex flex-col gap-0.5">
                {items.map((item) => (
                  <li key={item.page}>
                    <NavLink
                      to={pageHref(item.page)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive ? 'bg-accent-soft font-semibold text-ink' : 'text-ink-soft hover:bg-accent-soft hover:text-ink'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-line pt-4">
                <p className="mono-label mb-2 px-4">{content.nav.languageMenu}</p>
                <div className="flex flex-wrap gap-2 px-4">
                  {(Object.keys(LANGUAGES) as LangCode[]).map((code) => (
                    <NavLink
                      key={code}
                      to={pathIn(code, location.pathname)}
                      className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold transition-colors ${
                        code === lang ? 'border-accent bg-accent-soft text-ink' : 'border-line text-ink-soft hover:border-line-strong hover:text-ink'
                      }`}
                      lang={LANGUAGES[code].htmlLang}
                    >
                      {LANGUAGES[code].native}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>
            <div className="mt-auto border-t border-line px-5 py-4">
              <ThemeToggle className="w-full justify-center" />
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}

export function Header() {
  const { content, pageHref } = useLanguage()
  const nav = buildNav(content)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Logo />
        <nav aria-label="Principal" className="hidden items-center lg:flex">
          {nav.primary.slice(1).map((item) => (
            <NavLink key={item.page} to={pageHref(item.page)} className={NavLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <CommunityDropdown items={nav.community} />
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
          </div>
          <LanguageSwitcher />
          <MobileMenu items={nav.all} />
        </div>
      </div>
    </header>
  )
}

