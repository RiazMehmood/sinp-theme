'use client'

import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
    const swiper = useSwiper();
    const [activeSlide, setActiveSlide] = useState(0);

    const handleRadioChange = (index) => {
      swiper.slideTo(index);
    };
  
    useEffect(() => {
      const updateActiveSlide = () => {
        setActiveSlide(swiper.realIndex);
      };
  
      swiper.on('slideChange', updateActiveSlide);
  
      return () => {
        swiper.off('slideChange', updateActiveSlide);
      };
    }, [swiper]);
  
    const slideIndices = Array.from({ length: swiper.slides.length }, (_, index) => index);
  
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4 items-center">
          {slideIndices.map((index) => (
            <div key={index}>
              <input
                type="radio"
                id={`radio${index}`}
                name="sliderNavigation"
                checked={activeSlide === index}
                onChange={() => handleRadioChange(index)}
              />
              <label
                htmlFor={`radio${index}`}
                className={` rounded-full cursor-pointer ${
                  activeSlide === index ? 'border border-orange-500' : ''
                }`}
              ></label>
            </div>
          ))}
        </div>
      </div>
    );
  }