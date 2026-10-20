"use client";

import { Code2, Lock, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#e25822]" />,
    label: "Zero Dev Offloading",
    description:
      "Direct collaboration with lead engineers who architect, review, and push every commit. No handoffs to junior contractors, no knowledge gaps, no surprises.",
    stat: "100%",
    statLabel: "Lead-engineer built",
  },
  {
    icon: <Lock className="w-7 h-7 text-[#e25822]" />,
    label: "Fixed-Price, Zero Bloat",
    description:
      "Scope and pricing locked upfront before a single line of code is written. No hourly billing, no scope creep, no hidden agency overhead eating your budget.",
    stat: "0",
    statLabel: "Surprise invoices",
  },
  {
    icon: <Code2 className="w-7 h-7 text-[#e25822]" />,
    label: "Clean Code & Ownership",
    description:
      "Modular, documented codebases with zero proprietary lock-in. Handed off production-ready so your future in-house team can build on top immediately.",
    stat: "100%",
    statLabel: "Code ownership — yours",
  },
];

export default function WhyVeereshBuild() {
  return (
    <section
      id="why-us"
      className="py-24 px-6 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-[#e25822]/4 blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-[#e25822]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#e25822]">
            Why VeereshBuild
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight text-white max-w-3xl leading-tight">
            We Build Different.{" "}
            <span className="text-[#e25822]">Here&apos;s Exactly How.</span>
          </h2>
          <p className="text-[#a1a1aa] font-manrope text-base md:text-lg max-w-xl leading-relaxed">
            Three non-negotiable commitments that separate a focused product engineering studio from an average agency.
          </p>
        </div>

        {/* 3-Column Contrast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col gap-6 p-8 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-[#e25822]/35 hover:bg-[#e25822]/[0.03] transition-all duration-400"
            >
              {/* Corner accent on hover */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#e25822]/0 group-hover:border-[#e25822]/50 rounded-tl-2xl transition-all duration-400" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#e25822]/0 group-hover:border-[#e25822]/50 rounded-br-2xl transition-all duration-400" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#e25822]/10 border border-[#e25822]/20 flex items-center justify-center group-hover:bg-[#e25822]/15 transition-colors duration-300">
                {pillar.icon}
              </div>

              {/* Label */}
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {pillar.label}
                </h3>
                <p className="text-[#a1a1aa] font-manrope text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Stat Pill */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#e25822] font-machina">
                    {pillar.stat}
                  </span>
                  <span className="text-xs text-[#555] font-semibold uppercase tracking-wider">
                    {pillar.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-[#a1a1aa] text-sm font-manrope">
            Ready to stop paying for agency bloat?
          </p>
          <a
            href="#contact"
            id="why-us-cta"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#e25822] hover:bg-[#c94b1c] text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#e25822]/20"
          >
            Book Architecture Call →
          </a>
        </div>
      </div>
    </section>
  );
}
