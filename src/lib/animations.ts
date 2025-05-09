/**
 * Animation utility file with reusable animation variants for the entire application
 */

import { Variants } from 'framer-motion';

// Default fade up animation (good for page sections)
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

// Staggered children animation (good for lists)
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Item animation for staggered lists
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

// Subtle scale animation for buttons or interactive elements
export const scaleVariants: Variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.98 }
};

// Form element animations
export const formVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const formInputVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

// Mobile-specific scroll animations
export const mobileScrollVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier for smoother motion
    }
  }
};

// Page transition variants
export const pageTransitionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

// Cool reveal animation for images and media
export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0% 0% 100% 0%)'
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.8,
      ease: [0.645, 0.045, 0.355, 1.0] // cubic-bezier
    }
  }
};

// For responsive hover effects (better on mobile)
export const hoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
}; 