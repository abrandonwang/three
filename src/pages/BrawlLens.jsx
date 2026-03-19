import PageLayout from '../components/PageLayout'

const linkClass = "text-zinc-800 dark:text-white underline underline-offset-4 decoration-zinc-400 dark:decoration-white/30 hover:text-[#3b82f6] hover:decoration-[#3b82f6] transition-all"

export default function BrawlLens() {
  return (
    <PageLayout
      title="BrawlLens"
      subtitle="Analytics & scouting tool for Brawl Stars"
    >
      <div className="space-y-7">
        <p className="text-[16px] text-zinc-700 dark:text-white/80 leading-relaxed">
          A web app for Brawl Stars players to analyze stats, scout opponents, and improve gameplay through data.
        </p>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold">Stack</span>
          <p className="mt-2 text-[16px] text-zinc-700 dark:text-white/80">React · Next.js · TypeScript · Tailwind</p>
        </div>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold">Status</span>
          <p className="mt-2 text-[16px] text-zinc-700 dark:text-white/80">In progress</p>
        </div>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold">Link</span>
          <p className="mt-2">
            <a href="https://brawllens.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              brawllens.com
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
