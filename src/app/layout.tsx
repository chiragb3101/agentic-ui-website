import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agentic UI - React Components for AI Apps',
  description: 'Stop rebuilding the same AI interface patterns. Ship faster with battle-tested components for conversations, agents, and intelligent workflows.',
  keywords: 'React, AI, Components, LLM, Chat, TypeScript, UI Library, Open Source',
  authors: [{ name: 'Agentic UI Team' }],
  openGraph: {
    title: 'Agentic UI - React Components for AI Apps',
    description: 'Stop rebuilding the same AI interface patterns. Ship faster with battle-tested components.',
    url: 'https://agenticui.dev',
    siteName: 'Agentic UI',
    type: 'website',
    images: [
      {
        url: 'https://agenticui.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agentic UI - React Components for AI Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic UI - React Components for AI Apps',
    description: 'Stop rebuilding the same AI interface patterns. Ship faster with battle-tested components.',
    images: ['https://agenticui.dev/og-image.png'],
  },
  metadataBase: new URL('https://agenticui.dev'),
  alternates: {
    canonical: 'https://agenticui.dev',
  },
  other: {
    'github-repo': 'https://github.com/agenticui/agentic-ui',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0f] text-white antialiased">
        <div className="fixed inset-0 gradient-bg"></div>
        <div className="fixed inset-0 grid-overlay"></div>
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}