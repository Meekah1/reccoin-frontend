// import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/navigation/Header.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import {WhitePaper} from "./pages/WhitePaper.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from './pages/Dashboard'
import CompanyRegPage from './pages/CompanyRegPage';
import AboutUs from './pages/AboutUs';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<CompanyRegPage />}/>
        <Route path="/white-paper" element={<WhitePaper />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </>

  )
}

export default App
