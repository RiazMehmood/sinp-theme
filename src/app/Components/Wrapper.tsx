import React from "react";
import {twMerge} from "tailwind-merge";

function Wrapper({children, className}:{children: React.ReactNode, className?: string} ) {
  return <div className={twMerge("w-full max-w-[1000px]", className)}>{children}</div>;
}

export default Wrapper;
