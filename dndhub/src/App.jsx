import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProjectIdea from './components/ProjectIdea.jsx'
import BusinessPlan from './components/BusinessPlan.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
 
  return(
    <>
    <Header/>
    <div className="min-h-screen-flex flex-col bg-amber-50"></div>
    <Footer/>
    </>
  )
  
}

export default App
