import { HiShoppingCart } from "react-icons/hi";
import Button from "./button";
import Title from "./title";
import { HeroImage } from "@/lib/shopify/types";

const HeroCarousal = (props:{imageData:HeroImage}) => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="2xl:h-screen lg:h-700px xs:h-600px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-6 lg:py-0 bg-no-repeat bg-left-top xl:bg-right bg-cover" style={{backgroundImage: `url("${props.imageData.image}")`}}>
      <div className="flex justify-center flex-col w-[80%]">
        <Title
          title={props.imageData.heading}
          title2=""
          topTitle={props.imageData.topText}
          description={props.imageData.detail}
        />
        <div>
          <Button
            onClick={handleClick}
            className="bg-[#06264b] hover:bg-[#fc6539] mt-20 text-[#fc6539] hover:text-white"
          >
            <div className="flex justify-between items-center space-x-4">
              <div className="text-lg">Explore More</div>
              <div className="text-lg">
                <HiShoppingCart />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousal;
