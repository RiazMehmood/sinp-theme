import Link from "next/link";
import { pagesLinks } from "../utils/data";

const PagesMenu = () => (
  <li className="relative group block py-10 xl:px-6 md:px-5 capitalize font-normal text-md  hover:text-orange transition-all">
    <Link href="#">Pages</Link>
    <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
      {pagesLinks.map((link, index) => (
        <li key={index} className="my-3">
          <Link
            className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

export default PagesMenu;
