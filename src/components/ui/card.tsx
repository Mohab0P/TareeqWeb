'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CFardHeader({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: CardProps) {
  return (
    <h3 className={`text-xl font-semibold ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 bg-gray-50 ${className}`}>
      {children}
    </div>
  );
}

export function CardMedia({ children, className = '' }: CardProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export function CardBadge({ children, className = '' }: CardProps) {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${className}`}>
      {children}
    </span>
  );
} 