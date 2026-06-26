import { cohorts } from "../data/cohorts";
import { Check, Calendar, Code, ExternalLink } from "lucide-react";

export default function Cohorts() {
  return (
    <section id="work" className="py-24 px-6 bg-black relative border-t border-white/5">
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="text-grey-400 font-manrope max-w-lg text-base md:text-lg">
            A curation of high-impact digital products shipped for founders and clients worldwide.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cohorts.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-br from-grey-900 to-black border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/80 hover:shadow-[0_12px_40px_rgba(232,96,46,0.1)]"
            >
              {/* Badge */}
              <div className="flex justify-between items-center mb-6">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20"
                >
                  {project.badge}
                </span>
                <div className="flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] font-medium text-grey-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-xs text-grey-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {project.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-primary" />
                    {project.projectsCount}
                  </span>
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-8 flex-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-grey-300">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Link */}
              <div className="border-t border-white/5 pt-6 mt-auto">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-grey-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="relative overflow-hidden w-full flex items-center justify-center gap-2 py-3 border border-primary/40 hover:border-primary text-white text-sm font-semibold rounded-lg group/btn transition-colors duration-300 z-10"
                >
                  {/* Sliding orange background */}
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out -z-10" />
                  <span>Inquire About Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
