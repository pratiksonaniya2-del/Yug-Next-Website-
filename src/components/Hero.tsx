"use client";

import React, { useState, useEffect, useRef } from "react";
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
  
  // Real-time hover cursor coordinates for background animation
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, clientX: 0, clientY: 0 });
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Preset prompts tailored to YugNext's exact products & copy
  const PRESET_PROMPTS = [
    { label: "ShikshaSathi EdTech", tab: "ui" as TabType, product: "shikshasathi" as const, prompt: "Explore ShikshaSathi connected learning portal with accessible digital infrastructure" },
    { label: "CampusNeeds Platform", tab: "ui" as TabType, product: "campusneeds" as const, prompt: "Explore CampusNeeds digital approach to simplifying everyday student needs" },
    { label: "Settler Practical Living", tab: "ui" as TabType, product: "settler" as const, prompt: "Explore Settler technology solving practical relocation and housing challenges" },
    { label: "Pravaah Digital Solutions", tab: "code" as TabType, product: "shikshasathi" as const, prompt: "View Pravaah practical digital solutions and high-velocity microservices code" },
    { label: "The YugNext Approach", tab: "copy" as TabType, product: "shikshasathi" as const, prompt: "Review The YugNext Approach: Useful, Accessible, Responsive, Impactful" },
    { label: "Delivery Network & Hubs", tab: "analytics" as TabType, product: "shikshasathi" as const, prompt: "Inspect Chennai · Bhopal · Pune delivery network and MANIT alliance metrics" },
  ];

  // Mouse move listener for interactive hover spotlight and canvas turbulence
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 45,
        y: (e.clientY / window.innerHeight - 0.5) * 45,
        clientX: e.clientX,
        clientY: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 60FPS Animated Pink & Purple Grain + Cursor Turbulence Shader Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initial mouse centered
    mouseRef.current.x = width / 2;
    mouseRef.current.y = height * 0.35;
    mouseRef.current.targetX = width / 2;
    mouseRef.current.targetY = height * 0.35;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    // Procedural film grain noise canvas
    const grainCanvas = document.createElement("canvas");
    grainCanvas.width = 180;
    grainCanvas.height = 180;
    const gctx = grainCanvas.getContext("2d");
    if (gctx) {
      const gimg = gctx.createImageData(180, 180);
      for (let i = 0; i < gimg.data.length; i += 4) {
        const val = Math.random() * 255;
        gimg.data[i] = val;
        gimg.data[i + 1] = val;
        gimg.data[i + 2] = val;
        gimg.data[i + 3] = 22; // Analog dither intensity
      }
      gctx.putImageData(gimg, 0, 0);
    }

    const render = () => {
      time += 0.009;

      // Smooth lerp mouse coordinates for fluid hover turbulence
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
      const curMouseX = mouseRef.current.x;
      const curMouseY = mouseRef.current.y;

      ctx.clearRect(0, 0, width, height);

      // 1. Deep Cosmic Violet Base
      ctx.fillStyle = "#070214";
      ctx.fillRect(0, 0, width, height);

      // 2. Harmonic Ambient Fluid Orbs (Pink & Purple)
      const cx = width / 2;
      const cy = height * 0.35;

      // Orb 1: Radiant Fuchsia / Pink (Breathing sine wave)
      const ox1 = cx + Math.sin(time * 0.85) * 220;
      const oy1 = cy + Math.cos(time * 1.1) * 90;
      const grad1 = ctx.createRadialGradient(ox1, oy1, 20, ox1, oy1, width * 0.52);
      grad1.addColorStop(0, "rgba(236, 72, 153, 0.30)"); // Vibrant Pink
      grad1.addColorStop(0.5, "rgba(217, 70, 239, 0.16)"); // Fuchsia
      grad1.addColorStop(1, "rgba(7, 2, 20, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Orb 2: Deep Electric Purple / Indigo
      const ox2 = cx + Math.cos(time * 0.75) * 260;
      const oy2 = cy + Math.sin(time * 1.15) * 120;
      const grad2 = ctx.createRadialGradient(ox2, oy2, 20, ox2, oy2, width * 0.48);
      grad2.addColorStop(0, "rgba(168, 85, 247, 0.35)"); // Electric Purple
      grad2.addColorStop(0.55, "rgba(99, 102, 241, 0.14)"); // Indigo
      grad2.addColorStop(1, "rgba(7, 2, 20, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 3. REAL-TIME HOVER ANIMATION: Dynamic Cursor Turbulence Spotlight
      // Directly follows the user's mouse with an intense neon pink & violet illumination!
      const cursorSpotlight = ctx.createRadialGradient(curMouseX, curMouseY, 0, curMouseX, curMouseY, 440);
      cursorSpotlight.addColorStop(0, "rgba(244, 114, 182, 0.42)"); // Glowing Neon Pink center
      cursorSpotlight.addColorStop(0.32, "rgba(192, 132, 252, 0.24)"); // Violet halo
      cursorSpotlight.addColorStop(0.65, "rgba(147, 51, 234, 0.09)"); // Purple fringe
      cursorSpotlight.addColorStop(1, "rgba(7, 2, 20, 0)");
      ctx.fillStyle = cursorSpotlight;
      ctx.fillRect(0, 0, width, height);

      // 4. Interactive Halftone Dither Matrix with Cursor Warp Distortion
      const dotSpacing = 34;
      const cols = Math.ceil(width / dotSpacing);
      const rows = Math.min(Math.ceil(height / dotSpacing), 32);

      ctx.fillStyle = "rgba(244, 114, 182, 0.28)";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let px = c * dotSpacing;
          let py = r * dotSpacing;

          // Compute distance to moving cursor
          const dx = px - curMouseX;
          const dy = py - curMouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let radius = 1.1;
          let alpha = 0.18;

          // Cursor proximity turbulence & warp!
          if (dist < 260) {
            const warpStrength = (1 - dist / 260);
            px += (dx / dist) * warpStrength * 14;
            py += (dy / dist) * warpStrength * 14;
            radius = 1.1 + warpStrength * 2.2;
            alpha = 0.18 + warpStrength * 0.55;
          }

          ctx.fillStyle = `rgba(244, 114, 182, ${alpha})`;
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Atmospheric Analog Film Grain Overlay
      if (grainCanvas) {
        ctx.fillStyle = ctx.createPattern(grainCanvas, "repeat") || "transparent";
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
    <section className="relative min-h-screen bg-[#070214] text-white flex flex-col items-center justify-between overflow-hidden pt-10 sm:pt-14 pb-0">
      
      {/* 1. 60FPS Animated Pink & Purple Grain + Hover Cursor Turbulence Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Interactive CSS Mouse Spotlight Beam Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.clientX || 600}px ${mousePos.clientY || 350}px, rgba(236, 72, 153, 0.15), rgba(168, 85, 247, 0.08) 45%, transparent 70%)`,
        }}
      />

      {/* 3. Central Ambient Glow Halo with Mouse Parallax */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[460px] bg-gradient-to-tr from-pink-500/22 via-purple-600/28 to-indigo-600/18 rounded-full blur-[145px] pointer-events-none z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
        }}
      />

      {/* 4. MAIN HERO CONTENT CONTAINER (EXACT YUGNEXT WEBSITE COPY) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Top Pill Badge: ✨ YUGNEXT • STEP INTO TOMORROW > */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center"
        >
          <button
            onClick={() => onOpenModal("whatWeDo")}
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-pink-400/35 hover:border-pink-400/60 text-white text-xs sm:text-sm font-medium backdrop-blur-2xl shadow-xl shadow-purple-950/40 transition-all cursor-pointer"
          >
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-[10px] shadow-sm">
              <Sparkles className="w-3 h-3 animate-pulse" />
            </span>
            <span className="font-extrabold tracking-wider uppercase text-pink-300">YUGNEXT</span>
            <span className="text-pink-400 font-mono">•</span>
            <span className="text-purple-100 font-bold tracking-wide group-hover:text-white transition-colors">
              STEP INTO TOMORROW.
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-pink-300 group-hover:translate-x-0.5 transition-transform" />
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
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent underline decoration-pink-500/40 decoration-wavy decoration-2">
              Neither Should Your Business.
            </span>
          </h1>

          {/* Subtitle (Exact User Copy) */}
          <p className="text-sm sm:text-lg md:text-xl text-purple-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            The way people learn, buy, work and connect is changing. We build the technology, products and digital experiences that help businesses and organisations keep up — and move ahead. From software and digital solutions to products, partnerships and new ideas, Yugnext is building for what comes next.
          </p>
        </motion.div>

        {/* Dual Action Buttons: [ Explore What We Do → ] | [ Explore Products → ] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 pt-1"
        >
          {/* Primary CTA: Explore What We Do */}
          <button
            onClick={() => onOpenModal("whatWeDo")}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-600 hover:via-fuchsia-500 hover:to-pink-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-900/50 hover:shadow-2xl hover:shadow-pink-600/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
          >
            <span>Explore What We Do</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Explore Products */}
          <button
            onClick={() => onOpenModal("products")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold text-sm sm:text-base border border-purple-300/30 hover:border-purple-300/60 backdrop-blur-xl shadow-lg transition-all cursor-pointer active:scale-95 group"
          >
            <span className="w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-2.5 h-2.5 fill-pink-400 text-pink-400 ml-0.5" />
            </span>
            <span>Explore Products</span>
          </button>
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
                className="w-8 h-8 rounded-full border-2 border-[#070214] object-cover shadow-sm"
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
          <span className="text-xs sm:text-sm text-purple-200/90 font-medium">
            Strategic Delivery Network: <span className="text-pink-300 font-extrabold">CHENNAI · BHOPAL · PUNE</span> • Alliances with <span className="font-bold text-white">ROLTA, MANIT &amp; Nexan</span>
          </span>
        </motion.div>

      </div>

      {/* 5. LIVE INTERACTIVE AI WORKSPACE WINDOW (LIGHTSWIND STYLE WITH YUGNEXT CONTENT) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="rounded-t-[28px] sm:rounded-t-[36px] border-t border-x border-pink-500/35 bg-slate-950/85 backdrop-blur-2xl shadow-[0_-25px_80px_rgba(217,70,239,0.22)] overflow-hidden"
        >
          
          {/* Mac OS Window Header */}
          <div className="px-4 sm:px-6 py-3.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between">
            
            {/* Window Dots & Workspace Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm shadow-rose-500/30" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90 shadow-sm shadow-amber-400/30" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/30" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 tracking-wide hidden sm:inline">
                YugNext Intelligent Systems • <span className="text-pink-400">Live Workspace</span>
              </span>
            </div>

            {/* Workspace Interactive Mode Tabs */}
            <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-xl border border-white/[0.08]">
              <button
                onClick={() => setActiveTab("ui")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "ui"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Products Showcase</span>
              </button>

              <button
                onClick={() => setActiveTab("code")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "code"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Architecture Code</span>
              </button>

              <button
                onClick={() => setActiveTab("copy")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "copy"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>The Approach</span>
              </button>

              <button
                onClick={() => setActiveTab("analytics")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "analytics"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Delivery Hubs</span>
              </button>
            </div>

          </div>

          {/* Interactive AI Prompt Input Bar */}
          <div className="p-4 sm:p-6 border-b border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent space-y-3">
            <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/[0.06] border border-pink-500/25 focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-500/20 transition-all shadow-inner">
              <Wand2 className="w-5 h-5 text-pink-400 shrink-0 ml-1.5 animate-pulse" />
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                placeholder="Ask or explore YugNext solutions (e.g. ShikshaSathi, CampusNeeds, Settler, Pravaah)..."
                className="w-full bg-transparent text-sm sm:text-base font-medium text-white placeholder:text-slate-400 outline-none"
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-pink-600/30 transition-all cursor-pointer whitespace-nowrap active:scale-95 disabled:opacity-50"
              >
                <span>{isGenerating ? "Synthesizing..." : "Explore"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Try Asking Preset Chips */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs pt-1 pb-1 scrollbar-none">
              <span className="text-[11px] font-mono text-slate-400 shrink-0 uppercase tracking-wider font-bold">
                Try asking:
              </span>
              {PRESET_PROMPTS.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => handleSelectPreset(preset)}
                  className="px-3 py-1 rounded-full bg-white/[0.06] hover:bg-pink-500/20 border border-white/[0.1] hover:border-pink-400/40 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer whitespace-nowrap text-xs"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC INTERACTIVE PLAYGROUND OUTPUT */}
          <div className="p-4 sm:p-8 min-h-[380px] sm:min-h-[440px] flex items-center justify-center relative bg-gradient-to-b from-[#0c051f]/80 to-[#070214]">
            
            {/* Loading Indicator */}
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-30 bg-[#070214]/85 backdrop-blur-md flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full border-2 border-pink-500 border-t-transparent animate-spin" />
                <p className="text-sm font-mono font-bold text-pink-300 animate-pulse">
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
                className="w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.03] border border-pink-500/30 backdrop-blur-xl shadow-2xl relative space-y-6"
              >
                {/* Product Switcher Pills */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400">
                      PROPRIETARY PRODUCTS
                    </span>
                  </div>

                  <div className="flex items-center bg-white/[0.06] p-1 rounded-full border border-white/[0.08] text-xs font-bold">
                    <button
                      onClick={() => setActiveProductView("shikshasathi")}
                      className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                        activeProductView === "shikshasathi" ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      ShikshaSathi
                    </button>
                    <button
                      onClick={() => setActiveProductView("campusneeds")}
                      className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                        activeProductView === "campusneeds" ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      CampusNeeds
                    </button>
                    <button
                      onClick={() => setActiveProductView("settler")}
                      className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                        activeProductView === "settler" ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white" : "text-slate-400 hover:text-white"
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
                      <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">ShikshaSathi</h3>
                        <p className="text-xs text-purple-200">Connected, accessible and useful education technology</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      Technology built around making education more connected, accessible and useful. We believe the best products don&apos;t begin with &ldquo;What can we build?&rdquo; They begin with &ldquo;What needs solving?&rdquo;
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-pink-300 block">Connected Learning</span>
                        <span className="text-[11px] text-slate-400">Student &amp; faculty ecosystem</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-purple-300 block">Accessible Cloud</span>
                        <span className="text-[11px] text-slate-400">High-uptime digital infra</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-emerald-300 block">Verified Outcomes</span>
                        <span className="text-[11px] text-slate-400">Empowering institutions</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenModal("products")}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-pink-600/30 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                    >
                      Explore ShikshaSathi →
                    </button>
                  </div>
                )}

                {/* CampusNeeds View */}
                {activeProductView === "campusneeds" && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">CampusNeeds</h3>
                        <p className="text-xs text-purple-200">Simplifying everyday needs across the campus ecosystem</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      A digital approach to simplifying everyday needs and experiences across the campus ecosystem. Designed to turn student necessities into a streamlined digital utility.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-pink-300 block">Campus Marketplace</span>
                        <span className="text-[11px] text-slate-400">Decentralized utilities</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-purple-300 block">Student Essentials</span>
                        <span className="text-[11px] text-slate-400">Direct on-demand access</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-emerald-300 block">Frictionless Living</span>
                        <span className="text-[11px] text-slate-400">Built for college hubs</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenModal("products")}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-purple-600/30 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                    >
                      Explore CampusNeeds →
                    </button>
                  </div>
                )}

                {/* Settler View */}
                {activeProductView === "settler" && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">Settler</h3>
                        <p className="text-xs text-purple-200">Solving practical relocation &amp; housing challenges through technology</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      A product focused on solving practical problems through technology. Smart accommodation matching, verified student housing, and effortless city relocation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-pink-300 block">Verified Stays</span>
                        <span className="text-[11px] text-slate-400">Direct landlord trust</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-purple-300 block">Smart Relocation</span>
                        <span className="text-[11px] text-slate-400">Zero broker hassle</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        <span className="font-bold text-emerald-300 block">Student Focused</span>
                        <span className="text-[11px] text-slate-400">Built for Chennai, Bhopal</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenModal("products")}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-pink-600/30 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
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
                className="w-full max-w-2xl rounded-2xl bg-[#0d0722] border border-purple-500/30 overflow-hidden text-left font-mono text-xs shadow-2xl"
              >
                {/* Code Header */}
                <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-pink-300 font-bold">PravaahSolutionsEngine.ts</span>
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>

                {/* Syntax Highlighted Code */}
                <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed space-y-1 text-purple-200/90 font-mono">
                  <div><span className="text-pink-400">import</span> &#123; YugNextEngine, DeliveryNode &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">&quot;@yugnext/pravaah-core&quot;</span>;</div>
                  <div><span className="text-pink-400">import</span> &#123; ShikshaSathi, CampusNeeds &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">&quot;@yugnext/products&quot;</span>;</div>
                  <div className="text-slate-500">// Enterprise delivery node architecture: CHENNAI · BHOPAL · PUNE</div>
                  <div><span className="text-purple-400 font-bold">export const</span> <span className="text-amber-300">YugNextSolutions</span> = <span className="text-pink-400">new</span> <span className="text-amber-300">YugNextEngine</span>(&#123;</div>
                  <div className="pl-4">hubs: [<span className="text-emerald-300">&quot;CHENNAI&quot;</span>, <span className="text-emerald-300">&quot;BHOPAL&quot;</span>, <span className="text-emerald-300">&quot;PUNE&quot;</span>],</div>
                  <div className="pl-4">alliances: [<span className="text-emerald-300">&quot;ROLTA&quot;</span>, <span className="text-emerald-300">&quot;MANIT&quot;</span>, <span className="text-emerald-300">&quot;NexanAcademy&quot;</span>],</div>
                  <div className="pl-4">mission: <span className="text-emerald-300">&quot;Build things people need. Create things people remember. Move things forward.&quot;</span>,</div>
                  <div className="pl-4">activeServices: [NexanAcademy, Pravaah, OWASP, PathfinderSchool],</div>
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
                <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-indigo-950/40 border border-pink-500/30">
                  <span className="text-[10px] font-mono font-bold text-pink-400 uppercase tracking-widest block mb-1">
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
                    className="p-3.5 rounded-xl bg-white/[0.05] border border-purple-500/25 flex items-center justify-between hover:border-pink-400/50 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-extrabold text-pink-300 mr-2">{item.title}</span>
                      <span className="text-xs text-slate-300 font-light">{item.desc}</span>
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
                <div className="p-5 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      DELIVERY NETWORK
                    </span>
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">CHENNAI · BHOPAL · PUNE</span>
                  </div>
                  <p className="text-xs text-purple-200/70">Different cities. Different talent. One direction: Forward.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      STRATEGIC ALLIANCES
                    </span>
                    <Shield className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">ROLTA · MANIT · Nexan</span>
                  </div>
                  <p className="text-xs text-purple-200/70">High-trust institutional partnerships multiplying technology-led impact.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      CORPORATE ENTITY
                    </span>
                    <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">YUGNEXT PVT. LTD.</span>
                  </div>
                  <p className="text-xs text-purple-200/70">Incorporated 21 Oct 2026 • Verified Registrar of Companies (ROC).</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      INSTITUTIONAL SEEDING
                    </span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">₹50,000 Seed Grant</span>
                  </div>
                  <p className="text-xs text-purple-200/70">Seed funding backed by MANIT Bhopal innovation council.</p>
                </div>
              </motion.div>
            )}

          </div>

        </motion.div>
      </div>

    </section>
  );
}
