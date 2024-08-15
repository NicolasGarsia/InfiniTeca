import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Perfil from './pages/Perfil'



function App() {

  return (
    <>
    <Router>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/Perfil' element={<Perfil/>} />

      </Routes>
    </Router>
      
    </>
  )
}

export default App
