"use client";

import { ArrowRight } from "lucide-react";

// =============================================================================
// HEADLINE VARIANTS — Choose one by setting it as the active <h1> below.
// =============================================================================
//
// VARIANT A (Active) — Outcome / Client Language:
//   "Your Idea. Live & Earning. In 21 Days."
//   Sub: "We ship revenue-ready MVPs at startup speed — no 6-month agency timelines,
//         no inflated teams. Just focused builds that reach your first users fast."
//
// VARIANT B — Bold / Direct:
//   "We Ship Revenue-Ready MVPs. In 3 Weeks, Not 3 Months."
//   Sub: "Most agencies take 6 months to deliver what we ship in weeks — with
//         cleaner architecture and outcomes that actually move your KPIs."
//
// VARIANT C — AI-Velocity Angle:
//   "AI-Accelerated Builds. 4× the Speed of Traditional Agencies."
//   Sub: "We combine AI-assisted engineering with battle-tested architecture to
//         cut time-to-launch — without cutting corners. 15+ MVPs proven it."
//
// =============================================================================

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-black"
    >
      {/* Premium Tech Background with Diagonal Wireframes and Halftone Dot Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#000000]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dot Grid Pattern */}
            <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#e25822" opacity="0.35" />
            </pattern>
            {/* Center Orange Glow */}
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e25822" stopOpacity="0.16" />
              <stop offset="45%" stopColor="#e25822" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#e25822" stopOpacity="0" />
            </radialGradient>
            {/* Additional Left/Right Glows */}
            <radialGradient id="sideGlowLeft" cx="10%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#e25822" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#e25822" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="sideGlowRight" cx="90%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#e25822" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#e25822" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Glows */}
          <rect width="1920" height="1080" fill="url(#centerGlow)" />
          <rect width="1920" height="1080" fill="url(#sideGlowLeft)" />
          <rect width="1920" height="1080" fill="url(#sideGlowRight)" />

          {/* Dot Grid Panels inside geometric shapes */}
          {/* Left Panel */}
          <polygon
            points="0,100 460,540 0,980"
            fill="url(#dotGrid)"
          />
          {/* Right Panel */}
          <polygon
            points="1920,100 1460,540 1920,980"
            fill="url(#dotGrid)"
          />

          {/* Wireframe Outline Diagonals */}
          {/* Large Center Diamonds */}
          <polygon
            points="960,150 1460,540 960,930 460,540"
            stroke="#e25822"
            strokeWidth="1.2"
            strokeOpacity="0.12"
            fill="none"
          />
          <polygon
            points="960,80 1560,540 960,1000 360,540"
            stroke="#e25822"
            strokeWidth="0.8"
            strokeOpacity="0.06"
            fill="none"
          />

          {/* Left/Right bounding lines of dot grids */}
          <line x1="0" y1="100" x2="460" y2="540" stroke="#e25822" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="0" y1="980" x2="460" y2="540" stroke="#e25822" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="1920" y1="100" x2="1460" y2="540" stroke="#e25822" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="1920" y1="980" x2="1460" y2="540" stroke="#e25822" strokeWidth="1" strokeOpacity="0.15" />

          {/* Subtle intersecting horizontal lines */}
          <line x1="0" y1="540" x2="1920" y2="540" stroke="#e25822" strokeWidth="0.8" strokeOpacity="0.04" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center text-center gap-5 mt-10">
        {/* Top Text */}
        <div className="text-[#e25822] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
          FULL-STACK DEVELOPMENT • AI INTEGRATION • RAPID MVP DELIVERY
        </div>

        {/* Main Headline — VARIANT A (Outcome / Client Language) */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white font-sans leading-[1.15] w-full tracking-tight">
          Your Idea. Live &amp; Earning.<br />
          In{" "}
          <span className="inline-block relative border border-[#e25822]/60 bg-[#e25822]/10 px-3 py-0.5 md:py-1 mx-1 md:mx-2 text-white">
            21 Days.
            {/* Corner accents */}
            <span className="absolute -top-[2.5px] -left-[2.5px] w-[5px] h-[5px] bg-white border border-[#e25822]/60"></span>
            <span className="absolute -top-[2.5px] -right-[2.5px] w-[5px] h-[5px] bg-white border border-[#e25822]/60"></span>
            <span className="absolute -bottom-[2.5px] -left-[2.5px] w-[5px] h-[5px] bg-white border border-[#e25822]/60"></span>
            <span className="absolute -bottom-[2.5px] -right-[2.5px] w-[5px] h-[5px] bg-white border border-[#e25822]/60"></span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[#a1a1aa] text-base md:text-lg font-light mt-2 max-w-2xl mx-auto leading-relaxed">
          We ship revenue-ready MVPs at startup speed — no 6-month agency timelines,
          no inflated teams. Just focused builds that reach your first users fast.
        </p>

        {/* Credibility Line — replaces fake stock photo avatars */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
            <span className="w-2 h-2 rounded-full bg-[#e25822] animate-pulse flex-shrink-0" />
            <p className="text-xs md:text-sm text-[#a1a1aa] font-light">
              <span className="text-[#e25822] font-semibold">15+ MVPs shipped.</span>
              {" "}100% on-time delivery. 5× national hackathon wins.
            </p>
          </div>
        </div>

        {/* Call to Actions (CTAs) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center sm:w-auto">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#e25822] hover:bg-[#c94b1c] text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#e25822]/20"
          >
            <span>Start Your Build</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 hover:border-white text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 hover:bg-white/5"
          >
            <span>See Real Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}

