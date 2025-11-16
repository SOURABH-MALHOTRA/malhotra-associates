import React, { useState } from 'react';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
 

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Malhotra Associates</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating extraordinary spaces through innovative and sustainable design since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
              <a href="/">
                <button 
                  
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Home
                </button>
                </a>
              </li>
              <li>
               <a href="/about">
                <button 
                  
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  About Us
                </button>
                </a>
              </li>
              <li>
               <a href="/Services">
                <button 
                   
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Services
                </button>
                </a>
              </li>
              <li>
              <a href="/Contact">
                <button 
                  
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Contact
                </button>
                </a>
              </li>
               <li>
               <a href="/Reviews">
                <button 
               
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Reviews
                </button>
                </a>
              </li>
               <li>
                <a href="/Projects">
                <button 
                 
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Projects
                </button>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Interior Design
              </li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Architecture
              </li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Furniture Design
              </li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Project Management
              </li>
              <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Sustainable Design
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3 hover:text-amber-400 transition-colors duration-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Ambala, Haryana, India</span>
              </li>
              <li className="flex items-start gap-3 hover:text-amber-400 transition-colors duration-300">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>info@malhotraassociates.com</span>
              </li>
              <li className="flex items-start gap-3 hover:text-amber-400 transition-colors duration-300">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+91 8199999884</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Malhotra Associates. All rights reserved.</p>
            <p className="mt-2 text-xs">Designed with ❤️ for excellence in design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;