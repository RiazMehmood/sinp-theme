"use client";

import { HiShoppingCart } from "react-icons/hi";
import Button from "./button";
import Title from "./title";
import SlideBtn from "./slideNextBtn";
import SlideNextBtn from "./slideNextBtn";

const HeroCarousal2 = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="2xl:h-screen lg:h-700px xs:h-600px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-6 lg:py-0 bg-no-repeat bg-left-top xl:bg-right bg-cover" style={{backgroundImage: "url('/slide1.webp')"}}>
      {/* <a href="https://www.freepik.com/free-photo/portrait-tender-beautiful-curly-haired-brunette-woman-casual-outfit-closing-eyes-smiling-happily-listening-music-earphones-holding-smartphone_10177756.htm#page=2&query=cute%20person%20using%20airpods&position=44&from_view=search&track=ais">Image by cookie_studio</a> on Freepik */}
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
            className="bg-[#06264b] hover:bg-[#fc6539] mt-10 mb-20 text-[#fc6539] hover:text-white"
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
