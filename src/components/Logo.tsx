import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className = "", onClick }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 cursor-pointer ${className}`} onClick={onClick}>
      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0.5 bg-[#0a0a0f] rounded-md"></div>
        <svg className="relative z-10 w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="url(#logoGradient)" strokeWidth="1.5" fill="none"/>
          <rect x="6" y="7" width="8" height="2.5" rx="1.25" fill="url(#logoGradient)" opacity="0.8"/>
          <rect x="10" y="11" width="8" height="2.5" rx="1.25" fill="url(#logoGradient)" opacity="0.6"/>
          <rect x="6" y="15" width="6" height="2.5" rx="1.25" fill="url(#logoGradient)" opacity="0.4"/>
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#8b5cf6'}}/>
              <stop offset="50%" style={{stopColor:'#ec4899'}}/>
              <stop offset="100%" style={{stopColor:'#3b82f6'}}/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="font-semibold text-xl">Agentic UI</span>
    </div>
  );
}