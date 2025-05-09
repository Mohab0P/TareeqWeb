'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faRoad, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Check scroll position to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2, 
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    }
  };

  const linkVariants = {
    hover: { 
      x: 5, 
      color: "#fff",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  // Subtle floating effect for elements
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative mt-0">
      {/* Fixed scroll to top button */}
      <AnimatedScrollTopButton visible={showScrollTop} onClick={scrollToTop} />
      
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Title and Description */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block relative"
              >
                <motion.span
                  className="relative z-10"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(147, 51, 234, 0)", 
                      "0 0 15px rgba(147, 51, 234, 0.5)", 
                      "0 0 5px rgba(147, 51, 234, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Tareeqi
                </motion.span>
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-600 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.span>
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-6"
              variants={itemVariants}
            >
              Transforming road monitoring with AI technology. Join us in making roads safer and better.
            </motion.p>

            {/* Visual element - road icon */}
            <motion.div
              className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center mb-6"
              initial={{ rotate: -5 }}
              animate={{ rotate: 5 }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"  
              }}
            >
              <FontAwesomeIcon icon={faRoad} className="w-6 h-6 text-purple-400" />
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              className="flex space-x-4 mt-6"
              variants={itemVariants}
            >
              {[
                { icon: faTwitter, name: 'twitter', color: '#1DA1F2' },
                { icon: faFacebook, name: 'facebook', color: '#4267B2' },
                { icon: faInstagram, name: 'instagram', color: '#E1306C' },
                { icon: faLinkedin, name: 'linkedin', color: '#0077B5' },
                { icon: faGithub, name: 'github', color: '#333' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden group"
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  whileHover="hover"
                  variants={socialIconVariants}
                >
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: social.color }}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: hoveredIcon === social.name ? 1 : 0,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5 text-gray-300 group-hover:text-white relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <motion.span 
                  className="w-8 h-8 rounded-lg bg-purple-900/20 flex items-center justify-center mr-2"
                  whileHover={{ rotate: 10 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 rounded-full border-t-2 border-r-2 border-purple-400"
                  />
                </motion.span>
                Quick Links
              </h4>
              <ul className="space-y-2">
                <motion.li whileHover="hover">
                  <motion.div variants={linkVariants}>
                    <Link href="/features" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <motion.span 
                        className="h-1 w-1 bg-purple-500 rounded-full mr-2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      Features
                    </Link>
                  </motion.div>
                </motion.li>
                <motion.li whileHover="hover">
                  <motion.div variants={linkVariants}>
                    <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <motion.span 
                        className="h-1 w-1 bg-purple-500 rounded-full mr-2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      How It Works
                    </Link>
                  </motion.div>
                </motion.li>
                <motion.li whileHover="hover">
                  <motion.div variants={linkVariants}>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <motion.span 
                        className="h-1 w-1 bg-purple-500 rounded-full mr-2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      About
                    </Link>
                  </motion.div>
                </motion.li>
                <motion.li whileHover="hover">
                  <motion.div variants={linkVariants}>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <motion.span 
                        className="h-1 w-1 bg-purple-500 rounded-full mr-2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      Contact
                    </Link>
                  </motion.div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              custom={1}
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <motion.span 
                  className="w-8 h-8 rounded-lg bg-purple-900/20 flex items-center justify-center mr-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-purple-400" />
                </motion.span>
                Contact Us
              </h4>
              <ul className="space-y-3">
                <motion.li 
                  className="text-gray-400 flex items-start"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span 
                    className="w-6 h-6 rounded-full bg-purple-900/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0"
                    whileHover={{ rotate: 15 }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3 text-purple-400" />
                  </motion.span>
                  <span className="block">
                    <a href="mailto:tareeqiapp@gmail.com" className="text-purple-400 hover:text-white transition-colors">
                      tareeqiapp@gmail.com
                    </a>
                  </span>
                </motion.li>
                <motion.li 
                  className="text-gray-400 flex items-start"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span 
                    className="w-6 h-6 rounded-full bg-purple-900/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0"
                    whileHover={{ rotate: 15 }}
                  >
                    <FontAwesomeIcon icon={faPhone} className="w-3 h-3 text-purple-400" />
                  </motion.span>
                  <span className="block">
                    <a href="tel:+966552626165" className="text-purple-400 hover:text-white transition-colors">
                      +966 552626165
                    </a>
                  </span>
                </motion.li>
                <motion.li 
                  className="text-gray-400 flex items-start"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span 
                    className="w-6 h-6 rounded-full bg-purple-900/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0"
                    whileHover={{ rotate: 15 }}
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 h-3 text-purple-400" />
                  </motion.span>
                  <span>Jouf University, Sakaka</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          variants={itemVariants}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Tareeqi. All rights reserved.
          </motion.p>
          <motion.div
            className="mt-4 text-sm flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        {/* Moving particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-600 opacity-10"
            style={{ 
              width: Math.random() * 10 + 5, 
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>
      </div>
    </footer>
  );
}

// Scroll to top button component
interface ScrollTopButtonProps {
  visible: boolean;
  onClick: () => void;
}

function AnimatedScrollTopButton({ visible, onClick }: ScrollTopButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center z-50 shadow-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: visible ? 1 : 0, 
        scale: visible ? 1 : 0.5,
        y: visible ? 0 : 20
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-white" />
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-white"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" as const
        }}
      />
    </motion.button>
  );
} 