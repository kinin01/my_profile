import Image from "next/image";
import { profile } from "@/lib/data";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-[#42373D]">
      {/* Top blue accent band */}
      <div className="h-1.5 bg-[#5792C1]" />

      <div className="px-8 md:px-14 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#5792C1] flex items-center justify-center font-display text-white text-sm tracking-widest">
                KS
              </div>
              <div>
                <p className="font-display text-2xl text-white leading-none">
                  KININGU STEPHEN
                </p>
                <p className="font-body text-[#5792C1] text-xs uppercase tracking-[0.2em] font-medium">
                  Software Engineer · SaaS Architect · Founder
                </p>
              </div>
            </div>
            {/* Quote from PDF page 11 with thankyou image */}
            <div className="flex items-center gap-4 mt-4">
              <p className="font-body text-white/50 text-sm italic max-w-xs">
                &ldquo;Looking forward to future collaborations.&rdquo;
              </p>
              <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden opacity-50">
                <Image
                  src="/images/thankyou.jpeg"
                  alt="Thank You"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-body text-white/40 text-xs uppercase tracking-[0.2em] mb-1">
              Quick Links
            </p>
            {["#about", "#expertise", "#skills", "#experience", "#projects", "#contact"].map(
              (href) => (
                <a
                  key={href}
                  href={href}
                  className="font-body text-white/60 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors"
                >
                  {href.replace("#", "")}
                </a>
              )
            )}
          </div>

          {/* Social + contact */}
          <div>
            <p className="font-body text-white/40 text-xs uppercase tracking-[0.2em] mb-4">
              Connect
            </p>
            <div className="flex gap-3 mb-4">
              {[
                { href: profile.linkedin, icon: <LinkedinIcon style={{ width: 16, height: 16 }} />, label: "LinkedIn" },
                { href: profile.github, icon: <GithubIcon style={{ width: 16, height: 16 }} />, label: "GitHub" },
                { href: `mailto:${profile.email}`, icon: <Mail size={16} />, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/20 hover:border-[#5792C1] hover:text-[#5792C1] flex items-center justify-center text-white/60 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[#5792C1] hover:text-white text-xs uppercase tracking-widest transition-colors"
            >
              {profile.website.replace("https://", "")}
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs">
            © 2026 Kiningu Stephen · HippoTech Edge
          </p>
          <p className="font-body text-white/20 text-xs">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
