import React from 'react'
import Experience from '../Experince/Experience'
import Heart from'../../IMG/heartemoji.png'
import Humble from'../../IMG/humble.png'
import Onglass from'../../IMG/glasses.png'
import'./Service.css'

const service = () => {
  return (
    <div>
        <div className='Service'>
        <span>My Awesome<br/>
        Service</span><br/>
        <span className='span1'>
            i specialize in customer's satisfaction<br/>
            well tested with reasonable years of experience
        </span><br/>
        <button className='button btn2'>Check out my CV</button>
        </div>
        <Experience 
        Lol={Heart} 
        Humble={Humble}
        god={Onglass}/>
    </div>
  )
}

export default service