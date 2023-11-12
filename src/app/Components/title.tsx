import { Playfair_Display } from "next/font/google";
import { Title } from "../utils/interfaces";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const Title = ({ title, title2, topTitle, description }: Title) => {
  return (
    <div>
      <span className="text-2xl block mb-3 mt-20 md:mt-0 xl:text-[24px]">
        {topTitle}
      </span>
      <div className={playfair.className}>
      <div className="font-playfair text-[#fc6539] text-3xl font-semibold sm:text-4xl lg:text-5xl 2xl:text-7xl mb-5">
        {title}
      <div className="md:block inline ml-2 mt-5">{title2}</div>
      </div>
      </div>
      <hr className="w-16 h-1 bg-orange-400 mb-7 border-0"></hr>
      <p className=" text-sm lg:text-md xl:text-[22.5px] leading-[30px]">{description}
      </p>
    </div>
  );
};

export default Title;
