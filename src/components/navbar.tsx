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
          <a className="no-underline text-teal-dark border-b-4 border-teal-dark uppercase tracking-wide font-bold text-sm py-1 mr-8" href="#">
            Index
          </a>
        </li>
        <li className="md:ml-4">
          <a className="no-underline text-teal-dark border-teal-dark uppercase tracking-wide font-bold text-sm py-1 mr-8" href="#">
            Habits
          </a>
        </li>
      </ul>
    </nav>

  </header>
);