import styles from './FinderWindow.module.css'
import { useState, useEffect } from 'react'
import TitleBar from '../TitleBar/TitleBar'
import Sidebar from '../Sidebar/Sidebar'
import ContentArea from '../ContentArea/ContentArea'
import WindowManager from '../WindowManager/WindowManager.jsx'
import fileSystem from '../../data/fileSystem.js'

function getFolderAtPath(path) {
  let current = fileSystem
  for (let i = 1; i < path.length; i++) {
    current = current.children.find(child => child.id === path[i])
  }
  return current
}

function FinderWindow() {
  const [currentPath, setCurrentPath] = useState(["root"])
  const [selectedItem, setSelectedItem] = useState(null)
  const [openWindows, setOpenWindows] = useState([])

  function handleSidebarClick(folderId) {
    setCurrentPath(["root", folderId])
    setSelectedItem(null)
  }

  function handleFolderOpen(folderId) {
    setCurrentPath([...currentPath, folderId])
    setSelectedItem(null)
  }

  function handleBack() {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1))
      setSelectedItem(null)
    }
  }

  function handleSelect(itemId) {
    setSelectedItem(itemId)
  }

  function handleFileOpen(file) {
    if (file.fileType === 'link') {
      window.open(file.content, '_blank')
      return
    }

    const alreadyOpen = openWindows.find(w => w.id === file.id)
    if (alreadyOpen) {
      handleWindowFocus(file.id)
      return
    }

    setOpenWindows([...openWindows, {
      id: file.id,
      fileData: file,
      zIndex: openWindows.length + 1
    }])
  }

  function handleWindowClose(windowId) {
    setOpenWindows(openWindows.filter(w => w.id !== windowId))
  }

  function handleWindowFocus(windowId) {
    const maxZ = Math.max(...openWindows.map(w => w.zIndex))
    setOpenWindows(openWindows.map(w =>
      w.id === windowId ? { ...w, zIndex: maxZ + 1 } : w
    ))
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && openWindows.length > 0) {
        const topWindow = openWindows.reduce((a,b) => a.zIndex > b.zIndex ? a : b)
        handleWindowClose(topWindow.id)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [openWindows])

  const currentFolder = getFolderAtPath(currentPath)

  return (
    <div className={styles.container}>
      <TitleBar
        title={currentFolder.name}
        onBack={handleBack}
        canGoBack={currentPath.length > 1}
      />
      <div className={styles.body}>
        <Sidebar
          activeSidebar={currentPath[1] || null}
          onSidebarClick={handleSidebarClick}
        />
        <ContentArea
          currentPath={currentPath}
          currentFolder={currentFolder}
          selectedItem={selectedItem}
          onSelect={handleSelect}
          onFolderOpen={handleFolderOpen}
          onFileOpen={handleFileOpen}
          fileSystem={fileSystem}
        />
      </div>
      {openWindows.length > 0 && (
        <div
          className = {styles.overlay}
          onClick={() => {
            const topWindow = openWindows.reduce((a,b) => a.zIndex > b.zIndex ? a : b)
            handleWindowClose(topWindow.id)
          }}
        />
      )}

      <WindowManager
        windows={openWindows}
        onClose={handleWindowClose}
        onFocus={handleWindowFocus}
      />
    </div>
  )
}

export default FinderWindow