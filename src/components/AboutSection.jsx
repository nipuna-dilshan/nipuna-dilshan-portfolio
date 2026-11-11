'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MotionConfig,
  motion,
  useReducedMotion,
} from 'framer-motion';
import {
  Cpu,
  GraduationCap,
  Terminal,
} from 'lucide-react';

// About section portrait asset stored in public/
const ABOUT_IMAGE_URL = '/nipuna-about.jpg';

const PRINCIPLES = [
  {
    id: '01',
    title: 'Clarity First',
    summary: 'Simple, maintainable systems.',
  },
  {
    id: '02',
    title: 'Built Reliable',
    summary: 'Solid APIs & edge-case care.',
  },
  {
    id: '03',
    title: 'Real Impact',
    summary: 'Focused on saving real time.',
  },
];

const FOCUS_PILLS = [
  'Full-Stack Systems',
  'Applied AI & LLMs',
  'Workflow Automation',
];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);
  const viewportConfig = { once: true, amount: 0.18 };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative scroll-mt-24 py-20 sm:py-28 bg-editorial-grid-light text-[#111315] px-4 sm:px-6 lg:px-8 border-t border-b border-[#E5E1D8] overflow-x-clip"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <header className="mb-10 sm:mb-14">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E1D8] shadow-[0_2px_8px_rgba(17,19,21,0.03)]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F47745]"
                  aria-hidden="true"
                />
                <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#52555A] font-medium">
                  05 // ABOUT
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-10">
              <motion.h2
                id="about-heading"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: 0.06, ease: EASE_OUT_EXPO }}
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1.1] text-[#111315]"
              >
                Engineering Software With{' '}
                <span className="text-[#F47745]">Clarity &amp; Purpose.</span>
              </motion.h2>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: 0.14, ease: EASE_OUT_EXPO }}
                className="text-sm sm:text-base text-[#52555A] leading-relaxed max-w-md lg:border-l lg:border-[#DCD8CF] lg:pl-6 font-normal"
              >
                Software Engineering undergraduate building practical AI systems, reliable web apps, and clean automation.
              </motion.p>
            </div>
          </header>

          {/* Editorial Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Row 1 Left: Editorial Portrait Card (4 cols) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="lg:col-span-4 w-full max-w-sm mx-auto lg:max-w-none rounded-2xl bg-white border border-[#E5E1D8] p-3.5 sm:p-4 flex flex-col justify-between shadow-[0_10px_30px_rgba(17,19,21,0.04)]"
            >
              <div className="relative w-full rounded-xl overflow-hidden bg-[#14171A] border border-[#E5E1D8]">
                {ABOUT_IMAGE_URL && !imageError ? (
                  <Image
                    src={ABOUT_IMAGE_URL}
                    alt="Nipuna Dilshan"
                    width={682}
                    height={1024}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    onError={() => setImageError(true)}
                    className="w-full h-auto block"
                  />
                ) : (
                  <div className="w-full aspect-[682/1024] flex items-center justify-center bg-[#14171A] select-none">
                    <span className="font-display font-extrabold text-4xl text-white tracking-tight">
                      ND<span className="text-[#F47745]">.</span>
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-3.5 px-1 flex items-center justify-between gap-2">
                <span className="font-display font-bold text-sm text-[#111315] tracking-tight">
                  Nipuna Dilshan
                </span>
                <span className="font-mono-tech text-[11px] text-[#F47745] font-medium">
                  AI Solutions Engineer
                </span>
              </div>
            </motion.div>

            {/* Row 1 Right: Concise Bio + Compact Principles Strip (8 cols) */}
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="lg:col-span-8 rounded-2xl bg-white border border-[#E5E1D8] p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(17,19,21,0.04)]"
            >
              <div>
                <span className="inline-flex items-center gap-2 font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold mb-3.5">
                  <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>About Me</span>
                </span>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111315] tracking-tight leading-snug mb-3.5">
                  Turning real operational problems into dependable software.
                </h3>

                <p className="text-sm sm:text-[15px] text-[#52555A] leading-relaxed font-normal max-w-2xl">
                  I&apos;m a Software Engineering undergraduate and AI Solutions Engineer focused on full-stack development, API integrations, and applied AI. I prioritize clean architecture and practical usability—helping teams automate repetitive work and run reliable systems in production.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {FOCUS_PILLS.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E7E4DC] font-mono-tech text-[11px] text-[#2A2D32] font-medium"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dark Contrast Principles Strip */}
              <div className="mt-6 relative rounded-xl bg-[#111315] border border-[#262930] text-white p-4 sm:p-5 overflow-hidden">
                <div
                  className="pointer-events-none absolute top-0 left-6 right-6 h-[1.5px] bg-linear-to-r from-transparent via-[#F47745] to-transparent opacity-80"
                  aria-hidden="true"
                />

                <p className="font-mono-tech text-[10px] tracking-[0.16em] uppercase text-[#9CA0A8] mb-3">
                  Engineering Principles
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {PRINCIPLES.map((item) => (
                    <div key={item.id} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tech text-[11px] font-bold text-[#F47745]">
                          {item.id}
                        </span>
                        <h4 className="font-display font-semibold text-sm text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#9CA0A8] leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Row 2: 3 Equal Compact Quick-Facts Cards */}
            {/* Card 1: Education */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT_EXPO }}
              className="lg:col-span-4 rounded-2xl bg-white border border-[#E5E1D8] p-5 sm:p-6 flex flex-col justify-between shadow-[0_6px_22px_rgba(17,19,21,0.03)]"
            >
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <span className="font-mono-tech text-[11px] tracking-[0.14em] uppercase text-[#6D7076] font-medium">
                  Education
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#FFF4EE] border border-[#FADBC9] flex items-center justify-center text-[#F47745]">
                  <GraduationCap className="w-4.5 h-4.5 stroke-[1.9]" aria-hidden="true" />
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-base sm:text-lg text-[#111315] tracking-tight">
                  Software Engineering Undergraduate
                </p>
                <p className="text-xs sm:text-[13px] text-[#52555A] mt-1 leading-relaxed">
                  Strong CS foundations applied to real-world builds.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Primary Focus */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="lg:col-span-4 rounded-2xl bg-white border border-[#E5E1D8] p-5 sm:p-6 flex flex-col justify-between shadow-[0_6px_22px_rgba(17,19,21,0.03)]"
            >
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <span className="font-mono-tech text-[11px] tracking-[0.14em] uppercase text-[#6D7076] font-medium">
                  Primary Focus
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#FFF4EE] border border-[#FADBC9] flex items-center justify-center text-[#F47745]">
                  <Cpu className="w-4.5 h-4.5 stroke-[1.9]" aria-hidden="true" />
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-base sm:text-lg text-[#111315] tracking-tight">
                  AI &amp; Automation Systems
                </p>
                <p className="text-xs sm:text-[13px] text-[#52555A] mt-1 leading-relaxed">
                  Web &amp; mobile apps, APIs, and LLM workflows.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Availability (Status-focused, non-repetitive) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, delay: 0.22, ease: EASE_OUT_EXPO }}
              className="lg:col-span-4 rounded-2xl bg-white border border-[#E5E1D8] p-5 sm:p-6 flex flex-col justify-between shadow-[0_6px_22px_rgba(17,19,21,0.03)]"
            >
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <span className="font-mono-tech text-[11px] tracking-[0.14em] uppercase text-[#6D7076] font-medium">
                  Availability
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] font-mono-tech text-[10px] font-semibold uppercase tracking-wider text-[#065F46]">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
                    aria-hidden="true"
                  />
                  Open
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-base sm:text-lg text-[#111315] tracking-tight">
                  Open for Projects
                </p>
                <p className="text-xs sm:text-[13px] text-[#52555A] mt-1 leading-relaxed">
                  Taking on select freelance builds, AI workflows &amp; collaborations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
