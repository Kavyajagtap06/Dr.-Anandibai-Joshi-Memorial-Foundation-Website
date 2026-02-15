import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const initiatives = [
  {
    title: "Women's Health Awareness",
    description: "Free health camps, screenings, and awareness drives to ensure every woman can make informed choices about her wellbeing.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
  },
  {
    title: 'Educational Scholarships',
    description: "Merit and need-based scholarships for girls and women to pursue higher education and break the cycle of disadvantage.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'text-lavender-500',
    bgColor: 'bg-lavender-50',
  },
  {
    title: 'Skill Development',
    description: "Vocational training and mentorship programs to help women gain employable skills and achieve financial independence.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'text-lavender-500',
    bgColor: 'bg-lavender-50',
  },
]

export default function KeyInitiatives() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="initiatives" className="py-20 md:py-28 bg-foundation-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 text-center"
        >
          Our Key Initiatives
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
        >
          Focused programs that create lasting change in women's lives.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col">
                <div className={`inline-flex p-3 rounded-xl ${item.bgColor} ${item.color} w-fit`}>
                  {item.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-3 text-gray-600 flex-1">{item.description}</p>
                <div className="mt-6">
                  <Button variant="ghost" className="!px-0 !py-0 text-lavender-500 font-medium">
                    Learn More →
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
