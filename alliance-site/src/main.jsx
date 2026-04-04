import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/common/About.js'
import './App.css'        // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />,
    <About />
  </React.StrictMode>,
)