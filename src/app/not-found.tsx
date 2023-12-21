import React from "react";
import Link from "next/link";
import Wrapper from "./Components/Wrapper";

function Page() {
  return (
    <main className="min-h-screen flex flex-col w-full  items-center text-pri_black mt-32 mb-10">
        <div className="w-full flex justify-center font-medium gap-x-2 bg-[#f6f6f6] py-10">
          <Link href={"/"} className="hover:text-pri_orange">
            HOME
          </Link>
          /<p>404 NOT FOUND</p>
        </div>
      <Wrapper>
        <div className="flex flex-col justify-center items-center gap-y-5 px-2 mt-32">
          <p className="text-2xl font-medium mb-2">Ooops! Error 404</p>
          <p className="text-sm text-center">
            Sorry, this page does not exist or temporarily unavailable.
          </p>
          <Link
            href={"/"}
            className="text-white  text-sm bg-black px-8 py-3 font-medium hover:bg-pri_orange transition-all duration-200"
          >
            Back To Home Page
          </Link>
        </div>
      </Wrapper>
    </main>
  );
}

export default Page;
