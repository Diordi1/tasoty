import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import HomeSection from './components/HomeSection'
import Navbar from './components/Navbar'
import BottomNavigation from './components/BottomNavigation'
import axios from 'axios'
import styles from './components/button.module.css';
import TotalHome from './components/TotalHome'
import Faq from './components/Faq'
function App() {
  
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<TotalHome/>} />
        <Route path="/about" element={<div className="content-container"><h2>About Us</h2><p>Welcome to Tasoty, your destination for delicious recipes!</p></div>} />
        <Route path="/contact" element={<div className="content-container"><h2>Contact Us</h2><p>Get in touch with our team.</p></div>} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
         
    </>
  )
}

export default App
