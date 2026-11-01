"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  MapPin,
  Building,
  GraduationCap,
  Award,
} from "lucide-react";

const HERO_SLIDES = [
  {
    tag: "PROPRIETARY PRODUCTS & ECOSYSTEMS",
    title: "Building Next-Gen Digital Infrastructure for Modern India",
    subtitle:
      "Transforming higher education, campus operations, and student relocation through our integrated suite: Shikshasetu, CampusNeeds, and Settler.",
    ctaText: "Explore Products",
    ctaLink: "#products",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    stats: { primary: "3 Flagship Platforms", label: "EdTech, Campus Life & Relocation" },
  },
  {
    tag: "SPECIALIZED SERVICES & SECURITY",
    title: "Enterprise Technology, OWASP Defense & High-Impact Upskilling",
    subtitle:
      "Empowering enterprises and student innovators with Pravah digital engineering, NexonAcademy cohorts, and industry-grade application security.",
    ctaText: "Discover Services",
    ctaLink: "#services",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    stats: { primary: "Zero Vulnerability", label: "OWASP Certified Standards" },
  },
  {
    tag: "STRATEGIC INCUBATION & ALLIANCES",
    title: "Backed by MANIT & Strategic Industry Partnerships",
    subtitle:
      "Collaborating with elite institutions and industry champions including ROLTA, MANIT Incubation, and Government of India initiatives to accelerate nation-scale innovation.",
    ctaText: "View Alliances",
    ctaLink: "#alliances",
    badgeColor: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
    stats: { primary: "Premier Incubation", label: "MANIT Bhopal & ROLTA Alliance" },
  },
  {
    tag: "INVESTMENT & EXPANSION MILESTONE",
    title: "Incorporated as Pvt Ltd with 50K Seed Incubation Funding",
    subtitle:
      "A fast-growing technology powerhouse backed by capital, expanding our delivery network across Chennai, Bhopal, Agra, and Delhi NCR.",
    ctaText: "Read Investor Brief",
    ctaLink: "#investors",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    stats: { primary: "4 Delivery Hubs", label: "Chennai • Bhopal • Agra • Delhi NCR" },
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const active = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-purple-50/60 via-white to-purple-50/30">
      {/* Dynamic Ambient Glow Spheres (Purple & Indigo) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[450px] bg-purple-400/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-24 right-1/4 w-[450px] h-[400px] bg-indigo-300/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-pink-300/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf60a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf60a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Category Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border shadow-xs transition-all">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                  <span className="text-purple-800 tracking-wider uppercase font-semibold">
                    {active.tag}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  {active.title.split(" ").slice(0, 3).join(" ")}{" "}
                  <span className="purple-gradient-text">
                    {active.title.split(" ").slice(3, 6).join(" ")}
                  </span>{" "}
                  {active.title.split(" ").slice(6).join(" ")}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  {active.subtitle}
                </p>

                {/* CTA Buttons Group */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={active.ctaLink}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 hover:scale-[1.03] active:scale-95 transition-all group"
                  >
                    <span>{active.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#insights"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 text-purple-900 font-bold text-sm border border-purple-200 shadow-sm hover:bg-purple-50/80 hover:border-purple-300 transition-all"
                  >
                    <Play className="w-4 h-4 text-purple-600 fill-purple-600" />
                    <span>Watch Milestones</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls (01 / 04, Pause/Play, Prev/Next) */}
            <div className="pt-6 flex items-center gap-4 text-xs font-semibold text-slate-500 border-t border-purple-100">
              <span className="text-purple-900 font-bold text-sm font-mono tracking-wider">
                0{currentSlide + 1} <span className="text-slate-300">/</span> 0{HERO_SLIDES.length}
              </span>

              {/* Progress Line */}
              <div className="w-32 h-1.5 bg-purple-100 rounded-full overflow-hidden">
                <motion.div
                  key={currentSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: isPlaying ? "100%" : "50%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                />
              </div>

              {/* Play / Pause Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg hover:bg-purple-100 text-purple-700 transition-colors"
                title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              {/* Nav Arrows */}
              <div className="flex items-center gap-1 ml-auto">
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
                  }
                  className="p-1.5 rounded-full border border-purple-200 hover:bg-purple-100 text-purple-700 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="p-1.5 rounded-full border border-purple-200 hover:bg-purple-100 text-purple-700 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Main Feature Container */}
              <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-purple-100 p-6 sm:p-8 shadow-2xl shadow-purple-900/10 space-y-6">
                
                {/* Header with Live Status */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      YugNext Ecosystem Live
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                    Pvt. Ltd.
                  </span>
                </div>

                {/* Highlighted Ecosystem Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 hover:bg-purple-100/60 transition-colors">
                    <GraduationCap className="w-5 h-5 text-purple-700 mb-2" />
                    <div className="text-xs font-bold text-slate-900">Shikshasetu</div>
                    <div className="text-[11px] text-slate-500">Institutional EdTech</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 hover:bg-indigo-100/60 transition-colors">
                    <Building className="w-5 h-5 text-indigo-700 mb-2" />
                    <div className="text-xs font-bold text-slate-900">CampusNeeds</div>
                    <div className="text-[11px] text-slate-500">Student Marketplace</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-pink-50/70 border border-pink-100 hover:bg-pink-100/60 transition-colors">
                    <Sparkles className="w-5 h-5 text-pink-700 mb-2" />
                    <div className="text-xs font-bold text-slate-900">Settler</div>
                    <div className="text-[11px] text-slate-500">Relocation Portal</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 hover:bg-emerald-100/60 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-emerald-700 mb-2" />
                    <div className="text-xs font-bold text-slate-900">OWASP & Pravah</div>
                    <div className="text-[11px] text-slate-500">Zero Trust Security</div>
                  </div>
                </div>

                {/* Floating Metric Callout Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-600/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-purple-200 font-medium">Incubation & Capital</div>
                      <div className="text-2xl font-extrabold tracking-tight">₹50K+ Seeded</div>
                      <div className="text-[11px] text-purple-200 mt-0.5">MANIT Bhopal Supported</div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center font-bold text-lg">
                      🚀
                    </div>
                  </div>
                </div>

                {/* Alliances Quick Logos */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Strategic Alliances & Delivery:
                  </span>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span className="hover:text-purple-700">ROLTA</span>
                    <span className="text-purple-300">•</span>
                    <span className="hover:text-purple-700">MANIT</span>
                    <span className="text-purple-300">•</span>
                    <span className="hover:text-purple-700">Gov. of India</span>
                    <span className="text-purple-300">•</span>
                    <span className="hover:text-purple-700">NexonAcademy</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Global Impact & Proof-of-Scale Counters (TCS & HCLTech Inspired) */}
        <div className="mt-16 pt-10 border-t border-purple-100/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100">
            <div className="text-3xl font-extrabold text-purple-700">4</div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
              Delivery Hubs
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Chennai, Bhopal, Agra, Delhi NCR</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100">
            <div className="text-3xl font-extrabold text-purple-700">3+</div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
              Proprietary Platforms
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Shikshasetu, CampusNeeds, Settler</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100">
            <div className="text-3xl font-extrabold text-purple-700">4</div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
              Core Industries
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Education, Finance, Logistics, Health</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100">
            <div className="text-3xl font-extrabold text-purple-700">100%</div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
              Incorporated Entity
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Pvt Ltd Registered & Incubated</div>
          </div>
        </div>

      </div>
    </section>
  );
}
