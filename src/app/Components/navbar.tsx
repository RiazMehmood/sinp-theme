"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import MegaMenu from "../Components/megaMenu";
import BlogMenu from "../Components/blogMenu";
import PagesMenu from "../Components/pagesMenu";
import ShoppingCart from "../Components/shoppingCart";
import NavMenu from "../Components/navMenu";
import { homeNav } from "../utils/data";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-20 w-screen ${
        scrolling && "bg-white"
      }`}
    >
      <div className="px-4 2xl:px-24 py-6 lg:px-10 lg:py-0 3xl:py-5">
        <div className="flex items-center md:justify-around md:space-x-16 lg:relative">
          {/* logo */}
          <div className="w-1/2 lg:w-2/12 3xl:w-[15%] ">
            <div>
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="logo"
                  loading="lazy"
                  width={125}
                  height={45}
                  className="3xl:w-[250px] 3xl:h-[90px]"
                />
              </Link>
            </div>
          </div>
          {/* Navbar */}
          <div className="hidden lg:flex flex-1 text-[21px] 3xl:text-[40px] xl:relative">
            <ul className="flex lg:-ml-14">
              <NavMenu label="Home" navItems={homeNav} />
              <MegaMenu />
              <BlogMenu />
              <PagesMenu />
              <li className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md  hover:text-orange transition-all">
                <Link href="contact-us " />
                Contact
              </li>
            </ul>
          </div>
          <div>
            <ShoppingCart itemCount={4} totalPrice={215} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
