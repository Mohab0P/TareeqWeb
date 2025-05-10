'use client';

import { Space_Grotesk, Outfit } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { PageTransition } from '@/components/ui/page-transition';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { AnimatedForm, AnimatedFormField, AnimatedFormTitle, AnimatedSubmitButton } from '@/components/ui/animated-form';
import { motion } from 'framer-motion';

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
    type: 'contact' as 'contact' | 'beta'
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
      if (!formData.subject?.trim()) {
        newErrors.subject = 'Subject is required';
      }
      if (!formData.message?.trim()) {
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
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        type: formData.type,
        ...(formData.type === 'contact' && {
          subject: formData.subject,
          message: formData.message
        })
      };

      const response = await fetch('https://email-api-9y3z.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();

      if (response.ok) {
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
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error 
          ? `Unable to send message: ${error.message}. Please try again or email us directly at tareeqiapp@gmail.com`
          : 'Unable to send message. Please try again or email us directly at tareeqiapp@gmail.com'
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
    <div className={`${spaceGrotesk.variable} ${outfit.variable} font-sans`}>
      <Header />
      <main className="min-h-screen">
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
              Contact Us
            </motion.h1>
            
            <motion.p 
              className={`${outfit.className} text-xl text-purple-50/90 max-w-2xl mx-auto mb-8`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in touch with our team or join our beta program to help shape the future of road monitoring
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {['Questions', 'Support', 'Feedback', 'Beta Access'].map((tag, i) => (
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

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div 
                className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <motion.h2 
                    className={`${spaceGrotesk.className} text-2xl md:text-3xl font-bold mb-4 text-gray-900`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {formData.type === 'beta' ? 'Join Beta Program' : 'Send us a message'}
                  </motion.h2>
                  <motion.p
                    className={`${outfit.className} text-gray-600`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {formData.type === 'beta' 
                      ? 'Be among the first to experience Tareeqi and help shape its future.' 
                      : 'Have questions or feedback? We\'d love to hear from you.'}
                  </motion.p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <motion.div 
                      className="flex-1 min-w-[100px] relative cursor-pointer overflow-hidden rounded-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData(prev => ({ ...prev, type: 'contact' }))}
                    >
                      <input 
                        type="radio" 
                        id="contact-type" 
                        name="type" 
                        value="contact"
                        className="sr-only"
                        checked={formData.type === 'contact'}
                        onChange={handleChange}
                      />
                      <label 
                        htmlFor="contact-type" 
                        className={`flex flex-col items-center justify-center p-4 h-full border-2 rounded-xl transition-all ${
                          formData.type === 'contact' 
                            ? 'bg-purple-50 border-purple-500 text-purple-900' 
                            : 'bg-white border-gray-200 text-gray-700'
                        }`}
                      >
                        <FontAwesomeIcon 
                          icon={faEnvelope} 
                          className={`w-6 h-6 mb-2 ${formData.type === 'contact' ? 'text-purple-600' : 'text-gray-400'}`} 
                        />
                        <span className="font-medium">Contact Us</span>
                      </label>
                    </motion.div>
                    
                    <motion.div 
                      className="flex-1 min-w-[100px] relative cursor-pointer overflow-hidden rounded-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData(prev => ({ ...prev, type: 'beta' }))}
                    >
                      <input 
                        type="radio" 
                        id="beta-type" 
                        name="type" 
                        value="beta"
                        className="sr-only"
                        checked={formData.type === 'beta'}
                        onChange={handleChange}
                      />
                      <label 
                        htmlFor="beta-type" 
                        className={`flex flex-col items-center justify-center p-4 h-full border-2 rounded-xl transition-all ${
                          formData.type === 'beta' 
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-900' 
                            : 'bg-white border-gray-200 text-gray-700'
                        }`}
                      >
                        <FontAwesomeIcon 
                          icon={faPhone} 
                          className={`w-6 h-6 mb-2 ${formData.type === 'beta' ? 'text-indigo-600' : 'text-gray-400'}`} 
                        />
                        <span className="font-medium">Join Beta</span>
                      </label>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`peer w-full px-4 pt-6 pb-2 bg-gray-50 border-2 ${
                          errors.name ? 'border-red-400' : formData.name ? 'border-green-400' : 'border-gray-200'
                        } rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all`}
                        placeholder=" "
                        required
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute top-2 left-4 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                      >
                        Your Name
                      </label>
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-1 text-sm text-red-500 flex items-center"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`peer w-full px-4 pt-6 pb-2 bg-gray-50 border-2 ${
                          errors.email ? 'border-red-400' : formData.email ? 'border-green-400' : 'border-gray-200'
                        } rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all`}
                        placeholder=" "
                        required
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute top-2 left-4 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-1 text-sm text-red-500 flex items-center"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`peer w-full px-4 pt-6 pb-2 bg-gray-50 border-2 ${
                        errors.phone ? 'border-red-400' : formData.phone ? 'border-green-400' : 'border-gray-200'
                      } rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all`}
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute top-2 left-4 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                    >
                      Phone Number
                    </label>
                    {errors.phone && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-1 text-sm text-red-500 flex items-center"
                      >
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {errors.phone}
                      </motion.p>
                    )}
                  </motion.div>

                  {formData.type === 'contact' && (
                    <>
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`peer w-full px-4 pt-6 pb-2 bg-gray-50 border-2 ${
                            errors.subject ? 'border-red-400' : formData.subject ? 'border-green-400' : 'border-gray-200'
                          } rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all`}
                          placeholder=" "
                          required
                        />
                        <label 
                          htmlFor="subject" 
                          className="absolute top-2 left-4 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                        >
                          Subject
                        </label>
                        {errors.subject && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-1 text-sm text-red-500 flex items-center"
                          >
                            <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                            {errors.subject}
                          </motion.p>
                        )}
                      </motion.div>
                      
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`peer w-full px-4 pt-6 pb-2 bg-gray-50 border-2 ${
                            errors.message ? 'border-red-400' : formData.message ? 'border-green-400' : 'border-gray-200'
                          } rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none`}
                          placeholder=" "
                          required
                        ></textarea>
                        <label 
                          htmlFor="message" 
                          className="absolute top-2 left-4 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                        >
                          Your Message
                        </label>
                        {errors.message && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-1 text-sm text-red-500 flex items-center"
                          >
                            <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                            {errors.message}
                          </motion.p>
                        )}
                      </motion.div>
                    </>
                  )}

                  <motion.button
                    type="submit"
                    className={`w-full py-4 px-6 ${
                      formData.type === 'beta' 
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600' 
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600'
                    } text-white font-semibold rounded-xl shadow-lg hover:translate-y-[-2px] transition-all disabled:opacity-70`}
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>{formData.type === 'beta' ? 'Registering...' : 'Sending...'}</span>
                      </div>
                    ) : (
                      <span>{formData.type === 'beta' ? 'Register for Beta Access' : 'Send Message'}</span>
                    )}
                  </motion.button>

                  {submitStatus.type !== 'idle' && (
                    <motion.div 
                      className={`p-4 rounded-xl ${
                        submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex">
                        <div className={`w-6 h-6 rounded-full ${
                          submitStatus.type === 'success' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
                        } flex items-center justify-center mr-3 flex-shrink-0`}>
                          {submitStatus.type === 'success' ? '✓' : '✕'}
                        </div>
                        <p>{submitStatus.message}</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="lg:col-span-2 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Decorative particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white opacity-20"
                      style={{
                        left: `${(i * 8) % 100}%`,
                        top: `${(i * 11) % 100}%`,
                      }}
                      animate={{
                        y: [0, -10, 0, 10, 0],
                        opacity: [0.1, 0.3, 0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 5 + (i % 3),
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.h3 
                    className={`${spaceGrotesk.className} text-2xl font-bold mb-6`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Get in Touch
                  </motion.h3>
                  
                  <div className="space-y-6 mb-8">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                        <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Email Us</h4>
                        <p className="text-purple-200">tareeqiapp@gmail.com</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Call Us</h4>
                        <p className="text-purple-200">+966 123 456 7890</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Visit Us</h4>
                        <p className="text-purple-200">Jouf University, Sakaka, Saudi Arabia</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-white font-medium mb-4">Connect with us</h4>
                    <div className="flex gap-4">
                      {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social, i) => (
                        <motion.a 
                          key={i}
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social.charAt(0)}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 