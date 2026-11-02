"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Layers,
  Building2,
  CheckCircle,
  ShieldCheck,
  Zap,
  Globe2,
  Lock,
} from "lucide-react";

export default function ShikshaSathiPage() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const MODULES = [
    {
      title: "Connected Academic Infrastructure",
      description: "Unifies students, professors, department heads, and admin staff under a cohesive, real-time platform with zero data silos.",
      features: ["Real-time Course Registrations", "Dynamic Timetable Engine", "Multi-Campus Synchronization"],
    },
    {
      title: "Assessment & Exam Evaluation",
      description: "Automated examination scheduling, secure digital grading rubrics, and rapid grade sheet generation.",
      features: ["Anti-Tamper Transcript Logs", "Continuous Internal Assessment", "Automated Grade Averaging"],
    },
    {
      title: "Campus Lifecycle & Utility Suite",
      description: "Hostel allotment, library access, sports complex permissions, and event passes linked to a single student identity.",
      features: ["Single Sign-On (SSO) Campus ID", "Automated No-Dues Clearances", "Fee Gateway Integration"],
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
            <Link href="/services" className="hover:text-white transition-colors">PRODUCTS</Link>
            <span>/</span>
            <span className="text-[#9d7df7] font-bold">SHIKSHASATHI</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <GraduationCap className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>PROPRIETARY EDUCATION SUITE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              ShikshaSathi: <span className="text-[#9d7df7]">Technology Built to Solve Education.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              We believe the best products don&apos;t begin with: <strong className="text-white">&ldquo;What can we build?&rdquo;</strong> They begin with: <strong className="text-[#9d7df7]">&ldquo;What needs solving?&rdquo;</strong> Technology built around making education more connected, accessible and useful.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/#contact"
                className="px-8 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white font-extrabold text-sm shadow-lg shadow-[#5d35e0]/30 transition-all cursor-pointer"
              >
                Schedule an Institutional Demo →
              </Link>
              <a
                href="#ecosystem"
                className="px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                Explore Modules
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Deep Dive */}
      <section id="ecosystem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-[#5d35e0]">
              MODULAR ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Three Pillars of Unified Campus Operations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Engineered from first principles inside MANIT Bhopal to solve actual student &amp; administrative bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {MODULES.map((mod, i) => (
              <div
                key={mod.title}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5d35e0] hover:bg-white hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#5d35e0] text-white flex items-center justify-center font-bold text-lg">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{mod.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{mod.description}</p>
                <div className="space-y-1.5 pt-2 border-t border-slate-200">
                  {mod.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#5d35e0] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Related Products: Settler & Stealth */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-[#5d35e0]">ALSO FROM YUGNEXT LABS</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950">More Products in Our Solving Pipeline</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Settler */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#5d35e0]/10 text-[#5d35e0]">
                  PRACTICAL LIVING
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">Settler</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  A product focused on solving practical problems through technology. Smart accommodation matching, verified student housing, and effortless city relocation.
                </p>
                <div className="pt-2">
                  <Link href="/services" className="text-xs font-bold text-[#5d35e0] hover:text-[#4d28c8] flex items-center gap-1.5">
                    <span>Learn About Settler</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Stealth Project */}
              <div className="p-6 rounded-2xl bg-[#0e0738] text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-white/10 text-purple-200">
                    STEALTH INITIATIVE
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    LAUNCHING SOON
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-white">Next Venture</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Our upcoming enterprise product tackling autonomous workflow orchestration and decentralized verification systems.
                </p>
                <div className="pt-2">
                  <Link href="/#contact" className="text-xs font-bold text-[#9d7df7] hover:text-white flex items-center gap-1.5">
                    <span>Join Early Access Waitlist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
