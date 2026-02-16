import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'

const GAP = 24
const AUTO_SCROLL_MS = 3500

const services = [
  {
    title: "Women's Health Workshops",
    description:
      'Our health workshops provide essential knowledge and resources covering topics from reproductive health to nutrition, empowering women to take charge of their health and wellbeing.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Educational Programs',
    description:
      'Our educational initiatives equip women with the skills and knowledge needed to pursue higher education and career opportunities, fostering long-term personal and professional growth.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Community Outreach',
    description:
      "Through community engagement, we raise awareness on women's health and education while delivering resources and support to those who need it most.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Research and Advocacy',
    description:
      "We conduct research on women's health issues and advocate for policies that promote women's rights, education, and equitable access to healthcare.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.166-.76-1.166-1.425v-.465c0-.665.478-1.29 1.166-1.348l.32-.03a4.282 4.282 0 002.98-1.375 4.276 4.276 0 001.376-2.98l.03-.32c.058-.688.683-1.166 1.348-1.166h.465c.665 0 1.29.478 1.348 1.166l.03.32c.123 1.073.67 2.063 1.376 2.98a4.282 4.282 0 002.98 1.375l.32.03c.688.058 1.166.683 1.166 1.348v.465c0 .665-.478 1.29-1.166 1.348l-.32.03a4.282 4.282 0 00-2.98 1.375 4.276 4.276 0 00-1.376 2.98l-.03.32c-.058.688-.683 1.166-1.348 1.166h-.465z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Partnerships and Collaborations',
    description:
      "We collaborate with organizations and stakeholders to amplify our impact and build a strong network advancing women's health and education.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Mentorship Programs',
    description:
      'Our mentorship programs connect women with experienced professionals who provide guidance and support throughout their academic and personal journeys.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
]

const duplicatedServices = [...services, ...services]

export default function OngoingPrograms() {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const firstCardRef = useRef(null)
  const intervalRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [cardWidth, setCardWidth] = useState(320)
  const [isPaused, setIsPaused] = useState(false)

  const setWidth = 6 * (cardWidth + GAP)

  const advance = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const step = cardWidth + GAP
    el.scrollBy({ left: step, behavior: 'smooth' })
    window.setTimeout(() => {
      if (!el) return
      if (el.scrollLeft >= setWidth - 1) {
        el.scrollLeft = el.scrollLeft - setWidth
      }
    }, 400)
  }, [cardWidth, setWidth])

  useEffect(() => {
    if (!firstCardRef.current) return
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width
      if (typeof w === 'number' && w > 0) setCardWidth(w)
    })
    ro.observe(firstCardRef.current)
    return () => ro.disconnect()
  }, [isInView])

  useEffect(() => {
    if (!isInView || isPaused) return
    intervalRef.current = window.setInterval(advance, AUTO_SCROLL_MS)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [isInView, isPaused, advance])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let tick = null
    const onScroll = () => {
      if (tick) window.cancelAnimationFrame(tick)
      tick = window.requestAnimationFrame(() => {
        if (el.scrollLeft >= setWidth - 1) {
          el.scrollLeft = el.scrollLeft - setWidth
        }
        tick = null
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [setWidth])

  const onKeyDown = (e) => {
    const el = scrollRef.current
    if (!el) return
    const step = cardWidth + GAP
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      el.scrollBy({ left: -step, behavior: 'smooth' })
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      el.scrollBy({ left: step, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #f9f6f2 0%, rgba(249, 246, 242, 0.95) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-gray-800 text-center"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-5 text-center text-gray-500 max-w-2xl mx-auto tracking-wide"
        >
          How we support women through health, education, and advocacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-14 relative"
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #f9f6f2 0%, transparent 100%)',
            }}
            aria-hidden
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(270deg, #f9f6f2 0%, transparent 100%)',
            }}
            aria-hidden
          />

          <div
            ref={scrollRef}
            role="region"
            aria-label="Services carousel"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="services-carousel overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory flex gap-6 pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
                      >
            <style>{`
              .services-carousel::-webkit-scrollbar { display: none; }
            `}</style>
            <div
              className="flex gap-6 min-w-max"
              style={{ width: 'max-content' }}
            >
              {duplicatedServices.map((item, i) => (
                <div
                  key={`${item.title}-${i}`}
                  ref={i === 0 ? firstCardRef : undefined}
                  className="flex-shrink-0 snap-start w-[85vw] sm:w-[calc(50vw-2rem)] lg:w-[calc((min(100vw,1280px)-4rem)/3-1rem)] min-w-[280px] max-w-[380px]"
                >
                  <div className="rounded-2xl bg-[#fdfbf9] shadow-lg shadow-gray-200/50 border border-gray-100/80 p-8 h-full flex flex-col min-h-[320px] transition-shadow duration-300">
                    <div className="inline-flex p-3.5 rounded-full w-fit text-[#6b2d30] bg-[#6b2d30]/10">
                      {item.icon}
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-gray-800 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed flex-1 text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
