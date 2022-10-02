import React from 'react'
import Wave from'../../IMG/wave.png'
import'./Footer.css'
const Footer = () => {
    const WAVE={
        width:'100%',
        height:'100%',
        
    }
  return (
    <div >
        <div className='wave'>
        <img className='WAVE' src={Wave} alt='' />
        </div>
    </div>
  )
}

export default Footer