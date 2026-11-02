"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Camera,
  Utensils,
  BookOpen,
  Users2,
  Dumbbell,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Lock,
} from "lucide-react";

// ALL 6 SERVICES (4 visible at a time + College Societies & Gym accessible via slider)
const SERVICES = [
  {
    id: "schools",
    title: "School Websites",
    tag: "Education",
    icon: GraduationCap,
    summary: "Comprehensive digital portals for schools with student dashboards, online admissions, fee integration, and notice systems.",
    sampleTitle: "Modern K-12 Institutional Platform",
    testimonial: "YugNext transformed our admission inquiries into an automated, error-free system. — Principal Sharma",
    link: "/services",
  },
  {
    id: "photostudios",
    title: "Photo Studio Websites",
    tag: "Creative Media",
    icon: Camera,
    summary: "High-resolution dynamic portfolios, client proofing galleries, and automated booking systems for photographers.",
    sampleTitle: "LensCraft Studio Showcase",
    testimonial: "Our clients love the instant proofing galleries and booking interface. — Arjun Verma",
    link: "/services",
  },
  {
    id: "restaurants",
    title: "Restaurant & Cafe Websites",
    tag: "Hospitality",
    icon: Utensils,
    summary: "Interactive digital menus, table reservation engines, QR code ordering, and local SEO dominance.",
    sampleTitle: "Artisan Bistro Experience",
    testimonial: "Table bookings doubled within 30 days of launching our new site. — Chef Priya M.",
    link: "/services",
  },
  {
    id: "coaching",
    title: "Coaching Institutes",
    tag: "EdTech",
    icon: BookOpen,
    summary: "Test series portals, study material vaults, batch schedules, and student progress tracking engines.",
    sampleTitle: "Apex Academy Online Hub",
    testimonial: "Managing 1,200+ students across batches became effortless. — Prof. R. Sen",
    link: "/services",
  },
  {
    id: "societies",
    title: "College Societies",
    tag: "Campus Ecosystem",
    icon: Users2,
    summary: "Event registration hubs, verified member directories, sponsor showcases, and automated tech-fest ticketing portals.",
    sampleTitle: "MANIT Bhopal Tech Fest Portal",
    testimonial: "Handled 5,000+ registrations flawlessly during our annual tech symposium. — Core Committee, MANIT",
    link: "/services",
  },
  {
    id: "gym",
    title: "Gym & Fitness Centers",
    tag: "Wellness",
    icon: Dumbbell,
    summary: "Automated membership renewals, trainer slot booking engines, customized diet vault, and attendance logging.",
    sampleTitle: "Pulse Fitness Club Hub",
    testimonial: "Renewals and signups skyrocketed with automated member alerts. — Kabir Singh, Pulse Gym",
    link: "/services",
  },
];

// EXACT 3 PRODUCTS FROM THE WIREFRAME SKETCH (Page 1)
const PRODUCTS = [
  {
    id: "shikshasathi",
    name: "ShikshaSathi",
    tag: "Education Technology",
    headline: "Making education more connected, accessible and useful.",
    description: "Technology built around real learning problems. Unified faculty-student portals and digital campus governance.",
    link: "/shikshasathi",
    isStealth: false,
  },
  {
    id: "settler",
    name: "Settler",
    tag: "Practical Living",
    headline: "Solving practical relocation & housing challenges through technology.",
    description: "Verified student accommodations, direct hostel listings, and effortless city onboarding for college hubs.",
    link: "/services",
    isStealth: false,
  },
  {
    id: "stealth",
    name: "Next Product",
    tag: "Stealth Initiative",
    headline: "What needs solving next? We are currently engineering it.",
    description: "Proprietary scalable platform backed by MANIT Bhopal incubation. Launching soon.",
    link: "/about",
    isStealth: true,
  },
];

