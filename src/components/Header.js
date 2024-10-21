import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "home", text: "Home" },
    { to: "destinations", text: "Destinations" },
    { to: "about", text: "About Us" },
    { to: "contact", text: "Contact" },
  ];

  return (
    <header className="bg-blue-900 text-white p-1 fixed w-full z-20">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold text-white">Travel Agency</h1>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link 
                to={item.to} 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-200"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden absolute top-10 left-0 right-0 bg-blue-900 flex-col items-center`}>
          <ul className="flex flex-col items-center space-y-4 py-4 w-full">
            {menuItems.map((item) => (
              <li key={item.to} className="w-full text-center">
                <Link 
                  to={item.to} 
                  smooth={true} 
                  duration={500} 
                  className="block cursor-pointer hover:text-blue-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
