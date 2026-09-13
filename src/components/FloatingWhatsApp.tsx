"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* Floating speech bubble */}
      <div className="hidden sm:flex items-center gap-2 bg-[#0e121a] border border-white/15 px-3.5 py-2 rounded-xl text-xs font-semibold text-white shadow-2xl backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Especialista em sites online</span>
      </div>

      <a
        href="https://wa.me/5583999520137?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20criar%20um%20site%20com%20a%20StudioWeb."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </a>
    </div>
  );
}
