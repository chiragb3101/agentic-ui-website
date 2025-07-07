'use client';

import React, { useState } from 'react';
import { Hero } from './Hero';
import { Button } from '../ui/Button';
import { useWaitlist } from '../../hooks/useWaitlist';

interface HomeProps {
  onPageChange: (page: string) => void;
}

export function Home({ onPageChange }: HomeProps) {
  const [email, setEmail] = useState('');
  const { addToWaitlist, isLoading, message } = useWaitlist();

  const handleJoinWaitlist = () => {
    const emailInput = document.getElementById('emailInput') as HTMLInputElement;
    if (emailInput) {
      emailInput.scrollIntoView({ behavior: 'smooth' });
      emailInput.focus();
    }
  };

  const handleAddToWaitlist = async () => {
    if (await addToWaitlist(email)) {
      setEmail('');
    }
  };

  const stats = [
    { number: '50+', label: 'Components' },
    { number: '8', label: 'Core Stores' },
    { number: '100%', label: 'TypeScript' },
    { number: '∞', label: 'Possibilities' }
  ];

  return (
    <div>
      <Hero 
        onJoinWaitlist={handleJoinWaitlist}
        onExploreComponents={() => onPageChange('components')}
      />
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/2 border border-white/5 rounded-2xl p-8 backdrop-blur-lg"
              >
                <div className="text-3xl md:text-5xl font-extrabold mb-2 text-gradient-primary">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient">
              Ready to build the future?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Get notified when Agentic UI is available. Be among the first to build next-generation AI applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <input
                type="email"
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-64 px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-base backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
              />
              <Button 
                size="lg" 
                onClick={handleAddToWaitlist}
                disabled={isLoading}
              >
                {isLoading ? 'Adding...' : 'Notify Me'}
              </Button>
            </div>
            
            {message && (
              <p className="text-green-400 mb-4">{message}</p>
            )}
            
            <p className="text-sm text-gray-500">
              Join the waitlist for early access. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}