import { useState } from 'react'
import styles from './App.module.css'
import Grid from './components/Grid/Grid'
import FinderModal from './components/FinderModal/FinderModal'

function App() {
  const [finderOpen, setFinderOpen] = useState(false)

  return (
    <div className={styles.page}>
      <Grid onFinderClick={() => setFinderOpen(true)} />
      {finderOpen && <FinderModal onClose={() => setFinderOpen(false)} />}
    </div>
  )
}

export default App