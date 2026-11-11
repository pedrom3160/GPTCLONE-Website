import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'
import type { ReactElement } from 'react'
import { SiteLayout } from './components/layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { TechnologyPage } from './pages/TechnologyPage'
import { ResearchPage } from './pages/ResearchPage'
import { RoadmapPage } from './pages/RoadmapPage'
import { ContributePage } from './pages/ContributePage'
import { DonationsPage } from './pages/DonationsPage'
import { TransparencyPage } from './pages/TransparencyPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

/** Shared route tree applied inside every language branch. */
function pageRoutes(): ReactElement[] {
  return [
    <Route key="home" index element={<HomePage />} />,
    <Route key="about" path="about" element={<AboutPage />} />,
    <Route key="technology" path="technology" element={<TechnologyPage />} />,
    <Route key="research" path="research" element={<ResearchPage />} />,
    <Route key="roadmap" path="roadmap" element={<RoadmapPage />} />,
    <Route key="contribute" path="contribute" element={<ContributePage />} />,
    <Route key="donations" path="donations" element={<DonationsPage />} />,
    <Route key="transparency" path="transparency" element={<TransparencyPage />} />,
    <Route key="contact" path="contact" element={<ContactPage />} />,
    <Route key="not-found" path="*" element={<NotFoundPage />} />,
  ]
}

/** Declarative routers don't restore scroll; keep it honest and simple. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export function AppRouter() {
  // Build base for GitHub Pages (`/GPT/` in production) and `/` in dev.
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/pt" replace />} />
        <Route path="/pt" element={<SiteLayout lang="pt" />}>{pageRoutes()}</Route>
        <Route path="/en" element={<SiteLayout lang="en" />}>{pageRoutes()}</Route>
        <Route path="/es" element={<SiteLayout lang="es" />}>{pageRoutes()}</Route>
        {/* Unknown prefixes still receive a full 404 page in the default language. */}
        <Route path="*" element={<SiteLayout lang="pt"><NotFoundPage /></SiteLayout>} />
      </Routes>
    </BrowserRouter>
  )
}
