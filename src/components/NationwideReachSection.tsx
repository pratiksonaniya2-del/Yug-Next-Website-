"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Building2, Globe2, ShieldCheck, Zap } from "lucide-react";

interface NodeInfo {
  city: string;
  role: string;
  state: string;
  description: string;
  tags: string[];
  lat: number;
  lng: number; // SVG viewBox coordinates
}

const HUBS: NodeInfo[] = [
  {
    city: "BHOPAL",
    state: "Madhya Pradesh",
    role: "Corporate HQ & Incubation Center",
    description: "Incubated and seed-funded by MANIT Bhopal innovation cell. Core operations, product governance, and institutional collaboration hub.",
    tags: ["Corporate HQ", "MANIT Incubation", "Govt. Alliances"],
    lat: 185,
    lng: 165,
  },
  {
    city: "CHENNAI",
    state: "Tamil Nadu",
    role: "Deep Tech & Engineering Node",
    description: "High-throughput cloud architecture, digital experience platforms, and distributed systems delivery node.",
    tags: ["Core Engineering", "Platform Dev", "Cloud Infra"],
    lat: 310,
    lng: 185,
  },
  {
    city: "PUNE",
    state: "Maharashtra",
    role: "Enterprise Solutions & Scaled Delivery",
    description: "Enterprise software integrations, rapid prototypes, and commercial partnership deployment desk.",
    tags: ["Enterprise Delivery", "Client Solutions", "Rapid Scaling"],
    lat: 220,
    lng: 140,
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

        {/* 2-Column Layout: Left Details + Right Interactive India Map */}
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

          {/* Right Column: High-Fidelity Vector Map of India */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative">
            
            <div className="w-full max-w-[420px] relative aspect-[4/5] flex items-center justify-center">
              
              {/* Map Outline SVG (Optimized India Silhouette) */}
              <svg
                viewBox="0 0 360 440"
                className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(93,53,224,0.25)] select-none"
              >
                <defs>
                  {/* Subtle Grid Pattern */}
                  <pattern id="gridPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.8" fill="#5d35e0" opacity="0.3" />
                  </pattern>
                  <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5d35e0" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#0e0738" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0a0422" stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {/* India Vector Outline */}
                <path
                  d="M175,22 C185,20 195,35 200,50 C205,65 198,78 205,90 C220,95 240,92 255,100 C270,110 285,125 280,140 C270,145 255,140 245,150 C240,165 245,185 240,200 C230,220 220,240 215,260 C210,285 200,315 190,340 C180,365 170,390 165,405 C160,395 152,370 145,345 C135,315 125,290 120,265 C115,245 110,230 115,210 C110,195 90,190 85,175 C80,160 95,150 100,140 C95,120 110,105 125,100 C135,95 150,90 155,75 C160,55 165,30 175,22 Z"
                  fill="url(#mapGlow)"
                  stroke="#5d35e0"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Background dotted fill inside map */}
                <path
                  d="M175,22 C185,20 195,35 200,50 C205,65 198,78 205,90 C220,95 240,92 255,100 C270,110 285,125 280,140 C270,145 255,140 245,150 C240,165 245,185 240,200 C230,220 220,240 215,260 C210,285 200,315 190,340 C180,365 170,390 165,405 C160,395 152,370 145,345 C135,315 125,290 120,265 C115,245 110,230 115,210 C110,195 90,190 85,175 C80,160 95,150 100,140 C95,120 110,105 125,100 C135,95 150,90 155,75 C160,55 165,30 175,22 Z"
                  fill="url(#gridPattern)"
                />

                {/* Network Interconnection Arteries (Bhopal <-> Chennai <-> Pune) */}
                <line x1="165" y1="185" x2="140" y2="220" stroke="#9d7df7" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="165" y1="185" x2="185" y2="310" stroke="#9d7df7" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="140" y1="220" x2="185" y2="310" stroke="#9d7df7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

                {/* City Pins */}
                {HUBS.map((hub) => {
                  const isSelected = activeHub.city === hub.city;
                  return (
                    <g
                      key={hub.city}
                      className="cursor-pointer group"
                      onClick={() => setActiveHub(hub)}
                    >
                      {/* Pulse Ring */}
                      <circle
                        cx={hub.lng}
                        cy={hub.lat}
                        r={isSelected ? "16" : "10"}
                        fill={isSelected ? "#5d35e0" : "#9d7df7"}
                        opacity="0.25"
                        className="animate-ping"
                      />
                      {/* Outer Ring */}
                      <circle
                        cx={hub.lng}
                        cy={hub.lat}
                        r={isSelected ? "9" : "6"}
                        fill={isSelected ? "#5d35e0" : "#0e0738"}
                        stroke={isSelected ? "#ffffff" : "#9d7df7"}
                        strokeWidth="2"
                      />
                      {/* Inner Dot */}
                      <circle
                        cx={hub.lng}
                        cy={hub.lat}
                        r="3"
                        fill="#ffffff"
                      />

                      {/* City Text Label */}
                      <text
                        x={hub.lng + 14}
                        y={hub.lat + 4}
                        fill={isSelected ? "#ffffff" : "#cbd5e1"}
                        fontSize="12"
                        fontWeight={isSelected ? "900" : "700"}
                        fontFamily="monospace"
                        className="tracking-wider select-none"
                      >
                        {hub.city}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Active Node Callout Card */}
              <div className="absolute bottom-2 left-2 right-2 p-3.5 rounded-xl bg-[#0e0738]/95 border border-[#5d35e0]/50 backdrop-blur-xl shadow-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#9d7df7] font-bold block">
                    ACTIVE NODE: {activeHub.city}
                  </span>
                  <span className="font-extrabold text-white text-xs sm:text-sm">
                    {activeHub.role}
                  </span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

            </div>

            <p className="text-[11px] font-mono text-slate-400 text-center mt-4">
              Click any node on the map to inspect hub capabilities
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
