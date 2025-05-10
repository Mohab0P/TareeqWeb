'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faClock, faSearch, faFilter, faTags, faChevronDown, faBook, faLaptopCode, faChartLine, faPalette, faMobile, faBullhorn, faRoad, faMapMarkedAlt, faShieldAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardMedia, CardBadge } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getImagePath } from '@/lib/utils';

// Custom font setup
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle', message: '' });
    
    try {
      // Use new email API endpoint
      const response = await fetch('https://email-api-9y3z.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'beta'
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Registration successful! 🎉 Please check your email (including spam folder) for confirmation. We will contact you soon with next steps.'
        });
        setFormData({ name: '', email: '', phone: '' });
        setErrors({});
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Unable to submit form. Please try again or contact support at tareeqiapp@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <>
      <Header />
      {/* Hero Section - Poster Style */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-500 text-white py-20 md:py-8 overflow-hidden ${spaceGrotesk.variable} ${outfit.variable} font-sans mt-20`}
      >
        {/* Abstract shapes with animations */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-[20%] left-[10%] w-56 h-56 bg-pink-400 rounded-full blur-[80px]"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-[30%] right-[5%] w-72 h-72 bg-blue-400 rounded-full blur-[100px]"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 15, 0],
              y: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-[60%] left-[50%] w-60 h-60 bg-indigo-300 rounded-full blur-[90px]"
          ></motion.div>
        </motion.div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/10 via-transparent to-blue-600/10 opacity-30 mix-blend-soft-light"></div>
        
        {/* Left side text - vertical */}
        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 items-center -rotate-90 origin-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-[0.2em] opacity-80 text-shadow-sm">SMART</span>
            <div className="h-[1px] w-14 bg-white opacity-50"></div>
            <span className="text-xl font-bold tracking-[0.2em] opacity-80 text-shadow-sm">DETECTION</span>
            <div className="h-[1px] w-14 bg-white opacity-50"></div>
            <span className="text-xl font-bold tracking-[0.2em] opacity-80 text-shadow-sm">AI</span>
          </div>
        </div>
        
        {/* Right side text - vertical */}
        <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 items-center rotate-90 origin-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-[0.2em] opacity-80 text-shadow-sm">ROAD</span>
            <div className="h-[1px] w-14 bg-white opacity-50"></div>
            <span className="text-xl font-bold tracking-[0.2em] opacity-80 text-shadow-sm">QUALITY</span>
            <div className="h-[1px] w-14 bg-white opacity-50"></div>
            <span className="text-xl font-bold tracking-[0.2em] opacity-80 text-shadow-sm">MONITOR</span>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Logo section with widgets */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-16"
          >
            <div className="flex items-center bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm mb-8">
              {/* App logo */}
              <div className="w-12 h-12 bg-white rounded-full p-2 mr-3 flex items-center justify-center shadow-lg">
                <Image 
                  src="logo.png"
                  alt="Tareeqi Logo" 
                  width={50} 
                  height={50} 
                  className="drop-shadow-md"
                />
              </div>
              <span className="text-2xl font-bold tracking-wide text-white/90">Tareeqi</span>
            </div>

            {/* Widgets under logo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center gap-4 w-full max-w-[90%] md:max-w-[600px]"
            >
              {/* AI-Powered Technology Badge */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-purple-300 to-indigo-300 text-purple-900 px-5 py-1.5 rounded-full shadow-lg border border-white/30 backdrop-blur-md flex items-center gap-2 transform -rotate-1 hover:rotate-0 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-extrabold tracking-wide">AI-POWERED TECHNOLOGY</span>
              </motion.div>

              {/* Future of Road Monitoring Tagline */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-white px-4 py-1.5 bg-purple-800/80 rounded-lg backdrop-blur-sm border border-purple-300/30 shadow-lg"
              >
                <span className={`${spaceGrotesk.className} text-sm font-bold tracking-wider uppercase`}>
                  THE FUTURE OF ROAD MONITORING
                </span>
              </motion.div>

              {/* Decorative dots */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-1.5"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="w-1.5 h-1.5 bg-purple-300 rounded-full"
                ></motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="w-1.5 h-1.5 bg-indigo-300 rounded-full"
                ></motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  className="w-1.5 h-1.5 bg-purple-300 rounded-full"
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* App Screenshots - Optimized for screenshot */}
          <div className="flex flex-col md:flex-row justify-center items-center py-12 relative overflow-visible">
            {/* Enhanced glow behind phones */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500 opacity-20 blur-[100px] rounded-full"></div>
            <div className="absolute left-1/3 top-1/3 w-[300px] h-[300px] bg-indigo-400 opacity-15 blur-[80px] rounded-full"></div>
            
            {/* Animated background particles */}
            <motion.div className="absolute inset-0 overflow-hidden opacity-40">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-purple-200"
                  style={{
                    left: `${(i * 5) % 100}%`,
                    top: `${(i * 7) % 100}%`,
                  }}
                  animate={{
                    y: [0, -10, 0, 10, 0],
                    x: [0, 10, 0, -10, 0],
                    scale: [1, 1.5, 1, 0.8, 1],
                    opacity: [0.4, 0.8, 0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 5 + (i % 5),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
            
            {/* Phones Container with Enhanced Animations */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 relative"
            >
              {/* Connecting line between phones */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0 z-0"
              >
                {/* Animated dots along the line */}
                <motion.div 
                  animate={{ 
                    x: ['-100%', '100%'],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-500/50"
                />
              </motion.div>

              {/* Left phone mockup */}
              <motion.div 
                initial={{ opacity: 0, x: -100, rotate: -15 }}
                animate={{ opacity: 1, x: 0, rotate: -8 }}
                transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 100 }}
                className="w-[300px] md:w-[420px] h-[600px] md:h-[840px] bg-black rounded-[40px] border-[10px] border-gray-800 shadow-[0_0_40px_rgba(139,92,246,0.4),inset_0_0_3px_rgba(255,255,255,0.2)] relative overflow-visible transform rotate-[-8deg] md:translate-x-14 z-10 mb-8 md:mb-0"
                whileHover={{ 
                  scale: 1.02, 
                  rotate: -6,
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Phone frame elements */}
                <div className="absolute w-40 h-6 bg-black top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20"></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute w-[280px] md:w-[400px] h-[580px] md:h-[820px] inset-0 m-auto overflow-hidden rounded-3xl"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full relative"
                  >
                    <Image 
                      src="phone1.png"
                      alt="Tareeqi App Dashboard" 
                      fill 
                      className="object-cover" 
                      priority 
                    />
                    
                    {/* Interactive overlay elements */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {/* Pulsing notification */}
                      <motion.div 
                        className="absolute top-[25%] right-[20%] w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(139,92,246,0.7)',
                            '0 0 0 10px rgba(139,92,246,0)',
                            '0 0 0 0 rgba(139,92,246,0.7)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-white">3</span>
                      </motion.div>
                      
                      {/* Highlight element */}
                      <motion.div 
                        className="absolute bottom-[20%] left-[15%] w-[35%] h-[5%] rounded-lg border-2 border-yellow-400"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Animated screen reflection overlay */}
                <motion.div 
                  className="absolute inset-0 rounded-[30px] overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10"
                    animate={{
                      left: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                </motion.div>

                {/* Desktop feature boxes */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute top-[120px] -left-[280px] hidden md:flex items-center z-30"
                >
                  <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm min-w-[140px]">
                    <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Road Issues Counter</span>
                    <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                      App tracks 3 detected road issues in your current area
                    </span>
                  </div>
                  <motion.div 
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-24 h-[2px] bg-gradient-to-r from-purple-900 to-white"
                  ></motion.div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] border border-white"
                  ></motion.div>
                </motion.div>

                {/* Animated highlight ring */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute inset-[-6px] rounded-[46px] z-[-1]"
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        '0 0 20px 5px rgba(139,92,246,0.3)', 
                        '0 0 30px 5px rgba(139,92,246,0.6)', 
                        '0 0 20px 5px rgba(139,92,246,0.3)'
                      ] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-[46px]"
                  />
                </motion.div>

                {/* Mobile feature boxes */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="md:hidden absolute inset-0 flex flex-col justify-center items-center gap-4 p-6"
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full"
                  >
                    <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Road Issues Counter</span>
                    <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                      App tracks 3 detected road issues in your current area
                    </span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full"
                  >
                    <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Distance Traveled</span>
                    <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                      25km of roads scanned for quality issues today
                    </span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full"
                  >
                    <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>User Profile</span>
                    <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                      "Road Expert" level achieved with 100 points earned
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right phone mockup */}
              <motion.div 
                initial={{ opacity: 0, x: 100, rotate: 15 }}
                animate={{ opacity: 1, x: 0, rotate: 8 }}
                transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100 }}
                className="w-[300px] md:w-[420px] h-[600px] md:h-[840px] bg-black rounded-[40px] border-[10px] border-gray-800 shadow-[0_0_40px_rgba(139,92,246,0.4),inset_0_0_3px_rgba(255,255,255,0.2)] relative overflow-visible transform rotate-[8deg] md:-translate-x-14 z-20"
                whileHover={{ 
                  scale: 1.02, 
                  rotate: 6,
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Phone frame elements */}
                <div className="absolute w-40 h-6 bg-black top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20"></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute w-[280px] md:w-[400px] h-[580px] md:h-[820px] inset-0 m-auto overflow-hidden rounded-3xl"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5 // Slightly offset from the first phone
                    }}
                    className="w-full h-full relative"
                  >
                    <Image 
                      src="phone3.png"
                      alt="Tareeqi App Road Analysis" 
                      fill 
                      className="object-cover" 
                      priority 
                    />
                    
                    {/* Interactive overlay elements */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.8 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {/* Animated chart line */}
                      <motion.div className="absolute bottom-[30%] left-[20%] w-[60%] h-[15%]">
                        <svg width="100%" height="100%" viewBox="0 0 100 40" className="overflow-visible">
                          <motion.path
                            d="M 0,30 Q 15,10 30,25 T 60,15 T 100,20"
                            fill="none"
                            stroke="rgba(168,85,247,0.8)"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                          <motion.circle
                            cx="0" cy="30" r="3"
                            fill="#a855f7"
                            animate={{ cx: [0, 100], cy: [30, 20] }}
                            transition={{ duration: 3, delay: 2.5, repeat: Infinity, repeatType: "reverse" }}
                          />
                        </svg>
                      </motion.div>
                      
                      {/* Moving indicator dot */}
                      <motion.div 
                        className="absolute top-[40%] right-[30%] w-4 h-4 rounded-full bg-green-500"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(74,222,128,0.7)',
                            '0 0 0 5px rgba(74,222,128,0)',
                            '0 0 0 0 rgba(74,222,128,0.7)'
                          ]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Animated screen reflection overlay */}
                <motion.div 
                  className="absolute inset-0 rounded-[30px] overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10"
                    animate={{
                      left: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: "easeInOut",
                      delay: 3.5
                    }}
                  />
                </motion.div>

                {/* Animated highlight ring */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute inset-[-6px] rounded-[46px] z-[-1]"
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        '0 0 20px 5px rgba(139,92,246,0.3)', 
                        '0 0 30px 5px rgba(139,92,246,0.6)', 
                        '0 0 20px 5px rgba(139,92,246,0.3)'
                      ] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-full h-full rounded-[46px]"
                  />
                </motion.div>

                {/* Desktop feature boxes */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute top-[120px] -right-[280px] hidden md:flex items-center z-30"
                >
                  <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm min-w-[140px]">
                    <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Weekly Stats</span>
                    <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                      Visual breakdown of your 7-day road monitoring activity
                    </span>
                  </div>
                  <motion.div 
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-24 h-[2px] bg-gradient-to-r from-purple-900 to-white"
                  ></motion.div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] border border-white"
                  ></motion.div>
                </motion.div>

                {/* Mobile feature boxes */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="md:hidden absolute inset-0 flex flex-col justify-center items-center gap-4 p-6"
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full"
                  >
                    <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Weekly Stats</span>
                    <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                      Visual breakdown of your 7-day road monitoring activity
                    </span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full"
                  >
                    <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Performance Data</span>
                    <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                      14.3 km average trip length, +12% improvement this week
                    </span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full"
                  >
                    <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Navigation Tabs</span>
                    <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                      Quick access to Dashboard, Map, History & Settings
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Data flow animation between phones */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-purple-400 shadow-md shadow-purple-500/50"
                    initial={{ x: -100, y: 0, opacity: 0 }}
                    animate={{ 
                      x: 100,
                      y: (i * 10) - 20,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* App Name and Download Section with Enhanced Animations */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-center max-w-4xl mx-auto mt-12 px-4"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mb-2 inline-block"
            >
              <motion.span 
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className={`${outfit.className} text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-white/20 via-white/40 to-white/20 bg-[length:200%_100%] text-white/90 py-1 px-3 rounded-full`}
              >
                REVOLUTIONARY
              </motion.span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className={`${spaceGrotesk.className} text-4xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-indigo-100 letter-spacing-[-0.02em]`}
            >
              TAREEQI
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className={`${spaceGrotesk.className} text-2xl md:text-4xl font-semibold mb-8 tracking-wide text-indigo-100`}
            >
              ROAD MONITORING APP
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className={`${outfit.className} text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/80 font-light`}
            >
              JOIN THE BETA PROGRAM
            </motion.p>
            
            {/* Beta Registration Form */}
            <div 
              className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 mb-12 relative overflow-hidden hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
              id="beta-form"
            >
              {/* Scroll reveal animation wrapper */}
              <div className="opacity-0 translate-y-10 transition-all duration-1000 ease-out" id="form-reveal">
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 bg-[length:200%_100%] animate-gradient-x opacity-30"
                ></div>
                
                {/* Animated sparkles */}
                <div className="absolute -z-5 inset-0 overflow-hidden opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-white"
                      style={{
                        left: `${(i * 20) % 100}%`,
                        top: `${(i * 18 + 5) % 100}%`,
                        animation: `pulse-slow ${2 + (i % 3)}s infinite ease-in-out ${i * 0.4}s`,
                        opacity: 0.5 + (i * 0.1)
                      }}
                    ></div>
                  ))}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="opacity-0 translate-y-4 transition-all duration-700 delay-100" id="form-field-1">
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-white/20 focus:scale-[1.01]`}
                        placeholder="Enter your full name"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-indigo-500 group-focus-within:w-full transition-all duration-300"></div>
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 animate-shake">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="opacity-0 translate-y-4 transition-all duration-700 delay-200" id="form-field-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-white/20 focus:scale-[1.01]`}
                        placeholder="Enter your email"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-indigo-500 group-focus-within:w-full transition-all duration-300"></div>
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 animate-shake">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="opacity-0 translate-y-4 transition-all duration-700 delay-300" id="form-field-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone Number</label>
                    <div className="relative group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-white/20 focus:scale-[1.01]`}
                        placeholder="Enter your phone number"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-indigo-500 group-focus-within:w-full transition-all duration-300"></div>
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400 animate-shake">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  
                  {submitStatus.type !== 'idle' && (
                    <div 
                      className={`p-4 rounded-lg transition-all duration-500 transform ${
                        submitStatus.type === 'success' 
                          ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30' 
                          : 'bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/30'
                      } animate-fade-in-up backdrop-blur-sm`}
                    >
                      <div className="flex items-center gap-3">
                        {submitStatus.type === 'success' ? (
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-green-500/20">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-500 rounded-full flex items-center justify-center animate-shake shadow-lg shadow-red-500/20">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </div>
                          </div>
                        )}
                        <p className="text-sm font-medium text-white drop-shadow-sm">
                          {submitStatus.message}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="opacity-0 translate-y-4 transition-all duration-700 delay-400" id="form-field-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group active:scale-[0.98]"
                    >
                      <span className={`relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                        Join Beta Program
                      </span>
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity bg-[length:200%_100%] animate-gradient-x"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div 
              className="flex flex-wrap justify-center gap-6 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <a 
                href="#" 
                className={`${outfit.className} bg-purple-900/80 text-white px-8 py-4 rounded-xl inline-flex items-center gap-4 hover:bg-purple-900 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 group cursor-not-allowed relative overflow-hidden active:scale-[0.98]`}
              >
                {/* Animated background glow */}
                <div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4)_0%,rgba(0,0,0,0)_70%)] animate-pulse-slow"
                ></div>
                
                <div className="bg-white/10 p-2 rounded-full group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left relative">
                  <div className="text-xs opacity-70 animate-bounce-subtle">
                    Coming Soon on
                  </div>
                  <div className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-[length:200%_100%] animate-gradient-x">
                    App Store
                  </div>
                </div>
                
                {/* Coming soon badge */}
                <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-3 rounded-full font-bold animate-pulse">
                  SOON
                </div>
              </a>
              
              <a 
                href="#" 
                className={`${outfit.className} bg-purple-900/80 text-white px-8 py-4 rounded-xl inline-flex items-center gap-4 hover:bg-purple-900 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 group cursor-not-allowed relative overflow-hidden active:scale-[0.98]`}
              >
                {/* Animated background glow */}
                <div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.4)_0%,rgba(0,0,0,0)_70%)] animate-pulse-slow"
                ></div>
                
                <div className="bg-white/10 p-2 rounded-full group-hover:rotate-[-6deg] transition-transform duration-300">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left relative">
                  <div className="text-xs opacity-70 animate-bounce-subtle">
                    Coming Soon on
                  </div>
                  <div className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-[length:200%_100%] animate-gradient-x">
                    Google Play
                  </div>
                </div>
                
                {/* Coming soon badge */}
                <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-3 rounded-full font-bold animate-pulse">
                  SOON
                </div>
              </a>
            </div>

            {/* RGA Dashboard Link */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="mt-8"
            >
              <a 
                href="https://salik-app-project-d4e90.web.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${outfit.className} inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all`}
              >
                <FontAwesomeIcon icon={faChartLine} className="w-5 h-5" />
                <span>View RGA Dashboard</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced wave effect at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute -bottom-1 left-0 right-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,128C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></motion.path>
          </svg>
        </motion.div>
      </motion.section>

      {/* Add scroll animation JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const formReveal = document.getElementById('form-reveal');
            const formField1 = document.getElementById('form-field-1');
            const formField2 = document.getElementById('form-field-2');
            const formField3 = document.getElementById('form-field-3');
            const formField4 = document.getElementById('form-field-4');
            
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  formReveal.classList.add('opacity-100');
                  formReveal.classList.remove('translate-y-10');
                  
                  setTimeout(() => {
                    formField1.classList.add('opacity-100');
                    formField1.classList.remove('translate-y-4');
                  }, 200);
                  
                  setTimeout(() => {
                    formField2.classList.add('opacity-100');
                    formField2.classList.remove('translate-y-4');
                  }, 400);
                  
                  setTimeout(() => {
                    formField3.classList.add('opacity-100');
                    formField3.classList.remove('translate-y-4');
                  }, 600);
                  
                  setTimeout(() => {
                    formField4.classList.add('opacity-100');
                    formField4.classList.remove('translate-y-4');
                  }, 800);
                  
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.2 });
            
            const betaForm = document.getElementById('beta-form');
            if (betaForm) {
              observer.observe(betaForm);
            }
          });
        `
      }} />

      {/* Footer with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}