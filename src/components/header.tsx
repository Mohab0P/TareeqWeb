'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full p-2">
              <Image 
                src="/logo.png" 
                alt="Tareeqi Logo" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Tareeqi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="https://dashboard.tareeqi.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              RGA Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="w-6 h-6 text-gray-600"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-64 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-4">
            <Link 
              href="/features" 
              className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="https://dashboard.tareeqi.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              RGA Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 