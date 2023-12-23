import Image from "next/image";
import Link from "next/link";
import React from "react";
import drone from "../../../public/drone4.webp";

const about = () => {
  return (
    <div className="mt-28 flex flex-col items-center">
      <div className="bg-[#f6f6f6] w-full h-[110px] flex items-center justify-center">
        <Link href={"/"} className="font-bold"> HOME </Link>&nbsp;/
          ABOUT-US
      </div>
      <div className="py-20">
        <div className="mx-6 px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
            <div className="">
              <Image src={drone} alt="Drone" />
            </div>
            <div className="mt-6">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-3xl md:text-4xl mb-5 text-dark">
                  WELCOME TO{" "}
                  <span className="text-orange-500 text-bold">SINP</span>
                </h1>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born an will give you a complete.
                </p>
              </div>
              <div className="mb-10">
                <h2 className="font-semibold uppercase text-md mb-4 text-dark">
                  WE START AT 2022
                </h2>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born nsidae.
                </p>
              </div>
              <div className="mb-10">
                <h2 className="font-semibold uppercase text-md mb-4 text-dark">
                  WIN BEST ONLINE SHOP AT 2022
                </h2>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born an will give you a solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="testimonial-area bg-gray-light py-24 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/slide5.webp')" }}>
  <div className="mx-[43px] px-[16px]">
    <div className="grid grid-cols-12 gap-x-4">
      <div className="col-span-12">
        <div className="text-center pb-14">
          <h2 className="font-medium text-orange-500 text-3xl sm:text-4xl xl:text-5xl mb-5">
            What Client Says
          </h2>

        </div>

      </div>

    hello
    </div>
  </div>
</div>

      <div>Team Members</div>
    </div>
  );
};

export default about;
