'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface HeroProps {
  onJoinWaitlist: () => void;
  onExploreComponents: () => void;
}

export function Hero({ onJoinWaitlist, onExploreComponents }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm mb-8 backdrop-blur-xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            React Components for AI Apps
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Revolutionize Your</span>
            <br />
            <span className="text-gradient-primary">AI Development</span>
            <br />
            <span className="text-gradient">with Agentic UI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Stop rebuilding the same AI interface patterns. Ship faster with battle-tested components for conversations, agents, and intelligent workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" onClick={onJoinWaitlist}>
              Join Waitlist
            </Button>
            <Button variant="secondary" size="lg" onClick={onExploreComponents}>
              Explore Components
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">App.tsx</span>
                </div>
                <div className="text-xs text-gray-500">Agentic UI</div>
              </div>
              <div className="p-8 text-left">
                <pre className="text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-purple-400">import</span>
                    <span className="text-white"> &#123; </span>
                    <br />
                    <span className="text-blue-400">  ChatMessage</span>
                    <span className="text-white">, </span>
                    <br />
                    <span className="text-blue-400">  StreamingText</span>
                    <span className="text-white">, </span>
                    <br />
                    <span className="text-blue-400">  AgentSelector</span>
                    <span className="text-white">,</span>
                    <br />
                    <span className="text-blue-400">  useChatStore</span>
                    <span className="text-white"> </span>
                    <br />
                    <span className="text-white">&#125; </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400"> &apos;agentic-ui&apos;</span>
                    <br />
                    <br />
                    <span className="text-purple-400">function</span>
                    <span className="text-yellow-400"> MyAIApp</span>
                    <span className="text-white">() &#123;</span>
                    <br />
                    <span className="text-purple-400">  const</span>
                    <span className="text-white"> &#123; messages, agents, activeAgent &#125; = </span>
                    <span className="text-yellow-400">useChatStore</span>
                    <span className="text-white">()</span>
                    <br />
                    <span className="text-white">  </span>
                    <br />
                    <span className="text-purple-400">  return</span>
                    <span className="text-white"> (</span>
                    <br />
                    <span className="text-gray-500">    &lt;</span>
                    <span className="text-red-400">div</span>
                    <span className="text-blue-400"> className</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&quot;ai-app&quot;</span>
                    <span className="text-gray-500">&gt;</span>
                    <br />
                    <span className="text-gray-500">      &lt;</span>
                    <span className="text-red-400">AgentSelector</span>
                    <span className="text-blue-400"> agents</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400">&#123;agents&#125;</span>
                    <span className="text-blue-400"> active</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400">&#123;activeAgent&#125;</span>
                    <span className="text-gray-500"> /&gt;</span>
                    <br />
                    <span className="text-white">      &#123;messages.</span>
                    <span className="text-yellow-400">map</span>
                    <span className="text-white">(msg </span>
                    <span className="text-purple-400">=&gt;</span>
                    <span className="text-white"> </span>
                    <br />
                    <span className="text-gray-500">        &lt;</span>
                    <span className="text-red-400">ChatMessage</span>
                    <span className="text-white"> </span>
                    <br />
                    <span className="text-blue-400">          key</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400">&#123;msg.id&#125;</span>
                    <span className="text-white"> </span>
                    <br />
                    <span className="text-blue-400">          message</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400">&#123;msg&#125;</span>
                    <span className="text-white"> </span>
                    <br />
                    <span className="text-blue-400">          streaming</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400">&#123;msg.streaming&#125;</span>
                    <br />
                    <span className="text-gray-500">        /&gt;</span>
                    <br />
                    <span className="text-white">      )&#125;</span>
                    <br />
                    <span className="text-gray-500">    &lt;/</span>
                    <span className="text-red-400">div</span>
                    <span className="text-gray-500">&gt;</span>
                    <br />
                    <span className="text-white">  )</span>
                    <br />
                    <span className="text-white">&#125;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}