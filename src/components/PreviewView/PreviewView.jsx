import styles from './PreviewView.module.css'

function PreviewView({ content, name }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={content} alt={name} />
    </div>
  )
}

export default PreviewView