"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import IndiaMapSvg, { HubLocation } from "@/components/IndiaMapSvg";

export interface NodeInfo extends HubLocation {
  city: string;
  state: string;
  role: string;
  description: string;
  tags: string[];
  x: number;
  y: number;
}

const HUBS: NodeInfo[] = [
  {
    city: "BHOPAL",
    state: "Madhya Pradesh",
    role: "Corporate HQ & Incubation Center",
    description: "Incubated and seed-funded by MANIT Bhopal innovation cell. Core operations, product governance, and institutional collaboration hub.",
    tags: ["Corporate HQ", "MANIT Incubation", "Govt. Alliances"],
    x: 240,
    y: 460,
  },
  {
    city: "CHENNAI",
    state: "Tamil Nadu",
    role: "Deep Tech & Engineering Node",
    description: "High-throughput cloud architecture, digital experience platforms, and distributed systems delivery node.",
    tags: ["Core Engineering", "Platform Dev", "Cloud Infra"],
    x: 275,
    y: 665,
  },
  {
    city: "PUNE",
    state: "Maharashtra",
    role: "Enterprise Solutions & Scaled Delivery",
    description: "Enterprise software integrations, rapid prototypes, and commercial partnership deployment desk.",
    tags: ["Enterprise Delivery", "Client Solutions", "Rapid Scaling"],
    x: 165,
    y: 545,
  },
];

export default function NationwideReachSection() {
  const [activeHub, setActiveHub] = useState<NodeInfo>(HUBS[0]);

  return (
    <section id="reach" className="py-20 lg:py-28 bg-[#0a0422] text-white relative overflow-hidden border-t border-purple-950/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#5d35e0]/12 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
            <MapPin className="w-3.5 h-3.5 text-[#9d7df7]" />
            <span>NATIONWIDE REACH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Growing <span className="text-[#9d7df7]">Delivery Network</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Different cities. Different talent. One direction: <strong className="text-white">Forward.</strong> Connecting key technology clusters across India to deliver resilient, high-impact digital experiences.
          </p>
        </div>

        {/* 2-Column Layout: Left Details + Right Exact India Vector Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Delivery Hub Cards & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              {HUBS.map((hub) => {
                const isActive = activeHub.city === hub.city;
                return (
                  <div
                    key={hub.city}
                    onClick={() => setActiveHub(hub)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#5d35e0]/20 border-[#5d35e0] shadow-lg shadow-[#5d35e0]/20 scale-[1.01]"
                        : "bg-white/[0.04] border-white/10 hover:border-[#5d35e0]/50 hover:bg-white/[0.07]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full ${isActive ? "bg-[#5d35e0] ring-4 ring-[#9d7df7]/40" : "bg-slate-500"}`} />
                        <div>
                          <h4 className="text-lg font-black text-white flex items-center gap-2">
                            {hub.city}
                            <span className="text-xs font-mono font-medium text-slate-400">({hub.state})</span>
                          </h4>
                          <p className="text-xs font-semibold text-[#9d7df7]">{hub.role}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400">NODE 0{HUBS.indexOf(hub) + 1}</span>
                    </div>

                    <p className="text-xs text-slate-300 mt-3 leading-relaxed font-light">
                      {hub.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {hub.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.08] text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strategic Stats Pill Box */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0e0738] border border-white/10 text-center">
              <div>
                <span className="text-xl sm:text-2xl font-black text-white block">3</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">Strategic Hubs</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#9d7df7] block">MANIT</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">Incubated Base</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 block">100%</span>
                <span className="text-[10px] font-mono uppercase text-slate-400">PAN-India Reach</span>
              </div>
            </div>

            {/* CTA Button to Dedicated Page */}
            <div>
              <Link
                href="/reach"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5d35e0]/25 transition-all cursor-pointer"
              >
                <span>Explore Full Nationwide Network Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Exact High-Fidelity Vector Map of India */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden">
            
            <div className="w-full max-w-[480px] relative flex items-center justify-center p-2">
              
              {/* The Exact Geographic India SVG Map Component */}
              <IndiaMapSvg
                hubs={HUBS}
                activeCity={activeHub.city}
                onSelectCity={(city) => {
                  const target = HUBS.find((h) => h.city === city);
                  if (target) setActiveHub(target);
                }}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
