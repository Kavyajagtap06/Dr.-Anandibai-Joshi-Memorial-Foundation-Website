import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '../components/Button'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-lavender-100 to-rose-50">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                alt="Foundation community and women beneficiaries"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" aria-hidden />
            </div>
          </motion.div>

          {/* Text column */}
          <div className="order-1 md:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight"
            >
              About Our Foundation
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 space-y-4 text-gray-600 leading-relaxed"
            >
              <p>
                Welcome to the Dr. Anandibai Joshi Memorial Foundation. We continue the legacy of India's first
                woman physician by advancing women's health and education so that every woman can thrive.
              </p>
              <p>
                We believe every woman deserves access to quality healthcare and learning opportunities.
                Through awareness campaigns, scholarships, and skill-building programs, we carry forward
                Dr. Joshi's vision of empowerment and equality—creating a world where health and education
                are within reach for all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.22 }}
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
