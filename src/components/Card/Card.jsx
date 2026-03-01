import { useRef, useState, useEffect } from 'react'
import styles from './Card.module.css'
import FinderWindow from '../FinderWindow/FinderWindow'

function Card({ data, onFinderClick }) {
  const imgRef = useRef(null)
  const finderRef = useRef(null)
  const [finderScale, setFinderScale] = useState(0.5)
  const [finderDimensions, setFinderDimensions] = useState({ width: 1200, height: 800 })
  const [nowPlaying, setNowPlaying] = useState(null)
  const [showGithub, setShowGithub] = useState(false)
  const previewRef = useRef(null)

  useEffect(() => {
    if (data.type !== 'cs') return
    async function fetchNowPlaying() {
      try {
        const res = await fetch('/api/now-playing')
        if (res.ok) setNowPlaying(await res.json())
      } catch { /* no backend yet */ }
    }
    fetchNowPlaying()
    const id = setInterval(fetchNowPlaying, 30000)
    return () => clearInterval(id)
  }, [data.type])

  useEffect(() => {
  if (data.action === 'finder' && finderRef.current) {
    function calcScale() {
      const rect = finderRef.current.getBoundingClientRect()
      const ratio = rect.width / rect.height
      // Render at 2x the card size for crisp text
      const renderHeight = 800
      const renderWidth = renderHeight * ratio
      setFinderDimensions({ width: renderWidth, height: renderHeight })
      setFinderScale(rect.height / renderHeight)
    }
    calcScale()
    window.addEventListener('resize', calcScale)
    return () => window.removeEventListener('resize', calcScale)
  }
}, [data.action])

  function handleClick() {
    if (data.action === 'finder') {
      onFinderClick()
    } else if (data.link) {
      window.open(data.link, '_blank')
    }
  }

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    imgRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px) scale(1.1)`
  }

  function handleMouseLeave() {
    imgRef.current.style.transform = 'translate(0, 0) scale(1.1)'
  }

  // Intro card (2 rows, 1 col)
  if (data.type === 'intro') {
    return (
      <div
        className={`${styles.card} ${styles.intro}`}
        style={{ gridArea: data.area }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src="/images/IMG_6424.jpg"
          className={styles.introBg}
          alt=""
        />
      </div>
    )
  }

  // CS @ Northwestern card (1 row, 2 cols)
  if (data.type === 'cs') {
  return (
    <div className={`${styles.card} ${styles.cs}`} style={{ gridArea: data.area }}>
      <h2 className={styles.csName}>Hi, I'm Brandon!</h2>
      <span className={styles.csSchool}>Computer Science [at] Northwestern University</span>
      <span className={styles.csDesc}>I'm a current first year at Northwestern studying CS and violin performance! My interests include web design, web development, and interfaces. Some of my hobbies include rock climbing, swimming, eating mexican food, and watching sci-fi movies.</span>
    </div>
  )
}

  // Hello card (1x1) — GitHub contributions
  if (data.type === 'hello') {
    return (
      <a
        className={`${styles.card} ${styles.hello}`}
        style={{ gridArea: data.area }}
        href="https://github.com/abrandonwang"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.helloTop}>
          <svg className={styles.helloGithubIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span className={styles.helloGithubLabel}>GitHub</span>
        </div>
        <div className={styles.helloChartWrap}>
          <img
            src="https://ghchart.rshah.org/abrandonwang"
            className={styles.helloChart}
            alt="GitHub contributions"
          />
        </div>
        <span className={styles.helloHandle}>@abrandonwang ↗</span>
      </a>
    )
  }

  // Contact card (1x1)
  if (data.type === 'contact') {
    return (
      <div className={`${styles.card} ${styles.contact}`} style={{ gridArea: data.area }}>
        <div className={styles.contactIcons}>
          <a href="mailto:brandonwang2029@u.northwestern.edu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4L12 13 2 4"/>
            </svg>
          </a>
          <a href="https://github.com/abrandonwang" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/abrandonwang" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    )
  }


    if (data.action === 'finder') {
  return (
    <div
      ref={finderRef}
      className={`${styles.card} ${styles.finderCard}`}
      style={{ gridArea: data.area }}
    >
      <div className={styles.finderWrapper}>
        <div
          className={styles.finderScale}
          style={{
            width: `${finderDimensions.width}px`,
            height: `${finderDimensions.height}px`,
            transform: `scale(${finderScale})`,
          }}
        >
          <FinderWindow />
        </div>
      </div>
    </div>
  )
}


  // Project card (finder or other projects)
  return (
  <div
    className={`${styles.card} ${styles.project}`}
    style={{ gridArea: data.area }}
    onClick={handleClick}
    onMouseMove={(e) => {
      if (previewRef.current) {
        previewRef.current.style.left = `${e.clientX + 20}px`
        previewRef.current.style.top = `${e.clientY - 100}px`
        previewRef.current.style.opacity = '1'
      }
    }}
    onMouseLeave={() => {
      if (previewRef.current) {
        previewRef.current.style.opacity = '0'
      }
    }}
  >
    <span className={styles.projectNumber}>01</span>
    <div className={styles.projectBottom}>
      <div>
        <h2 className={styles.projectTitle}>Project Showcase: {data.title}</h2>
        <p className={styles.projectDescription}>{data.description}</p>
        {data.tags && (
          <div className={styles.tags}>
            {data.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          </div>
        )}
      </div>
      <span className={styles.arrow}>↗</span>
    </div>

    {data.preview && (
      <div ref={previewRef} className={styles.previewPopup}>
        <iframe
          src={data.preview}
          className={styles.previewIframe}
          tabIndex={-1}
        />
      </div>
    )}
  </div>
)
}

export default Card
