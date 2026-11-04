"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Quote,
  Sparkles,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  MapPin,
  ExternalLink,
  Star,
  Award,
} from "lucide-react";

export default function CustomerStoriesPage() {
  return (
    <main className="min-h-screen bg-[#0A0818] text-[#EFEDFA] flex flex-col justify-between selection:bg-[#6C3CE3] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-[#0a0422] text-white relative overflow-hidden border-b border-[#2A2450]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-[#5d35e0]/20 blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-[#9B7BF0] font-bold">CUSTOMER STORIES</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#9B7BF0]" />
              <span>TESTIMONIALS &amp; CLIENT IMPACT</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Real Impact. <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B7BF0] via-[#A78BFA] to-[#6C3CE3]">
                Trusted by Founders &amp; Institutions.
              </span>
            </h1>

            <p className="text-[#A79FCB] text-base sm:text-xl leading-relaxed font-light">
              See how YUGNEXT engineers specialized web platforms, digital systems, and impactful tech solutions that deliver tangible outcomes for organizations nationwide.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Build With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#12102A] hover:bg-[#1A1638] text-[#C4B5FD] text-xs sm:text-sm font-semibold border border-[#2A2450] transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Customer Story: Nexan Academy */}
      <section className="py-20 bg-[#0A0818] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9B7BF0] uppercase block">
              CLIENT TESTIMONIAL &amp; CASE STUDY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Nexan Academy — Digital Platform Delivery
            </h2>
          </div>

          {/* Large Testimonial Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#12102A] via-[#161234] to-[#12102A] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#6C3CE3]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Photo & Author Card */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-[#181534] border border-[#2A2450]">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#6C3CE3]/40 shadow-xl shadow-[#6C3CE3]/20">
                    <img
                      src="/images/gnanaguru-nexan.jpg"
                      alt="Gnanaguru S. - Founder & CEO, Nexan Academy"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 text-white shadow-md">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Gnanaguru S.</h3>
                  <p className="text-xs font-mono text-[#9B7BF0] font-semibold">Founder &amp; CEO, Nexan Academy</p>
                  <p className="text-[11px] text-[#A79FCB] flex items-center justify-center gap-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>From Chennai</span>
                  </p>
                </div>

                {/* Rating & Project Badge */}
                <div className="pt-2 border-t border-[#2A2450] w-full flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#6C3CE3]/20 text-purple-200 border border-[#6C3CE3]/30">
                    Client Date: 10 July 2026
                  </span>
                </div>
              </div>

              {/* Right Column: Complete Letter / Feedback Text */}
              <div className="lg:col-span-8 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center">
                  <Quote className="w-6 h-6" />
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#C4B5FD]/95 leading-relaxed font-sans">
                  <p className="font-semibold text-white text-base sm:text-lg">
                    Dear Harsh Rathore Sir,
                  </p>

                  <p>
                    Thank you so much for creating the website for Nexan Academy. Your work is truly memorable to me, and I sincerely appreciate the time, effort, and dedication you put into it.
                  </p>

                  <p className="p-4 rounded-xl bg-purple-950/30 border-l-4 border-[#6C3CE3] text-white font-medium">
                    &ldquo;The website looks perfect and extraordinary. It reflects professionalism and quality, and I am genuinely grateful for your support. Your contribution means a lot to me and to Nexan Academy.&rdquo;
                  </p>

                  <p>
                    I hope you will continue to support our academy in the future as we grow and help more students.
                  </p>

                  <p>
                    Thank you once again, Sir!
                  </p>

                  <div className="pt-2 space-y-0.5">
                    <p className="text-white font-semibold">With gratitude,</p>
                    <p className="text-[#9B7BF0] font-bold">Gnanaguru S.</p>
                    <p className="text-xs text-[#A79FCB]">Founder &amp; CEO, Nexan Academy (Chennai)</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2450] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>Project Scope: Full Institutional Web Architecture &amp; UI</span>
                  </div>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/30 transition-all cursor-pointer"
                  >
                    <span>Request Similar Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-20 bg-[#0A0818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#12102A] border border-[#2A2450] text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to create something extraordinary for your organization?
            </h3>
            <p className="text-xs sm:text-sm text-[#A79FCB] max-w-xl mx-auto font-light leading-relaxed">
              We engineer custom web platforms, institutional software, and digital experiences tailored to your goals.
            </p>
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
      </section>

      <Footer />
    </main>
  );
}
