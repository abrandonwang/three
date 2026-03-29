import PageLayout from '../components/PageLayout'

const linkClass = "text-zinc-800 dark:text-white underline underline-offset-4 decoration-zinc-400 dark:decoration-white/30 hover:text-[#3b82f6] hover:decoration-[#3b82f6] transition-all"

const features = [
  {
    name: 'AI Chat',
    description: 'An embedded chat interface powered by Claude. Visitors can ask questions about me, my work, or my background and get answers grounded in context I\'ve provided.',
  },
  {
    name: 'Dark Mode Toggle',
    description: 'Custom-built animated theme toggle. Hovering reveals a pac-man style bite animation — the circle takes a chunk out of itself depending on the current mode.',
  },
  {
    name: 'Northwestern',
    description: 'Interactive class history page. Filter by quarter or subject area, and expand any course to read a description and see the topics covered.',
  },
  {
    name: 'Sticky Header',
    description: 'A minimal sticky nav fades in once the main heading scrolls out of view, keeping navigation available without cluttering the initial layout.',
  },
]

export default function Portfolio() {
  return (
    <PageLayout
      title="Portfolio"
      subtitle="This site"
    >
      <div className="space-y-8">

        <p className="text-[16px] text-zinc-700 dark:text-white/80 leading-relaxed">
          A minimal personal site built to show my work and let people get to know me. Focused on clean typography, smooth interactions, and a conversational way to learn about who I am.
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
              ['Framework', 'React · Vite'],
              ['Styling', 'Tailwind CSS'],
              ['Animation', 'Framer Motion'],
              ['AI', 'Claude — contextual chat about me and my work'],
              ['Hosting', 'Vercel'],
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
            <p className="mt-1 text-[15px] text-zinc-700 dark:text-white/70">Live</p>
          </div>
          <div>
            <span className="text-[12px] uppercase tracking-widest text-zinc-500 dark:text-white/50 font-semibold">Link</span>
            <p className="mt-1">
              <a href="https://brandonwang.work" target="_blank" rel="noopener noreferrer" className={linkClass}>
                brandonwang.work
              </a>
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}
