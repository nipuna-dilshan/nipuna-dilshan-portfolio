import React from 'react';
import Image from 'next/image';
import { ImageIcon, Layers } from 'lucide-react';

export default function ProjectVisualFrame({
  project,
  priority = false,
  variant = 'dark',
}) {
  const isLight = variant === 'light';

  if (project.image) {
    return (
      <div
        className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden border ${
          isLight
            ? 'border-[#DFDBD2] bg-white shadow-[0_18px_38px_-12px_rgba(17,19,21,0.16)]'
            : 'border-[#282B30] bg-[#16181B]'
        }`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt || `${project.title} interface screenshot`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden border flex flex-col ${
        isLight
          ? 'border-[#DFDBD2] bg-white shadow-[0_18px_38px_-12px_rgba(17,19,21,0.14)]'
          : 'border-[#282B30] bg-[#16181B]'
      }`}
    >
      {/* Minimal Application Window Bar */}
      <div
        className={`flex items-center justify-between px-4 py-2.5 border-b shrink-0 ${
          isLight
            ? 'border-[#ECE9E2] bg-[#FAF8F5]'
            : 'border-[#24272D] bg-[#131518]'
        }`}
      >
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isLight ? 'bg-[#DCD8CF]' : 'bg-[#2E323A]'
            }`}
          />
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isLight ? 'bg-[#DCD8CF]' : 'bg-[#2E323A]'
            }`}
          />
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isLight ? 'bg-[#DCD8CF]' : 'bg-[#2E323A]'
            }`}
          />
        </div>

        <span
          className={`font-mono-tech text-[10px] tracking-[0.14em] uppercase ${
            isLight ? 'text-[#6D7076]' : 'text-[#85878C]'
          }`}
        >
          {project.isConcept
            ? 'CONCEPT / DEMO ARCHITECTURE'
            : 'ASSET PENDING UPLOAD'}
        </span>

        <span
          className={`font-mono-tech text-[10px] px-2 py-0.5 rounded border ${
            project.isConcept
              ? isLight
                ? 'border-[#E5E1D8] text-[#52555A] bg-white'
                : 'border-[#32363E] text-[#9CA0A8] bg-[#1C1F24]'
              : isLight
              ? 'border-[#FADBC9] text-[#F47745] bg-[#FFF4EE]'
              : 'border-[#F47745]/35 text-[#F47745] bg-[#F47745]/10'
          }`}
        >
          {project.id}
        </span>
      </div>

      {/* Honest Content Area */}
      {!project.isConcept ? (
        <div
          className={`flex-1 flex flex-col items-center justify-center p-5 sm:p-8 text-center ${
            isLight ? 'bg-editorial-grid-light' : 'bg-editorial-grid-dark'
          }`}
        >
          <div
            className={`w-11 h-11 rounded-xl border flex items-center justify-center text-[#F47745] mb-3.5 ${
              isLight
                ? 'bg-white border-[#E5E1D8] shadow-[0_4px_12px_rgba(17,19,21,0.04)]'
                : 'bg-[#1D2025] border-[#2D3139]'
            }`}
          >
            <ImageIcon className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
          </div>

          <span className="font-mono-tech text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#F47745] font-semibold mb-1.5">
            REAL SCREENSHOT REQUIRED
          </span>

          <p
            className={`font-display font-bold text-sm sm:text-base mb-1.5 ${
              isLight ? 'text-[#111315]' : 'text-white'
            }`}
          >
            {project.title}
          </p>

          <p
            className={`text-xs max-w-sm leading-relaxed mb-3.5 ${
              isLight ? 'text-[#52555A]' : 'text-[#85878C]'
            }`}
          >
            Add your actual application dashboard screenshot to display the live UI here.
          </p>

          {project.requiredAssetHint && (
            <code
              className={`px-3 py-1 rounded-md border font-mono-tech text-[10px] sm:text-[11px] ${
                isLight
                  ? 'bg-white border-[#E5E1D8] text-[#111315]'
                  : 'bg-[#111315] border-[#282B30] text-[#D0D3D9]'
              }`}
            >
              {project.requiredAssetHint}
            </code>
          )}
        </div>
      ) : (
        <div
          className={`flex-1 p-5 sm:p-6 flex flex-col justify-between ${
            isLight ? 'bg-editorial-grid-light' : 'bg-editorial-grid-dark'
          }`}
        >
          {/* Concept Wireframe Header */}
          <div
            className={`flex items-center justify-between gap-4 pb-3.5 border-b ${
              isLight ? 'border-[#E5E1D8]' : 'border-[#24272D]'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-lg border flex items-center justify-center text-[#F47745] ${
                  isLight
                    ? 'bg-white border-[#E5E1D8]'
                    : 'bg-[#1E2127] border-[#2E323A]'
                }`}
              >
                <Layers className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
              </div>
              <div>
                <p
                  className={`font-display font-semibold text-xs sm:text-sm leading-tight ${
                    isLight ? 'text-[#111315]' : 'text-white'
                  }`}
                >
                  {project.title}
                </p>
                <p
                  className={`font-mono-tech text-[10px] tracking-wider uppercase mt-0.5 ${
                    isLight ? 'text-[#6D7076]' : 'text-[#85878C]'
                  }`}
                >
                  CONCEPT INTERFACE BLUEPRINT
                </p>
              </div>
            </div>

            <span
              className={`font-mono-tech text-[10px] px-2.5 py-0.5 rounded border uppercase tracking-wider ${
                isLight
                  ? 'border-[#E5E1D8] bg-white text-[#52555A]'
                  : 'border-[#32363E] bg-[#181B20] text-[#9CA0A8]'
              }`}
            >
              DEMO CONCEPT
            </span>
          </div>

          {/* Structural Module Wireframe Grid */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-auto py-3.5">
            {project.features.slice(0, 3).map((feature, idx) => (
              <div
                key={feature.title}
                className={`rounded-lg border p-3 flex flex-col justify-between min-h-22 sm:min-h-26 ${
                  isLight
                    ? 'border-[#E5E1D8] bg-white shadow-[0_4px_12px_rgba(17,19,21,0.03)]'
                    : 'border-[#252830] bg-[#14171A]'
                }`}
              >
                <span className="font-mono-tech text-[10px] font-semibold text-[#F47745]">
                  0{idx + 1}
                </span>
                <p
                  className={`font-display font-semibold text-[11px] sm:text-xs leading-snug mt-2 ${
                    isLight ? 'text-[#111315]' : 'text-white/90'
                  }`}
                >
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Concept Footer Caption */}
          <div
            className={`pt-2.5 border-t flex items-center justify-between text-[10px] font-mono-tech ${
              isLight
                ? 'border-[#E5E1D8] text-[#6D7076]'
                : 'border-[#24272D] text-[#85878C]'
            }`}
          >
            <span>UI / WORKFLOW EXPLORATION</span>
            <span>NO CLIENT DEPLOYMENT CLAIMED</span>
          </div>
        </div>
      )}
    </div>
  );
}
