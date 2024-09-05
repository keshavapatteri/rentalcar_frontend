
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
      <footer className="footer bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
   
    <div>
     
      <Link to="/about" className="link link-hover">
        About us
      </Link>
    </div>
    <div>
    <Link to="/contact" className="link link-hover">
      Contact
      </Link>
     
    </div>
    <div>
    <Link to="/car-list" className="hover:text-yellow-300 pt-2 transition-colors">Cars Details</Link>
    </div>
  
    
  </nav>
  <nav>
    <h6 className="footer-title" >Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>

    </div>
  )
}

export default Footer
