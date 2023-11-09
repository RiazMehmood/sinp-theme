"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function VideoComponent() {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlayClick = () => {
      setIsPlaying(true);
    };
  
    return (
      <div className="relative h-screen"> {/* Set a defined height */}
        {!isPlaying && (
          <div className='absolute inset-0' style={{backgroundImage: "url('/video-bg.webp')", zIndex:"10", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Check the path of your image */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-20 flex flex-col gap-5 items-center justify-center space-y-4">
              <h2 className="text-4xl text-orange-500 font-bold text-center">The Right Headphones</h2>
              <h3 className="text-lg font-normal text-white max-w-2xl text-center">In ornare quam viverra orci sagittis. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Arcu felis bibendum ut tristique et</h3>
              <button onClick={handlePlayClick} className="bg-white p-2 rounded-full">
                <Image className='' src="/play.webp" alt="" width={30} height={20}/>
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
  