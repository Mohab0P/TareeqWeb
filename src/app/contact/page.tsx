'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    type: 'contact' // 'contact' or 'beta'
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
    
    if (formData.type === 'beta') {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    } else {
      if (!formData.subject.trim()) {
        newErrors.subject = 'Subject is required';
      }
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (formData.message.length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
      }
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
          type: formData.type
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: formData.type === 'beta' 
            ? 'Registration successful! 🎉 Please check your email (including spam folder) for confirmation.'
            : 'Message sent successfully! 🎉 We will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          type: 'contact'
        });
        setErrors({});
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Unable to send message. Please try again or email us directly at tareeqiapp@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      <main className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${spaceGrotesk.variable} ${outfit.variable} font-sans mt-16`}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold mb-6`}>
                Contact Us
              </h1>
              <p className={`${outfit.className} text-xl text-white/80`}>
                Get in touch with our team or join our beta program
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

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-6 text-gray-900`}>
                  {formData.type === 'beta' ? 'Join Beta Program' : 'Send us a message'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="type" className={`${outfit.className} block text-sm font-medium text-gray-700 mb-2`}>
                      Form Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="contact">Contact Form</option>
                      <option value="beta">Beta Registration</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className={`${outfit.className} block text-sm font-medium text-gray-700 mb-2`}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className={`${outfit.className} block text-sm font-medium text-gray-700 mb-2`}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  {formData.type === 'beta' ? (
                    <div>
                      <label htmlFor="phone" className={`${outfit.className} block text-sm font-medium text-gray-700 mb-2`}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  ) : (
                    <>
                      <div>
                        <label htmlFor="subject" className={`${outfit.className} block text-sm font-medium text-gray-700 mb-2`}>
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className={`${outfit.className} block text-sm font-medium text-gray-700 mb-2`}>
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </>
                  )}
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
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className={`relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                      {isSubmitting ? 'Sending...' : formData.type === 'beta' ? 'Join Beta Program' : 'Send Message'}
                    </span>
                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-6 text-gray-900`}>
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className={`${spaceGrotesk.className} text-lg font-semibold text-gray-900`}>
                          Email
                        </h3>
                        <p className={`${outfit.className} text-gray-600`}>
                        tareeqiapp@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className={`${spaceGrotesk.className} text-lg font-semibold text-gray-900`}>
                          Phone
                        </h3>
                        <p className={`${outfit.className} text-gray-600`}>
                          +966 552626165
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className={`${spaceGrotesk.className} text-lg font-semibold text-gray-900`}>
                          Location
                        </h3>
                        <p className={`${outfit.className} text-gray-600`}>
                          Jouf University<br />
                          College of Computer and Information Sciences<br />
                          Sakaka, Saudi Arabia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-6 text-gray-900`}>
                    Find Us
                  </h2>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1234567890123!2d40.1816113471303!3d29.960050790146333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzM2LjIiTiA0MMKwMTAnNTMuOCJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 