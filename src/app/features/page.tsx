'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faBrain, faChartLine, faBell, faMoneyBillWave, faMobileScreen, faMapMarkedAlt, faShieldAlt, faCar, faGears, faArrowRight, faUserFriends, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

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

const features = [
  {
    icon: faRoad,
    title: "Real-time Road Monitoring",
    description: "Continuously collects road data using smartphone sensors, providing up-to-the-minute insights into road conditions.",
    details: [
      "Smartphone sensor integration",
      "Continuous data collection",
      "Real-time processing",
      "Instant condition updates"
    ],
    color: "from-indigo-400 to-indigo-600"
  },
  {
    icon: faBrain,
    title: "AI Anomaly Detection",
    description: "Advanced machine learning models (XGBoost) detect road issues such as potholes with high accuracy.",
    details: [
      "XGBoost algorithm",
      "Pattern recognition",
      "Automated issue detection",
      "High accuracy rates"
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: faChartLine,
    title: "Interactive Dashboard",
    description: "Provides real-time heatmaps and condition summaries to help authorities improve maintenance planning.",
    details: [
      "Real-time heatmaps",
      "Condition analytics",
      "Maintenance planning tools",
      "Data visualization"
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: faBell,
    title: "Driver Alerts & Reports",
    description: "Sends real-time alerts and generates comprehensive session-based reports for drivers.",
    details: [
      "Instant notifications",
      "Detailed reports",
      "Session tracking",
      "Performance metrics"
    ],
    color: "from-red-400 to-red-600"
  },
  {
    icon: faMoneyBillWave,
    title: "Cost-effective & Scalable",
    description: "Uses smartphones instead of expensive vehicles — making it highly scalable and affordable.",
    details: [
      "Smartphone-based solution",
      "Minimal infrastructure",
      "Easy deployment",
      "Cost-effective scaling"
    ],
    color: "from-green-400 to-green-600"
  },
  {
    icon: faUserFriends,
    title: "Community-Driven Approach",
    description: "Leverages crowdsourced data from users to build a comprehensive database of road conditions.",
    details: [
      "Crowdsourced data collection",
      "Community contribution system",
      "Data validation mechanism",
      "Continuous improvement"
    ],
    color: "from-yellow-400 to-yellow-600"
  }
];

const benefitsList = [
  {
    title: "For Drivers",
    icon: faCar,
    benefits: [
      "Avoid road hazards and damage to vehicles",
      "Save time with optimal route planning",
      "Contribute to safer road infrastructure",
      "Access detailed trip reports and statistics"
    ]
  },
  {
    title: "For Municipalities",
    icon: faGears,
    benefits: [
      "Prioritize maintenance based on data",
      "Reduce infrastructure maintenance costs",
      "Improve emergency response planning",
      "Better budget allocation for road projects"
    ]
  },
  {
    title: "For Communities",
    icon: faUserFriends,
    benefits: [
      "Safer roads for all users",
      "Reduced accident rates from hazard avoidance",
      "Community engagement in infrastructure improvement",
      "Contribute to greener transportation with optimized routes"
    ]
  }
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
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

  const featureItem = {
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
            Powerful Features
          </motion.h1>
          
          <motion.p 
            className={`${outfit.className} text-xl text-purple-50/90 max-w-2xl mx-auto mb-12`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover how Tareeqi uses advanced technology to revolutionize road monitoring,
            making driving safer and infrastructure management smarter.
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

      {/* Feature Cards Section */}
      <section className="py-20 bg-white" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>
              Core Features
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600 mb-8`}>
              Tareeqi combines powerful technologies to create a comprehensive road monitoring solution
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg h-full transform transition-all duration-300 hover:shadow-xl border border-gray-100"
                variants={featureItem}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setActiveFeature(index)}
                onHoverEnd={() => setActiveFeature(null)}
              >
                {/* Feature card glow effect on hover */}
                <motion.div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 blur group-hover:opacity-50 transition duration-500`}
                  animate={{ opacity: activeFeature === index ? 0.2 : 0 }}
                ></motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FontAwesomeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 text-gray-900`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`${outfit.className} text-gray-600 mb-6`}>
                    {feature.description}
                  </p>
                  
                  <motion.ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.1 * idx + 0.2, duration: 0.2 }}
                          viewport={{ once: true }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits for Everyone
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600 mb-8`}>
              Tareeqi creates value for individual drivers, city planners, and entire communities
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefitsList.map((benefitGroup, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden group"
                variants={featureItem}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Decorative circle */}
                <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={benefitGroup.icon} className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-6 text-gray-900`}>
                    {benefitGroup.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {benefitGroup.benefits.map((benefit, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="mr-3 text-purple-500"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.1 * idx + 0.2, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                        </motion.div>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-gradient-to-br from-gray-900/10 via-transparent to-gray-800/10 opacity-30 mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6`}>
              Experience Tareeqi Today
            </h2>
            <p className={`${outfit.className} text-xl text-white/80 mb-8`}>
              Join our beta program and be among the first to help shape the future of road monitoring technology
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="flex-1 text-left">
                  <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-4`}>Ready to get started?</h3>
                  <p className={`${outfit.className} text-white/80 mb-6`}>
                    Download the beta app and join our community of early adopters helping make roads safer for everyone.
                  </p>
                  <motion.a 
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faHeadset} className="w-5 h-5" />
                    Contact Our Team
                  </motion.a>
                </div>
                
                <div className="w-[1px] h-20 bg-white/20 hidden md:block"></div>
                
                <div className="flex-1 text-left">
                  <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-4`}>Have questions?</h3>
                  <p className={`${outfit.className} text-white/80 mb-6`}>
                    Our support team is ready to help you get the most out of Tareeqi. Contact us anytime.
                  </p>
                  <motion.a 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faMobileScreen} className="w-5 h-5" />
                    Join Beta Program
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 