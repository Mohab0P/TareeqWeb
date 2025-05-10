import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  type: 'beta' | 'contact';
  subject?: string;
  message?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export interface SubmitStatus {
  type: 'idle' | 'success' | 'error';
  message: string;
} 