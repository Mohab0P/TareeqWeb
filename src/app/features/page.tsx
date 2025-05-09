'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faBrain, faChartLine, faBell, faMoneyBillWave, faMobileScreen, faMapMarkedAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export default function Features() {
  return (
    <>
      <Header />
      <main className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${spaceGrotesk.variable} ${outfit.variable} font-sans`}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold mb-6`}>
                Powerful Features
              </h1>
              <p className={`${outfit.className} text-xl text-white/80`}>
                Discover how Tareeqi revolutionizes road monitoring with cutting-edge technology
              </p>
            </div>
          </div>
          
          {/* Wave Effect */}
          <div className="absolute -bottom-1 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,128C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <FontAwesomeIcon icon={feature.icon} className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 text-gray-900`}>
                    {feature.title}
                  </h3>
                  <p className={`${outfit.className} text-gray-600 mb-6`}>
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>
              Ready to Transform Road Monitoring?
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600 mb-8 max-w-2xl mx-auto`}>
              Join the beta program and be among the first to experience the future of road monitoring.
            </p>
            <a 
              href="/"
              className={`${outfit.className} inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all`}
            >
              Join Beta Program
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 