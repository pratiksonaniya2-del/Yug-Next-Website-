"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Sparkles, MapPin, CheckCircle2, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./SocialIcons";
import { ModalType } from "./ContentCardModal";
import YugNextLogo from "./YugNextLogo";

interface FooterProps {
  onOpenModal?: (modal: ModalType) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 bg-[#0A0818] overflow-hidden text-[#EFEDFA] border-t border-[#2A2450]">
      
      {/* Ambient Deep Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#6C3CE3]/10 blur-[120px] pointer-events-none" />

      {/* Main Columnar Content (Stacked "ek ke neeche ek" in structured vertical columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-4">
        
        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 text-left mb-10 items-start">
          
          {/* Column 1: Brand & Strategic Hubs (Span 3 on Desktop) */}
          <div className="lg:col-span-3 space-y-4 pr-0 lg:pr-4">
            <div className="inline-flex items-center cursor-pointer group hover:opacity-95 transition-opacity" onClick={scrollToTop}>
              <YugNextLogo size="lg" variant="full" theme="dark" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Build things people need<br />
              Create things people remember<br />
              Move things forward.
            </p>

            <div className="space-y-2 pt-2 border-t border-purple-950/80 text-xs">
              <Link
                href="/#reach"
                onClick={(e) => {
                  const el = document.getElementById("reach");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-2 text-[#9B7BF0] hover:text-white transition-colors font-mono font-semibold text-[11px] group cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#9B7BF0] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">DELIVERY NETWORK: NATIONWIDE</span>
              </Link>
              <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-mono font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Government Funded Startup</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono pl-5 leading-tight">
                Incubated at MANIT ROLTA Incubation Centre, Bhopal
              </div>
            </div>
          </div>

          {/* Column 2: WHAT WE DO? (Span 2 on Desktop) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B7BF0] block border-b border-[#2A2450] pb-2">
              WHAT WE DO?
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors text-left block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/shikshasathi"
                  className="text-slate-400 hover:text-white transition-colors text-left block"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: WHO WE ARE? (Span 5 on Desktop with 2 Sub-Columns) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B7BF0] block border-b border-[#2A2450] pb-2">
              WHO WE ARE?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
              {/* Sub-column 1 (Left) */}
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#leadership"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collaborations"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    Strategic Alliances
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reach"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    Global Delivery Network
                  </Link>
                </li>
              </ul>

              {/* Sub-column 2 (Right) */}
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/events"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customer-stories"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    Customer Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news#milestones-timeline"
                    className="text-slate-400 hover:text-white transition-colors text-left block"
                  >
                    Awards &amp; Recognition
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: INVESTORS / CAREERS / CONTACT US (Span 2 on Desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <Link
                href="/invest"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B7BF0] hover:text-white block border-b border-[#2A2450] pb-2 transition-colors group flex items-center justify-between"
              >
                <span>INVESTORS</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            </div>

            <div>
              <Link
                href="/careers"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B7BF0] hover:text-white block border-b border-[#2A2450] pb-2 transition-colors group flex items-center justify-between"
              >
                <span>CAREERS</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            </div>

            <div>
              <Link
                href="/#contact"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B7BF0] hover:text-white block border-b border-[#2A2450] pb-2 transition-colors group flex items-center justify-between"
              >
                <span>CONTACT US</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            </div>

            {/* Social & Contact Channels */}
            <div className="pt-2 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A79FCB] block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919310346182"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="w-7 h-7 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-emerald-500/60 hover:bg-emerald-500/10 text-emerald-400 flex items-center justify-center transition-all"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-7 h-7 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-pink-500/60 hover:bg-pink-500/10 text-pink-400 flex items-center justify-center transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="w-7 h-7 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-blue-500/60 hover:bg-blue-500/10 text-blue-400 flex items-center justify-center transition-all"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:+919310346182"
                  title="Call"
                  className="w-7 h-7 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-violet-500/60 hover:bg-violet-500/10 text-violet-400 flex items-center justify-center transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:yugnextofficial@gmail.com"
                  title="Mail"
                  className="w-7 h-7 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-[#9B7BF0]/60 hover:bg-[#6C3CE3]/15 text-[#9B7BF0] flex items-center justify-center transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Strip above waves */}
        <div className="pt-4 pb-2 border-t border-purple-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-500 font-mono">
          <p>© 2026 YUGNEXT PRIVATE LIMITED · ALL RIGHTS RESERVED</p>
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
