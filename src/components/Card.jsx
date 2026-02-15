import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <motion.div
      className={`rounded-2xl bg-white shadow-md overflow-hidden ${className}`}
      whileHover={hover ? { y: -6, boxShadow: '0 20px 40px -12px rgba(139, 92, 246, 0.15)' } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
