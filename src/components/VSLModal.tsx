"use client";

import React, { useState, useEffect } from "react";
import { X, Play, Pause, Volume2, VolumeX, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

interface VSLModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VSLModal({ isOpen, onClose }: VSLModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 15 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0e121a] border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <h3 className="text-sm font-bold text-white tracking-wide uppercase">
              Apresentação da Estratégia de Funil StudioWeb
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Mock Video Visuals */}
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
            alt="Vídeo de Apresentação"
            className="w-full h-full object-cover opacity-60"
          />

          {/* Video Overlay Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="badge-lead-lime px-3 py-1 rounded-full text-xs font-bold">
                Ao Vivo: Estudo de Caso Real
              </span>
              <span className="text-xs font-mono text-zinc-400 bg-black/60 px-2 py-1 rounded">
                1080p 60FPS
              </span>
            </div>

            <div className="text-center max-w-lg mx-auto">
              <p className="text-lg sm:text-2xl font-black text-white drop-shadow-md">
                "Como escalamos o faturamento em 3.4x com um funil de página única"
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                Sem depender de agências lentas ou gastar rios de dinheiro em tráfego inútil.
              </p>
            </div>

            {/* Video Controls bar */}
            <div className="space-y-2">
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-gradient-to-r from-[#ff2e63] to-[#ff5722] rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span>01:14 / 04:30</span>
                </div>
                <span>Áudio HD Habilitado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Immediate Conversion */}
        <div className="p-6 bg-[#08090c] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 text-center sm:text-left">
            <p className="font-semibold text-white">Pronto para implementar na sua empresa?</p>
            <p>Converse diretamente com o estrategista responsável.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white"
            >
              Continuar assistindo
            </button>

            <a
              href="https://wa.me/5583999520137?text=Ol%C3%A1!%20Assisti%20ao%20v%C3%ADdeo%20da%20StudioWeb%20e%20quero%20aplicar%20essa%20estrat%C3%A9gia%20na%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral-gradient px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
