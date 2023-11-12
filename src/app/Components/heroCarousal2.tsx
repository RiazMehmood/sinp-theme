"use client";

import { HiShoppingCart } from "react-icons/hi";
import Button from "./button";
import Title from "./title";

const HeroCarousal2 = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="2xl:h-screen lg:h-700px xs:h-600px flex flex-wrap md:flex-1 items-center px-4 2xl:px-24 py-6 lg:py-0 bg-no-repeat bg-left-top xl:bg-right bg-cover" style={{backgroundImage: "url('/slide1.webp')"}}>
      <div className="flex mx-auto justify-center flex-col">
        <Title
          title="Walk Up Your Passion"
          title2="Listen Good Music."
          topTitle="#Feel the Rhythm."
          description="Experience the decibels like your ears deserve to. Safe for the ears, very for the heart. A treat to your ears."
        />
        <div>
          <Button
            onClick={handleClick}
            className="bg-[#06264b] hover:bg-[#fc6539] md:ml-5 mt-10 2xs:mt-14 mb-20 2xs:mb-[78px] xs:mb-[90px] md:mb-24 text-[#fc6539] hover:text-white"
          >
            <div className="flex justify-between items-center space-x-4">
              <div className="text-md">Explore More</div>
              <div className="text-md">
                <HiShoppingCart />
              </div>
            </div>
          </Button>
        </div>
        {/* <SlideNextBtn/> */}
      </div>
    </div>
  );
};

export default HeroCarousal2;
