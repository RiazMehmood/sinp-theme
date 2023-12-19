"use client";
import { useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function VideoComponent() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative mt-28 h-screen">
      {" "}
      {/* Set a defined height */}
      {!isPlaying && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/video-bg.webp')",
            zIndex: "10",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Check the path of your image */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-20 flex flex-col gap-5 items-center justify-center space-y-4">
          <div className={playfair.className}>
            <h2 className="md:text-5xl font-playfair text-2xl mx-3 text-[#fc6539] font-bold text-center">
              The Right Headphones
            </h2></div>
            <h3 className="md:text-lg text-sm font-normal mx-3 text-white max-w-2xl text-center">
              In ornare quam viverra orci sagittis. Duis ultricies lacus sed
              turpis tincidunt id aliquet risus. Arcu felis bibendum ut
              tristique et
            </h3>
            <button
              onClick={handlePlayClick}
              className="bg-white p-2 rounded-full"
            >
              <Image
                className=""
                src="/play.webp"
                alt=""
                width={30}
                height={20}
              />
            </button>
          </div>
        </div>
      )}
      {isPlaying && (
        <video
          src="/video.mp4"
          autoPlay
          controls
          className="absolute inset-0 z-30 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
