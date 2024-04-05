import React from 'react'
import './Footer.css'

const Footer = ({ backgroundColor }) => {
  return (
<div className={`footer saira-extra-condensed-regular`} style={{ backgroundColor }}>    <div className='top'>

    <div className='leftsection'>
        <h1>Farm2Door</h1>
        <p>Lorem Ipsum Ipsumite</p>
    </div>
    <div className='bottom'>
    <div className="location">
        <i className="fas fa-location-dot"></i>
        <p>IIIT Dharwad, Sattur Colony, Dharwad</p>
    </div>
    <div className="phone">
    <i class="fa -solid fa-phone"></i>
        <p>+91 123456789</p>
    </div>
    <div className="email">
    <i class="fa-solid fa-envelope"></i>
        <p>support@farm2door.com</p>
    </div>
</div>
    <div>
   <div className='aboutcompany'>
    <h>ABOUT THE COMPANY</h>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor massa diam. Curabitur imperdiet euismod ex nec sollicitudin. Etiam tristique magna vitae ex convallis interdum.</p>
   </div>
   <div className='companyicons'>
        <a href="./">
            <i className='fa-brands fa-facebook-square'></i>
        </a>
        <a href="./">
            <i className='fa-brands fa-x-twitter'></i>
        </a>
        <a href="./">
            <i className='fa-brands fa-github-square'></i>
        </a>
        <a href="./">
            <i className='fa-brands fa-linkedin'></i>

        </a>
        </div>

    </div>
    
    </div>
   

    <div className='copyright'>2024 COPYRIGHTS: FARM2DOOR.com</div>
      
    </div>
   
  )
}

export default Footer
