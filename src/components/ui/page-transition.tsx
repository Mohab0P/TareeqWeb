'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/animations';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        key={Math.random().toString()} // Force re-render on route change
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageTransitionVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function FadeInWrapper({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({ children, className = '', delay = 0 }: PageTransitionProps & { delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ 
  children, 
  className = '', 
  direction = 'left',
  delay = 0 
}: PageTransitionProps & { 
  direction?: 'left' | 'right'; 
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: 'spring',
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
} 