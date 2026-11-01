"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MapPin,
  Building,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  Award,
  Globe2,
  Shield,
  ArrowUpRight,
} from "lucide-react";

const HUBS = [
  {
    city: "Bhopal",
    type: "Headquarters & Incubation Center",
    tag: "Central Operations",
    address: "MANIT Innovation Hub / Central Tech Park, Bhopal, MP",
    desc: "Our primary incubation hub, core engineering center, and executive headquarters connected with MANIT student talent.",
    metrics: "Core R&D Hub",
  },
  {
    city: "Chennai",
    type: "Deep Tech & Cloud Infrastructure",
    tag: "South Delivery Hub",
    address: "OMR IT Corridor, Chennai, Tamil Nadu",
    desc: "Specialized in high-throughput backend services, cloud integrations, and mobile engineering.",
    metrics: "High Scale Ops",
  },
  {
    city: "Delhi NCR",
    type: "Strategic Alliances & Corporate Wing",
    tag: "National Relations",
    address: "Cyber City, Gurugram & Connaught Place, New Delhi",
    desc: "Spearheading government partnerships, institutional edtech alliances, and enterprise client relations.",
    metrics: "Govt & Corporate",
  },
  {
    city: "Agra",
    type: "Regional Innovation Lab & EdTech Wing",
    tag: "North Delivery Hub",
    address: "Innovation Center, Sanjay Place, Agra, UP",
    desc: "Focused on regional tier-2/3 student onboarding, Pathfinder School mentorship sessions, and local campus deployments.",
    metrics: "Ecosystem Growth",
  },
];

const ALLIANCES = [
  {
    name: "ROLTA",
    role: "Enterprise Technology Partner",
    focus: "Digital Infrastructure & Enterprise Geospatial Solutions",
    icon: Building,
    desc: "Collaborative synergies in enterprise infrastructure and digital ecosystem scale.",
  },
  {
    name: "MANIT Bhopal",
    role: "Institutional Incubator & Research Partner",
    focus: "Student Innovation & Incubation Lab",
    icon: Award,
    desc: "Backed by premier incubation from Maulana Azad National Institute of Technology.",
  },
  {
    name: "Gov. of India Initiatives",
    role: "National Innovation Recognition",
    focus: "Startup India & Digital Skill Development",
    icon: Shield,
    desc: "Aligned with national initiatives to advance technology education and digital empowerment.",
  },
  {
    name: "NexonAcademy",
    role: "Strategic Upskilling Partner",
    focus: "Cohort-Based Engineering Programs",
    icon: Sparkles,
    desc: "Bridging the gap between engineering college curriculum and modern production engineering.",
  },
];

