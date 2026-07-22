"use client";

import Link from "next/link";
import { JuventusLogo } from "@/components/ui/juventus-logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
];

export function Navbar() {
  return (
    <header
      data-testid="navbar"
      className="navbar-glass fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* ─── Brand: Logo + Name ─── */}
        <Link
          href="/"
          id="navbar-brand"
          className="flex items-center gap-3 group"
          aria-label="Canavaro Daud Portfolio"
        >
          <span className="text-off-white group-hover:text-gold transition-colors duration-300">
            <JuventusLogo size={28} />
          </span>
          <span className="font-display font-700 text-base tracking-tight text-off-white group-hover:text-gold transition-colors duration-300">
            Canavaro Daud
          </span>
        </Link>

        {/* ─── Nav Links ─── */}
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-widest uppercase text-neutral-300 hover:text-[#E6C687] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E6C687] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ─── CTA ─── */}
        <a
          href="#connect"
          id="navbar-cta"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-widest uppercase border transition-all duration-300"
          style={{ color: "#E6C687", borderColor: "rgba(230,198,135,0.35)" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E6C687";
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(230,198,135,0.08)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(230,198,135,0.35)";
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          }}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
