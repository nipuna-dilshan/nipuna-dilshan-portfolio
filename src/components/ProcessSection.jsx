'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  MotionConfig,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Code2, Layers, Rocket, Search } from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Discovery & Requirements',
    description:
      'Understand the business, identify the core problem, gather clear requirements, and define the project scope.',
    icon: Search,
    output: 'Project Scope',
    highlights: ['Requirements', 'Scope & Goals'],
  },
  {
    id: '02',
    title: 'Architecture & UI/UX Design',
    description:
      'Select the right tech stack, plan database and API structures, and design wireframes and responsive user interfaces.',
    icon: Layers,
    output: 'System Blueprint',
    highlights: ['Architecture', 'UI/UX Flows'],
  },
  {
    id: '03',
    title: 'Development & Integration',
    description:
      'Build frontend, backend, and database functionality, and connect APIs, external services, or AI & automation where required.',
    icon: Code2,
    output: 'Working System',
    highlights: ['Full-Stack Build', 'APIs & AI'],
  },
  {
    id: '04',
    title: 'Testing, Launch & Support',
    description:
      'Test functionality and edge cases, deploy cleanly to production, and provide ongoing monitoring, fixes, and improvements.',
    icon: Rocket,
    output: 'Production Release',
    highlights: ['QA & Deploy', 'Maintenance'],
  },
];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

