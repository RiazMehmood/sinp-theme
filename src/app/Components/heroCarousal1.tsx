"use client";

import { HiShoppingCart } from "react-icons/hi";
import Button from "./button";
import Title from "./title";

const HeroCarousal1 = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="2xl:h-screen xl:h-screen lg:h-[700px] xs:h-600px flex flex-wrap md:flex-1 items-center px-4 2xl:px-24 py-6 lg:py-0 lg:bg-left-top bg-no-repeat bg-left-top xl:bg-right bg-cover" style={{backgroundImage: "url('/slide2.webp')"}}>
       <div className="flex justify-center mx-auto xl:mx-5 flex-col 3xl:w-[80%]">
        <Title
          title="Spark Up Your Passion"
          title2="With Good Music."
          topTitle="Feel the Rhythm."
          description="Experience the decibels like your ears deserve to. Safe for the ears, very for the heart. A treat to your ears."
        />
        <div>
          <Button
            onClick={handleClick}
            className="bg-[#06264b] hover:bg-[#fc6539] md:ml-5 mt-10 2xs:mt-14 mb-20 2xs:mb-[78px] lg:mx-0 xl:mx-0 xs:mb-[90px] md:mb-24 text-[#fc6539] hover:text-white"
          >
            <div className="flex justify-between items-center space-x-4 ">
              <div className="text-md lg:text-xl 3xl:text-[40px]">Explore More</div>
              <div className="text-md lg:text-xl 3xl:text-[40px]">
                <HiShoppingCart />
              </div>
            </div>
          </Button>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousal1;
