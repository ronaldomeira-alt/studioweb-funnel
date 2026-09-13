"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroVSL } from "@/components/HeroVSL";
import { SocialProofBar } from "@/components/SocialProofBar";
import { FunnelMachineSection } from "@/components/FunnelMachineSection";
import { FeaturesBentoGrid } from "@/components/FeaturesBentoGrid";
import { LiveFunnelSimulator } from "@/components/LiveFunnelSimulator";
import { FounderAuthoritySection } from "@/components/FounderAuthoritySection";
import { FaqSection } from "@/components/FaqSection";
import { CtaFinalSection } from "@/components/CtaFinalSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { VSLModal } from "@/components/VSLModal";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#08090c] text-slate-100 relative overflow-x-hidden selection:bg-[#ff2e63] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section matching reference */}
      <HeroVSL onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* Social Proof Quote & Client Bar */}
      <SocialProofBar />

      {/* 3D Laptop Machine Section with Giant Coral X */}
      <FunnelMachineSection onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* 3-Card Bento Grid */}
      <FeaturesBentoGrid onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* Interactive Financial Simulator */}
      <LiveFunnelSimulator />

      {/* Founder & Authority Section with Giant Coral X */}
      <FounderAuthoritySection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Final Urgency Call to Action */}
      <CtaFinalSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Video Presentation Modal */}
      <VSLModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </main>
  );
}
