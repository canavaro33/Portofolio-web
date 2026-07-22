"use client";

import { Linkedin, Github, MessageCircle, ArrowUpRight } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    sublabel: "Explore my open source work",
    href: "https://github.com/canavaro33",
    platform: "github",
    Icon: Github,
  },
  {
    label: "WhatsApp",
    sublabel: "Quick conversation — anytime",
    href: "https://wa.me/6208816828320",
    platform: "whatsapp",
    Icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    sublabel: "Let's connect professionally",
    href: "https://linkedin.com/in/canavaro-daud",
    platform: "linkedin",
    Icon: Linkedin,
  },
];

export function ConnectSection() {
  return (
    <section
      id="connect"
      data-testid="live-connect-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E6C687]/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[120px]" style={{ background: "rgba(255,255,255,0.015)" }} />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-12 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 opacity-0 animate-slide-up [animation-fill-mode:forwards]">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#E6C687]" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "#E6C687" }}>
              05 · Connect
            </span>
            <span className="h-px w-10 bg-[#E6C687]" />
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-off-white mb-4">
            Let&apos;s Build
            <br />
            <span className="text-gold-shimmer">Something Together</span>
          </h2>
          <p className="text-[#CCCCCC] font-sans text-sm max-w-sm mx-auto leading-relaxed">
            Open to collaborations, freelance projects, and full-time roles in
            Frontend Development, AI Engineering, and Data Analytics.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
          {SOCIAL_LINKS.map(({ label, sublabel, href, platform, Icon }, i) => (
            <a
              key={platform}
              href={href}
              id={`connect-${platform}`}
              data-testid={`social-card-${platform}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`gold-border-hover group flex flex-col gap-4 p-7 opacity-0 animate-slide-up [animation-fill-mode:forwards] ${
                i === 0
                  ? "animate-delay-100"
                  : i === 1
                  ? "animate-delay-200"
                  : "animate-delay-300"
              }`}
              style={{ background: "#1A1A1A" }}
              aria-label={`Connect on ${label}`}
            >
              {/* Icon */}
              <span
                data-testid={`social-icon-${platform}`}
                className="w-10 h-10 flex items-center justify-center border text-[#E6C687] group-hover:bg-[#E6C687] group-hover:text-[#111111] transition-all duration-300"
                style={{ borderColor: "rgba(230,198,135,0.25)" }}
              >
                <Icon className="w-4 h-4" />
              </span>

              {/* Text */}
              <div className="flex-1">
                <p className="font-display font-semibold text-base text-off-white mb-1">
                  {label}
                </p>
                <p className="font-sans text-xs text-off-white/40 leading-relaxed">
                  {sublabel}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider group-hover:text-[#E6C687] transition-colors duration-300" style={{ color: "rgba(230,198,135,0.5)" }}>
                Open
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer signature */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-widest uppercase text-off-white/25">
            © 2026 Canavaro Daud
          </p>
          <p className="font-mono text-[11px] tracking-widest uppercase text-off-white/20">
            Built with Next.js · Tailwind CSS · TypeScript
          </p>
        </div>
      </div>
    </section>
  );
}
