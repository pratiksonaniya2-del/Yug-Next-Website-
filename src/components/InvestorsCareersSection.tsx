"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Megaphone,
  GraduationCap,
  Percent,
  MapPin,
} from "lucide-react";

export default function InvestorsCareersSection() {
  return (
    <section className="py-20 bg-[#0A0818] text-[#EFEDFA] relative border-t border-[#2A2450] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6C3CE3]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ================= 1. TOP CONTAINER: INVEST IN COMPANY | SUPPORT COMMUNITY ================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#9B7BF0]" />
              <span>PARTNERSHIP &amp; CAPITAL ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Invest In Growth. <span className="text-[#9B7BF0]">Empower Campus Communities.</span>
            </h2>
            <p className="text-[#A79FCB] text-sm sm:text-base leading-relaxed font-light">
              Whether you are looking to invest in our proprietary tech platforms or sponsor high-energy college societies for brand publicity — here is how we partner.
            </p>
          </div>

          {/* 2 Side-by-Side Cards: INVEST IN COMPANY | SUPPORT COMMUNITY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* CARD 1: INVEST IN COMPANY */}
            <div id="investors" className="rounded-3xl p-8 sm:p-10 bg-[#12102A] border border-[#2A2450] shadow-xl flex flex-col justify-between space-y-6 group hover:border-[#6C3CE3]/60 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#181534] border border-[#2A2450] text-[#9B7BF0]">
                    EQUITY OR INTEREST
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#9B7BF0] transition-colors">
                  Invest in Company
                </h3>

                <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                  We are raising growth capital to accelerate our product suite (ShikshaSathi, Settler, CampusNeeds) and scale our enterprise delivery networks. In return, we offer investors attractive returns: <strong className="text-white">direct equity participation or competitive fixed interest yields</strong>.
                </p>

                {/* Return Structure Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#181534] border border-[#2A2450] space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <Percent className="w-4 h-4 text-emerald-400" />
                      <span>Equity or Interest</span>
                    </div>
                    <p className="text-[11px] text-[#A79FCB]">
                      Flexible investor terms backed by institutional governance.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#181534] border border-[#2A2450] space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      <span>Pvt. Ltd. &amp; Seed Backed</span>
                    </div>
                    <p className="text-[11px] text-[#A79FCB]">
                      MANIT Bhopal seed grant &amp; ROC statutory compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2450]">
                <Link
                  href="/invest"
                  className="inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 transition-all cursor-pointer"
                >
                  <span>Explore Investment &amp; Terms →</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* CARD 2: SUPPORT COMMUNITY */}
            <div id="community" className="rounded-3xl p-8 sm:p-10 bg-[#12102A] border border-[#2A2450] shadow-xl flex flex-col justify-between space-y-6 group hover:border-[#6C3CE3]/60 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/15 text-pink-400 flex items-center justify-center font-bold">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#181534] border border-[#2A2450] text-pink-300">
                    SOCIETIES &amp; BRAND SPONSORSHIP
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-pink-300 transition-colors">
                  Support Community
                </h3>

                <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                  We help NGOs, societies, and event organizers secure funding and sponsorships for the initiatives we support through our services. In return, your brand gains <strong className="text-white">high-impact publicity, direct access to students and entrepreneurs, and credible visibility</strong> across educational institutions and business networks.
                </p>

                {/* Community Sponsorship Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#181534] border border-[#2A2450] space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <Megaphone className="w-4 h-4 text-pink-400" />
                      <span>Campus Brand Publicity</span>
                    </div>
                    <p className="text-[11px] text-[#A79FCB]">
                      On-ground banners, digital promotions &amp; event shoutouts.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#181534] border border-[#2A2450] space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                      <span>Societies &amp; Events</span>
                    </div>
                    <p className="text-[11px] text-[#A79FCB]">
                      Direct sponsorship channel for student clubs and events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2450]">
                <Link
                  href="/community"
                  className="inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 transition-all cursor-pointer"
                >
                  <span>Sponsor Societies &amp; Events →</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ================= 2. MIDDLE CONTAINER: CAREERS (INDEPENDENT FULL-WIDTH SECTION) ================= */}
        <div id="careers" className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#12102A] via-[#161236] to-[#12102A] border border-[#2A2450] shadow-2xl relative overflow-hidden group hover:border-[#6C3CE3]/60 transition-all">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6C3CE3]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2A2450]">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
                  <Briefcase className="w-3.5 h-3.5 text-[#9B7BF0]" />
                  <span>CAREERS AT YUGNEXT</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  Don&apos;t Just Work for the Future. <span className="text-[#9B7BF0]">Build It.</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                  We&apos;re looking for people who don&apos;t stop at: &ldquo;That&apos;s how it&apos;s done.&rdquo; We&apos;re looking for people who ask: &ldquo;What if we did it differently?&rdquo; Join a high-velocity team of creators across Chennai, Bhopal, Agra, and Remote.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>View All Open Positions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 4 Open Roles Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Full-Stack Software Engineer",
                  location: "Bhopal HQ / Hybrid",
                  tag: "Engineering",
                },
                {
                  title: "Cloud & Systems Architect",
                  location: "Chennai Hub / Remote",
                  tag: "Cloud Ops",
                },
                {
                  title: "Campus Lead & Growth Associate",
                  location: "MANIT Bhopal & NCR",
                  tag: "Campus",
                },
                {
                  title: "Product UI/UX Architect",
                  location: "Agra Innovation Lab",
                  tag: "Design",
                },
              ].map((role) => (
                <div
                  key={role.title}
                  className="p-5 rounded-2xl bg-[#181534] border border-[#2A2450] hover:border-[#6C3CE3] hover:bg-[#1E1942] transition-all flex flex-col justify-between space-y-3 group/role"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#9B7BF0] px-2 py-0.5 rounded bg-[#6C3CE3]/15 border border-[#6C3CE3]/30">
                        {role.tag}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">HIRING</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover/role:text-[#9B7BF0] transition-colors leading-snug">
                      {role.title}
                    </h4>
                    <p className="text-[11px] text-[#A79FCB] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#6C3CE3]" />
                      <span>{role.location}</span>
                    </p>
                  </div>

                  <Link
                    href="/careers"
                    className="pt-2 border-t border-[#2A2450] text-[11px] font-bold text-[#9B7BF0] hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span>Apply for role</span>
                    <ArrowRight className="w-3 h-3 group-hover/role:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom Culture & Hubs Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A79FCB] border-t border-[#2A2450]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-white">Culture:</span>
                <span className="px-2.5 py-1 rounded-md bg-[#181534] border border-[#2A2450]">High Ownership</span>
                <span className="px-2.5 py-1 rounded-md bg-[#181534] border border-[#2A2450]">Merit Velocity</span>
                <span className="px-2.5 py-1 rounded-md bg-[#181534] border border-[#2A2450]">Cross-Disciplinary Depth</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#9B7BF0]">
                <span>Active Hubs:</span>
                <span className="font-bold text-white">BHOPAL · AGRA · NCR · Remote</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
