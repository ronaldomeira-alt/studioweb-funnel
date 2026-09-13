"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";

export function SocialProofBar() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  ];

  return (
    <section className="py-12 bg-[#0a0c10] border-y border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Avatars Stack matching reference */}
        <div className="flex items-center justify-center -space-x-3 mb-4">
          {avatars.map((url, i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-full border-2 border-[#08090c] overflow-hidden shadow-lg"
            >
              <img
                src={url}
                alt="Cliente Satisfeito"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ff2e63] to-[#ff5722] border-2 border-[#08090c] flex items-center justify-center text-white text-xs font-black shadow-lg">
            +140
          </div>
        </div>

        {/* Rating stars */}
        <div className="flex items-center justify-center gap-1 mb-4 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
          <span className="text-xs font-bold text-zinc-300 ml-1.5">
            4.9 / 5.0 (Mais de 140 sites e landing pages entregues)
          </span>
        </div>

        {/* The Exact High-Converting Authority Statement from Reference */}
        <p className="text-base sm:text-xl md:text-2xl font-semibold text-zinc-200 leading-snug max-w-3xl mx-auto">
          É uma realidade comprovada por mais de 140 empresas que transformaram sua presença digital com um{" "}
          <span className="text-coral-gradient font-bold">
            site profissional de alto impacto
          </span>{" "}
          e viram seus pedidos de orçamento pelo WhatsApp dispararem.
        </p>
      </div>
    </section>
  );
}
