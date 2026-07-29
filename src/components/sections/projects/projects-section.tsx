"use client";

import { ExternalLink, Github, BarChart2, Database } from "lucide-react";

const EXPERIENCES = [
  {
    id: "exp-0",
    type: "project",
    title: "PT ITM Corporate AI Chatbot Portal",
    period: "June 2026",
    headline: "Premium Corporate AI Wellness & Knowledge Portal",
    description:
      "A full-stack enterprise web application featuring a luxury glassmorphic UI, an integrated Three.js interactive 3D object, and a full-screen chat overlay powered by Dual LLM Support (Anthropic Claude & OpenAI GPT-4o via OpenRouter) backed by a PostgreSQL corporate knowledge base.",
    tags: ["Next.js 14", "Express.js", "TypeScript", "Three.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    status: "Completed",
    github: "https://github.com/canavaro33/pt-itm-ai-assistant",
    demo: "https://pt-itm-ai-assistant.vercel.app/",
    isInternal: false,
  },
  {
    id: "exp-1",
    type: "project",
    title: "Frontend Developer — SIAKAD Maleo",
    period: "April 2026 – Present",
    headline: "Frontend Development",
    description:
      "Engineered the responsive frontend architecture for a comprehensive school Academic Information System using Next.js and Tailwind CSS. Built intuitive UI components for automated class scheduling, digital attendance, and student grade reports.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API Integration"],
    status: "In Progress",
    github: "https://github.com/valdibuana/Maleo_Project",
    demo: "#",
  },
  {
    id: "exp-2",
    type: "analytics",
    title: "Owner & Operator — FoodTruck Analytics",
    period: "2024 – 2025",
    headline: "Data & Business Analytics",
    description:
      "Leveraging operational data analytics and business intelligence to drive smarter decision-making and build data-centric web applications. Built automated financial reports and customer behavior analytics using Excel and Power Query, transforming raw operational data into actionable insights to optimize purchasing and inventory management.",
    tags: ["Excel", "Power Query", "Data Analytics", "Business Intelligence"],
    status: "Completed",
    github: null,
    demo: "/images/Dashboard.png"
,
  },
  {
    id: "exp-3",
    type: "visualization",
    title: "Data Visualization Dashboards",
    period: "2024",
    headline: "Analytics & Reporting",
    description:
      "Designed and built data visualization dashboards translating complex datasets into clear business insights.",
    tags: ["Excel", "Pivot Tables", "Data Analytics"],
    status: "Completed",
    github: null,
    demo: "/images/Dashboard.png",
    projects: [
      {
        name: "Excel Sales Performance Dashboard",
        tech: "Data Modeling & KPI Tracking",
        Icon: BarChart2,
      },
      {
        name: "Retail Sales & Regional Trend Analysis",
        tech: "Pivot Table Analytics",
        Icon: Database,
      },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gold/4 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-12 lg:px-8">

        {/* ─── Eyebrow + heading ─── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 opacity-0 animate-slide-up [animation-fill-mode:forwards]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold">
                03 · Featured Experiences &amp; Projects
              </span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-off-white">
              Selected
              <br />
              <span className="text-metallic">Work</span>
            </h2>
          </div>
          <p className="text-off-white/40 font-sans text-sm leading-relaxed max-w-xs md:text-right">
            Production-grade projects and real-world engagements built with precision and intent.
          </p>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {EXPERIENCES.map((exp, i) => (
            <article
              key={exp.id}
              data-testid={`project-card-${exp.id}`}
              className={`project-card flex flex-col p-7 md:p-8 opacity-0 animate-slide-up [animation-fill-mode:forwards] ${
                i === 0
                  ? "animate-delay-100"
                  : i === 1
                  ? "animate-delay-200"
                  : "animate-delay-300"
              }`}
            >
              {/* Top meta row */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold/60">
                  {exp.period}
                </span>
                <span
                  className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1"
                  style={{
                    border: "1px solid rgba(212,175,55,0.25)",
                    color: "rgba(212,175,55,0.8)",
                    background: "rgba(212,175,55,0.05)",
                  }}
                >
                  {exp.status}
                </span>
              </div>

              {/* Eyebrow headline */}
              <p className="font-mono text-[10px] tracking-widest uppercase text-gold/50 mb-2">
                {exp.headline}
              </p>

              {/* Title */}
              <h3
                data-testid={`project-title-${exp.id}`}
                className="font-display font-bold text-lg text-off-white tracking-tight mb-3 leading-snug"
              >
                {exp.title}
              </h3>

              {/* Description */}
              <p
                data-testid={`project-description-${exp.id}`}
                className="text-off-white/50 font-sans text-sm leading-relaxed flex-1 mb-5"
              >
                {exp.description}
              </p>

              {/* Sub-project list (Card E only) */}
              {exp.projects && (
                <ul className="space-y-2 mb-5">
                  {exp.projects.map(({ name, tech, Icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 py-2 border-t border-white/5"
                    >
                      <Icon className="w-3.5 h-3.5 text-gold/60 flex-shrink-0" />
                      <div>
                        <p className="font-sans text-xs text-off-white/75 leading-none mb-0.5">
                          {name}
                        </p>
                        <p className="font-mono text-[10px] text-off-white/30 tracking-wider">
                          {tech}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech tags */}
              <div
                data-testid={`project-tags-${exp.id}`}
                className="flex flex-wrap gap-1.5 mb-5"
              >
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-2.5 py-1 text-off-white/60"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action links — only if available */}
              {(exp.github || exp.demo) && (
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${exp.title} on GitHub`}
                      className="flex items-center gap-2 text-xs font-mono tracking-wider text-off-white/50 hover:text-gold transition-colors duration-300"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                  {exp.demo && exp.demo !== "#" && (
                    <a
                      href={exp.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${exp.title}`}
                      className="flex items-center gap-2 text-xs font-mono tracking-wider text-off-white/50 hover:text-gold transition-colors duration-300 ml-auto"
                    >
                      {exp.demo.startsWith('/images/') ? 'View Dashboard' : 'Live Demo'}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24 md:mt-32" aria-hidden="true" />
    </section>
  );
}
