import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const opportunities = [
  {
    title: 'Transparent & Mission-Driven Foundation',
    summary: 'A dedicated 501(c)(3) public charitable organization operating with full transparency.',
    expanded:
      'Our foundation operates with complete transparency, ensuring that all funds are effectively utilized to advance women\'s health and education initiatives. We are a mission-driven IRS 501(c)(3) public charitable organization with a global perspective and local impact.',
  },
  {
    title: 'Community & Program Partnerships',
    summary: 'Collaborative partnerships tailored to real community needs.',
    expanded:
      'We provide essential resources and introductory access to our workshops and programs. By identifying and understanding the specific needs of community, healthcare, and educational partners, we tailor programs and partnerships to maximize effectiveness and reach.',
  },
  {
    title: 'Strategic Impact Support',
    summary: 'Customized guidance to maximize meaningful outcomes.',
    expanded:
      'We offer additional resources and personalized guidance to strengthen your impact. When necessary, we connect you with trusted global resources to further customize programs and ensure the greatest possible benefit.',
  },
]

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [openIndex, setOpenIndex] = useState(null)

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="events" className="py-20 md:py-28 bg-[#f9f6f2]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800 text-center"
        >
          Explore Opportunities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-5 text-center text-gray-500 max-w-2xl mx-auto tracking-wide"
        >
          Engage with our mission through meaningful collaboration and partnership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-14 space-y-0"
        >
          {opportunities.map((opportunity, index) => {
            const isOpen = openIndex === index
            return (
              <div key={opportunity.title}>
                {/* Divider */}
                {index > 0 && (
                  <div className="h-px bg-gray-200/60" aria-hidden="true" />
                )}
                
                {/* Panel */}
                <button
                  onClick={() => togglePanel(index)}
                  className="w-full text-left py-6 px-0 group transition-colors duration-200 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#6b2d30]/20 focus:ring-offset-2 focus:ring-offset-[#f9f6f2] rounded-lg"
                  aria-expanded={isOpen}
                  aria-controls={`panel-content-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl font-semibold text-gray-800 group-hover:text-[#6b2d30] transition-colors duration-200">
                        {opportunity.title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
                        {opportunity.summary}
                      </p>
                    </div>
                    
                    {/* Arrow icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex-shrink-0 mt-1"
                    >
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-[#6b2d30] transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`panel-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-gray-200/60">
                          <p className="text-gray-700 leading-relaxed text-[15px]">
                            {opportunity.expanded}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
