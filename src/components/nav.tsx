'use client';
import React, { useState } from 'react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { ThemeSwitcher } from './theme-switcher';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const links = [
    { path: '/', text: 'Home' },
    { path: '/hacks', text: 'Hacks' },
    { path: '/about', text: 'About' },
    { path: '/projects', text: 'Projects' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Overlay for mobile menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMenu}
          />
        )}

        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-orange-400 transition-colors"
          >
            0xShubham.eth
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 bg-orange-400 rounded-lg p-2 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={clsx(
                  'px-4 py-2 rounded-md text-gray-900 font-medium transition-colors',
                  path === link.path 
                    ? 'bg-white shadow-sm' 
                    : 'hover:bg-orange-300'
                )}
              >
                {link.text}
              </Link>
            ))}
            <div className="ml-2 px-2 py-1 bg-white rounded-md">
              <ThemeSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-orange-400"
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={clsx(
          'fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-800 transform transition-transform duration-300 ease-in-out lg:hidden z-50',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-white">Menu</span>
              <button
                className="text-white hover:text-orange-400"
                onClick={toggleMenu}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={clsx(
                    'px-4 py-2 rounded-md text-white font-medium transition-colors text-center',
                    path === link.path
                      ? 'bg-orange-400 text-gray-900'
                      : 'hover:bg-gray-800'
                  )}
                  onClick={toggleMenu}
                >
                  {link.text}
                </Link>
              ))}
              <div className="mt-4 flex justify-center">
                <div className="p-2 bg-gray-800 rounded-md">
                  <ThemeSwitcher />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;