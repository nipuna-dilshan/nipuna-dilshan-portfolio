'use client';

import React, { useState } from 'react';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from 'framer-motion';
import TechBrandLogo from './TechBrandLogos';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

const CATEGORIES = [
  'All Stack',
  'Frontend',
  'Backend',
  'Databases & Cloud',
  'AI & Automation',
];

const TECH_STACK = [
  { id: 'react', name: 'React', subtitle: 'Frontend', category: 'Frontend' },
  { id: 'nextjs', name: 'Next.js', subtitle: 'Frontend', category: 'Frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', subtitle: 'Frontend', category: 'Frontend' },
  { id: 'flutter', name: 'Flutter', subtitle: 'Frontend', category: 'Frontend' },
  { id: 'springboot', name: 'Spring Boot', subtitle: 'Java • Backend', category: 'Backend' },
  { id: 'nodejs', name: 'Node.js', subtitle: 'Backend', category: 'Backend' },
  { id: 'go', name: 'Go', subtitle: 'Backend', category: 'Backend' },
  { id: 'postgresql', name: 'PostgreSQL', subtitle: 'Databases', category: 'Databases & Cloud' },
  { id: 'supabase', name: 'Supabase', subtitle: 'Databases', category: 'Databases & Cloud' },
  { id: 'mysql', name: 'MySQL', subtitle: 'Databases', category: 'Databases & Cloud' },
  { id: 'firebase', name: 'Firebase', subtitle: 'Cloud & Databases', category: 'Databases & Cloud' },
  { id: 'n8n', name: 'n8n Workflows', subtitle: 'AI & Automation', category: 'AI & Automation' },
  { id: 'openai', name: 'OpenAI API', subtitle: 'AI & Automation', category: 'AI & Automation' },
  { id: 'langchain', name: 'LangChain', subtitle: 'AI & Automation', category: 'AI & Automation' },
];

export default function TechStackSection() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState('All Stack');

  const filteredTech =
    selectedCategory === 'All Stack'
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === selectedCategory);

  const viewportConfig = { once: true, amount: 0.2 };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="technologies"
        aria-labelledby="technologies-heading"
        className="relative py-20 sm:py-28 bg-editorial-grid-light text-[#111315] px-4 sm:px-6 lg:px-8 border-t border-b border-[#E5E1D8]"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <header className="mb-10 sm:mb-12">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E1D8] shadow-[0_2px_8px_rgba(17,19,21,0.03)]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F47745]"
                  aria-hidden="true"
                />
                <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#52555A] font-medium">
                  CORE TECHNOLOGIES
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <motion.h2
                id="technologies-heading"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.55, delay: 0.06, ease: EASE_OUT_EXPO }}
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.1] text-[#111315]"
              >
                Core Engineering{' '}
                <span className="text-[#F47745]">Stack.</span>
              </motion.h2>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.55, delay: 0.12, ease: EASE_OUT_EXPO }}
                className="text-sm sm:text-base text-[#52555A] leading-relaxed max-w-md lg:border-l lg:border-[#DCD8CF] lg:pl-6 font-normal"
              >
                Frameworks, backend runtimes, databases, and automation platforms I work with to build reliable production systems.
              </motion.p>
            </div>
          </header>

          {/* Category Filter Pills */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="flex flex-wrap items-center gap-2.5 mb-9 sm:mb-11"
            role="tablist"
            aria-label="Filter technologies by category"
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-sans text-xs sm:text-[13px] font-semibold border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#F47745] border-[#F47745] text-white shadow-[0_6px_16px_rgba(244,119,69,0.24)]'
                      : 'bg-white border-[#E5E1D8] text-[#52555A] hover:border-[#F47745]/45 hover:text-[#111315]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>

          {/* Clean Technology Cards Grid */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedCategory}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.18,
                ease: EASE_OUT_EXPO,
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
            >
              {filteredTech.map((tech) => (
                <div
                  key={tech.id}
                  className="group rounded-2xl bg-white border border-[#E5E1D8] hover:border-[#F47745]/45 px-4 py-4 sm:px-5 sm:py-4.5 flex items-center gap-3.5 shadow-[0_4px_16px_rgba(17,19,21,0.03)] hover:shadow-[0_12px_28px_rgba(17,19,21,0.06)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  {/* Soft Warm Cream Container for Crisp Official Brand Logos */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FAF8F5] border border-[#EAE6DD] group-hover:border-[#F47745]/40 flex items-center justify-center shrink-0 transition-colors duration-200">
                    <TechBrandLogo id={tech.id} />
                  </div>

                  {/* Tech Title & Category */}
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-[15px] sm:text-base text-[#111315] tracking-tight truncate">
                      {tech.name}
                    </h3>
                    <p className="font-mono-tech text-[11px] sm:text-xs text-[#6D7076] mt-0.5">
                      {tech.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  );
}
