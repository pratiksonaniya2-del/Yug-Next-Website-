"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Globe2,
  BookOpen,
  Share2,
  Hammer,
} from "lucide-react";

export default function CommunityPage() {
  const PILLARS = [
    {
      number: "01",
      title: "LEARN",
      tag: "Knowledge Hub",
      quote: "Bridging the gap between academic learning and practical technology.",
      description:
        "Workshops, technical sessions and hands-on learning experiences around web development, software engineering, system design and emerging technologies. Our aim is to help aspiring builders develop practical skills through exposure, guidance and experimentation.",
      code: "YUGNEXT COMMUNITY — 01",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "CONNECT",
      tag: "Network Grid",
      quote: "Bringing people, ideas and opportunities closer together.",
      description:
        "We aim to create meaningful connections between students, developers, designers, entrepreneurs and institutions through community meetups, collaborative sessions and knowledge-sharing initiatives across our growing network.",
      code: "YUGNEXT COMMUNITY — 02",
      icon: Share2,
    },
    {
      number: "03",
      title: "BUILD",
      tag: "Creation Engine",
      quote: "Helping promising ideas take their first steps.",
      description:
        "From collaborative projects and open-source contributions to hackathons and early-stage prototypes, we want to create opportunities for people to experiment, build together and take ideas beyond the planning stage.",
      code: "YUGNEXT COMMUNITY — 03",
      icon: Hammer,
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
              The Future Isn&apos;t Built Alone.
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              Technology grows through shared knowledge, collaboration and experimentation. We want to bring together people who are curious about technology, willing to learn, and motivated to turn ideas into something useful.
            </p>
          </div>
        </div>
      </section>

      {/* Community Triad: Learn. Connect. Build. */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5d35e0]">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Learn. Connect. Build.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              The YUGNEXT community is an extension of our larger ecosystem — a space where students, developers, designers, founders and institutions can exchange knowledge, find collaborators and explore opportunities to create.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((item) => (
              <div
                key={item.number}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5d35e0] hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-[#5d35e0]">
                      {item.number} — {item.title}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900 italic leading-snug">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-mono font-semibold text-slate-500">
                    {item.code}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CAMPUS SPONSORSHIP */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0738] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-purple-900/40">
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9d7df7]">
                CAMPUS SPONSORSHIP
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Support Student Communities. Create Meaningful Campus Presence.
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  We work with college societies, technical clubs and student-led events to explore sponsorship and brand collaboration opportunities.
                </p>
                <p>
                  For organisations, this creates a direct opportunity to engage with student audiences through event branding, on-ground activations, digital promotions and campus-level visibility.
                </p>
                <p>
                  For student communities, it helps access resources, industry connections and support to organise better experiences.
                </p>
              </div>

              <p className="text-sm font-bold text-white pt-1">
                Let&apos;s make campus collaborations count.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/#contact"
                className="px-8 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold text-center shadow-md shadow-[#5d35e0]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                Connect for Campus Collaboration →
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
