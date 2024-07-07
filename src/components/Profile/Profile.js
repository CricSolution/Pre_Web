import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './profile.css';
import "./demo.css"



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Profile() {
  return (
    <>
     <div className='stars'>
           <h1> Our Teams</h1> 
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
            delay:1000,
            disableOnInteraction:true
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide>
    
        <div class="team-box team-box1">
         
          <div class="team-name">
          
              <div class="team-content">
                <h2>Ankit Bajpai</h2>
                <p>CEO & Founder</p>
                
              </div>
            
          </div>
        </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div class="team-box team-box2">
         
         <div class="team-name">
         
             <div class="team-content">
               <h2>Abhishek Bhardwaj
               </h2>
               <p>COO & Co-Founder</p>
               
             </div>
           
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="team-box team-box3">
         
         <div class="team-name">
         
             <div class="team-content">
               <h2>Mayuri Yadav</h2>
               <p>CHRO
               </p>
               
             </div>
           
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="team-box team-box4">
         
         <div class="team-name">
         
             <div class="team-content">
               <h2>Bhavya Kumari</h2>
               <p>CTO</p>
               
             </div>
           
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="team-box team-box5" >
         
         <div class="team-name" >
         
             <div class="team-content">
               <h2>Bhoomi Bhardwaj</h2>
               <p>Director</p>
              
             </div>
           
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="team-box team-box6">
         
         <div class="team-name">
         
             <div class="team-content">
               <h2>Abhishek Bajpai</h2>
               <p>Director
               </p>
             </div>
           
         </div>
       </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
