import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyProject from './Components/Projects/MyProject'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyProject/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App