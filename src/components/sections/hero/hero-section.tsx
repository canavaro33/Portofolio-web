"use client";

import { Github, MessageCircle, Linkedin, Download, Mail } from "lucide-react";
import Image from "next/image";
import { JuventusWatermark } from "@/components/ui/juventus-logo";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/canavaro33",
    platform: "github",
    Icon: Github,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6208816828320",
    platform: "whatsapp",
    Icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/canavaro-daud",
    platform: "linkedin",
    Icon: Linkedin,
  },
];

export function HeroSection() {
  return (
    <section
      id="about"
      data-testid="hero-section"
      className="hero-ambient relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* ── Deep ambient background layers ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[140px] opacity-30" style={{ background: "rgba(255,255,255,0.025)" }} />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20" style={{ background: "rgba(230,198,135,0.03)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[160px]" style={{ background: "rgba(255,255,255,0.018)" }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)] py-16">

          {/* ─── LEFT: Name + Role + Bio + CTAs ─── */}
          <div className="flex flex-col justify-center space-y-8 opacity-0 animate-slide-in-left animate-delay-100 [animation-fill-mode:forwards]">

            {/* Eyebrow label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "#E6C687" }}>
                Portfolio · 2026
              </span>
            </div>

            {/* Name — massive, brushed silver */}
            <div className="space-y-2">
              <h1
                data-testid="hero-name"
                className="text-metallic font-display font-black leading-none tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
              >
                Canavaro
              </h1>
              <h1
                className="text-metallic font-display font-black leading-none tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
              >
                Daud
              </h1>
            </div>

            {/* Role — Champagne Gold, crisp */}
            <p
              data-testid="hero-title"
              className="font-display font-semibold tracking-[0.12em] uppercase"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)", color: "#E6C687" }}
            >
              Frontend &amp; AI Engineer
            </p>

            {/* Professional Pitch */}
            <p
              data-testid="hero-bio"
              className="font-sans font-light leading-relaxed max-w-lg text-[#CCCCCC]"
              style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
            >
              Specializing in building high-performance Frontend experiences,
              interactive 3D web applications, and intelligent AI systems
              (RAG/LLM integration), backed by a strong foundation in Data
              Analytics.
            </p>

            {/* ─── Primary Action Buttons ─── */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:canavadaud@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 font-mono font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(230,198,135,0.35)]"
                style={{ background: "#E6C687", color: "#111111" }}
                aria-label="Send me an email"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-6 py-3 font-mono font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#E6C687]/10 hover:text-[#E6C687]"
                style={{ border: "1px solid rgba(230,198,135,0.4)", color: "#F8F9FA" }}
                aria-label="Download CV"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>

            {/* ─── Social Icon Buttons ─── */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ label, href, platform, Icon }) => (
                <a
                  key={platform}
                  href={href}
                  id={`hero-social-${platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 border border-white/10 text-[#CCCCCC] hover:border-[#E6C687] hover:text-[#E6C687] transition-all duration-300 hover:shadow-[0_0_12px_rgba(230,198,135,0.2)]"
                  aria-label={`Connect on ${label}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Scroll cue */}
            <div className="flex items-center gap-3 pt-4 opacity-40">
              <span className="w-px h-8 bg-gold/60 block" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-off-white/50">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* ─── RIGHT: Profile picture + geometric accent ─── */}
          <div className="flex items-center justify-center lg:justify-end opacity-0 animate-slide-in-right animate-delay-300 [animation-fill-mode:forwards]">
            <div className="relative">

              {/* Juventus watermark behind profile */}
              <div
                aria-hidden="true"
                className="absolute -top-12 -left-16 pointer-events-none z-0"
                style={{ opacity: 0.07 }}
              >
                <JuventusWatermark size={280} />
              </div>

              {/* Outer dashed ring */}
              <div
                aria-hidden="true"
                className="geo-accent"
                style={{ inset: "-32px", animation: "spin-slow 18s linear infinite" }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 200"
                  fill="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="96"
                    stroke="#D4AF37"
                    strokeWidth="0.6"
                    strokeDasharray="6 10"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* Static outer ring */}
              <div
                aria-hidden="true"
                className="absolute rounded-full border border-gold/10 pointer-events-none"
                style={{ inset: "-56px" }}
              />

              {/* Corner accent marks */}
              {[
                { top: -20, left: "50%", rotate: 0 },
                { bottom: -20, left: "50%", rotate: 180 },
              ].map((pos, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute w-6 h-1 bg-gold pointer-events-none"
                  style={{
                    top: pos.top,
                    bottom: pos.bottom,
                    left: pos.left,
                    transform: `translateX(-50%) rotate(${pos.rotate}deg)`,
                  }}
                />
              ))}

              {/* ── Profile ring + image placeholder ── */}
              <div className="profile-ring z-10 relative" style={{ width: 280, height: 280 }}>
                {/* Image container — position relative required for next/image fill */}
                <div
                  data-testid="hero-profile-picture"
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/DSCF8941.JPG"
                    alt="Canavaro Daud"
                    fill
                    sizes="280px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Inner vignette on top of photo */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full pointer-events-none z-10"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 25%, rgba(212,175,55,0.06) 0%, transparent 60%)",
                    }}
                  />
                </div>
              </div>

              {/* Floating stat badges */}
              <div
                className="absolute -right-4 top-8 bg-[#1A1A1A] border border-[#262626] px-4 py-3 shadow-xl"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                <p className="font-mono text-[10px] tracking-widest uppercase mb-0.5" style={{ color: "rgba(230,198,135,0.7)" }}>
                  Semester
                </p>
                <p className="font-display font-bold text-lg text-off-white leading-none">
                  6th
                </p>
              </div>

              <div
                className="absolute -left-4 bottom-12 bg-[#1A1A1A] border border-[#262626] px-4 py-3 shadow-xl"
                style={{ animation: "float 4s ease-in-out infinite 2s" }}
              >
                <p className="font-mono text-[10px] tracking-widest uppercase mb-0.5" style={{ color: "rgba(230,198,135,0.7)" }}>
                  GPA
                </p>
                <p className="font-display font-bold text-lg text-off-white leading-none">
                  3.39
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom section divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  );
}
