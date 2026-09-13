"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090c]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with Reference Neon X Symbol */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-1.5 group">
            <span className="font-extrabold text-2xl tracking-tighter text-white">
              STUDIOWEB
            </span>
            <span className="font-black text-2xl text-coral-gradient tracking-tight drop-shadow-[0_0_12px_rgba(255,46,99,0.8)]">
              X
            </span>
          </a>

          {/* Reference pill text badge */}
          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>+140 sites profissionais entregues com alta velocidade</span>
          </div>
        </div>

        {/* Navigation links & Direct Action */}
        <div className="flex items-center gap-4">
          <a
            href="#modelos"
            className="hidden sm:inline-block text-xs font-semibold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            Modelos de Sites
          </a>
          <a
            href="#diferenciais"
            className="hidden sm:inline-block text-xs font-semibold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            Diferenciais
          </a>
          <a
            href="#simulador"
            className="hidden md:inline-block text-xs font-semibold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            Simulador
          </a>

          {/* Reference CTA Pill Button */}
          <a
            href="https://wa.me/5583999520137?text=Ol%C3%A1!%20Quero%20fazer%20um%20or%C3%A7amento%20para%20criar%20um%20site%20profissional%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral-gradient px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white flex items-center gap-2 cursor-pointer shadow-lg tracking-wide"
          >
            <span>Quero Meu Site Profissional</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
