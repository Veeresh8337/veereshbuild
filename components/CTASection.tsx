"use client";

import { ArrowRight, Star } from "lucide-react";

export default function CTASection() {
  const brandLogos = [
    { name: "nagarro", logo: (
      <span className="text-grey-500 font-bold tracking-tight text-lg md:text-xl group-hover:text-white transition-colors select-none">
        nagarro<span className="text-primary font-normal">.</span>
      </span>
    )},
    { name: "amazon", logo: (
      <svg className="h-6 md:h-7 text-grey-500 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.2 4.3c-.6.3-1 .8-1 1.5 0 .9.8 1.4 1.8 1.4 1.2 0 2-.6 2.3-1.4V7h1.1V3.7c0-1.4-.8-2-2.3-2C1.7 1.7.7 2.3.5 3.3h1.1c.2-.5.5-.8 1.1-.8.7 0 1.1.3 1.1.9v.4l-2.6.5zm1.2 1.3c-.5 0-.9-.2-.9-.7s.4-.7.9-.8l1.4-.3v1.1c-.3.4-.8.7-1.4.7zm6-.3c0 1.1.7 1.9 1.8 1.9s1.8-.8 1.8-1.9V1.9h-1.1v3.3c0 .7-.3 1.1-.9 1.1-.5 0-.8-.4-.8-1.1V1.9H7.3v3.4zm7.3-1c-.6.2-.9.5-.9.9s.4.7.8.7c.6 0 .9-.3 1.1-.7V4.3l-1 .3zm1.1-2.4c-.8 0-1.5.4-1.8 1V1.9h-1.1V7h1.1V4.9c.3.5.9.8 1.6.8.9 0 1.7-.8 1.7-2.6.1-1.6-.7-2.6-1.5-2.6zm6-.3c-1.1 0-1.8.8-1.8 1.9s.7 1.9 1.8 1.9c1.1 0 1.8-.8 1.8-1.9S23.8 1.9 22.8 1.9zm0 3c-.6 0-.9-.5-.9-1.1s.3-1.1.9-1.1c.6 0 .9.5.9 1.1s-.3 1.1-.9 1.1z"/>
        <path d="M.4 7.5c2.6 1 5.8 1.3 8.7 1.3 3.3 0 6.7-.4 9.6-1.5-.4-.3-.8-.7-1-1.1C15 7.1 11.8 7.5 8.7 7.5 5.8 7.5 3 7.1.6 6.3c-.1.2-.2.4-.2.7l-.2.5z" fill="#e8602e"/>
      </svg>
    )},
    { name: "walmart", logo: (
      <div className="flex items-center gap-1.5 group-hover:text-white transition-colors text-grey-500">
        <span className="font-extrabold tracking-tight text-lg md:text-xl">Walmart</span>
        <svg className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0l1.7 4.5 4.7-1.7-1.7 4.7 4.5 1.7-4.5 1.7 1.7 4.7-4.7-1.7-1.7 4.5-1.7-4.5-4.7 1.7 1.7-4.7-4.5-1.7 4.5-1.7-1.7-4.7 4.7 1.7z" />
        </svg>
      </div>
    )},
    { name: "tcs", logo: (
      <div className="flex flex-col items-start leading-none group-hover:text-white transition-colors text-grey-500 font-manrope">
        <span className="font-black text-sm tracking-widest uppercase">tcs</span>
        <span className="text-[7px] uppercase tracking-wider text-grey-600">tata consultancy</span>
      </div>
    )}
  ];

  return (
    <section className="py-16 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid Block */}
        <div className="p-1 md:p-8 rounded-3xl bg-white/[0.01] border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 md:p-4">
            
            {/* Left Column widgets */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              {/* Top row with 2 small boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Stats 1: GitHub */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 flex flex-col justify-between min-h-[140px] transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <h4 className="text-3xl font-extrabold font-machina text-white flex items-baseline">
                      50K<span className="text-primary text-2xl font-normal">+</span>
                    </h4>
                    <svg className="w-5 h-5 text-primary opacity-80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">GitHub Commits</p>
                    <p className="text-[11px] text-grey-500 leading-normal">Be part of clean, modular, and optimized repositories.</p>
                  </div>
                </div>

                {/* Stats 2: Hackathon Winnings */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 flex flex-col justify-between min-h-[140px] transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <h4 className="text-3xl font-extrabold font-machina text-white flex items-baseline">
                      05<span className="text-primary text-2xl font-normal">+ Wins</span>
                    </h4>
                    <Star className="w-5 h-5 text-primary opacity-80" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Hackathon Titles</p>
                    <p className="text-[11px] text-grey-500 leading-normal">Rapidly shipping technical products under strict deadlines.</p>
                  </div>
                </div>
              </div>

              {/* Bottom larger box */}
              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-machina text-white text-2xl md:text-4xl font-black uppercase tracking-tight">
                    LAUNCH
                  </span>
                  
                  {/* Overlapping small avatar images */}
                  <div className="flex -space-x-2.5 overflow-hidden py-1">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
                      "/veeresh-avatar.jpg"
                    ].map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt="Profile avatar"
                        className="w-8 h-8 rounded-full border-2 border-[#111115] object-cover inline-block"
                      />
                    ))}
                  </div>

                  <span className="font-machina text-white text-2xl md:text-4xl font-black uppercase tracking-tight">
                    YOUR
                  </span>
                </div>

                {/* Arrow Pill Indicator */}
                <a 
                  href="#contact"
                  className="w-16 h-8 rounded-full border border-primary/30 hover:border-primary flex items-center justify-center text-primary mt-4 hover:scale-105 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>

                <h3 className="font-machina text-2xl md:text-4xl font-black tracking-tight text-white leading-tight mt-6">
                  MVP AND PRODUCT TO THE MARKET FAST!
                </h3>
              </div>
            </div>

            {/* Right Column tall video player card */}
            <div className="lg:col-span-5 relative rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 bg-zinc-950 overflow-hidden min-h-[360px]">
              <iframe
                className="absolute inset-0 w-full h-full border-0 rounded-2xl"
                src="https://www.youtube.com/embed/S2T7Bm17Bng?autoplay=1&mute=1&loop=1&playlist=S2T7Bm17Bng"
                title="Sheryians Campaign Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>
        </div>

        {/* Inline CSS for seamless marquee scroll */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scrollSkills {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .skills-scroll-container {
            display: flex;
            width: max-content;
            animation: scrollSkills 28s linear infinite;
          }
          .skills-scroll-container:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* Skills Logo Infinite Marquee */}
        <div className="mt-16 overflow-hidden w-full relative py-6 border-y border-white/5 bg-white/[0.005]">
          <div className="skills-scroll-container flex gap-16 items-center">
            {/* Array of tech stack icons */}
            {[
              {
                name: "React",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-[180deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(30 50 50)" />
                    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(90 50 50)" />
                    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(150 50 50)" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                  </svg>
                )
              },
              {
                name: "Next.js",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <circle cx="50" cy="50" r="45" />
                    <path d="M35 70V30l30 40V30" />
                  </svg>
                )
              },
              {
                name: "TypeScript",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <rect x="15" y="15" width="70" height="70" rx="8" />
                    <path d="M35 32h15M42.5 32v36M55 45c0-10 15-10 15 0s-15 10-15 20h15" />
                  </svg>
                )
              },
              {
                name: "Node.js",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M50 12L82 30V68L50 86L18 68V30L50 12Z" />
                    <path d="M50 12V86M18 30L50 49L82 30M18 68L50 49L82 68" />
                  </svg>
                )
              },
              {
                name: "Tailwind CSS",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M15 45C25 28 45 28 55 45C65 62 85 62 95 45" />
                    <path d="M5 55C15 38 35 38 45 55C55 72 75 72 85 55" />
                  </svg>
                )
              },
              {
                name: "Docker",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <rect x="22" y="32" width="12" height="12" rx="1.5" />
                    <rect x="38" y="32" width="12" height="12" rx="1.5" />
                    <rect x="54" y="32" width="12" height="12" rx="1.5" />
                    <rect x="30" y="48" width="12" height="12" rx="1.5" />
                    <rect x="46" y="48" width="12" height="12" rx="1.5" />
                    <path d="M12 70C22 70 32 70 42 66C52 62 68 62 82 70" />
                  </svg>
                )
              },
              {
                name: "Supabase",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:scale-105" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M58 12L22 55h28L32 88l46-43H50L58 12Z" />
                  </svg>
                )
              },
              {
                name: "GitHub",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-[360deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M50 10C25 10 5 30 5 55C5 75 18 92 36 98c2 .5 3-.5 3-2v-7c-12 2-15-5-15-5-2-5-5-7-5-7-4-3 .5-3 .5-3 4 .5 7 4 7 4 4 6 10 4 12 3.5.5-3 1.5-5 3-6-10-1.5-20-5-20-21.5 0-4.5 1.5-8 4-11-.5-1-1.5-5 .5-11 0 0 3.5-1 11.5 4.5a38 38 0 0 1 20 0C70 29 73.5 30 73.5 30c2 6 1 10 .5 11 2.5 3 4 6.5 4 11 0 16.5-10 20-20.5 21.5 1.5 1.5 3 4.5 3 9.5v14c0 1.5 1 2.5 3 2C82 92 95 75 95 55c0-25-20-45-45-45Z" />
                  </svg>
                )
              }
            ].map((skill, idx) => (
              <div key={`skill-1-${idx}`} className="flex items-center gap-4 group">
                <div className="flex-shrink-0">
                  {skill.icon}
                </div>
                <span className="text-sm font-bold font-manrope text-grey-500 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}

            {/* Loop duplication for seamless scroll */}
            {[
              {
                name: "React",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-[180deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(30 50 50)" />
                    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(90 50 50)" />
                    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(150 50 50)" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                  </svg>
                )
              },
              {
                name: "Next.js",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <circle cx="50" cy="50" r="45" />
                    <path d="M35 70V30l30 40V30" />
                  </svg>
                )
              },
              {
                name: "TypeScript",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <rect x="15" y="15" width="70" height="70" rx="8" />
                    <path d="M35 32h15M42.5 32v36M55 45c0-10 15-10 15 0s-15 10-15 20h15" />
                  </svg>
                )
              },
              {
                name: "Node.js",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M50 12L82 30V68L50 86L18 68V30L50 12Z" />
                    <path d="M50 12V86M18 30L50 49L82 30M18 68L50 49L82 68" />
                  </svg>
                )
              },
              {
                name: "Tailwind CSS",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M15 45C25 28 45 28 55 45C65 62 85 62 95 45" />
                    <path d="M5 55C15 38 35 38 45 55C55 72 75 72 85 55" />
                  </svg>
                )
              },
              {
                name: "Docker",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <rect x="22" y="32" width="12" height="12" rx="1.5" />
                    <rect x="38" y="32" width="12" height="12" rx="1.5" />
                    <rect x="54" y="32" width="12" height="12" rx="1.5" />
                    <rect x="30" y="48" width="12" height="12" rx="1.5" />
                    <rect x="46" y="48" width="12" height="12" rx="1.5" />
                    <path d="M12 70C22 70 32 70 42 66C52 62 68 62 82 70" />
                  </svg>
                )
              },
              {
                name: "Supabase",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:scale-105" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M58 12L22 55h28L32 88l46-43H50L58 12Z" />
                  </svg>
                )
              },
              {
                name: "GitHub",
                icon: (
                  <svg className="w-8 h-8 text-grey-500 group-hover:text-primary transition-all duration-500 hover:rotate-[360deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M50 10C25 10 5 30 5 55C5 75 18 92 36 98c2 .5 3-.5 3-2v-7c-12 2-15-5-15-5-2-5-5-7-5-7-4-3 .5-3 .5-3 4 .5 7 4 7 4 4 6 10 4 12 3.5.5-3 1.5-5 3-6-10-1.5-20-5-20-21.5 0-4.5 1.5-8 4-11-.5-1-1.5-5 .5-11 0 0 3.5-1 11.5 4.5a38 38 0 0 1 20 0C70 29 73.5 30 73.5 30c2 6 1 10 .5 11 2.5 3 4 6.5 4 11 0 16.5-10 20-20.5 21.5 1.5 1.5 3 4.5 3 9.5v14c0 1.5 1 2.5 3 2C82 92 95 75 95 55c0-25-20-45-45-45Z" />
                  </svg>
                )
              }
            ].map((skill, idx) => (
              <div key={`skill-2-${idx}`} className="flex items-center gap-4 group">
                <div className="flex-shrink-0">
                  {skill.icon}
                </div>
                <span className="text-sm font-bold font-manrope text-grey-500 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
