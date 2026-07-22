import { SectionHeader } from "@/components/ui/section-header";

const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GraphQL",
  "Redis",
  "Git",
  "Figma",
];

export function TechStackSection() {
  return (
    <div
      data-testid="tech-stack-section"
      className="bg-off-white text-matte-black p-6 md:p-8 animate-slide-up animate-delay-100"
    >
      <SectionHeader title="Tech Stack" />

      <div data-testid="tech-stack-grid" className="flex flex-wrap gap-2 md:gap-3">
        {TECH_STACK.map((tech) => (
          <span
            key={tech}
            className="inline-block px-3 py-1.5 text-xs md:text-sm font-mono font-medium bg-matte-black text-off-white tracking-wide hover:bg-gold hover:text-matte-black transition-colors duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
