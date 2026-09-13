"use client";

import React from "react";
import { NeonXBackdrop } from "./NeonXBackdrop";
import { Award, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export function FounderAuthoritySection() {
  const teamAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  ];

  return (
    <section className="py-24 bg-[#0a0c10] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Team Avatar Stack & Introduction */}
          <div className="lg:col-span-5 space-y-6">
            {/* Team Avatars matching reference */}
            <div className="flex items-center -space-x-3">
              {teamAvatars.map((src, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-[#0a0c10] overflow-hidden shadow-md"
                >
                  <img src={src} alt="Especialista" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
                Conheça os engenheiros e designers de
              </p>
              <div className="flex items-center gap-1 text-3xl font-black text-white">
                <span>STUDIOWEB</span>
                <span className="text-coral-gradient">X</span>
              </div>
            </div>

            <p className="text-zinc-300 text-base leading-relaxed">
              Não entregamos sites genéricos de WordPress lentos e cheios de plugins pesados. Nossa equipe desenvolve aplicações web sob medida, utilizando as mesmas tecnologias do Vale do Silício para garantir que seu site seja o mais rápido e bonito do seu setor.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Mais de 140 sites e landing pages desenvolvidos</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Velocidade 100/100 testada no Google PageSpeed</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Suporte contínuo e acompanhamento pós-entrega</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/5583999520137?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20o%20desenvolvimento%20do%20site%20da%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral-gradient px-6 py-3.5 rounded-full font-bold text-white text-sm inline-flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Falar com o Especialista</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Founder Cutout Frame with Glowing Coral X & Glass Card Overlay */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            {/* Giant Coral X behind the founder (Matching reference) */}
            <NeonXBackdrop
              className="top-1/2 right-12 -translate-y-1/2 z-0"
              size={540}
              opacity={0.85}
              rotate={-15}
            />

            <div className="relative z-10 w-full max-w-lg flex flex-col sm:flex-row items-center sm:items-end gap-6">
              {/* Founder Cutout */}
              <div className="relative w-56 sm:w-64 h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Ronaldo Meira - Head de Engenharia Web"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Authority Glass Card (Matching reference card layout) */}
              <div className="glass-funnel p-6 rounded-2xl border border-white/15 w-full sm:-ml-12 sm:mb-6 z-20 backdrop-blur-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">Ronaldo Meira</h4>
                    <p className="text-xs font-semibold text-coral-gradient uppercase tracking-wider">
                      Head de Engenharia Web & Design
                    </p>
                  </div>
                  <Award className="w-6 h-6 text-[#ff2e63]" />
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  Especialista em desenvolvimento web de alta performance, design de interfaces persuasivas e arquitetura moderna. Criando sites sob medida que transmitem autoridade e transformam acessos em clientes.
                </p>

                {/* Authority media seals */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">
                  <span>Alta Performance</span>
                  <span>Zero Templates</span>
                  <span>100% Responsivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
