"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HeroImage } from "@/lib/shopify/types";
import HeroCarousal from "./heroCarousal";

const responsive = {
  mobile: {
    breakpoint: { max: 4500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HeroSlider = async (props:{slider:HeroImage[]}) => {
  
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
      >
        {
          props.slider.map((slide:HeroImage,index:number)=>{
            return(
              <div>
                <HeroCarousal imageData={slide} />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  );
};
export default HeroSlider;