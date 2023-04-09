import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Footer from './Components/Footer'
import './App.css'
function App() {
  return (
    <>
      <NavBar />
      <div className='app-container'>
        <Hero />
        <Projects />
        <About />
      </div>
      <Footer />
    </>
  )
}

export default App
