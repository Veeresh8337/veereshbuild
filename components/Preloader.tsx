"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    const handleLoad = () => {
      setTimeout(() => {
        setVisible(false);
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-all duration-500 ease-out`}
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
      }}
    >
      {/* Subtle Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-primary/15 blur-[60px] animate-glow-pulse" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Brand Text */}
        <div className="animate-[pulse_2s_infinite]">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white font-machina drop-shadow-[0_0_24px_rgba(232,96,46,0.35)] select-none">
            VEERESH
          </h1>
        </div>

        {/* Loading Staggered Dots */}
        <div className="flex gap-1.5 mt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-dot [animation-delay:0s]" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-dot [animation-delay:0.1s]" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-dot [animation-delay:0.2s]" />
        </div>
      </div>
    </div>
  );
}
