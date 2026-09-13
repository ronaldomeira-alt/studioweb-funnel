"use client";

import React from "react";
import { NeonXBackdrop } from "./NeonXBackdrop";
import { ArrowRight, MessageCircle, ShieldCheck, Zap } from "lucide-react";

export function CtaFinalSection() {
  return (
    <section className="py-28 bg-[#08090c] relative overflow-hidden text-center border-t border-white/10">
      {/* Giant Neon Coral X in center background */}
      <NeonXBackdrop
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        size={680}
        opacity={0.8}
        rotate={10}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Urgency Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff2e63]/15 border border-[#ff2e63]/40 text-xs font-bold text-[#ff4b6e] uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5" />
          Apenas 3 vagas disponíveis para novos projetos este mês
        </div>

        {/* High-Converting Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Pare de perder clientes para sites comuns.{" "}
          <span className="text-coral-gradient block mt-1">
            Ative seu funil StudioWeb.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Receba um diagnóstico gratuito da sua presença digital e descubra exatamente onde você está perdendo vendas hoje.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5583999520137?text=Ol%C3%A1!%20Quero%20ativar%20meu%20funil%20de%20alta%20convers%C3%A3o%20com%20a%20StudioWeb."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral-gradient px-9 py-5 rounded-full font-black text-white text-base sm:text-lg flex items-center gap-3 cursor-pointer shadow-2xl tracking-wide group"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Falar com o Estrategista no WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Diagnóstico 100% Gratuito</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Resposta em menos de 10 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
