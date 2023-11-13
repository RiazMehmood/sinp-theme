import { HiShoppingCart } from "react-icons/hi";

import Title from "./title";
import { HeroImage } from "@/lib/shopify/types";


const HeroCarousal = (props:{imageData:HeroImage}) => {

  return (
    <>
    <div className="2xl:h-screen xl:h-screen lg:h-[700px] xs:h-600px flex flex-wrap md:flex-1 items-center px-4 2xl:px-24 py-6 lg:py-0 lg:bg-left-top bg-no-repeat bg-left-top xl:bg-right bg-cover" style={{backgroundImage: `url("${props.imageData.image}")`}}>
       <div className="flex justify-center mx-auto xl:mx-5 flex-col 3xl:w-[80%]">
        <Title
          title={props.imageData.heading}
          title2=""
          topTitle={props.imageData.topText}
          description={props.imageData.detail}
        />
        <div>
          <button

            className="flex flex-wrap items-center transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal bg-[#06264b] hover:bg-[#fc6539] md:ml-5 mt-10 2xs:mt-14 mb-20 2xs:mb-[78px] lg:mx-0 xl:mx-0 xs:mb-[90px] md:mb-24 text-[#fc6539] hover:text-white"
          >
            <div className="flex justify-between items-center space-x-4 ">
              <div className="text-md lg:text-xl 3xl:text-[40px]">Explore More</div>
              <div className="text-md lg:text-xl 3xl:text-[40px]">
                <HiShoppingCart />
              </div>
            </div>
          </button>
        </div>
        <div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroCarousal;
