"use client";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="flex flex-col lg:flex-row min-h-[80vh]">

      {/* ── LEFT: Blue panel with section label + profile photo ── */}
      <AnimatedSection className="lg:w-[38%] bg-[#5792C1] flex flex-col min-h-[360px] lg:min-h-0 relative overflow-hidden">
        {/* Profile photo fills top portion */}
        <div className="relative flex-1 min-h-[280px]">
          <Image
            src="/images/profile.jpeg"
            alt="Kiningu Stephen"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
          <div className="absolute inset-0 bg-[#5792C1]/25" />
        </div>

        {/* Section label below photo */}
        <div className="relative z-10 p-8 lg:p-12 bg-[#5792C1]">
          <p className="font-body text-white/60 text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Section 02
          </p>
          <h2 className="font-display text-[4rem] md:text-[5.5rem] leading-none text-white">
            ABOUT
          </h2>
          <h2 className="font-display text-[4rem] md:text-[5.5rem] leading-none text-white">
            ME
          </h2>
          <div className="mt-4 w-12 h-1 bg-white/40" />
        </div>
      </AnimatedSection>

      {/* ── RIGHT: White content panel ── */}
      <AnimatedSection
        delay={0.15}
        className="flex-1 bg-white flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 lg:py-24 relative"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-black" />

        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#5792C1] mb-6">
          Who I Am
        </p>

        <div className="space-y-5 font-body text-[#594F55] leading-relaxed text-base max-w-2xl mb-10">
          {profile.bio.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {["Measurable Growth", "Scalable Solutions", "Long-term Value"].map((tag) => (
            <span
              key={tag}
              className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#5792C1] border-2 border-[#5792C1] px-4 py-2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Vision block with vision image */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="border-l-4 border-[#5792C1] pl-6 flex-1">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#5792C1] mb-2">
              Vision
            </p>
            <p className="font-body text-[#42373D] italic leading-relaxed text-base">
              &ldquo;{profile.vision}&rdquo;
            </p>
          </div>
          <div className="relative w-full sm:w-40 h-28 sm:h-28 flex-shrink-0 overflow-hidden">
            <Image
              src="/images/vision.jpeg"
              alt="Vision"
              fill
              className="object-cover"
              sizes="160px"
            />
            <div className="absolute inset-0 bg-[#5792C1]/20" />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
