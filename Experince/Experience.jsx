import React from 'react'
import'./Experience.css'

const Experience = ({Lol,Humble,god}) => {
    const myStyle={
        fontSize:'18px',
        fontWeight:'bold',
    color: 'rgb(22, 22, 85)',
    textShadow:'1px 2px 1px  rgb(212, 223, 69) ',
    fontFamily: 'serif'
        }
        const Link={
            position:"relative",
            top:"1.5cm",
            left:"3cm",
            textDecoration:"none",
             
        }
  return (
    <div>
        <div className='experience'>
            <img src={Lol} alt=""></img><br/>
            <span className='sp'>Developer</span><br/><br/>
               <span style={myStyle}>
                Html,Css,Javascript,React<br/>
                Nodejs,Express<br/>
                <a href="" style={Link}>learn more</a>
            </span>
            </div>
            <div className='experience2'>
            <img src={Humble} alt=""></img><br/>
            <span  className='sp'> Design</span><br/><br/>
                <span style={myStyle}>
                    Figmas,Sketch,Photoshop<br/>
                    Adobe Illustrator,Adobe Xd<br/>
                    <a href="" style={Link}>learn more</a>
                </span>
            </div>
            <div className='experience3'>
            <img src={god} alt=""/><br/>
           <span style={myStyle}>
            UI/UX<br/><br/>
            wireframes, prototypes,<br/>journey map,
             research <br/>
             information architecture<br/>
             <a href="" style={Link}>learn more</a>
        
             </span>
            </div>
        </div>
  )
}

export default Experience