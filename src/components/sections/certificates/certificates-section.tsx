"use client";

import Image from "next/image";
import { Calendar, Award } from "lucide-react";

const CERTIFICATES = [
  {
    id: "cert-1",
    title: "Artificial Intelligence Workshop",
    organizer: "Telkom University, Universitas Terbuka",
    date: "15–19 Juni 2026",
    badge: "Participant",
    imagePath: "/Certificates/AI_Certificate.png",
  },
  {
    id: "cert-2",
    title: "AI Claude Certificate",
    organizer: "Anthropic",
    date: "10–14 Mei 2026",
    badge: "Graduate",
    imagePath: "/Certificates/Claude_Certificate.png",
  },
];

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      data-testid="certificates-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gold/4 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-12 lg:px-8">

        {/* ─── Eyebrow + heading ─── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 opacity-0 animate-slide-up [animation-fill-mode:forwards]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold">
                04 · Certificates
              </span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-off-white">
              Certificates &amp;
              <br />
              <span className="text-metallic">Achievements</span>
            </h2>
          </div>
          <p className="text-off-white/40 font-sans text-sm leading-relaxed max-w-xs md:text-right">
            Professional development and continuous learning through workshops and training programs.
          </p>
        </div>

        {/* ─── Certificates Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {CERTIFICATES.map((cert, i) => (
            <article
              key={cert.id}
              data-testid={`certificate-card-${cert.id}`}
              className={`project-card flex flex-col overflow-hidden opacity-0 animate-slide-up [animation-fill-mode:forwards] ${
                i === 0
                  ? "animate-delay-100"
                  : i === 1
                  ? "animate-delay-200"
                  : "animate-delay-300"
              }`}
            >
              {/* Certificate Image */}
              <div className="relative w-full h-48 bg-[#0D0D0D] border-b border-white/5 overflow-hidden group">
                {/* Actual Certificate Image */}
                <Image
                  src={cert.imagePath}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(230,198,135,0.3) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 md:p-8">
                {/* Badge + Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1"
                    style={{
                      border: "1px solid rgba(212,175,55,0.25)",
                      color: "rgba(212,175,55,0.8)",
                      background: "rgba(212,175,55,0.05)",
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  data-testid={`certificate-title-${cert.id}`}
                  className="font-display font-bold text-lg text-off-white tracking-tight mb-3 leading-snug"
                >
                  {cert.title}
                </h3>

                {/* Organizer */}
                <p
                  data-testid={`certificate-organizer-${cert.id}`}
                  className="text-off-white/50 font-sans text-sm leading-relaxed flex-1 mb-4"
                >
                  {cert.organizer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-gold/60" />
                  <span className="font-mono text-[10px] tracking-wider text-off-white/40">
                    {cert.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24 md:mt-32" aria-hidden="true" />
    </section>
  );
}
