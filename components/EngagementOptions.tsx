"use client";

import { ArrowRight, CheckCircle2, Clock, Users, Repeat } from "lucide-react";
import { pricingTiers, PricingTier } from "../data/content";

// Icon map is defined inside the component to avoid module-level JSX side-effects
function TierCard({ tier }: { tier: PricingTier }) {
  // Define icons inside component so they render in proper React context
  const tierIcons: Record<string, React.ReactNode> = {
    "launch-sprint": <Clock className="w-5 h-5" />,
    "full-build": <Users className="w-5 h-5" />,
    "ongoing-partner": <Repeat className="w-5 h-5" />,
  };
  const icon = tierIcons[tier.slug];

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 border transition-all duration-300 group ${
        tier.highlight
          ? "bg-[#e25822]/5 border-[#e25822]/40 shadow-lg shadow-[#e25822]/10"
          : "bg-white/[0.02] border-white/8 hover:border-white/15"
      }`}
    >
      {/* Recommended badge */}
      {tier.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-[#e25822] text-white text-[10px] font-bold uppercase tracking-widest shadow-md shadow-[#e25822]/30">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
            tier.highlight
              ? "bg-[#e25822] text-white"
              : "bg-white/5 text-[#e25822] group-hover:bg-[#e25822]/10 transition-colors"
          }`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">{tier.label}</h3>
          <p className="text-xs text-[#e25822] font-semibold mt-0.5">{tier.tagline}</p>
        </div>
      </div>

      {/* Timeline pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 w-fit mb-6">
        <Clock className="w-3.5 h-3.5 text-[#a1a1aa]" />
        <span className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider">
          {tier.timeline}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#a1a1aa] leading-relaxed font-manrope mb-6 flex-1">
        {tier.description}
      </p>

      {/* Best For */}
      <div className="mb-6 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#e25822] mb-1">
          Best For
        </p>
        <p className="text-sm text-white font-medium">{tier.bestFor}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2.5 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#e25822] flex-shrink-0 mt-0.5" />
            <span className="text-sm text-[#a1a1aa] leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={`#contact?tier=${tier.slug}`}
        onClick={(e) => {
          // Navigate to contact section and pass tier via hash param
          e.preventDefault();
          const contactEl = document.getElementById("contact");
          if (contactEl) {
            // Store tier in sessionStorage so CallbackForm can pick it up
            sessionStorage.setItem("selectedTier", tier.slug);
            contactEl.scrollIntoView({ behavior: "smooth" });
            // Dispatch a custom event so the form can react
            window.dispatchEvent(
              new CustomEvent("tierSelected", { detail: { tier: tier.slug } })
            );
          }
        }}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] ${
          tier.highlight
            ? "bg-[#e25822] hover:bg-[#c94b1c] text-white shadow-lg shadow-[#e25822]/25"
            : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
        }`}
      >
        {tier.cta}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function EngagementOptions() {
  return (
    <section
      id="engagement"
      className="py-24 px-6 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#e25822]/4 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#e25822]">
            Engagement Options
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight text-white max-w-3xl leading-tight">
            How We <span className="text-[#e25822]">Work Together</span>
          </h2>
          <p className="text-[#a1a1aa] font-manrope text-base md:text-lg max-w-xl leading-relaxed">
            Three ways to engage — from a focused sprint to a long-term technical
            partnership. Pick what fits your stage.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {pricingTiers.map((tier) => (
            <TierCard key={tier.slug} tier={tier} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#a1a1aa] text-sm font-manrope">
            Not sure which fits?{" "}
            <a
              href="#contact"
              className="text-[#e25822] font-semibold hover:underline underline-offset-2"
            >
              Let&apos;s talk through your project →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