export default function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();
  const desktopRunwayRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const updateMatch = () => setIsDesktop(mediaQuery.matches);
    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  // Desktop: pinned sticky runway so the section stays fixed while the line completes 01 -> 04
  const { scrollYProgress: desktopScrollProgress } = useScroll({
    target: desktopRunwayRef,
    offset: ['start start', 'end end'],
  });

  const smoothDesktopProgress = useSpring(desktopScrollProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
    restDelta: 0.001,
  });

  // Finish the full 01 -> 04 sweep slightly before unpinning so Stage 04 holds cleanly
  const desktopLineProgress = useTransform(
    smoothDesktopProgress,
    [0.04, 0.86],
    [0, 1]
  );

  // Mobile/Tablet: vertical timeline scroll progress
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileTrackRef,
    offset: ['start 70%', 'end 92%'],
  });

  const smoothMobileProgress = useSpring(mobileScrollProgress, {
    stiffness: 85,
    damping: 22,
    mass: 0.35,
    restDelta: 0.001,
  });

  const updateActiveStage = (lineValue, rawValue) => {
    if (rawValue <= 0.005) {
      setScrollActiveIndex(-1);
    } else if (lineValue < 0.32) {
      setScrollActiveIndex(0);
    } else if (lineValue < 0.65) {
      setScrollActiveIndex(1);
    } else if (lineValue < 0.96) {
      setScrollActiveIndex(2);
    } else {
      setScrollActiveIndex(3);
    }
  };

  useMotionValueEvent(desktopLineProgress, 'change', (latest) => {
    if (isDesktop) {
      updateActiveStage(latest, desktopScrollProgress.get());
    }
  });

  useMotionValueEvent(smoothMobileProgress, 'change', (latest) => {
    if (!isDesktop) {
      updateActiveStage(latest, mobileScrollProgress.get());
    }
  });

  const effectiveActiveIndex =
    hoveredIndex !== null ? hoveredIndex : scrollActiveIndex;

  const activeStageNumber =
    effectiveActiveIndex >= 0 ? `0${effectiveActiveIndex + 1}` : '01';
  const isStageActive = prefersReducedMotion || effectiveActiveIndex >= 0;

  const viewportConfig = { once: true, amount: 0.2 };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="process"
        ref={desktopRunwayRef}
        aria-labelledby="process-heading"
        className={`relative bg-editorial-grid-dark text-white border-t border-[#24272D] overflow-x-clip ${
          prefersReducedMotion ? '' : 'lg:min-h-[260vh]'
        }`}
      >
        <div
          className={`px-4 sm:px-6 lg:px-8 ${
            prefersReducedMotion
              ? 'py-20 sm:py-28'
              : 'py-20 sm:py-24 lg:sticky lg:top-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:pt-28 lg:pb-12'
          }`}
        >
          {/* Subtle Ambient Orange Glow */}
          <div
            className="pointer-events-none absolute top-1/3 right-1/4 w-96 h-64 rounded-full bg-[#F47745] opacity-[0.07] blur-[120px]"
            aria-hidden="true"
          />

          <div className="max-w-6xl mx-auto w-full relative z-10">
            {/* Section Header */}
            <header className="mb-10 sm:mb-12 lg:mb-11">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="mb-5 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16181B] border border-[#282B30]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F47745]"
                  aria-hidden="true"
                />
                <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#C8CBD0] font-medium">
                  04 // PROCESS
                </span>
              </div>

              <div
                aria-live="polite"
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14171A] border border-[#262930]"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    isStageActive
                      ? 'bg-[#F47745] shadow-[0_0_8px_rgba(244,119,69,0.8)]'
                      : 'bg-[#52555A]'
                  }`}
                  aria-hidden="true"
                />
                <span className="font-mono-tech text-[11px] tracking-[0.14em] uppercase text-[#C8CBD0] font-medium">
                  STAGE {activeStageNumber} OF 04{isStageActive ? ' ACTIVE' : ''}
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <motion.h2
                id="process-heading"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: 0.06, ease: EASE_OUT_EXPO }}
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1.1] text-white"
              >
                From an Idea to a{' '}
                <span className="text-[#F47745]">Working Solution.</span>
              </motion.h2>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: 0.14, ease: EASE_OUT_EXPO }}
                className="text-sm sm:text-base text-[#9CA0A8] leading-relaxed max-w-md lg:border-l lg:border-[#282B30] lg:pl-6 font-normal"
              >
                A structured, transparent engineering workflow—built to take any web, mobile, backend, or AI system from initial concept to long-term production.
              </motion.p>
            </div>
          </header>

          {/* Scroll-Tracked 4-Step Process */}
          <div ref={mobileTrackRef} className="relative">
            {/* Desktop Horizontal Scroll Progress Spine */}
            <div className="hidden lg:block relative mb-6" aria-hidden="true">
              {/* Base Track spanning center of Col 1 (12.5%) to center of Col 4 (87.5%) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-[#262930] rounded-full overflow-hidden">
                <motion.div
                  style={{
                    scaleX: prefersReducedMotion ? 1 : desktopLineProgress,
                  }}
                  className="w-full h-full bg-linear-to-r from-[#F47745] via-[#F47745] to-[#FF9B71] origin-left shadow-[0_0_12px_rgba(244,119,69,0.6)]"
                />
              </div>

              {/* 4 Step Nodes aligned with cards */}
              <div className="grid grid-cols-4 gap-5 relative z-10">
                {PROCESS_STEPS.map((step, index) => {
                  const isReached =
                    prefersReducedMotion || effectiveActiveIndex >= index;
                  const isCurrent = effectiveActiveIndex === index;

                  return (
                    <div
                      key={step.id}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono-tech text-xs font-bold transition-all duration-300 ${
                          isCurrent
                            ? 'bg-[#F47745] border-[#F47745] text-white scale-110 shadow-[0_0_20px_rgba(244,119,69,0.5)]'
                            : isReached
                            ? 'bg-[#1B1716] border-[#F47745] text-[#F47745] shadow-[0_0_14px_rgba(244,119,69,0.22)]'
                            : 'bg-[#14171A] border-[#2E323A] text-[#6F737B]'
                        }`}
                      >
                        {step.id}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Tablet Vertical Scroll Progress Spine */}
            <div
              className="lg:hidden absolute left-[15px] top-7 bottom-7 w-[2px] bg-[#262930] rounded-full overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                style={{
                  scaleY: prefersReducedMotion ? 1 : smoothMobileProgress,
                }}
                className="w-full h-full bg-linear-to-b from-[#F47745] to-[#FF9B71] origin-top"
              />
            </div>

            {/* 4 Premium Process Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-5">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;
                const isReached =
                  prefersReducedMotion || effectiveActiveIndex >= index;
                const isCurrent = effectiveActiveIndex === index;

                return (
                  <motion.div
                    key={step.id}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportConfig}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="relative pl-11 lg:pl-0"
                  >
                    {/* Mobile Vertical Timeline Node */}
                    <div
                      className={`lg:hidden absolute left-0 top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono-tech text-[11px] font-bold z-10 transition-all duration-300 ${
                        isCurrent
                          ? 'bg-[#F47745] border-[#F47745] text-white shadow-[0_0_16px_rgba(244,119,69,0.45)]'
                          : isReached
                          ? 'bg-[#1B1716] border-[#F47745] text-[#F47745]'
                          : 'bg-[#14171A] border-[#2E323A] text-[#6F737B]'
                      }`}
                      aria-hidden="true"
                    >
                      {step.id}
                    </div>

                    {/* Desktop Vertical Connector Stem from Node to Card */}
                    <div
                      className={`hidden lg:block mx-auto w-[1.5px] h-6 -mt-6 transition-colors duration-300 ${
                        isReached ? 'bg-[#F47745]/75' : 'bg-[#262930]'
                      }`}
                      aria-hidden="true"
                    />

                    <article
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group relative h-full rounded-2xl bg-[#14171A] border p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                        isCurrent
                          ? 'border-[#F47745]/75 -translate-y-1 shadow-[0_22px_48px_-14px_rgba(244,119,69,0.2)]'
                          : isReached
                          ? 'border-[#F47745]/35 shadow-[0_14px_34px_rgba(0,0,0,0.4)] hover:border-[#F47745]/75 hover:-translate-y-1'
                          : 'border-[#262930] shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:border-[#F47745]/60 hover:-translate-y-1'
                      }`}
                    >
                      {/* Top Accent Light Rim */}
                      <div
                        className={`pointer-events-none absolute top-0 left-6 right-6 h-[1.5px] bg-linear-to-r from-transparent via-[#F47745] to-transparent transition-opacity duration-300 ${
                          isCurrent
                            ? 'opacity-90'
                            : isReached
                            ? 'opacity-40 group-hover:opacity-90'
                            : 'opacity-0 group-hover:opacity-75'
                        }`}
                        aria-hidden="true"
                      />

                      {/* Card Top + Content */}
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <span
                            className={`font-mono-tech text-[11px] font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-md border transition-colors duration-300 ${
                              isCurrent
                                ? 'bg-[#F47745]/15 border-[#F47745]/45 text-[#F47745]'
                                : isReached
                                ? 'bg-[#1B1919] border-[#F47745]/25 text-[#F47745]/90'
                                : 'bg-[#191C21] border-[#2B2F37] text-[#85878C]'
                            }`}
                          >
                            Step {step.id}
                          </span>

                          <div
                            className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                              isCurrent || isReached
                                ? 'bg-[#F47745]/10 border-[#F47745]/35 text-[#F47745]'
                                : 'bg-[#191C21] border-[#2B2F37] text-[#9CA0A8] group-hover:border-[#F47745]/35 group-hover:text-[#F47745]'
                            }`}
                          >
                            <Icon className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                          </div>
                        </div>

                        <h3 className="font-display font-bold text-lg sm:text-[19px] text-white tracking-tight leading-snug mb-2.5">
                          {step.title}
                        </h3>

                        <p className="text-sm text-[#9CA0A8] leading-relaxed font-normal">
                          {step.description}
                        </p>
                      </div>

                      {/* Card Bottom Deliverable Footer */}
                      <div className="pt-4 mt-6 border-t border-[#22252C] space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono-tech text-[10px] tracking-[0.14em] uppercase text-[#6D7076]">
                            Deliverable
                          </span>
                          <span className="font-mono-tech text-[11px] text-[#E5E7EB] font-medium">
                            {step.output}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {step.highlights.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-0.5 rounded-md bg-[#111315] border border-[#24272D] font-mono-tech text-[10px] text-[#9CA0A8]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </section>
    </MotionConfig>
  );
}
