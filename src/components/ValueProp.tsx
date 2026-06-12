"use client";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const valueProp = `Stephen brings a unique blend of technical mastery, entrepreneurial leadership, and strategic business understanding. Unlike traditional software developers who focus solely on code, he approaches every project from a business value perspective — ensuring that technology investments directly contribute to operational efficiency, revenue growth, scalability, and competitive advantage.

His ability to build complex systems, lead product development initiatives, and align technology solutions with organisational objectives makes him a trusted partner for startups, SMEs, enterprises, investors, and government institutions seeking transformative digital solutions.

Organisations that engage Stephen gain more than a software engineer — they gain a strategic technology partner capable of transforming ideas into scalable products, modernising legacy systems, implementing intelligent automation, and building digital ecosystems that support long-term business success.`;

const valuePoints = [
  { label: "Business Value Perspective", desc: "Every technical decision aligned to operational efficiency and revenue growth" },
  { label: "End-to-End Ownership", desc: "From product vision to architecture design, development, and deployment" },
  { label: "Strategic Technology Partner", desc: "Trusted by startups, SMEs, enterprises, and government institutions" },
  { label: "Africa-Focused Innovation", desc: "Building solutions designed for the African market and beyond" },
];

export default function ValueProp() {
  return (
    <section
      id="value"
      className="relative overflow-hidden bg-white"
    >
      {/* Top accent */}
      <div className="h-1 bg-[#5792C1]" />

      <div className="flex flex-col lg:flex-row">
        {/* Left: Content */}
        <AnimatedSection className="flex-1 px-8 md:px-14 lg:px-20 py-16 lg:py-24 relative">
          <div className="absolute top-0 left-0 right-0 lg:right-auto w-full lg:w-3/4 h-0.5 bg-black hidden lg:block" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#5792C1] mb-4">
            Section 08
          </p>
          <h2 className="font-display text-[4rem] md:text-[6rem] leading-none text-[#42373D] mb-10">
            VALUE<br />
            <span className="text-[#5792C1]">PROPOSITION</span>
          </h2>

          <div className="space-y-4 font-body text-[#594F55] text-base leading-relaxed max-w-2xl mb-12">
            {valueProp.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </AnimatedSection>

        {/* Right: Value points */}
        <AnimatedSection
          delay={0.15}
          className="lg:w-[38%] bg-[#EBF3FA] px-8 lg:px-12 py-16 lg:py-24 relative overflow-hidden"
        >
          {/* saas.jpeg decorative background at very low opacity */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/saas.jpeg"
              alt=""
              fill
              className="object-cover object-center opacity-[0.06]"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
          </div>
          <div className="relative z-10 space-y-8">
            {valuePoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 bg-[#5792C1] flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-white text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-[#42373D] text-sm mb-1 uppercase tracking-wider">
                    {point.label}
                  </h4>
                  <p className="font-body text-[#594F55] text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
