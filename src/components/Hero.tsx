"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Pause,
  Sparkles,
  Zap,
  GraduationCap,
  Building2,
  Layers,
  Compass,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle2,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const VELOCITY_STREAMS = [
  {
    id: "shikshasetu",
    code: "SYS-01",
    tag: "HIGHER EDUCATION INFRASTRUCTURE",
    headline: "Supercharging University Campuses with Shikshasetu",
    highlight: "Shikshasetu",
    subtitle:
      "A unified digital bridge connecting universities, faculty, and scholars. Streamlines academic records, course tracking, fee reconciliation, and departmental communication at speed and scale.",
    cta: "Launch Shikshasetu",
    ctaLink: "#products",
    icon: GraduationCap,
    gradient: "from-purple-400 via-fuchsia-400 to-indigo-300",
    glowColor: "rgba(168, 85, 247, 0.45)",
    metric: "10x Administrative Speed",
    statLabel: "Automated Academic Workflows",
    features: [
      "Unified Student-Faculty Portal",
      "Automated Academic Ledger",
      "Real-Time Institutional Reports",
    ],
  },
  {
    id: "campusneeds",
    code: "SYS-02",
    tag: "CAMPUS COMMERCE & ESSENTIALS",
    headline: "Powering Campus Commerce & Instant Student Services",
    highlight: "Instant Student Services",
    subtitle:
      "Empowering collegiate ecosystems through CampusNeeds. Decentralized peer-to-peer student marketplace, daily supplies, hostel utility requests, and frictionless micro-transactions.",
    cta: "Explore CampusNeeds",
    ctaLink: "#products",
    icon: Building2,
    gradient: "from-indigo-400 via-purple-300 to-cyan-300",
    glowColor: "rgba(99, 102, 241, 0.45)",
    metric: "Zero-Friction Utilities",
    statLabel: "Campus Marketplace & Essentials",
    features: [
      "Peer-to-Peer Student Marketplace",
      "Hostel Utility & Supplies Dispatch",
      "Instant Micro-Ledger Settlements",
    ],
  },
  {
    id: "settler",
    code: "SYS-03",
    tag: "STUDENT MOBILITY & LIVING",
    headline: "Frictionless Living & Relocation for Modern Scholars",
    highlight: "Living & Relocation",
    subtitle:
      "Eliminating the chaos of moving for higher education. Settler provides verified student accommodations, algorithmic roommate matching, and digital deposit escrow across major hubs.",
    cta: "Discover Settler",
    ctaLink: "#products",
    icon: Layers,
    gradient: "from-pink-400 via-purple-400 to-indigo-300",
    glowColor: "rgba(236, 72, 153, 0.45)",
    metric: "100% Verified Housing",
    statLabel: "Student Relocation & Accommodation",
    features: [
      "Verified Student PGs & Apartments",
      "Smart Roommate Compatibility",
      "Digital Agreements & Deposits",
    ],
  },
  {
    id: "academy",
    code: "SYS-04",
    tag: "TALENT ACCELERATION & INCUBATION",
    headline: "Engineering Elite Tech Talent with MANIT Incubation",
    highlight: "Elite Tech Talent",
    subtitle:
      "Backed by MANIT Bhopal with ₹50K seed funding. Powering NexonAcademy production engineering cohorts and Pathfinder School strategic career steering for the next generation of builders.",
    cta: "Explore Talent Programs",
    ctaLink: "#services",
    icon: Sparkles,
    gradient: "from-cyan-400 via-purple-400 to-fuchsia-300",
    glowColor: "rgba(147, 51, 234, 0.5)",
    metric: "₹50K Seed Funded",
    statLabel: "MANIT Incubated & ROLTA Allied",
    features: [
      "Live Production-Grade Codebases",
      "Pathfinder Career Steering",
      "Institutional Incubation (MANIT)",
    ],
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const active = VELOCITY_STREAMS[activeIdx];
  const ActiveIcon = active.icon;

  // Auto-advance stream every 6 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % VELOCITY_STREAMS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative min-h-[94vh] lg:min-h-screen bg-[#050212] text-white flex flex-col justify-between overflow-hidden pt-8 pb-10 lg:pt-12 lg:pb-12">
      
      {/* HCLTech-Inspired Dynamic Velocity Lighting Halos */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1050px] h-[550px] sm:h-[800px] rounded-full blur-[170px] pointer-events-none transition-all duration-1000 animate-pulse-glow"
        style={{ background: active.glowColor }}
      />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-700/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[650px] h-[650px] bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Futuristic Velocity Grid Lines & Subtle Beams */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,#000_65%,transparent_100%)]" />

      {/* Main Viewport Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        
        {/* Top Kinetic Eyebrow Badge */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-xs font-bold tracking-widest uppercase text-purple-300">
            <Zap className="w-3.5 h-3.5 text-purple-400 shrink-0 animate-pulse" />
            <span>Supercharging Digital Progress • YugNext Ecosystem</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-purple-300/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>INCUBATED • PVT LTD REGISTERED</span>
          </div>
        </div>

        {/* 2-Column High-Velocity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Kinetic Narrative */}
          <div className="lg:col-span-7 space-y-7">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="text-xs font-mono font-bold tracking-widest uppercase text-purple-400 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-purple-900/60 border border-purple-500/40 text-[10px]">
                    {active.code}
                  </span>
                  <span>{active.tag}</span>
                </div>

                {/* Grand Headline with Electric Velocity Gradients */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                  {active.headline.split(active.highlight)[0]}
                  <span
                    className={`bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent block sm:inline`}
                  >
                    {active.highlight}
                  </span>
                  {active.headline.split(active.highlight)[1]}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                  {active.subtitle}
                </p>

                {/* Dual Velocity CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href={active.ctaLink}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-600/40 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-[1.03] active:scale-95 transition-all group"
                  >
                    <span>{active.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>

                  <a
                    href="#who-we-are"
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/5 backdrop-blur-xl text-white font-bold text-sm sm:text-base border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all"
                  >
                    <Building2 className="w-4 h-4 text-purple-400" />
                    <span>Global Hubs (4 Cities)</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* HCLTech Dynamic Linear Progress Bar & Controls */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-5 text-xs">
              <div className="flex items-center gap-1 font-mono font-bold text-sm text-white">
                <span className="text-purple-400">0{activeIdx + 1}</span>
                <span className="text-white/40">/</span>
                <span className="text-white/60">04</span>
              </div>

              {/* Progress Line */}
              <div className="w-36 sm:w-56 h-1.5 bg-white/15 rounded-full overflow-hidden">
                <motion.div
                  key={activeIdx}
                  initial={{ width: "0%" }}
                  animate={{ width: isPlaying ? "100%" : "50%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 rounded-full"
                />
              </div>

              {/* Pause/Play Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-colors"
                title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

          {/* Right Column: High-Tech Glassmorphic Console (HCLTech & FourArks Hybrid) */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Glow Ring */}
              <div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-50 transition-all duration-700 pointer-events-none"
                style={{ background: active.glowColor }}
              />

              {/* Interactive Console Card */}
              <div className="relative rounded-3xl bg-white/[0.07] backdrop-blur-2xl border border-white/20 p-6 sm:p-8 shadow-2xl shadow-purple-950/70 space-y-6">
                
                {/* Console Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/40">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-purple-300">SYSTEM ARCHITECTURE</div>
                      <div className="text-lg font-black text-white">{active.highlight}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-900/60 text-purple-300 border border-purple-500/40">
                    ACTIVE
                  </span>
                </div>

                {/* Metric Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border border-white/10">
                  <div className="text-xs font-mono text-purple-300 font-semibold">{active.statLabel}</div>
                  <div className="text-3xl font-black text-white mt-0.5 tracking-tight">{active.metric}</div>
                </div>

                {/* Key Architectural Features */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/50 block">
                    Core Capabilities:
                  </span>
                  {active.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Navigation Stream Switcher */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">
                    Switch Stream:
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {VELOCITY_STREAMS.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveIdx(idx);
                          setIsPlaying(false);
                        }}
                        className={`p-2 rounded-xl text-center text-xs font-bold transition-all border ${
                          activeIdx === idx
                            ? "bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/40"
                            : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {item.code}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Proof-of-Scale Strip (Enterprise Credibility) */}
      <div className="relative mt-8 pt-6 border-t border-white/10 bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">4 Delivery Hubs</div>
              <div className="text-xs text-purple-300 font-semibold flex items-center justify-center md:justify-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Chennai • Bhopal • Agra • Delhi NCR</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">₹50K+ Seeded</div>
              <div className="text-xs text-purple-300 font-semibold flex items-center justify-center md:justify-start gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                <span>MANIT Bhopal Incubation</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">Oct 21, 2026</div>
              <div className="text-xs text-purple-300 font-semibold flex items-center justify-center md:justify-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Incorporated Pvt Ltd Entity</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">Premier Alliances</div>
              <div className="text-xs text-purple-300 font-semibold flex items-center justify-center md:justify-start gap-1.5">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>ROLTA & Govt. of India Programs</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
