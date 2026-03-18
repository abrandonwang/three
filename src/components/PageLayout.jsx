import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PageLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans antialiased">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative max-w-[640px] mx-auto px-6"
        style={{ paddingTop: '12vh', paddingBottom: '12vh' }}
      >
        {/* Back button — sits outside the container to the left */}
        <div className="absolute left-0 top-24 -translate-x-full pr-8">
          <Link
            to="/"
            className="group flex items-center gap-1.5 transition-colors"
          >
            <span className="text-[15px] text-zinc-400 dark:text-white/30 group-hover:text-[#3b82f6] transition-colors">←</span>
            <span className="text-[15px] text-zinc-400 dark:text-white/30 group-hover:text-[#3b82f6] transition-colors">back</span>
          </Link>
        </div>

        <h1 className="text-[20px] font-semibold text-zinc-900 dark:text-white tracking-tight mb-1">{title}</h1>
        <p className="text-[18px] text-zinc-500 dark:text-white/60 mb-10">{subtitle}</p>

        {children}
      </motion.div>
    </div>
  )
}

export default PageLayout
