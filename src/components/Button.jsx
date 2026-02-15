import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-to-r from-lavender-400 to-rose-400 text-white shadow-lg shadow-lavender-200/50 hover:shadow-xl hover:shadow-lavender-300/40 hover:from-lavender-500 hover:to-rose-500',
  secondary: 'border-2 border-lavender-400 text-lavender-600 bg-white/90 hover:bg-lavender-50 hover:border-lavender-500',
  outline: 'border-2 border-white text-white bg-transparent hover:bg-white/10',
  ghost: 'text-gray-700 hover:bg-gray-100',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseClass = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'
  const combinedClass = `${baseClass} ${variants[variant] || variants.primary} ${className}`

  const motionProps = {
    className: combinedClass,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    ...props,
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}
