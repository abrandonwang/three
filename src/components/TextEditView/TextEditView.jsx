import styles from './TextEditView.module.css'

function TextEditView({ content }) {
  return (
    <div className={styles.container}>
      {content.split('\n').map((line, index) => (
        <p key={index} className={line.startsWith('#') ? styles.heading : styles.line}>
          {line.startsWith('# ') ? line.slice(2) :
           line.startsWith('## ') ? line.slice(3) :
           line || '\u00A0'}
        </p>
      ))}
    </div>
  )
}

export default TextEditView