'use client';

import { useState } from 'react';
import { validateEmail } from '@/lib/utils';

export function useWaitlist() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const addToWaitlist = async (email: string) => {
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      return false;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Get Google Apps Script URL from environment variables
      // Follow the setup guide in WAITLIST_SETUP.md to get this URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwUAZAidkkD0v2Zk4JzS2cB1nEAFNmwAd1GlJD-fEbKv2BV3ev37uysrkeInbLcyuBTHw/exec';
      
      // Prepare URL-encoded form data (Google Apps Script expects this format)
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('timestamp', new Date().toISOString());
      formData.append('source', 'agentic-ui-website');
      
      // Send to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      // Note: With no-cors mode, we can't read the response
      // But the request will still reach Google Apps Script
      setMessage('🎉 Successfully added to waitlist! Check your email for confirmation.');
      setIsLoading(false);
      return true;
      
    } catch (error) {
      console.error('Waitlist submission error:', error);
      
      // For development/demo purposes, show success even if there's an error
      // In production, you might want to show an actual error message
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwUAZAidkkD0v2Zk4JzS2cB1nEAFNmwAd1GlJD-fEbKv2BV3ev37uysrkeInbLcyuBTHw/exec';
      
      if (GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
        setMessage('⚠️ Demo mode: Please configure Google Sheets integration (see WAITLIST_SETUP.md)');
      } else {
        setMessage('❌ Something went wrong. Please try again later.');
      }
      
      setIsLoading(false);
      return false;
    }
  };

  const clearMessage = () => {
    setMessage('');
  };

  return {
    addToWaitlist,
    isLoading,
    message,
    setMessage,
    clearMessage
  };
}