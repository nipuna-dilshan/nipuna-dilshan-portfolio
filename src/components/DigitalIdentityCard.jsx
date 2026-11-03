'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

// Top-level constant for the portrait image. Set to empty string "" to view the sleek monogram placeholder.
const PORTRAIT_IMAGE_URL = "/nipuna-portrait.jpg";

export default function DigitalIdentityCard() {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isInteractive, setIsInteractive] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const checkPointer = () => {
      if (typeof window !== 'undefined') {
        const matches = window.matchMedia(
          '(min-width: 1024px) and (hover: hover) and (pointer: fine)'
        ).matches;
        setIsInteractive(matches);
      }
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);
    return () => window.removeEventListener('resize', checkPointer);
  }, []);

  const handleMouseMove = (e) => {
    if (!isInteractive || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth subtle rotation towards cursor (-6.5 deg to +6.5 deg)
    const rotateX = ((mouseY - centerY) / centerY) * -6.5;
    const rotateY = ((mouseX - centerX) / centerX) * 6.5;

    setRotation({ x: rotateX, y: rotateY });
    setGlare({
      x: (mouseX / rect.width) * 100,
      y: (mouseY / rect.height) * 100,
      opacity: 0.14,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const isResting = rotation.x === 0 && rotation.y === 0;

  return (
    <div
      className="relative w-full max-w-[380px] sm:max-w-[400px] lg:max-w-[420px] mx-auto lg:mx-0 lg:ml-auto lg:mr-0"
      style={{ perspective: "1200px" }}
    >
      {/* Back Ambient Orange Halo */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-[32px] opacity-25 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(244, 119, 69, 0.38), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* 3D Tilted Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-[28px] bg-white/[0.04] backdrop-blur-2xl border border-[#343434] p-5 sm:p-6 shadow-[0_28px_70px_rgba(0,0,0,0.65)] overflow-hidden"
        style={{
          transform: isInteractive
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : 'none',
          transformStyle: 'preserve-3d',
          transition: isResting
            ? 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
            : 'transform 0.1s linear',
        }}
      >
        {/* Top Orange Light Rim */}
        <div
          className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#F47745] to-transparent opacity-80"
          aria-hidden="true"
        />

        {/* Dynamic Cursor Glare Overlay */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45), transparent 55%)`,
          }}
          aria-hidden="true"
        />

        {/* Inner Layer 1 — Portrait Frame (translateZ(20px) on desktop) */}
        <div
          className="relative w-full aspect-[4/4.3] rounded-2xl overflow-hidden border border-white/10 bg-[#14171A] mb-6 shadow-inner"
          style={{
            transform: isInteractive ? 'translateZ(20px)' : 'none',
            transformStyle: 'preserve-3d',
          }}
        >
          {PORTRAIT_IMAGE_URL && !imageError ? (
            <Image
              src={PORTRAIT_IMAGE_URL}
              alt="Nipuna Dilshan"
              width={420}
              height={450}
              priority
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98]"
            />
          ) : (
            /* Sleek Architectural Monogram Placeholder */
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#14171A] overflow-hidden select-none">
              {/* Subtle 32px Grid */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundSize: '32px 32px',
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                }}
              />

              {/* Soft Orange Radial Glow */}
              <div
                className="absolute w-44 h-44 rounded-full bg-[#F47745] opacity-15 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Minimalist Shoulder Silhouette Curve */}
              <svg
                className="absolute -bottom-2 w-48 h-32 text-white/[0.04] pointer-events-none"
                viewBox="0 0 200 120"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M 10 120 C 25 70, 70 55, 100 55 C 130 55, 175 70, 190 120 Z" />
              </svg>

              {/* Monogram ND. */}
              <div className="relative z-10 flex items-baseline">
                <span className="font-display font-extrabold text-5xl sm:text-6xl text-white tracking-tight">
                  ND
                </span>
                <span className="font-display font-extrabold text-5xl sm:text-6xl text-[#F47745]">
                  .
                </span>
              </div>
            </div>
          )}

          {/* Hairline Inner Border Accent */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5" />
        </div>

        {/* Inner Layer 2 — Identity Details (translateZ(28px) on desktop) */}
        <div
          style={{
            transform: isInteractive ? 'translateZ(28px)' : 'none',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="flex flex-col">
            <h3 className="font-display font-bold text-2xl sm:text-[26px] text-white tracking-tight leading-tight">
              Nipuna Dilshan
            </h3>
            <p className="text-[#F47745] font-medium text-sm sm:text-base mt-0.5">
              AI Solution Engineer
            </p>
          </div>

          {/* Bottom Metadata Divider */}
          <div className="mt-4 pt-3.5 border-t border-[#343434] space-y-2 text-xs sm:text-sm">
            {/* Row 1: Education */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-[#85878C] font-normal">Education</span>
              <span className="text-white/90 font-medium text-right">
                Software Engineering Undergraduate
              </span>
            </div>

            {/* Row 2: Focus */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-[#85878C] font-normal">Focus</span>
              <span className="text-white/90 font-medium inline-flex items-center gap-1.5 text-right">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.7)]"
                  aria-hidden="true"
                />
                AI &amp; Automation Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
