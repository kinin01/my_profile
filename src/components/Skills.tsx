"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Black header with code image */}
      <div className="relative bg-black py-14 px-8 md:px-14 lg:px-20 overflow-hidden min-h-[180px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/code.jpeg"
            alt="Code"
            fill
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end gap-4 w-full">
          <div>
            <p className="font-body text-white/50 text-xs uppercase tracking-[0.25em] font-medium mb-2">
              Section 05
            </p>
            <h2 className="font-display text-[4rem] md:text-[6rem] leading-none text-white">
              TECHNICAL
            </h2>
            <h2 className="font-display text-[4rem] md:text-[6rem] leading-none text-[#5792C1]">
              COMPETENCY
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[#5792C1] h-3" />

      <div className="bg-white px-8 md:px-14 lg:px-20 py-16 lg:py-20">
        <AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {skills.map((group, gi) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-8 bg-[#5792C1]" />
                  <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#42373D]">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {group.items.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: gi * 0.05 + si * 0.04 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2.5 group"
                    >
                      <div className="w-1.5 h-1.5 bg-[#5792C1] flex-shrink-0" />
                      <span className="font-body text-sm text-[#594F55] group-hover:text-[#42373D] transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
