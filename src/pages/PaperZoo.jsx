import PageLayout from '../components/PageLayout'

const linkClass = "text-zinc-800 dark:text-white underline underline-offset-4 decoration-zinc-400 dark:decoration-white/30 hover:text-[#3b82f6] hover:decoration-[#3b82f6] transition-all"

const features = [
  {
    name: 'Socratic Mentor Agent',
    description: 'Generates dynamic SVG diagrams and contextual guidance for each origami step. Gives hints and explanations rather than direct answers.',
  },
  {
    name: 'Visual Verification',
    description: 'Webcam snapshots are analyzed by a multimodal AI model to evaluate fold accuracy against a rubric — generating constructive feedback instead of simple pass/fail.',
  },
  {
    name: 'Digital Habitat',
    description: 'Verified folds unlock unique pixel-art creatures that populate a personal habitat. Custom physics engine handles character sprites and collision logic.',
  },
  {
    name: 'Community',
    description: 'Visit other users\' habitats and share achievements.',
  },
]

export default function PaperZoo() {
  return (
    <PageLayout
      title="PaperZoo"
      subtitle="AI-powered origami learning platform"
    >
      <div className="space-y-8">

        <p className="text-[16px] text-zinc-700 dark:text-white/80 leading-relaxed">
          A living ecosystem of digital wildlife brought to life through origami and agentic AI. Fold paper models, photograph your progress, and receive AI feedback while unlocking pixel-art creatures for your personal habitat. Built at WildHacks 2026.
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
              ['Framework', 'Next.js 15 · TypeScript'],
              ['Styling', 'Tailwind CSS v4'],
              ['AI', 'Google Gemini — multimodal fold verification'],
              ['Database', 'Supabase (PostgreSQL)'],
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
            <span className="text-[12px] uppercase tracking-widest text-zinc-500 dark:text-white/50 font-semibold">Event</span>
            <p className="mt-1 text-[15px] text-zinc-700 dark:text-white/70">WildHacks 2026 Winner</p>
          </div>
          <div>
            <span className="text-[12px] uppercase tracking-widest text-zinc-500 dark:text-white/50 font-semibold">GitHub</span>
            <p className="mt-1">
              <a href="https://github.com/pmadaan1/Wildhacks-2026" target="_blank" rel="noopener noreferrer" className={linkClass}>
                pmadaan1/Wildhacks-2026
              </a>
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}
