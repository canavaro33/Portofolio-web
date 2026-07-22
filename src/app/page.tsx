import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { BentoSection } from "@/components/sections/bento/bento-section";
import { ScrollTunnelSection } from "@/components/sections/scroll-tunnel/scroll-tunnel-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { CertificatesSection } from "@/components/sections/certificates/certificates-section";
import { ConnectSection } from "@/components/sections/connect/connect-section";
import { EvadingLogo } from "@/components/ui/evading-logo";

export default function HomePage() {
  return (
    <>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Scrollable main content */}
      <main id="main-content" className="relative">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Tech Stack & About (Bento) */}
        <BentoSection />

        {/* Section 3: 3D Z-Axis Scroll Tunnel — scroll-driven project showcase */}
        <ScrollTunnelSection />

        {/* Section 3b: Detailed Project Cards Grid */}
        <ProjectsSection />

        {/* Section 4: Certificates */}
        <CertificatesSection />

        {/* Section 5: Connect */}
        <ConnectSection />
      </main>

      {/* Easter Egg: Evading Juventus Logo */}
      <EvadingLogo />
    </>
  );
}
