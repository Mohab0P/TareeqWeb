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

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, type, message } = data;

    // Send confirmation email to user
    await transporter.sendMail({
      from: 'tareeqiapp@gmail.com',
      to: email,
      subject: type === 'beta' ? 'Welcome to Tareeqi Beta Program!' : 'Thank you for contacting Tareeqi',
      html: type === 'beta' ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6b46c1;">Welcome to Tareeqi Beta Program! 🎉</h2>
          <p>Dear ${name},</p>
          <p>Thank you for registering for the Tareeqi Beta Program. We're excited to have you on board!</p>
          <p>Here's what happens next:</p>
          <ol>
            <li>Our team will review your application</li>
            <li>You'll receive access to the beta version</li>
            <li>We'll keep you updated on the launch</li>
          </ol>
          <p>If you have any questions, feel free to reach out to us.</p>
          <p>Best regards,<br>The Tareeqi Team</p>
        </div>
      ` : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6b46c1;">Thank you for contacting Tareeqi!</h2>
          <p>Dear ${name},</p>
          <p>We've received your message and will get back to you shortly.</p>
          <p>Your message:</p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #6b46c1;">
            ${message}
          </blockquote>
          <p>Best regards,<br>The Tareeqi Team</p>
        </div>
      `
    });

    // Send notification to admin
    await transporter.sendMail({
      from: 'tareeqiapp@gmail.com',
      to: 'muhab.alraddadi@gmail.com',
      subject: type === 'beta' ? 'New Beta Registration' : 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6b46c1;">${type === 'beta' ? 'New Beta Registration' : 'New Contact Form Submission'}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${type === 'contact' ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        </div>
      `
    });

    return NextResponse.json({ 
      success: true,
      message: type === 'beta' 
        ? 'Registration successful! 🎉 Please check your email (including spam folder) for confirmation. We will contact you soon with next steps.'
        : 'Message sent successfully! 🎉 We will get back to you soon.'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email',
        message: 'Unable to submit form. Please try again or contact support at tareeqiapp@gmail.com'
      },
      { status: 500 }
    );
  }
} 