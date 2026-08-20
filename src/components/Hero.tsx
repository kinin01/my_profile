"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "./icons";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-[61px]">
      <div className="flex flex-col lg:flex-row flex-1">

        {/* ── LEFT: White panel — unchanged ── */}
        <div className="relative flex-1 lg:w-[58%] bg-white flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 lg:py-24">
          <div className="absolute top-0 left-0 right-0 h-2 bg-black" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#5792C1] mb-4">
              Executive Profile
            </p>

            <h1 className="font-display text-[clamp(5rem,12vw,9rem)] leading-none text-[#42373D] mb-0">
              KININGU
            </h1>
            <h1 className="font-display text-[clamp(5rem,12vw,9rem)] leading-none text-[#5792C1] mb-6">
              STEPHEN
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6">
              {["Software Engineer", "SaaS Architect", "Founder — HippoTech Edge"].map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-[#5792C1] inline-block" />}
                  <span className="font-body text-sm font-semibold text-[#42373D] uppercase tracking-widest">
                    {t}
                  </span>
                </span>
              ))}
            </div>

            <p className="font-body text-[#594F55] leading-relaxed max-w-lg text-base mb-10">
              Specialising in the design and delivery of scalable cloud-native
              platforms, enterprise software solutions, and AI-powered business
              applications. Driving digital transformation across Africa.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="font-body inline-flex items-center gap-2 bg-[#5792C1] hover:bg-[#034276] text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="font-body inline-flex items-center gap-2 border-2 border-[#42373D] hover:bg-[#42373D] hover:text-white text-[#42373D] text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/kinin01", icon: <GithubIcon style={{ width: 18, height: 18 }} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/kiningu-stephen-/", icon: <LinkedinIcon style={{ width: 18, height: 18 }} />, label: "LinkedIn" },
                { href: "mailto:support@kiko-pms.com", icon: <Mail size={18} />, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="w-10 h-10 border-2 border-[#42373D]/30 hover:border-[#5792C1] hover:text-[#5792C1] flex items-center justify-center text-[#594F55] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Blue panel with tilted photo (PDF page 1 style) ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-[42%] bg-[#5792C1] flex items-center justify-center min-h-[420px] lg:min-h-0 relative overflow-hidden"
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "60px 60px" }}
          />

          <div className="flex flex-col items-center">
            {/* Tilted rectangular photo — mirrors PDF page 1 */}
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 6, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-[360px] xl:w-80 xl:h-[400px] overflow-hidden shadow-2xl border-4 border-white/25 flex-shrink-0"
            >
              <Image
                src="/images/profile.jpeg"
                alt="Kiningu Stephen"
                fill
                className="object-cover object-center"
                priority
                loading="eager"
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
              />
            </motion.div>

            {/* Name / role text below the photo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-center px-6"
            >
              <p className="font-display text-3xl text-white leading-tight">
                KININGU STEPHEN
              </p>
              <p className="font-body text-white/80 text-xs uppercase tracking-[0.2em] font-medium mt-2">
                Creator · KIKO PMS &nbsp;·&nbsp; Founder · HippoTech Edge
              </p>
              <p className="font-body text-white/50 text-xs uppercase tracking-[0.15em] mt-2">
                Nairobi / Eldoret, Kenya 🇰🇪
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Stats row ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 bg-white border-t-4 border-[#5792C1]"
      >
        {stats.map((stat, i) => (
          <div key={i} className={`px-8 py-7 ${i < stats.length - 1 ? "border-r border-gray-100" : ""}`}>
            <div className="font-display text-4xl text-[#5792C1] mb-1">{stat.value}</div>
            <div className="font-body text-xs text-[#594F55] uppercase tracking-widest font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
