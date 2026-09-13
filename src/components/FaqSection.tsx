"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      q: "Em quanto tempo meu site profissional fica pronto?",
      a: "Nosso prazo médio de entrega varia de 7 a 14 dias úteis, dependendo da complexidade do projeto (Landing Page ou Site Institucional Completo). Entregamos tudo pronto e publicado no seu domínio oficial.",
    },
    {
      q: "Eu preciso fornecer os textos e fotos ou vocês cuidam de tudo?",
      a: "Nossa equipe cuida de toda a redação persuasiva (copywriting), seleção de imagens e ícones profissionais de alto padrão. Você só precisa nos enviar informações básicas sobre os seus serviços e diferenciais.",
    },
    {
      q: "O site funciona perfeitamente em celulares e tablets?",
      a: "Sim, absolutamente. Desenvolvemos com metodologia mobile-first. Mais de 85% dos visitantes acessam por smartphones, por isso seu site será ultra-rápido, fluído e com botões de contato destacados.",
    },
    {
      q: "Existe alguma mensalidade obrigatória para manter o site?",
      a: "Não cobramos mensalidades obrigatórias de manutenção. O código é 100% seu. Configuramos em servidores de alta performance com hospedagem global gratuita ou quase nula e certificado SSL incluso.",
    },
    {
      q: "Como faço para solicitar um orçamento para a minha empresa?",
      a: "Basta clicar em qualquer botão desta página para conversar diretamente no WhatsApp com a nossa equipe. Faremos uma análise do seu negócio e apresentaremos a proposta ideal.",
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
