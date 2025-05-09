'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { scrollY } = useScroll();

  // Track scroll position to add visual effects
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  // Set active link based on path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/features')) setActiveLink('features');
      else if (path.includes('/how-it-works')) setActiveLink('how-it-works');
      else if (path.includes('/about')) setActiveLink('about');
      else if (path.includes('/contact')) setActiveLink('contact');
      else setActiveLink('home');
    }
  }, []);

  // Navigation item hover animation
  const navItemVariants = {
    hover: {
      scale: 1.1,
      color: "#9333EA", // purple-600
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  // Mobile menu animation
  const menuVariants = {
    closed: { 
      height: 0, 
      opacity: 0,
      transition: { 
        duration: 0.3, 
        ease: [0.04, 0.62, 0.23, 0.98],
        opacity: { duration: 0.2 }
      } 
    },
    open: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.04, 0.62, 0.23, 0.98],
        opacity: { duration: 0.25, delay: 0.1 }
      } 
    }
  };

  const logoVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360, 
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" 
      } 
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 5px 15px rgba(147, 51, 234, 0.3)" 
    },
    tap: { scale: 0.95 }
  };

  // Staggered menu items (for mobile)
  const mobileMenuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({ 
      x: 0, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-white/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-3"
              initial="initial"
              whileHover="hover"
            >
              <motion.div 
                className="w-10 h-10 bg-purple-600 rounded-full p-2 overflow-hidden"
                variants={logoVariants}
              >
                <Image 
                  src="/logo.png" 
                  alt="Tareeqi Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                />
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-gray-900"
                animate={{ 
                  textShadow: scrolled ? "0px 0px 0px rgba(0,0,0,0)" : "0px 0px 5px rgba(147, 51, 234, 0.3)" 
                }}
              >
                Tareeqi
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              className="flex items-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              <motion.div 
                whileHover="hover"
                variants={navItemVariants}
              >
                <Link 
                  href="/features" 
                  className={`text-gray-600 transition-colors relative ${activeLink === 'features' ? 'text-purple-600 font-medium' : ''}`}
                >
                  Features
                  {activeLink === 'features' && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded"
                      layoutId="activeLinkUnderline"
                    />
                  )}
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover="hover"
                variants={navItemVariants}
              >
                <Link 
                  href="/how-it-works" 
                  className={`text-gray-600 transition-colors relative ${activeLink === 'how-it-works' ? 'text-purple-600 font-medium' : ''}`}
                >
                  How It Works
                  {activeLink === 'how-it-works' && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded"
                      layoutId="activeLinkUnderline"
                    />
                  )}
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover="hover"
                variants={navItemVariants}
              >
                <Link 
                  href="/about" 
                  className={`text-gray-600 transition-colors relative ${activeLink === 'about' ? 'text-purple-600 font-medium' : ''}`}
                >
                  About
                  {activeLink === 'about' && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded"
                      layoutId="activeLinkUnderline"
                    />
                  )}
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover="hover"
                variants={navItemVariants}
              >
                <Link 
                  href="/contact" 
                  className={`text-gray-600 transition-colors relative ${activeLink === 'contact' ? 'text-purple-600 font-medium' : ''}`}
                >
                  Contact
                  {activeLink === 'contact' && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded"
                      layoutId="activeLinkUnderline"
                    />
                  )}
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="https://salik-app-project-d4e90.web.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors group relative overflow-hidden"
              >
                <motion.span 
                  className="absolute inset-0 bg-purple-700 rounded-lg"
                  initial={{ scale: 0, x: '100%' }}
                  whileHover={{ scale: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">RGA Dashboard</span>
                <motion.span 
                  className="absolute inset-0 border-2 border-white/20 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon 
                    icon={faTimes} 
                    className="w-6 h-6 text-purple-600"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon 
                    icon={faBars} 
                    className="w-6 h-6 text-gray-600"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="py-4 space-y-4">
                {[
                  { name: 'Features', href: '/features', id: 'features' },
                  { name: 'How It Works', href: '/how-it-works', id: 'how-it-works' },
                  { name: 'About', href: '/about', id: 'about' },
                  { name: 'Contact', href: '/contact', id: 'contact' }
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={mobileMenuItemVariants}
                  >
                    <Link 
                      href={item.href} 
                      className={`block px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors relative ${
                        activeLink === item.id ? 'text-purple-600 bg-purple-50 font-medium' : 'text-gray-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {activeLink === item.id && (
                        <motion.div 
                          className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-r"
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={4}
                  variants={mobileMenuItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-4"
                >
                  <Link 
                    href="https://salik-app-project-d4e90.web.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      RGA Dashboard
                      <motion.div 
                        className="absolute inset-0 border-2 border-white/20 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
} 