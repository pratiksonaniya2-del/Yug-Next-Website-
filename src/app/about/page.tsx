"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Building2,
  Award,
} from "lucide-react";

export default function AboutPage() {
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
            <span className="text-[#9d7df7] font-bold">ABOUT US</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>ABOUT YUGNEXT</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Technology should move things forward.
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              YUGNEXT is a technology company built around a simple belief: good technology is not defined by how complex it looks, but by how effectively it solves a problem.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We build digital experiences, custom software, and independent products that help businesses, institutions, and individuals move from ideas to meaningful outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* THE THINKING BEHIND WHAT WE BUILD */}
          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5d35e0]">
                PHILOSOPHY &amp; APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                THE THINKING BEHIND WHAT WE BUILD
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Problem */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-[#5d35e0] block">01 / CONTEXT</span>
                <h3 className="text-2xl font-black text-slate-900">The problem</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Too many good ideas remain difficult to execute. Businesses struggle with outdated processes, institutions need better digital systems, and people often have to work around technology that should be working for them.
                </p>
              </div>

              {/* Who we build for */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-[#5d35e0] block">02 / AUDIENCE</span>
                <h3 className="text-2xl font-black text-slate-900">Who we build for</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Businesses looking to strengthen their digital presence. Institutions seeking practical technology. People with problems worth solving. We work across different needs, but with one consistent focus: making technology genuinely useful.
                </p>
              </div>

              {/* What better looks like */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-[#5d35e0] block">03 / OUTCOME</span>
                <h3 className="text-2xl font-black text-slate-900">What better looks like</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Simpler processes. Better experiences. Systems that work as intended. Products that serve a purpose. Technology should make progress easier to achieve, not harder to manage.
                </p>
              </div>
            </div>
          </div>

          {/* OUR CORE FORMULA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0738] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9d7df7]">
                OUR CORE FORMULA
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
                Understand → Build → Evolve
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                We begin by understanding the problem, build around what actually matters, and keep improving through execution, feedback, and learning.
              </p>
              <p className="text-[#9d7df7] font-semibold text-sm">
                Not technology for the sake of technology. Work that has a reason to exist.
              </p>
            </div>
          </div>

          {/* THE AMBITION */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5d35e0]">
              LONG-TERM VISION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              THE AMBITION
            </h2>
            <p className="text-lg sm:text-xl font-bold text-slate-800">
              We are building YUGNEXT for the long term.
            </p>
            <p className="text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Our ambition is to develop a company known for the quality of its thinking, the usefulness of its products, and the reliability of its execution. To work across industries, build capabilities that last, and create technology with value beyond the first launch.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <p className="text-base sm:text-lg font-black text-slate-900">
                &ldquo;We are not here to build more for the sake of more. We are here to build better, and keep moving forward.&rdquo;
              </p>
            </div>
          </div>

          {/* THE FOUNDATIONS */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              THE FOUNDATIONS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-[#5d35e0] block">
                  ROC REGISTERED
                </span>
                <h4 className="text-xl font-black text-slate-900">
                  YUGNEXT PRIVATE LIMITED
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  21 October 2026
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-[#5d35e0] block">
                  INSTITUTIONAL ASSOCIATION
                </span>
                <h4 className="text-xl font-black text-slate-900">
                  MANIT Bhopal
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  Seed-grant-backed entrepreneurial journey
                </p>
              </div>
            </div>
          </div>

          {/* OUR DELIVERY GEOGRAPHIES */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0422] text-white space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#9d7df7] uppercase tracking-wider">
                  OUR DELIVERY GEOGRAPHIES
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  NCR · BHOPAL · AGRA
                </h3>
                <p className="text-sm text-slate-300 font-light">
                  Rooted in Bhopal. Registered in Agra. Building across geographies.
                </p>
                <p className="text-xs text-[#9d7df7] font-mono">
                  Different cities. Different challenges. One direction: Forward.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5d35e0]/25 transition-all cursor-pointer"
                >
                  Explore Services →
                </Link>
                <Link
                  href="/shikshasathi"
                  className="px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs sm:text-sm font-bold border border-white/20 transition-all cursor-pointer"
                >
                  Explore Products →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
