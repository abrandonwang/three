import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from './context/ThemeContext'
import Layout from './components/Layout'
import Section from './components/Section'
import ProjectItem from './components/ProjectItem'
import Chat from './components/Chat'

const linkClass = "text-zinc-800 dark:text-white font-medium underline underline-offset-4 decoration-zinc-400 dark:decoration-white/30 hover:text-[#3b82f6] hover:decoration-[#3b82f6] transition-all"

export default function App() {
  const nameRef = useRef(null)
  const [stickyVisible, setStickyVisible] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [emailHovered, setEmailHovered] = useState(false)
  const { isDark, setIsDark } = useTheme()

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('abrandonwang@gmail.com')
    setEmailCopied(true)
  }

  const handleEmailMouseLeave = () => {
    setEmailHovered(false)
    setEmailCopied(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    if (nameRef.current) observer.observe(nameRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <AnimatePresence>
        {stickyVisible && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <div className="max-w-[640px] mx-auto px-6 flex justify-between items-center border-b border-zinc-100 dark:border-white/5 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
              <span className="text-[20px] font-semibold tracking-tight text-[#3b82f6]">Brandon Wang</span>
              <span className="text-[20px] text-zinc-600 dark:text-white">Software Engineer</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Layout>
        <Section delay={0.1}>
          <div ref={nameRef} className="flex items-center justify-between mb-1">
            <h1 className="text-[20px] font-semibold tracking-tight text-[#3b82f6]">Brandon Wang</h1>
            <button
              onClick={() => setIsDark(!isDark)}
              type="button"
              className="relative block w-fit h-fit cursor-pointer m-0 p-1 group"
              title={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
              aria-label="Dark mode toggle"
            >
              <div className="relative h-5 w-5 rounded-full overflow-hidden group-active:scale-90 transition-transform duration-200">
                
                {/* Main Body (Sun/Moon) */}
                <div 
                  className={`absolute inset-0 rounded-full transition-colors duration-500 ease-in-out
                    ${isDark 
                      ? 'bg-white' 
                      : 'bg-zinc-800 group-hover:bg-blue-600'
                    }
                  `} 
                />

                {/* The Mask (The Bite) */}
                <div
                  className={`absolute inset-0 rounded-full will-change-transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isDark 
                      ? 'bg-[#09090b]' // Must match your dark theme background
                      : 'bg-white'      // Must match your light theme background
                    }
                    ${isDark
                      ? '-translate-x-[100%] group-hover:-translate-x-[45%]' // Slides in from Left
                      : 'translate-x-[100%] group-hover:translate-x-[45%]'   // Slides in from Right
                    }
                  `}
                />
              </div>
            </button>
            {/* END TOGGLE */}

          </div>
          <p className="text-[18px] text-zinc-600 dark:text-white">Software Engineer</p>

          <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-zinc-700 dark:text-white/80">
            <p>
              Currently at <Link to="/northwestern" className={linkClass}>Northwestern</Link> building interfaces for the web. I learn something new <Link to="/everyday" className={linkClass}>everyday</Link>.
            </p>
            <p>
              In June 2028, I will graduate from Northwestern University with a BS in Computer Science and a BM in Music Performance.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-6">
            <a href="https://github.com/abrandonwang" target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
            <button onClick={copyEmailToClipboard} onMouseEnter={() => setEmailHovered(true)} onMouseLeave={handleEmailMouseLeave} className={`group relative inline-flex ${linkClass} cursor-pointer bg-none border-none p-0`}>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">{emailCopied && emailHovered ? 'Copied!' : 'abrandonwang@gmail.com'}</span>
              <span className="absolute left-0 top-0 opacity-100 group-hover:opacity-0 transition-opacity underline underline-offset-4 decoration-zinc-400 dark:decoration-white/30">Email</span>
            </button>
          </div>
        </Section>

        <Section delay={0.2}>
          <h2 className="text-[13px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold mb-5">Work</h2>
          <div className="flex flex-col">
            <ProjectItem to="/portfolio" title="Portfolio" description="This site" />
            <ProjectItem to="/concentration" title="Concentration" description="Memory matching game" />
            <ProjectItem to="/brawllens" title="BrawlLens" description="Brawl Stars analytics" wip />
          </div>
        </Section>

        <Section delay={0.3} last>
          <Chat />
        </Section>
      </Layout>
    </>
  )
}