import React from 'react'
import "swiper/css"
import {Swiper,SwiperSlide} from'swiper/react'
import Profile1 from '../../IMG/profile1.jpg'
import Profile2 from '../../IMG/profile2.jpg'
import Profile3 from '../../IMG/profile3.jpg'
import Profile4 from '../../IMG/profile4.jpg'
import Profile5 from '../../IMG/profile5.jpg'
import {Pagination} from 'swiper'
import './Testimonial.css'

const Testimonial = () => {
    const Clients=[
        {image:Profile1,
        details:`i have worked with him on several occasion and it has full of testimonials
        i highly recomend him to anyone`
    },
    {image:Profile2,
        details:`i have worked with him on several occasion and it has full of testimonial
        i highly recomend him to anyone`
    },
    {image:Profile3,
        details:`i have worked with him on several occasion and it has full of testimonials
        i highly recomend him to anyone`
    },
    {image:Profile4,
        details:`i have worked with him on several occasion and it has full of testimonials
        i highly recomend him to anyone`
    },
    {image:Profile5,
        details:`i have worked with him on several occasion and it has full of testimonials,
        i highly recomend him to anyone`
    },
    
    ]
  return (
    <div className='testimonial'>
        <div className='t-heading'>
         <span>clients always gets satisfied<br/> from me</span>
         <Swiper
         modules={[Pagination]}
         slidesPerView ={1}
         Pagination={{clickable:true}}>
            {Clients.map(function(client,index){
        return(
            <SwiperSlide key={index}>
                <div className='client'>
                <img src={client.image} alt=""/>
                   {client.details}
                </div>
            </SwiperSlide>
        )
            })}
         </Swiper>
        </div>
    </div>
  )
}

export default Testimonial