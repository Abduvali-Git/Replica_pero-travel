import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css'
import HomeApp from './HomeApp.jsx'
import ExApp from "./ExApp.jsx"
import ThirdApp from './ThirdApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/ex" element={<ExApp />} />
        <Route path="/third" element={<ThirdApp />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

    </Router>

  </StrictMode>,
)
