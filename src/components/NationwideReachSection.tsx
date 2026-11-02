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
    x: 212,
    y: 330,
  },
  {
    city: "AGRA",
    state: "Uttar Pradesh",
    role: "Enterprise Solutions & Scaled Delivery",
    description: "Regional development node, rapid prototyping, and scalable software rollout across Northern commercial corridors.",
    tags: ["Enterprise Delivery", "Regional Operations", "Rapid Scaling"],
    x: 198,
    y: 232,
  },
  {
    city: "CHENNAI",
    state: "Tamil Nadu",
    role: "Deep Tech & Engineering Node",
    description: "High-throughput cloud architecture, digital experience platforms, and distributed systems delivery node.",
    tags: ["Core Engineering", "Platform Dev", "Cloud Infra"],
    x: 247,
    y: 568,
  },
];

export default function NationwideReachSection() {
  const [activeHub, setActiveHub] = useState<NodeInfo>(HUBS[0]);

  return (
    <section id="reach" className="py-20 lg:py-28 bg-[#0A0818] text-[#EFEDFA] relative overflow-hidden border-t border-[#2A2450]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#6C3CE3]/12 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
            <MapPin className="w-3.5 h-3.5 text-[#9B7BF0]" />
            <span>NATIONWIDE REACH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Growing <span className="text-[#9B7BF0]">Delivery Network</span>
          </h2>
          <p className="text-[#A79FCB] text-sm sm:text-base leading-relaxed">
            Different cities. Different talent. One direction: <strong className="text-white">Forward.</strong> Connecting key technology clusters across India to deliver resilient, high-impact digital experiences.
          </p>
        </div>

        {/* 2-Column Layout: Left Details + Right Exact India Vector Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Delivery Hub Cards & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              {HUBS.map((hub) => {
                const isActive = activeHub.city === hub.city;
                return (
                  <div
                    key={hub.city}
                    onClick={() => setActiveHub(hub)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#6C3CE3]/20 border-[#6C3CE3] shadow-lg shadow-[#6C3CE3]/20 scale-[1.01]"
                        : "bg-[#12102A] border-[#2A2450] hover:border-[#6C3CE3]/50 hover:bg-[#181534]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full ${isActive ? "bg-[#6C3CE3] ring-4 ring-[#9B7BF0]/40" : "bg-[#A79FCB]/40"}`} />
                        <div>
                          <h4 className="text-lg font-black text-white flex items-center gap-2">
                            {hub.city}
                            <span className="text-xs font-mono font-medium text-[#A79FCB]">({hub.state})</span>
                          </h4>
                          <p className="text-xs font-semibold text-[#9B7BF0]">{hub.role}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#A79FCB]">NODE 0{HUBS.indexOf(hub) + 1}</span>
                    </div>

                    <p className="text-xs text-[#A79FCB] mt-3 leading-relaxed font-light">
                      {hub.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {hub.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#181534] border border-[#2A2450] text-[#EFEDFA]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strategic Stats Pill Box */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#12102A] border border-[#2A2450] text-center">
              <div>
                <span className="text-xl sm:text-2xl font-black text-white block">3</span>
                <span className="text-[10px] font-mono uppercase text-[#A79FCB]">Strategic Hubs</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#9B7BF0] block">MANIT</span>
                <span className="text-[10px] font-mono uppercase text-[#A79FCB]">Incubated Base</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 block">100%</span>
                <span className="text-[10px] font-mono uppercase text-[#A79FCB]">PAN-India Reach</span>
              </div>
            </div>

            {/* CTA Button to Dedicated Page */}
            <div>
              <Link
                href="/reach"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 transition-all cursor-pointer"
              >
                <span>Explore Full Nationwide Network Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Exact High-Fidelity Vector Map of India (Properly centered, full view, no cutoff) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-5 sm:p-7 rounded-3xl bg-[#12102A] border border-[#2A2450] shadow-xl">
            <div className="w-full max-w-[520px] flex items-center justify-center">
              {/* The Exact Geographic India SVG Map Component with full Kashmir crown and 3 nodes */}
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
