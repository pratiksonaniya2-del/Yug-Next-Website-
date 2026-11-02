"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Globe2,
  Users,
  Code2,
  CheckCircle,
  MessageSquare,
  Zap,
} from "lucide-react";

export default function CommunityPage() {
  const PILLARS = [
    {
      title: "Learn.",
      lead: "Bridging the gap between classroom theory and enterprise software reality.",
      details: "Hands-on masterclasses on modern distributed web stacks, system design, and AI tooling. We mentor aspiring student builders to write high-throughput code.",
      tag: "Knowledge Hub",
    },
    {
      title: "Connect.",
      lead: "Fostering partnerships between engineers, designers, founders, and institutions.",
      details: "Regular tech mixers, AMA sessions with senior tech architects, and peer collaboration networks spanning Chennai, Bhopal, and Agra.",
      tag: "Network Grid",
    },
    {
      title: "Build.",
      lead: "Turning embryonic ideas into viable products and deployable prototypes.",
      details: "Incubation hackathons, open-source sprints, and product grants supported by the YugNext ecosystem and MANIT Bhopal innovation cells.",
      tag: "Creation Engine",
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
            <span className="text-[#9d7df7] font-bold">COMMUNITY</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <Globe2 className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>THE ECOSYSTEM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              The Future <span className="text-[#9d7df7]">Isn&apos;t Built Alone.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              Technology moves faster when people share ideas. We believe in creating spaces where people can learn, collaborate, experiment and build together.
            </p>
          </div>
        </div>
      </section>

      {/* Community Triad: Learn. Connect. Build. */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-[#5d35e0]">OUR PHILOSOPHY</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Learn. Connect. Build.</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Our community is part of the larger Yugnext ecosystem — bringing together people, ideas and opportunities that can create something bigger than any one of them alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((item, i) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5d35e0] hover:bg-white hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#5d35e0]">{item.title}</span>
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {item.lead}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {item.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-mono text-slate-400">YUGNEXT COMMUNITY NODE 0{i + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Join Community Interactive Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0738] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase text-[#9d7df7]">ENGAGE WITH BUILDERS</span>
              <h3 className="text-2xl sm:text-3xl font-black">Ready to Build What&apos;s Next?</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Connect with our campus ambassadors, join hackathons, and contribute to YugNext open ecosystems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/#contact"
                className="px-8 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold text-center shadow-md shadow-[#5d35e0]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                Join the Community →
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
