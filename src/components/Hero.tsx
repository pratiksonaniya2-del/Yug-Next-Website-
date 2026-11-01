"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building2,
  Layers,
  Sparkles,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";

const TCS_HERO_STORIES = [
  {
    id: "shikshasetu",
    number: "01",
    tag: "HIGHER EDUCATION & CAMPUS GOVERNANCE",
    title: "Building India's Unified Academic Digital Infrastructure",
    highlight: "Academic Digital Infrastructure",
    description:
      "Empowering universities, faculty, and scholars with integrated course tracking, automated records, and seamless administrative workflows through Shikshasetu.",
    cta: "Explore Shikshasetu",
    ctaLink: "#products",
    icon: GraduationCap,
    gradient: "from-purple-500 via-indigo-400 to-purple-200",
    glow: "rgba(168, 85, 247, 0.35)",
    tagline: "Proprietary EdTech Platform",
  },
  {
    id: "campusneeds",
    number: "02",
    tag: "CAMPUS COMMERCE & STUDENT UTILITIES",
    title: "Powering Campus Commerce & Essential Student Services",
    highlight: "Essential Student Services",
    description:
      "Connecting university campuses with verified peer-to-peer student marketplaces, hostel utilities, daily supplies, and instant micro-ledgers via CampusNeeds.",
    cta: "Discover CampusNeeds",
    ctaLink: "#products",
    icon: Building2,
    gradient: "from-indigo-400 via-purple-300 to-pink-300",
    glow: "rgba(99, 102, 241, 0.35)",
    tagline: "Comprehensive Campus Ecosystem",
  },
  {
    id: "settler",
    number: "03",
    tag: "STUDENT MOBILITY & LIVING",
    title: "Frictionless Relocation & Living for Modern Scholars",
    highlight: "Relocation & Living",
    description:
      "Eliminating the anxiety of college relocation. Settler verifies rental accommodations, algorithmic roommate matching, and digital deposit agreements.",
    cta: "Experience Settler",
    ctaLink: "#products",
    icon: Layers,
    gradient: "from-pink-400 via-purple-300 to-indigo-300",
    glow: "rgba(236, 72, 153, 0.35)",
    tagline: "Student Onboarding & Housing",
  },
  {
    id: "academy",
    number: "04",
    tag: "MANIT INCUBATION & TALENT ACCELERATION",
    title: "Engineering Cohort-Based Tech Talent with MANIT Backing",
    highlight: "Cohort-Based Tech Talent",
    description:
      "Incubated at MANIT Bhopal with ₹50K seed funding, powering NexonAcademy production engineering and Pathfinder School strategic career steering.",
    cta: "Explore Academy & Alliances",
    ctaLink: "#services",
    icon: Sparkles,
    gradient: "from-purple-400 via-violet-300 to-cyan-300",
    glow: "rgba(147, 51, 234, 0.4)",
    tagline: "MANIT Incubated & Seed Funded",
  },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const story = TCS_HERO_STORIES[currentIdx];

  // Auto-slide every 6.5 seconds (TCS style)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TCS_HERO_STORIES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#07040d] text-white flex flex-col justify-between overflow-hidden pt-8 pb-10 lg:pt-14 lg:pb-12">
      
      {/* Dynamic Animated Ambient Glow Canvas (TCS / Cognizant Style) */}
      <div
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[550px] sm:h-[750px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000 animate-pulse-glow"
        style={{ background: story.glow }}
      />
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-indigo-700/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-900/25 rounded-full blur-[170px] pointer-events-none" />

      {/* Futuristic Cyber-Grid Mesh Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]" />

      {/* Main Viewport Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Grand Narrative Display */}
          <div className="lg:col-span-8 space-y-8">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Eyebrow Badge (TCS Format) */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-widest uppercase text-purple-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  <span>{story.tag}</span>
                </div>

                {/* Massive Cinematic Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.06]">
                  {story.title.split(story.highlight)[0]}
                  <span
                    className={`bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent block sm:inline`}
                  >
                    {story.highlight}
                  </span>
                  {story.title.split(story.highlight)[1]}
                </h1>

                {/* Narrative Summary */}
                <p className="text-base sm:text-xl lg:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
                  {story.description}
                </p>

                {/* Dual Action CTAs (TCS Pill + Outline) */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={story.ctaLink}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-600/40 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-[1.03] active:scale-95 transition-all group"
                  >
                    <span>{story.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>

                  <a
                    href="#who-we-are"
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/5 backdrop-blur-xl text-white font-bold text-sm sm:text-base border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all"
                  >
                    <span>Delivery Network (4 Hubs)</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* TCS-Style Timer & Controls Bar */}
            <div className="pt-8 border-t border-white/10 flex items-center gap-5 text-xs">
              
              {/* Numbered Indicator */}
              <div className="flex items-baseline gap-1 font-mono font-bold text-base text-white tracking-wider">
                <span className="text-purple-400 text-lg">{story.number}</span>
                <span className="text-white/40">/</span>
                <span className="text-white/60">04</span>
              </div>

              {/* Active Slide Progress Timeline Bar */}
              <div className="w-36 sm:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  key={currentIdx}
                  initial={{ width: "0%" }}
                  animate={{ width: isPlaying ? "100%" : "60%" }}
                  transition={{ duration: 6.5, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                />
              </div>

              {/* Pause / Play Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-colors"
                title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                <button
                  onClick={() =>
                    setCurrentIdx((prev) =>
                      prev === 0 ? TCS_HERO_STORIES.length - 1 : prev - 1
                    )
                  }
                  className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white border border-white/10 transition-all hover:scale-105"
                  title="Previous Story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentIdx((prev) => (prev + 1) % TCS_HERO_STORIES.length)
                  }
                  className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white border border-white/10 transition-all hover:scale-105"
                  title="Next Story"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Story Cards (TCS Sidebar Pattern) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-purple-300 pb-1 flex items-center justify-between">
              <span>Explore Flagship Stories</span>
              <span className="text-white/40">Select to View</span>
            </div>

            {TCS_HERO_STORIES.map((item, idx) => {
              const Icon = item.icon;
              const isActive = currentIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentIdx(idx);
                    setIsPlaying(false);
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-start gap-3.5 ${
                    isActive
                      ? "bg-white/15 backdrop-blur-2xl border-purple-400 shadow-xl shadow-purple-950/50 scale-[1.02]"
                      : "bg-white/[0.04] backdrop-blur-md border-white/10 hover:bg-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isActive
                        ? "bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-md shadow-purple-600/40"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className={isActive ? "text-purple-300 font-bold" : "text-white/40"}>
                        {item.number}
                      </span>
                      <span className="text-[10px] text-white/50">{item.tagline}</span>
                    </div>
                    <div className="text-sm font-bold text-white truncate mt-0.5">
                      {item.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom Proof-of-Scale Strip (TCS Authority Bar) */}
      <div className="relative mt-8 pt-6 border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">4 Delivery Hubs</div>
              <div className="text-xs text-purple-300 font-semibold flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Chennai • Bhopal • Agra • Delhi NCR</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">₹50K+ Seeded</div>
              <div className="text-xs text-purple-300 font-semibold flex items-center justify-center md:justify-start gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                <span>MANIT Bhopal Incubation</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">Oct 21, 2026</div>
              <div className="text-xs text-purple-300 font-semibold flex items-center justify-center md:justify-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Incorporated Pvt Ltd Entity</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">Premier Alliances</div>
              <div className="text-xs text-purple-300 font-semibold flex items-center justify-center md:justify-start gap-1">
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
