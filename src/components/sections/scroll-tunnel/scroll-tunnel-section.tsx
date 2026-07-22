"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TUNNEL_PROJECTS = [
  {
    id: "tunnel-1",
    label: "AI & Full Stack",
    title: "PT ITM Corporate AI Chatbot Portal",
    subtitle: "Premium Corporate AI Portal · June 2026",
    description:
      "Enterprise web application featuring luxury glassmorphic UI, Three.js 3D object, and Dual LLM Support (Claude & GPT-4o) backed by PostgreSQL.",
    tags: ["Next.js 14", "Three.js", "PostgreSQL", "TypeScript"],
    accentColor: "#E6C687",
  },
  {
    id: "tunnel-2",
    label: "Frontend Development",
    title: "SIAKAD Maleo",
    subtitle: "Frontend Engineering — April 2026 - Present",
    description:
      "Engineered the responsive frontend architecture for a comprehensive school Academic Information System using Next.js and Tailwind CSS. Built intuitive UI components for automated class scheduling, digital attendance, and student grade reports.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    accentColor: "#D4AF37",
  },
  {
    id: "tunnel-3",
    label: "Data & Business",
    title: "FoodTruck Analytics",
    subtitle: "Owner & Operator · 2024 – 2025",
    description:
      "Automated financial reports and customer behavior analytics using Excel and Power Query.",
    tags: ["Excel", "Power Query", "Analytics"],
    accentColor: "#D4AF37",
  },
  {
    id: "tunnel-4",
    label: "Data Visualization",
    title: "Power BI Dashboards",
    subtitle: "Analytics Projects · 2024",
    description:
      "Sales Performance Dashboard and Retail Sales Trend Analysis using Power BI and SQL.",
    tags: ["Power BI", "SQL", "Visualization"],
    accentColor: "#D4AF37",
  },
];

interface TunnelCardProps {
  project: (typeof TUNNEL_PROJECTS)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}

function TunnelCard({ project, index, scrollYProgress, total }: TunnelCardProps) {
  // Each card occupies a 1/total slice of the scroll range
  // Card enters: starts at scale 0.3, opacity 0 → grows to scale 1, opacity 1
  // Card exits: continues scaling to 3 and fades out (simulating flying past)
  const segmentSize = 1 / total;
  const enterStart = index * segmentSize;
  const peak = enterStart + segmentSize * 0.45;
  const exitEnd = enterStart + segmentSize;

  const scale = useTransform(
    scrollYProgress,
    [enterStart, peak, exitEnd],
    [0.28, 1, 3]
  );
  const opacity = useTransform(
    scrollYProgress,
    [enterStart, enterStart + segmentSize * 0.15, peak, peak + segmentSize * 0.2, exitEnd],
    [0, 1, 1, 0.6, 0]
  );
  const z = useTransform(
    scrollYProgress,
    [enterStart, peak, exitEnd],
    [-600, 0, 600]
  );

  // Stagger horizontal position slightly for a 3D parallax feel
  const positions = [
    { x: "-38%", y: "-48%" },
    { x: "-50%", y: "-50%" },
    { x: "-62%", y: "-52%" },
    { x: "-44%", y: "-46%" },
  ];
  const pos = positions[index % positions.length];

  return (
    <motion.div
      style={{
        scale,
        opacity,
        z,
        position: "absolute",
        top: "50%",
        left: "50%",
        translateX: pos.x,
        translateY: pos.y,
        transformStyle: "preserve-3d",
      }}
      className="w-[320px] md:w-[380px] will-change-transform"
    >
      <div
        className="relative overflow-hidden p-7 md:p-8"
        style={{
          background: "#1A1A1A",
          border: "1px solid #262626",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(212,175,55,0.08)",
        }}
      >
        {/* Gold top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
        />

        {/* Inner ambient glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(212,175,55,0.06) 0%, transparent 55%)",
          }}
        />

        {/* Label + index */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">
            {project.label}
          </span>
          <span
            className="font-mono text-[9px] tracking-widest px-2 py-0.5"
            style={{
              border: "1px solid rgba(212,175,55,0.25)",
              color: "rgba(212,175,55,0.7)",
            }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-2xl text-off-white tracking-tight leading-tight mb-1 relative z-10">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="font-mono text-[10px] tracking-wider text-gold/50 mb-4 relative z-10">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="font-sans text-sm text-off-white/50 leading-relaxed mb-5 relative z-10">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 relative z-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider px-2.5 py-1 text-off-white/50"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ScrollTunnelSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Ambient perspective grid opacity — fades in as user scrolls
  const gridOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.6, 0.6, 0]);

  // Section label fade
  const labelOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="work"
      data-testid="scroll-tunnel-section"
      className="relative h-[300vh]"
      aria-label="Scroll through featured projects"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#111111]">

        {/* ── Perspective grid floor (CSS only, no images) ── */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: gridOpacity }}
          className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Horizontal grid lines converging to vanishing point */}
            {[0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 0.9, 1].map((t, i) => {
              const y = 400 * t;
              const xLeft = 600 - 600 * (1 - t * 0.98);
              const xRight = 600 + 600 * (1 - t * 0.98);
              return (
                <line
                  key={`h${i}`}
                  x1={xLeft}
                  y1={y}
                  x2={xRight}
                  y2={y}
                  stroke="#D4AF37"
                  strokeWidth="0.4"
                  opacity={0.12 + t * 0.18}
                />
              );
            })}
            {/* Vertical (radial) lines from vanishing point */}
            {[-5,-4,-3,-2,-1,0,1,2,3,4,5].map((n, i) => (
              <line
                key={`v${i}`}
                x1={600}
                y1={0}
                x2={600 + n * 120}
                y2={400}
                stroke="#D4AF37"
                strokeWidth="0.4"
                opacity="0.1"
              />
            ))}
          </svg>
        </motion.div>

        {/* ── Deep radial vignette ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(10,10,10,0.85) 100%)",
          }}
        />

        {/* ── Section eyebrow label ── */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold">
            03 · Featured Work
          </span>
          <span className="h-px w-8 bg-gold" />
        </motion.div>

        {/* ── Scroll hint ── */}
        <motion.p
          style={{ opacity: labelOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.25em] uppercase text-off-white/25 z-20"
        >
          Scroll to explore
        </motion.p>

        {/* ── Cards rendered in 3D tunnel ── */}
        <div
          className="absolute inset-0"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          {TUNNEL_PROJECTS.map((project, index) => (
            <TunnelCard
              key={project.id}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
              total={TUNNEL_PROJECTS.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
