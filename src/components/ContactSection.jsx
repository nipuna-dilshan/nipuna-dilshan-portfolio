'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  MotionConfig,
  motion,
  useReducedMotion,
} from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageCircle,
} from 'lucide-react';

const WHATSAPP_NUMBER_INTL = '94742647449';
const WHATSAPP_DISPLAY = '+94 74 264 7449';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(
  "Hi Nipuna, I'd like to discuss a project with you."
)}`;
const EMAIL_ADDRESS = 'nipuna.dilshan.me@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ndilshan/';
const GITHUB_URL = 'https://github.com/nipuna-dilshan';

const FOOTER_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

function LinkedInMark({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
    </svg>
  );
}

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permissions are blocked
    }
  };

  const viewportConfig = { once: true, amount: 0.15 };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative scroll-mt-24 bg-editorial-grid-dark text-white border-t border-[#24272D] overflow-x-clip px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-10 sm:pb-12"
      >
        {/* Subtle Bottom Ambient Glow */}
        <div
          className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 w-[34rem] h-56 rounded-full bg-[#F47745] opacity-[0.07] blur-[130px]"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Section Header */}
          <header className="mb-12 sm:mb-14 max-w-2xl">
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
                  06 // CONTACT
                </span>
              </div>
            </motion.div>

            <motion.h2
              id="contact-heading"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: 0.06, ease: EASE_OUT_EXPO }}
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-[1.08] text-white mb-5"
            >
              Have an idea?{' '}
              <span className="text-[#F47745]">
                Let&apos;s build something useful.
              </span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: 0.14, ease: EASE_OUT_EXPO }}
              className="text-sm sm:text-base text-[#9CA0A8] leading-relaxed font-normal"
            >
              Available for custom web applications, AI-powered solutions, workflow automation, and API integrations.
            </motion.p>
          </header>

          {/* 3 Direct Contact Channel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 sm:mb-20">
            {/* Card 1: WhatsApp (Primary Channel) */}
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, delay: 0.05, ease: EASE_OUT_EXPO }}
              className="group relative rounded-2xl bg-[#14171A] border border-[#F47745]/45 hover:border-[#F47745] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[0_18px_44px_-16px_rgba(244,119,69,0.2)] transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Top Orange Rim */}
              <div
                className="pointer-events-none absolute top-0 left-6 right-6 h-[1.5px] bg-linear-to-r from-transparent via-[#F47745] to-transparent opacity-85"
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold">
                    Primary Channel
                  </span>
                  <MessageCircle
                    className="w-4.5 h-4.5 text-[#F47745] stroke-[1.9]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2">
                  WhatsApp
                </h3>

                <p className="text-sm text-[#9CA0A8] leading-relaxed mb-4">
                  Direct communication for discussing project ideas, requirements, and timelines.
                </p>

                <p className="font-mono-tech text-xs text-[#C8CBD0] mb-6">
                  {WHATSAPP_DISPLAY}
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-[#F47745] hover:bg-[#e26735] text-white font-mono-tech text-xs font-semibold tracking-[0.14em] uppercase inline-flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(244,119,69,0.28)] transition-all active:scale-[0.98]"
              >
                <span>Start Chat</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
              </a>
            </motion.article>

            {/* Card 2: Email (Direct Inquiries + Copy Button) */}
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE_OUT_EXPO }}
              className="group relative rounded-2xl bg-[#14171A] border border-[#262930] hover:border-[#F47745]/50 p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#85878C] font-semibold">
                    Direct Inquiries
                  </span>
                  <Mail
                    className="w-4.5 h-4.5 text-[#F47745] stroke-[1.9]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2">
                  Email
                </h3>

                <p className="text-sm text-[#9CA0A8] leading-relaxed mb-4">
                  Send project specifications, documentation, or collaboration inquiries.
                </p>

                <p className="font-mono-tech text-xs text-[#C8CBD0] truncate mb-6">
                  {EMAIL_ADDRESS}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#1C2026] hover:bg-[#232830] border border-[#2C313A] hover:border-[#3E4552] text-white font-mono-tech text-xs font-semibold tracking-[0.14em] uppercase inline-flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F47745] stroke-[2.2]" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
                  title={copied ? 'Copied!' : 'Copy email address'}
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-all cursor-pointer active:scale-95 ${
                    copied
                      ? 'bg-[#10B981]/15 border-[#10B981]/50 text-[#10B981]'
                      : 'bg-[#1C2026] hover:bg-[#232830] border-[#2C313A] hover:border-[#F47745]/50 text-[#9CA0A8] hover:text-white'
                  }`}
                >
                  {copied ? (
                    <Check className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4 stroke-[1.9]" aria-hidden="true" />
                  )}
                </button>
              </div>
            </motion.article>

            {/* Card 3: LinkedIn (Professional Network) */}
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, delay: 0.19, ease: EASE_OUT_EXPO }}
              className="group relative rounded-2xl bg-[#14171A] border border-[#262930] hover:border-[#F47745]/50 p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#85878C] font-semibold">
                    Professional Network
                  </span>
                  <LinkedInMark className="w-4.5 h-4.5 text-[#F47745]" />
                </div>

                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2">
                  LinkedIn
                </h3>

                <p className="text-sm text-[#9CA0A8] leading-relaxed mb-4">
                  Connect with me professionally and follow my ongoing engineering projects.
                </p>

                <p className="font-mono-tech text-xs text-[#C8CBD0] mb-6">
                  linkedin.com/in/ndilshan
                </p>
              </div>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#1C2026] hover:bg-[#232830] border border-[#2C313A] hover:border-[#3E4552] text-white font-mono-tech text-xs font-semibold tracking-[0.14em] uppercase inline-flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#F47745] stroke-[2.2]" aria-hidden="true" />
              </a>
            </motion.article>
          </div>

          {/* Minimal Editorial Footer */}
          <footer className="pt-8 border-t border-[#22252C] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Brand Identity */}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="#home"
                  className="font-display font-extrabold text-base tracking-tight text-white"
                >
                  NIPUNA<span className="text-[#F47745]">.</span>
                </a>
                <span className="text-[#3E434D]" aria-hidden="true">
                  —
                </span>
                <span className="text-sm font-medium text-[#D0D3D9]">
                  Nipuna Dilshan
                </span>
              </div>
              <p className="text-xs text-[#6D7076] mt-1">
                AI Solutions Engineer • Sri Lanka
              </p>
            </div>

            {/* Section Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#85878C]"
            >
              {FOOTER_NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Social Links & Copyright */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#85878C]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-[#52555A]">
                © 2026 Nipuna Dilshan.
              </span>
            </div>
          </footer>
        </div>
      </section>
    </MotionConfig>
  );
}
