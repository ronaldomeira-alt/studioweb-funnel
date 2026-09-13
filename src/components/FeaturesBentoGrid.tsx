"use client";

import React from "react";
import { Megaphone, Filter, Cpu, Play, CheckCircle2, ArrowRight } from "lucide-react";

interface FeaturesBentoGridProps {
  onOpenVideo: () => void;
}

export function FeaturesBentoGrid({ onOpenVideo }: FeaturesBentoGridProps) {
  const cards = [
    {
      title: "Landing Pages de Alta Conversão",
      icon: Megaphone,
      bullets: [
        "Desenhadas cirurgicamente para campanhas de Google Ads e Instagram/Meta Ads.",
        "Arquitetura focada em conduzir o visitante direto para um clique de conversa no WhatsApp.",
        "Entrega acelerada em 7 dias úteis, com design exclusivo e redação persuasiva inclusa.",
      ],
    },
    {
      title: "Sites Institucionais de Autoridade",
      icon: Filter,
      bullets: [
        "Estrutura completa com páginas de Serviços, Quem Somos, Equipe e Casos de Sucesso.",
        "Posicionamento impecável para clínicas, escritórios de advocacia, arquitetura e indústrias.",
        "Otimização avançada para o Google (SEO), indexação rápida e carregamento em 0.5s.",
      ],
    },
    {
      title: "Catálogos & Plataformas Sob Medida",
      icon: Cpu,
      bullets: [
        "Vitrines modernas de produtos, cardápios interativos ou portfólios de alto padrão.",
        "Painel administrativo simples para você atualizar conteúdos e fotos sem pagar mensalidades.",
        "Código limpo em Next.js e TypeScript com hospedagem global gratuita e certificado SSL.",
      ],
    },
  ];

  return (
    <section id="modelos" className="py-24 bg-[#08090c] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ff3366] bg-[#ff3366]/10 px-4 py-1.5 rounded-full border border-[#ff3366]/20">
            O QUE DESENVOLVEMOS PARA SEU NEGÓCIO
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Estruturas Digitais Criadas Sob Medida
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Não usamos modelos prontos ou sites genéricos do WordPress. Cada linha de código é feita para vender.
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
                  <span>Padrão Internacional StudioWeb</span>
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
            <span>Quero solicitar orçamento</span>
          </button>
        </div>
      </div>
    </section>
  );
}
