"use client";

import { useState } from "react";
import { curriculumRoadmap } from "../data/curriculum";
import { ChevronDown, Code2, BookOpen } from "lucide-react";

export default function Curriculum() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="workflow" className="py-24 px-6 bg-black relative border-t border-white/5">
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary">Execution</span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight text-white">
            My Shipping <span className="text-primary">Workflow</span>
          </h2>
          <p className="text-grey-400 font-manrope max-w-lg mt-2">
            A precise, systematic development roadmap designed to convert raw ideas into production-ready software MVP packages.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {curriculumRoadmap.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/[0.02] border-primary/40 shadow-lg shadow-primary/5"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-primary px-2.5 py-1 rounded bg-primary/10 tracking-wider">
                      {item.phase}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block text-xs font-medium text-grey-500">
                      {item.duration}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-grey-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[800px] border-t border-white/5" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 flex flex-col gap-6 text-sm font-manrope">
                    <p className="text-grey-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>

                    {/* Technologies tags */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                        <BookOpen className="w-3.5 h-3.5 text-primary" />
                        Focus Areas & Tech
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-white/5 border border-white/5 text-grey-300 px-3 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects list */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                        <Code2 className="w-3.5 h-3.5 text-primary" />
                        Syllabus Milestones Shipped
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-grey-300">
                        {item.projects.map((project, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
