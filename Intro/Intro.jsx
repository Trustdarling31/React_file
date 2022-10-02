import React from 'react'
import'./Intro.css'
import Github from'../../IMG/github.png'
import Linkedin from'../../IMG/linkedin.png'
import Instagram from'../../IMG/instagram.png'
import Vector1 from'../../IMG/Vector1.png'
import Vector2 from'../../IMG/Vector2.png'
import Profile from'../../IMG/Image3.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Glass from'../../IMG/glasses.png'
import Emoji from'../../IMG/humble.png'
import Thumbup from'../../IMG/thumbup.png'


const Intro = () => {
  return (
    <div className='Intro'>
        <div className='i-left'> 
        <span>Hello it's </span>
            <span> DARLINGTON</span>
            <span>(TrustDarling)</span>
           <span>Hi dear! 1'am Darlington.A full stack Web Developer
              <br/>
              having 3years of experiencenin back end & front end development.<br/>
              i have Backend Skill in laravel,cakePHP,PHP.<br/>
               I also have Frontend skills in javascript,Node.Js,CSS/SASS,Boostrap and Tailwind css
          </span>
           <button className='button i-button'>hire me</button>
             <div className='i-icon'>
               <a href=""> <img src={Github} alt=""/></a>
               <a href=""> <img src={Linkedin} alt=""/></a>
                <a href=""><img src={Instagram} alt="" /></a>
            </div> 
        </div>
         <div className='i-right'> 
            <img src={Vector2} alt="" />
            <img src={Vector1} alt=""/> 
            <img src={Profile} alt=""/>
       </div> 
      <div >
          <FloatingDiv image={Glass}
                        imge={Emoji}
                        Thumb={Thumbup}/>      
            </div>
    </div>
  )
}

export default Intro