"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroCarousal1 from "./heroCarousal1";
import HeroCarousal2 from "./heroCarousal2";

const responsive = {
  mobile: {
    breakpoint: { max: 4500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = () => {
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
        <div>
          <HeroCarousal1 />
        </div>
        <div>
          <HeroCarousal2 />
        </div>
      </Carousel>
    </div>
  );
};
export default Hero;