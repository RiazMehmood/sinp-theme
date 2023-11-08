import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { SlBag, SlSettings } from "react-icons/sl";
import logo from "../../../../public/logo.webp";
const Navbar = () => {
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
            <nav className="main-menu">
              <ul className="flex flex-wrap">
                <li className="main-menu__item relative group">
                  <a
                    className="block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                    href="#"
                  >
                    Home
                  </a>
                  <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="#"
                      >
                        Airpod
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="index-3 "
                      >
                        Smartwatch
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="index-4 "
                      >
                        Drone
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="index-5 "
                      >
                        BackPack
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="main-menu__item group">
                  <a
                    className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                    href="#"
                  >
                    Shop
                  </a>
                  <ul className="mega-menu flex flex-wrap bg-white py-5 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10">
                    <li className="flex-auto px-4">
                      <a
                        className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange"
                        href="#"
                      >
                        Shop Grid{" "}
                      </a>
                      <ul className="pb-2">
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="shop-grid-3-column "
                          >
                            Shop Grid 3 Column
                          </a>
                        </li>
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="shop-grid-4-column "
                          >
                            Shop Grid 4 Column
                          </a>
                        </li>
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="shop-grid-left-sidebar "
                          >
                            Shop Grid Left Sidebar
                          </a>
                        </li>
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="shop-grid-right-sidebar "
                          >
                            shop Grid Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="flex-auto px-4">
                      <a
                        className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange"
                        href="shop-list "
                      >
                        shop list
                      </a>
                      <ul className="pb-2">
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="shop-list "
                          >
                            Shop List
                          </a>
                        </li>
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="shop-list-left-sidebar "
                          >
                            Shop List Left Sidebar
                          </a>
                        </li>
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="shop-list-right-sidebar "
                          >
                            Shop List Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="flex-auto px-4">
                      <a
                        className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange"
                        href="#"
                      >
                        Product Types
                      </a>
                      <ul className="pb-2">
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="single-product "
                          >
                            Shop Single
                          </a>
                        </li>
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="single-product-configurable "
                          >
                            Shop Variable
                          </a>
                        </li>
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="single-product-affiliate "
                          >
                            Shop Affiliate
                          </a>
                        </li>
                        <li className="my-3">
                          <a
                            className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all"
                            href="single-product-group "
                          >
                            Shop Group
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="overflow-hidden flex-auto mx-4">
                      <a href="#">
                        <img
                          className="transform hover:scale-105 transition-all w-full"
                          src="assets/images/mega-menu/megamenu.webp"
                          alt="Smartwatch"
                          loading="lazy"
                          width="1000"
                          height="120"
                        />
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-menu__item relative group">
                  <a
                    className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                    href="#"
                  >
                    Blog
                  </a>

                  <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="blog-grid-3-column "
                      >
                        Blog Grid 3 Column
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="blog-grid-2-column "
                      >
                        Blog Grid 2 Column
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="blog-grid-left-sidebar "
                      >
                        Blog Grid Left Sidebar
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="blog-grid-right-sidebar "
                      >
                        Blog Grid Right Sidebar
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="blog-list "
                      >
                        Blog list
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="blog-list-left-sidebar "
                      >
                        Blog List Left Sidebar
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="blog-list-right-sidebar "
                      >
                        {" "}
                        Blog List Right Sideba
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="blog-details "
                      >
                        {" "}
                        Blog details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-menu__item relative group">
                  <a
                    className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                    href="#"
                  >
                    pages
                  </a>
                  <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="about-us "
                      >
                        About Page
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="cart "
                      >
                        Cart Page
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="checkout "
                      >
                        Checkout Page
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="compare "
                      >
                        Compare Page
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="login-register "
                      >
                        Login & Register Page
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="account "
                      >
                        Account Page
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="whishlist "
                      >
                        Wishlist Page
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="faq "
                      >
                        Frequently Questions
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                        href="404 "
                      >
                        Error 404
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-menu__item">
                  <a
                    className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                    href="contact-us "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex space-x-4 items-center text-[20px] mr-4">
            <GoSearch />
            <div className="relative">
              <SlBag />
              <div className="absolute -right-1.5 -top-3 text-[15px] bg-black w-5 h-5 flex items-center justify-center font-bold text-white rounded-full">
                4
              </div>
            </div>
            <p className="font-bold">$245</p>
            <SlSettings />
          </div>
          {/* <div className="w-6/12 lg:w-3/12">
            <ul className="flex items-center justify-end">
              <li className="ml-6 hidden lg:block">
                <div
                  className="search-toggle text-right text-primary text-md hover:text-orange transition-all"
                  aria-label="icon-settings"
                >
                  <GoSearch />
                </div>
              </li>
              <li className="ml-6">
                <a
                  href="#"
                  className="text-primary text-md hover:text-orange transition-all relative offcanvas-toggle"
                >
                  <span className="w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none">
                    4
                  </span>
                  <SlBag />
                  <span className="text-base leading-none text-dark">$245</span>
                </a>
              </li>
              <li id="toggle-menu" className="ml-6 hidden lg:block relative">
                <button
                  className="text-primary text-md hover:text-orange transition-all toggle-menu"
                  aria-label="icon-settings"
                >
                  <SlSettings />
                </button>
                <div
                  id="settings-card"
                  className="bg-white absolute right-0 px-8 py-5 shadow w-80 opacity-0 invisible transition-all duration-300 ease-in-out z-20"
                >
                  <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">
                    Currency
                  </h4>
                  <ul>
                    <li className="my-4">
                      <a
                        href="#"
                        className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                      >
                        USD - US Dollar
                      </a>
                    </li>
                    <li className="my-4">
                      <a
                        href="#"
                        className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                      >
                        EUR - Euro
                      </a>
                    </li>
                    <li className="my-4">
                      <a
                        href="#"
                        className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                      >
                        GBP - British Pound
                      </a>
                    </li>
                  </ul>
                  <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">
                    Account
                  </h4>
                  <ul>
                    <li className="my-4">
                      <a
                        href="login-register.html"
                        className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                      >
                        Login
                      </a>
                    </li>
                    <li className="mt-4">
                      <a
                        href="account.html"
                        className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                      >
                        Create Account
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="ml-6 lg:hidden">
                <a
                  href="#offcanvas-mobile-menu"
                  className="offcanvas-toggle text-primary text-md hover:text-orange transition-all"
                >
                  <i className="icon-menu"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
