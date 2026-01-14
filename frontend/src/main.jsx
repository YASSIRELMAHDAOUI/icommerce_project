import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appcommande from './component/Appcommande.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appcommande/>
  </StrictMode>,
)
