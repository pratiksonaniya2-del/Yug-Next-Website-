"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Landmark,
  Truck,
  CheckCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function IndustriesPage() {
  const INDUSTRIES = [
    {
      title: "Education",
      tag: "Connected Learning Ecosystems",
      icon: GraduationCap,
      lead: "Building technology and digital initiatives for a world where learning is becoming increasingly connected.",
      description: "From unified student lifecycle management to specialized K-12 and coaching portals. We help academic institutions automate administrative overhead so educators can focus on teaching.",
      solutions: [
        "Campus-wide Student Information Systems (SIS)",
        "Automated Examination & Transcript Verifications",
        "Fee Automation & Student Wallet Integration",
        "Parent-Teacher Real-Time Progress Portals",
      ],
    },
    {
      title: "Finance",
      tag: "High-Trust Digital Possibilities",
      icon: Landmark,
      lead: "Creating digital possibilities for an industry where trust, speed and accessibility matter.",
      description: "Fintech solutions built with uncompromising security, ultra-low latency transaction paths, and intuitive interfaces that reduce friction for users across all demographics.",
      solutions: [
        "Secure Transaction Pipelines & UPI Integration",
        "Automated Audit Logs & Compliance Engine",
        "Customer KYC & Identity Verification Flow",
        "Micro-Lending & Institutional Portals",
      ],
    },
    {
      title: "Logistics",
      tag: "Intelligent Physical Movement",
      icon: Truck,
      lead: "Helping build smarter digital experiences for an increasingly connected movement of people and goods.",
      description: "Real-time dispatch tracking, fleet telemetry dashboards, and route optimization algorithms that ensure goods and personnel move with predictable precision.",
      solutions: [
        "Real-Time Telemetry & GPS Dispatch Trackers",
        "Warehouse Inventory & Proof of Delivery (PoD)",
        "Last-Mile Route Optimization Engine",
        "Vendor & Driver Mobile Portals",
      ],
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
            <span className="text-[#9d7df7] font-bold">INDUSTRIES</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>DOMAINS WE TRANSFORM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Different Industries. Different Problems. <span className="text-[#9d7df7]">One Thing in Common.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              Technology changes from industry to industry. The need for better solutions doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Industry Deep-Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            const isEven = i % 2 === 1;

            return (
              <div
                key={ind.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#5d35e0] hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all duration-300 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#5d35e0] text-white flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase text-[#5d35e0] block">
                        {ind.tag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    {ind.lead}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {ind.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {ind.solutions.map((sol) => (
                      <div key={sol} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#5d35e0] shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 p-7 rounded-2xl bg-[#0e0738] text-white space-y-4">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#9d7df7] tracking-wider block">
                    SECTOR IMPACT RECORD
                  </span>
                  <h4 className="text-xl font-bold">Tailored Architecture for {ind.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    We deploy battle-tested frameworks from our engineering nodes in Chennai, Bhopal, and Pune, adhering to strict enterprise standards.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                    >
                      <span>Consult for {ind.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* And We're Just Getting Started Banner (Exact User Copy) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0422] text-white text-center space-y-4 shadow-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9d7df7]">
              EXPANDING HORIZONS
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              And We&apos;re Just Getting Started.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Our work isn&apos;t limited to three industries. Wherever there is a meaningful problem, there is an opportunity to build something better.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white font-bold text-sm shadow-lg shadow-[#5d35e0]/25 transition-all cursor-pointer"
              >
                <span>Partner on a New Industry Challenge →</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
