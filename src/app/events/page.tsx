"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Compass,
  CheckCircle,
  Bell,
} from "lucide-react";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0A0818] text-[#EFEDFA] flex flex-col justify-between selection:bg-[#6C3CE3] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-[#0a0422] text-white relative overflow-hidden border-b border-[#2A2450]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#5d35e0]/20 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-[#9B7BF0] font-bold">EVENTS &amp; EXPERIENCES</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
              <Calendar className="w-3.5 h-3.5 text-[#9B7BF0]" />
              <span>EVENTS &amp; EXPERIENCES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Where Ideas Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B7BF0] to-[#6C3CE3]">Opportunities.</span>
            </h1>

            <p className="text-[#A79FCB] text-base sm:text-xl leading-relaxed font-light">
              From insightful sessions to collaborative initiatives, we&apos;re working towards creating experiences that inspire, connect, and empower. Our journey of events and activities begins soon.
            </p>

            <div className="pt-2">
              <a
                href="#stay-connected"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Stay Connected</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section: Events Timeline & Cards */}
      <section className="py-20 bg-[#0A0818] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Past Events */}
            <div className="p-8 rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center justify-center font-bold">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 block">
                    ARCHIVE &amp; RETROSPECTIVES
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Past Events</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                  Our event journey is about to begin.
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A2450] text-xs font-mono text-slate-500 flex items-center gap-2 relative z-10">
                <span className="w-2 h-2 rounded-full bg-blue-400/60" />
                <span>Season 2026–2027 Inception</span>
              </div>
            </div>

            {/* Card 2: Upcoming Events */}
            <div className="p-8 rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6C3CE3]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9B7BF0] block">
                    ON THE HORIZON
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Upcoming Events</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                  Exciting opportunities are in the making.
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A2450] text-xs font-mono text-emerald-400 flex items-center gap-2 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Engineering in Progress</span>
              </div>
            </div>

            {/* Card 3: Stay Connected */}
            <div className="p-8 rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-pink-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center justify-center font-bold">
                  <Bell className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-300 block">
                    COMMUNITY UPDATES
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Stay Connected</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed font-light">
                  Follow us for the latest announcements and updates.
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A2450] text-xs font-mono text-pink-300 flex items-center gap-2 relative z-10">
                <span className="w-2 h-2 rounded-full bg-pink-400" />
                <span>Open for Collaboration</span>
              </div>
            </div>

          </div>

          {/* CTA Banner: Stay Connected */}
          <div id="stay-connected" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12102A] via-[#1a1440] to-[#12102A] border border-[#2A2450] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase text-[#9B7BF0] tracking-wider">
                GET FIRST ACCESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Be the First to Know When We Go Live.
              </h3>
              <p className="text-xs sm:text-sm text-[#A79FCB] font-light max-w-xl">
                Join students, founders, and creators across colleges and enterprise networks who get early notifications for YugNext events and hackathons.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Stay Connected</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
