'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import HeroCarousal1 from "../Components/heroCarousal1";
import HeroCarousal2 from "../Components/heroCarousal2";
import SwiperButtons from "../Components/swiperBtn";
import SlideNextButton from "../Components/swiperBtn";

const Hero = () => {
  return (
    <div>
      <Swiper
      modules={[Pagination]}
      pagination={{clickable: true, renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>` }}
      loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <HeroCarousal1 />
          <SlideNextButton/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroCarousal2 />
          <SlideNextButton/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
