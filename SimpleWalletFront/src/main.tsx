import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AddPayment from './pages/addPayement.tsx'
import HomePage from './pages/homePage.tsx'
import PageGraph from './pages/pageGraph.tsx'
import './index.css'
import LoginPage from './pages/loginPage.tsx'
import RegisterPage from './pages/registerPage.tsx'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/addPayment" element={<AddPayment/>}/>
        <Route path="/pageGraph" element={<PageGraph/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
