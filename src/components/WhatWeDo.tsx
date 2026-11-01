"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Compass,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
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
    desc: "A unified cloud architecture connecting students, faculties, and administrative departments. Streamlines academic records, course tracking, fee management, and institutional communications.",
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
    badge: "Campus Utility",
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
    desc: "Intensive cohort-based engineering programs designed with leading industry practitioners. Covers modern software engineering, cloud architecture, and hands-on production codebases.",
    features: [
      "Live Production-Grade Capstones",
      "1-on-1 Senior Architect Mentorship",
      "Placement Acceleration & Hiring Days",
      "Continuous Code Review & CI/CD Drills",
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
    <section id="what-we-do" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Pioneering <span className="purple-gradient-text">Proprietary Products</span> & Specialized Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore our core ecosystems: Shikshasetu, CampusNeeds, and Settler, alongside industry-grade technical engineering at NexonAcademy and Pathfinder School.
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
              Services (2)
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="group rounded-3xl bg-white border border-purple-100 hover:border-purple-300 p-7 sm:p-8 shadow-xl shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-700/15 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Card Top: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                        {item.badge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-purple-600">
                        {item.category}
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mt-1 group-hover:text-purple-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{item.tagline}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-3 border-t border-purple-50">
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
                      YugNext Ecosystem
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
