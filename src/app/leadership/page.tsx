"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Users,
  Award,
  ShieldCheck,
  CheckCircle,
  Briefcase,
  MapPin,
  Code2,
} from "lucide-react";

export default function LeadershipPage() {
  const LEADERS = [
    {
      name: "Pratik & Core Founding Council",
      role: "Executive Governance & Engineering Direction",
      hub: "Bhopal (Corporate HQ)",
      bio: "Spearheading product architecture, strategic alliances with MANIT and ROLTA, and long-term company scaling.",
      focus: ["Enterprise Systems", "Institutional Alliances", "Product Vision"],
    },
    {
      name: "Distributed Systems Engineering Team",
      role: "Platform Architecture & Cloud Infrastructure",
      hub: "Chennai Delivery Node",
      bio: "High-throughput backend engineering, zero-trust security compliance, and real-time database synchronizations.",
      focus: ["Cloud Platforms", "Microservices", "Scalability"],
    },
    {
      name: "Product Design & Solutions Lab",
      role: "User Experience & Rapid Deployment",
      hub: "Pune Delivery Node",
      bio: "Human-centric interface design, customer discovery sprints, and rapid prototyping for campus & enterprise utilities.",
      focus: ["UI/UX Systems", "Design Systems", "Field Research"],
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
            <Link href="/about" className="hover:text-white transition-colors">WHO WE ARE</Link>
            <span>/</span>
            <span className="text-[#9d7df7] font-bold">LEADERSHIP &amp; TEAM</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <Users className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>THE BUILDERS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              People Who <span className="text-[#9d7df7]">Ask What&apos;s Next.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              Behind every product, partnership and idea is a team willing to question the obvious and build the possible. Meet the people shaping Yugnext and the direction we&apos;re taking it.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Showcase Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERS.map((ldr) => (
              <div
                key={ldr.name}
                className="rounded-3xl p-8 bg-slate-50 border border-slate-200 hover:border-[#5d35e0] hover:bg-white hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#5d35e0] px-2.5 py-1 rounded-md bg-[#5d35e0]/10">
                      LEADERSHIP NODE
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{ldr.hub}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">{ldr.name}</h3>
                  <p className="text-xs font-bold text-[#5d35e0]">{ldr.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">{ldr.bio}</p>

                  <div className="space-y-1 pt-3 border-t border-slate-200">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
                      CORE FOCUS AREAS:
                    </span>
                    {ldr.focus.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#5d35e0] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <span className="text-xs font-mono text-slate-400">YUGNEXT GOVERNANCE TEAM</span>
                </div>
              </div>
            ))}
          </div>

          {/* Culture Manifesto Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0738] text-white space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-[#9d7df7] uppercase">TEAM ETHOS</span>
              <h3 className="text-2xl sm:text-3xl font-black">How We Think &amp; Build</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                We believe in radical ownership. If something can be made simpler, faster, or more robust, we question the precedent and re-architect from ground reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <h5 className="font-extrabold text-white text-sm">Curiosity First</h5>
                <p className="text-xs text-slate-400 mt-1">Never stopping at &ldquo;that&apos;s how it is done.&rdquo;</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <h5 className="font-extrabold text-[#9d7df7] text-sm">Pure Execution</h5>
                <p className="text-xs text-slate-400 mt-1">Shipping reliable, scalable, production-grade code.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <h5 className="font-extrabold text-emerald-400 text-sm">Long-Term Ambition</h5>
                <p className="text-xs text-slate-400 mt-1">Building durable digital foundations for tomorrow.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5d35e0]/25 transition-all cursor-pointer"
              >
                <span>Join Our Engineering &amp; Leadership Ranks →</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
