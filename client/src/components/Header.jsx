
import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  

  return (
    <div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Malhotra Associates</h1>
                <p className="text-xs text-gray-600 hidden md:block">Design Excellence Since 2015</p>
              </div>
            </div>

            {/* Desktop Menu */}
          <div className="hidden md:flex items-center
          md:gap-3 lg:gap-4">
  {[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
     { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
    
  ].map((link) => (
    <NavLink
      key={link.name}
      to={link.path}
      className={({ isActive }) =>
        `relative text-lg transition-all duration-300 transform hover:scale-110
        ${isActive ? "text-orange-500" : "text-gray-800"}`
      }
    >
      <span className="relative z-10">{link.name}</span>
      <span
        className={`absolute left-0 -bottom-1 w-full h-1 rounded-full bg-gradient-to-r from-orange-400 to-red-500
          scale-x-0 origin-left transition-transform duration-300
          group-hover:scale-x-100`}
      ></span>
    </NavLink>
  ))}
</div>


            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top">
              <div className="flex flex-col gap-2 text-lg  ">
                <NavLink to="/" className="hover:text-orange-500" >Home</NavLink>
                <NavLink to="/about" className="hover:text-orange-500">About</NavLink>
                <NavLink to="/services" className="hover:text-orange-500">Services</NavLink>
                <NavLink to="/projects" className="hover:text-orange-500">Projects</NavLink>
                <NavLink to="/reviews" className="hover:text-orange-500">Reviews</NavLink>
                <NavLink to="/contact" className="hover:text-orange-500">Contact</NavLink>

              </div>
            </div>
          )}
        </div>
      </nav>
      
    </div>
  );
};

export default Header;