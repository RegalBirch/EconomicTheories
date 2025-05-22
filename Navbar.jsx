// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  // Function to handle smooth scroll for hash links on the homepage
  const handleNavClick = (e, hash) => {
    // If we are already on the homepage, prevent default and scroll
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(hash.substring(1)); // remove #
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on the homepage, let the Link component navigate to '/'
    // and the browser will attempt to jump to the hash after load.
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-blue-400 transition duration-300">
          Economic Insights
        </Link>
        <div className="space-x-6">
          <Link to="/#introduction" onClick={(e) => handleNavClick(e, '#introduction')} className="hover:text-blue-400 transition duration-300">Introduction</Link>
          <Link to="/#theories" onClick={(e) => handleNavClick(e, '#theories')} className="hover:text-blue-400 transition duration-300">Theories</Link>
          <Link to="/#conclusion" onClick={(e) => handleNavClick(e, '#conclusion')} className="hover:text-blue-400 transition duration-300">Conclusion</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;