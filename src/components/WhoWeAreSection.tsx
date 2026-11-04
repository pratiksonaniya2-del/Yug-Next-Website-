"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  Globe2,
  ShieldCheck,
  CheckCircle,
  Briefcase,
  Award,
  Layers,
} from "lucide-react";

interface PillarData {
  id: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  stats: { value: string; label: string }[];
  route: string;
}

const PILLARS: PillarData[] = [
  {
    id: "industries",
    label: "INDUSTRIES",
    title: "Different Industries. Different Problems. One Common Need.",
    tagline: "Technology changes from industry to industry. The need for better solutions doesn't.",
    description: "We architect targeted solutions across Education, Finance, and Logistics — and wherever there is a meaningful bottleneck to solve.",
    bullets: [
      "Education: Digital initiatives for interconnected modern learning.",
      "Finance: Trust, velocity, and accessibility-first digital services.",
      "Logistics: Smarter connected movement of people and physical goods.",
    ],
    stats: [
      { value: "3+", label: "Key Verticals" },
      { value: "100%", label: "Domain Tailored" },
    ],
    route: "/industries",
  },
  {
    id: "leadership",
    label: "LEADERSHIP & TEAM",
    title: "People Who Ask What's Next.",
    tagline: "Questioning the obvious. Building what's possible.",
    description: "Behind every product, partnership and idea is a multidisciplinary team of engineers, designers, and domain thinkers shaping YugNext's direction.",
    bullets: [
      "Asking the difficult questions before writing the easy code.",
      "Undergraduate and alumni engineering leaders from MANIT Bhopal.",
      "Cross-functional execution across NCR, Bhopal, and Agra.",
    ],
    stats: [
      { value: "10+", label: "Core Builders" },
      { value: "24/7", label: "Autonomous Delivery" },
    ],
    route: "/leadership",
  },
  {
    id: "community",
    label: "COMMUNITY",
    title: "The Future Isn't Built Alone.",
    tagline: "Technology moves faster when people share ideas.",
    description: "We create collaborative environments where student builders, engineers, and founders learn, experiment, and co-create future technologies.",
    bullets: [
      "Campus workshops, developer labs, and collaborative open sprints.",
      "Bridging the divide between academic theory and enterprise production.",
      "Incubator hackathons with MANIT Bhopal and regional partners.",
    ],
    stats: [
      { value: "1,500+", label: "Community Members" },
      { value: "12+", label: "Tech Sprints" },
    ],
    route: "/community",
  },
  {
    id: "collaborations",
    label: "COLLABORATIONS",
    title: "Some Things Are Better Built Together.",
    tagline: "The right partnership doesn't simply add another logo. It multiplies what both sides can do.",
    description: "Connecting YugNext with institutions that share our vision for technology-led growth, verified research, and high-trust delivery.",
    bullets: [
      "ROLTA India: Advanced spatial analytics & enterprise tech integration.",
      "MANIT Bhopal: Campus incubation, seed funding, and institutional lab.",
      "NexanAcademy: Upskilling and digital capability enablement.",
    ],
    stats: [
      { value: "ROLTA", label: "Strategic Partner" },
      { value: "MANIT", label: "Incubation Host" },
    ],
    route: "/collaborations",
  },
];

export default function WhoWeAreSection() {
  const [selectedPillar, setSelectedPillar] = useState<PillarData>(PILLARS[0]);

  return (
    <section id="who-we-are" className="py-20 lg:py-28 bg-[#0A0818] text-[#EFEDFA] relative overflow-hidden border-t border-[#2A2450]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#6C3CE3]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/15 text-[#9B7BF0] border border-[#6C3CE3]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#9B7BF0]" />
            <span>WHO WE ARE — TECHNOLOGY WITH A REASON TO EXIST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#EFEDFA] tracking-tight leading-tight">
            We&apos;re Not Here Just to <span className="text-[#9B7BF0]">Follow What&apos;s Next.</span>
          </h2>
          <p className="text-[#A79FCB] text-sm sm:text-base leading-relaxed font-light">
            Yugnext is a technology-driven organisation working across software, digital solutions and products to solve problems that matter. Our ambition is simple: <strong className="text-white">Build things people need · Create things people remember · Move things forward.</strong>
          </p>
        </div>

        {/* 2-Column Split: Left Interactive Nav (Static stable height) -> Right Dynamic Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Nav List with rock-solid stable positioning (zero jitter) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              {PILLARS.map((pillar) => {
                const isActive = selectedPillar.id === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setSelectedPillar(pillar)}
                    onMouseEnter={() => {
                      if (selectedPillar.id !== pillar.id) {
                        setSelectedPillar(pillar);
                      }
                    }}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-150 cursor-pointer flex items-center justify-between group select-none ${
                      isActive
                        ? "bg-[#6C3CE3] border-[#6C3CE3] text-white shadow-lg shadow-[#6C3CE3]/25 scale-[1.01]"
                        : "bg-[#12102A] border-[#2A2450] text-[#A79FCB] hover:text-[#EFEDFA] hover:bg-[#181534] hover:border-[#6C3CE3]/40"
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase block ${
                        isActive ? "text-purple-200" : "text-[#9B7BF0]"
                      }`}>
                        EXPLORE
                      </span>
                      <h4 className="text-base sm:text-lg font-black tracking-wide mt-0.5 text-[#EFEDFA]">
                        {pillar.label}
                      </h4>
                    </div>

                    <ArrowRight className={`w-5 h-5 transition-transform duration-200 shrink-0 ${
                      isActive ? "translate-x-1.5 text-white" : "text-[#A79FCB] group-hover:translate-x-1 group-hover:text-[#9B7BF0]"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Strategic Delivery Footnote */}
            <div className="p-4 rounded-xl bg-[#12102A] border border-[#2A2450] text-xs text-[#A79FCB] mt-1">
              <span className="text-[#9B7BF0] font-bold block mb-1">Corporate Registration</span>
              <span>Yugnext Private Limited • Incorporated 21 Oct 2026 • MANIT Bhopal Incubated</span>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Card with min-height to prevent any page shifts */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-[#12102A] border border-[#2A2450] shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden min-h-[460px]">
            
            {/* Header of Active Pillar */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
                  {selectedPillar.label} OVERVIEW
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                {selectedPillar.title}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-[#9B7BF0]">
                {selectedPillar.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                {selectedPillar.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {selectedPillar.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EFEDFA]">
                    <CheckCircle className="w-4 h-4 text-[#9B7BF0] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Stats & Direct View Button */}
            <div className="pt-6 border-t border-[#2A2450] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-auto">
              
              {/* Quick Metrics */}
              <div className="flex items-center gap-6">
                {selectedPillar.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-xl font-black text-white block">{stat.value}</span>
                    <span className="text-[10px] font-mono text-[#A79FCB] uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Button linking to Dedicated Page */}
              <Link
                href={selectedPillar.route}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/30 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>View {selectedPillar.label} Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
