import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Avtar from './Avtar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Avtar />
  </StrictMode>,
)
