
import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <li className="text-dark font-normal text-base capitalize transition-all hover:text-orange my-3 hover:cursor-pointer">
    <Link href={href}>{label}</Link>
  </li>
);

interface NavMenuProps {
  label: string;
  navItems: { label: string; link: string }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ label, navItems }) => (
  <li className="relative hover:cursor-pointer group block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md hover:text-orange transition-all">
    <Link href="#">
      {label}
    </Link>
    <ul className="bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
      {navItems.map((item, index) => (
        <NavItem key={index} href={item.link} label={item.label} />
      ))}
    </ul>
  </li>
);

export default NavMenu;

