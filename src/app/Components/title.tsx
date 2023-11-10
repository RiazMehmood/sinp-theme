import { Playfair_Display } from "next/font/google";
interface Title {
  title: string;
  title2: string;
  topTitle?: string;
  description?: string;
}

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const Title = ({ title, title2, topTitle, description }: Title) => {
  return (
    <div>
      <span className="text-lg block mb-3 xl:text-[24px]">
        {topTitle}
      </span>
      <div className={playfair.className}>
      <div className="font-playfair text-[#fc6539] text-3xl font-semibold sm:text-4xl lg:text-5xl 2xl:text-7xl mb-5">
        {title}
      <div className="mt-5">{title2}</div>
      </div>
      </div>
      <hr className="w-16 h-1 bg-orange-400 mb-7 border-0"></hr>
      <p className=" text-sm lg:text-md xl:text-[22.5px] w-[75%] leading-[40px]">{description}
      </p>
    </div>
  );
};

export default Title;
