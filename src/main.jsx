import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './styles/index.css'
import App from './App'
import Northwestern from './pages/Northwestern'
import Everyday from './pages/Everyday'
import Concentration from './pages/Concentration'
import BrawlLens from './pages/BrawlLens'
import Portfolio from './pages/Portfolio'
import ScrollToTop from './components/ScrollToTop' // Import it here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* ScrollToTop sits here to watch the BrowserRouter */}
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/northwestern" element={<Northwestern />} />
          <Route path="/everyday" element={<Everyday />} />
          <Route path="/concentration" element={<Concentration />} />
          <Route path="/brawllens" element={<BrawlLens />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)