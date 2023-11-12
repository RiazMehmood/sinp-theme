import React from 'react';
import MobileMenu from './mobileMenu';
import Navbar from './navbar';

const NavbarResponsive = () => {
  const testing = true;
  return testing ? <Navbar /> : <MobileMenu />;
}

export default NavbarResponsive;
