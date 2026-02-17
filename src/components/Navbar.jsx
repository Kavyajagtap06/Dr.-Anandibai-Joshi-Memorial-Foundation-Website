import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Mission & Vision', href: '/mission-vision' },
      { label: 'Purpose', href: '/purpose' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Overview', href: '/about/overview' },
      { label: 'Leadership Team', href: '/about/leadership' },
      { label: 'Patronage', href: '/about/patronage' },
      { label: 'Advisory Panel', href: '/about/advisory' },
      { label: 'Endorsement', href: '/about/endorsement' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Local Events', href: '/programs/local-events' },
      { label: 'Community Engagement', href: '/programs/community-engagement' },
      { label: 'Collaborative Research', href: '/programs/research' },
      { label: 'Collaborative Education', href: '/programs/education' },
      { label: 'Study Abroad', href: '/programs/study-abroad' },
      { label: 'Field Visits', href: '/programs/field-visits' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      { label: 'Membership', href: '/get-involved/membership' },
      { label: 'Volunteering', href: '/get-involved/volunteering' },
      { label: 'Healthcare Without Border', href: '/get-involved/healthcare' },
    ],
  },
  { label: 'Donate', href: '/donate' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const dropdownVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function isPathActive(pathname, href) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

function isParentActive(pathname, item) {
  if (!item.children) return pathname === item.href
  if (pathname === item.href) return true
  return item.children.some((c) => isPathActive(pathname, c.href))
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Always use dark text and white background
  const textClass = 'text-gray-800'
  const linkClass = (active) =>
    active
      ? 'text-lavender-600 font-semibold'
      : 'text-gray-700 hover:text-lavender-600'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-20 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 transition-all duration-300"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span
              className={`font-serif text-lg md:text-xl font-semibold transition-colors duration-300 ${textClass}`}
            >
              Dr. Anandibai Joshi Foundation
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center flex-1 justify-end">
            <div className="flex items-center gap-1 mr-auto">
              {navItems
                .filter((item) => item.label !== 'Donate')
                .map((item) => {
                  if (item.children) {
                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <Link
                          to={item.href}
                          className={`relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${linkClass(
                            isParentActive(pathname, item)
                          )}`}
                        >
                          {item.label}
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </Link>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                              className="absolute left-0 top-full pt-2 min-w-[220px]"
                            >
                              <div className="rounded-xl bg-white/95 backdrop-blur-xl shadow-xl shadow-black/10 border border-gray-100/80 overflow-hidden py-2">
                                {item.children.map((child, idx) => (
                                  <div key={child.href}>
                                    {idx > 0 && (
                                      <div className="mx-3 my-1 border-t border-gray-100" />
                                    )}
                                    <Link
                                      to={child.href}
                                      className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                                        isPathActive(pathname, child.href)
                                          ? 'text-lavender-600 bg-lavender-50/80 font-semibold'
                                          : 'text-gray-700 hover:text-lavender-600 hover:bg-lavender-50/80'
                                      }`}
                                    >
                                      {child.label}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${linkClass(
                        isPathActive(pathname, item.href)
                      )}`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
            </div>

            {/* Donate button */}
            {(() => {
              const donateItem = navItems.find((i) => i.label === 'Donate')
              if (!donateItem) return null
              const donateActive = isPathActive(pathname, donateItem.href)
              return (
                <Link
                  to={donateItem.href}
                  className={`ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-lavender-500 to-rose-500 text-white shadow-lg shadow-lavender-400/30 hover:shadow-xl hover:shadow-lavender-500/40 hover:from-lavender-600 hover:to-rose-600 transition-all duration-300 ${
                    donateActive
                      ? 'ring-2 ring-lavender-400 ring-offset-2 ring-offset-white'
                      : ''
                  }`}
                >
                  {donateItem.label}
                </Link>
              )
            })()}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen)
              setMobileExpanded(null)
            }}
            className={`lg:hidden p-2.5 rounded-xl transition-colors duration-300 ${textClass}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/80 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => {
                if (item.children) {
                  const isExpanded = mobileExpanded === item.label
                  return (
                    <div key={item.label} className="rounded-xl overflow-hidden">
                      <button
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : item.label)
                        }
                        className={`flex items-center justify-between w-full py-3 px-4 text-left font-medium rounded-xl transition-colors duration-200 ${
                          isParentActive(pathname, item)
                            ? 'text-lavender-600 bg-lavender-50/80'
                            : 'text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-3 space-y-0.5 border-l-2 border-lavender-200 ml-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  onClick={() => {
                                    setMobileOpen(false)
                                    setMobileExpanded(null)
                                  }}
                                  className={`block py-2.5 px-3 text-sm rounded-lg transition-colors duration-200 ${
                                    isPathActive(pathname, child.href)
                                      ? 'text-lavender-600 bg-lavender-50/80 font-semibold'
                                      : 'text-gray-600 hover:text-lavender-600 hover:bg-lavender-50/80'
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                if (item.label === 'Donate') {
                  const donateActive = isPathActive(pathname, item.href)
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-lavender-500 to-rose-500 shadow-lg shadow-lavender-400/30 ${
                        donateActive ? 'ring-2 ring-lavender-400 ring-offset-2' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 px-4 font-medium rounded-lg transition-colors duration-200 ${
                      isPathActive(pathname, item.href)
                        ? 'text-lavender-600 bg-lavender-50/80'
                        : 'text-gray-700 hover:text-lavender-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
