
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./MultipleSlides.scss";


// import Swiper core and required modules
import SwiperCore, {
  Zoom,Navigation,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom,Navigation,Pagination]);


export default function MultipleSlides() {
  return (
    <>  
    <Swiper 
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff'
        }} 
        zoom={true} 
        navigation={true} 
        pagination={{
            "clickable": true
        }} 
        className="mySwiper">
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/bnqzQ-kDwlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/hlANal2_tsc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/tvVRlWQ95C4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/UIukHag0uGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/7fx2L3KOaik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </SwiperSlide>
        
    </Swiper>
    </>
  )
}


