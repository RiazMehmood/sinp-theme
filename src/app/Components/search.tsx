"use client";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { SlClose } from "react-icons/sl";
const SearchIcon = () => {
  const [isSearchBoxOpen, setSearchBoxOpen] = useState(false);
  const canvasOpen = () => {
    setSearchBoxOpen(true);
    console.log(isSearchBoxOpen);
  };
  const handleCloseIconClick = () => {
    setSearchBoxOpen(false);
    console.log(isSearchBoxOpen);
  };

  return (
    <div>
      <div className="hover:cursor-pointer hover:text-orange-600" onClick={canvasOpen}>
        <GoSearch />
      </div>
      {isSearchBoxOpen && (
        <div className="fixed top-0 right-0 w-full h-full flex items-center justify-center">
          <div className="bg-[#0d0b0b] bg-opacity-90 w-full h-full relative flex flex-col items-center justify-center rounded">
            <div className="absolute top-20">
              <button
                onClick={handleCloseIconClick}
                className=" text-[#fbf9f9] transition hover:scale-125 text-[40px] hover:font-bold py-2 px-2 rounded-full"
              >
                <SlClose />
              </button>
            </div>
            <div className="bg-[#0d0b0b] bg-opacity-90 border-b p-1 mb-4 w-96 flex justify-around items-center">
              <input
                type="Search"
                placeholder="Search our Store"
                className=" text-[#dcdada] opacity-100 w-72 decoration-transparent"
              />
              <div className="text-[#fbf9f9] font-bold text-[30px]">

              <GoSearch/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchIcon;
