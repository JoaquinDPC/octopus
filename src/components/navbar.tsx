import React from 'react';
import Logo from '../img/Octopus-Logo.png';

export const NavBar = () => (
  <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">  
    
    {/* Logo text or image  */}
    <div className="flex items-center justify-between mb-4 md:mb-0">
      <img src={Logo} className="w-10 h-10 pt-0" /> 
      <h1 className="leading-none text-2xl text-grey-darkest">
        <a className="no-underline text-grey-darkest text-indigo-800 hover:text-black" href="#">
          Octopus
        </a>
      </h1>

      <a className="text-black hover:text-orange md:hidden" href="#">
        <i className="fa fa-2x fa-bars"></i>
      </a>
    </div>
  
    {/* Global navigation */}
    <nav className="hidden md:block">
      <ul className="list-reset md:flex md:items-center">
        <li className="md:ml-4">
          <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
            Products
          </a>
        </li>
        <li className="md:ml-4">
          <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
            About
          </a>
        </li>
        <li className="md:ml-4">
          <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>

  </header>
);