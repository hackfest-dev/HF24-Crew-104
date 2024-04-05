import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero container' >
      <div className='hero-text'>
        <h1>LOREM IPSUM MOTTO</h1>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vivamus porttitor
         massa diam. Cras ut felis justo. Aenean leo odio,
          mattis eu est ut, maximus gravida odio.</p>
          <button className='btn'>Learn More</button>
      </div>
    </div>
  )
}

export default Hero
