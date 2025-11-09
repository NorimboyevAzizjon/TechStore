import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18next'  // <- "libnext.js" emas, "i18next.js"
import './index.css'
import './i18next.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)