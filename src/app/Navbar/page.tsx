"use client";
import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { SlBag, SlClose, SlSettings } from "react-icons/sl";
import logo from "../../../public/logo.webp";
import megamenu from "../../../public/megamenu.webp";
import { useState } from "react";
const Navbar = () => {
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
    <header className="fixed inset-x-0 top-0 w-full z-20">
      <div className="px-4 md:px-10 2xl:px-24 py-6 lg:py-0">
        <div className="flex items-center lg:relative">
          <div className="w-6/12 lg:w-2/12">
            <div>
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="logo"
                  loading="lazy"
                  width={125}
                  height={45}
                />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 xl:relative">
            <ul className="flex flex-wrap">
              <li className="relative hover:cursor-pointer group block py-10 xl:pr-6 md:pr-5 capitalize font-normal  text-md text-primary hover:text-orange transition-all">
                <Link href="#" />
                Home
                <ul className=" bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                  <li className="text-dark font-normal text-base capitalize transition-all hover:text-orange my-3 hover:cursor-pointer">
                    <Link href="#" />
                    Airpod
                  </li>
                  <li className="text-dark font-normal text-base capitalize transition-all hover:text-orange my-3">
                    <Link href="index-3 " />
                    Smartwatch
                  </li>
                  <li className="my-3 text-dark font-normal text-base capitalize transition-all hover:text-orange">
                    <Link href="index-4 " />
                    Drone
                  </li>
                  <li className="my-3 text-dark font-normal text-base capitalize transition-all hover:text-orange">
                    <Link href="index-5 " />
                    BackPack
                  </li>
                </ul>
              </li>
              <li className="group block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all">
                <Link href="#" />
                Shop
                <ul className=" flex flex-wrap bg-white py-5 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10">
                  <li className="flex-auto px-4">
                    <Link
                      className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange"
                      href="#"
                    />
                    Shop Grid{" "}
                    <ul className="pb-2">
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="shop-grid-3-column "
                        />
                        Shop Grid 3 Column
                      </li>
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="shop-grid-4-column "
                        />
                        Shop Grid 4 Column
                      </li>
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="shop-grid-left-sidebar "
                        />
                        Shop Grid Left Sidebar
                      </li>
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="shop-grid-right-sidebar "
                        />
                        shop Grid Right Sidebar
                      </li>
                    </ul>
                  </li>

                  <li className="flex-auto px-4">
                    <Link
                      className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange"
                      href="shop-list "
                    />
                    shop list
                    <ul className="pb-2">
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="shop-list "
                        />
                        Shop List
                      </li>
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="shop-list-left-sidebar "
                        />
                        Shop List Left Sidebar
                      </li>
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="shop-list-right-sidebar "
                        />
                        Shop List Right Sidebar
                      </li>
                    </ul>
                  </li>

                  <li className="flex-auto px-4">
                    <Link
                      className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange"
                      href="#"
                    />
                    Product Types
                    <ul className="pb-2">
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="single-product "
                        />
                        Shop Single
                      </li>
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="single-product-configurable "
                        />
                        Shop Variable
                      </li>
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="single-product-affiliate "
                        />
                        Shop Affiliate
                      </li>
                      <li className="my-3">
                        <Link
                          className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                          href="single-product-group "
                        />
                        Shop Group
                      </li>
                    </ul>
                  </li>
                  <li className="overflow-hidden flex-auto mx-4">
                    <Link href="#" />
                    <Image
                      className="transform hover:scale-105 transition-all w-full"
                      src={megamenu}
                      alt="Smartwatch"
                      loading="lazy"
                      width="1000"
                      height="120"
                    />
                  </li>
                </ul>
              </li>
              <li className=" relative group block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all">
                <Link href="#" />
                Blog
                <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="blog-grid-3-column "
                    />
                    Blog Grid 3 Column
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="blog-grid-2-column "
                    />
                    Blog Grid 2 Column
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="blog-grid-left-sidebar "
                    />
                    Blog Grid Left Sidebar
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="blog-grid-right-sidebar "
                    />
                    Blog Grid Right Sidebar
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="blog-list "
                    />
                    Blog list
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="blog-list-left-sidebar "
                    />
                    Blog List Left Sidebar
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="blog-list-right-sidebar "
                    />{" "}
                    Blog List Right Sideba
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="blog-details "
                    />{" "}
                    Blog details
                  </li>
                </ul>
              </li>
              <li className=" relative group block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all">
                <Link href="#" />
                pages
                <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="about-us "
                    />
                    About Page
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="cart "
                    />
                    Cart Page
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="checkout "
                    />
                    Checkout Page
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="compare "
                    />
                    Compare Page
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="login-register "
                    />
                    Login & Register Page
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="account "
                    />
                    Account Page
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="whishlist "
                    />
                    Wishlist Page
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="faq "
                    />
                    Frequently Questions
                  </li>
                  <li className="my-3">
                    <Link
                      className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                      href="404 "
                    />
                    Error 404
                  </li>
                </ul>
              </li>
              <li className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all">
                <Link href="contact-us " />
                Contact
              </li>
            </ul>
          </div>
          <div className="flex space-x-4 items-center text-[20px] mr-4">
            <div className="hover:cursor-pointer" onClick={canvasOpen}>
              <GoSearch />
            </div>
            {isSearchBoxOpen && (
              <div className="fixed top-0 right-0 w-full h-full flex items-center justify-center">
                <div className="bg-black bg-opacity-50 w-2/3 h-2/3 relative flex flex-col items-center justify-center rounded">
                  <div className="absolute top-20">
                    <button
                      onClick={handleCloseIconClick}
                      className="hover:bg-white/10 text-black transition hover:scale-125 hover:font-bold py-2 px-2 rounded-full"
                    >
                      <SlClose />
                    </button>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border-b p-2 mb-4 w-40 text-white"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="relative">
              <SlBag />
              <div className="absolute -right-1.5 -top-3 text-[15px] bg-black w-5 h-5 flex items-center justify-center font-bold text-white rounded-full">
                4
              </div>
            </div>
            <p className="font-bold">$245</p>
            <SlSettings />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
