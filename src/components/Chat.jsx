import { useState, useRef, useEffect } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "hey, what's up! ask me anything" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (messages.length > 1) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg = { role: 'user', content: text }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "sorry, something broke lol" }])
    } finally {
      setLoading(false)
    }
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div>
      <h2 className="text-[13px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold mb-6">Chat</h2>
      <div className="rounded-lg border border-zinc-200 dark:border-white/8 overflow-hidden">
        {/* Message area */}
        <div className="px-4 py-4 h-48 overflow-y-auto space-y-3 bg-zinc-50 dark:bg-white/3">
          {messages.map((m, i) => (
            <p key={i} className="text-[17px] text-zinc-700 dark:text-white/80 leading-relaxed">
              <span className="font-semibold text-zinc-900 dark:text-white">
                {m.role === 'assistant' ? 'Brandon' : 'You'}
              </span>
              <span className="text-zinc-300 dark:text-white/20 mx-2">—</span>
              {m.content}
            </p>
          ))}
          {loading && (
            <p className="text-[17px] text-zinc-700 dark:text-white/80">
              <span className="font-semibold text-zinc-900 dark:text-white">Brandon</span>
              <span className="text-zinc-300 dark:text-white/20 mx-2">—</span>
              <span className="animate-pulse">...</span>
            </p>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input row */}
        <div className="flex items-center gap-3 px-4 py-3 border-t border-zinc-200 dark:border-white/8 bg-white dark:bg-transparent">
          <span className="text-[13px] text-zinc-300 dark:text-white/20 select-none">→</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Ask something..."
            className="flex-1 bg-transparent outline-none text-[17px] text-zinc-800 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-white/20"
          />
        </div>
      </div>
    </div>
  )
}
