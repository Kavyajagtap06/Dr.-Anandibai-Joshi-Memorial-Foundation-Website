import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '../components/Card'

const initiatives = [
  {
    title: 'Community-Centric Initiatives',
    description:
      'Our programs are designed to directly address the specific needs of communities, fostering local empowerment and sustainable development while embracing globally informed approaches.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Empowerment Through Education',
    description:
      "We believe in the transformative power of education, providing women with opportunities to learn, grow, and thrive in their personal and professional lives.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Holistic Health Approach',
    description:
      'Our foundation employs a comprehensive approach to women\'s health, integrating physical, mental, and emotional wellness into our programs to ensure well-rounded and sustainable support.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

export default function KeyInitiatives() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="initiatives"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, rgba(107, 45, 48, 0.05) 0%, rgba(249, 246, 242, 0.4) 40%, #f9f6f2 100%)',
      }}
    >
      {/* Top decorative divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-40"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(107, 45, 48, 0.25) 50%, transparent 100%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800 text-center"
        >
          Our Key Initiatives
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-5 text-center text-gray-500 max-w-2xl mx-auto tracking-wide text-base sm:text-lg"
        >
          Focused programs that create lasting change in women's lives.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.12 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card
                className="group p-8 h-full flex flex-col bg-[#fdfbf9] shadow-lg shadow-gray-200/50 border border-gray-100/80 transition-shadow duration-300"
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: '0 24px 48px -12px rgba(107, 45, 48, 0.12)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div
                  className="inline-flex p-3.5 rounded-full w-fit text-[#6b2d30] bg-[#6b2d30]/10 transition-colors duration-300 group-hover:bg-[#6b2d30]/20"
                >
                  {item.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl sm:text-2xl font-semibold text-gray-800 leading-snug max-w-[320px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed flex-1 max-w-[320px]">
                  {item.description}
                </p>
                <div className="mt-6 pt-1">
                  <a
                    href="#about"
                    className="group/link inline-flex items-center gap-1 font-medium text-[#6b2d30] no-underline relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#6b2d30] after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:text-[#5a2528] transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <span className="inline-block transition-transform duration-300 ease-out group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
