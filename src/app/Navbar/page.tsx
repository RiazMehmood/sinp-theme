import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import MegaMenu from "../Components/megaMenu";
import BlogMenu from "../Components/blogMenu";
import PagesMenu from "../Components/pagesMenu";
import ShoppingCart from "../Components/shoppingCart";
import NavMenu from "../Components/navMenu";
import { homeNav } from "../utils/data";
const Navbar = () => {

  return (
    <header className="fixed inset-x-0 top-0 w-full z-20">
      <div className="px-4 md:px-10 2xl:px-24 py-6 lg:py-0">
        <div className="flex items-center lg:relative">
          {/* logo */}
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
          {/* Navbar */}
          <div className="hidden lg:flex flex-1 text-[21px] xl:relative">
            <ul className="flex flex-wrap">
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
          <br />
          <ShoppingCart itemCount={4} totalPrice={215} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;