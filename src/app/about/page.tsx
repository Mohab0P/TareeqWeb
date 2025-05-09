'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRoad, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

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
    image: "/bahaa.png"
  },
  {
    name: "Moath Algahtani",
    role: "AI Developer",
    image: "/moath.png"
  },
  {
    name: "Zaid Alshahrari",
    role: "System Analyst",
    image: "/zaid.png"
  },
  {
    name: "Sulaimman Alshamri",
    role: "Full Stack Developer",
    image: "/sulaiman.png"
  },
  {
    name: "Mohab Alraddadi",
    role: "Mobile Developer/UI/UX Designer",
    image: "/mohab.png"
  }
];

const values = [
  {
    icon: faLightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with AI and mobile technology"
  },
  {
    icon: faRoad,
    title: "Impact",
    description: "Making roads safer and more efficient for everyone"
  },
  {
    icon: faChartLine,
    title: "Excellence",
    description: "Delivering the highest quality solutions and services"
  },
  {
    icon: faUsers,
    title: "Collaboration",
    description: "Working together to build a better future"
  }
];

export default function About() {
  return (
    <>
      <Header />
      <main className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${spaceGrotesk.variable} ${outfit.variable} font-sans mt-16`}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold mb-6`}>
                About Tareeqi
              </h1>
              <p className={`${outfit.className} text-xl text-white/80`}>
                Transforming road monitoring with AI technology
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

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900`}>
                Our Mission
              </h2>
              <p className={`${outfit.className} text-xl text-gray-600 leading-relaxed mb-12`}>
                TAREEQI is an AI-powered mobile and web platform designed to assess road quality using only smartphone sensors. By turning drivers into data contributors, it empowers cities with real-time insights into road conditions. The system supports smarter urban planning, better safety, and aligns with Vision 2030 for modern infrastructure development.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900`}>
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-4 text-gray-900`}>
                    {value.title}
                  </h3>
                  <p className={`${outfit.className} text-gray-600`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900`}>
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-2 text-gray-900`}>
                    {member.name}
                  </h3>
                  <p className={`${outfit.className} text-purple-600`}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* University Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>
              Jouf University
            </h2>
            <p className={`${outfit.className} text-xl text-gray-600 mb-8 max-w-2xl mx-auto`}>
              College of Computer and Information Sciences
            </p>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
              <p className={`${outfit.className} text-gray-600 leading-relaxed`}>
                Tareeqi is proudly developed at Jouf University, combining academic excellence with practical innovation to create solutions that make a real difference in our communities.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 