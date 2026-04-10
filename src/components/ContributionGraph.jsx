import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const CELL = 16
const GAP  = 3
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const COLORS_LIGHT = [
  { bg: '#ececee', shadow: 'inset 0 1px 2px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.8)' },
  { bg: '#bfdbfe', shadow: 'inset 0 1px 2px rgba(59,130,246,0.15)' },
  { bg: '#93c5fd', shadow: 'inset 0 1px 2px rgba(59,130,246,0.2)' },
  { bg: '#60a5fa', shadow: 'inset 0 1px 2px rgba(59,130,246,0.25)' },
  { bg: '#3b82f6', shadow: 'inset 0 1px 3px rgba(0,0,50,0.2)' },
]

const COLORS_DARK = [
  { bg: 'rgba(255,255,255,0.07)', shadow: 'inset 0 1px 2px rgba(0,0,0,0.3)' },
  { bg: '#1e3a5f', shadow: 'inset 0 1px 2px rgba(0,0,0,0.2)' },
  { bg: '#1d4ed8', shadow: 'inset 0 1px 2px rgba(0,0,0,0.2)' },
  { bg: '#2563eb', shadow: 'inset 0 1px 2px rgba(0,0,0,0.15)' },
  { bg: '#3b82f6', shadow: 'inset 0 1px 3px rgba(0,0,50,0.2)' },
]

function formatDate(str) {
  return new Date(str + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric',
  })
}

export default function ContributionGraph({ username }) {
  const { isDark } = useTheme()
  const [weeks, setWeeks] = useState([])
  const [monthLabels, setMonthLabels] = useState([])
  const [total, setTotal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [tooltip, setTooltip] = useState(null)
  const scrollRef  = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then(r => r.json())
      .then(({ contributions }) => {
        const today = new Date().toISOString().slice(0, 10)
        const filtered = contributions.filter(d => d.date <= today)

        // Group into Sun–Sat weeks
        const grouped = []
        let week = new Array(7).fill(null)
        filtered.forEach(day => {
          const dow = new Date(day.date + 'T12:00:00').getDay()
          week[dow] = day
          if (dow === 6) { grouped.push([...week]); week = new Array(7).fill(null) }
        })
        if (week.some(Boolean)) grouped.push(week)

        // Build month labels: track when the month first appears
        const labels = []
        let lastMonth = null
        grouped.forEach((w, wi) => {
          const firstDay = w.find(Boolean)
          if (!firstDay) return
          const m = firstDay.date.slice(0, 7)
          if (m !== lastMonth) {
            labels.push({
              wi,
              name: new Date(firstDay.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short' }),
            })
            lastMonth = m
          }
        })

        setTotal(filtered.reduce((sum, d) => sum + d.count, 0))
        setWeeks(grouped)
        setMonthLabels(labels)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  // Scroll to most recent (right edge) on load
  useEffect(() => {
    if (weeks.length && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [weeks])

  const palette = isDark ? COLORS_DARK : COLORS_LIGHT

  function handleEnter(e, day) {
    if (!day || !wrapperRef.current) return
    const cell = e.currentTarget.getBoundingClientRect()
    const box  = wrapperRef.current.getBoundingClientRect()
    setTooltip({
      x: cell.left - box.left + cell.width / 2,
      y: cell.top  - box.top,
      text: `${day.count} contribution${day.count !== 1 ? 's' : ''} · ${formatDate(day.date)}`,
    })
  }

  return (
    <div ref={wrapperRef} className="relative select-none">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-10 pointer-events-none px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap -translate-x-1/2"
          style={{
            left: tooltip.x,
            top: tooltip.y - 34,
            background: isDark ? '#fff' : '#18181b',
            color: isDark ? '#18181b' : '#fff',
          }}
        >
          {tooltip.text}
        </div>
      )}

      <div className="flex gap-2">
        {/* Day labels */}
        <div
          className="flex flex-col flex-shrink-0"
          style={{ gap: GAP, paddingTop: 22 }}
        >
          {DAY_LABELS.map(d => (
            <div
              key={d}
              className="flex items-center text-[11px] text-zinc-400 dark:text-white/30"
              style={{ height: CELL, minWidth: 28 }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Scrollable grid */}
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: 'none' }}
          onMouseLeave={() => setTooltip(null)}
        >
          {loading && (
            <p className="text-[14px] text-zinc-400 dark:text-white/30 py-4">Loading...</p>
          )}

          {!loading && (
            <div style={{ position: 'relative' }}>
              {/* Month labels */}
              <div style={{ height: 20, position: 'relative', marginBottom: 2 }}>
                {monthLabels.map(({ wi, name }) => (
                  <span
                    key={wi}
                    className="absolute text-[11px] text-zinc-400 dark:text-white/30"
                    style={{ left: wi * (CELL + GAP) }}
                  >
                    {name}
                  </span>
                ))}
              </div>

              {/* Cell grid */}
              <div className="inline-flex" style={{ gap: GAP }}>
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                    {week.map((day, di) => {
                      const style = day ? palette[day.level] : null
                      return (
                        <div
                          key={di}
                          style={{
                            width: CELL,
                            height: CELL,
                            borderRadius: 4,
                            backgroundColor: day ? style.bg : (isDark ? 'rgba(255,255,255,0.07)' : '#ececee'),
                            boxShadow: day ? style.shadow : (isDark ? 'inset 0 1px 2px rgba(0,0,0,0.3)' : 'inset 0 1px 2px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.8)'),
                            opacity: !day ? 0.5 : 1,
                            cursor: day ? 'default' : undefined,
                          }}
                          onMouseEnter={day ? (e) => handleEnter(e, day) : undefined}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {total !== null && (
        <p className="mt-3 text-[13px] font-semibold text-zinc-600 dark:text-white/70">
          {total.toLocaleString()} contributions
        </p>
      )}
    </div>
  )
}
