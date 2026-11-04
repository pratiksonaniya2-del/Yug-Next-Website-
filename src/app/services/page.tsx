"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Zap,
  BookOpen,
  Camera,
  Utensils,
  Users2,
  Dumbbell,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "platforms" | "websites">("all");

  const ENTERPRISE_SERVICES = [
    {
      title: "NexanAcademy",
      category: "platforms",
      icon: GraduationCap,
      summary: "Technology and digital initiatives built around evolving needs in learning, upskilling, and business capabilities.",
      features: ["Custom Curriculum Platforms", "Corporate Skill Assessments", "Interactive Engineering Labs"],
    },
    {
      title: "Pravaah Solutions",
      category: "platforms",
      icon: Zap,
      summary: "Digital solutions designed to turn complex business ideas and opportunities into practical, scalable outcomes.",
      features: ["Cloud-Native Microservices", "Automated Business Workflows", "API Gateway & Integrations"],
    },
    {
      title: "Cybersecurity & Compliance",
      category: "platforms",
      icon: ShieldCheck,
      summary: "Building software with a stronger focus on enterprise security, vulnerability testing, zero-trust design, and responsible digital practices.",
      features: ["VAPT & Code Auditing", "Zero-Trust Architecture", "Data Privacy & Compliance"],
    },
    {
      title: "Pathfinder School",
      category: "platforms",
      icon: BookOpen,
      summary: "Technology-led initiatives focused on creating better learning opportunities and immersive student experiences.",
      features: ["Smart Classroom Systems", "Student Progress Analytics", "Parent-Teacher Engagement"],
    },
    {
      title: "School Websites & Portals",
      category: "websites",
      icon: GraduationCap,
      summary: "Full-lifecycle digital portals for educational institutions with admission funnels, fee payment gateways, and dashboards.",
      features: ["Admissions & Inquiries", "Automated Fee Invoicing", "Instant Notice Broadcasts"],
    },
    {
      title: "Photo Studio Websites",
      category: "websites",
      icon: Camera,
      summary: "High-resolution portfolios, proofing galleries with watermarking, and online booking engines for photographers.",
      features: ["Private Client Proofing", "Automated Deposit Booking", "Mobile-Optimized Lightbox"],
    },
    {
      title: "Restaurant & Cafe Digital Menus",
      category: "websites",
      icon: Utensils,
      summary: "Dynamic QR code menus, table reservations, direct WhatsApp order routing, and local Google SEO dominance.",
      features: ["Instant Menu Price Updates", "Table Reservation Engine", "WhatsApp Checkout"],
    },
    {
      title: "Coaching Institute Portals",
      category: "websites",
      icon: BookOpen,
      summary: "Simulated online test series, study vaults, student batch schedules, and automated exam performance metrics.",
      features: ["CBT Exam Engine", "Notes & Video Library", "Batch Attendance Alerts"],
    },
    {
      title: "College Society Platforms",
      category: "websites",
      icon: Users2,
      summary: "Event ticketing with QR check-in, member registrations, sponsorship showcases, and hackathon leaderboards.",
      features: ["QR Event Entry Passes", "Sponsor Showcase Grid", "Recruitment Form Pipelines"],
    },
    {
      title: "Gym & Fitness Club Portals",
      category: "websites",
      icon: Dumbbell,
      summary: "Recurring subscription payments, trainer slot scheduling, personalized workout logs, and WhatsApp reminders.",
      features: ["UPI Subscription Billing", "Trainer Calendar Booking", "Attendance & Diet Plans"],
    },
  ];

  const filtered = activeCategory === "all"
    ? ENTERPRISE_SERVICES
    : ENTERPRISE_SERVICES.filter((s) => s.category === activeCategory);

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
            <span className="text-[#9d7df7] font-bold">SERVICES</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>SERVICES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              What We Do: From Digital Presence to <span className="text-[#9d7df7]">Digital Possibility.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              Here is what we do at Yugnext: we build targeted software platforms, practical digital solutions, specialized websites, and technology-led initiatives to help businesses and organisations move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Controls */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {[
              { id: "all", label: "All Capabilities" },
              { id: "platforms", label: "Enterprise Platforms (Nexan, Pravaah, Cybersecurity)" },
              { id: "websites", label: "Specialized Sector Websites" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#5d35e0] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-slate-500">
            Showing {filtered.length} Solutions
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Prominent WHAT WE DO Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/10 text-[#5d35e0] border border-[#5d35e0]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#5d35e0]" />
              <span>WHAT WE DO • CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What We Do: Engineered for Real Outcomes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Explore how Yugnext turns digital ambitions into operational realities across specialized platforms and modern web portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-3xl p-7 bg-slate-50 border border-slate-200 hover:border-[#5d35e0] hover:bg-white hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#5d35e0]/10 text-[#5d35e0] group-hover:bg-[#5d35e0] group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">0{index + 1}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#5d35e0] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {service.summary}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#5d35e0] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#5d35e0] hover:text-[#4d28c8] group-hover:translate-x-1 transition-all"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery Network Note */}
          <div className="mt-16 p-8 rounded-3xl bg-[#0e0738] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#9d7df7]">READY TO DEPLOY</span>
              <h3 className="text-2xl font-black mt-1">Need a custom digital platform?</h3>
              <p className="text-xs text-slate-300 mt-1">Our engineering teams in Chennai, Bhopal, and Agra are ready to consult.</p>
            </div>
            <Link
              href="/#contact"
              className="px-7 py-3 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5d35e0]/25 transition-all whitespace-nowrap cursor-pointer"
            >
              Start the Conversation →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
