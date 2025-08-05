'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Star, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, FEATURE_PAGES } from '@/utils/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Star className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold text-white">StarGaze</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Features Dropdown */}
            <div className="relative">
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                <span>Feature Pages</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50"
                >
                  {FEATURE_PAGES.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {page.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection('#download')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Get App
            </motion.button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 rounded-lg mt-2 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-slate-300 hover:text-white py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="border-t border-slate-700 pt-2 mt-4">
                <div className="text-slate-400 text-sm font-medium mb-2 px-2">Feature Pages</div>
                {FEATURE_PAGES.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block w-full text-left text-slate-300 hover:text-white py-2 px-2 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={() => scrollToSection('#download')}
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 mt-4"
              >
                Get App
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}