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
    bgPattern: "from-blue-900/40 via-indigo-950/60 to-[#0e1630]",
    accentGlow: "bg-blue-500/20",
    bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
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
    bgPattern: "from-blue-950/50 via-slate-900/60 to-[#09152e]",
    accentGlow: "bg-cyan-500/20",
    bgImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
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
    bgPattern: "from-blue-900/50 via-indigo-950/60 to-[#0c1836]",
    accentGlow: "bg-blue-600/20",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
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
    bgPattern: "from-sky-950/60 via-blue-950/60 to-[#0a1738]",
    accentGlow: "bg-sky-500/20",
    bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
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
    bgPattern: "from-blue-950/60 via-indigo-900/50 to-[#0d173b]",
    accentGlow: "bg-indigo-500/20",
    bgImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
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
    bgPattern: "from-slate-900/60 via-blue-950/60 to-[#09142b]",
    accentGlow: "bg-blue-400/20",
    bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
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
    isBlurred: false,
    bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "settler",
    name: "Settler",
    tag: "Finance",
    headline: "Solving practical relocation & housing challenges through technology.",
    description: "Verified student accommodations, direct hostel listings, and effortless city onboarding for college hubs.",
    link: "/#contact",
    isStealth: true,
    isBlurred: true,
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "campusneeds",
    name: "CampusNeeds",
    tag: "Logistics",
    headline: "What needs solving next? We are currently engineering it.",
    description: "A digital approach to simplifying everyday needs across campus ecosystems. Launching soon.",
    link: "/#contact",
    isStealth: true,
    isBlurred: true,
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
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
    <section id="what-we-do" className="py-20 lg:py-28 bg-white text-slate-900 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: SERVICES ================= */}
        <div className="space-y-8 mb-24">
          
          {/* Header & Carousel Arrow Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2 border-b border-slate-200">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/10 text-[#6C3CE3] border border-[#6C3CE3]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#6C3CE3]" />
                <span>WHAT WE DO</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                From Digital Presence to <span className="text-[#6C3CE3]">Digital Possibility.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Yugnext works across software, digital solutions, products and technology-led initiatives to help businesses move forward.
              </p>
            </div>

            {/* Slider Navigation Arrows (← & →) */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono font-bold text-slate-500 mr-1">
                {currentIndex + 1}–{Math.min(currentIndex + 4, SERVICES.length)} of {SERVICES.length}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous Services"
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#6C3CE3] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#6C3CE3] shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Services"
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#6C3CE3] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#6C3CE3] shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
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
                    className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 group relative rounded-3xl p-6 sm:p-7 bg-[#0b1329] border border-blue-900/40 hover:border-blue-500 shadow-xl shadow-blue-950/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between h-[420px] overflow-hidden cursor-pointer text-white"
                  >
                    {/* Atmospheric Blue Thematic Background with Soft Overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40 transition-opacity duration-700 mix-blend-luminosity scale-100 group-hover:scale-105 pointer-events-none"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b1329]/80 via-[#0d1838]/90 to-[#070e24] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

                    {/* Top Bar: Icon & Tag */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-400/30 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-300 group-hover:border-blue-400 group-hover:text-white transition-colors duration-500">
                        {service.tag}
                      </span>
                    </div>

                    {/* Middle Section: The Title glides smoothly to the LEFT on hover */}
                    <div className="relative z-10 py-2 space-y-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <span className="text-[10px] font-mono text-blue-300/80 font-bold tracking-wider block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2.5">
                        0{index + 1} • SERVICE
                      </span>

                      {/* TITLE: Starts normally, and on hover glides smoothly to the LEFT with increased duration */}
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-300 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2.5 leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    {/* Full Text Reveal: Silky-smooth opacity & slide-in ONLY for this hovered card */}
                    <div className="relative z-10 max-h-0 opacity-0 group-hover:max-h-[220px] group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden space-y-2.5">
                      <p className="text-xs text-blue-100/90 leading-relaxed font-light">
                        {service.summary}
                      </p>

                      {/* Sample Preview & Testimonial */}
                      <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/50 text-xs space-y-1 backdrop-blur-xs">
                        <span className="text-[10px] font-mono font-bold text-blue-300 uppercase tracking-wider block">
                          {service.sampleTitle}
                        </span>
                        <p className="text-[11px] text-blue-200/90 italic font-light line-clamp-2">
                          &ldquo;{service.testimonial}&rdquo;
                        </p>
                      </div>

                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white pt-1"
                      >
                        <span>View Sample &amp; Testimonial</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Default Bottom Prompt: Fades out smoothly on hover */}
                    <div className="relative z-10 pt-3 border-t border-blue-900/50 flex items-center justify-between text-xs font-semibold text-blue-300/70 group-hover:opacity-0 group-hover:h-0 transition-all duration-500 overflow-hidden">
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-sm font-bold shadow-md shadow-[#6C3CE3]/25 hover:shadow-lg transition-all cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* ================= SECTION 2: PRODUCTS ================= */}
        <div className="pt-10 border-t border-slate-200 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/10 text-[#6C3CE3] border border-[#6C3CE3]/20">
              <Layers className="w-3.5 h-3.5 text-[#6C3CE3]" />
              <span>PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ideas Are Everywhere. <span className="text-[#6C3CE3]">Products That Solve Are Rare.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              We believe the best products don&apos;t begin with: <strong className="text-slate-900">&ldquo;What can we build?&rdquo;</strong> They begin with: <strong className="text-[#6C3CE3]">&ldquo;What needs solving?&rdquo;</strong>
            </p>
          </div>

          {/* EXACT 3 PRODUCTS AS SKETCHED (ShikshaSathi, Settler, Stealth Blur) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 items-stretch">
            {PRODUCTS.map((prod) => {
              return (
                <div
                  key={prod.id}
                  className={`group rounded-3xl p-7 border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between relative overflow-hidden min-h-[340px] cursor-pointer shadow-xl shadow-blue-950/20 hover:shadow-2xl hover:shadow-blue-500/20 text-white ${
                    prod.isStealth
                      ? "bg-[#0b1329] border-dashed border-blue-700/50 hover:border-blue-400"
                      : "bg-[#0b1329] border-blue-900/40 hover:border-blue-500"
                  }`}
                >
                  {/* Atmospheric Blue Background Texture */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40 transition-opacity duration-700 mix-blend-luminosity scale-100 group-hover:scale-105 pointer-events-none"
                    style={{ backgroundImage: `url(${prod.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0b1329]/80 via-[#0d1838]/90 to-[#070e24] pointer-events-none" />
                  <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        prod.isStealth
                          ? "bg-blue-950/90 text-blue-300 border border-blue-700/60"
                          : "bg-blue-950/80 border border-blue-800/60 text-blue-300"
                      }`}>
                        {prod.tag}
                      </span>
                      {prod.isStealth && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-blue-950 text-amber-300 border border-amber-400/40 shadow-xs">
                          <Lock className="w-3 h-3 text-amber-400" />
                          <span>LAUNCH SOON</span>
                        </span>
                      )}
                    </div>

                    {/* Product Name: On hover slides to the LEFT with increased duration */}
                    <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2.5">
                      <h3 className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors duration-500">
                        {prod.name}
                      </h3>
                      <p className={`text-xs font-semibold mt-1 text-blue-200/80 ${
                        prod.isBlurred ? "filter blur-[4.5px] select-none opacity-60 pointer-events-none" : ""
                      }`}>
                        {prod.headline}
                      </p>
                    </div>

                    {/* Details: On hover smoothly reveals */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-[160px] group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden space-y-2">
                      <p className={`text-xs leading-relaxed font-light text-blue-100/90 ${
                        prod.isBlurred ? "filter blur-[4.5px] select-none opacity-60 pointer-events-none" : ""
                      }`}>
                        {prod.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-blue-900/50">
                    <Link
                      href={prod.link}
                      className={`inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                        prod.isStealth
                          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30"
                          : "bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/30"
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-sm font-bold shadow-md shadow-[#6C3CE3]/25 hover:shadow-lg transition-all cursor-pointer"
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
