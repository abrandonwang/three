import PageLayout from '../components/PageLayout'

const linkClass = "text-zinc-800 dark:text-white underline underline-offset-4 decoration-zinc-400 dark:decoration-white/30 hover:text-[#3b82f6] hover:decoration-[#3b82f6] transition-all"

export default function Concentration() {
  return (
    <PageLayout
      title="Concentration"
      subtitle="Memory card matching game"
    >
      <div className="space-y-7">
        <p className="text-[16px] text-zinc-700 dark:text-white/80 leading-relaxed">
          A browser-based memory matching game with multiple difficulty levels, a live timer, and a high score system.
        </p>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold">Stack</span>
          <p className="mt-2 text-[16px] text-zinc-700 dark:text-white/80">JavaScript · HTML · CSS</p>
        </div>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold">Link</span>
          <p className="mt-2">
            <a href="https://abrandonwang.github.io/card-game/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              abrandonwang.github.io/card-game
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
