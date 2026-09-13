"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      q: "Em quanto tempo meu funil de alta conversão fica pronto?",
      a: "Nossa metodologia ágil entrega a estrutura completa pronta para receber tráfego entre 7 e 14 dias úteis, com design, copywriting persuasivo e integrações técnicas 100% finalizadas.",
    },
    {
      q: "Funciona para o meu nicho de mercado?",
      a: "Sim. A arquitetura de resposta direta é aplicada com sucesso para profissionais liberais (médicos, advogados, dentistas, arquitetos), prestadores de serviços, empresas B2B e infoprodutos de ticket médio e alto.",
    },
    {
      q: "Como os contatos chegam até a minha equipe?",
      a: "O funil é integrado diretamente para abrir conversas instantâneas no WhatsApp da sua equipe ou direcionar leads já qualificados para o seu CRM, com notificação instantânea no celular.",
    },
    {
      q: "Eu preciso pagar mensalidade para manter o site no ar?",
      a: "Não cobramos mensalidades obrigatórias de manutenção da página. O código do projeto é 100% seu, hospedado em servidores de velocidade global com custo de hospedagem gratuito ou quase nulo.",
    },
    {
      q: "Como faço para dar o primeiro passo?",
      a: "Basta clicar em qualquer botão do site para iniciar uma conversa no WhatsApp. Faremos uma análise do seu modelo de negócio e apresentaremos a melhor proposta de funil para o seu momento.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#08090c] relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-zinc-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#ff2e63]" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tudo o que você precisa saber
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-funnel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-[#ff2e63]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
