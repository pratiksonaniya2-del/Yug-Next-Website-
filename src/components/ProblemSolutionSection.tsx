"use client";

import React from "react";
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle, Zap, MoveRight } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-20 lg:py-28 bg-[#070214] text-white relative overflow-hidden border-t border-purple-950/60">
      
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[350px] bg-rose-950/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[350px] bg-[#5d35e0]/20 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/[0.06] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-rose-300">THE REALITY</span>
            <span className="text-slate-500 font-mono">•</span>
            <span className="text-[#9d7df7] font-bold">THE EVOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            From Digital Frustration to <span className="text-[#9d7df7]">Real Possibility.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Being digital is no longer the advantage. Today, technology must solve actual problems and propel your organization forward.
          </p>
        </div>

        {/* 3-Part Grid: Left (Problem) | Center (The YugNext Stepping Man) | Right (Solution) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: THE PROBLEM ================= */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-950/40 text-rose-300 border border-rose-500/30 text-xs font-bold">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>THE PROBLEM</span>
              </div>
              <span className="text-xs font-mono text-slate-400 font-medium">YESTERDAY&apos;S APPROACH</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              Being Digital Is No Longer the Advantage.
            </h3>

            {/* Problem Card 1 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-rose-500/20 hover:border-rose-500/40 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-rose-400">01</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">STATIC PRESENCE</span>
              </div>
              <h4 className="text-base font-extrabold text-white">A website isn&apos;t enough.</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Static pages that simply sit on the web no longer capture attention or unlock real growth.
              </p>
            </div>

            {/* Problem Card 2 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-rose-500/20 hover:border-rose-500/40 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-rose-400">02</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">DISCONNECTED TOOLS</span>
              </div>
              <h4 className="text-base font-extrabold text-white">An app isn&apos;t enough.</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Software must actively connect workflows, users, and ecosystems at ground-level reality.
              </p>
            </div>

            {/* Problem Card 3 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-rose-500/20 hover:border-rose-500/40 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-rose-400">03</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">SUPERFICIAL METRICS</span>
              </div>
              <h4 className="text-base font-extrabold text-white">Having a social media page isn&apos;t enough.</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                True digital leadership comes from operational capability, real utility, and solving actual bottlenecks.
              </p>
            </div>

          </div>

          {/* ================= CENTER COLUMN: THE YUGNEXT MAN TRAVELING ================= */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-6 sm:py-8 lg:py-0 relative select-none">
            
            {/* Ambient Energy Glow */}
            <div className="absolute w-44 h-44 rounded-full bg-[#5d35e0]/30 blur-3xl pointer-events-none" />

            {/* The Traveling Man Container */}
            <div className="relative flex flex-col items-center space-y-4">
              
              {/* Directional Indicator Badge */}
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono font-bold text-[#9d7df7]">
                <span>MOVING FORWARD</span>
                <MoveRight className="w-3.5 h-3.5 text-[#5d35e0] animate-pulse" />
              </div>

              {/* The Official YugNext Split Emblem & Stepping Figure */}
              <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
                
                {/* Luminous Outer Aura */}
                <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-rose-500/20 via-[#5d35e0]/40 to-[#9d7df7]/30 blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* SVG Stepping Person Emblem */}
                <svg
                  width="110"
                  height="136"
                  viewBox="0 0 100 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 drop-shadow-[0_15px_35px_rgba(93,53,224,0.45)]"
                >
                  <defs>
                    <clipPath id="centerTravelingManClip">
                      <rect width="100" height="120" rx="26" />
                    </clipPath>
                    {/* Pulsing linear beam from Left (Dark) to Right (Violet) */}
                    <linearGradient id="travelBeam" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0e0738" />
                      <stop offset="50%" stopColor="#2e157d" />
                      <stop offset="100%" stopColor="#5d35e0" />
                    </linearGradient>
                  </defs>

                  <g clipPath="url(#centerTravelingManClip)">
                    {/* Left Half: Deep Midnight Indigo / Navy (The Problem / Origin) */}
                    <rect x="0" y="0" width="50" height="120" fill="#0e0738" />

                    {/* Right Half: Vibrant Royal Electric Violet (The Solution / Tomorrow) */}
                    <rect x="50" y="0" width="50" height="120" fill="#5d35e0" />

                    {/* Vertical Hairline Split Divider */}
                    <line x1="50" y1="0" x2="50" y2="120" stroke="#000000" strokeWidth="1" opacity="0.4" />

                    {/* Directional Motion Waves Behind Figure */}
                    <line x1="15" y1="35" x2="40" y2="35" stroke="#9d7df7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                    <line x1="60" y1="35" x2="85" y2="35" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                    <line x1="10" y1="85" x2="35" y2="85" stroke="#9d7df7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
                    <line x1="65" y1="85" x2="90" y2="85" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />

                    {/* --- THE YUGNEXT STEPPING PERSON --- */}
                    {/* Head: Centered Luminous White Circle */}
                    <circle cx="50" cy="32" r="11" fill="#ffffff" />

                    {/* Torso: Vertical Trunk */}
                    <rect x="47" y="44" width="6" height="26" rx="3" fill="#ffffff" />

                    {/* Left Arm: Stepping down-left (Soft Violet) */}
                    <line
                      x1="49"
                      y1="50"
                      x2="31"
                      y2="66"
                      stroke="#9d7df7"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Right Arm: Reaching down-right forward (Crisp Solid White) */}
                    <line
                      x1="51"
                      y1="50"
                      x2="69"
                      y2="66"
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Left Leg: Stepping forward from dark Problem side (Lavender #9d7df7) */}
                    <line
                      x1="48"
                      y1="68"
                      x2="33"
                      y2="95"
                      stroke="#9d7df7"
                      strokeWidth="6.5"
                      strokeLinecap="round"
                    />

                    {/* Right Leg: Stepping firmly into the Violet Solution side (Solid White) */}
                    <line
                      x1="52"
                      y1="68"
                      x2="67"
                      y2="95"
                      stroke="#ffffff"
                      strokeWidth="6.5"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>

              {/* Tagline Below Figure */}
              <div className="text-center space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#9d7df7] font-bold block">
                  STEP INTO TOMORROW
                </span>
                <span className="text-[9px] font-mono text-slate-400 block">
                  PROBLEM → SOLUTION
                </span>
              </div>

              {/* Mobile Directional Arrow */}
              <div className="lg:hidden flex items-center justify-center pt-2">
                <div className="w-8 h-8 rounded-full bg-[#5d35e0]/30 border border-[#5d35e0]/50 flex items-center justify-center text-white">
                  ↓
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: THE SOLUTION / THE APPROACH ================= */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#5d35e0]/30">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#9d7df7]" />
                <span>THE YUGNEXT SOLUTION</span>
              </div>
              <span className="text-xs font-mono text-slate-400 font-medium">WHAT COMES NEXT</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              Don&apos;t Just Go Digital. <span className="text-[#9d7df7]">Go Next.</span>
            </h3>

            {/* Solution Card 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-[#5d35e0]/30 hover:border-[#5d35e0] transition-colors space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9d7df7]" />
                  <h4 className="text-base font-extrabold text-white">Useful.</h4>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-bold">REAL PROBLEMS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Built around real bottlenecks. We identify ground-level friction before architecting code.
              </p>
            </div>

            {/* Solution Card 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-[#5d35e0]/30 hover:border-[#5d35e0] transition-colors space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9d7df7]" />
                  <h4 className="text-base font-extrabold text-white">Accessible.</h4>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-bold">EVERY SCALE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Designed for businesses beyond just the biggest players. High-grade digital capabilities for all.
              </p>
            </div>

            {/* Solution Card 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-[#5d35e0]/30 hover:border-[#5d35e0] transition-colors space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9d7df7]" />
                  <h4 className="text-base font-extrabold text-white">Responsive.</h4>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-bold">ADAPTIVE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Ready to adapt as the world changes. Agile foundations that scale with shifting market dynamics.
              </p>
            </div>

            {/* Solution Card 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-[#5d35e0]/30 hover:border-[#5d35e0] transition-colors space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9d7df7]" />
                  <h4 className="text-base font-extrabold text-white">Impactful.</h4>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-bold">REAL OUTCOMES</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Measured by what it enables, not just what it looks like. Real outcomes over vanity metrics.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Unifying Philosophy Callout Banner */}
        <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-[#0e0738] border border-[#5d35e0]/35 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9d7df7]">
              THE THINKING BEHIND YUGNEXT
            </span>
            <p className="text-base sm:text-lg text-white font-extrabold leading-snug">
              &ldquo;Technology should do more than exist. It should move you forward.&rdquo;
            </p>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              We don&apos;t build technology for the sake of technology. We build it to make what&apos;s next possible.
            </p>
          </div>

          <a
            href="#what-we-do"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5d35e0]/25 transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Explore How We Solve</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
