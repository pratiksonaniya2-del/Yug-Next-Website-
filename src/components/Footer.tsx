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
    <footer className="relative mt-20 bg-[#050212] overflow-hidden text-white border-t border-purple-950/60">
      
      {/* Ambient Deep Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-purple-700/10 blur-[120px] pointer-events-none" />

      {/* Main Centered Content (Inspired by Mechanical Hub MANIT Portal) */}
      <div className="relative z-10 px-5 pt-20 pb-16 md:px-10">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          
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
          <nav className="pt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-3.5 max-w-4xl mx-auto">
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
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-500 font-mono">
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
          <p className="pt-4 text-[10px] uppercase tracking-[0.22em] text-slate-600 font-medium">
            © 2026 YUGNEXT PRIVATE LIMITED · MANIT BHOPAL INCUBATED
          </p>

          {/* Scroll To Top Action */}
          <div className="pt-2">
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

      {/* Layered Liquid Moving Waves (Expanded Height & Continuous 60fps Animation) */}
      <div className="relative w-full h-32 sm:h-44 lg:h-52 pointer-events-none overflow-hidden">
        
        {/* Layer 1: Deep Indigo/Purple Back Wave (Slow moving) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-slow flex">
          <svg
            className="w-full h-full text-purple-950/60 shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,60 C360,115 540,15 720,60 C900,105 1080,15 1440,60 C1800,115 1980,15 2160,60 C2340,105 2520,15 2880,60 L2880,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* Layer 2: Electric Purple Mid Wave (Medium speed reverse) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[85%] animate-wave-medium flex">
          <svg
            className="w-full h-full text-purple-800/40 shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,45 C400,0 680,95 1000,45 C1320,0 1440,75 1440,45 C1840,0 2120,95 2440,45 C2760,0 2880,75 2880,45 L2880,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* Layer 3: Neon Purple/Violet Front Wave (Fast moving) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[70%] animate-wave-fast flex">
          <svg
            className="w-full h-full text-purple-600/30 shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,50 C320,85 520,20 720,50 C920,80 1120,15 1440,50 C1760,85 1960,20 2160,50 C2360,80 2560,15 2880,50 L2880,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* Enhanced Glowing Ambient Blur Pill */}
        <div className="pointer-events-none absolute bottom-[-30px] left-1/2 h-[130px] w-[75%] -translate-x-1/2 rounded-full bg-purple-600/[0.2] blur-3xl" />
      </div>

    </footer>
  );
}
