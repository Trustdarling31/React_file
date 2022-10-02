import React from 'react'
import './FloatingDiv.css'
import Crown from'../../IMG/crown.png'
const floatingDiv = ({image,imge,Thumb}) => {
  return (
    <div className=''>
      <div className='FloatingDiv'>
<img  src={Crown}alt=""/>
<span>web<br/>Developer</span>
</div>
   <div className='Mog'>
   <img src={image} alt="" />
   <img src={imge} alt=""/>

   </div>
   <div className='Div2'>
      <img src={Thumb} alt="" />
      <span>Best Design Award</span>
   </div>
    </div>
  
  )
}

export default floatingDiv