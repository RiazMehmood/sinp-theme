"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

const SlideNextBtn = () => {
  const swiper = useSwiper();
  const [selectedOption, setSelectedOption] = useState<string>("2");
  useEffect(() => {
    console.log("Swiper instance:", swiper.slideTo(Number(selectedOption)-1,1));
  }, [selectedOption]);

  const radioStyle = {
    borderColor: "#06264b",
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    swiper.slideTo(Number(event.target.value));
  };

  return (
    <div className="fixed flex mt-10 bottom-0 left-1/2 transform -translate-x-1/2 z-20">
      <label className="block mb-2">
        <input
          type="radio"
          value="1"
          checked={selectedOption === "1"}
          onChange={handleRadioChange}
          className="mr-2 w-6 h-6"
        />
      </label>

      <label className="block mb-2 border-orange-500">
        <input
          type="radio"
          value="2"
          checked={selectedOption === "2"}
          onChange={handleRadioChange}
          className="mr-2 w-6 h-6"
          style={radioStyle}
        />
      </label>
    </div>
  );
};

export default SlideNextBtn;
