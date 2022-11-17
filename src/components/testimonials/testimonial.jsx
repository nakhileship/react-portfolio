import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avtr1.jpg'
import AVTR2 from '../../assets/avtr2.jpg'
import AVTR3 from '../../assets/avtr3.jpg'
import AVTR4 from '../../assets/avtr4.jpg'

// import Swiper core and required modules
import {Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'


// Import Swiper styles

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data =[
  {
    avatar:AVTR1,
     name : 'Visak',
     review :'A heartwarming read about self-acceptance and the idea that it’s possible to learn to love your imperfect self.'

  },
  {
    avatar:AVTR2,
     name : 'Arun',
     review :'A heartwarming read about self-acceptance and the idea that it’s possible to learn to love your imperfect self.'

  },
  {
    avatar:AVTR3,
     name : 'Bijith',
     review :'A heartwarming read about self-acceptance and the idea that it’s possible to learn to love your imperfect self.'

  },
  {
    avatar:AVTR4,
     name : 'Krishna',
     review :'A heartwarming read about self-acceptance and the idea that it’s possible to learn to love your imperfect self.'

  }
]

const Testimonial = () => {
  return (
   
      <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
       >
        
        {
          data.map(({avatar,name,review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
           {review}
            </small>
        </SwiperSlide>
            )
          })
        }
       
      </Swiper>
      </section>
   
  )
}

export default Testimonial
