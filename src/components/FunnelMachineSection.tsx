"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, Rocket, TrendingUp, Zap, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { NeonXBackdrop } from "./NeonXBackdrop";

interface FunnelMachineSectionProps {
  onOpenVideo: () => void;
}

export function FunnelMachineSection({ onOpenVideo }: FunnelMachineSectionProps) {
  return (
    <section id="diferenciais" className="py-24 bg-[#08090c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Reference Argument Cards + CTA Button */}
          <div className="lg:col-span-6 space-y-5">
            {/* Card 1 */}
            <div className="glass-funnel p-5 sm:p-6 rounded-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff2e63]/20 to-[#ff5722]/20 border border-[#ff2e63]/30 flex items-center justify-center shrink-0 text-[#ff4b6e]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                    Se você busca um <strong className="text-white font-semibold">site que realmente gere vendas</strong> e não seja apenas um panfleto digital esquecido na internet.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-funnel p-5 sm:p-6 rounded-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff2e63]/20 to-[#ff5722]/20 border border-[#ff2e63]/30 flex items-center justify-center shrink-0 text-[#ff4b6e]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                    Se você quer <strong className="text-white font-semibold">design padrão internacional</strong>, com carregamento instantâneo em menos de 0.5s e nota máxima no Google PageSpeed.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-funnel p-5 sm:p-6 rounded-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff2e63]/20 to-[#ff5722]/20 border border-[#ff2e63]/30 flex items-center justify-center shrink-0 text-[#ff4b6e]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                    Uma presença digital que <strong className="text-white font-semibold">valoriza seu preço perante os clientes</strong>, transmitindo confiança para fechar contratos com tickets mais altos.
                  </p>
                </div>
              </div>
            </div>

            {/* Reference CTA Pill Button */}
            <div className="pt-3">
              <button
                onClick={onOpenVideo}
                className="btn-coral-gradient px-8 py-4 rounded-full font-bold text-white text-base flex items-center justify-center gap-3 cursor-pointer group shadow-2xl w-full sm:w-auto"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </div>
                <span>Quero um site desse padrão</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Laptop Mockup with Giant Coral 'X' and Floating Elements */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* The signature Giant Neon Coral "X" behind the laptop (Exact from reference) */}
            <NeonXBackdrop
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              size={560}
              opacity={0.9}
              rotate={15}
            />

            {/* Floating Live Badge Top: "+R$" in Lime Green */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-8 z-30 badge-lead-lime px-4 py-2 rounded-xl font-black text-sm flex items-center gap-2 shadow-2xl"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Site 100% Responsivo</span>
            </motion.div>

            {/* Floating Live Badge Center Left: "+R$" */}
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: [0, 8, 0], opacity: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 -left-4 z-30 badge-lead-lime px-3.5 py-1.5 rounded-xl font-black text-sm flex items-center gap-2 shadow-2xl"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>⚡ 0.4s Carregamento</span>
            </motion.div>

            {/* Floating Rocket icon badge */}
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              animate={{ rotate: [ -15, 0, -15 ], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 right-4 z-30 w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff2e63] to-[#ff5722] flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,46,99,0.7)]"
            >
              <Rocket className="w-7 h-7" />
            </motion.div>

            {/* 3D Angled Laptop Container (Matching Reference) */}
            <div className="relative z-10 w-full max-w-lg p-2 rounded-2xl bg-[#11141c]/90 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl transform lg:perspective-1000 lg:rotate-y-[-6deg] lg:rotate-x-[4deg]">
              {/* Laptop Screen Bezel */}
              <div className="rounded-xl overflow-hidden bg-black border border-white/10">
                {/* Browser topbar */}
                <div className="bg-[#181c26] px-4 py-2 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono bg-black/40 px-3 py-0.5 rounded border border-white/5">
                    suaempresa.com.br
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    SITE NO AR
                  </div>
                </div>

                {/* Dashboard Screen Content */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0e121a] to-[#08090c] space-y-4">
                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10">
                      <div className="text-[10px] text-zinc-400 uppercase">Velocidade</div>
                      <div className="text-base sm:text-lg font-black text-emerald-400">100/100</div>
                      <div className="text-[9px] text-emerald-300">Google PageSpeed</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10">
                      <div className="text-[10px] text-zinc-400 uppercase">Conversão</div>
                      <div className="text-base sm:text-lg font-black text-white">14.2%</div>
                      <div className="text-[9px] text-zinc-400">WhatsApp Direto</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10">
                      <div className="text-[10px] text-zinc-400 uppercase">Tecnologia</div>
                      <div className="text-base sm:text-lg font-black text-white">Next.js</div>
                      <div className="text-[9px] text-coral-gradient font-bold">Ultra Moderno</div>
                    </div>
                  </div>

                  {/* Real-time incoming leads table */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-zinc-300 flex items-center justify-between">
                      <span>Projetos Recentemente Entregues</span>
                      <span className="text-emerald-400 text-[10px]">100% no ar</span>
                    </div>

                    {[
                      { nome: "Clínica Dermato Prime", ramo: "Site Institucional + Agendamento", valor: "Entregue em 8 dias", tempo: "Ver Site" },
                      { nome: "Advocacia Silveira & Associados", ramo: "Landing Page de Alta Conversão", valor: "Entregue em 6 dias", tempo: "Ver Site" },
                      { nome: "Artefacto Engenharia", ramo: "Catálogo de Imóveis & Portfólio", valor: "Entregue em 11 dias", tempo: "Ver Site" },
                    ].map((lead, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/5 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#ff2e63] to-[#ff5722] text-white flex items-center justify-center text-[10px] font-bold">
                            {lead.nome[0]}
                          </div>
                          <div>
                            <div className="font-semibold text-white text-[11px]">{lead.nome}</div>
                            <div className="text-[9px] text-zinc-400">{lead.ramo}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-bold text-emerald-400">{lead.valor}</div>
                          <div className="text-[9px] text-zinc-500">{lead.tempo}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base effect */}
              <div className="h-3 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-b-xl mt-0.5 border-t border-white/20 flex items-center justify-center">
                <div className="w-16 h-1 bg-zinc-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
