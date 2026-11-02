"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Camera,
  Utensils,
  BookOpen,
  Users2,
  Dumbbell,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock,
  CheckCircle,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  tag: string;
  icon: any;
  summary: string;
  features: string[];
  sampleTitle: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const SERVICES_LIST: ServiceCard[] = [
  {
    id: "schools",
    title: "School Websites",
    tag: "Education",
    icon: GraduationCap,
    summary: "Comprehensive digital portals for schools with student dashboards, admissions, fee integration, and notice systems.",
    features: ["Online Admissions & Fee Portal", "Parent-Teacher Dashboard", "100% Mobile Optimized"],
    sampleTitle: "Modern K-12 Institutional Platform",
    testimonial: {
      quote: "YugNext transformed our admission inquiries into an automated, error-free system.",
      author: "Principal Sharma",
      role: "Delhi Public Hub",
    },
  },
  {
    id: "photostudios",
    title: "Photo Studio Websites",
    tag: "Creative Media",
    icon: Camera,
    summary: "High-resolution dynamic portfolios, client proofing galleries, and automated booking systems for photographers.",
    features: ["Watermarked Client Galleries", "Instant Appointment Booking", "Fast 60fps Visual Grid"],
    sampleTitle: "LensCraft Studio Showcase",
    testimonial: {
      quote: "Our clients love the instant proofing galleries and booking interface.",
      author: "Arjun Verma",
      role: "Founder, Studio FrameX",
    },
  },
  {
    id: "restaurants",
    title: "Restaurant & Cafe Websites",
    tag: "Hospitality",
    icon: Utensils,
    summary: "Interactive digital menus, table reservation engines, QR code ordering, and local SEO dominance.",
    features: ["Dynamic Digital Menu", "Table Booking Engine", "Direct WhatsApp Ordering"],
    sampleTitle: "Artisan Bistro Digital Experience",
    testimonial: {
      quote: "Table bookings doubled within 30 days of launching our new site.",
      author: "Chef Priya M.",
      role: "The Roasted Bean Cafe",
    },
  },
  {
    id: "coaching",
    title: "Coaching Institutes",
    tag: "EdTech",
    icon: BookOpen,
    summary: "Test series portals, study material distribution, batch schedules, and student progress tracking.",
    features: ["Online Test Simulation", "Lecture & Material Vault", "Batch Management"],
    sampleTitle: "Apex Academy Online Hub",
    testimonial: {
      quote: "Managing 1,200+ students across batches became effortless.",
      author: "Prof. R. Sen",
      role: "Director, Apex Academy",
    },
  },
  {
    id: "societies",
    title: "College Societies",
    tag: "Campus Ecosystem",
    icon: Users2,
    summary: "Event registrations, member directories, sponsorship showcases, and hackathon management portals.",
    features: ["Event Ticket QR Generation", "Sponsor Showcase", "Recruitment Forms"],
    sampleTitle: "MANIT Bhopal Tech Fest Portal",
    testimonial: {
      quote: "Handled 5,000+ registrations flawlessly during our annual tech symposium.",
      author: "Core Committee",
      role: "Student Council, MANIT",
    },
  },
  {
    id: "gym",
    title: "Gym & Fitness Centers",
    tag: "Wellness",
    icon: Dumbbell,
    summary: "Membership subscriptions, trainer booking, diet planners, and automated attendance logging.",
    features: ["Subscription Payment Gateways", "Trainer Slot Booking", "Daily Workout Schedules"],
    sampleTitle: "Pulse Fitness Club",
    testimonial: {
      quote: "Renewals and signups skyrocketed with automated WhatsApp alerts.",
      author: "Kabir Singh",
      role: "Head Coach, Pulse Gym",
    },
  },
];

interface ProductItem {
  id: string;
  name: string;
  tag: string;
  headline: string;
  description: string;
  status: "live" | "stealth";
  features: string[];
  link: string;
}

const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "shikshasathi",
    name: "ShikshaSathi",
    tag: "Education Technology",
    headline: "Making education more connected, accessible and useful.",
    description: "Technology built around real learning problems. Unified faculty-student portals, automated compliance, and digital campus governance.",
    status: "live",
    features: ["Connected Campus Architecture", "High Uptime Cloud Infra", "Verified Institutional Outcomes"],
    link: "/shikshasathi",
  },
  {
    id: "settler",
    name: "Settler",
    tag: "Practical Living",
    headline: "Solving practical relocation & housing challenges through technology.",
    description: "Smart student accommodation matching, verified hostel listings, and effortless city relocation built for college hubs.",
    status: "live",
    features: ["Direct Verified Landlord Trust", "Zero Brokerage Hassle", "Chennai & Bhopal Student Node"],
    link: "/services",
  },
  {
    id: "stealth",
    name: "Next Product",
    tag: "Stealth Initiative",
    headline: "What needs solving next? We are currently engineering it.",
    description: "Our upcoming proprietary product focused on scalable autonomous operations and digital trust infrastructure.",
    status: "stealth",
    features: ["Proprietary AI Pipeline", "MANIT Incubation Backed", "Enterprise Security Tier"],
    link: "/about",
  },
];

