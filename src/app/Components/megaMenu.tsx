import Link from "next/link";
import Image from "next/image";
import megamenu from "../../../public/megamenu.webp";
import { shopLinks, shopListLinks, productTypesLinks } from "../utils/data";

  
  const MegaMenu = () => (
    <li className="group block py-10 xl:px-6 md:px-5 capitalize font-normal text-md  hover:text-orange transition-all">
      <Link href="#">Shop</Link>
      <ul className="flex flex-wrap bg-white py-5 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10">
  
        {/* Shop Links */}
        <li className="flex-auto px-4">
          {shopLinks.map((link, index) => (
            <Link
              key={index}
              className={`font-normal text-base capitalize text-dark block mb-6 tracking-wide transition-all hover:text-orange ${
                index === 0 ? 'border-b border-solid border-gray-600 pb-5' : ''
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </li>
  
        {/* Shop List Links */}
        <li className="flex-auto px-4">
          {shopListLinks.map((link, index) => (
            <Link
              key={index}
              className={`font-normal text-base capitalize text-dark block mb-6 tracking-wide transition-all hover:text-orange ${
                index === 0 ? 'border-b border-solid border-gray-600 pb-5' : ''
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </li>
  
        {/* Product Types Links */}
        <li className="flex-auto px-4">
          {productTypesLinks.map((link, index) => (
            <Link
              key={index}
              className={`font-normal text-base capitalize text-dark block mb-6 tracking-wide transition-all hover:text-orange ${
                index === 0 ? 'border-b border-solid border-gray-600 pb-5' : ''
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </li>
  
        {/* MegaMenu Image */}
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
  );
  
  export default MegaMenu;
  