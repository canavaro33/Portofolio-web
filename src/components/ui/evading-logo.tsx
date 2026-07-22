"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

/** Safe area padding so the logo never escapes beyond the screen edges */
const SAFE_PAD = 24;
/** Distance threshold — logo starts evading when cursor enters this radius */
const EVADE_RADIUS = 110;
/** How far the logo leaps away when evading */
const EVADE_STRENGTH = 160;

export function EvadingLogo() {
  // Track current logical position
  const posRef = useRef({ x: 0, y: 0 });
  const [initialized, setInitialized] = useState(false);

  // Framer springs for smooth, snappy movement
  const springConfig = { stiffness: 420, damping: 28, mass: 0.6 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  // Tooltip visibility
  const [hinted, setHinted] = useState(false);
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Set the initial bottom-right position once window is available
  useEffect(() => {
    const initX = window.innerWidth - 72 - SAFE_PAD;
    const initY = window.innerHeight - 72 - SAFE_PAD;
    posRef.current = { x: initX, y: initY };
    springX.set(initX);
    springY.set(initY);
    setInitialized(true);
  }, [springX, springY]);

  const clamp = useCallback((val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val)), []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const logoSize = 52;
      const cx = posRef.current.x + logoSize / 2;
      const cy = posRef.current.y + logoSize / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < EVADE_RADIUS) {
        // Repulsive unit vector (away from cursor)
        const len = dist || 1;
        const ux = -dx / len;
        const uy = -dy / len;

        // Scale evade strength: stronger when cursor is closer
        const force = EVADE_STRENGTH * (1 - dist / EVADE_RADIUS);

        const maxX = window.innerWidth - logoSize - SAFE_PAD;
        const maxY = window.innerHeight - logoSize - SAFE_PAD;

        const newX = clamp(posRef.current.x + ux * force, SAFE_PAD, maxX);
        const newY = clamp(posRef.current.y + uy * force, SAFE_PAD, maxY);

        posRef.current = { x: newX, y: newY };
        springX.set(newX);
        springY.set(newY);

        // Show the hint tooltip briefly the first time
        if (!hinted) {
          setHinted(true);
          hintTimer.current = setTimeout(() => setHinted(false), 1800);
        }
      }
    },
    [springX, springY, clamp, hinted]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (hintTimer.current) clearTimeout(hintTimer.current);
    };
  }, [handleMouseMove]);

  if (!initialized) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 z-50 pointer-events-auto select-none"
      aria-label="Juventus logo Easter egg — try to catch it"
      role="img"
    >
      {/* Tooltip hint */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: hinted ? 1 : 0, y: hinted ? 0 : 4 }}
        transition={{ duration: 0.25 }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] tracking-widest uppercase text-gold/70 pointer-events-none"
      >
        Can&apos;t catch me 👀
      </motion.div>

      {/* Logo container */}
      <div
        className="relative flex items-center justify-center cursor-pointer"
        style={{
          width: 52,
          height: 52,
          background: "rgba(17, 17, 17, 0.82)",
          border: "1px solid rgba(212, 175, 55, 0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(212,175,55,0.1)",
        }}
      >
        {/* Inline Juventus SVG — two parallel J strokes */}
        <svg
          width="22"
          height="30"
          viewBox="0 0 30 42"
          fill="#D4AF37"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M 4 2 L 12 2 L 12 28 Q 12 38 4 38 L 2 38 Q 2 30 4 28 L 4 2 Z" />
          <path d="M 18 2 L 26 2 L 26 28 Q 26 38 18 38 L 16 38 Q 16 30 18 28 L 18 2 Z" />
        </svg>

        {/* Corner accent ticks */}
        <span
          aria-hidden="true"
          className="absolute top-1 left-1 w-2 h-px bg-gold/40"
        />
        <span
          aria-hidden="true"
          className="absolute top-1 left-1 w-px h-2 bg-gold/40"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-1 right-1 w-2 h-px bg-gold/40"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-1 right-1 w-px h-2 bg-gold/40"
        />
      </div>
    </motion.div>
  );
}
