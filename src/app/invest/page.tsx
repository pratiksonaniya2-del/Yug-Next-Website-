"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  Building2,
  ShieldCheck,
  CheckCircle,
  Award,
} from "lucide-react";

export default function InvestPage() {
  const HIGHLIGHTS = [
    {
      title: "MANIT Bhopal Seed Seeding",
      value: "₹50,000",
      description: "Grant funding approved by the institutional innovation cell of Maulana Azad National Institute of Technology.",
      tag: "Institutional Grant",
    },
    {
      title: "Incorporation Entity",
      value: "Pvt. Ltd.",
      description: "Incorporated on 21 October 2026 under the Registrar of Companies (ROC), Ministry of Corporate Affairs, India.",
      tag: "Corporate Status",
    },
    {
      title: "Product Runway",
      value: "Proprietary",
      description: "Active deployment of ShikshaSathi and pipeline rollout for Settler and stealth autonomous workflow engines.",
      tag: "IP Ownership",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-[#5d35e0] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-[#0a0422] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#5d35e0]/15 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-[#9d7df7] font-bold">INVESTORS</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <TrendingUp className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>INVESTOR RELATIONS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Backing The <span className="text-[#9d7df7]">Journey Ahead.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              Building for tomorrow takes more than an idea. It takes people willing to believe in the idea — and support the work required to turn it into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5d35e0] hover:bg-white hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all space-y-4"
              >
                <span className="text-[10px] font-mono font-bold uppercase text-[#5d35e0] px-2.5 py-1 rounded-md bg-[#5d35e0]/10">
                  {item.tag}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-slate-900">
                  {item.value}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Long-Term Ambition Section */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0738] text-white space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-[#9d7df7]">CAPITAL &amp; VISION</span>
              <h3 className="text-2xl sm:text-3xl font-black">Building With Long-Term Ambition</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Yugnext is building with sustainable capital efficiency. Supported by people and institutions who see the possibilities ahead in Education, Enterprise Software, and high-trust digital utilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-xs font-bold text-white block">Capital Discipline</span>
                <p className="text-[11px] text-slate-400">High engineering ROI with ground-reality deployments.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-xs font-bold text-[#9d7df7] block">Institutional Alliances</span>
                <p className="text-[11px] text-slate-400">Collaborating with ROLTA India and NIT campus ecosystems.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-xs font-bold text-emerald-400 block">PAN-India Scale</span>
                <p className="text-[11px] text-slate-400">Triple-node delivery across Chennai, Bhopal, and Agra.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5d35e0]/25 transition-all cursor-pointer"
              >
                <span>Request Investor Briefing →</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
