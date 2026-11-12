"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "nipuna_intro_seen";

const LETTER_PATHS = [
  // N
  "M 18 60 V 12 L 50 60 V 12",
  // I
  "M 72 12 V 60",
  // P
  "M 96 60 V 12 H 116 C 126 12 132 18 132 27 C 132 36 126 42 116 42 H 96",
  // U
  "M 152 12 V 44 C 152 55 159 61 170 61 C 181 61 188 55 188 44 V 12",
  // N
  "M 212 60 V 12 L 244 60 V 12",
  // A
  "M 266 60 L 285 12 L 304 60 M 272 44 H 298",
];

export default function Preloader() {
  const [phase, setPhase] = useState("loading"); // "loading" | "exiting" | "done"

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (prefersReducedMotion || alreadySeen) {
      const id = requestAnimationFrame(() => setPhase("done"));
      return () => cancelAnimationFrame(id);
    }

    let minTimeElapsed = false;
    let pageLoaded = document.readyState === "complete";
    let exited = false;

    const triggerExit = () => {
      if (exited) return;
      exited = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Ignore storage errors in restricted contexts
      }
      setPhase("exiting");
    };

    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      if (pageLoaded) triggerExit();
    }, 1050);

    // Safety cap so a slow external resource never blocks the user
    const maxTimer = setTimeout(() => {
      triggerExit();
    }, 2000);

    const handleLoad = () => {
      pageLoaded = true;
      if (minTimeElapsed) triggerExit();
    };

    if (!pageLoaded) {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence onExitComplete={() => setPhase("done")}>
      {phase === "loading" && (
        <motion.div
          key="editorial-curtain"
          aria-hidden="true"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            pointerEvents: "none",
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111315] bg-editorial-grid-dark select-none overflow-hidden px-6"
        >
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(244, 119, 69, 0.08) 0%, rgba(17, 19, 21, 0) 55%)",
            }}
          />

          {/* Vector Stroke-Draw Wordmark */}
          <motion.div
            initial={{ opacity: 0.9, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[220px] sm:w-[300px]"
          >
            <svg
              viewBox="0 0 348 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto overflow-visible"
            >
              {LETTER_PATHS.map((d, index) => (
                <motion.path
                  key={index}
                  d={d}
                  stroke="#FFFFFF"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: {
                      duration: 0.55,
                      delay: index * 0.075,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.14,
                      delay: index * 0.075,
                    },
                  }}
                />
              ))}

              {/* Signature Orange Dot */}
              <motion.circle
                cx="324"
                cy="55"
                r="6"
                fill="#F47745"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                transition={{
                  duration: 0.35,
                  delay: 0.68,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
