import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { SlBag, SlSettings } from "react-icons/sl";
import logo from "../../../../public/logo.webp";

const Navbar = () => {
  return (
    <div className="text-2xl flex items-center p-2 bg-white justify-between">
      <div className="flex items-center justify-evenly space-x-8">
        <div>
          <Image src={logo} alt="logo" width={125} height={25} />
        </div>
        <div>
          <ul className="flex justify-evenly space-x-8">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
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
    </div>
  );
};

export default Navbar;
