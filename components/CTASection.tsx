"use client";

import { ArrowRight, Star, Youtube } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-6 bg-black relative flex justify-center">
      <div className="w-full max-w-6xl p-4 md:p-6 rounded-3xl bg-[#111111] border border-[#222222] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Top row with 2 small boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[220px]">
              {/* Stats 1: GitHub */}
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#222222] flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center gap-2">
                    <svg className="w-7 h-7 text-[#e25822]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <h4 className="text-2xl font-light text-[#e25822]">
                      50K+
                    </h4>
                  </div>
                  <p className="text-sm font-light text-white mt-2">GitHub Commits</p>
                </div>
                <p className="text-[13px] text-gray-400 font-light leading-snug">
                  Be part of clean, modular, and optimized repositories.
                </p>
              </div>

              {/* Stats 2: Hackathon Winnings */}
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#222222] flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center gap-2">
                    <Star className="w-7 h-7 text-[#e25822] fill-[#e25822]" />
                    <h4 className="text-2xl font-light text-[#e25822]">
                      05+ Wins
                    </h4>
                  </div>
                  <p className="text-sm font-light text-white mt-2">Hackathon Titles</p>
                </div>
                <p className="text-[13px] text-gray-400 font-light leading-snug">
                  Rapidly shipping technical products under strict deadlines.
                </p>
              </div>
            </div>

            {/* Bottom larger box */}
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#222222] flex flex-col justify-between flex-1 min-h-[260px]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-white text-3xl md:text-4xl font-light uppercase tracking-wide">
                    LAUNCH
                  </span>
                  
                  {/* Overlapping small avatar images */}
                  <div className="flex -space-x-2 overflow-hidden">
                    {[
                      "https://randomuser.me/api/portraits/women/44.jpg",
                      "https://randomuser.me/api/portraits/men/32.jpg",
                      "https://randomuser.me/api/portraits/women/68.jpg",
                      "https://randomuser.me/api/portraits/men/46.jpg"
                    ].map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt="Profile avatar"
                        className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] object-cover"
                      />
                    ))}
                  </div>

                  <span className="text-white text-3xl md:text-4xl font-light uppercase tracking-wide">
                    YOUR
                  </span>
                </div>

                {/* Arrow Pill Indicator */}
                <div className="mt-4">
                  <div className="w-16 h-7 rounded-full border border-white/20 flex items-center justify-end px-2 text-white/80">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-light tracking-wide text-white leading-tight mt-6 uppercase">
                MVP AND PRODUCT<br />TO THE MARKET FAST!
              </h3>
            </div>
          </div>

          {/* Right Column tall video player card */}
          <div className="lg:col-span-6 relative rounded-2xl border border-[#222222] bg-[#0a0a0a] overflow-hidden min-h-[496px]">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
              <iframe
                className="absolute inset-0 w-full h-full border-0 scale-[1.35] origin-center grayscale brightness-75 sepia-[0.3] hue-rotate-[-30deg]"
                src="https://www.youtube.com/embed/S2T7Bm17Bng?autoplay=1&mute=1&loop=1&playlist=S2T7Bm17Bng&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                title="Campaign Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/80 pointer-events-none"></div>

            {/* Content overlay */}
            <div className="relative z-20 h-full flex flex-col justify-between p-8">
              {/* Top Text */}
              <div className="flex justify-between items-start gap-4">
                <h2 className="text-4xl font-light text-white leading-tight">
                  Start<br />Building
                </h2>
                <p className="text-[#c73b22] text-sm max-w-[220px] text-right mt-2 leading-relaxed">
                  A movement shaping India's next coders
                </p>
              </div>

              {/* Huge Background Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none mix-blend-color-dodge">
                <span className="text-[130px] font-black tracking-tighter text-[#8a2a16]/40 select-none scale-y-[1.6] inline-block">
                  VEERESH
                </span>
              </div>

              {/* Bottom Content */}
              <div className="flex flex-col gap-8 relative z-30">
                {/* Tags scattered */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start max-w-sm mx-auto md:mx-0">
                  {['Web Development', 'Data Structures and Algorithms', 'Programming', 'Placements', 'Design ui/ux'].map(tag => (
                    <span key={tag} className="text-[#a1a1a1]/80 text-[11px] font-light tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="self-center md:self-start">
                  <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#333] rounded-xl text-[#e25822] text-sm font-normal hover:bg-[#e25822]/10 transition-colors">
                    Get in touch <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
