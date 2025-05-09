'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { formVariants, formInputVariants } from '@/lib/animations';

interface AnimatedFormProps {
  children: ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

interface AnimatedInputProps {
  children: ReactNode;
  className?: string;
  custom?: number;
}

export function AnimatedForm({ children, className = '', onSubmit }: AnimatedFormProps) {
  return (
    <motion.form
      className={`space-y-4 ${className}`}
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onSubmit={onSubmit}
    >
      {children}
    </motion.form>
  );
}

export function AnimatedFormField({ children, className = '', custom = 0 }: AnimatedInputProps) {
  return (
    <motion.div
      className={`${className}`}
      variants={formInputVariants}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSubmitButton({ children, className = '' }: AnimatedInputProps) {
  return (
    <motion.button
      type="submit"
      className={`w-full py-2 px-4 bg-primary text-white rounded-md shadow hover:bg-primary/90 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

export function AnimatedFormTitle({ children, className = '' }: AnimatedInputProps) {
  return (
    <motion.h2
      className={`text-2xl font-bold mb-6 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
} 