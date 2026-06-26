import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-black"
    >
      {/* Background Glowing Orb */}
      <div className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[320px] md:w-[600px] h-[320px] md:h-[600px] rounded-full bg-primary/10 blur-[90px] md:blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl flex flex-col items-center text-center gap-6">
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs md:text-sm font-semibold tracking-wide hover:bg-primary/10 transition-colors cursor-pointer select-none">
          <span>🚀</span>
          <span>Available for New Projects</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white font-machina leading-[1.1] max-w-4xl">
          I Build Software
          <br className="hidden md:block" />
          {" "}That Makes{" "}
          <span className="inline-block relative text-primary font-caveat font-normal rotate-[-3deg] px-2 scale-105 select-none drop-shadow-[0_4px_12px_rgba(232,96,46,0.15)]">
            Money.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl text-grey-400 font-manrope text-base md:text-lg leading-relaxed mt-2">
          Helping founders ship MVPs in weeks, not months. Specializing in high-performance web applications, native mobile experiences, and custom AI support integrations.
        </p>

        {/* Call to Actions (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <a
            href="#work"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-primary/20"
          >
            <span>View Latest Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-white/10 hover:border-white bg-transparent hover:bg-white hover:text-black text-white font-semibold rounded-lg transition-all duration-300"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <a href="#stats" className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-grey-400">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border-2 border-grey-400 flex justify-center p-1 mt-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 mt-1 text-grey-500 animate-pulse" />
        </a>
      </div>
    </section>
  );
}
