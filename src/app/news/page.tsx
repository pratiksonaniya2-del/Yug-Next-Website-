"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Newspaper,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Building2,
  Award,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Share2,
  X,
  MapPin,
  Users,
  GraduationCap,
} from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function NewsroomPage() {
  const [activeStoryModal, setActiveStoryModal] = useState<string | null>(null);

  const milestones = [
    {
      date: "08 May 2026",
      title: "YUGNEXT Secures ₹50,000 Funding & Incubation at MANIT ROLTA",
      description: "Received ₹50,000 seed funding and official incubation at MANIT ROLTA Incubation Centre for EdTech initiative VidyaSetu.",
      badge: "Incubation & Grant",
      highlight: true,
    },
    {
      date: "21 October 2026",
      title: "YUGNEXT PRIVATE LIMITED Incorporated",
      description: "YUGNEXT officially transitions from campus innovation initiative to a formally registered corporate entity.",
      badge: "Corporate Incorporation",
      highlight: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0818] text-[#EFEDFA] flex flex-col justify-between selection:bg-[#6C3CE3] selection:text-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-20 bg-[#0a0422] text-white relative overflow-hidden border-b border-[#2A2450]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-[#5d35e0]/20 blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-[#9B7BF0] font-bold">NEWSROOM</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
              <Newspaper className="w-3.5 h-3.5 text-[#9B7BF0]" />
              <span>YUGNEXT NEWSROOM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Stories of Progress. <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B7BF0] via-[#A78BFA] to-[#6C3CE3]">
                Milestones of Tomorrow.
              </span>
            </h1>

            <p className="text-[#A79FCB] text-base sm:text-xl leading-relaxed font-light">
              Stay updated with the latest milestones, announcements, achievements, and developments from YUGNEXT. Follow our journey as we build technology, create opportunities, and shape what&apos;s next.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#latest-news"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Explore Latest News</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#milestones-timeline"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#12102A] hover:bg-[#1A1638] text-[#C4B5FD] text-xs sm:text-sm font-semibold border border-[#2A2450] transition-all"
              >
                <span>View Timeline</span>
              </a>
              <Link
                href="/customer-stories"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#181534] hover:bg-[#201c46] text-white text-xs sm:text-sm font-semibold border border-[#2A2450] transition-all"
              >
                <span>Customer Stories →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED NEWS SECTION */}
      <section id="latest-news" className="py-20 bg-[#0A0818] relative border-b border-[#2A2450]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#9B7BF0] uppercase block mb-2">
                FEATURED ANNOUNCEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Latest Updates
              </h2>
            </div>
            <span className="text-xs font-mono text-[#A79FCB]">
              Primary Corporate Release
            </span>
          </div>

          {/* Large Featured Card (60:40 Split) */}
          <div className="rounded-3xl bg-gradient-to-br from-[#12102A] to-[#171336] border border-[#2A2450] hover:border-[#6C3CE3]/50 transition-all duration-300 overflow-hidden shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Side: 60% (Desktop cols 7) - Custom Graphic */}
              <div className="lg:col-span-7 bg-gradient-to-br from-[#0e0738] via-[#1a1447] to-[#25155c] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden min-h-[340px] border-b lg:border-b-0 lg:border-r border-[#2A2450]">
                {/* Glow & Backdrop Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C3CE3]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-semibold text-white">
                    <Building2 className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>CORPORATE ANNOUNCEMENT</span>
                  </div>
                  <span className="text-xs font-mono text-purple-200/80">21.10.2026</span>
                </div>

                {/* Center Visual Graphic */}
                <div className="relative z-10 my-8 py-6 px-6 sm:px-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/yugnext-logo-rounded.png"
                      alt="YUGNEXT Logo"
                      className="h-10 sm:h-12 w-auto object-contain rounded-md"
                    />
                  </div>
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="font-bold tracking-widest text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      PRIVATE LIMITED
                    </span>
                    <span className="text-[#C4B5FD] font-mono">Agra • Bhopal</span>
                  </div>
                  <p className="text-xs text-purple-200/90 leading-relaxed font-sans">
                    Official Incorporation Announcement: YUGNEXT has officially been incorporated as YUGNEXT PRIVATE LIMITED, marking its transition into a formally registered corporate entity.
                  </p>
                </div>

                <div className="relative z-10 text-[11px] font-mono text-[#A79FCB] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Officially Registered Entity • Government of India MCA</span>
                </div>
              </div>

              {/* Right Side: 40% (Desktop cols 5) - Details */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#9B7BF0] uppercase">
                      NEWS / COMPANY UPDATE
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-xs font-mono text-[#A79FCB]">21 October 2026</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight group-hover:text-[#C4B5FD] transition-colors">
                    From Campus Startup to Corporate Entity: YUGNEXT Officially Incorporated as a Private Limited Company
                  </h3>

                  <p className="text-[#A79FCB] text-sm sm:text-base leading-relaxed">
                    A major milestone marking YUGNEXT&apos;s transition into a formally registered company. Founded by young entrepreneur Harsh Rathore, the company aims to build an ecosystem of affordable, accessible, and innovative technology solutions.
                  </p>

                  <div className="pt-2 space-y-2 text-xs text-purple-200/80">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C3CE3]" />
                      <span>Registered Office in Agra, UP &amp; Corporate Office in Bhopal, MP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C3CE3]" />
                      <span>Led by Harsh Rathore as Director and Chief Executive Officer (CEO)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveStoryModal("incorporation")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/30 transition-all cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. ALL NEWS SECTION (Swapped Left-Right Order: Corporate Milestone on LEFT, Funding on RIGHT) */}
      <section className="py-20 bg-[#0A0818] relative border-b border-[#2A2450]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9B7BF0] uppercase block">
              PRESS RELEASES &amp; DISPATCHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              All News &amp; Announcements
            </h2>
            <p className="text-[#A79FCB] text-base max-w-2xl">
              Explore the two defining milestones shaping our journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1 (LEFT): Corporate Milestone (21 October 2026) */}
            <div className="rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6C3CE3]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-5 relative z-10">
                {/* Visual Header */}
                <div className="h-44 rounded-2xl bg-gradient-to-br from-[#1b0f3b] via-[#241352] to-[#12102A] border border-[#6C3CE3]/30 p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#6C3CE3]/30 text-purple-200 border border-[#6C3CE3]/40 uppercase tracking-wider">
                      CORPORATE MILESTONE
                    </span>
                    <span className="text-[11px] font-mono text-purple-200/80">21 October 2026</span>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">YUGNEXT PRIVATE LIMITED</div>
                    <div className="text-xs font-mono text-purple-300">Officially Incorporated</div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-purple-200/70">
                    <Building2 className="w-3.5 h-3.5 text-[#9B7BF0]" />
                    <span>Agra (Registered) • Bhopal (Corporate)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9B7BF0]">
                    <span>CATEGORY: CORPORATE MILESTONE</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors leading-snug">
                    From Campus Startup to Corporate Entity: YUGNEXT Officially Incorporated as a Private Limited Company
                  </h3>

                  <p className="text-[#A79FCB] text-xs sm:text-sm leading-relaxed line-clamp-3">
                    YUGNEXT officially becomes a Private Limited Company, marking a new chapter in its entrepreneurial journey and corporate expansion.
                  </p>
                </div>
              </div>

              <div className="pt-6 relative z-10 border-t border-[#2A2450]">
                <button
                  onClick={() => setActiveStoryModal("incorporation")}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#A78BFA] hover:text-white transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2 (RIGHT): Incubation & Funding (08 May 2026) */}
            <div className="rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-5 relative z-10">
                {/* Visual Header */}
                <div className="h-44 rounded-2xl bg-gradient-to-br from-[#0a1e1b] via-[#0d2e26] to-[#12102A] border border-emerald-500/20 p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                      INCUBATION &amp; FUNDING
                    </span>
                    <span className="text-[11px] font-mono text-emerald-200/80">08 May 2026</span>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">₹50,000 Funding</div>
                    <div className="text-xs font-mono text-emerald-300">MANIT ROLTA Incubation Centre</div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-200/70">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>EdTech Initiative: VidyaSetu</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <span>CATEGORY: INCUBATION &amp; FUNDING</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    YUGNEXT Secures ₹50,000 Funding and Gets Incubated at MANIT ROLTA Incubation Centre with Its EdTech Initiative, VidyaSetu
                  </h3>

                  <p className="text-[#A79FCB] text-xs sm:text-sm leading-relaxed line-clamp-3">
                    YUGNEXT achieves its first major startup milestone with ₹50,000 funding and incubation support from MANIT ROLTA Incubation Centre.
                  </p>
                </div>
              </div>

              <div className="pt-6 relative z-10 border-t border-[#2A2450]">
                <button
                  onClick={() => setActiveStoryModal("funding")}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR JOURNEY SO FAR (2 Key Milestones) */}
      <section id="milestones-timeline" className="py-20 bg-[#0A0818] relative border-b border-[#2A2450]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9B7BF0] uppercase block">
              CHRONOLOGY OF GROWTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Journey So Far
            </h2>
            <p className="text-[#A79FCB] text-base max-w-2xl">
              Chronological milestones tracing our foundation from institutional incubation to corporate incorporation.
            </p>
          </div>

          {/* Desktop: Horizontal Timeline / Mobile: Vertical */}
          <div className="hidden md:grid grid-cols-2 gap-8 relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/40 via-[#6C3CE3]/60 to-[#6C3CE3] -translate-y-1/2 pointer-events-none z-0" />

            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="relative z-10 rounded-2xl bg-[#12102A] border border-[#2A2450] p-6 hover:border-[#6C3CE3]/60 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#6C3CE3]/20 text-[#A78BFA] border border-[#6C3CE3]/30">
                      {milestone.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/90">
                      {milestone.date}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#C4B5FD] transition-colors pt-2">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-[#A79FCB] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono text-purple-300/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Milestone</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden space-y-6 relative border-l-2 border-[#6C3CE3]/40 ml-4 pl-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative space-y-2 group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#6C3CE3] border-2 border-[#0A0818]" />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#A78BFA]">
                    {milestone.date}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#6C3CE3]/20 text-purple-300">
                    {milestone.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {milestone.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. STAY CONNECTED SECTION */}
      <section className="py-20 bg-[#0c0822] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0818] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#9B7BF0]" />
            <span>STAY UPDATED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Stay Updated with YUGNEXT
          </h2>

          <p className="text-[#A79FCB] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            &ldquo;Every milestone marks a new beginning. Follow us to stay informed about our latest developments, announcements, partnerships, and achievements.&rdquo;
          </p>

          {/* Social Channels: LinkedIn and Instagram */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com/company/yugnext"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0077B5] hover:bg-[#006097] text-white font-bold text-sm shadow-lg shadow-[#0077B5]/25 hover:shadow-xl transition-all cursor-pointer"
            >
              <LinkedInIcon className="w-5 h-5 fill-current" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://instagram.com/yugnext"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-[#DD2A7B]/25 hover:shadow-xl transition-all cursor-pointer"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* FULL STORY MODAL */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12102A] border border-[#2A2450] p-6 sm:p-10 shadow-2xl space-y-6 text-[#EFEDFA]">
            
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article 1: MANIT Funding & Incubation (8 May 2026) */}
            {activeStoryModal === "funding" && (
              <article className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span>PRESS RELEASE • 08 MAY 2026</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  YUGNEXT Secures ₹50,000 Funding and Gets Incubated at MANIT ROLTA Incubation Centre with Its EdTech Initiative, VidyaSetu
                </h2>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Bhopal, Madhya Pradesh</span>
                </div>

                <div className="prose prose-invert max-w-none text-[#C4B5FD]/90 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-white">Bhopal, Madhya Pradesh:</strong> In a significant achievement for its entrepreneurial journey, YUGNEXT received funding of ₹50,000 and secured incubation at the <strong className="text-white">MANIT ROLTA Incubation Centre</strong>, MANIT Bhopal, for its innovative educational technology initiative, <strong className="text-white">VidyaSetu</strong>.
                  </p>

                  <p>
                    The team, comprising <strong className="text-white">Harsh Rathore, Namish Jain, Amita Pal, and Krishna Upadhyay</strong>, presented their startup idea before a panel of judges on <strong className="text-white">16 April 2026</strong>. Their pitch focused on addressing the digital divide in India&apos;s education sector, particularly among schools in rural and semi-urban areas.
                  </p>

                  <p>
                    VidyaSetu aims to provide affordable and accessible digital solutions to schools through an integrated ecosystem of School Enterprise Resource Planning (ERP) software, websites, mobile applications, and other technology-driven services. The primary objective is to make digital transformation accessible to schools that often find existing solutions too expensive or complicated to implement.
                  </p>

                  <p>
                    A key differentiating factor of VidyaSetu is its emphasis on <strong className="text-white">affordability, simplicity, and user-friendly interfaces</strong>. By offering essential digital facilities at significantly lower costs, the initiative seeks to empower schools with limited resources to adopt modern technology and improve their administrative and educational operations.
                  </p>

                  <p>
                    The team received valuable mentorship, guidance, and references from <strong className="text-white">Dr. Sarvesh Pandey, Dr. Deepak Kumar, and Dr. Bholanth Roy</strong>, whose support contributed to shaping and presenting the initiative.
                  </p>

                  <p>
                    The incubation and funding mark an important milestone for YUGNEXT, providing the team with an opportunity to further develop its product, strengthen its technological capabilities, and expand its reach among schools.
                  </p>

                  <p>
                    Through VidyaSetu, YUGNEXT aims to bridge the digital gap in education by ensuring that access to modern technology is not limited by a school&apos;s financial resources or geographical location.
                  </p>

                  <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white font-medium italic">
                    &ldquo;The initiative reflects a larger vision: making quality digital infrastructure accessible to every school, irrespective of its location or scale.&rdquo;
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2450] flex justify-end">
                  <button
                    onClick={() => setActiveStoryModal(null)}
                    className="px-6 py-2.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold"
                  >
                    Close Story
                  </button>
                </div>
              </article>
            )}

            {/* Article 2: Incorporation (21 October 2026) */}
            {activeStoryModal === "incorporation" && (
              <article className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#6C3CE3]/30 text-purple-200 border border-[#6C3CE3]/40">
                  <span>OFFICIAL ANNOUNCEMENT • 21 OCTOBER 2026</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  From Campus Startup to Corporate Entity: YUGNEXT Officially Incorporated as a Private Limited Company
                </h2>

                <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Agra / Bhopal</span>
                </div>

                <div className="prose prose-invert max-w-none text-[#C4B5FD]/90 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-white">Agra/Bhopal, 21 October 2026:</strong> In a major milestone for its entrepreneurial journey, <strong className="text-white">YUGNEXT has officially been incorporated as YUGNEXT PRIVATE LIMITED</strong>, marking its transition into a formally registered company. Founded by young entrepreneur <strong className="text-white">Harsh Rathore</strong>, the company aims to build an ecosystem of affordable, accessible, and innovative technology solutions.
                  </p>

                  <p>
                    The company has established its <strong className="text-white">registered office in Agra, Uttar Pradesh, and corporate office in Bhopal, Madhya Pradesh</strong>, creating an operational presence across two important cities. Harsh Rathore will lead the organisation as its <strong className="text-white">Director and Chief Executive Officer (CEO)</strong>.
                  </p>

                  <p>
                    What began as an entrepreneurial initiative driven by the vision of making technology accessible has now evolved into a registered corporate venture. YUGNEXT&apos;s journey gained early momentum through its first initiative, <strong className="text-white">VidyaSetu</strong>, an EdTech solution designed to digitally empower rural and semi-urban schools through affordable school ERP systems, websites, mobile applications, and integrated digital services.
                  </p>

                  <p>
                    VidyaSetu received <strong className="text-white">₹50,000 in funding and incubation support from the MANIT ROLTA Incubation Centre, Maulana Azad National Institute of Technology (MANIT), Bhopal</strong>. The initiative reflected the company&apos;s commitment to addressing the technology gap in underserved educational institutions by prioritising affordability, simplicity, and ease of adoption.
                  </p>

                  <p>
                    With its formal incorporation, YUGNEXT is now positioned to expand beyond its initial initiative and explore opportunities across multiple technology-driven domains. The company aims to work at the intersection of software development, digital transformation, product innovation, and emerging technologies while creating opportunities for young professionals and student talent.
                  </p>

                  <p>
                    The incorporation represents more than a legal milestone; it marks the beginning of a new phase of institutional growth, business development, and long-term expansion. With its roots in the student startup ecosystem and ambitions extending beyond it, YUGNEXT seeks to establish itself as a technology company capable of turning practical ideas into scalable solutions.
                  </p>

                  <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white font-medium italic">
                    &ldquo;From an idea nurtured in the campus ecosystem to an incorporated company, YUGNEXT takes its next step towards building technology for the next generation.&rdquo;
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2450] flex justify-end">
                  <button
                    onClick={() => setActiveStoryModal(null)}
                    className="px-6 py-2.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold"
                  >
                    Close Story
                  </button>
                </div>
              </article>
            )}

          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
