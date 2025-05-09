'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
}

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 }
  }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      delay: 0.2,
      duration: 0.3
    }
  }
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '' }: CardProps) {
  return (
    <motion.div 
      className={`p-6 ${className}`}
      variants={contentVariants}
    >
      {children}
    </motion.div>
  );
}

export function CardTitle({ children, className = '' }: CardProps) {
  return (
    <motion.h3 
      className={`text-xl font-semibold ${className}`}
      variants={contentVariants}
    >
      {children}
    </motion.h3>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <motion.div 
      className={`p-6 ${className}`}
      variants={contentVariants}
    >
      {children}
    </motion.div>
  );
}

export function CardFooter({ children, className = '' }: CardProps) {
  return (
    <motion.div 
      className={`p-6 bg-gray-50 ${className}`}
      variants={contentVariants}
    >
      {children}
    </motion.div>
  );
}

export function CardMedia({ children, className = '' }: CardProps) {
  return (
    <motion.div 
      className={`relative ${className}`}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { delay: 0.1, duration: 0.4 }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function CardBadge({ children, className = '' }: CardProps) {
  return (
    <motion.span 
      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.span>
  );
} 