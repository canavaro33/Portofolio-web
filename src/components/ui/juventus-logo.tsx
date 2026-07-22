"use client";

interface JuventusLogoProps {
  size?: number;
  className?: string;
  id?: string;
}

/**
 * Replicates the iconic modern Juventus logo mark using pure inline SVG paths.
 *
 * Geometry (viewBox 0 0 30 42):
 *   Two thick parallel vertical stripes, each 8 units wide, separated by a
 *   6-unit gap.  At the bottom of each stripe the right edge sweeps smoothly
 *   leftward (Q bezier, quarter-turn) and the inner concave corner is echoed
 *   with a matching inner curve — producing the signature double-J silhouette
 *   as seen in the modern Juventus badge.
 *
 *   Left stripe  stem : x 4 – 12, y 2 – 28
 *   Left stripe  hook : Q(12,38)(4,38)  →  L(2,38)  →  Q(2,30)(4,28)
 *   Right stripe stem : x 18 – 26, y 2 – 28
 *   Right stripe hook : Q(26,38)(18,38) →  L(16,38) →  Q(16,30)(18,28)
 *
 * No fonts, no images — pure geometry.
 */
export function JuventusLogo({
  size = 32,
  className = "",
  id,
}: JuventusLogoProps) {
  return (
    <svg
      id={id}
      width={size}
      height={Math.round(size * 1.4)}
      viewBox="0 0 30 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Juventus J logo mark"
      role="img"
    >
      {/* ── Left stripe ── */}
      {/*
        Clockwise trace:
          top-left (4,2) → top-right (12,2)
          → down right side (12,28)
          → outer hook curve Q(12,38)(4,38)   [quarter-turn: down → left]
          → hook tip extension L(2,38)
          → inner concave curve Q(2,30)(4,28)  [quarter-turn: up → right]
          → up left stem side (4,2)
      */}
      <path d="M 4 2 L 12 2 L 12 28 Q 12 38 4 38 L 2 38 Q 2 30 4 28 L 4 2 Z" />

      {/* ── Right stripe ── */}
      {/*
        Identical geometry shifted 14 units to the right.
      */}
      <path d="M 18 2 L 26 2 L 26 28 Q 26 38 18 38 L 16 38 Q 16 30 18 28 L 18 2 Z" />
    </svg>
  );
}

/**
 * Large translucent watermark used as a decorative backdrop in the Hero section.
 * Same double-J geometry, fixed low-opacity white fill.
 */
export function JuventusWatermark({
  size = 320,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.4)}
      viewBox="0 0 30 42"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 4 2 L 12 2 L 12 28 Q 12 38 4 38 L 2 38 Q 2 30 4 28 L 4 2 Z"
        opacity="0.06"
      />
      <path
        d="M 18 2 L 26 2 L 26 28 Q 26 38 18 38 L 16 38 Q 16 30 18 28 L 18 2 Z"
        opacity="0.06"
      />
    </svg>
  );
}
