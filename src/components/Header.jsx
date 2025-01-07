import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = ({ onScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white transition-colors duration-300 ${
        isScrolled ? "shadow-md bg-gray-100" : ""
      }`}
    >
      <div className="container mx-auto lg:px-32 sm:px:8 py- flex justify-between items-center">
        <div>
          <img src="/logo/jtp-logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {["experience", "work", "about", "resume", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => onScroll(item)}
              className="nav-button text-gray-700 hover:text-blue-600 hover:animate-pulse transition duration-300 ease-in-out font-nosifer text-xs uppercase"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <XIcon className="h-8 w-8 text-gray-700 transition-transform duration-300 ease-in-out" />
            ) : (
              <MenuIcon className="h-8 w-8 text-gray-700 transition-transform duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Desktop Hire Me Button */}
        <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition duration-300 ease-in-out">
          HIRE ME
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white  px-4 overflow-hidden transition-max-h duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {["experience", "work", "about", "resume", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => {
              onScroll(item);
              toggleMobileMenu();
            }}
            className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 hover:animate-bounce transition duration-300 ease-in-out font-bold uppercase"
          >
            {item.toUpperCase()}
          </button>
        ))}

        {/* Mobile Hire Me Button */}
        <button className="md:block w-full px-4 py-2 mt-2 bg-blue-600 text-white  rounded-lg text-xs  hover:bg-blue-500 transition duration-300 ease-in-out" onClick={() => {
              onScroll(item="contact")}}>
          HIRE ME
        </button>
      </div>
    </header>
  );
};

export default Header;
