import { Link } from 'react-router-dom'

const PageLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans antialiased">
      <div className="relative max-w-[640px] mx-auto px-6 pt-10 pb-10 md:pt-24 md:pb-24">
        {/* Back button — sits outside the container to the left */}
        <div className="md:absolute md:left-0 md:top-24 md:-translate-x-full pb-5 md:pr-8">
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
      </div>
    </div>
  )
}

export default PageLayout
