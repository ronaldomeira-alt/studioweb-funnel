"use client";

import React from "react";
import { Megaphone, Filter, Cpu, Play, CheckCircle2, ArrowRight } from "lucide-react";

interface FeaturesBentoGridProps {
  onOpenVideo: () => void;
}

export function FeaturesBentoGrid({ onOpenVideo }: FeaturesBentoGridProps) {
  const cards = [
    {
      title: "Estratégia de captação ativa",
      icon: Megaphone,
      bullets: [
        "Técnicas e arquitetura persuasiva testadas ao longo de dezenas de projetos para atrair os clientes ideais para sua empresa.",
        "Como filtrar curiosos e focar apenas em leads que já têm orçamento e intenção real de contratação imediata.",
        "Identificar os canais mais rentáveis para gerar previsibilidade de caixa sem depender de milagres.",
      ],
    },
    {
      title: "Otimização do funil de vendas",
      icon: Filter,
      bullets: [
        "Como estruturar cada etapa da página para maximizar conversões desde o primeiro segundo de visualização.",
        "Detectar e eliminar os pontos cegos onde sua empresa perdia clientes para a concorrência.",
        "Páginas ultra-rápidas carregadas em menos de 0.5 segundo, garantindo que nenhum visitante abandone o site.",
      ],
    },
    {
      title: "Automação inteligente 24/7",
      icon: Cpu,
      bullets: [
        "Captação contínua de clientes qualificados mesmo enquanto você dorme ou atende seus projetos.",
        "Integração direta com o WhatsApp da sua equipe comercial com dados do lead já preenchidos.",
        "Uma experiência impecável que transmite autoridade instantânea e justifica cobrar tickets mais altos.",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#08090c] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ff3366] bg-[#ff3366]/10 px-4 py-1.5 rounded-full border border-[#ff3366]/20">
            O QUE VOCÊ VAI DESCOBRIR NA SUA ESTRUTURA
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilares do Método de Alta Conversão
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Cada detalhe da página é construído com engenharia psicológica para transformar cliques anônimos em vendas reais.
          </p>
        </div>

        {/* 3 Reference Dark Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-funnel p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group"
              >
                <div>
                  {/* Mini Coral Badge & Icon matching reference */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff2e63]/25 to-[#ff5722]/20 border border-[#ff2e63]/40 flex items-center justify-center text-[#ff3b65] mb-6 shadow-[0_0_20px_rgba(255,46,99,0.3)] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-6">
                    {card.title}
                  </h3>

                  <ul className="space-y-4">
                    {card.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e63] shrink-0 mt-2 shadow-[0_0_8px_#ff2e63]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  <span>Metodologia validada StudioWeb</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto text-[#ff2e63]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Pill Button from Reference: "Quiero saber como funciona" */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onOpenVideo}
            className="btn-coral-gradient px-8 py-4 rounded-full font-bold text-white text-base flex items-center justify-center gap-3 cursor-pointer group shadow-2xl"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
            </div>
            <span>Quero saber como funciona</span>
          </button>
        </div>
      </div>
    </section>
  );
}
