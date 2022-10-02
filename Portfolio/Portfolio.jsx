import React from 'react'
import {Swiper,SwiperSlide} from'swiper/react'
import './Portfolio.css'
import 'swiper/css'
import  Music from'../../IMG/musicapp.png'
import  Hoce from'../../IMG/hoc.png'
import  Sidebar from'../../IMG/sidebar.png'
import Ecome from'../../IMG/ecommerce.png'

const Portfolio = () => {
  return (
    <div>
        <div className='portfolio'>
            <div className='p-name'>
                <span>I have had much experience</span><br/>
                <span>in react to be precise....</span>
                 </div>
               <div>
                 <Swiper
               spaceBetween={30}
                 slidesPerView={3}
                 grabCursor={true}
                 className='porfolio-slider'
                 >
                   <SwiperSlide> 
                    <img src={Ecome} alt="" /> 
                    </SwiperSlide>
                <SwiperSlide> 
                    <img src={Music} alt="" /> 
                    </SwiperSlide>

                    <SwiperSlide> 
                    <img src={Hoce} alt="" /> 
                    </SwiperSlide> 

                    <SwiperSlide> 
                    <img src={Sidebar} alt="" /> 
                    </SwiperSlide> 
                    
              </Swiper>
              </div>

        </div>
    </div>
  )
}

export default Portfolio