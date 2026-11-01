"use client";

import React, { useState, useEffect, useRef } from "react";
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
  MapPin,
  TrendingUp,
  Award,
  CheckCircle2,
  Activity,
  Compass,
} from "lucide-react";

const STREAMS = [
  {
    id: "shikshasetu",
    code: "SYS-01",
    tag: "HIGHER EDTECH INFRASTRUCTURE",
    headline: "Supercharging Campuses with Shikshasetu",
    highlight: "Shikshasetu",
    subtitle:
      "A unified digital bridge connecting universities, faculty, and scholars. Streamlines academic records, course tracking, fee reconciliation, and departmental communication at enterprise speed.",
    cta: "Launch Shikshasetu",
    ctaLink: "#products",
    icon: GraduationCap,
    gradient: "from-purple-400 via-fuchsia-300 to-indigo-300",
    glowColor: "rgba(168, 85, 247, 0.45)",
    metric: "10x Administrative Velocity",
    statLabel: "Automated Academic Workflows",
    features: [
      "Unified Student-Faculty Portal",
      "Automated Academic Ledger",
      "Institutional Cloud Governance",
    ],
  },
  {
    id: "campusneeds",
    code: "SYS-02",
    tag: "CAMPUS COMMERCE & UTILITIES",
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
    tag: "STUDENT LIVING & RELOCATION",
    headline: "Frictionless Living & Housing for Modern Scholars",
    highlight: "Living & Housing",
    subtitle:
      "Eliminating the stress of relocating for higher education. Settler provides verified student accommodations, algorithmic roommate matching, and digital deposit escrow across major delivery hubs.",
    cta: "Discover Settler",
    ctaLink: "#products",
    icon: Layers,
    gradient: "from-pink-400 via-purple-300 to-indigo-300",
    glowColor: "rgba(236, 72, 153, 0.45)",
    metric: "100% Verified Accommodations",
    statLabel: "Student Relocation & Living",
    features: [
      "Verified Student PGs & Apartments",
      "Smart Roommate Compatibility",
      "Digital Rental Agreements",
    ],
  },
  {
    id: "academy",
    code: "SYS-04",
    tag: "MANIT INCUBATION & TALENT",
    headline: "Engineering Elite Tech Talent with MANIT Backing",
    highlight: "Elite Tech Talent",
    subtitle:
      "Incubated at MANIT Bhopal with ₹50K seed funding. Powering NexonAcademy production engineering cohorts and Pathfinder School strategic career steering for tomorrow's architects.",
    cta: "Explore Talent Programs",
    ctaLink: "#services",
    icon: Sparkles,
    gradient: "from-cyan-400 via-purple-300 to-fuchsia-300",
    glowColor: "rgba(147, 51, 234, 0.5)",
    metric: "₹50K Seed Funded",
    statLabel: "MANIT Incubated & ROLTA Allied",
    features: [
      "Production-Grade Codebase Drills",
      "Pathfinder Career Steering",
      "Institutional Incubation (MANIT)",
    ],
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const active = STREAMS[activeIdx];
  const ActiveIcon = active.icon;

  // Auto-advance stream every 6.5s
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STREAMS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Track global mouse position for ambient spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3D Card Tilt handler
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setCardTilt({ rotateX, rotateY });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0 });
  };

  // HTML5 Interactive Particle & Neural Mesh Canvas Animation (60 FPS)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 18), 65);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.22;
            ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[94vh] lg:min-h-screen bg-[#050212] text-white flex flex-col justify-between overflow-hidden pt-6 pb-10 lg:pt-12 lg:pb-12">
      
      {/* 1. Interactive Neural Particle Canvas (Background Layer) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
      />

      {/* 2. Dynamic Mouse Follower Spotlight (Torch Glow Effect) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.15), transparent 70%)`,
        }}
      />

      {/* 3. Deep Atmospheric Velocity Halos */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[550px] sm:h-[800px] rounded-full blur-[180px] pointer-events-none transition-all duration-1000 z-0 animate-pulse-glow"
        style={{ background: active.glowColor }}
      />
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-purple-700/20 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* 4. Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,#000_65%,transparent_100%)]" />

      {/* Main Viewport Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full z-10">
        
        {/* Top Status Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-xs font-bold tracking-widest uppercase text-purple-300">
            <Zap className="w-3.5 h-3.5 text-purple-400 shrink-0 animate-pulse" />
            <span>SUPERCHARGING DIGITAL PROGRESS • YUGNEXT ECOSYSTEM</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-purple-300">
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>4 HUBS ACTIVE • 100% PVT LTD REGISTERED</span>
          </div>
        </div>

        {/* 2-Column Hero Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Kinetic Headline & Action */}
          <div className="lg:col-span-7 space-y-7">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="text-xs font-mono font-bold tracking-widest uppercase text-purple-400 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-purple-900/60 border border-purple-500/40 text-[10px] text-white">
                    {active.code}
                  </span>
                  <span>{active.tag}</span>
                </div>

                {/* Grand Headline */}
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
                <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                  {active.subtitle}
                </p>

                {/* Dual Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
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

            {/* Linear Velocity Timer & Controls */}
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
                  transition={{ duration: 6.5, ease: "linear" }}
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

          {/* Right Column: 3D Interactive Parallax Console */}
          <div className="lg:col-span-5" style={{ perspective: "1000px" }}>
            <motion.div
              animate={{
                rotateX: cardTilt.rotateX,
                rotateY: cardTilt.rotateY,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="relative group cursor-pointer"
            >
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-1 rounded-3xl blur-2xl opacity-50 transition-all duration-700 pointer-events-none"
                style={{ background: active.glowColor }}
              />

              {/* Main Frosted Tech Card */}
              <div className="relative rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 p-7 sm:p-9 shadow-2xl shadow-purple-950/80 space-y-6">
                
                {/* Console Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/40">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300">
                        ARCHITECTURE CORE
                      </div>
                      <div className="text-xl font-black text-white">{active.highlight}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </span>
                </div>

                {/* Dynamic Metric Display */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/80 via-indigo-950/80 to-purple-950/80 border border-purple-500/30 shadow-inner">
                  <div className="text-xs font-mono text-purple-300 font-semibold">{active.statLabel}</div>
                  <div className="text-3xl font-black text-white mt-1 tracking-tight">{active.metric}</div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/50 block">
                    Verified Capabilities:
                  </span>
                  {active.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Quick 4-Stream Interactive Selector Buttons */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2.5">
                    Direct Stream Select:
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {STREAMS.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveIdx(idx);
                          setIsPlaying(false);
                        }}
                        className={`py-2 px-1 rounded-xl text-center text-xs font-mono font-bold transition-all border ${
                          activeIdx === idx
                            ? "bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/50 scale-105"
                            : "bg-white/5 text-white/60 border-white/10 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        {item.code}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Bottom Proof-of-Scale Strip (Enterprise Credibility) */}
      <div className="relative mt-8 pt-6 border-t border-white/10 bg-white/[0.02] backdrop-blur-md z-10">
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
