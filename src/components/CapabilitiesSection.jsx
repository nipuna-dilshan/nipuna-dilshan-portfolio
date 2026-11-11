'use client';

import React, { useRef, useState } from 'react';
import {
  MotionConfig,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import {
  ArrowDown,
  BarChart2,
  Bot,
  Check,
  Cpu,
  Heart,
  Layers,
  Link2,
  Mouse,
  Rocket,
  Settings,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';

const CAPABILITIES = [
  {
    id: '01',
    side: 'left',
    title: 'AI Workflow Automation',
    description:
      'Automate repetitive tasks, document processing, and routine operations with intelligent AI workflows.',
    icon: Bot,
    benefits: [
      { label: 'Save Time', icon: Zap },
      { label: 'Reduce Costs', icon: BarChart2 },
      { label: 'Boost Productivity', icon: Check },
    ],
  },
  {
    id: '02',
    side: 'right',
    title: 'Web & Mobile Application Development',
    description:
      'Build fast, responsive web applications, mobile apps, and client portals tailored to your business needs.',
    icon: Smartphone,
    benefits: [
      { label: 'Grow Your Business', icon: TrendingUp },
      { label: 'Better UX', icon: Heart },
      { label: 'Scalable Solutions', icon: Layers },
    ],
  },
  {
    id: '03',
    side: 'left',
    title: 'API & System Integrations',
    description:
      'Connect CRMs, payment gateways, databases, and third-party tools into one unified, reliable system.',
    icon: Share2,
    benefits: [
      { label: 'Streamline Operations', icon: Link2 },
      { label: 'Integrate Easily', icon: Settings },
      { label: 'Work Smarter', icon: Zap },
    ],
  },
  {
    id: '04',
    side: 'right',
    title: 'AI-Powered Applications',
    description:
      'Develop custom intelligent products featuring smart search, LLM workflows, and automated decision tools.',
    icon: Cpu,
    benefits: [
      { label: 'Smart Automation', icon: Sparkles },
      { label: 'Ensure Reliability', icon: ShieldCheck },
      { label: 'Build for Scale', icon: Rocket },
    ],
  },
];

const EASE_SILK = [0.16, 1, 0.3, 1];

export default function CapabilitiesSection() {
  const prefersReducedMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 72%', 'end 62%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 22,
    mass: 0.4,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (latest <= 0.03) {
      setScrollActiveIndex(-1);
    } else if (latest < 0.3) {
      setScrollActiveIndex(0);
    } else if (latest < 0.58) {
      setScrollActiveIndex(1);
    } else if (latest < 0.84) {
      setScrollActiveIndex(2);
    } else {
      setScrollActiveIndex(3);
    }
  });

  const effectiveActiveIndex =
    hoveredIndex !== null ? hoveredIndex : scrollActiveIndex;

  const viewportConfig = { once: true, amount: 0.2 };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="capabilities"
        aria-labelledby="capabilities-heading"
        className="relative py-24 sm:py-32 bg-editorial-grid-light text-[#111315] px-4 sm:px-6 lg:px-8 border-b border-[#E5E1D8] overflow-x-clip"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <header className="mb-16 sm:mb-20">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, ease: EASE_SILK }}
              className="mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E1D8] shadow-[0_2px_8px_rgba(17,19,21,0.03)]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F47745]"
                  aria-hidden="true"
                />
                <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#52555A] font-medium">
                  02 // CAPABILITIES
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <motion.h2
                id="capabilities-heading"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.65, delay: 0.06, ease: EASE_SILK }}
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1.1] text-[#111315]"
              >
                What I <span className="text-[#F47745]">design &amp; build.</span>
              </motion.h2>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.65, delay: 0.14, ease: EASE_SILK }}
                className="text-sm sm:text-base text-[#52555A] leading-relaxed max-w-md lg:border-l lg:border-[#DCD8CF] lg:pl-6 font-normal"
              >
                Practical software engineering, intelligent workflows, and reliable system integrations built to save time and drive real business growth.
              </motion.p>
            </div>
          </header>

          {/* Alternating Timeline Grid */}
          <div ref={timelineRef} className="relative">
            {/* Desktop Central Spine Track */}
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-28 bottom-28 w-[1.5px] bg-[#E2DDD3]"
              aria-hidden="true"
            >
              {/* Scroll-Driven Active Orange Line */}
              <motion.div
                style={{
                  scaleY: prefersReducedMotion ? 1 : smoothProgress,
                }}
                className="w-full h-full bg-[#F47745] origin-top"
              />
            </div>

            {/* Cards Grid (All White Cards, Alternating Left/Right on Desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-16 items-start">
              {CAPABILITIES.map((cap, index) => {
                const Icon = cap.icon;
                const isRight = cap.side === 'right';
                const isActive = effectiveActiveIndex === index;

                // Vertical stagger spacing on desktop to create alternating timeline flow
                let staggerPositionClass = '';
                if (index === 1) staggerPositionClass = 'lg:mt-28';
                if (index === 2) staggerPositionClass = 'lg:-mt-12';
                if (index === 3) staggerPositionClass = 'lg:mt-16';

                return (
                  <div
                    key={cap.id}
                    className={`relative ${staggerPositionClass}`}
                  >
                    {/* Desktop Horizontal Connector Branch */}
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[1.5px] w-8 transition-colors duration-500 ${
                        isActive ? 'bg-[#F47745]' : 'bg-[#E2DDD3]'
                      } ${isRight ? '-left-8' : '-right-8'}`}
                      aria-hidden="true"
                    />

                    {/* Center Timeline Node */}
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? false
                          : { scale: 0.7, opacity: 0 }
                      }
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={viewportConfig}
                      transition={{
                        duration: 0.5,
                        delay: 0.12,
                        ease: EASE_SILK,
                      }}
                      className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F7F5F0] border-2 items-center justify-center z-10 shadow-[0_0_0_4px_#F7F5F0] transition-all duration-300 ${
                        isActive
                          ? 'border-[#F47745] scale-115'
                          : 'border-[#D4CFC5]'
                      } ${
                        isRight
                          ? '-left-8 -translate-x-1/2'
                          : '-right-8 translate-x-1/2'
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-[#F47745]' : 'bg-[#C4BEB3]'
                        }`}
                      />
                    </motion.div>

                    {/* Animated Card Entrance Wrapper */}
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 24,
                            }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportConfig}
                      transition={{
                        duration: 0.65,
                        delay: 0.06,
                        ease: EASE_SILK,
                      }}
                    >
                      <article
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group rounded-2xl bg-white p-6 sm:p-7 transition-all duration-500 ease-out border ${
                          isActive
                            ? 'border-[#F47745] ring-1 ring-[#F47745]/25 -translate-y-1 shadow-[0_18px_42px_rgba(244,119,69,0.12)]'
                            : 'border-[#E5E1D8] shadow-[0_8px_28px_rgba(17,19,21,0.04)] hover:border-[#F47745] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(244,119,69,0.12)]'
                        }`}
                      >
                        {/* Top Row: Badge + Title/Desc (Left) & Icon Container (Right) */}
                        <div className="flex items-start justify-between gap-5">
                          <div className="space-y-2.5">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full font-mono-tech text-[11px] font-semibold border transition-colors duration-300 ${
                                isActive
                                  ? 'bg-[#F47745] border-[#F47745] text-white'
                                  : 'bg-[#FFF3EC] border-[#FADBC9] text-[#F47745]'
                              }`}
                            >
                              {cap.id}
                            </span>

                            <h3 className="font-display font-bold text-xl sm:text-[22px] tracking-tight leading-snug text-[#111315]">
                              {cap.title}
                            </h3>

                            <p className="text-sm leading-relaxed font-normal text-[#52555A]">
                              {cap.description}
                            </p>
                          </div>

                          {/* Right Icon Box */}
                          <motion.div
                            initial={
                              prefersReducedMotion
                                ? false
                                : { opacity: 0, scale: 0.88 }
                            }
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={viewportConfig}
                            transition={{
                              duration: 0.5,
                              delay: 0.14,
                              ease: EASE_SILK,
                            }}
                            className={`w-13 h-13 rounded-2xl border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                              isActive
                                ? 'bg-[#F47745]/12 border-[#F47745]/50 text-[#F47745]'
                                : 'bg-[#FFF4EE] border-[#FADBC9] text-[#F47745]'
                            }`}
                          >
                            <Icon className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />
                          </motion.div>
                        </div>

                        {/* Bottom Benefit Pills */}
                        <ul
                          className="mt-6 flex flex-wrap items-center gap-2"
                          aria-label={`${cap.title} business benefits`}
                        >
                          {cap.benefits.map((benefit, bIndex) => {
                            const BenefitIcon = benefit.icon;
                            return (
                              <motion.li
                                key={benefit.label}
                                initial={
                                  prefersReducedMotion
                                    ? false
                                    : { opacity: 0, y: 6 }
                                }
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportConfig}
                                transition={{
                                  duration: 0.45,
                                  delay: 0.18 + bIndex * 0.06,
                                  ease: EASE_SILK,
                                }}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium border transition-colors duration-300 ${
                                  isActive
                                    ? 'bg-[#FFF6F0] border-[#FADBC9] text-[#111315]'
                                    : 'bg-[#FAF8F5] border-[#E7E4DC] text-[#2A2D32]'
                                }`}
                              >
                                <BenefitIcon
                                  className="w-3.5 h-3.5 text-[#F47745] shrink-0 stroke-[2.2]"
                                  aria-hidden="true"
                                />
                                <span>{benefit.label}</span>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </article>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE_SILK }}
            className="mt-16 sm:mt-20 flex items-center justify-center gap-5"
          >
            <span className="h-px w-16 sm:w-28 bg-[#DCD8CF]" aria-hidden="true" />
            <div className="flex flex-col items-center gap-1.5 text-[#6D7076]">
              <Mouse className="w-5 h-5 stroke-[1.7] text-[#111315]" aria-hidden="true" />
              <span className="font-sans text-[11px] font-medium tracking-wide">
                Scroll to explore
              </span>
              <ArrowDown className="w-3.5 h-3.5 text-[#6D7076]" aria-hidden="true" />
            </div>
            <span className="h-px w-16 sm:w-28 bg-[#DCD8CF]" aria-hidden="true" />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
