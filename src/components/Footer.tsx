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

      {/* Main Columnar Content (Stacked "ek ke neeche ek" in structured vertical columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-4">
        
        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 text-left mb-10">
          
          {/* Column 1: Brand & Strategic Hubs (Span 5 on Desktop) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-8">
            <div className="inline-flex items-center gap-3 cursor-pointer group" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
                <span className="font-extrabold text-xl tracking-tight">Y</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  Yug<span className="text-purple-400">Next</span> <span className="text-xs uppercase font-bold text-purple-400">Pvt. Ltd.</span>
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-purple-300/80 font-bold">
                  Step Into Tomorrow
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Build things people need · Create things people remember · Move things forward.
            </p>

            <div className="space-y-2 pt-2 border-t border-purple-950/80 text-xs">
              <div className="flex items-center gap-2 text-pink-300 font-mono font-semibold text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>DELIVERY NETWORK: CHENNAI · BHOPAL · PUNE</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Strategic Alliances: ROLTA · NexanAcademy · MANIT Bhopal</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                Incorporated 21 Oct 2026 • MANIT Bhopal Incubated &amp; Seed Funded
              </div>
            </div>
          </div>

          {/* Column 2: What We Do (Services) — Stacked Vertically */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 block border-b border-purple-950/80 pb-2">
              WHAT WE DO
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal("whatWeDo")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  NexanAcademy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("whatWeDo")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Pravaah Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("whatWeDo")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  OWASP Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("whatWeDo")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Pathfinder School
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => onOpenModal("whatWeDo")}
                  className="text-pink-400 hover:text-pink-300 font-bold transition-colors cursor-pointer text-left inline-flex items-center gap-1"
                >
                  <span>Explore Services</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products — Stacked Vertically */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 block border-b border-purple-950/80 pb-2">
              PRODUCTS
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal("products")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  ShikshaSathi (EdTech)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("products")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  CampusNeeds (Campus)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("products")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Settler (Living)
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => onOpenModal("products")}
                  className="text-pink-400 hover:text-pink-300 font-bold transition-colors cursor-pointer text-left inline-flex items-center gap-1"
                >
                  <span>Explore Products</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries & Organisation — Stacked Vertically */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 block border-b border-purple-950/80 pb-2">
              ORGANISATION &amp; REACH
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal("whoWeAre")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Who We Are &amp; Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("industries")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Industries (Ed, Fin, Logistics)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("community")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Community &amp; Alliances
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("news")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  News &amp; Milestones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("careers")}
                  className="text-purple-300 hover:text-white font-bold transition-colors cursor-pointer text-left block"
                >
                  Careers (Hiring Active)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("contact")}
                  className="text-pink-400 hover:text-white font-bold transition-colors cursor-pointer text-left block"
                >
                  Contact Delivery Hub →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Strip above waves */}
        <div className="pt-4 pb-2 border-t border-purple-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-500 font-mono">
          <p>© 2026 YUGNEXT PRIVATE LIMITED · ALL RIGHTS RESERVED · MANIT BHOPAL INCUBATED</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* Realistic Luminous 3-Layer Liquid Waves (Pure Translucent Gradients, Seamless 60fps) */}
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
          </svg>
        </div>

        {/* Layer 2: Mid Wave (Soft violet counter-drift) */}
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
          </svg>
        </div>

        {/* Layer 3: Front Wave (Light glowing liquid crest) */}
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
          </svg>
        </div>

        {/* Soft Ambient Light Glow at Base */}
        <div className="pointer-events-none absolute bottom-[-15px] left-1/2 h-[90px] w-[70%] -translate-x-1/2 rounded-full bg-purple-500/[0.18] blur-3xl" />
      </div>

    </footer>
  );
}
