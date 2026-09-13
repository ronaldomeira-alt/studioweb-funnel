"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, TrendingUp, CheckCircle2, ArrowRight, DollarSign } from "lucide-react";
import { NeonXBackdrop } from "./NeonXBackdrop";

interface HeroVSLProps {
  onOpenVideo: () => void;
}

export function HeroVSL({ onOpenVideo }: HeroVSLProps) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-[#08090c] bg-subtle-grid">
      {/* 1. Top Section from Reference: Founder cutout with giant glowing Coral X & Floating Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12 sm:mb-16">
        <div className="relative mx-auto max-w-4xl flex flex-col items-center justify-center">
          {/* Giant Neon Coral X backdrop behind the strategist */}
          <NeonXBackdrop
            className="-top-12 left-1/2 -translate-x-1/2 z-0"
            size={480}
            opacity={0.8}
            rotate={-8}
          />

          {/* Strategist Portrait & Floating Live Badges */}
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* The Floating Badges matching the reference image */}
            <div className="relative w-full max-w-xl h-64 sm:h-80 flex items-center justify-center">
              {/* Floating Badge 1 (Top Left): "Site Entregue em 7 Dias" */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -8, 0], opacity: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-2 sm:left-6 z-20 badge-lead-lime px-3 sm:px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-xs sm:text-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-300">Site Entregue +</span>
                <span className="bg-emerald-950/80 text-emerald-400 text-[10px] px-2 py-0.5 rounded-md border border-emerald-500/30">
                  7 Dias Úteis
                </span>
              </motion.div>

              {/* Floating Badge 2 (Top Right): "Novo Site no Ar" */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, 10, 0], opacity: 1 }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-12 right-2 sm:right-6 z-20 badge-lead-lime px-3 sm:px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-xs sm:text-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="text-emerald-300">Novo Site no Ar 🚀</span>
              </motion.div>

              {/* Floating Speed & Performance Badge (Bottom Left) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ y: [0, -6, 0], scale: 1, opacity: 1 }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 left-6 sm:left-12 z-20 bg-black/80 border border-emerald-500/40 text-emerald-400 font-extrabold px-3 py-1.5 rounded-lg shadow-lg text-xs flex items-center gap-1.5 backdrop-blur-md"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>⚡ 100/100 Google PageSpeed</span>
              </motion.div>

              {/* Strategist / Lead Engineer Portrait cutout with luxury ambient back-glow */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-gradient-to-b from-zinc-800 to-black p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Especialista em Criação de Sites"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Title & Subtitle + VSL Presentation Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct-Response Copy for Website Creation */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Pill identifier */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-zinc-300">
              <span className="text-coral-gradient font-black">STUDIOWEB X</span>
              <span className="text-zinc-500">•</span>
              <span>Criação & Desenvolvimento de Sites Profissionais</span>
            </div>

            {/* Main Headline (Direct match with reference) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Descubra como ter um site profissional que gera clientes de forma{" "}
              <span className="text-coral-gradient underline decoration-coral-500/30 underline-offset-8 drop-shadow-[0_0_20px_rgba(255,46,99,0.5)]">
                automática
              </span>
            </h1>

            {/* Clean, persuasive description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Desenvolvemos sites de alto padrão, landing pages velozes e estruturas digitais modernas sob medida para clínicas, advogados, consultorias e empresas que desejam transmitir autoridade imediata e fechar negócios todos os dias.
            </p>

            {/* Reference CTA Pill Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenVideo}
                className="btn-coral-gradient px-8 py-4 rounded-full font-bold text-white text-base flex items-center justify-center gap-3 cursor-pointer group shadow-2xl"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </div>
                <span>Quero Criar Meu Site Agora</span>
              </button>

              <a
                href="https://wa.me/5583999520137?text=Ol%C3%A1!%20Quero%20uma%20avalia%C3%A7%C3%A3o%20gratuita%20para%20criar%20o%20site%20da%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full font-semibold text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 text-sm flex items-center justify-center gap-2 transition-colors glass-funnel"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Mini trust checklist */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Entrega rápida em 7 a 14 dias</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% responsivo para smartphone</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Integração com WhatsApp e CRM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Video Player Mockup (Matching reference VSL box) */}
          <div className="lg:col-span-6 relative">
            {/* Ambient Coral back-glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#ff2e63]/30 to-[#ff5722]/30 filter blur-2xl opacity-60 pointer-events-none" />

            <div
              onClick={onOpenVideo}
              className="relative cursor-pointer rounded-2xl overflow-hidden glass-funnel border border-white/15 p-2 group transition-all duration-300 hover:border-[#ff2e63]/50"
            >
              {/* Floating "Site Publicado" badge over video mockup */}
              <div className="absolute -top-3 -right-3 z-30 badge-lead-lime px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Site Publicado +</span>
              </div>

              {/* Video Thumbnail & Play Trigger */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                  alt="Como Criamos Sites de Alta Performance"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                />

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                {/* Center Play Button with ripple rings */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full btn-coral-gradient flex items-center justify-center shadow-[0_0_40px_rgba(255,46,99,0.8)] group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white ml-1" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase bg-black/60 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                    Ver Como Construímos Seu Site (3 min)
                  </span>
                </div>
              </div>

              {/* Bottom bar of video box */}
              <div className="p-3 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Demonstração da Estrutura de Código StudioWeb
                </span>
                <span className="text-zinc-500 font-mono">03:20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
