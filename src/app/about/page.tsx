"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YugNextLogo from "@/components/YugNextLogo";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Building2,
  MapPin,
  Clock,
  Award,
  Zap,
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
              <span>WHO WE ARE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Technology With a <span className="text-[#9d7df7]">Reason to Exist.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              The digital world is full of things that look impressive. We&apos;re more interested in things that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & The Difficult Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-snug">
                Asking the Difficult Questions Before Writing the Easy Code.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At Yugnext, we combine technology with an understanding of the people and industries we&apos;re building for.
              </p>
              
              <div className="space-y-4 pt-2">
                {[
                  { q: "What problem are we solving?", desc: "Never building for the vanity of technology. Grounding every sprint in real user friction." },
                  { q: "Who are we solving it for?", desc: "Designing for businesses and communities beyond just the deepest pockets." },
                  { q: "What would better look like?", desc: "Measuring true capability, efficiency, and real-world durability over superficial metrics." },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <h4 className="text-base font-extrabold text-[#5d35e0]">{item.q}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-[#0e0738] text-white">
                <span className="text-xs font-mono font-bold text-[#9d7df7] uppercase block mb-1">OUR CORE FORMULA</span>
                <p className="text-lg font-black text-white">Understand. Build. Improve. Move Forward. That&apos;s Yugnext.</p>
              </div>
            </div>

            {/* Right Card: Ambition Pillars */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5d35e0]">
                  THE AMBITION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                  Build things people need.<br />
                  Create things people remember.<br />
                  Move things forward.
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Yugnext is a technology-driven organisation working across software, digital solutions and products to solve problems that matter. We work with businesses, institutions and communities across industries — bringing together technology, people and partnerships to create meaningful outcomes.
                </p>
              </div>

              {/* Corporate Identity Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">ROC REGISTERED</span>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5">21 Oct 2026</p>
                  <p className="text-[11px] text-slate-500">Yugnext Private Limited</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">INCUBATION HUB</span>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5">MANIT Bhopal</p>
                  <p className="text-[11px] text-slate-500">Seed Grant Backed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Nodes Bar */}
          <div className="p-8 rounded-3xl bg-[#0a0422] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono font-bold text-[#9d7df7] uppercase tracking-wider">
                OUR DELIVERY ARTERIES
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                CHENNAI · BHOPAL · AGRA
              </h3>
              <p className="text-xs text-slate-300 font-light">
                Different cities. Different talent. One direction: Forward.
              </p>
            </div>

            <div className="flex gap-3">
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
      </section>

      <Footer />
    </main>
  );
}
