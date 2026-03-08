import styles from './WindowManager.module.css'
import AppWindow from '../AppWindow/AppWindow'

function WindowManager({ windows, onClose, onFocus }) {
  if (windows.length === 0) return null

  return (
    <div className={styles.container}>
      {windows.map(win => (
        <AppWindow
          key={win.id}
          id={win.id}
          fileData={win.fileData}
          zIndex={win.zIndex}
          onClose={() => onClose(win.id)}
          onFocus={() => onFocus(win.id)}
        />
      ))}
    </div>
  )
}

export default WindowManager