'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot, faBell, faChartLine, faSync } from '@fortawesome/free-solid-svg-icons';

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
  return (
    <>
      <Header />
      <main className={`${spaceGrotesk.variable} ${outfit.variable} font-sans`}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-500 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold text-center mb-6`}>
              How TAREEQI Works
            </h1>
            <p className={`${outfit.className} text-xl text-center max-w-3xl mx-auto text-white/90`}>
              A revolutionary approach to road monitoring using AI and community input
            </p>
          </div>
          
          {/* Wave effect at bottom */}
          <div className="absolute -bottom-1 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,128C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* How It Works Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-20">
              {/* Phase 1: Manual Labeling */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="bg-purple-100 p-4 rounded-2xl inline-block mb-4">
                    <FontAwesomeIcon icon={faUser} className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-4`}>
                    Manual Labeling by Drivers (Phase 1)
                  </h2>
                  <p className={`${outfit.className} text-gray-600 leading-relaxed`}>
                    In the initial phase, drivers label road anomalies such as potholes or bumps. 
                    These labels are used to train and improve the AI model.
                  </p>
                </div>
                <div className="md:w-1/2">
                  {/* Image: report-form.png - A screenshot of the app's reporting form */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/report-form.png"
                      alt="Road Issue Reporting Form"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Phase 2: AI Detection */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="bg-indigo-100 p-4 rounded-2xl inline-block mb-4">
                    <FontAwesomeIcon icon={faRobot} className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-4`}>
                    AI Anomaly Detection (Phase 2)
                  </h2>
                  <p className={`${outfit.className} text-gray-600 leading-relaxed`}>
                    The trained AI model (XGBoost) processes the sensor data to automatically 
                    detect road issues with high accuracy.
                  </p>
                </div>
                <div className="md:w-1/2">
                  {/* Image: ml-visualization.png - A chart showing ML model performance */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/ml-visualization.png"
                      alt="AI Model Visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Phase 3: Real-time Alerts */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="bg-blue-100 p-4 rounded-2xl inline-block mb-4">
                    <FontAwesomeIcon icon={faBell} className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-4`}>
                    Real-time Alerts & Dashboard Insights
                  </h2>
                  <p className={`${outfit.className} text-gray-600 leading-relaxed`}>
                    The system sends real-time alerts to drivers and displays road heatmaps 
                    and reports on a dashboard for city authorities.
                  </p>
                </div>
                <div className="md:w-1/2">
                  {/* Image: dashboard.png - Admin dashboard screenshot */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/dashboard.png"
                      alt="Admin Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Phase 4: Continuous Learning */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="bg-green-100 p-4 rounded-2xl inline-block mb-4">
                    <FontAwesomeIcon icon={faSync} className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-4`}>
                    Continuous Learning (Feedback Loop)
                  </h2>
                  <p className={`${outfit.className} text-gray-600 leading-relaxed`}>
                    The model continuously improves based on user feedback and new labeled data, 
                    making the system smarter over time.
                  </p>
                </div>
                <div className="md:w-1/2">
                  {/* Image: feedback-loop.png - Flowchart showing the learning cycle */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/feedback-loop.png"
                      alt="Continuous Learning Cycle"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="max-w-3xl mx-auto mt-20 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-4`}>
                  Summary
                </h3>
                <p className={`${outfit.className} text-lg text-white/90`}>
                  TAREEQI combines smartphone sensors, machine learning, and community input 
                  to make roads safer, smarter, and more manageable — all in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 