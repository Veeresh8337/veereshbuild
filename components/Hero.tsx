"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

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

        {/* Badge / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e25822]/30 bg-[#e25822]/8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e25822] animate-pulse flex-shrink-0" />
          <span className="text-[#e25822] text-xs md:text-sm font-bold tracking-[0.18em] uppercase">
            Fixed Scopes&nbsp;•&nbsp;21-Day Sprints&nbsp;•&nbsp;Zero Fluff
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] text-center mb-6">
          Stop Building Digital Brochures.{" "}
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 inline-block">
            Ship Software That Generates Revenue.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[#a1a1aa] text-base md:text-lg font-light mt-2 max-w-2xl mx-auto leading-relaxed">
          We engineer full-stack web platforms, automated client portals, and revenue-ready MVPs in 21 days—no agency bloat, no static templates, just production-grade software.
        </p>

        {/* Social Proof Pill */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm text-zinc-300 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
          <span className="font-semibold text-orange-400">15+ MVPs shipped</span>
          <span className="text-zinc-300">•</span>
          <span className="text-zinc-300">100% on-time delivery</span>
          <span className="text-zinc-300">•</span>
          <span className="text-zinc-300">5× national hackathon wins</span>
        </div>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center sm:w-auto">
          <a
            href="#contact"
            id="hero-cta-book-call"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#e25822] hover:bg-[#c94b1c] text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#e25822]/20"
          >
            <span>Book Architecture Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#engagement"
            id="hero-cta-sprints"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 hover:border-white text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 hover:bg-white/5"
          >
            <ChevronDown className="w-4 h-4" />
            <span>Explore 21-Day Sprints</span>
          </a>
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] font-semibold">Powered by</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "React / Next.js",
              "FastAPI",
              "Flutter",
              "Supabase",
              "Node.js",
              "AI Integrations",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#a1a1aa] border border-white/10 bg-white/[0.03] hover:border-[#e25822]/40 hover:text-white transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
