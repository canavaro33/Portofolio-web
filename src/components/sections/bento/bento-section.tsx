"use client";

const TECH_CATEGORIES = [
  {
    label: "AI & Machine Learning",
    skills: [
      "Prompt Engineering",
      "RAG",
      "LangChain",
      "LLM Integration",
      "Claude",
      "Grok",
      "Gemini",
      "Chroma (Vector DB)",
    ],
  },
  {
    label: "Web Development",
    skills: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "RESTful API",
    ],
  },
  {
    label: "Data Analytics & BI",
    skills: ["Power BI", "Excel"],
  },
  {
    label: "Tools & DevOps",
    skills: ["GitHub", "Postman", "Docker"],
  },
];

export function BentoSection() {
  return (
    <section
      id="tech-stack"
      data-testid="bento-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-gold/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-12 lg:px-8">

        {/* ─── Section eyebrow ─── */}
        <div className="flex items-center gap-3 mb-12 opacity-0 animate-slide-up [animation-fill-mode:forwards]">
          <span className="h-px w-10 bg-[#E6C687]" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "#E6C687" }}>
            02 · Profile &amp; Skills
          </span>
        </div>

        {/* ─── Bento grid — 3-col on large, 1-col on mobile ─── */}
        <div
          data-testid="bento-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >

          {/* ── CARD A: About Me — dark, 2-col ── */}
          <div
            data-testid="about-section"
            className="lg:col-span-2 relative overflow-hidden p-8 md:p-10 opacity-0 animate-slide-up animate-delay-100 [animation-fill-mode:forwards]"
            style={{
              background: "#1A1A1A",
              border: "1px solid #262626",
            }}
          >
            {/* Subtle radial texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, rgba(212,175,55,0.04) 0%, transparent 50%)",
              }}
            />

            {/* Section label */}
            <div className="flex items-center mb-6 relative z-10">
              <span className="gold-motif" aria-hidden="true" />
              <h2
                data-testid="section-header"
                className="text-xs font-bold uppercase tracking-[0.25em] text-off-white/50"
              >
                About Me
              </h2>
            </div>

            <div className="space-y-5 relative z-10">
              <h3
                data-testid="about-name"
                className="font-display font-black text-3xl md:text-4xl tracking-tight text-off-white"
              >
                Building tomorrow&apos;s
                <br />
                <span className="text-metallic">systems, today.</span>
              </h3>

              <p
                data-testid="about-bio"
                className="font-sans font-light leading-relaxed text-base md:text-lg max-w-lg text-[#CCCCCC]"
              >
                Information Systems student at{" "}
                <span className="text-off-white/80 font-medium">
                  Universitas Esa Unggul
                </span>{" "}
                (GPA: 3.39). Driven by a passion for solving real operational
                challenges using advanced web technologies and AI, particularly
                within knowledge management and digital transformation sectors.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                {[
                  { value: "3.39", label: "GPA" },
                  { value: "6th", label: "Semester" },
                  { value: "2+", label: "AI Projects" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-display font-black text-2xl leading-none" style={{ color: "#E6C687" }}>
                      {value}
                    </p>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CARD B: Core Technical Stack — off-white, 1-col ── */}
          <div
            data-testid="tech-stack-section"
            className="relative overflow-hidden p-8 md:p-10 opacity-0 animate-slide-up animate-delay-200 [animation-fill-mode:forwards]"
            style={{
              background: "#F8F9FA",
              border: "1px solid #e5e7eb",
            }}
          >
            {/* Label */}
            <div className="flex items-center mb-6">
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  marginRight: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "2px",
                    height: "18px",
                    background: "#111111",
                    borderRadius: "1px",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "2px",
                    height: "18px",
                    background: "#111111",
                    borderRadius: "1px",
                  }}
                />
              </span>
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
                Core Technical Stack
              </h2>
            </div>

            <div
              data-testid="tech-stack-grid"
              className="space-y-5"
            >
              {TECH_CATEGORIES.map((cat) => (
                <div key={cat.label}>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 mb-2">
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 bg-[#111111] text-[#F8F9FA] font-mono text-[10px] font-semibold tracking-wider border border-neutral-700 transition-colors duration-200 hover:bg-gold hover:text-[#111111] hover:border-gold cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: "#111111" }}
            />
          </div>
        </div>
      </div>

      <div className="section-divider mt-24 md:mt-32" aria-hidden="true" />
    </section>
  );
}
