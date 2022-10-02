import React from 'react'
import './Work.css'
import Facebook from'../../IMG/Facebook.png'
import Amazon from'../../IMG/amazon.png'
import Instagram from'../../IMG/instagram.png'
import Upwork from'../../IMG/Upwork.png'

const Work = () => {
  return (
    <div>
        <div className='f-work'>
         <span>Hope to work for all<br/>these</span><br/>
         <span>Brands & Clients</span><br/>
         <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
            corporis minus molestiae aliquid sapiente nisi, consequuntur,<br/>
             quas facilis porro, in veritatis aut tempora labore laboriosam<br/> 
            mollitia perferendis maiores?</span><br/>
            <button className='button btn3'>hire me</button>
        </div>
        <div className='l-work'>
          <div className='circle'>
            <div className='amazon am1'>
            <img src={Instagram} alt=""/>
            </div>
            <div className='amazon am2'>
            <img src={Facebook} alt=""/>
            </div>
            <div className='amazon am3'>
            <img src={Upwork} alt=""/>
            </div>
            <div className='amazon am4'>
            <img src={Amazon} alt=""/>
            </div>
          </div>
          <div className='b-circle'></div>
          <div className='l-circle'></div>
        </div>
    </div>
  )
}

export default Work