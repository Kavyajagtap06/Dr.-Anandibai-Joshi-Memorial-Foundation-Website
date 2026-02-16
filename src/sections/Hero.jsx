import { motion } from 'framer-motion'
import Button from '../components/Button'
import heroImage from '../assets/A_digital_painting_portrait_of_Dr._Anandibai_Joshi.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width background image — portrait visible on the right */}
      <motion.div
        className="absolute inset-0 bg-[#1a0a0c]"
        initial={false}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: 'linear' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat [background-position:50%_10%] md:[background-position:100%_20%]"
          style={{
            backgroundImage: `url("${heroImage}")`,
          }}
          role="img"
          aria-label="Dr. Anandibai Joshi"
        />
      </motion.div>

      {/* Left-to-right gradient: deep maroon/black on left → lighter on right so portrait stays crisp */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(28, 10, 14, 0.92) 0%, rgba(28, 10, 14, 0.55) 45%, rgba(15, 5, 8, 0.12) 70%, transparent 100%)',
        }}
      />

      {/* Content: left-aligned on desktop, centered on mobile */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16 pt-20 pb-24 text-center md:text-left">
        <div className="max-w-[700px] md:ml-0 mx-auto mt-[60px] mb-[60px]">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-semibold text-white leading-[1.2] tracking-tight"
          >
            Dr. Anandibai Joshi Memorial Foundation
            <br />
            <span className="text-white/95">for Women's Health and Education</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 sm:mt-10 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed"
          >
            Honoring India's first female physician by empowering women through health, education, and opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-10 sm:mt-12 mb-16 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              href="#about"
              variant="primary"
              className="!bg-[#6b2d30] hover:!bg-[#7d3639] !border-0 shadow-lg hover:shadow-[0_0_28px_rgba(120,45,48,0.4)] rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Involved
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-white/70 hover:text-white transition-colors" aria-label="Scroll to about">
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
