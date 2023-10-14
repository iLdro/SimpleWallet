import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AddPayment from './pages/addPayement.tsx'
import PageGraph from './pages/pageGraph.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <PageGraph/>
  </React.StrictMode>,
)
