import { Check, X, Shield, Users, Target } from "lucide-react";

export default function Comparison() {
  const points = [
    {
      title: "Revenue First",
      icon: <Target className="w-5 h-5 text-primary" />,
      sheryians: "Focus on business value. Designing database structures and logic maps to drive user conversion and growth.",
      traditional: "Code for code's sake. Building elaborate architectures that serve no immediate business or product goal.",
    },
    {
      title: "Velocity & Shipping",
      icon: <Shield className="w-5 h-5 text-primary" />,
      sheryians: "High Velocity MVPs. Going from raw product ideas to deployed live URLs in weeks, not months.",
      traditional: "Snail-paced scoping. Spending months in planning meetings and over-engineering simple features.",
    },
    {
      title: "Project Partnership",
      icon: <Users className="w-5 h-5 text-primary" />,
      sheryians: "Partner Mindset. Actively auditing user flows, offering code optimizations, and treating your product like my own.",
      traditional: "Jira ticket clearer. Mindlessly clearing tasks in isolation without caring about overall system performance.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black relative border-t border-white/5">
      <div className="absolute right-10 top-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary">My Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight">
              Why Partner With <span className="text-primary">Me?</span>
            </h2>
            <p className="text-grey-400 font-manrope text-base md:text-lg leading-relaxed">
              I don’t just write code. I build revenue engines. Most developers wait for instructions—I actively seek product problems to solve.
            </p>
            
            {/* Visual Code Box mock */}
            <div className="mt-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 relative overflow-hidden font-mono text-xs text-grey-500">
              <div className="flex gap-1.5 mb-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <p className="text-primary font-semibold mb-1">// The Partner Mindset</p>
              <p className="text-white"><span className="text-blue-400">const</span> partner = <span className="text-blue-400">new</span> <span className="text-yellow-400">Veeresh</span>();</p>
              <p className="text-white">partner.<span className="text-green-400">shipMVP</span>().<span className="text-green-400">optimizeRevenue</span>();</p>
              <p className="text-grey-500 mt-2">// output: High velocity success 🚀</p>
            </div>
          </div>

          {/* Comparison Cards Stack Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-300 grid grid-cols-1 md:grid-cols-2 gap-6 relative"
              >
                {/* Veeresh column */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    {point.icon}
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{point.title}</h4>
                  </div>
                  <div className="flex items-start gap-2 bg-green-500/5 border border-green-500/10 p-3 rounded-xl">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-grey-300 leading-relaxed font-manrope">{point.sheryians}</p>
                  </div>
                </div>

                {/* Traditional column */}
                <div className="flex flex-col justify-end">
                  <div className="flex items-start gap-2 bg-red-500/5 border border-red-500/10 p-3 rounded-xl">
                    <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-grey-400 leading-relaxed font-manrope">{point.traditional}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
