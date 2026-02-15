import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './sections/Hero'
import About from './sections/About'
import KeyInitiatives from './sections/KeyInitiatives'
import Impact from './sections/Impact'
import OngoingPrograms from './sections/OngoingPrograms'
import Testimonials from './sections/Testimonials'
import Events from './sections/Events'
import Donate from './sections/Donate'
import Footer from './sections/Footer'

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
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <KeyInitiatives />
            <Impact />
            <OngoingPrograms />
            <Testimonials />
            <Events />
            <Donate />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}
