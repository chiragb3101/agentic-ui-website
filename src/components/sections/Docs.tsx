'use client';

import React from 'react';

export function Docs() {
  const docSections = [
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#10b981" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      title: 'Getting Started',
      description: 'Quick installation guide and your first AI component in under 5 minutes. Includes setup for all popular frameworks.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#3b82f6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      title: 'API Reference',
      description: 'Complete API documentation for every component, hook, and utility. Interactive examples and TypeScript definitions.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#8b5cf6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
      ),
      title: 'Examples',
      description: 'Real-world examples and templates for common AI application patterns. Copy and modify to jumpstart your project.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#ec4899" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
        </svg>
      ),
      title: 'Theming Guide',
      description: 'Customize colors, typography, and spacing to match your brand. CSS variables, Tailwind integration, and dark mode support.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#f59e0b" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: 'Performance',
      description: 'Optimization guides for large-scale AI applications. Bundle size analysis, lazy loading, and memory management.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#06b6d4" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"/>
        </svg>
      ),
      title: 'Migration Guide',
      description: 'Step-by-step guides for migrating from other UI libraries. Automated migration tools and compatibility layers.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gradient">
          Documentation
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
          Everything you need to get started with Agentic UI. Comprehensive guides, API references, and examples.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docSections.map((section, index) => (
            <div 
              key={index}
              className="bg-white/2 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}