import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import DigitalIdentityCard from './DigitalIdentityCard';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#111315] text-white pt-32 pb-20 sm:pt-36 sm:pb-28 flex items-center bg-editorial-grid-dark overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient Orange Background Glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/4 w-125 h-75 rounded-full bg-[#F47745] opacity-11 blur-[130px]"
        aria-hidden="true"
      />

      {/* Main Container Grid — exact same max-w-6xl constraint as the Navbar */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (58-60% width) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Eyebrow Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-white/3 border border-[#343434]">
              <span
                className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                aria-hidden="true"
              />
              <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#F5F3EE]/90 font-medium">
                AI • SOFTWARE • AUTOMATION
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] xl:text-[54px] leading-[1.12] sm:leading-[1.1] tracking-tight text-white">
              <span className="block">Building practical</span>
              <span className="block">
                <span className="text-[#F47745]">AI-powered</span> software &amp;
              </span>
              <span className="block">automation systems.</span>
            </h1>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-[#85878C] leading-relaxed max-w-xl font-normal">
              I build AI-powered software, automation systems, and practical solutions for real-world business problems.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="px-7 py-4 rounded-xl bg-[#F47745] hover:bg-[#e26735] text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-[0_8px_28px_rgba(244,119,69,0.28)] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl bg-white/4 hover:bg-white/9 text-white border border-[#343434] hover:border-white/30 font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
              >
                <span>Let&apos;s Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#F47745] stroke-[2.2]" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Cursor-Tracking Digital Identity Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <DigitalIdentityCard />
          </div>

        </div>
      </div>
    </section>
  );
}
