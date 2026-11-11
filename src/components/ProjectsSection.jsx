'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import ProjectVisualFrame from './ProjectVisualFrame';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];
const MOBILE_AUTO_SLIDE_MS = 5000;

function ProjectStatusBadge({ project }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md font-mono-tech text-[10px] sm:text-[11px] tracking-[0.12em] uppercase border ${
        project.isConcept
          ? 'bg-[#ECE9E2] border-[#DCD8CF] text-[#52555A]'
          : 'bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          project.isConcept ? 'bg-[#85878C]' : 'bg-[#10B981]'
        }`}
        aria-hidden="true"
      />
      <span>{project.status}</span>
    </span>
  );
}

function LightProjectPanel({ project, isInteractive = true, priority = false }) {
  const confirmedTechs = project.techGroups.flatMap((group) => group.items);
  const displayTags =
    confirmedTechs.length > 0 ? confirmedTechs : project.cardTags;

  return (
    <div className="w-full rounded-2xl bg-[#F7F5F0] border border-[#E5E1D8] text-[#111315] p-5 sm:p-7 lg:p-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_24px_56px_-16px_rgba(0,0,0,0.65)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Project Details */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono-tech text-xs font-bold text-[#F47745] px-2.5 py-1 rounded-md bg-[#F47745]/10 border border-[#F47745]/25">
              {project.id}
            </span>
            <ProjectStatusBadge project={project} />
          </div>

          <div className="space-y-1.5">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-[30px] text-[#111315] tracking-tight leading-[1.15]">
              {project.title}
            </h3>
            <p className="font-display font-semibold text-sm sm:text-[15px] text-[#F47745]">
              {project.headline}
            </p>
          </div>

          <p className="text-sm text-[#52555A] leading-relaxed font-normal">
            {project.shortDescription}
          </p>

          {/* Simple Problem & Solution Summary */}
          <div className="space-y-2 pt-3 border-t border-[#E5E1D8] text-xs sm:text-[13px] leading-relaxed">
            <p className="text-[#3A3D42]">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#6D7076] font-semibold mr-2">
                Problem:
              </span>
              {project.cardProblem}
            </p>
            <p className="text-[#3A3D42]">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#6D7076] font-semibold mr-2">
                Solution:
              </span>
              {project.cardSolution}
            </p>
          </div>

          {/* Neutral Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white border border-[#E5E1D8] font-mono-tech text-[11px] text-[#2A2D32]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Orange View Case Study CTA */}
          <div className="pt-2">
            <Link
              href={`/projects/${project.slug}`}
              tabIndex={isInteractive ? 0 : -1}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F47745] hover:bg-[#e26735] text-white font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>View Case Study</span>
              <ArrowUpRight
                className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Right Column: Subtle Framed Screenshot */}
        <div className="lg:col-span-7">
          <ProjectVisualFrame
            project={project}
            variant="light"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

function StickyStackCard({ project, index, total, progress, prefersReducedMotion }) {
  const isLast = index === total - 1;
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const rangeStart = Math.min((index / total) * 0.85, 0.7);

  const scale = useTransform(
    progress,
    [rangeStart, 1],
    [1, isLast ? 1 : targetScale]
  );

  const dimOpacity = useTransform(
    progress,
    [rangeStart, Math.min(rangeStart + 0.35, 1)],
    [0, isLast ? 0 : 0.22]
  );

  // Sticky offset clears the floating navbar cleanly and creates stacked top peek
  const stickyTopPx = 104 + index * 18;

  return (
    <div
      style={prefersReducedMotion ? undefined : { top: `${stickyTopPx}px` }}
      className={`${
        prefersReducedMotion ? 'relative' : 'sticky'
      } mb-14 xl:mb-20 last:mb-0`}
    >
      <motion.article
        style={
          prefersReducedMotion
            ? undefined
            : { scale, transformOrigin: 'top center' }
        }
        className="relative rounded-2xl will-change-transform"
      >
        <LightProjectPanel
          project={project}
          isInteractive={true}
          priority={index === 0}
        />

        {/* Subtle depth scrim when subsequent cards stack on top */}
        {!prefersReducedMotion && !isLast && (
          <motion.div
            style={{ opacity: dimOpacity }}
            className="pointer-events-none absolute inset-0 rounded-2xl bg-[#111315]"
            aria-hidden="true"
          />
        )}
      </motion.article>
    </div>
  );
}

function MobileProjectSlider({ prefersReducedMotion }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const total = PROJECTS.length;

  useEffect(() => {
    if (prefersReducedMotion || isPaused || total <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, MOBILE_AUTO_SLIDE_MS);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      if (deltaX > 45) {
        handlePrev();
      } else if (deltaX < -45) {
        handleNext();
      }
      touchStartX.current = null;
    }
    setIsPaused(false);
  };

  return (
    <div
      className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Viewport */}
      <div
        className="overflow-hidden -mx-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: EASE_OUT_EXPO }
          }
          className="flex"
        >
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              aria-hidden={currentIndex !== index}
              className="w-full shrink-0 px-2"
            >
              <LightProjectPanel
                project={project}
                isInteractive={currentIndex === index}
                priority={index === 0}
              />
            </article>
          ))}
        </motion.div>
      </div>

      {/* Slider Controls Bar */}
      <div className="mt-6 flex items-center justify-between gap-4">
        {/* Pagination Dots */}
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Project slides"
        >
          {PROJECTS.map((project, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show project ${project.id}: ${project.title}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-7 bg-[#F47745]'
                    : 'w-2 bg-[#343842] hover:bg-[#525662]'
                }`}
              />
            );
          })}
        </div>

        {/* Counter & Manual Prev / Next Buttons */}
        <div className="flex items-center gap-3">
          <span className="font-mono-tech text-xs text-[#85878C]">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(total).padStart(2, '0')}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-9 h-9 rounded-xl bg-[#16181B] border border-[#282B30] hover:border-[#F47745]/50 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="w-9 h-9 rounded-xl bg-[#16181B] border border-[#282B30] hover:border-[#F47745]/50 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const stackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start 15%', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  const viewportConfig = { once: true, amount: 0.2 };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="relative bg-editorial-grid-dark text-white border-t border-[#24272D]"
      >
        {/* Section Introduction */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 lg:pb-16">
          <header>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16181B] border border-[#282B30]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F47745]"
                  aria-hidden="true"
                />
                <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#C8CBD0] font-medium">
                  03 // SELECTED WORK
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <motion.h2
                id="projects-heading"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: 0.06, ease: EASE_OUT_EXPO }}
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1.1] text-white"
              >
                Turning Ideas Into{' '}
                <span className="text-[#F47745]">Working Solutions.</span>
              </motion.h2>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: 0.14, ease: EASE_OUT_EXPO }}
                className="text-sm sm:text-base text-[#9CA0A8] leading-relaxed max-w-md lg:border-l lg:border-[#282B30] lg:pl-6 font-normal"
              >
                A selection of software projects focused on solving practical problems, improving workflows, and creating meaningful digital experiences.
              </motion.p>
            </div>
          </header>
        </div>

        {/* Desktop Sticky Stacked Cream Cards */}
        <div
          ref={stackRef}
          className="hidden lg:block max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32"
        >
          {PROJECTS.map((project, index) => (
            <StickyStackCard
              key={project.id}
              project={project}
              index={index}
              total={PROJECTS.length}
              progress={smoothProgress}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* Mobile / Tablet Auto-Playing Slider */}
        <MobileProjectSlider prefersReducedMotion={prefersReducedMotion} />
      </section>
    </MotionConfig>
  );
}
