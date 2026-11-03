"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Play,
  Star,
  Code2,
  Palette,
  FileText,
  BarChart3,
  Send,
  Check,
  Copy,
  Zap,
  Wand2,
  ChevronRight,
  ExternalLink,
  X,
  Shield,
  Layers,
  GraduationCap,
  Building2,
  Globe2,
  MapPin,
  Compass,
} from "lucide-react";
import { ModalType } from "./ContentCardModal";

interface HeroProps {
  onOpenModal: (modal: ModalType) => void;
}

type TabType = "ui" | "code" | "copy" | "analytics";

export default function Hero({ onOpenModal }: HeroProps) {
  // Active Workspace Tab
  const [activeTab, setActiveTab] = useState<TabType>("ui");
  const [promptInput, setPromptInput] = useState(
    "Explore ShikshaSathi connected learning portal with accessible digital infrastructure"
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeProductView, setActiveProductView] = useState<"shikshasathi" | "campusneeds" | "settler">("shikshasathi");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  // Exact hero ambient background cursor animation from https://www.yugnext.in/
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const hero = heroRef.current;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const xPct = ((e.clientX - rect.left) / rect.width) * 100;
        const yPct = ((e.clientY - rect.top) / rect.height) * 100;
        glow.style.setProperty("--x", `${xPct.toFixed(2)}%`);
        glow.style.setProperty("--y", `${yPct.toFixed(2)}%`);
      } else {
        const xPct = (e.clientX / window.innerWidth) * 100;
        const yPct = (e.clientY / window.innerHeight) * 100;
        glow.style.setProperty("--x", `${xPct.toFixed(2)}%`);
        glow.style.setProperty("--y", `${yPct.toFixed(2)}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Preset prompts tailored to YugNext's exact products & copy
  const PRESET_PROMPTS = [
    { label: "ShikshaSathi EdTech", tab: "ui" as TabType, product: "shikshasathi" as const, prompt: "Explore ShikshaSathi connected learning portal with accessible digital infrastructure" },
    { label: "CampusNeeds Platform", tab: "ui" as TabType, product: "campusneeds" as const, prompt: "Explore CampusNeeds digital approach to simplifying everyday student needs" },
    { label: "Settler Practical Living", tab: "ui" as TabType, product: "settler" as const, prompt: "Explore Settler technology solving practical relocation and housing challenges" },
    { label: "Pravaah Digital Solutions", tab: "code" as TabType, product: "shikshasathi" as const, prompt: "View Pravaah practical digital solutions and high-velocity microservices code" },
    { label: "The YugNext Approach", tab: "copy" as TabType, product: "shikshasathi" as const, prompt: "Review The YugNext Approach: Useful, Accessible, Responsive, Impactful" },
    { label: "Delivery Network & Hubs", tab: "analytics" as TabType, product: "shikshasathi" as const, prompt: "Inspect Chennai · Bhopal · Agra delivery network and MANIT alliance metrics" },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 700);
  };

  const handleSelectPreset = (preset: typeof PRESET_PROMPTS[0]) => {
    setPromptInput(preset.prompt);
    setActiveTab(preset.tab);
    setActiveProductView(preset.product);
    handleGenerate();
  };

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section ref={heroRef} className="relative min-h-screen bg-[#0A0818] text-white flex flex-col items-center justify-between overflow-hidden pt-10 sm:pt-14 pb-0">
      
      {/* Ambient background from yugnext.in (Field dot grid + Glow cursor animation) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="field" />
        <div ref={glowRef} className="glow" />
      </div>

      {/* 4. MAIN HERO CONTENT CONTAINER (EXACT YUGNEXT WEBSITE COPY) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Top Pill Badge: YUGNEXT • STEP INTO TOMORROW */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center"
        >
          <button
            onClick={() => onOpenModal("whatWeDo")}
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#181534] hover:bg-[#181534]/90 border border-[#6C3CE3]/40 hover:border-[#6C3CE3]/70 text-white text-xs sm:text-sm font-medium backdrop-blur-2xl shadow-xl shadow-[#12102A]/60 transition-all cursor-pointer"
          >
            <span className="w-5 h-5 rounded-full bg-[#6C3CE3] flex items-center justify-center text-white text-[10px] shadow-sm">
              <Sparkles className="w-3 h-3 animate-pulse text-white" />
            </span>
            <span className="font-extrabold tracking-wider uppercase text-[#9B7BF0]">YUGNEXT</span>
            <span className="text-[#6C3CE3] font-mono">•</span>
            <span className="text-[#EFEDFA] font-bold tracking-wide group-hover:text-white transition-colors">
              STEP INTO TOMORROW.
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#9B7BF0] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Display Headline: The Future Doesn't Wait. Neither Should Your Business. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.08] text-white max-w-5xl mx-auto">
            The Future Doesn&apos;t Wait.{" "}
            <span className="text-[#9B7BF0] underline decoration-[#6C3CE3]/60 decoration-wavy decoration-2">
              Neither Should Your Business.
            </span>
          </h1>

          {/* Subtitle (Exact User Copy) */}
          <p className="text-sm sm:text-lg md:text-xl text-[#A79FCB] max-w-3xl mx-auto leading-relaxed font-light">
            The way people learn, buy, work and connect is changing. We build the technology, products and digital experiences that help businesses and organisations keep up — and move ahead. From software and digital solutions to products, partnerships and new ideas, Yugnext is building for what comes next.
          </p>
        </motion.div>

        {/* Dual Action Buttons: [ Explore What We Do → ] | [ Explore Products → ] (SOLID COLORS, NO GRADIENT) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 pt-1"
        >
          {/* Primary CTA: Solid Brand Electric Violet (#6C3CE3) */}
          <a
            href="#what-we-do"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#6C3CE3]/30 hover:shadow-2xl hover:shadow-[#6C3CE3]/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
          >
            <span>Explore What We Do</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA: Solid High-Trust Glass */}
          <Link
            href="/shikshasathi"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#181534] hover:bg-[#181534]/90 text-white font-bold text-sm sm:text-base border border-[#2A2450] hover:border-[#6C3CE3] backdrop-blur-xl shadow-lg transition-all cursor-pointer active:scale-95 group"
          >
            <span className="w-5 h-5 rounded-full bg-[#6C3CE3]/25 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-2.5 h-2.5 fill-[#9B7BF0] text-[#9B7BF0] ml-0.5" />
            </span>
            <span>Explore Products</span>
          </Link>
        </motion.div>

        {/* Social Proof / Verified Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1 pb-4"
        >
          {/* Overlapping Institutional & Partner Badges */}
          <div className="flex -space-x-2.5">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner community"
                className="w-8 h-8 rounded-full border-2 border-[#0A0818] object-cover shadow-sm"
              />
            ))}
          </div>

          {/* 5 Golden Stars */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Institutional Delivery Network Copy */}
          <span className="text-xs sm:text-sm text-[#A79FCB] font-medium">
            Strategic Delivery Network: <span className="text-[#9B7BF0] font-extrabold">CHENNAI · BHOPAL · AGRA</span> • Alliances with <span className="font-bold text-white">ROLTA, MANIT &amp; Nexan</span>
          </span>
        </motion.div>

      </div>

      {/* 5. LIVE INTERACTIVE AI WORKSPACE WINDOW (LIGHTSWIND STYLE WITH YUGNEXT CONTENT) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="rounded-t-[28px] sm:rounded-t-[36px] border-t border-x border-[#6C3CE3]/35 bg-[#12102A]/90 backdrop-blur-2xl shadow-[0_-25px_80px_rgba(108,60,227,0.22)] overflow-hidden"
        >
          
          {/* Mac OS Window Header */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#181534] border-b border-[#2A2450] flex items-center justify-between">
            
            {/* Window Dots & Workspace Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm shadow-rose-500/30" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90 shadow-sm shadow-amber-400/30" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/30" />
              </div>
              <span className="text-xs font-mono font-bold text-[#EFEDFA] tracking-wide hidden sm:inline">
                YugNext Intelligent Systems • <span className="text-[#9B7BF0]">Live Workspace</span>
              </span>
            </div>

            {/* Workspace Interactive Mode Tabs (Solid Brand Violet, No Gradients) */}
            <div className="flex items-center gap-1 bg-[#181534] p-1 rounded-xl border border-[#2A2450]">
              <button
                onClick={() => setActiveTab("ui")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "ui"
                    ? "bg-[#6C3CE3] text-white shadow-md shadow-[#6C3CE3]/30"
                    : "text-[#A79FCB] hover:text-white"
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Products Showcase</span>
              </button>

              <button
                onClick={() => setActiveTab("code")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "code"
                    ? "bg-[#6C3CE3] text-white shadow-md shadow-[#6C3CE3]/30"
                    : "text-[#A79FCB] hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Architecture Code</span>
              </button>

              <button
                onClick={() => setActiveTab("copy")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "copy"
                    ? "bg-[#6C3CE3] text-white shadow-md shadow-[#6C3CE3]/30"
                    : "text-[#A79FCB] hover:text-white"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>The Approach</span>
              </button>

              <button
                onClick={() => setActiveTab("analytics")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "analytics"
                    ? "bg-[#6C3CE3] text-white shadow-md shadow-[#6C3CE3]/30"
                    : "text-[#A79FCB] hover:text-white"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Delivery Hubs</span>
              </button>
            </div>

          </div>

          {/* Interactive AI Prompt Input Bar */}
          <div className="p-4 sm:p-6 border-b border-[#2A2450] bg-gradient-to-b from-white/[0.02] to-transparent space-y-3">
            <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#181534] border border-[#6C3CE3]/30 focus-within:border-[#6C3CE3] focus-within:ring-2 focus-within:ring-[#6C3CE3]/20 transition-all shadow-inner">
              <Wand2 className="w-5 h-5 text-[#9B7BF0] shrink-0 ml-1.5 animate-pulse" />
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                placeholder="Ask or explore YugNext solutions (e.g. ShikshaSathi, CampusNeeds, Settler, Pravaah)..."
                className="w-full bg-transparent text-sm sm:text-base font-medium text-white placeholder:text-[#A79FCB] outline-none"
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#6C3CE3]/30 transition-all cursor-pointer whitespace-nowrap active:scale-95 disabled:opacity-50"
              >
                <span>{isGenerating ? "Synthesizing..." : "Explore"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Try Asking Preset Chips */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs pt-1 pb-1 scrollbar-none">
              <span className="text-[11px] font-mono text-[#A79FCB] shrink-0 uppercase tracking-wider font-bold">
                Try asking:
              </span>
              {PRESET_PROMPTS.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => handleSelectPreset(preset)}
                  className="px-3 py-1 rounded-full bg-[#181534] hover:bg-[#6C3CE3]/20 border border-white/[0.1] hover:border-[#6C3CE3]/40 text-[#EFEDFA] hover:text-white font-medium transition-colors cursor-pointer whitespace-nowrap text-xs"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC INTERACTIVE PLAYGROUND OUTPUT */}
          <div className="p-4 sm:p-8 min-h-[380px] sm:min-h-[440px] flex items-center justify-center relative bg-gradient-to-b from-[#12102A]/90 to-[#0A0818]">
            
            {/* Loading Indicator */}
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-30 bg-[#0A0818]/90 backdrop-blur-md flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full border-2 border-[#6C3CE3] border-t-transparent animate-spin" />
                <p className="text-sm font-mono font-bold text-[#9B7BF0] animate-pulse">
                  Synthesizing YugNext Architecture &amp; Solutions...
                </p>
              </motion.div>
            )}

            {/* TAB 1: UI DESIGN PLAYGROUND (YugNext Proprietary Products Showcase) */}
            {activeTab === "ui" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#181534] border border-[#6C3CE3]/30 backdrop-blur-xl shadow-2xl relative space-y-6"
              >
                {/* Product Switcher Pills */}
                <div className="flex items-center justify-between border-b border-[#2A2450] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6C3CE3] animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B7BF0]">
                      PROPRIETARY PRODUCTS
                    </span>
                  </div>

                  <div className="flex items-center bg-[#181534] p-1 rounded-full border border-[#2A2450] text-xs font-bold">
                    <button
                      onClick={() => setActiveProductView("shikshasathi")}
                      className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                        activeProductView === "shikshasathi" ? "bg-[#6C3CE3] text-white" : "text-[#A79FCB] hover:text-white"
                      }`}
                    >
                      ShikshaSathi
                    </button>
                    <button
                      onClick={() => setActiveProductView("campusneeds")}
                      className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                        activeProductView === "campusneeds" ? "bg-[#6C3CE3] text-white" : "text-[#A79FCB] hover:text-white"
                      }`}
                    >
                      CampusNeeds
                    </button>
                    <button
                      onClick={() => setActiveProductView("settler")}
                      className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                        activeProductView === "settler" ? "bg-[#6C3CE3] text-white" : "text-[#A79FCB] hover:text-white"
                      }`}
                    >
                      Settler
                    </button>
                  </div>
                </div>

                {/* ShikshaSathi View */}
                {activeProductView === "shikshasathi" && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">ShikshaSathi</h3>
                        <p className="text-xs text-[#A79FCB]">Connected, accessible and useful education technology</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#EFEDFA] leading-relaxed font-light">
                      Technology built around making education more connected, accessible and useful. We believe the best products don&apos;t begin with &ldquo;What can we build?&rdquo; They begin with &ldquo;What needs solving?&rdquo;
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-[#9B7BF0] block">Connected Learning</span>
                        <span className="text-[11px] text-[#A79FCB]">Student &amp; faculty ecosystem</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-purple-300 block">Accessible Cloud</span>
                        <span className="text-[11px] text-[#A79FCB]">High-uptime digital infra</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-emerald-300 block">Verified Outcomes</span>
                        <span className="text-[11px] text-[#A79FCB]">Empowering institutions</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenModal("products")}
                      className="w-full py-3 rounded-2xl bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#6C3CE3]/30 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                    >
                      Explore ShikshaSathi →
                    </button>
                  </div>
                )}

                {/* CampusNeeds View */}
                {activeProductView === "campusneeds" && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">CampusNeeds</h3>
                        <p className="text-xs text-[#A79FCB]">Simplifying everyday needs across the campus ecosystem</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#EFEDFA] leading-relaxed font-light">
                      A digital approach to simplifying everyday needs and experiences across the campus ecosystem. Designed to turn student necessities into a streamlined digital utility.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-[#9B7BF0] block">Campus Marketplace</span>
                        <span className="text-[11px] text-[#A79FCB]">Decentralized utilities</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-purple-300 block">Student Essentials</span>
                        <span className="text-[11px] text-[#A79FCB]">Direct on-demand access</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-emerald-300 block">Frictionless Living</span>
                        <span className="text-[11px] text-[#A79FCB]">Built for college hubs</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenModal("products")}
                      className="w-full py-3 rounded-2xl bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#6C3CE3]/30 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                    >
                      Explore CampusNeeds →
                    </button>
                  </div>
                )}

                {/* Settler View */}
                {activeProductView === "settler" && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">Settler</h3>
                        <p className="text-xs text-[#A79FCB]">Solving practical relocation &amp; housing challenges through technology</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#EFEDFA] leading-relaxed font-light">
                      A product focused on solving practical problems through technology. Smart accommodation matching, verified student housing, and effortless city relocation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-[#9B7BF0] block">Verified Stays</span>
                        <span className="text-[11px] text-[#A79FCB]">Direct landlord trust</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-purple-300 block">Smart Relocation</span>
                        <span className="text-[11px] text-[#A79FCB]">Zero broker hassle</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                        <span className="font-bold text-emerald-300 block">Student Focused</span>
                        <span className="text-[11px] text-[#A79FCB]">Built for Chennai, Bhopal</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenModal("products")}
                      className="w-full py-3 rounded-2xl bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#6C3CE3]/30 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                    >
                      Explore Settler →
                    </button>
                  </div>
                )}

              </motion.div>
            )}

            {/* TAB 2: ARCHITECTURE CODE PLAYGROUND (Pravaah & Microservices Code) */}
            {activeTab === "code" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl rounded-2xl bg-[#12102A] border border-[#6C3CE3]/35 overflow-hidden text-left font-mono text-xs shadow-2xl"
              >
                {/* Code Header */}
                <div className="px-4 py-2.5 bg-[#181534] border-b border-[#2A2450] flex items-center justify-between text-[11px] text-[#A79FCB]">
                  <span className="text-[#9B7BF0] font-bold">PravaahSolutionsEngine.ts</span>
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181534] hover:bg-[#181534]/90 text-[#EFEDFA] hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>

                {/* Syntax Highlighted Code */}
                <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed space-y-1 text-[#A79FCB] font-mono">
                  <div><span className="text-[#9B7BF0]">import</span> &#123; YugNextEngine, DeliveryNode &#125; <span className="text-[#9B7BF0]">from</span> <span className="text-emerald-300">&quot;@yugnext/pravaah-core&quot;</span>;</div>
                  <div><span className="text-[#9B7BF0]">import</span> &#123; ShikshaSathi, CampusNeeds &#125; <span className="text-[#9B7BF0]">from</span> <span className="text-emerald-300">&quot;@yugnext/products&quot;</span>;</div>
                  <div className="text-slate-500">// Enterprise delivery node architecture: CHENNAI · BHOPAL · AGRA</div>
                  <div><span className="text-purple-400 font-bold">export const</span> <span className="text-amber-300">YugNextSolutions</span> = <span className="text-[#9B7BF0]">new</span> <span className="text-amber-300">YugNextEngine</span>(&#123;</div>
                  <div className="pl-4">hubs: [<span className="text-emerald-300">&quot;CHENNAI&quot;</span>, <span className="text-emerald-300">&quot;BHOPAL&quot;</span>, <span className="text-emerald-300">&quot;AGRA&quot;</span>],</div>
                  <div className="pl-4">alliances: [<span className="text-emerald-300">&quot;ROLTA&quot;</span>, <span className="text-emerald-300">&quot;MANIT&quot;</span>, <span className="text-emerald-300">&quot;NexanAcademy&quot;</span>],</div>
                  <div className="pl-4">mission: <span className="text-emerald-300">&quot;Build things people need. Create things people remember. Move things forward.&quot;</span>,</div>
                  <div className="pl-4">activeServices: [NexanAcademy, Pravaah, CyberSecurity, PathfinderSchool],</div>
                  <div>&#125;);</div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: THE YUGNEXT APPROACH (EXACT WEBSITE COPY) */}
            {activeTab === "copy" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-xl space-y-3 text-left"
              >
                <div className="p-4 rounded-2xl bg-[#12102A] border border-[#6C3CE3]/30">
                  <span className="text-[10px] font-mono font-bold text-[#9B7BF0] uppercase tracking-widest block mb-1">
                    THE YUGNEXT APPROACH
                  </span>
                  <h4 className="text-base font-extrabold text-white">Don&apos;t Just Go Digital. Go Next.</h4>
                </div>

                {[
                  { title: "Useful.", desc: "Built around real problems." },
                  { title: "Accessible.", desc: "Designed for businesses beyond just the biggest players." },
                  { title: "Responsive.", desc: "Ready to adapt as the world changes." },
                  { title: "Impactful.", desc: "Measured by what it enables, not just what it looks like." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#181534] border border-[#6C3CE3]/25 flex items-center justify-between hover:border-[#6C3CE3]/60 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-extrabold text-[#9B7BF0] mr-2">{item.title}</span>
                      <span className="text-xs text-[#EFEDFA] font-light">{item.desc}</span>
                    </div>
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 4: DELIVERY HUBS & ALLIANCES ANALYTICS */}
            {activeTab === "analytics" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
              >
                <div className="p-5 rounded-2xl bg-[#181534] border border-[#6C3CE3]/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#A79FCB] uppercase tracking-wider">
                      DELIVERY NETWORK
                    </span>
                    <MapPin className="w-3.5 h-3.5 text-[#9B7BF0]" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">CHENNAI · BHOPAL · AGRA</span>
                  </div>
                  <p className="text-xs text-[#A79FCB]">Different cities. Different talent. One direction: Forward.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#181534] border border-[#6C3CE3]/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#A79FCB] uppercase tracking-wider">
                      STRATEGIC ALLIANCES
                    </span>
                    <Shield className="w-3.5 h-3.5 text-[#9B7BF0]" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">ROLTA · MANIT · Nexan</span>
                  </div>
                  <p className="text-xs text-[#A79FCB]">High-trust institutional partnerships multiplying technology-led impact.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#181534] border border-[#6C3CE3]/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#A79FCB] uppercase tracking-wider">
                      CORPORATE ENTITY
                    </span>
                    <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">YUGNEXT PVT. LTD.</span>
                  </div>
                  <p className="text-xs text-[#A79FCB]">Incorporated 21 Oct 2026 • Verified Registrar of Companies (ROC).</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#181534] border border-[#6C3CE3]/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#A79FCB] uppercase tracking-wider">
                      INSTITUTIONAL SEEDING
                    </span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">₹50,000 Seed Grant</span>
                  </div>
                  <p className="text-xs text-[#A79FCB]">Seed funding backed by MANIT Bhopal innovation council.</p>
                </div>
              </motion.div>
            )}

          </div>

        </motion.div>
      </div>

    </section>
  );
}
