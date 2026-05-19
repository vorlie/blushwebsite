import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ServerStatusProvider } from './context/ServerStatusContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ServerStatusProvider>
      <App />
    </ServerStatusProvider>
  </React.StrictMode>,
)
