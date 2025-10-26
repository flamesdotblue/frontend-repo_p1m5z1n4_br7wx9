import React from 'react';
import { Beer, Utensils, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-xl">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-amber-100 text-amber-700">
              <Beer className="w-5 h-5" />
            </span>
            <span>
              Butter & Beer
              <span className="block text-xs font-normal text-neutral-500 leading-none">Indian Restobar • Canada</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#menu" className="hover:text-amber-700 transition inline-flex items-center gap-1">
              <Utensils className="w-4 h-4" /> Menu
            </a>
            <a href="#about" className="hover:text-amber-700 transition">Our Story</a>
            <a href="#contact" className="hover:text-amber-700 transition inline-flex items-center gap-1">
              <Phone className="w-4 h-4" /> Contact
            </a>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition">
              <MapPin className="w-4 h-4" /> Visit Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;