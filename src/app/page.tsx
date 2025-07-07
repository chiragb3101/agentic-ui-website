'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from '@/components/sections/Home';
import { Features } from '@/components/sections/Features';
import { Components } from '@/components/sections/Components';
import { Docs } from '@/components/sections/Docs';
import { GitHub } from '@/components/sections/GitHub';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'features':
        return <Features />;
      case 'components':
        return <Components />;
      case 'docs':
        return <Docs />;
      case 'github':
        return <GitHub />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}