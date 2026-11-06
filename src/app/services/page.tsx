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
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const SERVICES_DATA = [
    {
      number: "01",
      title: "School Websites",
      description:
        "Professional school websites featuring institutional information, admission details, academic updates, and parent communication.",
      bullets: [
        "School Information & Admissions",
        "Academic Updates & Announcements",
        "Parent-Teacher Communication",
      ],
      project: {
        name: "Pathfinder School",
        desc: "A technology-focused school initiative centred on digital learning, student engagement, and school operations.",
      },
      icon: GraduationCap,
    },
    {
      number: "02",
      title: "Coaching Institute Websites",
      description:
        "Websites for coaching institutes to showcase courses, share learning resources, and simplify student inquiries.",
      bullets: [
        "Course & Batch Information",
        "Online Admission Inquiries",
        "Study Materials & Learning Resources",
      ],
      project: {
        name: "Nexan Academy",
        desc: "An education-focused platform developed around learning opportunities, skill development, and educational resources.",
      },
      icon: BookOpen,
    },
    {
      number: "03",
      title: "Photography Studio Websites",
      description:
        "Portfolio-driven websites for photographers and studios, featuring visual galleries and client interaction facilities.",
      bullets: [
        "Photography Portfolios & Digital Galleries",
        "Client Photo Sharing & Proofing",
        "Online Booking & Inquiry Forms",
      ],
      project: null,
      icon: Camera,
    },
    {
      number: "04",
      title: "Restaurant & Café Websites",
      description:
        "Digital platforms for restaurants and cafés to showcase their offerings and connect with customers.",
      bullets: [
        "Digital Menus & QR Integration",
        "Business Information & Location",
        "WhatsApp Ordering & Inquiries",
      ],
      project: null,
      icon: UtensilsCrossed,
    },
    {
      number: "05",
      title: "Society/Organisation Websites — Pravah Web",
      description:
        "Functional, responsive website development for college societies to showcase activities and establish a dedicated digital presence.",
      bullets: [
        "Society Information & Activities",
        "Member Registration & Recruitment",
        "Events & Announcements",
      ],
      project: null,
      icon: Users,
    },
    {
      number: "06",
      title: "Event Websites — MAFFICK Web",
      description:
        "Responsive event website development to bring festival information, schedules, and registrations together.",
      bullets: [
        "Event Information & Schedules",
        "Online Registrations & Participation",
        "Event Updates & Announcements",
      ],
      project: null,
      icon: Users,
    },
    {
      number: "07",
      title: "Gym & Fitness Club Websites",
      description:
        "Digital platforms for gyms and fitness centres featuring membership information, training services, and member-focused interfaces.",
      bullets: [
        "Membership & Service Information",
        "Member-Focused Digital Interfaces",
        "Training & Fitness Services",
      ],
      project: {
        name: "Goodlife Gym, Agra",
        desc: "Developed a gym website and custom member application to establish its digital presence and support member interactions.",
      },
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
              Services We Offer
            </h1>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 sm:py-20 bg-[#0A0818] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-6">
            {SERVICES_DATA.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-9 rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all shadow-xl space-y-5 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A2450]/80">
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-mono font-black text-[#9B7BF0]">
                        {service.number}.
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#C4B5FD] transition-colors">
                        {service.title}
                      </h2>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#181534] border border-[#2A2450] text-[#9B7BF0] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#EFEDFA]/90 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-1">
                    {service.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6C3CE3] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Associated Project if present */}
                  {service.project && (
                    <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#181534] border border-[#6C3CE3]/30 text-xs sm:text-sm space-y-1">
                      <span className="font-bold text-[#9B7BF0] block">
                        Project: {service.project.name}
                      </span>
                      <p className="text-slate-300 font-light leading-relaxed">
                        {service.project.desc}
                      </p>
                    </div>
                  )}
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
