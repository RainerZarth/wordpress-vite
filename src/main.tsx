import React from 'react'
import ReactDOM from 'react-dom/client'
import Pagestart from './pages/Pagestart'
import './index.css'
import './fonts.css'
import "./css/switch.css"

ReactDOM.createRoot(document.querySelector('body') as HTMLElement).render(
  <React.StrictMode>
    <Pagestart />
  </React.StrictMode>,
)
