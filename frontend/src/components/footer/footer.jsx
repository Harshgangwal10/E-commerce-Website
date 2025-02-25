import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footer'>
    <div className="footer-content">
      <div className="footer-left-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis quod eveniet odit quisquam cumque! Veritatis quo vitae aliquam tenetur eos quas assumenda architecto ex aliquid. Officiis nisi autem harum.</p>
      </div>
      <div className="footer-center-content">
       <h2>Company</h2>
       <ul>
        <li>Home </li>
        <li>Explore</li>
        <li>Products</li>
        <li>Privacy policy</li>
       </ul>
      </div>
      
      <div className="footer-right-content">
        <h2>Get In Touch</h2>
        <li>+91-212-456-789</li>
        <li>contact@mycart.com</li>
      </div>
    </div>
    <hr />
    <p className='footer-copyright'>Copyright 2025 @ My Cart.com -All Right Reserved.</p>
          
        </div>
  )
}

export default footer
