"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { LinkedinIcon, GithubIcon } from "./icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `mailto:${profile.email}?subject=${subject}&body=${body}`
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="flex flex-col lg:flex-row min-h-[80vh]">
      {/* ── LEFT: Blue panel with banner image + contact info ── */}
      <AnimatedSection className="lg:w-[40%] bg-[#5792C1] flex flex-col min-h-[320px] lg:min-h-0 relative overflow-hidden">
        {/* Contact banner image fills top */}
        <div className="relative flex-1 min-h-[200px]">
          <Image
            src="/images/contact-banner.jpeg"
            alt="Contact"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-[#5792C1]/55" />
        </div>
        {/* Contact info below */}
        <div className="relative z-10 p-8 lg:p-12 bg-[#5792C1]">
          <p className="font-body text-white/60 text-xs uppercase tracking-[0.25em] font-medium mb-4">
            Section 10
          </p>
          <h2 className="font-display text-[3.5rem] md:text-[5rem] leading-none text-white mb-1">
            LET&apos;S
          </h2>
          <h2 className="font-display text-[3.5rem] md:text-[5rem] leading-none text-white mb-8">
            CONNECT
          </h2>

          <div className="space-y-4 mb-8">
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
            >
              <Phone size={16} className="flex-shrink-0" />
              <span className="font-body text-sm">{profile.phone}</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
            >
              <Mail size={16} className="flex-shrink-0" />
              <span className="font-body text-sm">{profile.email}</span>
            </a>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="font-body text-sm">{profile.location}</span>
            </div>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <div className="w-4 h-4 border border-white/60 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-px bg-white" />
              </div>
              <span className="font-body text-sm">{profile.website.replace("https://", "")}</span>
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 border-2 border-white/40 hover:border-white flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <LinkedinIcon style={{ width: 16, height: 16 }} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 border-2 border-white/40 hover:border-white flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <GithubIcon style={{ width: 16, height: 16 }} />
            </a>
          </div>
          <div className="mt-4 w-12 h-1 bg-white/40" />
        </div>
      </AnimatedSection>

      {/* ── RIGHT: White form panel ── */}
      <AnimatedSection
        delay={0.15}
        className="flex-1 bg-white flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 lg:py-20 relative"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-black" />

        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#5792C1] mb-2">
          Send a Message
        </p>
        <h3 className="font-display text-4xl text-[#42373D] mb-8">
          GET IN TOUCH
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 max-w-lg"
        >
          <div>
            <label className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#42373D] mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              className="font-body w-full border-2 border-gray-200 focus:border-[#5792C1] px-4 py-3 text-[#42373D] text-sm outline-none transition-colors placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#42373D] mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="font-body w-full border-2 border-gray-200 focus:border-[#5792C1] px-4 py-3 text-[#42373D] text-sm outline-none transition-colors placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#42373D] mb-2 block">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or idea..."
              className="font-body w-full border-2 border-gray-200 focus:border-[#5792C1] px-4 py-3 text-[#42373D] text-sm outline-none transition-colors placeholder:text-gray-400 resize-none"
            />
          </div>
          <button
            type="submit"
            className="font-body w-full flex items-center justify-center gap-2 bg-[#5792C1] hover:bg-[#034276] text-white font-semibold uppercase tracking-[0.15em] text-xs py-4 transition-colors duration-200 active:scale-[0.99]"
          >
            {sent ? (
              "✓ Email Client Opened"
            ) : (
              <>
                Send Message
                <Send size={14} />
              </>
            )}
          </button>
        </form>
      </AnimatedSection>
    </section>
  );
}
