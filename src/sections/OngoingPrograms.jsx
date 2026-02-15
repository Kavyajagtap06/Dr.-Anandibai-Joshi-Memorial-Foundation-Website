import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const programs = [
  {
    title: 'Rural Health Outreach',
    summary: 'Mobile health units and community health workers bringing screenings and basic care to underserved villages.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
  },
  {
    title: 'Girl Child Education Fund',
    summary: 'Scholarships and mentorship for school-going girls to complete secondary and higher education.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  },
  {
    title: 'Women in Trades',
    summary: 'Training in tailoring, digital literacy, and small business skills for economic independence.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
]

export default function OngoingPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="programs" className="py-20 md:py-28 bg-foundation-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 text-center"
        >
          Our Ongoing Programs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
        >
          Active initiatives creating impact every day.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Card className="overflow-hidden" hover={true}>
                <motion.div
                  className="aspect-[4/3] overflow-hidden bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-800">{program.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{program.summary}</p>
                  <div className="mt-5">
                    <Button variant="ghost" className="!px-0 !py-0 text-lavender-500 font-medium">
                      Learn More →
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