export default function WhatWeDoSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Total 6 services. On desktop 4 visible at a time (max index = 6 - 4 = 2).
  const maxIndex = SERVICES.length - 4; // 2

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: SERVICES (WHITE BG) ================= */}
        <div className="space-y-8 mb-24">
          
          {/* Header & Carousel Arrow Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2 border-b border-slate-100">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/10 text-[#5d35e0] border border-[#5d35e0]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#5d35e0]" />
                <span>SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                From Digital Presence to <span className="text-[#5d35e0]">Digital Possibility.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Yugnext works across software, digital solutions, products and technology-led initiatives to help businesses move forward.
              </p>
            </div>

            {/* Slider Navigation Arrows (← & →) */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono font-bold text-slate-400 mr-1">
                {currentIndex + 1}–{Math.min(currentIndex + 4, SERVICES.length)} of {SERVICES.length}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous Services"
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#5d35e0] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#5d35e0] shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Services"
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#5d35e0] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#5d35e0] shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 4 CARDS VISIBLE AT ONCE — ULTRA-SMOOTH SLIDE FROM LEFT TO RIGHT ON ARROW CLICK */}
          <div className="overflow-hidden py-4 -mx-2 px-2">
            <div
              className="flex gap-6 transition-transform duration-[850ms] ease-[cubic-bezier(0.25,1,0.35,1)] will-change-transform"
              style={{
                transform: `translateX(calc(-1 * ${currentIndex} * var(--slide-step, calc(25% + 6px))))`,
              }}
            >
              {SERVICES.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.id}
                    className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 group relative rounded-3xl p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#5d35e0] hover:shadow-2xl hover:shadow-[#5d35e0]/15 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between h-[420px] overflow-hidden cursor-pointer"
                  >
                    {/* Top Bar: Icon & Tag */}
                    <div className="flex items-center justify-between w-full">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-[#5d35e0]/10 text-[#5d35e0] group-hover:bg-[#5d35e0] group-hover:text-white flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-500 group-hover:border-[#5d35e0]/30 group-hover:text-[#5d35e0] transition-colors duration-500">
                        {service.tag}
                      </span>
                    </div>

                    {/* Middle Section: The Title glides smoothly to the LEFT on hover */}
                    <div className="py-2 space-y-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <span className="text-[10px] font-mono text-slate-400 font-bold tracking-wider block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2.5">
                        0{index + 1} • SERVICE
                      </span>

                      {/* TITLE: Starts normally, and on hover glides smoothly to the LEFT with increased duration */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#5d35e0] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2.5 leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    {/* Full Text Reveal: Silky-smooth opacity & slide-in ONLY for this hovered card */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-[220px] group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden space-y-2.5">
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {service.summary}
                      </p>

                      {/* Sample Preview & Testimonial as sketched on wireframe */}
                      <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-100/90 text-xs space-y-1">
                        <span className="text-[10px] font-mono font-bold text-[#5d35e0] uppercase tracking-wider block">
                          {service.sampleTitle}
                        </span>
                        <p className="text-[11px] text-slate-700 italic font-light line-clamp-2">
                          &ldquo;{service.testimonial}&rdquo;
                        </p>
                      </div>

                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5d35e0] hover:text-[#4d28c8] pt-1"
                      >
                        <span>View Sample &amp; Testimonial</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Default Bottom Prompt: Fades out smoothly on hover */}
                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:opacity-0 group-hover:h-0 transition-all duration-500 overflow-hidden">
                      <span>Hover to explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Button for Services */}
          <div className="text-center pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-sm font-bold shadow-md shadow-[#5d35e0]/25 hover:shadow-lg transition-all cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* ================= SECTION 2: PRODUCTS (WHITE BG) ================= */}
        <div className="pt-10 border-t border-slate-100 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/10 text-[#5d35e0] border border-[#5d35e0]/20">
              <Layers className="w-3.5 h-3.5 text-[#5d35e0]" />
              <span>PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Ideas Are Everywhere. <span className="text-[#5d35e0]">Products That Solve Are Rare.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe the best products don&apos;t begin with: <strong className="text-slate-800">&ldquo;What can we build?&rdquo;</strong> They begin with: <strong className="text-[#5d35e0]">&ldquo;What needs solving?&rdquo;</strong>
            </p>
          </div>

          {/* EXACT 3 PRODUCTS AS SKETCHED (ShikshaSathi, Settler, Stealth Blur) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 items-stretch">
            {PRODUCTS.map((prod) => {
              return (
                <div
                  key={prod.id}
                  className={`group rounded-3xl p-7 border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between relative overflow-hidden min-h-[340px] cursor-pointer ${
                    prod.isStealth
                      ? "bg-slate-950 text-white border-slate-800"
                      : "bg-slate-50 hover:bg-white text-slate-900 border-slate-200 hover:border-[#5d35e0] hover:shadow-xl hover:shadow-[#5d35e0]/10"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        prod.isStealth
                          ? "bg-purple-950 text-purple-300 border border-purple-800"
                          : "bg-white border border-slate-200 text-[#5d35e0]"
                      }`}>
                        {prod.tag}
                      </span>
                      {prod.isStealth && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          <Lock className="w-3 h-3" />
                          <span>LAUNCH SOON</span>
                        </span>
                      )}
                    </div>

                    {/* Product Name: On hover slides to the LEFT with increased duration */}
                    <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2.5">
                      <h3 className={`text-2xl font-black ${prod.isStealth ? "text-white" : "text-slate-900 group-hover:text-[#5d35e0]"} transition-colors duration-500`}>
                        {prod.name}
                      </h3>
                      <p className={`text-xs font-semibold mt-1 ${prod.isStealth ? "text-purple-300" : "text-slate-700"}`}>
                        {prod.headline}
                      </p>
                    </div>

                    {/* Details: On hover smoothly reveals */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-[160px] group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden space-y-2">
                      <p className={`text-xs leading-relaxed font-light ${prod.isStealth ? "text-slate-400" : "text-slate-600"}`}>
                        {prod.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-6 mt-6 border-t border-slate-200/60">
                    <Link
                      href={prod.link}
                      className={`inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                        prod.isStealth
                          ? "bg-white/10 hover:bg-white/20 text-white"
                          : "bg-[#5d35e0] hover:bg-[#4d28c8] text-white shadow-sm shadow-[#5d35e0]/20"
                      }`}
                    >
                      <span>{prod.isStealth ? "Stay Notified" : `Explore ${prod.name}`}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Button for Products */}
          <div className="text-center pt-4">
            <Link
              href="/shikshasathi"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-sm font-bold shadow-md shadow-[#5d35e0]/25 hover:shadow-lg transition-all cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
