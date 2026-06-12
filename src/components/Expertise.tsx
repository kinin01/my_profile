"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { expertise } from "@/lib/data";

export default function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden">
      {/* ── TOP: Black header with tech image background ── */}
      <div className="relative bg-black py-14 px-8 md:px-14 lg:px-20 overflow-hidden min-h-[180px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/tech.jpeg"
            alt="Technology"
            fill
            className="object-cover object-center opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end gap-4 w-full">
          <div>
            <p className="font-body text-white/50 text-xs uppercase tracking-[0.25em] font-medium mb-2">
              Section 04
            </p>
            <h2 className="font-display text-[5rem] md:text-[7rem] leading-none text-white">
              EXPERTISE
            </h2>
          </div>
          <p className="font-body text-white/60 text-sm max-w-sm pb-2">
            Core competencies and domain knowledge areas.
          </p>
        </div>
      </div>

      {/* Blue accent band */}
      <div className="bg-[#5792C1] h-3" />

      {/* White content grid */}
      <div className="bg-white px-8 md:px-14 lg:px-20 py-16 lg:py-20">
        <AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {expertise.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                viewport={{ once: true }}
                className="group flex items-start gap-3 p-5 border border-gray-200 hover:border-[#5792C1] hover:bg-[#EBF3FA] transition-all duration-200"
              >
                <div className="mt-1 w-2 h-2 bg-[#5792C1] flex-shrink-0" />
                <span className="font-body text-sm text-[#594F55] font-medium leading-snug group-hover:text-[#42373D] transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
