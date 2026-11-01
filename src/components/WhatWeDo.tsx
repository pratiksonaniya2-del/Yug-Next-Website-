"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Compass,
  Layers,
  Sparkles,
  ShieldAlert,
  Cpu,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

type ItemType = "all" | "products" | "services";

const OFFERINGS = [
  {
    id: "shikshasetu",
    type: "products",
    name: "Shikshasetu",
    tagline: "The Modern Digital Bridge for Higher Education",
    category: "EdTech Platform",
    icon: GraduationCap,
    color: "from-purple-600 to-indigo-600",
    badge: "Flagship Product",
    desc: "A unified cloud architecture connecting students, faculty, and administrative departments. Streamlines academic records, course tracking, fee management, and institutional communications.",
    features: [
      "Unified Student-Faculty Portal",
      "Automated Academic Record Keeping",
      "Seamless Departmental Communication",
      "Mobile-First Responsive Dashboard",
    ],
  },
  {
    id: "campusneeds",
    type: "products",
    name: "CampusNeeds",
    tagline: "All-in-One Campus Lifecycle & Services Ecosystem",
    category: "Campus Marketplace",
    icon: Building2,
    color: "from-indigo-600 to-blue-600",
    badge: "High Growth",
    desc: "Comprehensive on-campus utilities, essential student resources, stationery, meal subscriptions, and verified peer-to-peer student marketplace built for engineering & university campuses.",
    features: [
      "Verified Student-to-Student Marketplace",
      "Campus Essentials & Resource Delivery",
      "Hostel & Departmental Utility Requests",
      "Instant Micro-Transactions & Ledger",
    ],
  },
  {
    id: "settler",
    type: "products",
    name: "Settler",
    tagline: "Frictionless Relocation & Accommodation Platform",
    category: "Living & Mobility",
    icon: Layers,
    color: "from-pink-600 to-purple-600",
    badge: "Smart Living",
    desc: "Eliminates the stress of relocating for higher education and internships. Verifies rental accommodations, roommate matching, flatmate agreements, and neighborhood essentials.",
    features: [
      "Verified Student Accommodations & PGs",
      "Algorithmic Roommate Compatibility",
      "Digital Rental Agreements & Payments",
      "Local Amenities & Transit Mapping",
    ],
  },
  {
    id: "nexonacademy",
    type: "services",
    name: "NexonAcademy",
    tagline: "Industry-Aligned Advanced Tech Upskilling & Bootcamps",
    category: "Tech Academy",
    icon: Sparkles,
    color: "from-purple-700 to-violet-600",
    badge: "Premier Service",
    desc: "Intensive cohort-based engineering programs designed with leading industry practitioners. Covers full-stack engineering, cloud architecture, AI workflows, and hands-on production codebases.",
    features: [
      "Live Production-Grade Capstones",
      "1-on-1 Senior Architect Mentorship",
      "Placement Acceleration & Hiring Days",
      "Continuous Code Review & CI/CD Drills",
    ],
  },
  {
    id: "pravah",
    type: "services",
    name: "Pravah",
    tagline: "Fluid Digital Engineering & Enterprise Automation",
    category: "Engineering Services",
    icon: Cpu,
    color: "from-blue-600 to-cyan-600",
    badge: "Core Service",
    desc: "Custom software development, API integrations, and cloud orchestration. Streamlines business operations to eliminate manual friction and build high-throughput digital workflows.",
    features: [
      "Bespoke Enterprise Systems & APIs",
      "Event-Driven Cloud Architecture",
      "Legacy-to-Cloud Modernization",
      "Autonomous Workflow Pipelines",
    ],
  },
  {
    id: "owasp",
    type: "services",
    name: "OWASP Security Wing",
    tagline: "Enterprise Vulnerability Defense & Compliance Audits",
    category: "Cybersecurity",
    icon: ShieldAlert,
    color: "from-emerald-600 to-teal-600",
    badge: "Security Standard",
    desc: "Rigorous penetration testing, threat modeling, and application security posture assessments aligned with global OWASP standards. Safeguarding institutional and startup infrastructures.",
    features: [
      "OWASP Top 10 Vulnerability Mitigation",
      "Automated Dynamic & Static Security Scans",
      "Zero-Trust Architecture Audits",
      "Real-Time Incident Monitoring Protocols",
    ],
  },
  {
    id: "pathfinder",
    type: "services",
    name: "Pathfinder School",
    tagline: "Strategic Career Steering & Talent Incubator",
    category: "Mentorship",
    icon: Compass,
    color: "from-amber-600 to-orange-600",
    badge: "Talent Steering",
    desc: "Empowering school and university students to discover high-growth tech careers through personalized psychometric assessments, industry exposure sessions, and leadership coaching.",
    features: [
      "Personalized Career Roadmap Planning",
      "Industry Exposure & Guest Masterclasses",
      "Soft Skills & Communication Mastery",
      "Early Entrepreneurship Incubator",
    ],
  },
];

export default function WhatWeDo() {
  const [filter, setFilter] = useState<ItemType>("all");

  const filteredItems =
    filter === "all" ? OFFERINGS : OFFERINGS.filter((item) => item.type === filter);

  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Pioneering <span className="purple-gradient-text">Proprietary Products</span> & High-Impact Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              From transformative student ecosystems like Shikshasetu to enterprise-grade OWASP security and NexonAcademy mentorship, explore how YugNext powers India&apos;s digital transformation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-purple-50 rounded-2xl border border-purple-100 mt-6 md:mt-0 self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === "all"
                  ? "bg-purple-700 text-white shadow-md shadow-purple-600/25"
                  : "text-slate-600 hover:text-purple-700"
              }`}
            >
              All Offerings ({OFFERINGS.length})
            </button>
            <button
              onClick={() => setFilter("products")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === "products"
                  ? "bg-purple-700 text-white shadow-md shadow-purple-600/25"
                  : "text-slate-600 hover:text-purple-700"
              }`}
            >
              Products (3)
            </button>
            <button
              onClick={() => setFilter("services")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === "services"
                  ? "bg-purple-700 text-white shadow-md shadow-purple-600/25"
                  : "text-slate-600 hover:text-purple-700"
              }`}
            >
              Services (4)
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-3xl bg-white border border-purple-100 hover:border-purple-300 p-6 sm:p-7 shadow-lg shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-700/15 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Card Top: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                        {item.badge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-purple-600">
                        {item.category}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 group-hover:text-purple-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{item.tagline}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2 border-t border-purple-50">
                      {item.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-4 border-t border-purple-50 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors group-hover:translate-x-1"
                    >
                      <span>Explore {item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[10px] text-slate-400 font-mono uppercase">
                      YugNext Platform
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