export default function WhatWeDoSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: SERVICES (WHITE BG) ================= */}
        <div className="space-y-6 mb-24">
          
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/10 text-[#5d35e0] border border-[#5d35e0]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#5d35e0]" />
                <span>WHAT WE DO — SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                From Digital Presence to <span className="text-[#5d35e0]">Digital Possibility.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We build the technology, websites, and specialized portals that help businesses and organisations keep up — and move ahead.
              </p>
            </div>

            {/* Slider Navigation Arrows (<- & ->) */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Previous Services"
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#5d35e0] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#5d35e0] shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Next Services"
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#5d35e0] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#5d35e0] shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          >
            {SERVICES_LIST.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="w-[320px] sm:w-[360px] shrink-0 snap-start rounded-3xl p-6 sm:p-7 bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#5d35e0] hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#5d35e0]/10 text-[#5d35e0] group-hover:bg-[#5d35e0] group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600">
                        {service.tag}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#5d35e0] transition-colors">
                      {service.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {service.summary}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 text-xs text-slate-700 pt-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#5d35e0] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* On Hover: Reveal Sample & Testimonial Preview */}
                  <div className="pt-5 mt-5 border-t border-slate-200/80 space-y-3">
                    <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100/80">
                      <span className="text-[10px] font-mono font-bold text-[#5d35e0] uppercase tracking-wider block mb-1">
                        SAMPLE PREVIEW
                      </span>
                      <p className="text-xs font-bold text-slate-900">
                        {service.sampleTitle}
                      </p>
                      <p className="text-[11px] text-slate-600 italic mt-1 line-clamp-2">
                        &ldquo;{service.testimonial.quote}&rdquo;
                      </p>
                    </div>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5d35e0] hover:text-[#4d28c8] group-hover:translate-x-1 transition-all"
                    >
                      <span>View Sample &amp; Testimonial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
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
              <span>PROPRIETARY PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Ideas Are Everywhere. <span className="text-[#5d35e0]">Products That Solve Are Rare.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe the best products don&apos;t begin with: <strong className="text-slate-800">&ldquo;What can we build?&rdquo;</strong> They begin with: <strong className="text-[#5d35e0]">&ldquo;What needs solving?&rdquo;</strong>
            </p>
          </div>

          {/* 3 Product Cards: ShikshaSathi, Settler, Blur/Launch Soon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {PRODUCTS_LIST.map((prod) => {
              const isStealth = prod.status === "stealth";

              return (
                <div
                  key={prod.id}
                  className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between relative group ${
                    isStealth
                      ? "bg-slate-900 text-white border-slate-800"
                      : "bg-slate-50 hover:bg-white text-slate-900 border-slate-200 hover:border-[#5d35e0] hover:shadow-xl hover:shadow-[#5d35e0]/10"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        isStealth
                          ? "bg-purple-950 text-purple-300 border border-purple-800"
                          : "bg-white border border-slate-200 text-[#5d35e0]"
                      }`}>
                        {prod.tag}
                      </span>
                      {isStealth ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                          <Lock className="w-3 h-3" />
                          <span>LAUNCH SOON</span>
                        </span>
                      ) : (
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      )}
                    </div>

                    <h3 className={`text-2xl font-black ${isStealth ? "text-white" : "text-slate-900 group-hover:text-[#5d35e0]"} transition-colors`}>
                      {prod.name}
                    </h3>

                    <p className={`text-xs font-semibold ${isStealth ? "text-purple-300" : "text-slate-700"}`}>
                      {prod.headline}
                    </p>

                    <p className={`text-xs leading-relaxed font-light ${isStealth ? "text-slate-400" : "text-slate-600"}`}>
                      {prod.description}
                    </p>

                    {/* Features List */}
                    <div className="pt-2 space-y-1.5 text-xs">
                      {prod.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isStealth ? "text-purple-400" : "text-[#5d35e0]"}`} />
                          <span className={isStealth ? "text-slate-300" : "text-slate-700"}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-6 mt-6 border-t border-slate-200/60">
                    <Link
                      href={prod.link}
                      className={`inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                        isStealth
                          ? "bg-white/10 hover:bg-white/20 text-white"
                          : "bg-[#5d35e0] hover:bg-[#4d28c8] text-white shadow-sm shadow-[#5d35e0]/20"
                      }`}
                    >
                      <span>{isStealth ? "Stay Notified" : `Explore ${prod.name}`}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Button for Products */}
          <div className="text-center pt-2">
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
