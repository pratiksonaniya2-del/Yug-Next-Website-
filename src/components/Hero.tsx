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
} from "lucide-react";
import { ModalType } from "./ContentCardModal";

interface HeroProps {
  onOpenModal: (modal: ModalType) => void;
}

type TabType = "code" | "ui" | "copy" | "analytics";

export default function Hero({ onOpenModal }: HeroProps) {
  // Active Workspace Tab
  const [activeTab, setActiveTab] = useState<TabType>("ui");
  const [promptInput, setPromptInput] = useState(
    "Create a modern responsive SaaS pricing card with monthly/yearly toggle"
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Preset prompts
  const PRESET_PROMPTS = [
    { label: "Generate SaaS pricing", tab: "ui" as TabType, prompt: "Create a modern responsive SaaS pricing card with monthly/yearly toggle" },
    { label: "Build ShikshaSathi portal", tab: "code" as TabType, prompt: "Build connected student education portal with real-time course analytics" },
    { label: "Design Pravaah analytics", tab: "analytics" as TabType, prompt: "Design high-velocity digital solutions telemetry dashboard" },
    { label: "Create Settler logistics card", tab: "copy" as TabType, prompt: "Generate high-converting copy for Settler student relocation tech" },
  ];

  // Mouse move listener for interactive aura
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 60FPS Animated Pink & Purple Grain / Halftone Shader Canvas
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

    let time = 0;

    // Grain texture generator
    const grainCanvas = document.createElement("canvas");
    grainCanvas.width = 160;
    grainCanvas.height = 160;
    const gctx = grainCanvas.getContext("2d");
    if (gctx) {
      const gimg = gctx.createImageData(160, 160);
      for (let i = 0; i < gimg.data.length; i += 4) {
        const val = Math.random() * 255;
        gimg.data[i] = val;
        gimg.data[i + 1] = val;
        gimg.data[i + 2] = val;
        gimg.data[i + 3] = 18; // Subtle grain density
      }
      gctx.putImageData(gimg, 0, 0);
    }

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // 1. Deep Cosmic Base
      ctx.fillStyle = "#070214";
      ctx.fillRect(0, 0, width, height);

      // 2. Harmonic Animated Pink & Purple Radial Gradients (Fluid Aura)
      const cx = width / 2;
      const cy = height * 0.35;

      // Orb 1: Radiant Fuchsia / Pink
      const ox1 = cx + Math.sin(time * 0.9) * 180;
      const oy1 = cy + Math.cos(time * 1.1) * 80;
      const grad1 = ctx.createRadialGradient(ox1, oy1, 10, ox1, oy1, width * 0.5);
      grad1.addColorStop(0, "rgba(236, 72, 153, 0.28)"); // Vibrant Pink
      grad1.addColorStop(0.5, "rgba(217, 70, 239, 0.15)"); // Fuchsia
      grad1.addColorStop(1, "rgba(7, 2, 20, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Orb 2: Deep Electric Violet / Purple
      const ox2 = cx + Math.cos(time * 0.8) * 220;
      const oy2 = cy + Math.sin(time * 1.2) * 110;
      const grad2 = ctx.createRadialGradient(ox2, oy2, 10, ox2, oy2, width * 0.45);
      grad2.addColorStop(0, "rgba(168, 85, 247, 0.32)"); // Purple
      grad2.addColorStop(0.6, "rgba(99, 102, 241, 0.12)"); // Indigo
      grad2.addColorStop(1, "rgba(7, 2, 20, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Orb 3: Center Highlight Glow
      const gradCenter = ctx.createRadialGradient(cx, cy, 20, cx, cy, width * 0.35);
      gradCenter.addColorStop(0, "rgba(244, 114, 182, 0.22)");
      gradCenter.addColorStop(0.7, "rgba(147, 51, 234, 0.1)");
      gradCenter.addColorStop(1, "rgba(7, 2, 20, 0)");
      ctx.fillStyle = gradCenter;
      ctx.fillRect(0, 0, width, height);

      // 3. Halftone Grain / Pattern Overlay
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
    }, 900);
  };

  const handleSelectPreset = (preset: typeof PRESET_PROMPTS[0]) => {
    setPromptInput(preset.prompt);
    setActiveTab(preset.tab);
    handleGenerate();
  };

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-[#070214] text-white flex flex-col items-center justify-between overflow-hidden pt-12 sm:pt-16 pb-0">
      
      {/* 1. 60FPS Animated Pink & Purple Grain Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Delicate Halftone Dot Matrix Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(244, 114, 182, 0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 3. Central Ambient Glow Halo */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-pink-500/20 via-purple-600/25 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
        }}
      />

      {/* 4. MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-8">
        
        {/* Top Pill Badge: ✨ AI Studio 2.0 • Build, Design & Ship in Seconds > */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center"
        >
          <button
            onClick={() => onOpenModal("products")}
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-pink-400/30 hover:border-pink-400/60 text-white text-xs sm:text-sm font-medium backdrop-blur-2xl shadow-xl shadow-purple-950/40 transition-all cursor-pointer"
          >
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-[10px] shadow-sm">
              <Sparkles className="w-3 h-3 animate-pulse" />
            </span>
            <span className="font-extrabold tracking-wide text-white">AI Studio 2.0</span>
            <span className="text-pink-300 font-mono">•</span>
            <span className="text-purple-200 group-hover:text-white transition-colors">
              Build, Design &amp; Ship in Seconds
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-pink-300 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Display Headline: Create apps, copy & designs with Intelligent AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.08] text-white max-w-5xl mx-auto">
            Create apps, copy &amp; designs with{" "}
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent underline decoration-pink-500/40 decoration-wavy decoration-2">
              Intelligent AI.
            </span>
          </h1>

          {/* Sub-paragraph */}
          <p className="text-sm sm:text-lg md:text-xl text-purple-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            The all-in-one AI workspace for creators, developers, and founders. Generate production-ready code, polished UI components, and high-converting copy in seconds.
          </p>
        </motion.div>

        {/* Dual Action Buttons: Start Creating Free → | ▶ Watch 1-Min Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 pt-1"
        >
          {/* Primary CTA: Start Creating Free */}
          <button
            onClick={() => onOpenModal("whatWeDo")}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 hover:from-purple-600 hover:via-fuchsia-500 hover:to-pink-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-900/50 hover:shadow-2xl hover:shadow-pink-600/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
          >
            <span>Start Creating Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Watch 1-Min Demo */}
          <button
            onClick={() => setVideoModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold text-sm sm:text-base border border-purple-300/30 hover:border-purple-300/60 backdrop-blur-xl shadow-lg transition-all cursor-pointer active:scale-95 group"
          >
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
            </span>
            <span>Watch 1-Min Demo</span>
          </button>
        </motion.div>

        {/* Social Proof / Rating: Overlapping Avatars + 5 Stars + 50,000+ creators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 pt-1 pb-4"
        >
          {/* Overlapping User Avatars */}
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
                alt="Community member"
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

          {/* Metric Copy */}
          <span className="text-xs sm:text-sm text-purple-200/90 font-medium">
            Rated <span className="font-extrabold text-white">4.9/5</span> by <span className="text-pink-300 font-semibold">50,000+</span> creators &amp; developers
          </span>
        </motion.div>

      </div>

      {/* 5. LIVE INTERACTIVE AI WORKSPACE WINDOW (Lightswind AI Studio Style) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="rounded-t-[28px] sm:rounded-t-[36px] border-t border-x border-pink-500/30 bg-slate-950/85 backdrop-blur-2xl shadow-[0_-25px_80px_rgba(217,70,239,0.22)] overflow-hidden"
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
                Lightswind AI Studio • <span className="text-pink-400">Live Workspace</span>
              </span>
            </div>

            {/* Workspace Interactive Mode Tabs: </> Code | UI Design | Copy | Analytics */}
            <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-xl border border-white/[0.08]">
              <button
                onClick={() => setActiveTab("code")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "code"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Code</span>
              </button>

              <button
                onClick={() => setActiveTab("ui")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "ui"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>UI Design</span>
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
                <span>Copy</span>
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
                <span>Analytics</span>
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
                placeholder="Ask AI to generate any UI block, software code or copy..."
                className="w-full bg-transparent text-sm sm:text-base font-medium text-white placeholder:text-slate-400 outline-none"
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-pink-600/30 transition-all cursor-pointer whitespace-nowrap active:scale-95 disabled:opacity-50"
              >
                <span>{isGenerating ? "Generating..." : "Generate"}</span>
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
                className="absolute inset-0 z-30 bg-[#070214]/80 backdrop-blur-md flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full border-2 border-pink-500 border-t-transparent animate-spin" />
                <p className="text-sm font-mono font-bold text-pink-300 animate-pulse">
                  AI Synthesizing UI &amp; Code Architecture...
                </p>
              </motion.div>
            )}

            {/* TAB 1: UI DESIGN PLAYGROUND (SaaS Pricing Card Component) */}
            {activeTab === "ui" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.03] border border-pink-500/30 backdrop-blur-xl shadow-2xl relative"
              >
                {/* Popular Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md shadow-pink-500/40">
                  Most Popular
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Pro Studio</h3>
                    <p className="text-xs text-purple-200/80">For high-growth creators &amp; startups</p>
                  </div>
                  
                  {/* Monthly / Yearly Toggle */}
                  <div className="flex items-center bg-white/[0.08] p-0.5 rounded-full border border-white/[0.1] text-[10px] font-bold">
                    <button
                      onClick={() => setBillingPeriod("monthly")}
                      className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                        billingPeriod === "monthly" ? "bg-pink-600 text-white" : "text-slate-400"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingPeriod("yearly")}
                      className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                        billingPeriod === "yearly" ? "bg-pink-600 text-white" : "text-slate-400"
                      }`}
                    >
                      Yearly (-20%)
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 my-5">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {billingPeriod === "yearly" ? "$49" : "$59"}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ month, billed annually</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                  {[
                    "Unlimited AI UI component generations",
                    "Production React & Tailwind CSS exports",
                    "Interactive prototypes with Framer Motion",
                    "Domain-warping & animated grain shaders",
                    "Collaborative cloud workspace & presets",
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card CTA */}
                <button
                  onClick={() => onOpenModal("whatWeDo")}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-lg shadow-pink-600/30 transition-all cursor-pointer active:scale-95"
                >
                  Start Creating Now →
                </button>
              </motion.div>
            )}

            {/* TAB 2: CODE VIEW PLAYGROUND */}
            {activeTab === "code" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl rounded-2xl bg-[#0d0722] border border-purple-500/30 overflow-hidden text-left font-mono text-xs shadow-2xl"
              >
                {/* Code Editor Header */}
                <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-pink-300 font-bold">PricingCard.tsx</span>
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>

                {/* Syntax Highlighted Code Display */}
                <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed space-y-1 text-purple-200/90 font-mono">
                  <div><span className="text-pink-400">import</span> React, &#123; useState &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">&quot;react&quot;</span>;</div>
                  <div><span className="text-pink-400">import</span> &#123; motion &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">&quot;framer-motion&quot;</span>;</div>
                  <div className="text-slate-500">// AI-Generated production-ready pricing component with Tailwind CSS</div>
                  <div><span className="text-purple-400 font-bold">export default function</span> <span className="text-amber-300">PricingCard</span>() &#123;</div>
                  <div className="pl-4"><span className="text-pink-400">const</span> [billing, setBilling] = <span className="text-amber-300">useState</span>(<span className="text-emerald-300">&quot;yearly&quot;</span>);</div>
                  <div className="pl-4 text-pink-400">return (</div>
                  <div className="pl-8 text-cyan-300">&lt;<span className="text-pink-400">div</span> <span className="text-purple-300">className</span>=<span className="text-emerald-300">&quot;p-8 rounded-3xl bg-slate-950/80 border border-pink-500/30 backdrop-blur-xl shadow-2xl&quot;</span>&gt;</div>
                  <div className="pl-12 text-cyan-300">&lt;<span className="text-pink-400">h3</span> <span className="text-purple-300">className</span>=<span className="text-emerald-300">&quot;text-2xl font-black text-white&quot;</span>&gt;Pro Studio&lt;/<span className="text-pink-400">h3</span>&gt;</div>
                  <div className="pl-12 text-cyan-300">&lt;<span className="text-pink-400">span</span> <span className="text-purple-300">className</span>=<span className="text-emerald-300">&quot;text-5xl font-black text-white&quot;</span>&gt;&#123;billing === &quot;yearly&quot; ? &quot;$49&quot; : &quot;$59&quot;&#125;&lt;/<span className="text-pink-400">span</span>&gt;</div>
                  <div className="pl-8 text-cyan-300">&lt;/<span className="text-pink-400">div</span>&gt;</div>
                  <div className="pl-4 text-pink-400">);</div>
                  <div>&#125;</div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: COPY PLAYGROUND */}
            {activeTab === "copy" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-xl space-y-3.5 text-left"
              >
                {[
                  {
                    tag: "HERO HEADLINE (HIGH CONVERSION)",
                    text: "Create apps, copy & designs with Intelligent AI.",
                    metric: "98.4% Engagement Score",
                  },
                  {
                    tag: "ENTERPRISE VALUE HOOK",
                    text: "The Future Doesn't Wait. Neither Should Your Business. Build for what comes next with YugNext.",
                    metric: "Recommended for B2B & Founders",
                  },
                  {
                    tag: "SHIKSHASATHI EDTECH PITCH",
                    text: "Ideas are everywhere. Products that solve are rare. ShikshaSathi makes education connected & accessible.",
                    metric: "Target: Universities & Academics",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-1.5 hover:border-pink-400/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-pink-400 uppercase tracking-widest">
                        {item.tag}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold">{item.metric}</span>
                    </div>
                    <p className="text-sm font-semibold text-white">{item.text}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 4: ANALYTICS PLAYGROUND */}
            {activeTab === "analytics" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
              >
                <div className="p-5 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    INFERENCE VELOCITY
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">248 tok/s</span>
                    <span className="text-xs font-bold text-emerald-400">+34% faster</span>
                  </div>
                  <p className="text-xs text-purple-200/70">Hardware-accelerated token streaming across cluster.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    API LATENCY (P99)
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">12 ms</span>
                    <span className="text-xs font-bold text-emerald-400">Global edge</span>
                  </div>
                  <p className="text-xs text-purple-200/70">Chennai · Bhopal · Pune high-trust delivery network nodes.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    MODEL ACCURACY
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">99.8%</span>
                    <span className="text-xs font-bold text-pink-400">Enterprise SLA</span>
                  </div>
                  <p className="text-xs text-purple-200/70">Full TypeScript type safety and zero hallucinations.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.05] border border-pink-500/25 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    ACTIVE SESSIONS
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">50,000+</span>
                    <span className="text-xs font-bold text-emerald-400">Live now</span>
                  </div>
                  <p className="text-xs text-purple-200/70">Creators, developers, and institutions scaling daily.</p>
                </div>
              </motion.div>
            )}

          </div>

        </motion.div>
      </div>

      {/* 6. WATCH 1-MIN DEMO MODAL OVERLAY */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl rounded-3xl bg-[#0d0722] border border-pink-500/30 overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider">
                Lightswind AI Studio • 1-Minute Interactive Walkthrough
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black/60 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-pink-500/40">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-extrabold text-white">Experience AI Studio 2.0 In Action</h4>
                <p className="text-xs text-purple-200/70 max-w-md">
                  Watch how developers ship high-converting code, responsive UI, and enterprise digital solutions in seconds.
                </p>
              </div>
              <button
                onClick={() => {
                  setVideoModalOpen(false);
                  onOpenModal("whatWeDo");
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold shadow-lg"
              >
                Explore Full Platform →
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
