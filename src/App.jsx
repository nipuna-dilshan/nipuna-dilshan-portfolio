import React from 'react';
import Hero from './components/Hero.jsx';

export default function App() {
  return (
    <div className="bg-[#060913] text-[#dee2f4] antialiased selection:bg-[#38bdf8] selection:text-[#060913] min-h-screen flex flex-col justify-between relative overflow-x-hidden font-['Inter',sans-serif]">
      {/* Structural Tech Grid Layer */}
      <div className="fixed inset-0 pointer-events-none bg-grid-tech z-0"></div>
      
      {/* Central Ambient Illumination Layer */}
      <div className="fixed inset-0 pointer-events-none radial-center-glow z-0"></div>

      {/* Header Anchor */}
      <header className="w-full relative z-20 pt-6 sm:pt-8 pb-4 px-5 sm:px-8 md:px-12 max-w-[1020px] mx-auto">
        <div className="flex items-center justify-between border-b border-[#3e484f]/30 pb-4 sm:pb-5 gap-3">
          {/* Monogram / Personal Mark */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <div className="w-2 h-2 bg-[#38bdf8] rounded-sm shadow-[0_0_10px_rgba(56,189,248,0.7)] shrink-0"></div>
            <span className="font-mono text-[12px] sm:text-[13px] text-[#dee2f4] tracking-wider font-semibold whitespace-nowrap">
              NIPUNA DILSHAN
            </span>
          </div>

          {/* Status Indicator Badge */}
          <div className="flex items-center gap-2 bg-[#090e1a]/90 border border-[#3e484f]/40 px-3 sm:px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-[0_0_12px_-2px_rgba(56,189,248,0.15)] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-tech-pulse shrink-0"></span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#bdc8d1] tracking-normal whitespace-nowrap">
              Available for Projects
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section Component */}
      <main className="relative z-10 flex-grow flex items-center justify-center">
        <Hero />
      </main>

      {/* Subtle bottom padding */}
      <footer className="w-full relative z-20 py-2 sm:py-4"></footer>
    </div>
  );
}
