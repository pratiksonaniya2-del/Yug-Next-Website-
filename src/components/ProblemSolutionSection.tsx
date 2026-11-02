"use client";

import React from "react";
import { ArrowRight, Check, AlertCircle } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-20 lg:py-28 bg-[#070314] text-white relative border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.05] border border-white/10 text-slate-300">
            <span className="text-rose-400 font-bold">THE PROBLEM</span>
            <span className="text-slate-500 font-mono">→</span>
            <span className="text-[#9d7df7] font-bold">THE SOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Being Digital Is No Longer the Advantage. <span className="text-[#9d7df7]">Go Next.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Today, businesses need technology that actually works for them — technology that solves problems, creates better experiences and opens new possibilities.
          </p>
        </div>

        {/* 3-Column Layout: Left (Problem) | Center (Standing Man Striding Between) | Right (Solution) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ================= LEFT COLUMN: THE PROBLEM ================= */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-bold">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>01 • THE PROBLEM</span>
              </div>
              <span className="text-xs font-mono text-slate-400">WHERE MOST GET STUCK</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Being Digital Is No Longer the Advantage.
            </h3>

            {/* Problem Card 1 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-400/40 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-rose-400 font-mono">01</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">STATIC PRESENCE</span>
              </div>
              <h4 className="text-base font-extrabold text-white">A website isn&apos;t enough.</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Static pages that simply sit on the web no longer capture attention or unlock growth.
              </p>
            </div>

            {/* Problem Card 2 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-400/40 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-rose-400 font-mono">02</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">DISCONNECTED TOOLS</span>
              </div>
              <h4 className="text-base font-extrabold text-white">An app isn&apos;t enough.</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Software must actively connect workflows, users, and ecosystems at ground-level reality.
              </p>
            </div>

            {/* Problem Card 3 */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-400/40 transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-rose-400 font-mono">03</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">SURFACE METRICS</span>
              </div>
              <h4 className="text-base font-extrabold text-white">Having a social media page isn&apos;t enough.</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                True digital leadership comes from operational capability, real utility, and solving actual bottlenecks.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs font-mono text-rose-300/80 bg-rose-500/5 border border-rose-500/20 rounded-xl px-4 py-2.5">
                ← <span className="font-semibold text-rose-300">Left Side / Origin:</span> Rooted in the reality of what&apos;s holding businesses back.
              </p>
            </div>

          </div>

          {/* ================= CENTER COLUMN: ONLY THAT MAN (BRIDGING PROBLEM & SOLUTION) ================= */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-6 lg:py-0 select-none">
            
            {/* The Standalone YugNext Stepping Man */}
            <div className="relative flex flex-col items-center">
              
              {/* Standalone Pure Vector Stepping Figure */}
              <svg
                width="240"
                height="340"
                viewBox="0 0 240 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[200px] sm:w-[220px] lg:w-[240px] h-auto drop-shadow-md"
              >
                {/* Hairline Center Divider (Problem on left, Solution on right) */}
                <line
                  x1="120"
                  y1="15"
                  x2="120"
                  y2="285"
                  stroke="rgba(255, 255, 255, 0.18)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Left Side Label (Problem) */}
                <text
                  x="55"
                  y="28"
                  textAnchor="middle"
                  fill="#f43f5e"
                  fontSize="10"
                  fontWeight="800"
                  fontFamily="ui-monospace, monospace"
                  letterSpacing="1.5"
                >
                  PROBLEM
                </text>

                {/* Right Side Label (Solution) */}
                <text
                  x="185"
                  y="28"
                  textAnchor="middle"
                  fill="#9d7df7"
                  fontSize="10"
                  fontWeight="800"
                  fontFamily="ui-monospace, monospace"
                  letterSpacing="1.5"
                >
                  SOLUTION
                </text>

                {/* ---------------- THE YUGNEXT STEPPING MAN ---------------- */}
                {/* Head: Pure White Circle right at the center split */}
                <circle cx="120" cy="56" r="24" fill="#ffffff" />

                {/* Torso: Solid White Vertical Pillar centered on split */}
                <rect x="113" y="86" width="14" height="78" rx="7" fill="#ffffff" />

                {/* Left Arm: Angled down-left into the Problem zone (Lavender #8b61ff) */}
                <line
                  x1="115"
                  y1="102"
                  x2="58"
                  y2="152"
                  stroke="#8b61ff"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* Right Arm: Angled down-right forward into the Solution zone (Pure White #ffffff) */}
                <line
                  x1="125"
                  y1="102"
                  x2="182"
                  y2="152"
                  stroke="#ffffff"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* LEFT LEG: Planted firmly on the Left / Problem side (Lavender #8b61ff) */}
                <line
                  x1="115"
                  y1="160"
                  x2="60"
                  y2="255"
                  stroke="#8b61ff"
                  strokeWidth="16"
                  strokeLinecap="round"
                />

                {/* RIGHT LEG: Striding forward into the Right / Solution side (Pure White #ffffff) */}
                <line
                  x1="125"
                  y1="160"
                  x2="180"
                  y2="255"
                  stroke="#ffffff"
                  strokeWidth="16"
                  strokeLinecap="round"
                />

                {/* Foot Indicators */}
                {/* Left Foot: Grounded in Problem */}
                <circle cx="60" cy="255" r="3" fill="#8b61ff" />
                <text
                  x="60"
                  y="278"
                  textAnchor="middle"
                  fill="#8b61ff"
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="ui-monospace, monospace"
                >
                  [ LEFT LEG ]
                </text>

                {/* Right Foot: Stepping into Solution */}
                <circle cx="180" cy="255" r="3" fill="#ffffff" />
                <text
                  x="180"
                  y="278"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="ui-monospace, monospace"
                >
                  [ RIGHT LEG ]
                </text>

                {/* Baseline Brand Text */}
                <text
                  x="120"
                  y="314"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="13"
                  fontWeight="900"
                  letterSpacing="3.5"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  YUGNEXT
                </text>
                <text
                  x="120"
                  y="330"
                  textAnchor="middle"
                  fill="#9d7df7"
                  fontSize="8"
                  fontWeight="700"
                  letterSpacing="2"
                  fontFamily="ui-monospace, monospace"
                >
                  — STEP INTO TOMORROW —
                </text>
              </svg>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: THE SOLUTION ================= */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#5d35e0]/15 text-[#9d7df7] border border-[#5d35e0]/30 text-xs font-bold">
                <Check className="w-3.5 h-3.5 text-[#9d7df7]" />
                <span>02 • THE YUGNEXT SOLUTION</span>
              </div>
              <span className="text-xs font-mono text-slate-400">WHAT COMES NEXT</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Don&apos;t Just Go Digital. <span className="text-[#9d7df7]">Go Next.</span>
            </h3>

            {/* Solution Card 1 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#5d35e0] transition-colors space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#5d35e0] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <h4 className="text-base font-extrabold text-white">Useful.</h4>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-bold">REAL BOTTLENECKS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Built around real problems. We identify ground-level friction before architecting code.
              </p>
            </div>

            {/* Solution Card 2 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#5d35e0] transition-colors space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#5d35e0] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <h4 className="text-base font-extrabold text-white">Accessible.</h4>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-bold">ALL TIERS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Designed for businesses beyond just the biggest players. High-grade capability for every tier.
              </p>
            </div>

            {/* Solution Card 3 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#5d35e0] transition-colors space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#5d35e0] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <h4 className="text-base font-extrabold text-white">Responsive.</h4>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-bold">ADAPTIVE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Ready to adapt as the world changes. Agile foundations that scale with shifting market dynamics.
              </p>
            </div>

            {/* Solution Card 4 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#5d35e0] transition-colors space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#5d35e0] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <h4 className="text-base font-extrabold text-white">Impactful.</h4>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-bold">MEASURABLE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Measured by what it enables, not just what it looks like. Real outcomes over vanity metrics.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs font-mono text-purple-300/80 bg-[#5d35e0]/5 border border-[#5d35e0]/20 rounded-xl px-4 py-2.5">
                → <span className="font-semibold text-[#9d7df7]">Right Side / Destination:</span> Stepping into genuine utility and long-term momentum.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Unifying Philosophy Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0d0726] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Explore What We Do</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
