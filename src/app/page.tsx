"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import NationwideReachSection from "@/components/NationwideReachSection";
import InvestorsCareersSection from "@/components/InvestorsCareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ModalType } from "@/components/ContentCardModal";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const handleClickModal = (modal: ModalType) => {
    if (activeModal === modal) {
      setIsLocked(false);
      setActiveModal(null);
    } else {
      setActiveModal(modal);
      setIsLocked(true);
    }
  };

  const closeModal = () => {
    setIsLocked(false);
    setActiveModal(null);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#5d35e0] selection:text-white">
      
      {/* 1. TCS-Style Header with Logo & Command Search */}
      <Navbar
        activeModal={activeModal}
        isLocked={isLocked}
        onOpenModal={(modal) => handleClickModal(modal)}
        onClickModal={handleClickModal}
        onCloseMegaMenu={closeModal}
      />

      {/* 2. Hero Section */}
      <Hero onOpenModal={(modal) => handleClickModal(modal)} />

      {/* 3. THE PROBLEM Section (As shown in screenshot & wireframe) */}
      <section id="problem" className="py-20 lg:py-28 bg-[#0a0422] text-white relative overflow-hidden border-t border-purple-950/60">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#5d35e0]/12 blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <span className="w-2 h-2 rounded-full bg-[#9d7df7] animate-pulse" />
              <span>THE PROBLEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Being Digital Is No Longer the Advantage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl space-y-3 hover:border-[#5d35e0]/60 transition-colors">
              <span className="text-2xl font-black text-[#9d7df7]">01</span>
              <h3 className="text-xl font-extrabold text-white">A website isn&apos;t enough.</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Static pages that simply sit on the web no longer capture attention or unlock growth.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl space-y-3 hover:border-[#5d35e0]/60 transition-colors">
              <span className="text-2xl font-black text-[#5d35e0]">02</span>
              <h3 className="text-xl font-extrabold text-white">An app isn&apos;t enough.</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Software must actively connect workflows, users, and ecosystems at ground-level reality.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl space-y-3 hover:border-[#5d35e0]/60 transition-colors">
              <span className="text-2xl font-black text-purple-300">03</span>
              <h3 className="text-xl font-extrabold text-white">Having a social media page isn&apos;t enough.</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                True digital leadership comes from operational capability, real utility, and solving actual bottlenecks.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#0e0738] border border-[#5d35e0]/35 backdrop-blur-2xl space-y-4 max-w-4xl shadow-xl">
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light">
              Today, businesses need technology that actually works for them — technology that solves problems, creates better experiences and opens new possibilities.
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#9d7df7]">
              And that&apos;s where things get interesting.
            </p>
            <p className="text-lg sm:text-2xl font-extrabold text-white tracking-tight border-l-4 border-[#5d35e0] pl-4 py-1">
              Technology should do more than exist. It should move you forward.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE YUGNEXT APPROACH Section */}
      <section id="approach" className="py-20 lg:py-28 bg-slate-50 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/10 text-[#5d35e0] border border-[#5d35e0]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#5d35e0]" />
              <span>THE YUGNEXT APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Don&apos;t Just Go Digital. <span className="text-[#5d35e0]">Go Next.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We believe technology should be measured by what it enables, not just what it looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {/* Useful */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#5d35e0] hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#5d35e0] text-white flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Useful.</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Built around real problems. We identify ground-level friction before architecting code.
              </p>
            </div>

            {/* Accessible */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#5d35e0] hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0e0738] text-white flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Accessible.</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Designed for businesses beyond just the biggest players. High-grade capability for every tier.
              </p>
            </div>

            {/* Responsive */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#5d35e0] hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#5d35e0] text-white flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Responsive.</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Ready to adapt as the world changes. Agile foundations that scale with shifting market dynamics.
              </p>
            </div>

            {/* Impactful */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#5d35e0] hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0e0738] text-white flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Impactful.</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Measured by what it enables, not just what it looks like. Real outcomes over vanity metrics.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#0e0738] text-white text-center space-y-3 max-w-3xl mx-auto shadow-xl">
            <h4 className="text-xl font-extrabold text-white">
              That&apos;s the thinking behind Yugnext.
            </h4>
            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed font-light">
              We don&apos;t build technology for the sake of technology. We build it to make what&apos;s next possible.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE DO (WHITE BG) — Page 1 of Wireframe */}
      <WhatWeDoSection />

      {/* 6. WHO WE ARE (DARK BG) — Page 2 of Wireframe */}
      <WhoWeAreSection />

      {/* 7. NATIONWIDE REACH (Map of India: Chennai, Bhopal, Pune) — Page 2 of Wireframe */}
      <NationwideReachSection />

      {/* 8. INVESTORS & CAREERS (Side-by-Side Cards) — Page 3 of Wireframe */}
      <InvestorsCareersSection />

      {/* 9. CONTACT US — Page 3 of Wireframe */}
      <ContactSection />

      {/* 10. Enterprise Footer with 3-Layer Animated Waves */}
      <Footer onOpenModal={(modal) => handleClickModal(modal)} />

    </main>
  );
}
