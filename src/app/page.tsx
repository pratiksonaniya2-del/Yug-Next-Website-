"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentCardModal, { ModalType } from "@/components/ContentCardModal";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Building2,
  Users,
  Zap,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  MapPin,
  GraduationCap,
  Globe2,
} from "lucide-react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Triggered on hover from Navbar (preview mode)
  const handleHoverModal = (modal: ModalType) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    // If not locked, or switching modals, show the hovered card preview
    if (!isLocked || activeModal !== modal) {
      setActiveModal(modal);
    }
  };

  // Triggered on click from Navbar or Cards (locks card open)
  const handleClickModal = (modal: ModalType) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (activeModal === modal && isLocked) {
      // Clicking same modal while locked toggles it closed
      setIsLocked(false);
      setActiveModal(null);
    } else {
      setActiveModal(modal);
      setIsLocked(true);
    }
  };

  // Triggered when cursor leaves Navbar or Modal card
  const handleLeaveNavOrCard = () => {
    if (!isLocked) {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = setTimeout(() => {
        setActiveModal(null);
      }, 220); // 220ms grace window for smooth mouse transition
    }
  };

  // Triggered when cursor enters the Modal card (cancels dismissal)
  const handleEnterCard = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handleToggleLock = () => {
    setIsLocked((prev) => !prev);
  };

  const closeModal = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsLocked(false);
    setActiveModal(null);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between selection:bg-purple-600 selection:text-white">
      
      {/* 1. Header with Hover Preview & Click-to-Lock Support */}
      <Navbar
        activeModal={activeModal}
        isLocked={isLocked}
        onOpenModal={(modal) => handleClickModal(modal)}
        onHoverModal={handleHoverModal}
        onClickModal={handleClickModal}
        onLeaveNav={handleLeaveNavOrCard}
      />

      {/* 2. Full-Screen 60fps Neural Canvas & 3D Interactive Hero */}
      <Hero onOpenModal={(modal) => handleClickModal(modal)} />

      {/* 3. THE PROBLEM Section */}
      <section className="py-20 lg:py-28 bg-[#070314] text-white relative overflow-hidden border-t border-purple-950/60">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-purple-700/10 blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-900/60 text-purple-300 border border-purple-500/30">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>THE PROBLEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Being Digital Is No Longer the Advantage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl space-y-3 hover:border-purple-500/40 transition-colors">
              <span className="text-2xl font-black text-purple-400">01</span>
              <h3 className="text-xl font-extrabold text-white">A website isn't enough.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Static pages that simply sit on the web no longer capture attention or unlock growth.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl space-y-3 hover:border-purple-500/40 transition-colors">
              <span className="text-2xl font-black text-indigo-400">02</span>
              <h3 className="text-xl font-extrabold text-white">An app isn't enough.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Software must actively connect workflows, users, and ecosystems at ground-level reality.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl space-y-3 hover:border-purple-500/40 transition-colors">
              <span className="text-2xl font-black text-pink-400">03</span>
              <h3 className="text-xl font-extrabold text-white">Having a social media page isn't enough.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                True digital leadership comes from operational capability, real utility, and solving actual bottlenecks.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/80 via-purple-900/40 to-slate-900/80 border border-purple-500/30 backdrop-blur-2xl space-y-4 max-w-4xl">
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light">
              Today, businesses need technology that actually works for them — technology that solves problems, creates better experiences and opens new possibilities.
            </p>
            <p className="text-sm sm:text-base font-semibold text-purple-300">
              And that's where things get interesting.
            </p>
            <p className="text-lg sm:text-2xl font-extrabold text-white tracking-tight border-l-4 border-purple-500 pl-4 py-1">
              Technology should do more than exist. It should move you forward.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE YUGNEXT APPROACH Section */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>THE YUGNEXT APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Don't Just Go Digital. <span className="purple-gradient-text">Go Next.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We believe technology should be measured by what it enables, not just what it looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {/* Useful */}
            <div className="p-7 rounded-3xl bg-purple-50/50 border border-purple-100 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-700/10 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Useful.</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Built around real problems. We identify ground-level friction before architecting code.
              </p>
            </div>

            {/* Accessible */}
            <div className="p-7 rounded-3xl bg-indigo-50/50 border border-indigo-100 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-700/10 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Accessible.</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed for businesses beyond just the biggest players. High-grade capability for every tier.
              </p>
            </div>

            {/* Responsive */}
            <div className="p-7 rounded-3xl bg-pink-50/50 border border-pink-100 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-700/10 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Responsive.</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ready to adapt as the world changes. Agile foundations that scale with shifting market dynamics.
              </p>
            </div>

            {/* Impactful */}
            <div className="p-7 rounded-3xl bg-purple-50/50 border border-purple-100 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-700/10 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Impactful.</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Measured by what it enables, not just what it looks like. Real outcomes over vanity metrics.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-purple-950 text-white text-center space-y-3 max-w-3xl mx-auto shadow-xl shadow-purple-950/20">
            <h4 className="text-xl font-extrabold text-white">
              That's the thinking behind Yugnext.
            </h4>
            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
              We don't build technology for the sake of technology. We build it to make what's next possible.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Cognizant-Style Interactive Discovery Hub (No endless page scrolling) */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-purple-50/40 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>INTERACTIVE PILLARS CONSOLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Select Any Pillar to <span className="purple-gradient-text">Expand Its Dedicated Card</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Experience zero clutter. Click or hover any pillar to launch its full-viewport interactive system console, complete with verified data, checklists, and direct access.
            </p>
          </div>

          {/* 6 Interactive Portal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: What We Do */}
            <button
              onClick={() => handleClickModal("whatWeDo")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600">
                    SERVICES & INITIATIVES
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    What We Do
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From digital presence to possibility: NexanAcademy, Pravaah, OWASP, and Pathfinder School.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-purple-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Card 2: Products */}
            <button
              onClick={() => handleClickModal("products")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600">
                    PROPRIETARY SUITE
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    Products That Solve
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ideas are everywhere, products that solve are rare: ShikshaSathi, CampusNeeds, and Settler.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Card 3: Who We Are */}
            <button
              onClick={() => handleClickModal("whoWeAre")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600">
                    IDENTITY & PURPOSE
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    Who We Are
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technology with a reason to exist. Leadership, ROLTA/MANIT alliances, and Chennai, Bhopal & Pune hubs.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-pink-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Card 4: Industries */}
            <button
              onClick={() => handleClickModal("industries")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600">
                    SECTORS WE TRANSFORM
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    Industries
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Education, Finance, Logistics — and we're just getting started solving meaningful problems.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Card 5: Community */}
            <button
              onClick={() => handleClickModal("community")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600">
                    ECOSYSTEM COLLABORATION
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    Community
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The future isn't built alone. Learn. Connect. Build with students, innovators, and architects.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-amber-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Card 6: News & Milestones */}
            <button
              onClick={() => handleClickModal("news")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600">
                    VERIFIED TIMELINE
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    News & Milestones
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Oct 2026 Pvt Ltd incorporation, May 2026 ₹50K MANIT seed funding, and corporate roadmaps.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-purple-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

          </div>

        </div>
      </section>

      {/* 4. Enterprise Footer (Links also trigger locked cards) */}
      <Footer onOpenModal={(modal) => handleClickModal(modal)} />

      {/* 5. Cognizant-Style Floating Interactive Card Overlay (Hover Preview + Click-to-Lock) */}
      <ContentCardModal
        activeModal={activeModal}
        isLocked={isLocked}
        onClose={closeModal}
        onToggleLock={handleToggleLock}
        onMouseEnter={handleEnterCard}
        onMouseLeave={handleLeaveNavOrCard}
        onSelectModal={(modal) => handleClickModal(modal)}
      />

    </main>
  );
}
