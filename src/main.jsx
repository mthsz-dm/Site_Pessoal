import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import './assets/css/navbar.css'
import './assets/css/profile.css'
import './assets/css/footer.css'
import './assets/css/repositories.css'
import './assets/css/courses.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
