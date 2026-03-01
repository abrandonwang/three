import styles from './ContentArea.module.css'

function ContentArea({ currentPath, currentFolder, selectedItem, onSelect, onFolderOpen, onFileOpen, fileSystem }) {
  return (
    <div className={styles.container}>
      <div className={styles.breadCrumb}>
        <span className="material-symbols-outlined">desktop_mac</span>
        <span>{fileSystem.name}</span>
        {currentPath.length > 1 && (
          <>
            <span className={`material-symbols-outlined ${styles.breadCrumbArrow}`}>arrow_forward_ios</span>
            <div className={styles.pill}>
              <span className={`material-symbols-outlined ${styles.pillIcon}`}>folder</span>
              <span>{currentFolder.name}</span>
            </div>
          </>
        )}
      </div>
      <div className={styles.columnHeaders}>
        <div>Name</div>
        <div style={{textAlign: 'right'}}>Details</div>
      </div>
      <div className={styles.fileList}>
        {currentFolder.children.map(item => (
          <div
            key={item.id}
            className={`${styles.row} ${selectedItem === item.id ? styles.selected : ''}`}
            onClick={() => {
              onSelect(item.id)
              if (item.type === 'folder') {
                onFolderOpen(item.id)
              } else {
                onFileOpen(item)
              }
            }}
          >
            <div className={styles.nameCell}>
              <span className="material-symbols-outlined">{item.icon || 'folder'}</span>
              <span>{item.name}</span>
            </div>
            <div className={styles.detailCell}>
              {item.meta?.techStack || item.meta?.kind || item.type}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.statusBar}>
        <span>{currentFolder.children.length} items{selectedItem ? ', 1 selected' : ''}</span>
        <span>☕ fueled by coffee</span>
      </div>
    </div>
  )
}

export default ContentArea