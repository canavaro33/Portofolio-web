import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <div
      data-testid="about-section"
      className="bg-matte-black text-off-white p-6 md:p-8 md:col-span-2 animate-slide-up"
    >
      <SectionHeader title="About Me" />

      <div className="space-y-4">
        <h1
          data-testid="about-name"
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Canavaro Daud
        </h1>

        <p
          data-testid="about-title"
          className="text-gold text-lg md:text-xl font-medium tracking-wide"
        >
          Senior Software Engineer
        </p>

        <p
          data-testid="about-bio"
          className="text-off-white/70 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          I craft high-performance digital experiences with precision and purpose.
          Specializing in modern web technologies, I build applications that are
          blazing fast, accessible, and delightful to interact with. Every line
          of code is written with intention — balancing rapid delivery with
          long-term maintainability.
        </p>
      </div>
    </div>
  );
}
