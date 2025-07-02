import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Expericence } from './components/Expericence'
import { Skills } from './components/Skills'
import Projects from './components/Projects';
import { Contact } from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"




function App() {
useEffect(()=> {
Aos.init();

}, [])

  return (
    <>
     <Navbar />
     <div className="container">
      <Home />
      <Expericence />
      <Skills />
      <Projects />
      <Contact />
     
     </div>
    </>
  )
}

export default App
