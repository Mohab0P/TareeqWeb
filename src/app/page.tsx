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
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'beta'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Registration successful! 🎉 Please check your email (including spam folder) for confirmation. We will contact you soon with next steps.'
        });
        setFormData({ name: '', email: '', phone: '' });
        setErrors({});
      } else {
        throw new Error(data.error || 'Failed to submit form');
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
      <section className={`relative bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-500 text-white py-20 md:py-8 overflow-hidden ${spaceGrotesk.variable} ${outfit.variable} font-sans mt-20`}>
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[20%] left-[10%] w-56 h-56 bg-pink-400 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[30%] right-[5%] w-72 h-72 bg-blue-400 rounded-full blur-[100px]"></div>
          <div className="absolute top-[60%] left-[50%] w-60 h-60 bg-indigo-300 rounded-full blur-[90px]"></div>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
        
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
          {/* Logo section - centered */}
          <div className="flex justify-center items-center mb-16">
            <div className="flex items-center bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              {/* App logo */}
              <div className="w-12 h-12 bg-white rounded-full p-2 mr-3 flex items-center justify-center shadow-lg">
                <Image 
                  src="/logo.png" 
                  alt="Tareeqi Logo" 
                  width={50} 
                  height={50} 
                  className="drop-shadow-md"
                />
              </div>
              <span className="text-2xl font-bold tracking-wide text-white/90">tareeqi</span>
            </div>
          </div>
          
          {/* App Screenshots - Optimized for screenshot */}
          <div className="flex flex-col md:flex-row justify-center items-center py-12 relative overflow-visible">
            {/* Enhanced glow behind phones */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500 opacity-20 blur-[100px] rounded-full"></div>
            <div className="absolute left-1/3 top-1/3 w-[300px] h-[300px] bg-indigo-400 opacity-15 blur-[80px] rounded-full"></div>
            
            {/* Enhanced badge above phones */}
            <div className="absolute left-1/2 top-[-10px] -translate-x-1/2 text-center z-30 flex flex-col items-center">
              <div className="bg-gradient-to-r from-purple-300 to-indigo-300 text-purple-900 px-5 py-1.5 rounded-full shadow-lg border border-white/30 backdrop-blur-md flex items-center gap-2 transform -rotate-1 hover:rotate-0 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-extrabold tracking-wide">AI-POWERED TECHNOLOGY</span>
              </div>
              
              {/* Decorative dots */}
              <div className="flex gap-1.5 mt-2">
                <div className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse delay-100"></div>
                <div className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-200"></div>
              </div>
              
              {/* Optional extra tagline */}
              <div className="mt-3 text-white px-4 py-1.5 bg-purple-800/80 rounded-lg backdrop-blur-sm border border-purple-300/30 shadow-lg">
                <span className={`${spaceGrotesk.className} text-sm font-bold tracking-wider uppercase`}>
                  THE FUTURE OF ROAD MONITORING
                </span>
              </div>
            </div>
            
            {/* Text between phones - updated widget design */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-30 px-4 py-3 bg-purple-900/80 backdrop-blur-md rounded-xl border border-purple-300/30 shadow-xl max-w-[280px] w-full">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-0.5 rounded-full text-xs font-bold tracking-wider font-sans">
                INTRODUCING
              </div>
              
              <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-2 text-white drop-shadow-lg tracking-tight`}>
                ROAD QUALITY MONITORING
              </h2>
              
              <p className={`${outfit.className} text-white/90 text-sm mb-3 max-w-md mx-auto font-light leading-relaxed`}>
                Transform your daily commute into valuable road data
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-1">
                <div className="bg-purple-800/80 border border-purple-400/30 px-2 py-1 rounded-lg flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5 shadow-glow-green"></div>
                  <span className={`${outfit.className} text-xs font-medium text-white`}>Real-time detection</span>
                </div>
                <div className="bg-purple-800/80 border border-purple-400/30 px-2 py-1 rounded-lg flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5 shadow-glow-blue"></div>
                  <span className={`${outfit.className} text-xs font-medium text-white`}>GPS mapping</span>
                </div>
                <div className="bg-purple-800/80 border border-purple-400/30 px-2 py-1 rounded-lg flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-1.5 shadow-glow-purple"></div>
                  <span className={`${outfit.className} text-xs font-medium text-white`}>Analytics</span>
                </div>
              </div>
            </div>

            {/* Left phone mockup with proper text descriptions */}
            <div className="w-[380px] h-[760px] bg-black rounded-[40px] border-[10px] border-gray-800 shadow-[0_0_40px_rgba(139,92,246,0.4),inset_0_0_3px_rgba(255,255,255,0.2)] relative overflow-visible transform rotate-[-8deg] md:translate-x-14 z-10 mb-8 md:mb-0">
              {/* Phone frame elements */}
              <div className="absolute w-40 h-6 bg-black top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20"></div>
              <div className="absolute w-[360px] h-[740px] inset-0 m-auto overflow-hidden rounded-3xl">
                <Image src="/phone1.png" alt="Tareeqi App Dashboard" fill className="object-cover" priority />
              </div>
              
              {/* Feature descriptions - with actual descriptive text */}
              <div className="absolute top-[120px] -left-[280px] hidden md:flex items-center z-30">
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm min-w-[140px]">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Road Issues Counter</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    App tracks 3 detected road issues in your current area
                  </span>
                </div>
                <div className="w-24 h-[2px] bg-gradient-to-r from-purple-900 to-white"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] border border-white"></div>
              </div>
              
              <div className="absolute top-[220px] -left-[260px] hidden md:flex items-center z-30">
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm min-w-[140px]">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Distance Traveled</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    25km of roads scanned for quality issues today
                  </span>
                </div>
                <div className="w-20 h-[2px] bg-gradient-to-r from-purple-900 to-white"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] border border-white"></div>
              </div>
              
              <div className="absolute top-[350px] -left-[270px] hidden md:flex items-center z-30">
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm min-w-[140px]">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>User Profile</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    "Road Expert" level achieved with 100 points earned
                  </span>
                </div>
                <div className="w-20 h-[2px] bg-gradient-to-r from-purple-900 to-white"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] border border-white"></div>
              </div>

              {/* Mobile feature boxes */}
              <div className="md:hidden absolute inset-0 flex flex-col justify-center items-center gap-4 p-6">
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Road Issues Counter</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    App tracks 3 detected road issues in your current area
                  </span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Distance Traveled</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    25km of roads scanned for quality issues today
                  </span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>User Profile</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    "Road Expert" level achieved with 100 points earned
                  </span>
                </div>
              </div>
            </div>

            {/* Right phone mockup with proper text descriptions */}
            <div className="w-[380px] h-[760px] bg-black rounded-[40px] border-[10px] border-gray-800 shadow-[0_0_40px_rgba(139,92,246,0.4),inset_0_0_3px_rgba(255,255,255,0.2)] relative overflow-visible transform rotate-[8deg] md:-translate-x-14 z-20">
              {/* Phone frame elements */}
              <div className="absolute w-40 h-6 bg-black top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20"></div>
              <div className="absolute w-[360px] h-[740px] inset-0 m-auto overflow-hidden rounded-3xl">
                <Image src="/phone3.png" alt="Tareeqi App Road Analysis" fill className="object-cover" priority />
              </div>
              
              {/* Feature descriptions - with actual descriptive text */}
              <div className="absolute top-[180px] -right-[280px] hidden md:flex items-center z-30">
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] border border-white"></div>
                <div className="w-24 h-[2px] bg-gradient-to-l from-purple-900 to-white"></div>
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm min-w-[140px]">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Weekly Stats</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    Visual breakdown of your 7-day road monitoring activity
                  </span>
                </div>
              </div>
              
              <div className="absolute top-[350px] -right-[270px] hidden md:flex items-center z-30">
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] border border-white"></div>
                <div className="w-20 h-[2px] bg-gradient-to-l from-purple-900 to-white"></div>
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm min-w-[140px]">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Performance Data</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    14.3 km average trip length, +12% improvement this week
                  </span>
                </div>
              </div>
              
              <div className="absolute top-[520px] -right-[260px] hidden md:flex items-center z-30">
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] border border-white"></div>
                <div className="w-20 h-[2px] bg-gradient-to-l from-purple-900 to-white"></div>
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm min-w-[140px]">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Navigation Tabs</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    Quick access to Dashboard, Map, History & Settings
                  </span>
                </div>
              </div>

              {/* Mobile feature boxes - inside phone */}
              <div className="md:hidden absolute inset-0 flex flex-col justify-center items-center gap-4 p-6">
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Road Issues Counter</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    App tracks 3 detected road issues in your current area
                  </span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>Distance Traveled</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    25km of roads scanned for quality issues today
                  </span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-purple-400/40 backdrop-blur-sm w-full">
                  <span className={`${spaceGrotesk.className} font-bold block mb-0.5 text-purple-200`}>User Profile</span>
                  <span className={`${outfit.className} text-[10px] text-white/90 font-normal`}>
                    "Road Expert" level achieved with 100 points earned
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Name and Download - enhanced */}
          <div className="text-center max-w-4xl mx-auto mt-12">
            <div className="mb-2 inline-block">
              <span className={`${outfit.className} text-xs font-bold tracking-[0.2em] bg-white/20 text-white/90 py-1 px-3 rounded-full`}>REVOLUTIONARY</span>
            </div>
            <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-indigo-100 letter-spacing-[-0.02em]`}>
              TAREEQI
            </h1>
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-semibold mb-8 tracking-wide text-indigo-100`}>
              ROAD MONITORING APP
            </h2>
            <p className={`${outfit.className} text-xl mb-12 max-w-2xl mx-auto text-white/80 font-light`}>
              JOIN THE BETA PROGRAM
            </p>
            
            {/* Beta Registration Form */}
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 mb-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
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
                      <p className="text-sm font-medium text-white drop-shadow-sm">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className={`relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                    Join Beta Program
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className={`${outfit.className} bg-purple-900/80 text-white px-8 py-4 rounded-xl inline-flex items-center gap-4 hover:bg-purple-900 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.2)] group cursor-not-allowed`}>
                <div className="bg-white/10 p-2 rounded-full">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-70">Coming Soon on</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </a>
              
              <a href="#" className={`${outfit.className} bg-purple-900/80 text-white px-8 py-4 rounded-xl inline-flex items-center gap-4 hover:bg-purple-900 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.2)] group cursor-not-allowed`}>
                <div className="bg-white/10 p-2 rounded-full">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-70">Coming Soon on</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* RGA Dashboard Link */}
            <div className="mt-8">
              <a 
                href="https://salik-app-project-d4e90.web.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${outfit.className} inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all`}
              >
                <FontAwesomeIcon icon={faChartLine} className="w-5 h-5" />
                <span>View RGA Dashboard</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced wave effect at bottom */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,128C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      <Footer />
    </>
  );
}