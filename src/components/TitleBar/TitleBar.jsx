import styles from './TitleBar.module.css'

function TitleBar({ title, onBack, canGoBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.wrapper}>
          <span className={styles.dot1}></span>
          <span className={styles.dot2}></span>
          <span className={styles.dot3}></span>
        </div>
        <div className={styles.navigation}>
          <button onClick={onBack} className={`${styles.backArrow} ${!canGoBack ? styles.disabled : ''}`}>
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <button className={`${styles.forwardArrow} ${styles.disabled}`}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    </div>
  )
}

export default TitleBar