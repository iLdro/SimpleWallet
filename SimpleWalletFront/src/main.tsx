import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AddPayment from './pages/addPayement.tsx'
import PageGraph from './pages/pageGraph.tsx'
import './index.css'
import LoginPage from './pages/loginPage.tsx'
import RegisterPage from './pages/registerPage.tsx'
import Layout from './pages/layout.tsx'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/addPayment" element={<AddPayment/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
