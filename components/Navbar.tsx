"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Achievements", href: "#achievements" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-16 border-b transition-all duration-300 ${
          scrolled
            ? "bg-black/85 border-white/5 backdrop-blur-md shadow-lg shadow-black/50"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo Text */}
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold font-machina text-white tracking-tight hover:text-primary transition-colors">
            Veeresh
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-grey-400 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover hover:scale-[1.03] transition-all duration-300 shadow-md shadow-primary/20 inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-grey-400 hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 flex flex-col pt-24 px-8 gap-6 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-grey-400 hover:text-white border-b border-white/5 pb-2 transition-colors"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors text-center"
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
