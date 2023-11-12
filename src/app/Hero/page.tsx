"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import HeroCarousal1 from "../Components/heroCarousal1";
import HeroCarousal2 from "../Components/heroCarousal2";
import SlideNextBtn from "../Components/slideNextBtn";

const Hero = () => {
  // console.log(Pagination)
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <HeroCarousal2 />
          <SlideNextBtn />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCarousal1 />
          <SlideNextBtn />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
