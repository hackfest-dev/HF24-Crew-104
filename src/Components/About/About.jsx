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
        <h2>Empowering Farmers: Modern Solutions for Traditional Growth"</h2>
        <p>In a world where technology evolves rapidly,
         our platform stands as a beacon of innovation for 
         farmers seeking to navigate the modern marketplace. 
         With our user-friendly interface, farmers can effortlessly showcase 
         their bountiful harvests and forge valuable connections with buyers 
         near and far. Embracing the digital age doesn't mean forsaking tradition,
          it means enhancing it. Join us as we blend time-honored agricultural 
          practices with cutting-edge technology, empowering farmers to thrive in today's 
          dynamic landscape of commerce.</p>
    </div>
    
    </div>
    <div className='about1'>
    <div className='about1img'>
        <img src={about2} alt=''/>
    </div>
    <div className='about1des'>
        <h2>Nature's Palette: Freshness in Every Hue</h2>
        <p>Dive into a world of vibrant colors and crisp textures
         as you explore nature's bounty sourced directly from local
          farms. Each vegetable, carefully selected at its peak ripeness, 
          promises unmatched flavor and nutrition for your meals. 
          From the deep greens of leafy vegetables to the vivid hues
           of ripe tomatoes and peppers, our produce offers a feast for the senses,
            bringing the essence of the farm to your table with every bite.</p>
    </div>
    
    </div>

    <div className='about1'>
    <div className='about1img'>
        <img src={about3} alt=''/>
    </div>
    <div className='about1des'>
        <h2>Swift and Sustainable Logistics</h2>
        <p>Experience the seamless integration of our swift and sustainable logistics
         system, connecting local farmers to bustling markets and delivering farm-fresh
          goodness right to your doorstep. From field to market to your kitchen, our efficient
           operations ensure freshness at every step. Let us handle the journey, so you can enjoy
            the taste of local, sustainable produce with ease. Sit back, relax, and savor the flavor 
            of community-supported agriculture, delivered directly to you.</p>
    </div>
    
    </div>
    



      
    </div>
  )
}

export default About
