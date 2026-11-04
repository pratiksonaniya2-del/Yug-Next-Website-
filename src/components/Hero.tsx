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
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
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
          </a>
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
            <span className="text-[#9B7BF0]">
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

        {/* Social Proof / Verified Trust Badge removed */}


      </div>

      {/* 5. LIVE INTERACTIVE AI WORKSPACE WINDOW (HIDDEN FOR NOW - SHIKSHASATHI SLIDESHOW WILL BE ADDED ON PRODUCT PAGE) */}

    </section>
  );
}
