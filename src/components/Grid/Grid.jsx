import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Grid.module.css'
import Card from '../Card/Card'

const cards = [
  {
    id: 'intro',
    type: 'intro',
    area: 'intro',
  },
  {
    id: 'cs',
    type: 'cs',
    area: 'cs',
  },
  {
    id: 'hello',
    type: 'hello',
    area: 'hello',
  },
  {
    id: 'contact',
    type: 'contact',
    area: 'contact',
  },
  {
    id: 'finder',
    type: 'project',
    area: 'finder',
    title: 'Interactive Finder',
    description: 'A macOS Finder-style portfolio explorer built in React',
    tags: ['React', 'CSS Modules'],
    color: '#7B2D8E',
    action: 'finder',
  },
  {
  id: 'proj',
  type: 'project',
  area: 'proj',
  title: 'Concentration',
  description: 'Memory card matching game with difficulty levels and a live timer',
  tags: ['JavaScript', 'CSS'],
  color: '#2563eb',
  link: 'https://abrandonwang.github.io/card-game/',
  preview: 'https://abrandonwang.github.io/card-game/',
},
]

function Grid({ onFinderClick }) {
  const gridRef = useRef(null)

  useEffect(() => {
    const children = Array.from(gridRef.current.children)
    // Stagger by leftmost grid column so cards animate left → right
    const colStart = [1, 2, 4, 2, 3, 1] // matches card order: intro,cs,hello,contact,finder,proj
    children.forEach((child, i) => {
      gsap.fromTo(child,
        { opacity: 0, x: -30, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.8,
          delay: (colStart[i] - 1) * 0.35,
          ease: 'power3.out',
        }
      )
    })
  }, [])

  return (
    <div className={styles.grid} ref={gridRef}>
      {cards.map((card) => (
        <Card key={card.id} data={card} onFinderClick={onFinderClick} />
      ))}
    </div>
  )
}

export default Grid