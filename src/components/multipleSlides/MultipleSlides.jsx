import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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

    const onSlideChange = (e) => {
        e.slides.forEach((elem,index) => {
        if (elem.classList.contains("swiper-slide-active")) {
            elem.querySelector("iframe").src = elem.querySelector("iframe").src + '?enablejsapi=1';
        }        
        })
    }

  return (
    <>  
    <Swiper onSlideChange={onSlideChange}
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff'
        }} 
        zoom={true} 
        navigation={true} 
        pagination={{
            "clickable": true
        }} 
        className="mySwiper"
      
        >
        <SwiperSlide >
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/bnqzQ-kDwlo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/hlANal2_tsc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/tvVRlWQ95C4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/UIukHag0uGY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-zoom-container">
                <iframe width="832" height="468" src="https://www.youtube.com/embed/7fx2L3KOaik" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </SwiperSlide>
        
    </Swiper>
    </>
  )
}