import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import aboutUsImage from '../assets/about-us.png'

const features = [
  {
    title: "Women's Health Initiatives",
    description: "Programs designed to improve health outcomes and access to care.",
  },
  {
    title: "Educational Access Programs",
    description: "Expanding learning opportunities and resources for women.",
  },
  {
    title: "Transparent Fund Utilization",
    description: "Every contribution is effectively used and accounted for.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="py-24 bg-[#f9f6f2]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Text content — on mobile appears below image (order-2) */}
          <div className="order-2 md:order-1 max-w-xl md:max-w-none">
            <motion.span
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#6b2d30] uppercase tracking-[0.2em] text-xs sm:text-sm font-light"
            >
              Who we are
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-gray-800 tracking-tight leading-tight mt-3 max-w-[600px]"
            >
              Empowering Women Through Health and Education
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700 max-w-[600px]"
            >
              <p>
                Welcome to the Dr. Anandibai Joshi Memorial Foundation for Women's Health and Education, where we strive to enhance women's health outcomes and expand educational opportunities. Our dedicated programs and initiatives are designed to empower women with vital knowledge and resources, ensuring they thrive in their personal and professional lives. Join us as we honor the remarkable legacy of Dr. Anandibai Joshi, India's first female physician, and work towards a healthier, informed society.
              </p>
              <p>
                At the Dr. Anandibai Joshi Memorial Foundation, we strive to empower women by addressing their health and educational needs. Dedicated to honoring Dr. Anandibai Joshi's legacy, our organization is committed to nurturing a community where women can thrive.
              </p>
              <p>
                Our foundation operates with transparency, ensuring that all funds raised are effectively utilized to support women's health and education initiatives.
              </p>
            </motion.div>

            {/* Feature cards — horizontal on desktop, stacked on mobile */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
                hidden: {},
              }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-white rounded-xl p-5 shadow-md shadow-gray-200/60 border border-gray-100/80"
                >
                  <h3 className="font-serif text-base font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-600 leading-snug">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image — on mobile appears first (order-1) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-gray-300/40 aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]">
              <img
                src={aboutUsImage}
                alt="Dr. Anandibai Joshi Memorial Foundation — our community and mission"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
