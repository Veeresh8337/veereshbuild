"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Clock, Code, Send } from "lucide-react";

export default function Cohorts() {
  const router = useRouter();

  const projectsData = [
    {
      id: "aumniverse",
      title: "Aumniverse",
      desc: "Aumniverse is a premium, minimalist spiritual dashboard that preserves sacred Indian scriptures. Built with a quiet luxury Apple-style aesthetic, it tracks reading progress across classical texts and displays custom-carved high-relief icons.",
      duration: "Currently Building",
      tech: "React Native + Expo",
      features: [
        "Apple-style quiet luxury aesthetic with warm cream gradients",
        "High-relief, deeply textured bronze icons for sacred scriptures",
        "Elegant serif typography and beautiful Indian heritage framing",
        "Real-time reading progress tracking bars and bookmark syncs",
        "Custom scroll-selector modal overlay animations"
      ],
      tags: ["UI/UX Case Study", "Mobile App", "React Native", "Expo"],
      image: "/aumniverse-explore.jpg",
      bgColor: "bg-[#fdfbf7]",
      textColor: "text-black",
      pillBg: "bg-[#b8860b]/10",
      pillText: "text-[#b8860b]",
      buttonBg: "bg-[#b8860b]",
      buttonText: "text-white"
    },
    {
      id: "my-horoscope",
      title: "My Horoscope",
      desc: "My Horoscope is a modern AI-powered astrology platform that delivers personalized birth chart analysis, daily horoscope predictions, and conversational AI guidance. Users receive insights based on their exact birth date, time, and location instead of generic zodiac-based predictions, creating a highly personalized experience.",
      duration: "3 Weeks Build Time",
      tech: "Next.js + OpenAI + Tailwind",
      features: [
        "Personalized birth chart generation from birth details",
        "Conversational AI Astrologer guidance using fine-tuned LLMs",
        "Daily planetary transit calculations & custom readings",
        "Dynamic SVG celestial chart rendering",
        "Optimized redis caching for global birth coordinates query"
      ],
      tags: ["AI", "Astrology", "Next.js", "OpenAI"],
      image: "/my-horoscope.png",
      bgColor: "bg-[#0b0f19]",
      textColor: "text-white",
      pillBg: "bg-white/10",
      pillText: "text-white",
      buttonBg: "bg-[#00e5a3]",
      buttonText: "text-black"
    },
    {
      id: "securevote",
      title: "SecureVote",
      desc: "Developed during a high-stakes hackathon, SecureVote solves the 'trust gap' in digital voting. The system features a robust Admin Dashboard with cryptographically verified ballots, and real-time result audits.",
      duration: "36 Hour Build Time",
      tech: "React + Node.js + JWT",
      features: [
        "Stateless JWT voter authentication to ensure security",
        "Cryptographically hashed voter ballot logs",
        "Real-time election oversight Admin Dashboard",
        "Streamlined voter interface for friction-free casting",
        "Duplicate-prevention database optimization rules"
      ],
      tags: ["MERN Stack", "JWT", "Security", "Hackathon"],
      image: "/voting-hero.png",
      bgColor: "bg-[#185adb]",
      textColor: "text-white",
      pillBg: "bg-white/10",
      pillText: "text-white",
      buttonBg: "bg-[#ccff00]",
      buttonText: "text-black"
    },
    {
      id: "khetak",
      title: "Khetak Cybersecurity Shield",
      desc: "Khetak is an AI-powered smart digital guardian browser extension that blurs adult content and flags phishing/cyberbullying threats in real-time, securing online workspaces.",
      duration: "2 Weeks Build Time",
      tech: "Chrome Extension + Python",
      features: [
        "Real-time blurring of adult/NSFW content on social feeds",
        "One-click reporting system linked to security nodes",
        "Intent-aware AI text parsing to prevent cyberbullying",
        "Lightweight local browser extension architecture",
        "Optimized ML filters running on client devices"
      ],
      tags: ["Security", "Extension", "AI Parsing", "Auth"],
      image: "/khetak.png",
      bgColor: "bg-white",
      textColor: "text-black",
      pillBg: "bg-gray-100",
      pillText: "text-black",
      buttonBg: "bg-[#e25822]",
      buttonText: "text-white"
    },
    {
      id: "smartwatts",
      title: "SmartWatts Energy Estimator",
      desc: "SmartWatts is a software-defined power estimator that uses hardware performance counters to trace the carbon footprint of containerized software in real-time.",
      duration: "3 Weeks Build Time",
      tech: "Docker/K8s + Prometheus",
      features: [
        "Real-time power estimation of individual software containers",
        "Hardware performance counter wrapping without sensors",
        "Grafana and Prometheus monitoring integration streams",
        "Actionable AI-driven energy cost reduction advice",
        "Docker & Kubernetes API container trace nodes"
      ],
      tags: ["GreenTech", "Docker", "Kubernetes", "Telemetry"],
      image: "/smartwatts.png",
      bgColor: "bg-[#111111]",
      textColor: "text-white",
      pillBg: "bg-white/10",
      pillText: "text-white",
      buttonBg: "bg-[#ccff00]",
      buttonText: "text-black"
    }
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-6 bg-[#fff0e5] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="px-6 py-1.5 bg-transparent border border-[#e25822]/40 text-[#e25822] text-sm font-semibold tracking-widest uppercase">
            PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black max-w-4xl leading-tight">
            Selected MVPs & High-Performance Builds Deployed for Startups.
          </h2>
          <a
            href="#contact"
            className="mt-4 px-8 py-3.5 bg-[#d44d1c] text-white rounded-full font-medium hover:bg-[#b93f13] transition-colors flex items-center gap-2 shadow-lg shadow-[#d44d1c]/20"
          >
            Discuss Your Build <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Sticky Stacked Cards container */}
        <div className="relative pb-32 flex flex-col gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              onClick={() => router.push(`/projects/${project.id}`)}
              className={`sticky ${project.bgColor} rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col-reverse md:flex-row overflow-hidden border border-black/5 hover:scale-[1.01] hover:shadow-3xl transition-all duration-300 cursor-pointer`}
              style={{
                // Stagger the top property so they stack with a 40px offset visually
                top: `${100 + index * 40}px`, 
                minHeight: '480px'
              }}
            >
              {/* Left Side: Text Content */}
              <div className={`p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center ${project.textColor}`}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg opacity-90 mb-8 max-w-xl font-light">
                  {project.desc}
                </p>

                {/* Info Pills */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm ${project.pillBg} ${project.pillText}`}>
                    {project.duration === "Currently Building" ? (
                      <span className="relative flex h-2 w-2 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b8860b] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b8860b]"></span>
                      </span>
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                    <span>{project.duration}</span>
                  </div>
                  <div className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm ${project.pillBg} ${project.pillText}`}>
                    <Code className="w-4 h-4" />
                    <span>{project.tech}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-2.5 mb-12">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base opacity-85 leading-snug">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${project.textColor === 'text-black' ? 'bg-[#e25822]' : 'bg-white'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-12 mt-auto pt-6 border-t border-black/5">
                  <div className="flex flex-col gap-2">
                    <div className="text-xs uppercase tracking-wider opacity-85 font-semibold">Tech Stack</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1 rounded border ${
                            project.textColor === 'text-black'
                              ? 'bg-black/5 border-black/10 text-black'
                              : 'bg-white/5 border-white/10 text-white'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Read More and Discuss Build buttons */}
                  <div className="flex flex-wrap gap-3 ml-auto sm:ml-0">
                    <a
                      href={`/projects/${project.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className={`px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider flex items-center gap-2 border ${
                        project.textColor === 'text-black'
                          ? "border-black/15 hover:border-black text-black hover:bg-black/5"
                          : "border-white/20 hover:border-white text-white hover:bg-white/5"
                      } hover:scale-105 transition-all duration-300`}
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className={`px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider flex items-center gap-2 ${project.buttonBg} ${project.buttonText} hover:scale-105 transition-all duration-300 shadow-lg`}
                    >
                      Discuss Build <Send className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:w-5/12 p-4 md:p-8 flex items-center justify-center">
                <div className="w-full h-64 md:h-full min-h-[300px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
