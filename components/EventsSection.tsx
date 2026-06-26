"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EventsSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined" || !triggerRef.current || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const triggerElement = triggerRef.current;
    const cards = scrollContainer.querySelectorAll(".event-card");

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

  const eventItems = [
    {
      id: 1,
      title: "Interactive Bootcamps",
      tag: "Bootcamp",
      description: "Mentoring 200+ engineering graduates in backend development and MERN stacks.",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&h=800&q=80",
      date: "May 2025",
      location: "Belagavi Campus"
    },
    {
      id: 2,
      title: "Tech Auditing Workshop",
      tag: "Workshops",
      description: "Sharing systems architecture guidelines and codebase audits for startups.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=800&q=80",
      date: "March 2025",
      location: "Belagavi Tech Hub"
    },
    {
      id: 3,
      title: "Meet And Greet",
      tag: "Meet-ups",
      description: "Open conversations about careers, coding, bootcamps, internships, real-world engineering, and the journey.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=800&q=80",
      date: "Regular Event",
      location: "Indore / Bangalore Hub"
    },
    {
      id: 4,
      title: "KODR Hackathon Outing",
      tag: "Outings",
      description: "Outdoor celebration and networking with regional coding competition winners.",
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&h=800&q=80",
      date: "Jan 2025",
      location: "Indore Resort"
    }
  ];

  return (
    <div ref={triggerRef} className="relative bg-black overflow-hidden select-none w-full">
      {/* Outer wrapper that remains sticky during pin */}
      <div className="h-screen w-full flex flex-col justify-center overflow-hidden py-12 md:py-16">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-6 mb-12 w-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-primary border border-primary/30 px-4 py-1.5 rounded-sm bg-black/50 font-manrope">
              IMPACT
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight text-white mt-2 max-w-3xl leading-tight">
              How We Are Doing It Faster And Better Than Others!
            </h2>
          </div>
        </div>

        {/* Horizontal scroll timeline wrapper */}
        <div ref={scrollRef} className="flex gap-8 px-16 w-max items-start pt-8 pb-24">
          {eventItems.map((event, index) => (
            <div
              key={event.id}
              className="event-card w-[290px] sm:w-[320px] md:w-[380px] h-[430px] md:h-[510px] rounded-[2rem] overflow-hidden relative group cursor-pointer border border-white/5 shadow-2xl flex-shrink-0"
            >
              {/* Background Event Image */}
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10" />

              {/* Tag (Left Top) */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-3.5 py-1.5 rounded-lg bg-primary text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                  {event.tag}
                </span>
              </div>

              {/* Arrow Indicator (Right Top) */}
              <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-black/80 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:border-primary group-hover:text-primary transition-all duration-300 z-10">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Title & Description Overlay (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2.5 z-10 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-xl md:text-2xl font-bold text-white font-machina leading-tight">
                  {event.title}
                </h4>
                <p className="text-xs text-zinc-300 font-manrope leading-relaxed">
                  {event.description}
                </p>
                <div className="flex gap-4 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider pt-2 border-t border-white/5 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
