'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import SlideNextButton from "../Components/swiperBtn";
import { HeroImage } from "@/lib/shopify/types";
import HeroCarousal from "../Components/heroCarousal";

const Hero =  (props:{slider:HeroImage[]}) => {
  
  return (
    <div>
      <Swiper
      modules={[Pagination]}
      pagination={{clickable: true, renderBullet: (index, className) => `<span class="${className}"></span>` }}
      loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
          {
            props.slider.map((item:HeroImage,i:Number)=>
            {
                return (<>
                    <SwiperSlide>
                      <HeroCarousal imageData={item}/>
                      <SlideNextButton/>
                    </SwiperSlide>
                  </>
                )
            })
          }
      </Swiper>
    </div>
  );
};

export default Hero;
