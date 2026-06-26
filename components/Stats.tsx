export default function Stats() {
  const statItems = [
    { value: "15", suffix: "+", label: "MVPs Shipped" },
    { value: "5", suffix: "+", label: "Hackathon Winnings" },
    { value: "100", suffix: "%", label: "On-Time Delivery" },
    { value: "500K", suffix: "+", label: "Lines of Code" },
  ];

  return (
    <section id="stats" className="py-20 px-6 bg-black relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-8 bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-primary/20 rounded-2xl transition-all duration-300 group"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold font-machina text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {item.value}
                <span className="text-primary font-normal">{item.suffix}</span>
              </h3>
              <p className="text-xs uppercase font-semibold font-manrope tracking-[0.15em] text-grey-400 text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
