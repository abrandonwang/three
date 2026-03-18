import { Link } from 'react-router-dom'

const ProjectItem = ({ title, description, href, to, wip }) => {
  const Wrapper = to ? Link : 'a'
  const props = to
    ? { to }
    : { href, target: '_blank', rel: 'noopener noreferrer' }

  return (
    <Wrapper
      {...props}
      className="group flex items-center justify-between py-4 border-b border-zinc-100 dark:border-white/5 last:border-none"
    >
      <div className="flex items-baseline gap-3">
        <span className="text-[17px] font-medium text-zinc-900 dark:text-white group-hover:text-[#3b82f6] transition-colors">
          {title}
        </span>
        <span className="text-[16px] text-zinc-400 dark:text-white/40">
          {description}
        </span>
        {wip && (
          <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-300 dark:text-white/20">
            wip
          </span>
        )}
      </div>
      <span className="text-zinc-300 dark:text-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
        →
      </span>
    </Wrapper>
  )
}

export default ProjectItem
