import { motion, useInView } from 'framer-motion'
import { useRef, Fragment } from 'react'

const steps = [
  {
    number: '01',
    title: 'Engage with Communities',
    description:
      'We initiate partnerships and engage directly with communities to understand the unique health and educational challenges women face.',
  },
  {
    number: '02',
    title: 'Deliver Targeted Programs',
    description:
      'Based on identified needs, we implement carefully designed programs tailored to create meaningful and measurable impact.',
  },
  {
    number: '03',
    title: 'Monitor and Evaluate',
    description:
      'We continuously assess program outcomes, refining our approach to ensure sustainable and long-term success.',
  },
]

export default function HowWeCreateImpact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="how-we-create-impact"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #faf8f6 0%, #f9f6f2 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800 text-center"
        >
          How We Create Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-5 text-center text-gray-500 max-w-2xl mx-auto tracking-wide"
        >
          A structured and community-driven approach to sustainable change.
        </motion.p>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="flex items-start">
            {steps.map((step, i) => (
              <Fragment key={step.number}>
                <div className="flex-1 min-w-0 flex flex-col items-center px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.12 + i * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex flex-col items-center w-full"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 text-[#6b2d30] font-serif text-2xl font-bold"
                      style={{
                        backgroundColor: 'rgba(107, 45, 48, 0.08)',
                        boxShadow: '0 4px 14px rgba(107, 45, 48, 0.12)',
                      }}
                    >
                      {step.number}
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-gray-800 text-center max-w-[240px]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-[15px] leading-relaxed text-center max-w-[280px]">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center flex-shrink-0 pt-10 w-16 lg:w-24">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.25 + i * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="h-px w-full bg-gray-300 origin-left"
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-14 md:hidden relative pl-10">
          {/* Vertical line — grows from top to bottom */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute left-5 top-7 bottom-7 w-px bg-gray-300 origin-top"
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative pb-12 last:pb-0"
            >
              <div
                className="absolute w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-[#6b2d30] font-serif text-xl font-bold border-4 border-[#faf8f6]"
                style={{
                  left: '20px',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'rgba(107, 45, 48, 0.08)',
                  boxShadow: '0 4px 14px rgba(107, 45, 48, 0.12)',
                }}
              >
                {step.number}
              </div>
              <div className="pl-14 pt-1">
                <h3 className="font-serif text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
