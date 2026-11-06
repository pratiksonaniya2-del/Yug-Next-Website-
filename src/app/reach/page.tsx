"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function ReachPage() {
  const NODES = [
    {
      city: "BHOPAL",
      state: "Madhya Pradesh",
      badge: "Headquarters",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      description: "Our primary base of operations, where YUGNEXT is built and managed.",
      specs: [
        "Primary Base of Operations",
        "Executive Leadership & Governance",
        "MANIT ROLTA Incubation Base",
        "Institutional Collaboration Hub",
      ],
    },
    {
      city: "AGRA",
      state: "Uttar Pradesh",
      badge: "Registered Office",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
      description: "Our company's registered office and an important part of our geographical presence.",
      specs: [
        "Company Registered Office",
        "Corporate & Legal Governance",
        "Northern Operations & Delivery",
        "Regional Client Operations",
      ],
    },
    {
      city: "CHENNAI",
      state: "Tamil Nadu",
      badge: "Project Presence",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      description: "A part of our growing geographical footprint, reflecting projects delivered beyond our primary base.",
      specs: [
        "Project Presence & Footprint",
        "Delivered Coaching & Institutional Web Systems",
        "Southern Institutional Reach",
        "Digital Solutions Delivery",
      ],
    },
  ];

  const [activeCity, setActiveCity] = useState("BHOPAL");
  const selectedNode = NODES.find((n) => n.city === activeCity) || NODES[0];

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
            <span className="text-[#9d7df7] font-bold">GEOGRAPHICAL PRESENCE</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <MapPin className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>GEOGRAPHICAL PRESENCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              One Company. Multiple Cities. Growing Reach.
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              YUGNEXT Private Limited is headquartered in Bhopal, with its registered office in Agra. Through projects and collaborations, our work extends across Bhopal, Agra, and Chennai, with an expanding presence across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Design Direction Card (as per user reference screenshot) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-sm space-y-10">
            <div className="space-y-2 pb-6 border-b border-slate-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                GEOGRAPHICAL PRESENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                One Company. Multiple Cities. Growing Reach.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Headquartered in Bhopal, registered in Agra, with projects extending across India.
              </p>
            </div>

            {/* 3 City Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
              {NODES.map((node) => (
                <div
                  key={node.city}
                  onClick={() => setActiveCity(node.city)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                    activeCity === node.city
                      ? "bg-white border-[#5d35e0] shadow-md ring-2 ring-[#5d35e0]/20"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      {node.city}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-medium">
                    {node.state}
                  </p>

                  <div className="pt-1">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${node.badgeColor}`}>
                      {node.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2">
                    {node.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Expanding Across India Footer Box */}
            <div className="pt-8 border-t border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="text-lg font-black text-slate-900">
                  Expanding Across India.
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                More cities. More collaborations. More opportunities. Building connections and delivering digital solutions across more cities in India.
              </p>
            </div>
          </div>

          {/* Detailed Selected City Capabilities */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#5d35e0]/10 text-[#5d35e0] border border-[#5d35e0]/20">
                <span>ACTIVE FOCUS • {selectedNode.city}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {selectedNode.city}, {selectedNode.state}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedNode.description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e0738] text-white w-full lg:w-96 space-y-3 shrink-0">
              <span className="text-[10px] font-mono font-bold uppercase text-[#9d7df7]">
                PRESENCE HIGHLIGHTS
              </span>
              <div className="space-y-2">
                {selectedNode.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-[#9d7df7] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
