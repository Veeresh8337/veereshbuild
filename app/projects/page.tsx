"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjectsPage() {
  const router = useRouter();

  const primaryProject = {
    id: "my-horoscope",
    title: "My Horoscope",
    category: "AI-Powered Astrology Platform",
    description: "My Horoscope is a modern AI-powered astrology platform that delivers personalized birth chart analysis, daily horoscope predictions, and conversational AI guidance. Users receive insights based on their exact birth date, time, and location instead of generic zodiac-based predictions, creating a highly personalized experience.",
    tags: ["AI", "ASTROLOGY", "NEXT.JS", "OPENAI"],
    image: "/my-horoscope.png",
    link: "/projects/my-horoscope"
  };

  const gridProjects = [
    {
      id: "securevote",
      title: "SecureVote",
      description: "Developed during a high-stakes hackathon, SecureVote solves the 'trust gap' in digital voting. The system features a robust Admin Dashboard with cryptographically verified ballots, and real-time result audits.",
      tags: ["FULL-STACK", "SECURITY", "HACKATHON", "MERN"],
      image: "/voting-hero.png",
      link: "/projects/securevote"
    },
    {
      id: "aumniverse",
      title: "Aumniverse",
      description: "Aumniverse is a premium, minimalist spiritual dashboard that preserves sacred Indian scriptures. Built with a quiet luxury Apple-style aesthetic, it tracks reading progress across classical texts and displays custom-carved high-relief icons.",
      tags: ["UI/UX CASE", "MOBILE APP", "REACT NATIVE", "EXPO"],
      image: "/aumniverse-explore.jpg",
      link: "/projects/aumniverse"
    },
    {
      id: "khetak",
      title: "Khetak Cybersecurity Shield",
      description: "Khetak is an AI-powered smart digital guardian browser extension that blurs adult content and flags phishing/cyberbullying threats in real-time, securing online workspaces.",
      tags: ["SECURITY", "EXTENSION", "AI PARSING", "AUTH"],
      image: "/khetak.png",
      link: "/projects/khetak"
    },
    {
      id: "smartwatts",
      title: "SmartWatts Energy Estimator",
      description: "SmartWatts is a software-defined power estimator that uses hardware performance counters to trace the carbon footprint of containerized software in real-time.",
      tags: ["GREENTECH", "DOCKER", "KUBERNETES", "TELEMETRY"],
      image: "/smartwatts.png",
      link: "/projects/smartwatts"
    },
    {
      id: "invoicer",
      title: "Invoicer",
      description: "Invoicer is an AI-powered invoice maker designed for freelance creatives and small teams. By translating natural language into structured billing, it eliminates manual entries, visualizes outstanding debts, and simplifies fast payment links.",
      tags: ["AI", "FINTECH", "PRODUCTIVITY", "UX DESIGN"],
      image: "/saas-dashboard.png",
      link: "/projects/invoicer"
    },
    {
      id: "buildhand",
      title: "BuildHand",
      description: "BuildHand is a total rethink of construction operations. We moved away from 'Excel-style' management to a visual-first SaaS ecosystem that helps field managers track materials, report attendance, and approve vendor budgets instantly.",
      tags: ["CONTECH", "B2B SAAS", "OPERATIONS AI", "INFRASTRUCTURE"],
      image: "/mobile-commerce.png",
      link: "/projects/buildhand"
    },
    {
      id: "prognos-labs",
      title: "Prognos Labs",
      description: "For Prognos Labs, performance was the primary feature. We built an enterprise-grade platform focused on 'Digital HQ' principles: immediate trust, low latency context routing, and secure vector database indexes.",
      tags: ["LLMOPS", "GEO STRATEGY", "NEXT.JS 15", "ENTERPRISE UI"],
      image: "/ai-support.png",
      link: "/projects/prognos-labs"
    },
    {
      id: "fridayjob24",
      title: "FridayJob24",
      description: "FridayJob24 is a premium career-tech platform designed for the mobile-first generation. We moved away from the cluttered layouts of legacy portals to engineer a clean, gesture-driven application process for entry-level developers.",
      tags: ["RECRUITMENT SAAS", "EDTECH", "GEN Z UX", "B2C PRODUCT"],
      image: "/fridayjob24.png",
      link: "/projects/fridayjob24"
    }
  ];

  return (
    <>
      {/* Inline styles for the rotating marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .footer-marquee-container {
          display: flex;
          width: max-content;
          animation: marqueeScroll 15s linear infinite;
        }
      `}} />

      {/* Main Page Layout Wrapper */}
      <div className="min-h-screen bg-[#faf9f6] text-black font-sans selection:bg-[#ccff00] selection:text-black">
        {/* Sticky Navigation Bar */}
        <Navbar />

        {/* Outer Section */}
        <main className="max-w-[1400px] mx-auto px-6 md:px-16 pt-36 pb-24 flex flex-col">
          {/* Subtitle */}
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-zinc-500 mb-3 font-mono">
            I TRANSFORM IDEAS INTO WORLD-CLASS EXPERIENCES.
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black font-machina mb-10 leading-none">
            My Works
          </h1>

          {/* Divider */}
          <div className="flex justify-between items-center text-[10px] md:text-xs text-zinc-400 font-bold uppercase tracking-wider border-t border-black/10 pt-4 mb-16">
            <span>© 2026</span>
            <span>FILTER: ALL WORK +</span>
          </div>

          {/* Primary Featured Project Card (Full Width) */}
          <div 
            onClick={() => router.push(primaryProject.link)}
            className="flex flex-col lg:flex-row gap-10 items-center justify-between mb-24 pb-20 border-b border-black/5 cursor-pointer group/primary"
          >
            {/* Image (Left) */}
            <div className="w-full lg:w-7/12 rounded-2xl overflow-hidden shadow-xl border border-black/5 aspect-[16/10] relative bg-zinc-100">
              <img
                src={primaryProject.image}
                alt={primaryProject.title}
                className="w-full h-full object-cover group-hover/primary:scale-[1.01] transition-transform duration-500"
              />
            </div>
            {/* Details (Right) */}
            <div className="w-full lg:w-5/12 flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight font-machina leading-tight group-hover/primary:text-[#185adb] transition-colors">
                    {primaryProject.title}
                  </h2>
                  <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mt-1 block">
                    {primaryProject.category}
                  </span>
                </div>
                <a
                  href={primaryProject.link}
                  onClick={(e) => e.stopPropagation()}
                  className="w-12 h-12 rounded-full border border-black/10 group-hover/primary:border-black flex items-center justify-center text-black group-hover/primary:bg-black group-hover/primary:text-white transition-all duration-300"
                  title="View Case Study"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-zinc-600 font-manrope text-base leading-relaxed">
                {primaryProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {primaryProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Items 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 border-b border-black/5 pb-24">
            {gridProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => router.push(project.link)}
                className="flex flex-col gap-6 group cursor-pointer"
              >
                {/* Image Box */}
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-black/5 aspect-[16/10] relative bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                {/* Details Box */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight font-machina group-hover:text-[#185adb] transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full border border-black/10 group-hover:border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300"
                      title="View Case Study"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-zinc-600 font-manrope text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-black/5 text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Big Royal Blue Collab Card */}
          <div className="w-full bg-[#185adb] text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden mt-24 shadow-2xl flex flex-col items-center text-center gap-6">
            {/* Top Glow Overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-white/10 blur-[100px] pointer-events-none" />

            {/* Badge */}
            <span className="px-4 py-1.5 rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur z-10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              LET&apos;S COLLABORATE
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-machina leading-tight mt-2 z-10 max-w-3xl">
              Building the <span className="italic font-serif font-light text-[#ccff00]">Next Big</span> Startup?
            </h2>

            {/* Subtext */}
            <p className="text-white/80 max-w-2xl font-manrope text-base md:text-lg leading-relaxed z-10">
              I help founders and startups create products that users actually trust. From EdTech to Fintech, I engineer high-performance ecosystems that scale.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 z-10">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-lg shadow-black/10"
              >
                START A PROJECT <span className="text-lg leading-none">→</span>
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                VIEW SERVICES <span className="text-lg leading-none">↗</span>
              </Link>
            </div>

            {/* Rotating Infinite Marquee (Bottom of Card) */}
            <div className="w-full overflow-hidden relative border-t border-white/10 mt-16 pt-6 select-none pointer-events-none">
              <div className="footer-marquee-container flex gap-12 text-sm font-bold uppercase tracking-[0.3em] text-white/40">
                <span>DEVELOP ✦ DEPLOY ✦ SCALE ✦ DESIGN ✦</span>
                <span>DEVELOP ✦ DEPLOY ✦ SCALE ✦ DESIGN ✦</span>
                <span>DEVELOP ✦ DEPLOY ✦ SCALE ✦ DESIGN ✦</span>
                <span>DEVELOP ✦ DEPLOY ✦ SCALE ✦ DESIGN ✦</span>
                <span>DEVELOP ✦ DEPLOY ✦ SCALE ✦ DESIGN ✦</span>
                <span>DEVELOP ✦ DEPLOY ✦ SCALE ✦ DESIGN ✦</span>
                <span>DEVELOP ✦ DEPLOY ✦ SCALE ✦ DESIGN ✦</span>
                <span>DEVELOP ✦ DEPLOY ✦ SCALE ✦ DESIGN ✦</span>
              </div>
            </div>
          </div>

        </main>

        {/* Brand Footer */}
        <Footer />
      </div>
    </>
  );
}
