"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-black"
    >
      {/* Background Grid/Lines effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Subtle Glow */}
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[320px] md:w-[600px] h-[320px] md:h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center text-center gap-5 mt-10">
        {/* Top Text */}
        <div className="text-[#e25822] text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
          LEARN. BUILD. GET PLACED.
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white font-sans leading-[1.2] w-full tracking-tight">
          Become The Software Engineer<br />
          That <span className="inline-block border border-[#e25822]/40 bg-[#e25822]/5 px-3 py-0.5 md:py-1 mx-1 md:mx-2 text-white">Companies</span> Want To Hire!
        </h1>

        {/* Sub-headline */}
        <p className="text-[#a1a1aa] text-base md:text-lg font-light mt-2 max-w-2xl mx-auto leading-relaxed">
          Join a growing community of students preparing for real-world tech careers at<br className="hidden sm:block" /> Sheryians.
        </p>

        {/* Avatar Group & Social Proof */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border border-black object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" />
            <img className="w-8 h-8 rounded-full border border-black object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" />
            <img className="w-8 h-8 rounded-full border border-black object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Student" />
            <img className="w-8 h-8 rounded-full border border-black object-cover" src="https://randomuser.me/api/portraits/men/46.jpg" alt="Student" />
          </div>
          <p className="text-xs md:text-sm text-[#a1a1aa] font-light">
            <span className="text-[#e25822] font-semibold">1 Million+</span> Students learning in our mastery programs
          </p>
        </div>

        {/* Call to Actions (CTAs) */}
        <div className="mt-6 w-full sm:w-auto">
          <a
            href="#journey"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c84d2b] hover:bg-[#a63d20] text-white text-sm md:text-base font-medium rounded-lg transition-all duration-300"
          >
            <span>Start Journey</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
