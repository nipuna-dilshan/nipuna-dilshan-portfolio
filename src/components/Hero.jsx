import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 flex-grow flex items-center justify-center px-5 sm:px-8 py-8 sm:py-12 md:py-16">
      <div className="w-full max-w-[1020px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Left Column: Portrait Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center">
          <div className="relative group w-48 sm:w-56 lg:w-full max-w-[290px]">
            {/* Luminous Ambient Glow */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-sky-500/30 via-sky-400/20 to-blue-600/15 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-sky-400/25 bg-[#090e1a]/90 shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)] backdrop-blur-sm">
              <img
                alt="Nipuna Dilshan - AI Solutions Engineer"
                className="w-full aspect-[4/5] object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                src="/profile.jpg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                }}
              />
              {/* Subtle bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/40 via-transparent to-transparent pointer-events-none"></div>


            </div>
          </div>
        </div>

        {/* Right Column: Engineering Bio, Actions, Credibility */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Eyebrow Tech Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#090e1a]/90 border border-[#3e484f]/50 rounded-full shadow-[0_0_18px_-4px_rgba(56,189,248,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]"></span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#8ed5ff] tracking-widest uppercase font-medium">
              AI SOLUTIONS ENGINEER
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[23px] sm:text-[32px] lg:text-[42px] leading-[1.2] lg:leading-[1.15] text-[#dee2f4] tracking-tight mb-5 font-bold font-['Plus_Jakarta_Sans',sans-serif]">
            <span className="block">
              Building practical
            </span>
            <span className="block whitespace-nowrap">
              <span className="text-[#38bdf8] drop-shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                AI-powered
              </span>{' '}
              software &amp;
            </span>
            <span className="block">
              automation systems
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-[#87929a] max-w-[560px] mb-6 sm:mb-8 leading-relaxed font-normal">
            I build AI-powered software, automation systems, and practical solutions for real-world business problems.
          </p>

          {/* Action Cluster */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-4 sm:mb-5">
            {/* Primary Action: LinkedIn */}
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#38bdf8] text-slate-950 font-mono text-[11px] font-semibold rounded hover:bg-sky-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)] transition-all duration-200 active:scale-95 shadow-sm whitespace-nowrap"
              href="https://www.linkedin.com/in/nipuna-dilshan/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63Z"></path>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>

            {/* Secondary Action: Email */}
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#090e1a]/70 border border-sky-500/30 text-[#dee2f4] font-mono text-[11px] font-medium rounded hover:border-sky-400/60 hover:bg-[#1b1f2c] hover:-translate-y-0.5 hover:shadow-[0_0_20px_-4px_rgba(56,189,248,0.18)] transition-all duration-200 active:scale-95 whitespace-nowrap"
              href="mailto:nipuna.dilshan.me@gmail.com"
            >
              <Mail className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span>Email me</span>
            </a>
          </div>

          {/* WhatsApp Link */}
          <div className="w-full sm:w-auto mb-5 sm:mb-6 flex justify-center lg:justify-start">
            <a
              href="https://wa.me/94742647449"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#87929a] hover:text-[#38bdf8] transition-colors duration-200 group"
            >
              <span className="tracking-normal">WhatsApp me</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Credibility Line */}
          <div className="inline-flex items-center gap-2 text-[#3e484f]">
            <span className="w-1 h-1 rounded-full bg-[#3e484f] shrink-0"></span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#87929a] font-normal">
              Software Engineering Undergraduate @ ESOFT
            </span>
            <span className="w-1 h-1 rounded-full bg-[#3e484f] shrink-0"></span>
          </div>

        </div>
      </div>
    </section>
  );
}
