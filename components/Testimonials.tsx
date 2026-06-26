"use client";

import { useState } from "react";
import { testimonials } from "../data/testimonials";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Award } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="achievements" className="py-24 px-6 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background glow overlay */}
      <div className="absolute right-0 bottom-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary">Milestones</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight text-white">
              My <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-grey-400 font-manrope max-w-lg mt-2">
              National-level hackathons and project exhibitions where my work was recognized by engineering committees.
            </p>
          </div>

          {/* Carousel Arrows (Desktop) */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-primary flex items-center justify-center text-white hover:text-primary bg-white/[0.01] hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-primary flex items-center justify-center text-white hover:text-primary bg-white/[0.01] hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Main Active Testimonial Card */}
            <div className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-grey-900 to-black border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl shadow-black overflow-hidden flex flex-col md:flex-row min-h-[400px]">
              
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 min-h-[200px] md:min-h-[400px] overflow-hidden bg-zinc-950">
                <img
                  src={current.imageUrl}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur shadow-sm text-primary border border-primary/20">
                    {current.badge}
                  </span>
                </div>
              </div>

              {/* Descriptions Section */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <Award className="w-8 h-8 text-primary mb-4 opacity-80" />
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                    {current.title}
                  </h3>
                  
                  <div className="flex flex-col gap-1.5 text-xs text-grey-400 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {current.date} • {current.event}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {current.location}
                    </span>
                  </div>

                  <p className="text-sm text-grey-300 font-manrope leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-5 mt-5">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/5 text-grey-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials Stack Preview / Nav list (Desktop) */}
            <div className="hidden lg:col-span-4 lg:flex flex-col gap-3.5">
              {testimonials.map((test, index) => (
                <button
                  key={test.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                    currentIndex === index
                      ? "bg-white/[0.03] border-primary/30"
                      : "bg-transparent border-white/5 hover:border-white/10"
                  }`}
                >
                  <img
                    src={test.imageUrl}
                    alt={test.title}
                    className="w-11 h-11 rounded-lg object-cover grayscale"
                  />
                  <div className="min-w-0 flex-1">
                    <h5 className={`text-xs font-bold truncate ${currentIndex === index ? "text-primary" : "text-white"}`}>
                      {test.title}
                    </h5>
                    <p className="text-[9px] text-grey-500 truncate mt-0.5">
                      {test.event}
                    </p>
                  </div>
                </button>
              ))}
            </div>

          </div>

          {/* Carousel Arrows (Mobile) */}
          <div className="flex md:hidden gap-3 mt-6 justify-center">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/[0.01]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/[0.01]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
