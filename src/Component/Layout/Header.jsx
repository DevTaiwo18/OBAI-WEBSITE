import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'; // Adjust the path to your logo

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isMenuOpen) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }
    return () => {
      html.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'How It Works', path: '/how-we-started' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '#' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full bg-[#FFFDF9] z-50 transition-all duration-300 ${scrolled ? 'shadow-custom py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            {/* Set explicit width and height for the logo */}
            <img
              src={logo}
              alt="Logo"
              className="w-24 md:w-28 lg:w-32 h-auto transition-all duration-300"
              width="120"  // Add explicit width
              height="40"  // Add explicit height
              loading="eager" // Ensure the logo loads eagerly
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#171717] hover:text-[#171717] font-bold text-sm xl:text-base transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/demo"
              className="bg-gradient-to-b from-[#FF5F1E] to-[#FF471E] text-[#FFFDF9] font-bold px-4 py-2 rounded-lg-rounded hover:scale-105 transition-all duration-300 shadow-custom"
            >
              Demo
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg-rounded text-[#171717] hover:bg-[#E1E3FB] transition-colors duration-300"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#00000088] z-50 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
        onClick={toggleMenu}
      >
        <div
          className={`bg-[#E1E3FB] w-4/5 max-w-sm h-full shadow-lg p-6 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={toggleMenu} className="flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="w-24 md:w-28 h-auto"
                width="120" // Add explicit width
                height="40" // Add explicit height
                loading="eager" // Ensure the logo loads eagerly
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg-rounded text-[#171717] hover:bg-[#C5C8F5] transition-colors duration-300"
              aria-label="Close menu"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#171717] hover:text-[#171717] font-bold py-2 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/demo"
              onClick={toggleMenu}
              className="bg-gradient-to-b from-[#FF5F1E] to-[#FF471E] text-[#FFFDF9] font-bold px-4 py-2 rounded-lg-rounded hover:scale-105 transition-all duration-300 text-center mt-4 shadow-custom"
            >
              Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
