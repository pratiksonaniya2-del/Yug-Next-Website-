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

      {/* Realistic Luminous 3-Layer Liquid Waves (Specular Crest Highlight & Translucent Gradients) */}
      <div className="relative w-full h-32 sm:h-44 lg:h-48 -mt-1 sm:-mt-2 pointer-events-none overflow-hidden">
        
        {/* Layer 1: Back Wave (Translucent lavender/violet ethereal swell) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-realistic-back flex">
          <svg
            className="w-full h-full shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="realisticWave1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.22" />
                <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#3b0764" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              fill="url(#realisticWave1)"
              d="M0,60 C200,35 520,35 720,60 C920,85 1240,85 1440,60 C1640,35 1960,35 2160,60 C2360,85 2680,85 2880,60 L2880,140 L0,140 Z"
            />
            {/* Luminous crest highlight rim */}
            <path
              fill="none"
              stroke="#c084fc"
              strokeWidth="1.2"
              strokeOpacity="0.35"
              d="M0,60 C200,35 520,35 720,60 C920,85 1240,85 1440,60 C1640,35 1960,35 2160,60 C2360,85 2680,85 2880,60"
            />
          </svg>
        </div>

        {/* Layer 2: Mid Wave (Soft violet counter-drift with luminous rim) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[88%] animate-wave-realistic-mid flex">
          <svg
            className="w-full h-full shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="realisticWave2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.32" />
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#2e1065" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path
              fill="url(#realisticWave2)"
              d="M0,52 C200,74 520,74 720,52 C920,30 1240,30 1440,52 C1640,74 1960,74 2160,52 C2360,30 2680,30 2880,52 L2880,140 L0,140 Z"
            />
            {/* Luminous crest highlight rim */}
            <path
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="1.5"
              strokeOpacity="0.60"
              d="M0,52 C200,74 520,74 720,52 C920,30 1240,30 1440,52 C1640,74 1960,74 2160,52 C2360,30 2680,30 2880,52"
            />
          </svg>
        </div>

        {/* Layer 3: Front Wave (Light glowing liquid crest with bright specular refraction) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[78%] animate-wave-realistic-front flex">
          <svg
            className="w-full h-full shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="realisticWave3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
                <stop offset="25%" stopColor="#9333ea" stopOpacity="0.30" />
                <stop offset="65%" stopColor="#6b21a8" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#050212" stopOpacity="0.60" />
              </linearGradient>
            </defs>
            <path
              fill="url(#realisticWave3)"
              d="M0,46 C210,26 510,26 720,46 C930,66 1230,66 1440,46 C1650,26 1950,26 2160,46 C2370,66 2670,66 2880,46 L2880,140 L0,140 Z"
            />
            {/* Specular crest light highlight */}
            <path
              fill="none"
              stroke="#f3e8ff"
              strokeWidth="1.8"
              strokeOpacity="0.85"
              d="M0,46 C210,26 510,26 720,46 C930,66 1230,66 1440,46 C1650,26 1950,26 2160,46 C2370,66 2670,66 2880,46"
            />
          </svg>
        </div>

        {/* Soft Ambient Light Glow at Base */}
        <div className="pointer-events-none absolute bottom-[-15px] left-1/2 h-[90px] w-[70%] -translate-x-1/2 rounded-full bg-purple-500/[0.18] blur-3xl" />
      </div>

    </footer>
  );
}
