"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#050608] border-t border-white/5 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-lg text-white">STUDIOWEB</span>
          <span className="font-black text-lg text-coral-gradient">X</span>
          <span className="text-zinc-600">|</span>
          <span>Engenharia de Alta Conversão & Funis Digitais</span>
        </div>

        <div>
          © {new Date().getFullYear()} StudioWeb Inc. Todos os direitos reservados.
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
