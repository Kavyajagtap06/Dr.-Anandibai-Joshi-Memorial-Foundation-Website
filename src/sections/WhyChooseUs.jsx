import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import whyChooseUsImage from '../assets/why-choose-us.png'
// TODO: Replace placeholder image with actual image from assets folder
// Example: import whyChooseUsImage from '../assets/why-choose-us.jpg'

const highlights = [
  {
    title: 'Evidence-Based Programs',
    description:
      'Our initiatives are grounded in research and proven best practices, ensuring that every program addresses real challenges with measurable impact.',
  },
  {
    title: 'Community-Focused Impact',
    description:
      'We work hand-in-hand with communities, designing solutions that are culturally relevant, inclusive, and sustainable.',
  },
  {
    title: 'Collaborative Partnerships',
    description:
      'Through strong partnerships with local leaders and organizations, we expand our reach and strengthen long-term outcomes.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 aspect-[4/3] lg:aspect-[3/4]">
              {/* TODO: Replace with local image: src={whyChooseUsImage} */}
              <img
                src={whyChooseUsImage}
                alt="Women in community health and education setting, volunteers engaging with women"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-2 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800">
                Why Choose Us
              </h2>
              <p className="mt-4 text-gray-500 tracking-wide text-lg">
                Driven by purpose. Guided by evidence. Powered by community.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-700 text-lg leading-relaxed max-w-xl"
            >
              We are uniquely positioned to create meaningful and sustainable change in women's health and education, supported by dedicated volunteers and a strong network of partners.
            </motion.p>

            <div className="space-y-8 pt-2">
              {highlights.map((highlight, i) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex gap-4 group"
                >
                  {/* Subtle accent: thin vertical line */}
                  <div className="flex-shrink-0 w-px bg-[#6b2d30]/20 group-hover:bg-[#6b2d30]/40 transition-colors duration-300" />
                  <div className="flex-1 space-y-2">
                    <h3 className="font-serif text-xl font-semibold text-gray-800">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
