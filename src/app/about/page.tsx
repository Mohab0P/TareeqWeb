'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRoad, faChartLine, faUsers, faBullseye, faHandshake, faGlobe, faUniversity, faHistory, faStar, faAward, faQuoteLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

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

const teamMembers = [
  {
    name: "Bahaa AlSulaiman",
    role: "Team Lead/Mobile Developer",
    image: "https://i.imgur.com/c9y8sYQ.png",
    bio: "Leads the team with expertise in mobile app development and project management."
  },
  {
    name: "Moath Algahtani",
    role: "AI Developer",
    image: "https://i.imgur.com/k4NxRsW.png",
    bio: "Expert in machine learning models and AI implementation for road anomaly detection."
  },
  {
    name: "Zaid Alshahrari",
    role: "System Analyst",
    image: "https://i.imgur.com/PxQcZ9u.png",
    bio: "Analyzes complex systems requirements and designs efficient software architectures."
  },
  {
    name: "Sulaimman Alshamri",
    role: "Full Stack Developer",
    image: "https://i.imgur.com/hv5B7SA.png",
    bio: "Creates seamless experiences across both front-end and back-end technologies."
  },
  {
    name: "Mohab Alraddadi",
    role: "Mobile Developer/UI/UX Designer",
    image: "https://i.imgur.com/bK6RD2E.png",
    bio: "Designs intuitive interfaces and develops elegant mobile solutions."
  }
];

const values = [
  {
    icon: faLightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with AI and mobile technology to create unprecedented solutions.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: faRoad,
    title: "Impact",
    description: "Making roads safer and more efficient for everyone through data-driven insights and actionable intelligence.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: faChartLine,
    title: "Excellence",
    description: "Delivering the highest quality solutions through rigorous testing, continuous improvement, and attention to detail.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: faUsers,
    title: "Collaboration",
    description: "Working together across disciplines to combine our strengths and build better infrastructure for communities.",
    color: "from-orange-500 to-pink-500"
  }
];

const milestones = [
  {
    year: "2024-September",
    title: "Project Inception",
    description: "The idea for Tareeqi was born at Jouf University when our team recognized the potential for smartphone sensors to transform road monitoring."
  },
  {
    year: "2024-October",
    title: "Research & Algorithm Development",
    description: "Our team spent months researching sensor calibration and developing machine learning algorithms to accurately detect road anomalies."
  },
  {
    year: "2025-January",
    title: "Prototype Testing",
    description: "The first prototype was developed and tested on local roads, proving the concept's viability and accuracy."
  },
  {
    year: "2025-April",
    title: "Platform Launch",
    description: "Tareeqi launched as a complete platform, bringing innovative road monitoring technology to drivers and municipalities alike."
  }
];

export default function About() {
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
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

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
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
        className="min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden"
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
            About Tareeqi
          </motion.h1>
          
          <motion.p 
            className={`${outfit.className} text-xl text-purple-50/90 max-w-2xl mx-auto mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're revolutionizing road monitoring with cutting-edge technology
            that empowers communities to build safer, more efficient infrastructure.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {['Innovative', 'AI-Powered', 'Community-Driven', 'Vision 2030 Aligned'].map((tag, i) => (
              <motion.span 
                key={i}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
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

        {/* Wave Effect */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,128C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></motion.path>
          </svg>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-indigo-100 rounded-full opacity-50"></div>
              
              <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100 shadow-lg">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faBullseye} className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className={`${spaceGrotesk.className} text-3xl font-bold mb-6 text-gray-900`}>
                  Our Vision
                </h2>
                
                <p className={`${outfit.className} text-lg text-gray-600 leading-relaxed mb-6`}>
                  To create a world where every road is monitored, maintained, and optimized in real-time, 
                  ensuring safer journeys and smarter infrastructure for all.
                </p>
                
                <div className="border-l-4 border-purple-500 pl-4 italic text-gray-500">
                  We believe technology should empower communities to solve infrastructure challenges efficiently and collaboratively.
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100 shadow-lg">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className={`${spaceGrotesk.className} text-3xl font-bold mb-6 text-gray-900`}>
                  Our Mission
                </h2>
                
                <p className={`${outfit.className} text-lg text-gray-600 leading-relaxed mb-6`}>
                  TAREEQI is an AI-powered mobile and web platform designed to assess road quality using only smartphone sensors. 
                  By turning drivers into data contributors, we empower cities with real-time insights into road conditions.
                </p>
                
                <ul className="space-y-3">
                  {['Support smarter urban planning', 'Enhance road safety', 'Reduce maintenance costs', 'Align with Vision 2030'].map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4 text-indigo-500 mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>
              Our Core Values
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600`}>
              The principles that guide our innovation and development
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg h-full transform transition-all duration-300 hover:shadow-xl border border-gray-100"
                variants={cardVariant}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 text-gray-900`}>
                  {value.title}
                </h3>
                
                <p className={`${outfit.className} text-gray-600`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>
              Our Journey
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600`}>
              From concept to innovation - the story of Tareeqi
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 transform md:translate-x-[-50%]"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-12 md:pr-0' : 'md:mr-auto md:pr-12 md:pl-0'} md:w-1/2 pl-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 md:left-auto md:right-auto md:translate-x-[-50%] top-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-purple-500 z-10"
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '0', [index % 2 === 0 ? '' : 'left']: '0' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                >
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                </motion.div>
                
                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 ml-2 md:ml-0">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                    {milestone.year}
                  </span>
                  <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-3 text-gray-900`}>
                    {milestone.title}
                  </h3>
                  <p className={`${outfit.className} text-gray-600`}>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white opacity-20"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 9) % 100}%`,
              }}
              animate={{
                y: [0, -20, 0, 20, 0],
                x: [0, 20, 0, -20, 0],
                scale: [1, 1.5, 1, 0.8, 1],
                opacity: [0.1, 0.3, 0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + (i % 5),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6`}>
              Meet Our Team
            </h2>
            <p className={`${outfit.className} text-xl text-white/80`}>
              The talented individuals behind Tareeqi's innovation
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                variants={cardVariant}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setActiveMember(index)}
                onHoverEnd={() => setActiveMember(null)}
              >
                <motion.div 
                  className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                
                <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-2`}>
                  {member.name}
                </h3>
                
                <p className={`${outfit.className} text-purple-200 mb-4`}>
                  {member.role}
                </p>
                
                <motion.p 
                  className={`${outfit.className} text-white/70 text-sm`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeMember === index ? 1 : 0,
                    height: activeMember === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {member.bio}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* University Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-lg border border-purple-100 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md"
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <FontAwesomeIcon icon={faUniversity} className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className={`${spaceGrotesk.className} text-3xl font-bold mb-6 text-gray-900`}>
              Jouf University
            </h2>
            
            <h3 className={`${outfit.className} text-xl text-purple-800 mb-8`}>
              College of Computer and Information Sciences
            </h3>
            
            <p className={`${outfit.className} text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto`}>
              Tareeqi is proudly developed at Jouf University, combining academic excellence with practical innovation
              to create solutions that make a real difference in our communities and align with Saudi Arabia's Vision 2030.
            </p>
            
            <a href="https://ju.edu.sa/ar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md">
              <FontAwesomeIcon icon={faGlobe} className="w-5 h-5"  />
              Visit University Website
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}