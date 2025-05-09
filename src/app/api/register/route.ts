/**
 * Note: This API route will NOT work on GitHub Pages
 * 
 * GitHub Pages only serves static files and doesn't support server-side code.
 * For form handling, we use Formspree in the client-side code instead.
 * 
 * This file exists only for reference and for local development testing.
 */

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tareeqiapp@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real server environment, you would send an email here
    // For example, using nodemailer or another email service
    
    console.log('Registration data received:', data);
    
    // This simulates successful processing
    return NextResponse.json({ 
      success: true,
      message: 'Registration successful'
    });
    
  } catch (error) {
    console.error('Error in register API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process registration'
      },
      { status: 500 }
    );
  }
} 