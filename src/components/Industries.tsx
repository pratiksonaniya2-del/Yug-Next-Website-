"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Landmark,
  Truck,
  HeartPulse,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: "education",
    title: "Education",
    tagline: "Empowering Next-Gen Universities & Students",
    icon: GraduationCap,
    gradient: "from-purple-600 to-indigo-600",
    overview:
      "Transforming higher education institutions with unified academic operations, student lifestyle services, and industry-calibrated engineering cohorts.",
    platforms: ["Shikshasetu Platform", "NexonAcademy Cohorts", "CampusNeeds Infrastructure"],
    stats: "30+ Campuses Targeted",
    highlights: [
      "Digital student lifecycle management",
      "Automated attendance & grade book governance",
      "Direct placement and industry capstone integration",
      "Peer-to-peer campus marketplace ecosystems",
    ],
  },
  {
    id: "finance",
    title: "Finance",
    tagline: "Secure Fintech & Automated Ledger Pipelines",
    icon: Landmark,
    gradient: "from-indigo-600 to-blue-600",
    overview:
      "Modernizing institutional payments, student micro-transactions, and rental deposit security with zero-friction digital workflows.",
    platforms: ["Settler Escrow Workflows", "CampusNeeds Ledger", "Automated Fee Pipelines"],
    stats: "Zero-Latency Settlements",
    highlights: [
      "Frictionless college fee split & installment gateways",
      "Secure rental deposit protection via Settler",
      "Micro-ledger accounting for campus vendors",
      "Full compliance & bank-grade end-to-end encryption",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    tagline: "Intelligent Relocation & Supply Movement",
    icon: Truck,
    gradient: "from-pink-600 to-purple-600",
    overview:
      "Streamlining the complex logistics of student relocation, luggage transit, campus supply distribution, and local vendor fulfillment.",
    platforms: ["Settler Relocation Network", "Campus Delivery Dispatch", "Hub Transit Routing"],
    stats: "4 Delivery Hubs Coordinated",
    highlights: [
      "On-demand student baggage & room shifting",
      "Route-optimized campus delivery networks",
      "Automated vendor dispatch for stationery & essentials",
      "Live tracking across Chennai, Bhopal, Agra, Delhi NCR",
    ],
  },
  {
    id: "health",
    title: "Health",
    tagline: "Student Wellness & Secure Clinical Data",
    icon: HeartPulse,
    gradient: "from-emerald-600 to-teal-600",
    overview:
      "Safeguarding student health with secure digital medical records, campus infirmary automation, and fast emergency response pipelines.",
    platforms: ["Campus Emergency Net", "Infirmary EHR", "Wellness Tracking"],
    stats: "24/7 Rapid Response",
    highlights: [
      "Encrypted student electronic health records (EHR)",
      "Instant on-campus emergency alerts and ambulance routing",
      "Student mental health & confidential wellness counseling",
      "Strict data privacy and health compliance standards",
    ],
  },
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0);
  const current = INDUSTRIES[activeTab];
  const Icon = current.icon;

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
            <Zap className="w-3.5 h-3.5" />
            <span>INDUSTRIES WE TRANSFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Targeted Digital Solutions Across <span className="purple-gradient-text">Key Verticals</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            By applying our proprietary software platforms and deep engineering capabilities, YugNext drives measurable value across four crucial industry sectors.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-purple-100">
          {INDUSTRIES.map((ind, index) => {
            const TabIcon = ind.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
                  isActive
                    ? "bg-purple-700 text-white shadow-lg shadow-purple-600/30 scale-[1.02]"
                    : "bg-purple-50 text-slate-700 hover:bg-purple-100/80 hover:text-purple-700"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-br from-white via-purple-50/40 to-indigo-50/30 border border-purple-100 p-8 sm:p-12 shadow-xl shadow-purple-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${current.gradient} flex items-center justify-center text-white shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                    Industry Sector
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {current.title} Transformation
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {current.overview}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Core Solutions & Impact Areas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                      <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Associated YugNext Systems:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {current.platforms.map((plat) => (
                    <span
                      key={plat}
                      className="text-xs bg-white text-purple-700 font-bold px-2.5 py-1 rounded-full border border-purple-200 shadow-xs"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-purple-100 shadow-lg shadow-purple-900/5 text-center space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600">
                Industry Benchmark
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {current.stats}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dedicated infrastructure tailored to eliminate institutional bottlenecks and accelerate digital adoption.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 shadow-md shadow-purple-600/25 transition-all"
              >
                <span>Partner in {current.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
