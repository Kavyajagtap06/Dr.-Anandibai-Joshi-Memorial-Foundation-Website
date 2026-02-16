import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Simple page component with heading matching the page name.
 * Used for all placeholder/content-soon routes.
 */
export default function Page({ title }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[60vh] flex items-center justify-center px-4 py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">
          {title}
        </h1>
        <p className="mt-6 text-sm text-gray-500">
          Content for this page is coming soon.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg font-medium bg-lavender-500 text-white hover:bg-lavender-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </motion.section>
  )
}
