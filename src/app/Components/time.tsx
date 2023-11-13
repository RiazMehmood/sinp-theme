"use client";
import { useState, useEffect, useRef } from "react";
import ProductBox from "../Components/products";
import { Playfair_Display } from "next/font/google";
import { products } from "../utils/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
});
export default function CountdownComponent() {
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    const scrollAmount = scrollContainerRef.current?.clientWidth || 0;
    let newPosition = 0;
    if (scrollContainerRef.current) {
      newPosition =
        direction === "left"
          ? Math.max(0, scrollContainerRef.current.scrollLeft - scrollAmount)
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
    setDisableLeft(newPosition <= 0);
    setDisableRight(
      newPosition >=
        (scrollContainerRef.current?.scrollWidth || 0) - scrollAmount
    );
  };

  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const futureDate = new Date("2024-01-01T00:00:00"); // Set your future date here

    const timer = setInterval(() => {
      const now = new Date();
      const difference = futureDate.getTime() - now.getTime(); // Convert dates to milliseconds

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-60 justify-center gap-3 h-screen">
      <div className="flex flex-col gap-5 mb-16">
      <div className={playfair.className}>
        <h1 className="text-[#fc6539] font-playfair text-5xl font-bold text-center">
          Deal Collection
        </h1></div>
        <p className="text-center text-lg font-medium">
          There are many variations of passages of Lorem
        </p>
      </div>
      <div className="flex border rounded-sm mb-6 shadow-xl py-7 px-44 gap-5">
        <p className="text-4xl font-medium">
          0-365 <sub className="font-normal text-base">Day</sub>
        </p>
        <p className="text-4xl font-medium">
          {time.hours} <sub className="font-normal text-base">Hrs</sub>
        </p>
        <p className="text-4xl font-medium">
          {time.minutes} <sub className="font-normal text-base">Mins</sub>
        </p>
        <p className="text-4xl font-medium">
          {time.seconds} <sub className="font-normal text-base">Secs</sub>
        </p>
      </div>
      <div className="flex items-center mb-20 max-w-screen-xl relative">
        <button
          disabled={disableLeft}
          className={`border rounded-full bg-white text-2xl px-3 z-10 py-1 absolute left-8 top-1/2 transform -translate-y-1/2 ${
            disableLeft
              ? "bg-gray-100 text-gray-400"
              : "hover:border-[#fc6539] duration-100 hover:text-[#fc6539]"
          }`}
          onClick={() => handleScroll("left")}
        >
          &lt;
        </button>
        <div
          ref={scrollContainerRef}
          className="overflow-x-scroll whitespace-nowrap flex-1 scroll-smooth mx-2 hide-scrollbar flex"
          style={{ scrollBehavior: "smooth" }}
        >
          {products.map((product, index) => (
            <ProductBox key={index} product={product} />
          ))}
        </div>
        <button
          disabled={disableRight}
          className={`border rounded-full text-2xl px-3 z-10 bg-white py-1 absolute right-8 top-1/2 transform -translate-y-1/2 ${
            disableRight
              ? "bg-gray-100 text-gray-400"
              : "hover:border-[#fc6539] duration-100 hover:text-[#fc6539]"
          }`}
          onClick={() => handleScroll("right")}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
