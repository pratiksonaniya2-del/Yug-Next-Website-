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
    title: "Industries We Serve",
    tagline: "Building tailored digital infrastructure across key sectors.",
    description: "From education platforms to food, fitness, and campus services.",
    bullets: [
      "Education: School & coaching websites, ShikshaSathi",
      "Photography, Food & Beverages, Health & Fitness",
      "Organisations & Events (Pravah, MAFFICK), Finance (Sett(l)r), Logistics (CampusNeeds)",
    ],
    stats: [
      { value: "07", label: "Core Industries" },
      { value: "100%", label: "Tailored Web Solutions" },
    ],
    route: "/industries",
  },
  {
    id: "leadership",
    label: "LEADERSHIP & TEAM",
    title: "People Who Ask What's Next.",
    tagline: "Cross-functional depth across engineering, product design, and strategic alliances.",
    description: "Our leadership team unites deep engineering precision with product vision. We build high-ownership systems designed to withstand real enterprise load and scale seamlessly.",
    bullets: [
      "Led by Founder & CEO Harsh Rathore across Agra & Bhopal hubs.",
      "Engineering, operations, and product leads with verified deployment records.",
      "Cross-functional execution across NCR, Bhopal, and Agra.",
    ],
    stats: [
      { value: "3+", label: "Operating Hubs" },
      { value: "100%", label: "Merit-Driven Ownership" },
    ],
    route: "/leadership",
  },
  {
    id: "alliances",
    label: "STRATEGIC ALLIANCES",
    title: "Some Things Are Better Built Together.",
    tagline: "Collaborative growth through institutional integration and partner networks.",
    description: "Strategic relationships that expand our capabilities and reach. We partner with premier institutes and technology organizations to deploy mission-critical solutions at scale.",
    bullets: [
      "Nexan Academy: Education-sector CRM & ERP solutions.",
      "ROLTA: Incubation partnership at MANIT ROLTA Incubation Centre.",
      "FourARKS, Pravah Society & Government of India (through MANIT).",
    ],
    stats: [
      { value: "5+", label: "Active Alliances" },
      { value: "Govt & NIT", label: "Institutional Backing" },
    ],
    route: "/about#alliances",
  },
  {
    id: "company",
    label: "COMPANY & HERITAGE",
    title: "From Campus Innovation to Scaled Enterprise.",
    tagline: "Pvt Ltd corporate governance anchored in academic rigor and practical impact.",
    description: "What began as an ambitious student initiative at MANIT Bhopal has matured into an incorporated Private Limited Company powering digital systems across multiple states.",
    bullets: [
      "Seed-funded & incubated at MANIT ROLTA Incubation Centre, Bhopal.",
      "Incorporated as YugNext Private Limited with formal corporate governance.",
      "Multi-city delivery footprint spanning NCR, Bhopal, and Agra.",
    ],
    stats: [
      { value: "₹50K", label: "NIT Seed Grant" },
      { value: "Pvt Ltd", label: "Formal Corporate Entity" },
    ],
    route: "/about",
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

        {/* 2-Column Split: Left Interactive Nav -> Right Dynamic Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Nav List */}
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
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? "bg-[#6C3CE3] border-[#6C3CE3] text-white shadow-xl shadow-[#6C3CE3]/20"
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

            <div className="pt-4 border-t border-[#2A2450] flex items-center justify-between text-xs text-[#A79FCB]">
              <span>Click or hover to explore</span>
              <span className="font-mono text-[#9B7BF0]">4 Pillars</span>
            </div>
          </div>

          {/* Right Column: Dynamic Preview Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#12102A] border border-[#2A2450] shadow-2xl relative overflow-hidden transition-all duration-300">
              <div className="space-y-6">
                
                {/* Header Tag + Action Link */}
                <div className="flex items-center justify-between gap-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#181534] border border-[#2A2450] text-[#9B7BF0]">
                    {selectedPillar.label}
                  </span>
                  
                  <Link
                    href={selectedPillar.route}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B7BF0] hover:text-[#EFEDFA] transition-colors group"
                  >
                    <span>View Full Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#EFEDFA] leading-tight">
                    {selectedPillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#9B7BF0]">
                    {selectedPillar.tagline}
                  </p>
                </div>

                {/* Description Body */}
                <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                  {selectedPillar.description}
                </p>

                {/* Strategic Bullets */}
                <div className="space-y-2.5 pt-2">
                  {selectedPillar.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EFEDFA]">
                      <CheckCircle className="w-4 h-4 text-[#9B7BF0] shrink-0 mt-0.5" />
                      <span className="font-light">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics / Key Stats Strip */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#2A2450]">
                  {selectedPillar.stats.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#181534] border border-[#2A2450]">
                      <span className="text-xl sm:text-2xl font-black text-[#EFEDFA] block">
                        {stat.value}
                      </span>
                      <span className="text-[11px] font-mono text-[#A79FCB] block mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Primary CTA */}
                <div className="pt-2">
                  <Link
                    href={selectedPillar.route}
                    className="inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/20 transition-all cursor-pointer"
                  >
                    <span>Explore {selectedPillar.label} in Depth</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
