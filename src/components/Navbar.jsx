'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: '01', label: 'Home', href: '#home' },
  { id: '02', label: 'Capabilities', href: '#capabilities' },
  { id: '03', label: 'Projects', href: '#projects' },
  { id: '04', label: 'Process', href: '#process' },
  { id: '05', label: 'About', href: '#about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const triggerOffset = window.innerHeight * 0.35;
      let currentActive = 'Home';

      for (const item of NAV_ITEMS) {
        const id = item.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerOffset) {
            currentActive = item.label;
          }
        }
      }

      setActiveItem(currentActive);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeItemData = NAV_ITEMS.find((item) => item.label === activeItem) || NAV_ITEMS[0];
  const activeIndexDisplay = `${activeItemData.id} / 05`;

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item.label);
    setMobileMenuOpen(false);
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-4 sm:top-6 inset-x-0 z-40 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div className="rounded-2xl bg-[#111315]/80 backdrop-blur-xl border border-[#343434] shadow-[0_16px_40px_rgba(0,0,0,0.45)] px-4 sm:px-6 py-3.5 flex items-center justify-between">
            
            {/* Left: Brand Logo */}
            <a
              href="#home"
              className="flex items-center gap-0.5 group focus:outline-none"
              onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}
              aria-label="Nipuna Dilshan - Home"
            >
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white">
                NIPUNA
              </span>
              <span className="font-display font-extrabold text-lg sm:text-xl text-[#F47745]">
                .
              </span>
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 inline-flex items-center ${
                      isActive
                        ? 'text-white bg-white/7'
                        : 'text-[#85878C] hover:text-white hover:bg-white/3'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right: CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={(e) => {
                  const target = document.querySelector('#contact');
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2.5 rounded-xl bg-[#F47745] hover:bg-[#e26735] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(244,119,69,0.28)] inline-flex items-center gap-1.5 transition-all duration-150 active:scale-[0.98]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Mobile: Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 text-white/90 rounded-lg hover:bg-white/6 transition-colors focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 h-full w-full bg-[#111315] md:hidden overflow-y-auto animate-drawer-in flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="w-full max-w-md mx-auto flex flex-col justify-between min-h-full p-6 sm:p-8">
            {/* Top Section: Header + Meta + Links */}
            <div>
              {/* Header: Logo + Close Button */}
              <div className="flex items-center justify-between pb-5 border-b border-[#262A30]">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}
                  className="flex items-center gap-0.5 group focus:outline-none"
                >
                  <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                    NIPUNA
                  </span>
                  <span className="font-display font-extrabold text-2xl text-[#F47745]">
                    .
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/4 border border-[#2A2E35] flex items-center justify-center text-[#85878C] hover:text-white hover:bg-white/8 transition-all focus:outline-none active:scale-95"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 stroke-[2.2]" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Meta Row */}
              <div className="flex items-center justify-between pt-6 pb-4">
                <span className="font-mono-tech text-[11px] tracking-wider text-[#6F737B] uppercase font-semibold">
                  NAVIGATION
                </span>
                <span className="font-mono-tech text-xs text-[#6F737B] font-medium">
                  {activeIndexDisplay}
                </span>
              </div>

              {/* Menu Items List with Staggered Cascading Animation */}
              <nav className="flex flex-col gap-2 my-2" aria-label="Mobile Menu Links">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeItem === item.label;
                  return (
                    <div
                      key={item.label}
                      className="w-full animate-item-cascade"
                      style={{ animationDelay: `${100 + index * 55}ms` }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.99] ${
                          isActive
                            ? 'bg-[#1E2227] text-white font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]'
                            : 'text-[#D0D3D9] hover:text-white hover:bg-white/3 font-medium'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="font-display text-[19px] sm:text-[20px] tracking-tight">
                          {item.label}
                        </span>
                        {isActive ? (
                          <span
                            className="w-2.5 h-2.5 rounded-full bg-[#F47745] shadow-[0_0_10px_rgba(244,119,69,0.8)]"
                            aria-hidden="true"
                          />
                        ) : (
                          <span className="font-mono-tech text-xs text-[#5D616A]">
                            {item.id}
                          </span>
                        )}
                      </a>
                      {!isActive && (
                        <div className="border-b border-[#22252A] mx-2 my-0.5" />
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CTA: Let's Talk Button & Subtitle */}
            <div
              className="pt-6 border-t border-[#22252A] mt-8 animate-item-cascade"
              style={{ animationDelay: `${100 + NAV_ITEMS.length * 55}ms` }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const target = document.querySelector('#contact');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-4 rounded-2xl bg-[#F47745] hover:bg-[#e26735] text-white font-bold text-base inline-flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(244,119,69,0.32)] transition-all active:scale-[0.99]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </a>
              <p className="text-center text-xs text-[#71757E] mt-3 font-normal">
                Have a project in mind? Let&apos;s connect.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
