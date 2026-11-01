"use client";

import React from "react";
import { ArrowUp, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { ModalType } from "./ContentCardModal";

interface FooterProps {
  onOpenModal: (modal: ModalType) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 bg-[#050212] overflow-hidden text-white border-t border-purple-950/60">
      
      {/* Ambient Deep Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-purple-700/10 blur-[120px] pointer-events-none" />

      {/* Main Centered Content (Compact spacing to keep text close to moving waves) */}
      <div className="relative z-10 px-5 pt-14 pb-2 sm:pb-3 md:px-10">
        <div className="mx-auto max-w-5xl text-center space-y-4">
          
          {/* Brand Logo & Name */}
          <div className="inline-block cursor-pointer group" onClick={scrollToTop}>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
                <span className="font-extrabold text-xl tracking-tight">Y</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-[0.16em] text-white uppercase group-hover:text-purple-300 transition-colors">
                YugNext <span className="text-purple-500">Pvt. Ltd.</span>
              </h2>
            </div>
          </div>

          {/* Subtitle / Departmental & Institutional Tag */}
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-purple-400 font-bold">
            MANIT BHOPAL INCUBATED • SEED FUNDED • NATION-SCALE ECOSYSTEMS
          </p>

          {/* Centered Navigation Links (Mechanical Portal Style) */}
          <nav className="pt-2 flex flex-wrap justify-center items-center gap-x-8 gap-y-2.5 max-w-4xl mx-auto">
            <button
              onClick={() => onOpenModal("whatWeDo")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              What We Do
            </button>
            <button
              onClick={() => onOpenModal("whatWeDo")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Shikshasetu
            </button>
            <button
              onClick={() => onOpenModal("whatWeDo")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              CampusNeeds
            </button>
            <button
              onClick={() => onOpenModal("whatWeDo")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Settler
            </button>
            <button
              onClick={() => onOpenModal("whatWeDo")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              NexonAcademy
            </button>
            <button
              onClick={() => onOpenModal("whoWeAre")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Who We Are
            </button>
            <button
              onClick={() => onOpenModal("industries")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Industries
            </button>
            <button
              onClick={() => onOpenModal("insights")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Insights
            </button>
            <button
              onClick={() => onOpenModal("investors")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Investors
            </button>
            <button
              onClick={() => onOpenModal("careers")}
              className="text-[11px] uppercase tracking-[0.18em] text-slate-400 hover:text-purple-400 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Careers
            </button>
            <button
              onClick={() => onOpenModal("contact")}
              className="text-[11px] uppercase tracking-[0.18em] text-purple-400 hover:text-white transition-colors duration-200 font-bold cursor-pointer"
            >
              Contact Hub
            </button>
          </nav>

          {/* Regional Hubs & Credentials Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-500 font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              Delivery Hubs: Chennai • Bhopal • Agra • Delhi NCR
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              Incorporation: Oct 21, 2026 (Pvt Ltd)
            </span>
            <span>•</span>
            <span>ROLTA & Govt. of India Alliances</span>
          </div>

          {/* Copyright Line (Mechanical Portal Exact Format) */}
          <p className="pt-1 text-[10px] uppercase tracking-[0.22em] text-slate-600 font-medium">
            © 2026 YUGNEXT PRIVATE LIMITED · MANIT BHOPAL INCUBATED
          </p>

          {/* Scroll To Top Action */}
          <div className="pt-1">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-purple-400/80 hover:text-purple-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>

      {/* Mechanical Portal Exact 4-Layer Dynamic Waves (Purple Velvet Theme) */}
      <div className="footer-waves -mt-1 sm:-mt-2">
        <div className="footer-wave footer-wave-4" />
        <div className="footer-wave footer-wave-3" />
        <div className="footer-wave footer-wave-2" />
        <div className="footer-wave footer-wave-1" />
        <div className="footer-wave-glow" />
      </div>

    </footer>
  );
}
