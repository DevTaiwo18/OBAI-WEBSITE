import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using react-router for navigation
import logo from '../../assets/logo.svg';
import youtube from '../../assets/YouTube.png';
import linkedln from '../../assets/LinkedIn.png';

function Footer() {
  return (
    <footer className="bg-[#171717] text-[#FFFD9F] py-8 lg:py-14 px-4 md:px-6 lg:px-12">
      
      {/* First Line: Logo and Navigation Links */}
      <div className="flex lg:px-1 xl:px-10 flex-col lg:flex-row justify-center items-center w-full lg:space-x-8 flex-wrap">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center mb-4 lg:mb-0">
          <Link to="/"> {/* Use Link to navigate to the homepage */}
            <img src={logo} alt="Logo" className="w-24 cursor-pointer" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="w-full lg:w-auto flex-grow">
          <ul className="flex flex-wrap justify-center lg:justify-end gap-4 lg:space-x-8 text-center">
            {/* Links will wrap on small screens */}
            <li><Link to="/about" className="text-brand-white font-bold text-sm md:text-md transition-colors duration-300">About</Link></li>
            <li><Link to="/how-we-started" className="text-brand-white font-bold text-sm md:text-md transition-colors duration-300">How It Works</Link></li>
            <li><Link to="/resources" className="text-brand-white font-bold text-sm md:text-md transition-colors duration-300">Resources</Link></li>
            <li><Link to="/repair-bot" className="text-brand-white font-bold text-sm md:text-md transition-colors duration-300">RepairBot</Link></li>
            <li><Link to="/contact" className="text-brand-white font-bold text-sm md:text-md transition-colors duration-300">Contact</Link></li>
            <li><Link to="/demo" className="text-brand-white font-bold text-sm md:text-md transition-colors duration-300">Demo</Link></li>
          </ul>
        </div>
      </div>

      {/* Second Line: Social Icons */}
      <div className="flex justify-center space-x-6 mt-8 lg:mt-12">
        <a href="https://www.linkedin.com/company/obai-us/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
          <img src={linkedln} alt="LinkedIn" className="w-8 h-8 hover:opacity-75 transition-opacity duration-300" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" className="w-8 h-8 hover:opacity-75 transition-opacity duration-300" />
        </a>
      </div>

      {/* Horizontal Line */}
      <div className="mt-5 w-full px-4 md:px-6 lg:px-12">
        <hr className="border-t border-gray-400 opacity-20" />
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm">
        <p className='text-brand-white'>©2024 Open Bay Autos AI, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
