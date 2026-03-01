import styles from './AppWindow.module.css'
import TextEditView from '../TextEditView/TextEditView'
import PreviewView from '../PreviewView/PreviewView'

function AppWindow({ fileData, zIndex, onClose, onFocus }) {
  function renderContent() {
    switch (fileData.fileType) {
      case 'text':
        return <TextEditView content={fileData.content} />
      case 'image':
        return <PreviewView content={fileData.content} name={fileData.name} />
      default:
        return <div className={styles.fallback}>No preview available</div>
    }
  }

  return (
    <div
      className={styles.window}
      style={{ zIndex }}
      onMouseDown={onFocus}
    >
      <div className={styles.titleBar}>
        <div className={styles.trafficLights}>
          <button className={styles.closeBtn} onClick={onClose}>
            <span className={styles.closeIcon}>×</span>
          </button>
          <div className={styles.minimizeBtn}></div>
          <div className={styles.maximizeBtn}></div>
        </div>
        <span className={styles.title}>{fileData.name}</span>
      </div>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  )
}

export default AppWindow