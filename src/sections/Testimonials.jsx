import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '../components/Card'

const testimonials = [
  {
    quote: "The scholarship from the Foundation allowed me to complete my nursing degree. I now work at a community health center and support other women in my village.",
    name: 'Priya S.',
    role: 'Community Health Worker',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
  },
  {
    quote: "After the skill development program, I started my own tailoring unit. I employ three other women and we supply to local schools. This foundation changed my life.",
    name: 'Lakshmi M.',
    role: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 text-center"
        >
          Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
        >
          Hear from the women we've been privileged to support.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <Card className="p-8 relative" hover={false}>
                <span className="absolute top-6 left-6 text-6xl text-lavender-200 font-serif leading-none">"</span>
                <p className="relative z-10 text-gray-700 leading-relaxed pl-6 mt-4">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-4 pl-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-lavender-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
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
