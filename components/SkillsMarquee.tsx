"use client";

export default function SkillsMarquee() {
  return (
    <>
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
      <div className="overflow-hidden w-full relative py-6 border-y border-white/5 bg-white/[0.005]">
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
    </>
  );
}
