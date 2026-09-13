"use client";

import React from "react";
import { motion } from "framer-motion";

interface NeonXProps {
  className?: string;
  size?: number;
  opacity?: number;
  rotate?: number;
}

export function NeonXBackdrop({
  className = "",
  size = 500,
  opacity = 0.85,
  rotate = -12,
}: NeonXProps) {
  return (
    <div
      className={`pointer-events-none select-none absolute flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {/* Dynamic Ambient Glow Behind the X */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 46, 99, 0.45) 0%, rgba(255, 87, 34, 0.25) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* The Geometric 3D Coral "X" matching the reference design */}
      <motion.svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_35px_rgba(255,46,99,0.6)]"
        style={{ opacity }}
        initial={{ scale: 0.95, opacity: opacity * 0.8 }}
        animate={{ scale: [0.95, 1.02, 0.95], opacity: [opacity * 0.8, opacity, opacity * 0.8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="neonCoralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1E56" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FF416C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="edgeHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFA07A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF2E63" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Diagonal Bar 1 (\) */}
        <polygon
          points="40,10 95,0 260,290 205,300"
          fill="url(#neonCoralGradient)"
        />
        {/* Specular edge on Bar 1 */}
        <line
          x1="95"
          y1="0"
          x2="260"
          y2="290"
          stroke="url(#edgeHighlight)"
          strokeWidth="2.5"
        />

        {/* Diagonal Bar 2 (/) */}
        <polygon
          points="205,0 260,10 95,300 40,290"
          fill="url(#neonCoralGradient)"
        />
        {/* Specular edge on Bar 2 */}
        <line
          x1="205"
          y1="0"
          x2="40"
          y2="290"
          stroke="url(#edgeHighlight)"
          strokeWidth="2.5"
        />
      </motion.svg>
    </div>
  );
}
