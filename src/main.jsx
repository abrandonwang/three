import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './styles/index.css'
import App from './App'
import Northwestern from './pages/Northwestern'
import Everyday from './pages/Everyday'
import Concentration from './pages/Concentration'
import BrawlLens from './pages/BrawlLens'
import ScrollToTop from './components/ScrollToTop' // Import it here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        {/* ScrollToTop sits here to watch the HashRouter */}
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/northwestern" element={<Northwestern />} />
          <Route path="/everyday" element={<Everyday />} />
          <Route path="/concentration" element={<Concentration />} />
          <Route path="/brawllens" element={<BrawlLens />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>
)