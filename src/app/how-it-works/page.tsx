'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot, faBell, faChartLine, faSync, faRoad, faGears, faCar, faMobile, faShieldAlt, faMapMarkedAlt, faListAlt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

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

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Control video playback
  const handlePlayPause = () => {
    if (videoRef.current) {
      const iframe = videoRef.current;
      const message = isPlaying
        ? JSON.stringify({ event: 'command', func: 'pauseVideo' })
        : JSON.stringify({ event: 'command', func: 'playVideo' });
      
      iframe.contentWindow?.postMessage(message, '*');
      setIsPlaying(!isPlaying);
    }
  };

  // Check if video is in view for auto-playing when scrolled to
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const stepItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <div className={`${spaceGrotesk.variable} ${outfit.variable} font-sans`}>
      <Header />

      {/* Hero Section */}
      <motion.section 
        className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-purple-300 opacity-30"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`,
              }}
              animate={{
                y: [0, -15, 0, 15, 0],
                x: [0, 15, 0, -15, 0],
                scale: [1, 1.2, 1, 0.8, 1],
                opacity: [0.2, 0.5, 0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + (i % 5),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white tracking-tight`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How Tareeqi Works
          </motion.h1>
          
          <motion.p 
            className={`${outfit.className} text-xl text-purple-50/90 max-w-2xl mx-auto mb-12`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover how our innovative technology transforms road monitoring and 
            makes travel safer for everyone.
          </motion.p>
        </div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>
              Watch How It Works
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600 mb-8`}>
              See Tareeqi in action and understand how it's revolutionizing road monitoring
            </p>
          </motion.div>

          {/* Video container with animations */}
          <motion.div 
            ref={videoContainerRef}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-30"></div>
            
            {/* Video wrapper */}
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <iframe 
                ref={videoRef}
                className="absolute inset-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/1cuSU8tlw8g?enablejsapi=1"
                title="Tareeqi App Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Play/Pause overlay button */}
              <motion.button
                className="absolute bottom-6 right-6 z-20 w-14 h-14 bg-purple-700/80 hover:bg-purple-600 text-white rounded-full flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayPause}
              >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>
              A Step-by-Step Guide
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600 mb-4`}>
              Understanding the powerful technology behind Tareeqi
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                icon: faMobile,
                title: "Data Collection",
                description: "Your smartphone sensors detect road conditions as you drive, collecting valuable data without any user intervention."
              },
              {
                icon: faRobot,
                title: "AI Analysis",
                description: "Our advanced AI processes the data in real-time, identifying road issues and categorizing their severity."
              },
              {
                icon: faMapMarkedAlt,
                title: "Interactive Mapping",
                description: "Issues are plotted on an interactive map, creating a community-based database of road conditions."
              },
              {
                icon: faBell,
                title: "Real-time Alerts",
                description: "Receive instant notifications about road hazards along your route, helping you avoid problems."
              },
              {
                icon: faChartLine,
                title: "Data Visualization",
                description: "View comprehensive analytics about roads you've traveled and overall road quality trends."
              },
              {
                icon: faShieldAlt,
                title: "Safer Journeys",
                description: "Armed with this knowledge, you can make informed driving decisions and enjoy safer trips."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group"
                variants={stepItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Decorative background pattern */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-purple-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-5 text-purple-700"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FontAwesomeIcon icon={step.icon} className="w-8 h-8" />
                  </motion.div>
                  <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-3 text-gray-900`}>
                    {step.title}
                  </h3>
                  <p className={`${outfit.className} text-gray-600`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6`}>
              The Technology Process
            </h2>
            <p className={`${outfit.className} text-xl text-gray-300`}>
              See how data flows through the Tareeqi ecosystem
            </p>
          </motion.div>

          {/* Process flow visualization */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connection lines */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600/30 via-purple-500 to-purple-600/30 hidden md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Process steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  icon: faMobile,
                  title: "Collection",
                  description: "Smartphone sensors gather road condition data"
                },
                {
                  icon: faGears,
                  title: "Processing",
                  description: "Data is analyzed using machine learning algorithms"
                },
                {
                  icon: faChartLine,
                  title: "Analysis",
                  description: "Patterns and issues are identified and categorized"
                },
                {
                  icon: faRoad,
                  title: "Action",
                  description: "Alerts and maps help drivers navigate safely"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-purple-700 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-purple-700/30 relative"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: ["0 10px 25px rgba(147, 51, 234, 0.3)", "0 10px 40px rgba(147, 51, 234, 0.6)", "0 10px 25px rgba(147, 51, 234, 0.3)"] 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FontAwesomeIcon icon={step.icon} className="w-10 h-10" />
                    
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {index + 1}
                    </div>
                  </motion.div>
                  <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-3`}>
                    {step.title}
                  </h3>
                  <p className={`${outfit.className} text-gray-300`}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Animated data flow */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden md:block pointer-events-none">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="absolute w-4 h-4 rounded-full bg-purple-400"
                  initial={{ left: "0%", opacity: 0 }}
                  animate={{ 
                    left: ["0%", "33%", "66%", "100%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: index * 1,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 text-center`}>
                Summary
              </h3>
              <p className={`${outfit.className} text-lg text-white/90`}>
                TAREEQI combines smartphone sensors, machine learning, and community input 
                to make roads safer, smarter, and more manageable — all in real-time. By leveraging
                the power of data and AI, we're creating a network of informed drivers and building
                a comprehensive database of road conditions that benefits everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl font-bold mb-6 text-gray-900`}>
              Ready to Experience Tareeqi?
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600 mb-8`}>
              Join our community of drivers making roads safer for everyone.
            </p>
            <motion.a 
              href="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Beta Program
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 