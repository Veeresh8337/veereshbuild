"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowWeBuild() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined" || !triggerRef.current || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const triggerElement = triggerRef.current;
    const cards = scrollContainer.querySelectorAll(".hwbp-card");

    // Set initial vertical stagger positions using GSAP
    cards.forEach((card, index) => {
      const isEven = index % 2 === 0;
      gsap.set(card, { y: isEven ? 0 : 64 });
    });

    // Create a GSAP Timeline for horizontal scrolling + card parallax waving
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        pin: true,
        scrub: 1.2,
        start: "top top",
        end: () => {
          const amount = scrollContainer.scrollWidth - window.innerWidth;
          // Decouple vertical scroll duration for a premium, smooth glide
          return amount > 0 ? `+=${Math.max(window.innerHeight * 1.5, amount)}` : "+=0";
        },
        invalidateOnRefresh: true,
      },
    });

    // Horizontal translation
    tl.to(scrollContainer, {
      x: () => {
        const amount = scrollContainer.scrollWidth - window.innerWidth;
        return amount > 0 ? -amount : 0;
      },
      ease: "none",
    }, 0);

    // Wave parallax vertical shifting of staggered cards
    cards.forEach((card, index) => {
      const isEven = index % 2 === 0;
      tl.to(card, {
        y: isEven ? 48 : 16, // Even cards move from 0 to 48, odd cards move from 64 to 16
        ease: "sine.inOut",
      }, 0);
    });

    // Refresh ScrollTrigger when everything is loaded
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    // Initial timeout to ensure layout is settled
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      tl.kill();
      clearTimeout(timeoutId);
      window.removeEventListener("load", handleLoad);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const categories = [
    {
      id: 1,
      title: "AI SOLUTIONS",
      imageUrl: "/how-we-build/ai_dashboard.png",
    },
    {
      id: 2,
      title: "WEB APPLICATIONS",
      imageUrl: "/how-we-build/web_app.png",
    },
    {
      id: 3,
      title: "MOBILE APPS",
      imageUrl: "/how-we-build/mobile_app.png",
    },
    {
      id: 4,
      title: "ENTERPRISE SOFTWARE",
      imageUrl: "/how-we-build/enterprise_erp.png",
    },
    {
      id: 5,
      title: "CLOUD & BACKEND",
      imageUrl: "/how-we-build/cloud_backend.png",
    },
    {
      id: 6,
      title: "UI/UX DESIGN",
      imageUrl: "/how-we-build/ui_ux_design.png",
    }
  ];

  return (
    <div ref={triggerRef} className="relative bg-black overflow-hidden select-none w-full">
      {/* Outer wrapper that remains sticky during pin */}
      <div className="h-screen w-full flex flex-col justify-start overflow-hidden pt-24 md:pt-32">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-6 mb-8 md:mb-12 w-full flex-shrink-0">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-machina tracking-tight text-white max-w-4xl leading-tight pb-2">
              How We Build Products Faster & Better
            </h2>
            <p className="text-white/60 md:text-lg max-w-2xl font-manrope">
              We combine product strategy, AI, design, and engineering to deliver scalable software that drives real business growth.
            </p>
          </div>
        </div>

        {/* Horizontal scroll timeline wrapper */}
        <div ref={scrollRef} className="flex gap-6 md:gap-8 px-8 md:px-16 w-max items-start pt-4 pb-24">
          {categories.map((category) => (
            <div
              key={category.id}
              className="hwbp-card w-[280px] sm:w-[340px] md:w-[380px] h-[380px] sm:h-[420px] md:h-[480px] rounded-[2rem] overflow-hidden relative group cursor-pointer border border-white/5 shadow-2xl flex-shrink-0"
            >
              {/* Background Event Image */}
              <Image
                src={category.imageUrl}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Glassmorphism Gradient Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />

              {/* Tag (Bottom Left) */}
              <div className="absolute bottom-8 left-8 z-20">
                <span className="px-4 py-2 rounded-xl bg-[#FF6B2C] text-white text-[11px] font-bold uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,44,0.4)]">
                  {category.title}
                </span>
              </div>

              {/* Top-Right Arrow Button */}
              <div className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black text-white border border-white/20">
                <ArrowUpRight className="w-6 h-6 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
