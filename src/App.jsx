import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Layout from './components/Layout'
import Home from './pages/Home'
import DonatePage from './pages/DonatePage'
import Page from './pages/Page'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="donate" element={<DonatePage />} />
              <Route
                path="mission-vision"
                element={<Page title="Mission & Vision" />}
              />
              <Route path="purpose" element={<Page title="Purpose" />} />
              <Route path="about" element={<Page title="About Us" />} />
              <Route
                path="about/overview"
                element={<Page title="Overview" />}
              />
              <Route
                path="about/leadership"
                element={<Page title="Leadership Team" />}
              />
              <Route
                path="about/patronage"
                element={<Page title="Patronage" />}
              />
              <Route
                path="about/advisory"
                element={<Page title="Advisory Panel" />}
              />
              <Route
                path="about/endorsement"
                element={<Page title="Endorsement" />}
              />
              <Route path="programs" element={<Page title="Programs" />} />
              <Route
                path="programs/local-events"
                element={<Page title="Local Events" />}
              />
              <Route
                path="programs/community-engagement"
                element={<Page title="Community Engagement" />}
              />
              <Route
                path="programs/research"
                element={<Page title="Collaborative Research" />}
              />
              <Route
                path="programs/education"
                element={<Page title="Collaborative Education" />}
              />
              <Route
                path="programs/study-abroad"
                element={<Page title="Study Abroad" />}
              />
              <Route
                path="programs/field-visits"
                element={<Page title="Field Visits" />}
              />
              <Route
                path="get-involved"
                element={<Page title="Get Involved" />}
              />
              <Route
                path="get-involved/membership"
                element={<Page title="Membership" />}
              />
              <Route
                path="get-involved/volunteering"
                element={<Page title="Volunteering" />}
              />
              <Route
                path="get-involved/healthcare"
                element={<Page title="Healthcare Without Border" />}
              />
              <Route path="resources" element={<Page title="Resources" />} />
              <Route path="blog" element={<Page title="Blog" />} />
              <Route path="contact" element={<Page title="Contact Us" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}
