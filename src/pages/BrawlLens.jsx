import PageLayout from '../components/PageLayout'

const linkClass = "text-zinc-800 dark:text-white underline underline-offset-4 decoration-zinc-400 dark:decoration-white/30 hover:text-[#3b82f6] hover:decoration-[#3b82f6] transition-all"

const features = [
  {
    name: 'AI Chat',
    description: 'Natural language interface on the homepage. Ask anything (player stats, brawler recommendations, meta questions) and get a structured answer powered by Claude.',
  },
  {
    name: 'Player Lookup',
    description: 'Search any player by tag to see trophies, win rates, and their full brawler roster sorted by trophies. Player data is fetched through a self-hosted proxy to the official Brawl Stars API.',
  },
  {
    name: 'Brawler Catalog',
    description: 'Browse every brawler in the game with rarity filtering and search. Data sourced from the Brawlify API, displaying star powers, gadgets, and rarity tiers.',
  },
  {
    name: 'Leaderboards',
    description: 'Global and regional leaderboards (US, Korea, Brazil, Germany, Japan) showing rank, player name, trophies, and club. Data is cached in Supabase and refreshed on a schedule.',
  },
  {
    name: 'Meta / Maps',
    description: 'Interactive map browser with a brawler recommendation sidebar. Displays current map rotations and which brawlers perform best on each map based on meta data.',
  },
]

export default function BrawlLens() {
  return (
    <PageLayout
      title="BrawlLens"
      subtitle="AI-powered companion for Brawl Stars"
    >
      <div className="space-y-8">

        <p className="text-[16px] text-zinc-700 dark:text-white/80 leading-relaxed">
          A full-stack web app for Brawl Stars players to look up stats, scout opponents, study the meta, and ask questions in plain English. Built around a conversational AI interface backed by live game data.
        </p>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-500 dark:text-white/50 font-semibold">Features</span>
          <div className="mt-3 rounded-xl border border-zinc-200 dark:border-white/10 overflow-hidden">
            {features.map((f, i) => (
              <div
                key={f.name}
                className={`px-4 py-4 ${i !== features.length - 1 ? 'border-b border-zinc-100 dark:border-white/5' : ''}`}
              >
                <p className="text-[15px] font-medium text-zinc-900 dark:text-white mb-1">{f.name}</p>
                <p className="text-[14px] text-zinc-600 dark:text-white/60 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[12px] uppercase tracking-widest text-zinc-500 dark:text-white/50 font-semibold">Stack</span>
          <div className="mt-3 rounded-xl border border-zinc-200 dark:border-white/10 overflow-hidden">
            {[
              ['Framework', 'Next.js (App Router) · TypeScript'],
              ['Styling', 'Tailwind CSS'],
              ['Data', 'Brawl Stars API (self-hosted proxy) · Brawlify API'],
              ['Database', 'Supabase (leaderboard cache)'],
              ['AI', 'natural language queries over live game data using Opus'],
            ].map(([label, value], i, arr) => (
              <div
                key={label}
                className={`px-4 py-3 flex items-baseline gap-4 ${i !== arr.length - 1 ? 'border-b border-zinc-100 dark:border-white/5' : ''}`}
              >
                <span className="text-[13px] text-zinc-400 dark:text-white/40 w-24 shrink-0">{label}</span>
                <span className="text-[14px] text-zinc-700 dark:text-white/70">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <span className="text-[12px] uppercase tracking-widest text-zinc-500 dark:text-white/50 font-semibold">Status</span>
            <p className="mt-1 text-[15px] text-zinc-700 dark:text-white/70">In progress</p>
          </div>
          <div>
            <span className="text-[12px] uppercase tracking-widest text-zinc-500 dark:text-white/50 font-semibold">Live</span>
            <p className="mt-1">
              <a href="https://brawllens.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
                brawllens.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}