export default function WhoWeAre() {
  const [activeHub, setActiveHub] = useState(0);

  return (
    <section id="who-we-are" className="py-20 lg:py-28 bg-purple-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
            <Users className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Rooted in Purpose. <span className="purple-gradient-text">Engineered for Scale.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            YugNext is a purpose-driven technology company bringing together academic rigor, student ingenuity, and enterprise alliances across India.
          </p>
        </div>

        {/* 2-Column Grid: About & Community Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: About Us Narrative */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-purple-100 p-8 shadow-xl shadow-purple-900/5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                Our Corporate Identity
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Accelerating the Next Generation of Indian Technology & Talent
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Founded with a mission to bridge student ecosystems and enterprise solutions, YugNext operates as a registered Private Limited company. We solve real challenges across Higher Education, Living Logistics, Cybersecurity, and Enterprise Automation.
              </p>
              
              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-700 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Academic & Industry Integration</h4>
                    <p className="text-xs text-slate-500">Close synergy with Maulana Azad National Institute of Technology (MANIT) research cohorts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-700 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Verified Product Ecosystem</h4>
                    <p className="text-xs text-slate-500">Live products deployed across colleges: Shikshasetu, CampusNeeds, and Settler.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-700 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Corporate Governance</h4>
                    <p className="text-xs text-slate-500">Incorporated entity with clear fiduciary compliance, transparent reporting, and institutional backing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-50 flex items-center justify-between">
              <div>
                <div className="text-xl font-black text-purple-700">₹50K+ Seeded</div>
                <div className="text-xs text-slate-500">Incubated & Registered</div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900"
              >
                <span>Leadership Inquiries</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Community Power - Ekjut & MANIT Students */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white p-8 shadow-xl shadow-purple-900/20 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Community Backbone
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-purple-200">
                  Student-Powered Innovation
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Powered by MANIT Students & The Ekjut Movement
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/30 flex items-center justify-center text-purple-200 mb-2">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white">Ekjut Initiative</h4>
                  <p className="text-xs text-purple-200 mt-1 leading-relaxed">
                    A collaborative youth empowerment chapter driving community upliftment, digital literacy, and student innovation clubs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/30 flex items-center justify-center text-indigo-200 mb-2">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white">MANIT Student Network</h4>
                  <p className="text-xs text-purple-200 mt-1 leading-relaxed">
                    Direct collaboration with premier engineering minds at Maulana Azad National Institute of Technology across open-source and hackathons.
                  </p>
                </div>
              </div>

              <p className="text-xs text-purple-200/90 leading-relaxed">
                By uniting engineering talent with real-world problems, YugNext cultivates a grassroots talent pipeline ready to ship production software from day one.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-200">
              <span>National Institutional Linkage</span>
              <span className="font-bold text-white">Bhopal • Central Hub</span>
            </div>
          </div>

        </div>

        {/* Strategic Alliances Showcase */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
              Institutional Credibility
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Strategic Alliances & Partnerships
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALLIANCES.map((alliance, i) => {
              const Icon = alliance.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-purple-100 p-6 shadow-md hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{alliance.name}</h4>
                      <span className="text-xs font-semibold text-purple-600 block">
                        {alliance.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{alliance.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-purple-50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {alliance.focus}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Delivery Network Map & Hubs */}
        <div id="delivery" className="rounded-3xl bg-white border border-purple-100 p-8 sm:p-10 shadow-xl shadow-purple-900/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
                <Globe2 className="w-3.5 h-3.5" />
                <span>EXPANSIVE REACH</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Global Delivery Network
              </h3>
              <p className="text-slate-600 text-sm">
                4 strategic geographic locations ensuring continuous product engineering and local delivery support.
              </p>
            </div>
            
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              {HUBS.map((hub, idx) => (
                <button
                  key={hub.city}
                  onClick={() => setActiveHub(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeHub === idx
                      ? "bg-purple-700 text-white shadow-md shadow-purple-600/30"
                      : "bg-purple-50 text-slate-700 hover:bg-purple-100"
                  }`}
                >
                  {hub.city}
                </button>
              ))}
            </div>
          </div>

          {/* Active Hub Card Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-purple-50/60 to-indigo-50/60 rounded-2xl p-6 sm:p-8 border border-purple-100">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-white px-2.5 py-0.5 rounded-full border border-purple-200">
                  {HUBS[activeHub].tag}
                </span>
                <span className="text-xs text-slate-400 font-semibold">•</span>
                <span className="text-xs font-semibold text-slate-600">
                  {HUBS[activeHub].metrics}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {HUBS[activeHub].city} Hub
              </h4>
              <p className="text-sm font-semibold text-purple-800">
                {HUBS[activeHub].type}
              </p>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {HUBS[activeHub].desc}
              </p>
              <div className="text-xs font-mono text-slate-500 pt-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>{HUBS[activeHub].address}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center p-6 bg-white rounded-2xl border border-purple-100 text-center shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <MapPin className="w-7 h-7 text-purple-700" />
              </div>
              <div className="text-base font-bold text-slate-900">{HUBS[activeHub].city} Operations</div>
              <div className="text-xs text-slate-500 mt-1">High Availability & On-Ground Delivery</div>
              <a
                href="#contact"
                className="mt-4 px-4 py-2 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 transition-colors"
              >
                Connect with this Hub
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
