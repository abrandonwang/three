import PageLayout from '../components/PageLayout'

const linkClass = "text-zinc-800 dark:text-white underline underline-offset-4 decoration-zinc-400 dark:decoration-white/30 hover:text-[#3b82f6] hover:decoration-[#3b82f6] transition-all"

export default function Portfolio() {
  return (
    <PageLayout
      title="Portfolio"
      subtitle="This site"
    >
      <div className="space-y-7">
        <p className="text-[16px] text-zinc-700 dark:text-white/80 leading-relaxed">
          A minimal personal site built to show my work and let people get to know me, including an ai chat interface.
        </p>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold">Stack</span>
          <p className="mt-2 text-[16px] text-zinc-700 dark:text-white/80">React · Vite · Tailwind · Framer Motion</p>
        </div>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold">Status</span>
          <p className="mt-2 text-[16px] text-zinc-700 dark:text-white/80">Live</p>
        </div>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold">Link</span>
          <p className="mt-2">
            <a href="https://brandonwang.work" target="_blank" rel="noopener noreferrer" className={linkClass}>
              brandonwang.work
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
