"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import SearchIcon from "./search";
import { SlBag, SlSettings } from "react-icons/sl";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Cart {
  itemCount: number;
  totalPrice: number;
}

const ShoppingCart = ({ itemCount, totalPrice }: Cart) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <div>
      <div className="w-1/2 lg:w-3/12 flex">
        <ul className="flex items-center justify-end">
          <li className="ml-6 hidden lg:block">
            <SearchIcon />
          </li>
          <li className="ml-6 flex relative">
            <div className="hover:text-orange-400 text-xl">
              <SlBag />
            </div>
            <div className="absolute -top-3 right-8 text-[15px] bg-black w-5 h-5 flex items-center justify-center font-normal text-white rounded-full">
              {itemCount}
            </div>
            <p className="ml-2">{`$${totalPrice}`}</p>
          </li>
          <li className="ml-6 hidden lg:block relative">
            <SlSettings />
          </li>
          <li className="ml-6 text-2xl lg:hidden" onClick={handleClick}>
            <RxHamburgerMenu />
          </li>
        </ul>
      </div>
      {menuOpen && (
        <div className="fixed font-normal text-sm left-0 transform translate-x-[15%] transition-all ease-in-out top-0 z-50 h-screen w-[280px] sm:w-80 lg:w-96 bg-white">
          <div className="px-8 py-12 h-5/6">
            <form className="pb-10 mb-10 border-b border-solid border-gray-600">
              <div className="relative">
                <input
                  className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-gray-light text-dark placeholder-current focus:outline-none"
                  name="search"
                  placeholder="Search our store"
                />
                <button className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-600">
                  <BsSearch />
                </button>
              </div>
            </form>
            <button className=" bg-black group transition-all hover:text-orange text-white text-xl w-10 h-10 flex items-center justify-center absolute -left-10 top-0">
              <span
                className="transition-all transform group-hover:rotate-90"
                onClick={handleClick}
              >
                <AiOutlineCloseCircle />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
