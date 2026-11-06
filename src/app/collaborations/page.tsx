"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Handshake,
  Landmark,
  Code2,
} from "lucide-react";

export default function CollaborationsPage() {
  const ALLIANCES = [
    {
      title: "Nexan Academy",
      icon: GraduationCap,
      description: "Education-sector client engagement involving CRM and ERP solutions.",
    },
    {
      title: "ROLTA",
      icon: Building2,
      description: "Association through the MANIT ROLTA Incubation Centre.",
    },
    {
      title: "FourARKS",
      icon: Handshake,
      description: "Business and project collaboration.",
    },
    {
      title: "Pravah Society",
      icon: Code2,
      description: "College society website development project.",
    },
    {
      title: "Government of India, through MANIT Bhopal",
      icon: Landmark,
      description: "Built several institute level and national level softwares",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0818] text-[#EFEDFA] flex flex-col justify-between selection:bg-[#6C3CE3] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-24 pb-16 bg-[#0a0422] text-white relative overflow-hidden border-b border-[#2A2450]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-[#5d35e0]/20 blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-[#9B7BF0] font-bold">STRATEGIC ALLIANCES</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9B7BF0]" />
              <span>INSTITUTIONAL ASSOCIATIONS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Strategic Alliances &amp; Institutional Associations
            </h1>

            <p className="text-[#A79FCB] text-base sm:text-xl leading-relaxed font-light">
              Building relationships through projects, institutional support and collaborative engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Alliances Cards Grid */}
      <section className="py-16 sm:py-20 bg-[#0A0818] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ALLIANCES.map((al, idx) => {
              const Icon = al.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all flex flex-col justify-between space-y-6 shadow-xl group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#181534] border border-[#2A2450] text-[#9B7BF0] flex items-center justify-center group-hover:border-[#6C3CE3]/40 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#C4B5FD] transition-colors leading-snug">
                      {al.title}
                    </h2>

                    <p className="text-sm text-[#A79FCB] leading-relaxed font-light">
                      {al.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A2450]">
                    <span className="text-[11px] font-mono text-[#9B7BF0] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Active Engagement</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Direct CTA */}
          <div className="pt-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#12102A] border border-[#2A2450] text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Interested in a strategic collaboration with YugNext?
              </h3>
              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-bold text-sm shadow-lg shadow-[#6C3CE3]/30 transition-all cursor-pointer"
                >
                  <span>Connect With Us →</span>
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
