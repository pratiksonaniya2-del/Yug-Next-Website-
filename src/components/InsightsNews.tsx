"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Newspaper,
  Calendar,
  Award,
  Sparkles,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Quote,
  MapPin,
} from "lucide-react";

const NEWS_TIMELINE = [
  {
    date: "21 October 2026",
    badge: "Corporate Landmark",
    title: "Officially Incorporated as a Private Limited Company",
    desc: "YugNext achieved a defining corporate milestone by completing formal incorporation as a Private Limited entity under the Companies Act, cementing corporate governance and investor readiness.",
    tags: ["Incorporation", "Pvt Ltd", "Corporate Governance"],
  },
  {
    date: "8 May 2026",
    badge: "Incubation & Capital",
    title: "Received ₹50K Seed Funding & Secured Premier Institutional Incubation",
    desc: "Validated by technical scrutiny, YugNext secured ₹50K in seed grant capital alongside formal incubation support from MANIT Bhopal's innovation ecosystem to build nation-scale platforms.",
    tags: ["₹50K Funding", "MANIT Incubation", "Seed Milestone"],
  },
];

const STORIES = [
  {
    quote:
      "Shikshasetu drastically reduced administrative overhead during university admissions and exam registrations. A game-changer for student services.",
    author: "Academic Coordinator",
    role: "Higher Education Partner",
    badge: "Shikshasetu Pilot",
  },
  {
    quote:
      "CampusNeeds provided our students with verified essentials, while Settler solved the massive headache of out-of-state hostel relocation.",
    author: "Student Council Representative",
    role: "MANIT Campus Chapter",
    badge: "Student Impact",
  },
];

export default function InsightsNews() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-purple-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
            <Newspaper className="w-3.5 h-3.5" />
            <span>INSIGHTS, NEWS & RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Journey, Milestones & <span className="purple-gradient-text">Voices of Impact</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Track our verified corporate timeline, strategic funding events, upcoming hackathons, and customer success stories.
          </p>
        </div>

        {/* 2-Column: Left News Timeline, Right Events & Customer Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Official News & Funding Milestones */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-700" />
                <span>Verified Milestones</span>
              </h3>
              <span className="text-xs font-semibold text-purple-600">Official Company Records</span>
            </div>

            <div className="space-y-4">
              {NEWS_TIMELINE.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-purple-100 p-6 sm:p-7 shadow-lg shadow-purple-900/5 hover:border-purple-300 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-purple-600" />
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-50">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-purple-50 text-purple-700 font-semibold px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Awards & Recognitions Card */}
            <div className="rounded-3xl bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-6 sm:p-7 shadow-xl shadow-purple-900/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-purple-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Awards & Recognitions</h4>
                  <p className="text-xs text-purple-200">Honored by academic and state incubation bodies</p>
                </div>
              </div>
              <p className="text-xs text-purple-100 leading-relaxed mb-4">
                Recognized for excellence in student-centric innovation, open-source technical workshops, and rapid execution within the MANIT incubation cohort.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>State & Institutional Innovation Finalist</span>
              </div>
            </div>
          </div>

          {/* Right Column: Events (Coming Soon) & Customer Stories */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Events Banner: Coming Soon */}
            <div className="rounded-3xl bg-white border border-purple-100 p-6 sm:p-7 shadow-lg shadow-purple-900/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Upcoming Events
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  Coming Soon
                </span>
              </div>

              <h4 className="text-xl font-extrabold text-slate-900 mb-2">
                YugNext Tech Summit & Hackathon 2026
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Our flagship collegiate hackathon and tech symposium bringing together student developers, faculty mentors, and industry architects from Chennai, Bhopal, Agra, and Delhi NCR.
              </p>

              <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 text-xs text-purple-800 font-semibold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                  Host City: Bhopal Central Hub
                </span>
                <span className="font-bold">Dates TBA</span>
              </div>
            </div>

            {/* Customer Stories & Testimonials */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Quote className="w-4 h-4 text-purple-700" />
                  <span>Customer Stories</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">Real Institutional Feedback</span>
              </div>

              {STORIES.map((story, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-purple-100 p-5 shadow-sm space-y-3"
                >
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">
                    {story.badge}
                  </span>
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    &quot;{story.quote}&quot;
                  </p>
                  <div className="pt-2 border-t border-purple-50">
                    <div className="text-xs font-bold text-slate-900">{story.author}</div>
                    <div className="text-[11px] text-slate-500">{story.role}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
