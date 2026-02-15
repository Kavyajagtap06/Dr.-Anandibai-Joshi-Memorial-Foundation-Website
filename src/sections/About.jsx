import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '../components/Button'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-lavender-100 to-rose-100"
          >
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
              alt="Foundation team and community"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-800"
            >
              About Our Foundation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-gray-600 leading-relaxed"
            >
              The Dr. Anandibai Joshi Memorial Foundation honors India's first woman physician by advancing
              women's health and education. We believe every woman deserves access to quality healthcare and
              learning opportunities. Through awareness campaigns, scholarships, and skill-building programs,
              we carry forward Dr. Joshi's vision of empowerment and equality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Button href="#initiatives">Learn More</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
