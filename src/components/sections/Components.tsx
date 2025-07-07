'use client';

import React from 'react';

export function Components() {
  const components = [
    {
      badge: 'Conversation',
      title: 'ChatMessage',
      description: 'Display individual chat messages with role-based styling, timestamps, and action buttons. Supports streaming text and markdown rendering.'
    },
    {
      badge: 'Conversation',
      title: 'MessageList',
      description: 'Virtualized conversation history with auto-scroll, infinite loading, and smooth animations. Optimized for long conversations.'
    },
    {
      badge: 'Conversation',
      title: 'ChatInput',
      description: 'Multi-line text input with file attachments, emoji picker, and send shortcuts. Supports voice input and command suggestions.'
    },
    {
      badge: 'Conversation',
      title: 'StreamingText',
      description: 'Real-time text streaming with character-by-character animation. Includes cursor effects and smooth transitions.'
    },
    {
      badge: 'Agent',
      title: 'AgentCard',
      description: 'Display agent profiles with avatars, capabilities, and status indicators. Perfect for multi-agent interfaces.'
    },
    {
      badge: 'Agent',
      title: 'AgentSelector',
      description: 'Switch between multiple AI agents with dropdown or grid layouts. Shows agent capabilities and availability.'
    },
    {
      badge: 'Input',
      title: 'PromptComposer',
      description: 'Rich text editor for creating complex prompts with variables, templates, and syntax highlighting.'
    },
    {
      badge: 'Input',
      title: 'ParameterPanel',
      description: 'Control AI model parameters like temperature, top-p, and max tokens with intuitive sliders and inputs.'
    },
    {
      badge: 'Output',
      title: 'CodeBlock',
      description: 'Syntax-highlighted code display with copy buttons, line numbers, and language detection. Supports 50+ languages.'
    },
    {
      badge: 'Output',
      title: 'MarkdownRenderer',
      description: 'Render AI-generated markdown with custom styling, LaTeX support, and interactive elements.'
    },
    {
      badge: 'Memory',
      title: 'ContextViewer',
      description: 'Display active context and memory with hierarchical organization and search capabilities.'
    },
    {
      badge: 'Analytics',
      title: 'UsageMetrics',
      description: 'Track token usage, costs, and performance metrics with beautiful charts and real-time updates.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gradient">
          Component Library
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
          Pre-built React components for every aspect of your AI application. Copy, paste, and customize to fit your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <div 
              key={index}
              className="bg-white/2 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium mb-4">
                {component.badge}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {component.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}