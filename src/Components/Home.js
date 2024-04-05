import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Footer from './footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
