"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  TrendingUp,
  Award,
  GraduationCap,
  Building2,
  Layers,
  Compass,
  CheckCircle2,
  Play,
  ArrowUpRight,
} from "lucide-react";

const HERO_PILLARS = [
  {
    id: "products",
    badge: "PROPRIETARY ECOSYSTEMS",
    title: "Building Nation-Scale Digital Infrastructure for Modern India",
    highlight: "Digital Infrastructure",
    subtitle:
      "Transforming higher education, campus lifecycle, and student living through our flagship products: Shikshasetu, CampusNeeds, and Settler.",
    cta: "Explore Our Products",
    ctaLink: "#products",
    accentColor: "from-purple-600 via-purple-700 to-indigo-700",
  },
  {
    id: "incubation",
    badge: "MANIT BHOPAL INCUBATED",
    title: "Backed by Premier Academic Incubation & ₹50K Seed Capital",
    highlight: "Premier Incubation",
    subtitle:
      "Formally incubated within MANIT Bhopal's research ecosystem and incorporated as a Private Limited company to deliver transformative technology.",
    cta: "View Our Journey",
    ctaLink: "#insights",
    accentColor: "from-indigo-600 via-purple-600 to-violet-700",
  },
  {
    id: "academy",
    badge: "SERVICES & TALENT",
    title: "Accelerating Cohort-Based Tech Talent with NexonAcademy",
    highlight: "Tech Talent",
    subtitle:
      "Bridging the engineering talent gap with hands-on production codebases, Pathfinder School career mentorship, and elite institutional alliances.",
    cta: "Discover Services",
    ctaLink: "#services",
    accentColor: "from-fuchsia-600 via-purple-600 to-indigo-600",
  },
];

export default function Hero() {
  const [activePillar, setActivePillar] = useState(0);
  const current = HERO_PILLARS[activePillar];

  return (
    <section className="relative min-h-[94vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-white pt-10 pb-12 lg:pt-16 lg:pb-16">
      
      {/* Dynamic Background Atmosphere (Purple Ambient Halos) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[650px] bg-gradient-to-tr from-purple-500/20 via-indigo-400/15 to-pink-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 -left-20 w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-indigo-300/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Modern Perspective Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed0d_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed0d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        
        {/* Top Interactive Switcher Pills (TCS & FourArks Inspired) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          {HERO_PILLARS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActivePillar(index)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activePillar === index
                  ? "bg-purple-900 text-white shadow-lg shadow-purple-900/25 scale-[1.03]"
                  : "bg-purple-50/80 text-slate-700 hover:bg-purple-100 hover:text-purple-900 border border-purple-100"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  activePillar === index ? "bg-purple-400 animate-ping" : "bg-purple-300"
                }`}
              />
              <span>{item.badge}</span>
            </button>
          ))}
        </div>

        {/* Massive Center Display Narrative */}
        <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Grand Headline (Massive Viewport Sizing) */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-950 tracking-tight leading-[1.08]">
                {current.title.split(current.highlight)[0]}
                <span className="purple-gradient-text block sm:inline">
                  {current.highlight}
                </span>
                {current.title.split(current.highlight)[1]}
              </h1>

              {/* Subtitle with High Readability */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
                {current.subtitle}
              </p>

              {/* Dual Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={current.ctaLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-purple-600/35 hover:shadow-2xl hover:shadow-purple-600/50 hover:scale-[1.03] active:scale-95 transition-all group"
                >
                  <span>{current.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>

                <a
                  href="#who-we-are"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-full bg-white text-slate-900 font-bold text-base sm:text-lg border-2 border-purple-200/80 shadow-md shadow-purple-900/5 hover:border-purple-400 hover:bg-purple-50/50 transition-all"
                >
                  <Building2 className="w-5 h-5 text-purple-700" />
                  <span>Explore Network & Hubs</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating Key Badges (Clean Vector Icons, No Stickers) */}
          <div className="pt-6 sm:pt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-800">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-purple-100 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Oct 21, 2026 Pvt Ltd Incorporated</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-purple-100 shadow-sm">
              <TrendingUp className="w-4 h-4 text-purple-600 shrink-0" />
              <span>₹50K Seed Grant (MANIT Bhopal)</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-purple-100 shadow-sm">
              <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Chennai • Bhopal • Agra • Delhi NCR</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-purple-100 shadow-sm">
              <Award className="w-4 h-4 text-purple-600 shrink-0" />
              <span>ROLTA & Govt. of India Alliances</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Marquee / Platform Ticker Ribbon */}
      <div className="relative mt-12 pt-6 border-t border-purple-100/80 bg-gradient-to-r from-purple-50/50 via-white to-purple-50/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500">
            <span className="text-purple-900 uppercase tracking-wider font-extrabold flex items-center gap-2 shrink-0">
              <Sparkles className="w-4 h-4 text-purple-600" />
              YugNext Flagship Ecosystem
            </span>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-700">
              <a href="#products" className="hover:text-purple-700 flex items-center gap-1.5 transition-colors">
                <GraduationCap className="w-4 h-4 text-purple-600" />
                <span>Shikshasetu</span>
              </a>
              <span className="text-purple-200 hidden sm:inline">•</span>
              <a href="#products" className="hover:text-purple-700 flex items-center gap-1.5 transition-colors">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span>CampusNeeds</span>
              </a>
              <span className="text-purple-200 hidden sm:inline">•</span>
              <a href="#products" className="hover:text-purple-700 flex items-center gap-1.5 transition-colors">
                <Layers className="w-4 h-4 text-pink-600" />
                <span>Settler</span>
              </a>
              <span className="text-purple-200 hidden sm:inline">•</span>
              <a href="#services" className="hover:text-purple-700 flex items-center gap-1.5 transition-colors">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>NexonAcademy</span>
              </a>
              <span className="text-purple-200 hidden sm:inline">•</span>
              <a href="#services" className="hover:text-purple-700 flex items-center gap-1.5 transition-colors">
                <Compass className="w-4 h-4 text-amber-600" />
                <span>Pathfinder School</span>
              </a>
            </div>

            <span className="text-[11px] font-mono text-purple-800 bg-purple-100/70 px-2.5 py-1 rounded-full shrink-0">
              MANIT Incubation Hub
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
