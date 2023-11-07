import Image from "next/image";
import {GoSearch} from "react-icons/go"
import {SlBag, SlSettings} from "react-icons/sl"
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
      <div className="flex space-x-4 text-md"><GoSearch/><SlBag/>$245<SlSettings/></div>
    </div>
  );
};

export default Navbar;
