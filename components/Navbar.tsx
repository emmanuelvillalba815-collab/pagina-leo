import React, { useState } from 'react';
import { View } from '../types';
import { Menu, X, Frame, Palette } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { view: View.HOME, label: 'Inicio' },
    { view: View.PORTFOLIO, label: 'Galería' },
    { view: View.SERVICES, label: 'Servicios' },
    { view: View.COMMISSION_AI, label: 'Asistente IA', special: true },
    { view: View.CONTACT, label: 'Contacto' },
  ];

  const handleNavClick = (view: View) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick(View.HOME)}
          >
            <div className="relative">
                <Frame className="h-8 w-8 text-stone-800 group-hover:text-orange-600 transition-colors" />
                <Palette className="h-4 w-4 text-stone-500 absolute -bottom-1 -right-1" />
            </div>
            <span className="ml-3 text-2xl font-bold font-serif text-stone-900 tracking-tight">
              Trazos<span className="text-orange-600">.</span>Marcos
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentView === link.view
                    ? 'text-orange-700 font-bold'
                    : 'text-stone-600 hover:text-orange-600'
                } ${link.special ? 'bg-stone-900 text-white hover:bg-stone-700 hover:text-white rounded-full px-5 py-2.5' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`block w-full text-left px-3 py-4 text-base font-medium rounded-md ${
                  currentView === link.view
                    ? 'bg-orange-50 text-orange-700'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};