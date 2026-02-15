import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  { value: 5000, suffix: '+', label: 'Women Supported' },
  { value: 120, suffix: '+', label: 'Health Camps Conducted' },
  { value: 300, suffix: '+', label: 'Students Educated' },
  { value: 50, suffix: '+', label: 'Active Volunteers' },
]

function AnimatedNumber({ value, suffix, inView }) {
  const [count, setCount] = useState(0)
  const duration = 2000
  const step = value / (duration / 16)

  useEffect(() => {
    if (!inView) return
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else setCount(Math.floor(current))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value, step])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Impact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 text-center"
        >
          Our Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-gray-600 max-w-xl mx-auto"
        >
          Together we are creating measurable change.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="text-center"
            >
              <div className="font-serif text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lavender-500 to-rose-500">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
