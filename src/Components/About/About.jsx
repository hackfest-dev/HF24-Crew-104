import React from 'react'
import './About.css'
import about1 from '../Assets/farmer1.jpeg'
import about2 from '../Assets/veggies2.jpeg'
import about3 from '../Assets/delivery3.avif'
/*write props later*/
const About = () => {
  return (
    <div className='abouts'>
    <div className='about1'>
    <div className='about1img'>
        <img src={about1} alt=''/>
    </div>
    <div className='about1des'>
        <h2>LOREM IPSUM IPSMIM DOLOR SIT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor massa diam. Cras ut felis justo. Aenean leo odio, mattis eu est ut, maximus gravida odio. In sit amet quam velit. Donec elit libero, pellentesque vitae egestas id, fringilla at odio. Curabitur imperdiet euismod ex nec sollicitudin. Etiam tristique magna vitae ex convallis interdum.</p>
    </div>
    
    </div>
    <div className='about1'>
    <div className='about1img'>
        <img src={about2} alt=''/>
    </div>
    <div className='about1des'>
        <h2>LOREM IPSUM IPSMIM DOLOR SIT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor massa diam. Cras ut felis justo. Aenean leo odio, mattis eu est ut, maximus gravida odio. In sit amet quam velit. Donec elit libero, pellentesque vitae egestas id, fringilla at odio. Curabitur imperdiet euismod ex nec sollicitudin. Etiam tristique magna vitae ex convallis interdum.</p>
    </div>
    
    </div>

    <div className='about1'>
    <div className='about1img'>
        <img src={about3} alt=''/>
    </div>
    <div className='about1des'>
        <h2>LOREM IPSUM IPSMIM DOLOR SIT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor massa diam. Cras ut felis justo. Aenean leo odio, mattis eu est ut, maximus gravida odio. In sit amet quam velit. Donec elit libero, pellentesque vitae egestas id, fringilla at odio. Curabitur imperdiet euismod ex nec sollicitudin. Etiam tristique magna vitae ex convallis interdum.</p>
    </div>
    
    </div>
    



      
    </div>
  )
}

export default About
