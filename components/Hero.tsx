"use client";

import { ArrowRight } from "lucide-react";

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
          SOFTWARE ENGINEER • FULL-STACK • AI
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white font-sans leading-[1.15] w-full tracking-tight">
          Stop Searching.<br />
          Start Building.<br />
          I Turn <span className="inline-block relative border border-[#e25822]/60 bg-[#e25822]/10 px-3 py-0.5 md:py-1 mx-1 md:mx-2 text-white">
            Ideas
            {/* Corner accents */}
            <span className="absolute -top-[2.5px] -left-[2.5px] w-[5px] h-[5px] bg-white border border-[#e25822]/60"></span>
            <span className="absolute -top-[2.5px] -right-[2.5px] w-[5px] h-[5px] bg-white border border-[#e25822]/60"></span>
            <span className="absolute -bottom-[2.5px] -left-[2.5px] w-[5px] h-[5px] bg-white border border-[#e25822]/60"></span>
            <span className="absolute -bottom-[2.5px] -right-[2.5px] w-[5px] h-[5px] bg-white border border-[#e25822]/60"></span>
          </span> Into Software.
        </h1>

        {/* Sub-headline */}
        <p className="text-[#a1a1aa] text-base md:text-lg font-light mt-2 max-w-2xl mx-auto leading-relaxed">
          Building modern web applications, AI-powered solutions, and scalable backend systems with clean architecture and exceptional performance.
        </p>

        {/* Avatar Group & Social Proof */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border border-black object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
            <img className="w-8 h-8 rounded-full border border-black object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
            <img className="w-8 h-8 rounded-full border border-black object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
            <img className="w-8 h-8 rounded-full border border-black object-cover" src="https://randomuser.me/api/portraits/men/46.jpg" alt="Client" />
          </div>
          <p className="text-xs md:text-sm text-[#a1a1aa] font-light">
            <span className="text-[#e25822] font-semibold">15+ MVPs</span> shipped for startup founders and companies
          </p>
        </div>

        {/* Call to Actions (CTAs) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center sm:w-auto">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#e25822] hover:bg-[#c94b1c] text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#e25822]/20"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 hover:border-white text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 hover:bg-white/5"
          >
            <span>View Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}
