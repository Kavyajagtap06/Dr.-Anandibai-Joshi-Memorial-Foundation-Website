import Hero from '../sections/Hero'
import About from '../sections/About'
import KeyInitiatives from '../sections/KeyInitiatives'
import Impact from '../sections/Impact'
import OngoingPrograms from '../sections/OngoingPrograms'
import HowWeCreateImpact from '../sections/HowWeCreateImpact'
import WhyChooseUs from '../sections/WhyChooseUs'
import Testimonials from '../sections/Testimonials'
import Events from '../sections/Events'
import Donate from '../sections/Donate'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <KeyInitiatives />
      <HowWeCreateImpact />
      <OngoingPrograms />
      <WhyChooseUs />
      <Impact />
      <Testimonials />
      <Events />
      <Donate />
    </>
  )
}
