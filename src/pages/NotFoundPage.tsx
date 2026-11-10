import { Compass, Home } from 'lucide-react'
import { useRawPageMeta } from '../lib/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { Container, LinkButton } from '../components/ui'

export function NotFoundPage() {
  const { content, homeHref, pageHref } = useLanguage()
  const notFound = content.notFound
  useRawPageMeta(content.meta.notFound.title, content.meta.notFound.description)

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_-10%,var(--glow),transparent_70%)]" />
      <Container className="relative text-center">
        <p className="font-mono text-sm font-semibold tracking-[0.3em] text-muted">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {notFound.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">{notFound.text}</p>
        <div className="mt-8 flex justify-center gap-3">
          <LinkButton to={homeHref}>
            <Home aria-hidden="true" className="h-4 w-4" />
            {notFound.cta}
          </LinkButton>
          <LinkButton to={pageHref('roadmap')} variant="secondary">
            <Compass aria-hidden="true" className="h-4 w-4" />
            {content.common.viewRoadmap}
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
