'use client';

import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const footerLinks = [
    { id: 'docs', label: 'Documentation' },
    { id: 'github', label: 'GitHub' },
    { id: 'features', label: 'Features' },
    { id: 'components', label: 'Components' },
  ];

  return (
    <footer className="mt-auto border-t border-white/10 backdrop-blur-xl bg-[#0a0a0f]/90 py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center flex-wrap gap-8 mb-8">
          <Logo onClick={() => onPageChange('home')} />
          <ul className="flex gap-8 list-none">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onPageChange(link.id)}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Agentic UI. Built for the future of AI development.</p>
        </div>
      </div>
    </footer>
  );
}