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

      {/* Layered Liquid Moving Waves (Close to text, smooth continuous sinusoidal curves) */}
      <div className="relative w-full h-36 sm:h-48 lg:h-56 -mt-1 sm:-mt-2 pointer-events-none overflow-hidden">
        
        {/* Layer 1: Deep Indigo/Purple Back Wave (Slow moving) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-slow flex">
          <svg
            className="w-full h-full text-purple-950/70 shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,55 C100,20 260,20 360,55 C460,90 620,90 720,55 C820,20 980,20 1080,55 C1180,90 1340,90 1440,55 C1540,20 1700,20 1800,55 C1900,90 2060,90 2160,55 C2260,20 2420,20 2520,55 C2620,90 2780,90 2880,55 L2880,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* Layer 2: Electric Purple Mid Wave (Medium speed reverse - perfectly smooth sinusoidal bezier) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[88%] animate-wave-medium flex">
          <svg
            className="w-full h-full text-purple-800/50 shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,48 C65,76 175,76 240,48 C305,20 415,20 480,48 C545,76 655,76 720,48 C785,20 895,20 960,48 C1025,76 1135,76 1200,48 C1265,20 1375,20 1440,48 C1505,76 1615,76 1680,48 C1745,20 1855,20 1920,48 C1985,76 2095,76 2160,48 C2225,20 2335,20 2400,48 C2465,76 2575,76 2640,48 C2705,20 2815,20 2880,48 L2880,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* Layer 3: Neon Purple/Violet Front Wave (Fast moving - harmonic smooth bezier) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[74%] animate-wave-fast flex">
          <svg
            className="w-full h-full text-purple-600/35 shrink-0"
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,40 C100,15 260,15 360,40 C460,65 620,65 720,40 C820,15 980,15 1080,40 C1180,65 1340,65 1440,40 C1540,15 1700,15 1800,40 C1900,65 2060,65 2160,40 C2260,15 2420,15 2520,40 C2620,65 2780,65 2880,40 L2880,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* Enhanced Glowing Ambient Blur Pill */}
        <div className="pointer-events-none absolute bottom-[-20px] left-1/2 h-[130px] w-[75%] -translate-x-1/2 rounded-full bg-purple-600/[0.25] blur-3xl" />
      </div>

    </footer>
  );
}
