import { Playfair_Display } from "next/font/google";
import { Title } from "../utils/interfaces";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const Title = ({ title, title2, topTitle, description }: Title) => {
  return (
    <div className="md:ml-5 md:w-[80%] lg:max-w-[60%] lg:mt-24">
      <span className="text-2xl block mb-3 mt-24 xs:mt-28 md:mt-20">
        {topTitle}
      </span>
      <div className={playfair.className}>
      <div className="font-playfair text-[#fc6539] text-3xl mt-4 font-semibold sm:text-4xl 2xs:text-3xl lg:text-5xl 2xl:text-7xl mb-5">
        {title}
      <div className="md:block  2xs:block 2xs:mt-2 inline ml-1 xs:inline mt-5">{title2}</div>
      </div>
      </div>
      <hr className="w-16 h-1 bg-orange-400 mb-7 border-0"></hr>
      <p className=" text-sm leading-7 xs:mt-10 2xs:text-[15px] md:text-[18px] 2xs:leading-8 lg:text-xl xl:text-[22.5px]">{description}
      </p>
    </div>
  );
};

export default Title;
