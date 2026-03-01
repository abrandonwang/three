import { useEffect } from 'react'
import styles from './FinderModal.module.css'

function FinderModal({ onClose }) {

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className={styles.modal}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.content}>
        {/* Your Finder component will go here */}
        <p style={{ color: 'white', textAlign: 'center' }}>Finder goes here</p>
      </div>
    </div>
  )
}

export default FinderModal