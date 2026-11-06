"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Camera,
  UtensilsCrossed,
  Users,
  Activity,
} from "lucide-react";

export default function ServicesPage() {
  const SERVICES_LIST = [
    {
      number: "01",
      title: "School websites",
      icon: GraduationCap,
    },
    {
      number: "02",
      title: "coaching institute websites",
      icon: BookOpen,
    },
    {
      number: "03",
      title: "Photography studio websites, digital portfolios and online galleries.",
      icon: Camera,
    },
    {
      number: "04",
      title: "Restaurant and café websites, digital menus and online presence.",
      icon: UtensilsCrossed,
    },
    {
      number: "05",
      title: "College society websites — Pravah Web",
      icon: Users,
    },
    {
      number: "06",
      title: "College fest websites — MAFFICK Web",
      icon: Users,
    },
    {
      number: "07",
      title: "Gym and fitness club websites, membership and digital service interfaces.",
      icon: Activity,
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
            <span className="text-[#9B7BF0] font-bold">SERVICES</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#9B7BF0]" />
              <span>SERVICES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Industries We Serve
            </h1>
          </div>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="py-16 sm:py-20 bg-[#0A0818] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all flex flex-col justify-between space-y-6 shadow-xl group hover:shadow-2xl hover:shadow-[#6C3CE3]/10"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-[#9B7BF0]/60 group-hover:text-[#9B7BF0] transition-colors">
                        {service.number}.
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-[#181534] border border-[#2A2450] text-[#9B7BF0] flex items-center justify-center group-hover:border-[#6C3CE3]/40 group-hover:scale-105 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#C4B5FD] transition-colors leading-snug">
                      {service.title}
                    </h2>
                  </div>

                  <div className="pt-4 border-t border-[#2A2450]">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#9B7BF0] group-hover:text-white transition-colors"
                    >
                      <span>Request Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Direct CTA */}
          <div className="pt-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#12102A] border border-[#2A2450] text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Looking to build a specialized website or digital system?
              </h3>
              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-bold text-sm shadow-lg shadow-[#6C3CE3]/30 transition-all cursor-pointer"
                >
                  <span>Start Your Project →</span>
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
