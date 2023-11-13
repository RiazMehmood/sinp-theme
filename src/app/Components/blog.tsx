"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Playfair_Display } from "next/font/google";
import { blogs } from "../utils/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
});


export default function BlogComponent() {
  
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAtLeft, setIsAtLeft] = useState(true);
    const [isAtRight, setIsAtRight] = useState(false);
  
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        setIsAtLeft(scrollContainer.scrollLeft === 0);
        setIsAtRight(scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth);
      }
    }, []);
  
    const handleScroll = (direction: "left" | "right") => {
      const scrollAmount = scrollContainerRef.current?.clientWidth || 0; // Scroll by the width of the container
      if (scrollContainerRef.current) {
        const newPosition =
          direction === "left"
            ? Math.max(0, scrollContainerRef.current.scrollLeft - scrollAmount)
            : scrollContainerRef.current.scrollLeft + scrollAmount;
        scrollContainerRef.current.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
        setIsAtLeft(newPosition === 0);
        setIsAtRight(newPosition + scrollContainerRef.current.clientWidth === scrollContainerRef.current.scrollWidth);
      }
    };
  

  return (
    <div className="flex mb-10 mt-10 justify-center">
      <div className="p-4 w-full max-w-screen-xl">
      <div className={playfair.className}>
        <h2 className="text-5xl font-mayfair text-orange-500 font-bold text-center mb-4">
          Latest Blog
        </h2></div>
        <p className="text-gray-800 mb-10 text-lg text-center">
          There are many variations of passages of Lorem
        </p>

        <div className="flex items-center justify-center">
          <button
            disabled={isAtLeft}
            className={`border rounded-full text-2xl px-3 py-1 ${isAtLeft ? 'opacity-50 cursor-default' : 'hover:border-orange-500 hover:text-orange-500'}`}
            onClick={() => handleScroll("left")}
          >
            &lt;
          </button>
          <div
            ref={scrollContainerRef}
            className="overflow-x-scroll whitespace-nowrap flex-1 scroll-smooth mx-2 hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border rounded-md mt-6 p-6 m-4 inline-block sm:max-w-md md:max-w-sm lg:max-w-sm xl:max-w-sm"
              >
                {" "}
                {/* Adjust the width of the card on larger screens */}
                {/* Add responsive classes to control the width of the card on different screen sizes */}
                <div className="relative overflow-hidden">
                  <Image
                    className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={400}
                    height={240}
                    layout="responsive"
                  />
                </div>
                <h3 className="text-xl font-semibold hover:text-orange-500 cursor-pointer mt-6">
                  {blog.title}
                </h3>
                <p className="text-gray-500 mt-4">
                  {blog.date} \ {blog.comments} comments
                </p>
                <p className="mt-2">{blog.description}</p>
                <button className="mt-4 mb-2 px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white font-semibold border rounded">
                  Blog Details
                </button>
              </div>
            ))}
          </div>
          <button
            disabled={isAtRight}
            className={`border rounded-full text-2xl px-3 py-1 ${isAtRight ? 'opacity-50 cursor-default' : 'hover:border-orange-500 hover:text-orange-500'}`}
            onClick={() => handleScroll("right")}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
