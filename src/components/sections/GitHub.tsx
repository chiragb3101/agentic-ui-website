'use client';

import React from 'react';
import { Button } from '../ui/Button';

export function GitHub() {
  const githubFeatures = [
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#10b981" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      ),
      title: 'MIT License',
      description: 'Free to use in commercial and open source projects. No licensing fees, no restrictions. Build anything you want.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#3b82f6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: 'Community',
      description: 'Join our Discord server with 1000+ developers. Get help, share projects, and collaborate on new features.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#8b5cf6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Contributing',
      description: 'Submit bug reports, feature requests, and pull requests. Comprehensive contributor guide and development setup.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#ec4899" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      title: 'Roadmap',
      description: 'Public roadmap with upcoming features and releases. Vote on features and track development progress.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#f59e0b" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: 'Sponsorship',
      description: 'Support the project through GitHub Sponsors. Help us maintain and improve Agentic UI for everyone.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#06b6d4" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      ),
      title: 'Enterprise',
      description: 'Priority support, custom components, and consulting services for enterprise customers. Contact us for details.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gradient">
          Open Source
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
          Agentic UI is open source and community-driven. Contribute, report issues, and help shape the future of AI interfaces.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {githubFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/2 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/agenticui/agentic-ui" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg">
              View on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}