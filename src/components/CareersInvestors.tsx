"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  FileText,
  Building2,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";

const POSITIONS = [
  {
    title: "Full-Stack Software Engineer (Next.js & TypeScript)",
    type: "Full-time",
    hub: "Bhopal HQ / Hybrid",
    dept: "Engineering (Shikshasetu & CampusNeeds)",
    experience: "1-3 Years / Freshers with live projects",
  },
  {
    title: "Application Security & OWASP Specialist",
    type: "Full-time",
    hub: "Chennai Hub / Remote",
    dept: "Cybersecurity Wing",
    experience: "1-4 Years",
  },
  {
    title: "Campus Ecosystem & Community Lead",
    type: "Full-time / Fellowship",
    hub: "MANIT Bhopal & Delhi NCR",
    dept: "Growth & Ekjut Chapter",
    experience: "Student Leaders / Campus Ambassadors",
  },
  {
    title: "Product Operations & Onboarding Specialist",
    type: "Full-time",
    hub: "Agra Innovation Lab",
    dept: "Settler Platform Ops",
    experience: "0-2 Years",
  },
];

export default function CareersInvestors() {
  const [filterRole, setFilterRole] = useState("all");

  return (
    <section id="careers" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* INVESTORS SECTION */}
        <div id="investors" className="rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-950 text-white p-8 sm:p-14 shadow-2xl shadow-purple-900/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-purple-200 border border-white/15">
                <TrendingUp className="w-3.5 h-3.5 text-purple-300" />
                <span>INVESTOR RELATIONS & GOVERNANCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                High-Growth Technology Ecosystem Backed by Real Assets
              </h2>

              <p className="text-sm sm:text-base text-purple-200 leading-relaxed font-normal">
                YugNext is structured for long-term value creation. Combining enterprise digital contracts with high-volume collegiate platforms (Shikshasetu, CampusNeeds, Settler), we possess direct access to university demographics and recurring institutional cash flows.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="text-2xl font-black text-white">₹50K+</div>
                  <div className="text-xs text-purple-300 mt-1 font-semibold">Seed Grant Backing</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="text-2xl font-black text-white">Pvt. Ltd.</div>
                  <div className="text-xs text-purple-300 mt-1 font-semibold">Oct 21, 2026 Incorporation</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="text-2xl font-black text-white">MANIT</div>
                  <div className="text-xs text-purple-300 mt-1 font-semibold">Incubation Partner</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-purple-900 text-xs sm:text-sm font-bold shadow-lg hover:bg-purple-50 transition-all"
                >
                  <FileText className="w-4 h-4 text-purple-700" />
                  <span>Request Investor Deck</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-purple-700/50 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all"
                >
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/15 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span>Investment Governance</span>
              </h3>
              <p className="text-xs text-purple-200 leading-relaxed">
                Full compliance with Ministry of Corporate Affairs (MCA) filings, board resolutions, and intellectual property assignments for our core platforms.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-purple-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Equity Structure & Cap Table</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Multi-Campus Distribution Moat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Diversified SaaS & Enterprise Revenue</span>
                </div>
              </div>

              <div className="p-3 bg-purple-800/40 rounded-xl text-[11px] text-purple-200 font-mono mt-3">
                Corporate Entity: YugNext Private Limited <br />
                Central HQ: Bhopal, Madhya Pradesh, India
              </div>
            </div>

          </div>
        </div>

        {/* CAREERS SECTION */}
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
                <Briefcase className="w-3.5 h-3.5" />
                <span>CAREERS AT YUGNEXT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Build the Future. <span className="purple-gradient-text">Shape the Next Era.</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Join a dynamic tribe of creators, hackers, and builders working across Bhopal, Chennai, Agra, and Delhi NCR. We empower bold thinking and merit-driven velocity.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-700 text-white font-bold text-xs sm:text-sm hover:bg-purple-800 shadow-md shadow-purple-600/25 transition-all self-start md:self-auto"
            >
              <span>Submit General Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Job Openings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POSITIONS.map((pos, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-purple-100 hover:border-purple-300 p-6 sm:p-7 shadow-lg shadow-purple-900/5 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                      {pos.dept}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{pos.type}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {pos.title}
                  </h3>

                  <div className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>Location: <strong>{pos.hub}</strong></span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>Experience: <strong>{pos.experience}</strong></span>
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Apply for this role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Active Hiring
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
