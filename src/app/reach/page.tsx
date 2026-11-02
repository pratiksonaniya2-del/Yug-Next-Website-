"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle,
  Globe2,
  Zap,
} from "lucide-react";

export default function ReachPage() {
  const [activeCity, setActiveCity] = useState("BHOPAL");

  const NODES = [
    {
      city: "BHOPAL",
      state: "Madhya Pradesh",
      badge: "Corporate HQ & MANIT Incubation",
      lead: "The birthplace and governing nucleus of YugNext Private Limited.",
      description: "Located within the Maulana Azad National Institute of Technology (MANIT), our Bhopal HQ oversees corporate compliance, product incubations, institutional partnerships, and core R&D sprints.",
      specs: [
        "ROC Registration: 21 Oct 2026",
        "MANIT Incubation Seed Support",
        "Executive Leadership & Governance",
        "Institutional Alliance Cell",
      ],
      color: "#5d35e0",
    },
    {
      city: "CHENNAI",
      state: "Tamil Nadu",
      badge: "Deep Tech & Cloud Systems Node",
      lead: "Engineering resilient, high-concurrency cloud software architectures.",
      description: "Our Chennai engineering cluster focuses on building distributed web platforms, zero-trust cybersecurity implementations, and automated DevOps infrastructure for campus and enterprise products.",
      specs: [
        "Distributed Systems & APIs",
        "Cybersecurity & OWASP Hardening",
        "Full-Stack Web Engineering",
        "High-Availability Cloud SLAs",
      ],
      color: "#9d7df7",
    },
    {
      city: "PUNE",
      state: "Maharashtra",
      badge: "Enterprise Solutions & Scaled Delivery",
      lead: "Bridging cutting-edge technology with real enterprise workflows.",
      description: "Situated in India's premier IT corridor, the Pune delivery node works closely with commercial partners, delivering client solutions, rapid prototyping, and scalable software rollout.",
      specs: [
        "Enterprise Digital Transformation",
        "Rapid Product Prototyping",
        "UI/UX Design Systems",
        "Client Success Operations",
      ],
      color: "#38bdf8",
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
            <span className="text-[#9d7df7] font-bold">NATIONWIDE REACH</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <MapPin className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>DISTRIBUTED DELIVERY NETWORK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              CHENNAI · BHOPAL · PUNE
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              Different cities. Different talent. One direction: <strong className="text-white">Forward.</strong> Operating an interconnected delivery network across key Indian tech hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Hub Deep-Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Node Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {NODES.map((n) => (
              <button
                key={n.city}
                onClick={() => setActiveCity(n.city)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCity === n.city
                    ? "bg-[#5d35e0] text-white shadow-md shadow-[#5d35e0]/25 scale-105"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                }`}
              >
                {n.city} NODE
              </button>
            ))}
          </div>

          {/* Active Node Detailed Card */}
          {NODES.filter((n) => n.city === activeCity).map((node) => (
            <div
              key={node.city}
              className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#5d35e0]">
                    {node.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                    {node.city}, {node.state}
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ACTIVE OPERATIONAL NODE</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-base sm:text-lg font-semibold text-slate-800 leading-snug">
                    {node.lead}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {node.description}
                  </p>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0e0738] text-white space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#9d7df7]">
                    NODE CAPABILITIES
                  </span>
                  <div className="space-y-2">
                    {node.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 text-[#9d7df7] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* All 3 Hubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {NODES.map((n) => (
              <div
                key={n.city}
                onClick={() => setActiveCity(n.city)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeCity === n.city
                    ? "bg-[#0e0738] text-white border-[#5d35e0] shadow-lg"
                    : "bg-white text-slate-900 border-slate-200 hover:border-[#5d35e0]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-black">{n.city}</h4>
                  <span className="text-xs font-mono opacity-60">NODE</span>
                </div>
                <p className="text-xs opacity-80 line-clamp-2">{n.lead}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
