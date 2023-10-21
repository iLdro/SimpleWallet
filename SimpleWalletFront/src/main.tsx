import React from 'react'
import ReactDOM from 'react-dom/client'
import AddPayment from './pages/addPayement.tsx'
import PageGraph from './pages/pageGraph.tsx'
import './index.css'
import LoginPage from './pages/loginPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage/>
    <AddPayment/>
    <PageGraph/>
  </React.StrictMode>,
)
