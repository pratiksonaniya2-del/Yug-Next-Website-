"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between selection:bg-purple-600 selection:text-white">
      
      {/* 1. Header with Direct Card Triggers */}
      <Navbar onOpenModal={openModal} />

      {/* 2. Full-Screen 60fps Neural Canvas & 3D Interactive Hero */}
      <Hero onOpenModal={openModal} />

      {/* 3. Cognizant-Style Interactive Discovery Hub (No endless page scrolling) */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-purple-50/40 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>COGNIZANT-STYLE INTERACTIVE PORTAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Select Any Pillar to <span className="purple-gradient-text">Expand Its Dedicated Card</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Experience zero clutter. Click any card to launch its full-viewport interactive system console, complete with verified data, checklists, and direct access.
            </p>
          </div>

          {/* 4 Interactive Portal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: What We Do */}
            <button
              onClick={() => openModal("whatWeDo")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600">
                    ECOSYSTEM SUITE
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    What We Do
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proprietary platforms (Shikshasetu, CampusNeeds, Settler) & specialized cohorts (NexonAcademy, Pathfinder).
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-purple-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Card 2: Who We Are */}
            <button
              onClick={() => openModal("whoWeAre")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600">
                    IDENTITY & ALLIANCES
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    Who We Are
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ekjut & MANIT Students Community, ROLTA / MANIT / Govt. alliances, and 4 Delivery Hubs.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-purple-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Card 3: Industries */}
            <button
              onClick={() => openModal("industries")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600">
                    TARGET VERTICALS
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    Industries
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored digital frameworks across Education, Finance, Logistics, and Health sectors.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-purple-700">
                <span>Expand Full Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Card 4: Insights & Milestones */}
            <button
              onClick={() => openModal("insights")}
              className="group text-left p-7 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600">
                    VERIFIED TIMELINE
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    Insights & News
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Oct 2026 Pvt Ltd incorporation, May 2026 ₹50K MANIT seed funding, and upcoming events.
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

      {/* 4. Enterprise Footer (Links also trigger cards) */}
      <Footer onOpenModal={openModal} />

      {/* 5. Cognizant-Style Floating Interactive Card Overlay */}
      <ContentCardModal
        activeModal={activeModal}
        onClose={closeModal}
        onSelectModal={openModal}
      />

    </main>
  );
}
