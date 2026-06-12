"use client";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./icons";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-white">
      {/* Section header — black + blue treatment */}
      <div className="bg-[#42373D] py-10 px-8 md:px-14 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-2/5 bg-[#5792C1]" />
        <div className="absolute inset-0">
          <Image
            src="/images/saas.jpeg"
            alt="SaaS Projects"
            fill
            className="object-cover object-center opacity-15"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#42373D] via-[#42373D]/80 to-transparent" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end gap-6">
          <div>
            <p className="font-body text-white/50 text-xs uppercase tracking-[0.25em] font-medium mb-2">
              Section 08
            </p>
            <h2 className="font-display text-[5rem] md:text-[7rem] leading-none text-white">
              PROJECTS
            </h2>
          </div>
          <p className="font-body text-white/70 text-sm max-w-sm pb-2">
            Products and solutions shipped to production.
          </p>
        </div>
      </div>

      <div className="px-8 md:px-14 lg:px-20 py-16 lg:py-20 max-w-7xl mx-auto">
        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <div className="group border-2 border-gray-200 hover:border-[#5792C1] transition-all duration-300 h-full flex flex-col">
                {/* Blue top bar */}
                <div className="h-2 bg-[#5792C1]" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#5792C1]">
                      {project.category}
                    </span>
                    <div className="flex gap-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="p-1.5 text-[#594F55] hover:text-[#5792C1] transition-colors"
                        >
                          <GithubIcon style={{ width: 15, height: 15 }} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live site"
                          className="p-1.5 text-[#594F55] hover:text-[#5792C1] transition-colors"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-4xl text-[#42373D] leading-tight mb-1">
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="font-body text-sm text-[#5792C1] font-semibold mb-4">
                    {project.subtitle}
                  </p>
                  <p className="font-body text-[#594F55] text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.metrics.map((m, j) => (
                        <span
                          key={j}
                          className="font-body text-xs font-medium text-white bg-[#5792C1] px-3 py-1"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-body text-xs text-[#594F55] border border-gray-200 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other projects */}
        <AnimatedSection>
          <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#5792C1] mb-6 border-b-2 border-[#5792C1] pb-3 inline-block">
            Other Projects
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          {others.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <div className="group p-5 border border-gray-200 hover:border-[#5792C1] transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl text-[#42373D] leading-tight">
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="font-body text-xs text-[#5792C1] font-semibold uppercase tracking-widest mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-1.5 text-[#594F55]/60 hover:text-[#5792C1] transition-colors"
                    >
                      <GithubIcon style={{ width: 14, height: 14 }} />
                    </a>
                  )}
                </div>
                <p className="font-body text-[#594F55] text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-body text-xs text-[#594F55] border border-gray-200 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="font-body text-xs text-[#594F55]/60">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <a
            href="https://github.com/kinin01"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center gap-2 text-[#594F55] hover:text-[#5792C1] text-sm font-medium uppercase tracking-[0.15em] transition-colors group"
          >
            <GithubIcon style={{ width: 15, height: 15 }} />
            View All Repositories on GitHub
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
