"use client";

import { Quote } from "lucide-react";
import { clientTestimonials } from "../data/content";

export default function ClientTestimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#e25822]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#e25822]">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight text-white max-w-2xl leading-tight">
            What <span className="text-[#e25822]">Clients Say</span>
          </h2>
          <p className="text-[#a1a1aa] font-manrope text-base md:text-lg max-w-xl leading-relaxed">
            Real feedback from founders and teams who&apos;ve shipped with us.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientTestimonials.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/8 hover:border-[#e25822]/25 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#e25822]/30 mb-6 flex-shrink-0" />

              {/* Quote text */}
              <p className="text-[#a1a1aa] text-sm leading-relaxed font-manrope flex-1 mb-6 italic">
                {t.quote}
              </p>

              {/* Metric highlight */}
              <div className="px-3 py-2 rounded-lg bg-[#e25822]/8 border border-[#e25822]/20 mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#e25822] mb-0.5">
                  Outcome
                </p>
                <p className="text-sm font-semibold text-white">{t.metric}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                {/* Initials avatar */}
                <div className="w-10 h-10 rounded-full bg-[#e25822]/15 border border-[#e25822]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-[#e25822]">{t.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">{t.name}</p>
                  <p className="text-[11px] text-[#a1a1aa] truncate">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nudge */}
        <div className="mt-14 text-center">
          <p className="text-[#a1a1aa] text-sm font-manrope">
            Ready to be the next success story?{" "}
            <a
              href="#contact"
              className="text-[#e25822] font-semibold hover:underline underline-offset-2"
            >
              Let&apos;s talk →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
