import React from 'react'
import'./Navbar.css'

const NabBar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>TrustDarling</div>
            <span>toggle</span>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className='button n-button'>Contact</button>
        </div>
    </div>
  )
}

export default NabBar