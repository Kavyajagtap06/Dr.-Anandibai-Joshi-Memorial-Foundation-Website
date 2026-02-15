import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const events = [
  {
    title: 'Health & Wellness Camp – Pune',
    date: 'March 15, 2025',
    description: 'Free health check-ups, nutrition counseling, and awareness sessions for women in the community.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
  },
  {
    title: 'Scholarship Application Workshop',
    date: 'March 22, 2025',
    description: 'Guidance for students and parents on applying for our educational scholarships and financial aid.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
  },
  {
    title: 'Women in Leadership Talk',
    date: 'April 5, 2025',
    description: 'An evening with inspiring women leaders sharing their journeys and advice for the next generation.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
]

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="events" className="py-20 md:py-28 bg-foundation-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 text-center"
        >
          Upcoming Events & News
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
        >
          Join us at our next events and stay updated.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-lavender-600">{event.date}</p>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-gray-800">{event.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm">{event.description}</p>
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
