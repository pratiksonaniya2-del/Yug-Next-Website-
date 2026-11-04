"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  CheckCircle,
  MapPin,
  Zap,
} from "lucide-react";

export default function CollaborationsPage() {
  const ALLIANCES = [
    {
      name: "ROLTA India",
      tag: "Strategic Technology Partner",
      role: "Enterprise Solutions & Geospatial Analytics",
      details: "Collaborating on mission-critical digital transformation architectures, data workflows, and large-scale enterprise software execution.",
      highlights: ["Enterprise Cloud Scaling", "Data Engineering Pipelines", "System Resiliency"],
    },
    {
      name: "MANIT Bhopal",
      tag: "Academic & Incubation Host",
      role: "Maulana Azad National Institute of Technology",
      details: "Incubation center, student talent pipeline, and seed grant partner. Providing the academic rigor and engineering grounds where YugNext was born.",
      highlights: ["₹50,000 Seed Grant", "Institutional Testing Ground", "Premier NIT Talent"],
    },
    {
      name: "NexanAcademy",
      tag: "Capability Enablement Partner",
      role: "Digital Skills & Workforce Upskilling",
      details: "Co-architecting curriculum initiatives, modern coding bootcamps, and developer upskilling pipelines tailored for corporate software demands.",
      highlights: ["Industry-Aligned Syllabi", "Hands-on Project Assessment", "Direct Placement Pipelines"],
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
            <span className="text-[#9d7df7] font-bold">COLLABORATIONS</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>STRATEGIC ALLIANCES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Some Things Are <span className="text-[#9d7df7]">Better Built Together.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              The right partnership doesn&apos;t simply add another logo. It multiplies what both sides can do. Our strategic alliances connect Yugnext with organisations and institutions that share our vision for technology-led growth and meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ALLIANCES.map((al) => (
              <div
                key={al.name}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5d35e0] hover:bg-white hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5d35e0] px-2.5 py-1 rounded-md bg-[#5d35e0]/10">
                      {al.tag}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">{al.name}</h3>
                  <p className="text-xs font-bold text-[#5d35e0]">{al.role}</p>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {al.details}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200">
                    {al.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#5d35e0] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-mono text-slate-400">HIGH-TRUST ALLIANCE</span>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Network Section (Chennai · Bhopal · Agra) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0422] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase text-[#9d7df7]">OUR GROWING NETWORK</span>
              <h3 className="text-3xl font-black">NCR · BHOPAL · AGRA</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Different cities. Different talent. One direction: <strong className="text-white">Forward.</strong> Connecting premier institutions with enterprise clients nationwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/reach"
                className="px-7 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5d35e0]/25 transition-all text-center cursor-pointer whitespace-nowrap"
              >
                Inspect Network Nodes →
              </Link>
              <Link
                href="/#contact"
                className="px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs sm:text-sm font-bold border border-white/20 transition-all text-center cursor-pointer whitespace-nowrap"
              >
                Propose an Alliance
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
