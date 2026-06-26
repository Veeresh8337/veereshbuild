import { Target, Zap, Terminal, Handshake } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Revenue First",
      desc: "Business-driven solutions",
      icon: <Target className="w-6 h-6 text-primary" />,
    },
    {
      title: "High Velocity",
      desc: "Idea to Deployed in weeks",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Full Stack",
      desc: "MERN & React Native expert",
      icon: <Terminal className="w-6 h-6 text-primary" />,
    },
    {
      title: "Partner Mindset",
      desc: "Your product's success is mine",
      icon: <Handshake className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-black relative border-t border-white/5">
      <div className="absolute left-10 top-1/3 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary">Biography</span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight text-white mt-2">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        {/* Bio Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Avatar Container */}
          <div className="lg:col-span-4 relative aspect-square max-w-[320px] mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="/veeresh-avatar.jpg"
              alt="Veeresh Hindiholi"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            />
            {/* Overlay border details */}
            <div className="absolute inset-0 border border-primary/20 rounded-3xl pointer-events-none" />
          </div>

          {/* Description Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
              I don’t just write code. I build revenue engines.
            </h3>
            
            <div className="space-y-4 text-grey-300 font-manrope text-base md:text-lg leading-relaxed">
              <p>
                Most developers wait for instructions. I actively look for business problems to solve.
              </p>
              <p>
                My philosophy is simple: <strong className="text-white">Software is useless if it doesn't serve the business.</strong> Whether I’m building a SaaS dashboard for a fintech startup or a native mobile app for commerce, my goal is always the same—ship fast, scale easily, and drive results.
              </p>
              <p>
                I specialize in the MERN stack (React, Node.js) and React Native, but my real competitive advantage is speed. In a world where speed is currency, I help founders and agencies move from "Idea" to "Deployed" in weeks, not months.
              </p>
              <p className="text-white font-semibold pt-2">
                If you want a developer who just clears Jira tickets, I’m not your guy. But if you want a technical partner who cares about your product's success as much as you do, let’s build.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-primary/25 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-grey-400 font-manrope">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
