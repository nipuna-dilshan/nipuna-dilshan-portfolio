import React from 'react';

const DOMAINS = [
  "CUSTOM WEB APPLICATIONS",
  "AI WORKFLOW AUTOMATION",
  "API & SYSTEM INTEGRATIONS",
  "BACKEND ARCHITECTURE",
  "RELATIONAL & VECTOR DATABASES",
];

// Duplicate the array 3 times to create a seamless infinite marquee loop
const MARQUEE_ITEMS = [...DOMAINS, ...DOMAINS, ...DOMAINS];

export default function TechnologyStrip() {
  return (
    <div
      className="bg-[#111315] border-y border-[#343434] py-4 sm:py-5 overflow-hidden relative select-none"
      aria-label="Core Capabilities Marquee"
    >
      {/* Subtle edge fade overlays for high-end look */}
      <div
        className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#111315] to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#111315] to-transparent z-10"
        aria-hidden="true"
      />

      <div className="animate-marquee flex items-center">
        {MARQUEE_ITEMS.map((item, index) => (
          <div key={index} className="inline-flex items-center shrink-0">
            <span className="font-mono-tech text-xs sm:text-sm text-[#F5F3EE]/85 tracking-[0.16em] uppercase px-4 sm:px-6 whitespace-nowrap font-medium">
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#F47745] shrink-0"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

