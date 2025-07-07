'use client';

import React from 'react';

export function Features() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#8b5cf6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      ),
      title: 'Streaming Conversations',
      description: 'Real-time chat components with character-by-character streaming, typing indicators, and smooth animations. Perfect for building chatbots and conversational AI interfaces.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#3b82f6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: 'Multi-Agent Systems',
      description: 'Coordinate multiple AI agents with role-based interfaces, capability badges, and intelligent task distribution. Build complex AI workflows with ease.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#ec4899" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: 'Production Ready',
      description: 'TypeScript-first components with accessibility, performance optimizations, and comprehensive testing. Ready for enterprise applications.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#10b981" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      ),
      title: 'Memory & Context',
      description: 'Advanced context management with document viewers, knowledge graphs, and intelligent memory systems for RAG applications.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#eab308" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"/>
        </svg>
      ),
      title: 'Analytics & Monitoring',
      description: 'Track usage metrics, monitor performance, and optimize costs with built-in analytics components. Get insights into your AI application\'s performance.'
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="#06b6d4" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
        </svg>
      ),
      title: 'Workflow Builder',
      description: 'Visual workflow designers and automation components for complex multi-step AI processes. Build sophisticated AI workflows with drag-and-drop simplicity.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gradient">
          Everything you need for AI apps
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
          From streaming conversations to multi-agent workflows, built for the next generation of AI applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
      </div>
    </section>
  );
}