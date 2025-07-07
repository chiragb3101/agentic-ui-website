'use client';

import React from 'react';
import { Logo } from './Logo';
import { Button } from './ui/Button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'components', label: 'Components' },
    { id: 'docs', label: 'Docs' },
    { id: 'github', label: 'GitHub' },
  ];

  return (
    <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-[#0a0a0f]/80">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Logo onClick={() => onPageChange('home')} />
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-gray-300 hover:text-white transition-colors ${
                currentPage === item.id ? 'text-white' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="secondary" 
            onClick={() => onPageChange('docs')}
          >
            Documentation
          </Button>
          <Button onClick={() => onPageChange('github')}>
            GitHub
          </Button>
        </div>
      </div>
    </nav>
  );
}