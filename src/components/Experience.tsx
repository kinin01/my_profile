"use client";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { experience, education } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col lg:flex-row min-h-[70vh]">

      {/* ── LEFT: Blue panel with cloud image background ── */}
      <AnimatedSection className="lg:w-[32%] bg-[#5792C1] flex flex-col min-h-[300px] lg:min-h-0 relative overflow-hidden">
        {/* Label on top */}
        <div className="relative z-10 p-8 lg:p-12 bg-[#5792C1]">
          <p className="font-body text-white/60 text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Section 06
          </p>
          <h2 className="font-display text-[2.5rem] md:text-[3.2rem] leading-none text-white">
            PROFESSIONAL
          </h2>
          <h2 className="font-display text-[2.5rem] md:text-[3.2rem] leading-none text-white">
            EXP.
          </h2>
          <div className="mt-4 w-12 h-1 bg-white/40" />
        </div>
        {/* Cloud image fills remaining space */}
        <div className="relative flex-1 min-h-[200px]">
          <Image
            src="/images/cloud.jpeg"
            alt="Cloud Architecture"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 32vw"
          />
          <div className="absolute inset-0 bg-[#5792C1]/50" />
        </div>
      </AnimatedSection>

      {/* ── RIGHT: White content ── */}
      <AnimatedSection
        delay={0.15}
        className="flex-1 bg-white px-8 md:px-14 lg:px-16 py-16 lg:py-20 relative"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
        <div className="max-w-2xl space-y-10">
          {experience.map((job) => (
            <div key={job.id} className="relative pl-8 border-l-2 border-[#5792C1]">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#5792C1]" />
              <div className="mb-3">
                <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#5792C1] bg-[#EBF3FA] px-3 py-1">
                  {job.type}
                </span>
              </div>
              <h3 className="font-display text-3xl text-[#42373D] leading-tight mb-0.5">
                {job.role.toUpperCase()}
              </h3>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-body text-base font-semibold text-[#5792C1]">{job.company}</p>
                {job.location.startsWith("www") && (
                  <a href={`https://${job.location}`} target="_blank" rel="noopener noreferrer" className="text-[#5792C1] hover:text-[#034276]">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="font-body text-xs text-[#594F55]/70 uppercase tracking-widest mb-4">
                {job.period}{!job.location.startsWith("www") && ` · ${job.location}`}
              </p>
              <p className="font-body text-[#594F55] text-sm leading-relaxed mb-4">{job.description}</p>
              <ul className="space-y-2">
                {job.achievements.map((ach, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-[#5792C1] flex-shrink-0" />
                    <span className="font-body text-sm text-[#594F55]">{ach}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100">
                {job.tech.map((t) => (
                  <span key={t} className="font-body text-xs text-[#5792C1] border border-[#5792C1] px-2.5 py-1 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education with Birkbeck photo */}
          <div className="mt-12 pt-10 border-t-2 border-gray-100">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#5792C1] mb-6">
              Education
            </p>
            {education.map((edu) => (
              <div key={edu.degree} className="flex gap-5 items-start">
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden border-2 border-[#5792C1]/20">
                  <Image
                    src="/images/birkbeck.jpeg"
                    alt="Birkbeck University of London"
                    fill
                    className="object-cover object-center"
                    sizes="96px"
                  />
                </div>
                <div className="relative pl-6 border-l-2 border-[#42373D] flex-1">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#42373D]" />
                  <h3 className="font-body text-base font-bold text-[#42373D] leading-snug mb-1">{edu.degree}</h3>
                  <p className="font-body text-sm text-[#5792C1] font-semibold mb-0.5">{edu.institution}</p>
                  <p className="font-body text-xs text-[#594F55]/70 uppercase tracking-widest">{edu.period} · {edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
