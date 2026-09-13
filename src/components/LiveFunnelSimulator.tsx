"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Sparkles, ArrowRight, Check } from "lucide-react";

export function LiveFunnelSimulator() {
  const [traffic, setTraffic] = useState(3000);
  const [ticket, setTicket] = useState(1500);

  // Common site conversion ~ 1.5%
  const regularLeads = Math.round(traffic * 0.015);
  const regularSales = Math.round(regularLeads * 0.15);
  const regularRevenue = regularSales * ticket;

  // StudioWeb Funnel conversion ~ 11.8%
  const studioLeads = Math.round(traffic * 0.118);
  const studioSales = Math.round(studioLeads * 0.22);
  const studioRevenue = studioSales * ticket;

  const extraRevenue = studioRevenue - regularRevenue;

  return (
    <section id="simulador" className="py-24 bg-[#08090c] relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2e63]/10 border border-[#ff2e63]/30 text-xs font-bold text-[#ff4b6e] uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Retorno do Seu Novo Site
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quanto sua empresa deixa de vender com um site desatualizado?
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Mova os controles abaixo para calcular o retorno estimado que um novo site profissional trará para o seu faturamento.
          </p>
        </div>

        {/* Simulator Glass Card */}
        <div className="glass-funnel p-6 sm:p-10 rounded-3xl border border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Sliders Column */}
            <div className="lg:col-span-6 space-y-8">
              {/* Traffic Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-zinc-200">
                    Visitantes / Acessos mensais no site:
                  </label>
                  <span className="text-base font-black text-white px-3 py-1 bg-white/10 rounded-lg">
                    {traffic.toLocaleString("pt-BR")} acessos
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="30000"
                  step="500"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#ff2e63]"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                  <span>500</span>
                  <span>15.000</span>
                  <span>30.000+</span>
                </div>
              </div>

              {/* Ticket Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-zinc-200">
                    Ticket Médio do seu serviço / produto:
                  </label>
                  <span className="text-base font-black text-emerald-400 px-3 py-1 bg-emerald-950/60 border border-emerald-500/30 rounded-lg">
                    R$ {ticket.toLocaleString("pt-BR")}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={ticket}
                  onChange={(e) => setTicket(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#ff2e63]"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                  <span>R$ 200</span>
                  <span>R$ 5.000</span>
                  <span>R$ 10.000+</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-zinc-500" />
                  <span>Site amador: conversão média de apenas ~1.5%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-zinc-200 font-semibold">Novo Site StudioWeb: conversão média de 11.8%</span>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6 bg-gradient-to-br from-black/80 to-[#121622]/90 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Contatos Qualificados Estimados
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      ~{studioLeads.toLocaleString("pt-BR")} leads
                    </span>
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      +{(studioLeads - regularLeads).toLocaleString("pt-BR")} extras
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Faturamento Adicional Projetado
                  </span>
                  <div className="mt-1">
                    <span className="text-3xl sm:text-5xl font-black text-coral-gradient tracking-tight">
                      +R$ {extraRevenue.toLocaleString("pt-BR")}
                    </span>
                    <span className="text-xs text-zinc-400 block mt-1">
                      estimado por mês apenas com a otimização da página
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/5583999520137?text=Ol%C3%A1!%20Fiz%20a%20simula%C3%A7%C3%A3o%20no%20site%20da%20StudioWeb%20para%20criar%20um%20novo%20site%20com%20${traffic}%20acessos%20mensais.%20Quero%20um%20or%C3%A7amento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral-gradient w-full py-4 rounded-full font-bold text-white text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Quero um Orçamento para Meu Site</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
