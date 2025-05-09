'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { fadeUpVariants, mobileScrollVariants, revealVariants } from '@/lib/animations';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'reveal';
}

export function ScrollAnimation({
  children,
  className = '',
  variants,
  delay = 0,
  threshold = 0.3,
  direction = 'up'
}: ScrollAnimationProps) {
  // Select appropriate animation variant based on direction
  const getVariants = (): Variants => {
    if (variants) return variants;

    switch (direction) {
      case 'up':
        return fadeUpVariants;
      case 'down':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: (custom = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: custom * 0.1 + delay,
              duration: 0.5
            }
          })
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: (custom = 0) => ({
            opacity: 1,
            x: 0,
            transition: {
              delay: custom * 0.1 + delay,
              duration: 0.5
            }
          })
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: (custom = 0) => ({
            opacity: 1,
            x: 0,
            transition: {
              delay: custom * 0.1 + delay,
              duration: 0.5
            }
          })
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: (custom = 0) => ({
            opacity: 1,
            scale: 1,
            transition: {
              delay: custom * 0.1 + delay,
              duration: 0.5
            }
          })
        };
      case 'reveal':
        return revealVariants;
      default:
        return mobileScrollVariants;
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// Staggered container for list items
export function StaggeredContainer({ 
  children, 
  className = '', 
  delay = 0.2 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated item for staggered lists
export function StaggeredItem({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 }
        }
      }}
    >
      {children}
    </motion.div>
  );
} 