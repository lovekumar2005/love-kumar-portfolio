import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Experience from './sections/Experience/Experience'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import PortfolioChatbot from './PortfolioChatbot/PortfolioChatbot'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      <PortfolioChatbot/>
    </div>
  )
}

export default App