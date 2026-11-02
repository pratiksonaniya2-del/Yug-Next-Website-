"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Sparkles, ShieldCheck, Zap, Briefcase } from "lucide-react";

export default function InvestorsCareersSection() {
  return (
    <section className="py-20 bg-[#0A0818] text-[#EFEDFA] relative border-t border-[#2A2450] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#6C3CE3]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#9B7BF0]" />
            <span>GROWTH & TALENT HORIZONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Backing The Journey. <span className="text-[#9B7BF0]">Building The Future.</span>
          </h2>
          <p className="text-[#A79FCB] text-sm sm:text-base leading-relaxed font-light">
            Whether you are looking to support our long-term ambition or build something extraordinary alongside us — explore our next steps.
          </p>
        </div>

        {/* 2 Side-by-Side Cards: INVESTORS | CAREERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: INVESTORS */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#12102A] border border-[#2A2450] shadow-xl flex flex-col justify-between space-y-6 group hover:border-[#6C3CE3]/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#181534] border border-[#2A2450] text-[#A79FCB]">
                  INVESTOR RELATIONS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#9B7BF0] transition-colors">
                Backing the Journey Ahead.
              </h3>

              <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                Building for tomorrow takes more than an idea. It takes people willing to believe in the idea — and support the work required to turn it into reality. Yugnext is building with long-term ambition, supported by people and institutions who see the possibilities ahead.
              </p>

              {/* Seed Record Badge */}
              <div className="p-4 rounded-xl bg-[#181534] border border-[#2A2450] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>MANIT Bhopal Seed Funding Backed</span>
                </div>
                <p className="text-[11px] text-[#A79FCB]">
                  Incubated under institutional governance with verified seed support and ROC incorporation.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2A2450]">
              <Link
                href="/invest"
                className="inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 transition-all cursor-pointer"
              >
                <span>View Investor &amp; Seeding Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: CAREERS */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#12102A] border border-[#2A2450] shadow-xl flex flex-col justify-between space-y-6 group hover:border-[#6C3CE3]/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#181534] border border-[#2A2450] text-[#A79FCB]">
                  OPEN POSITIONS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#9B7BF0] transition-colors">
                Don&apos;t Just Work for the Future. Build It.
              </h3>

              <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                We&apos;re looking for people who don&apos;t stop at: &ldquo;That&apos;s how it&apos;s done.&rdquo; We&apos;re looking for people who ask: &ldquo;What if we did it differently?&rdquo; People who are curious, take ownership, want to learn, and want to build.
              </p>

              {/* Roles Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Full-Stack Software Engineers",
                  "Product UI/UX Architects",
                  "AI & Systems Specialists",
                  "Institutional Growth Leads",
                ].map((role) => (
                  <span
                    key={role}
                    className="text-[11px] px-3 py-1 rounded-lg bg-[#181534] border border-[#2A2450] text-[#EFEDFA] font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#2A2450]">
              <Link
                href="/careers"
                className="inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 transition-all cursor-pointer"
              >
                <span>View Open Positions &amp; Culture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
