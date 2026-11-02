"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Briefcase,
  CheckCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function CareersPage() {
  const OPEN_ROLES = [
    {
      title: "Full-Stack Systems Engineer",
      team: "Core Platform",
      location: "Chennai / Bhopal / Hybrid",
      type: "Full-Time",
      description: "Build robust distributed web engines, real-time database synchronizations, and customer-facing interfaces for ShikshaSathi and enterprise clients.",
      skills: ["React / Next.js", "TypeScript / Node.js", "PostgreSQL / Redis", "REST / GraphQL"],
    },
    {
      title: "Product UI/UX Architect",
      team: "Design Systems",
      location: "Pune / Bhopal / Hybrid",
      type: "Full-Time",
      description: "Craft high-fidelity interactive user experiences, enterprise dashboards, and frictionless component systems with zero cognitive clutter.",
      skills: ["Figma / Design Tokens", "Tailwind CSS", "Micro-Interactions", "User Research"],
    },
    {
      title: "Cloud Infrastructure & Security Lead",
      team: "Cybersecurity & DevOps",
      location: "Chennai Node / Remote",
      type: "Full-Time",
      description: "Lead zero-trust cloud architectures, OWASP compliance audits, containerized deployments, and 99.99% uptime guarantees.",
      skills: ["Docker / Kubernetes", "OWASP Security", "CI/CD Automation", "Linux Hardening"],
    },
    {
      title: "Institutional Partnerships & Growth Associate",
      team: "Ecosystem Growth",
      location: "Bhopal (MANIT HQ)",
      type: "Full-Time",
      description: "Drive adoption across schools, coaching institutes, and universities for our specialized web solutions and ShikshaSathi platform.",
      skills: ["Institutional B2B", "Stakeholder Relations", "Product Demonstrations", "Market Expansion"],
    },
  ];

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
            <span className="text-[#9d7df7] font-bold">CAREERS</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5d35e0]/20 text-[#9d7df7] border border-[#5d35e0]/30">
              <Briefcase className="w-3.5 h-3.5 text-[#9d7df7]" />
              <span>JOIN THE TEAM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Don&apos;t Just Work for the Future. <span className="text-[#9d7df7]">Build It.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              We&apos;re looking for people who don&apos;t stop at: <strong className="text-white">&ldquo;That&apos;s how it&apos;s done.&rdquo;</strong> We&apos;re looking for people who ask: <strong className="text-[#9d7df7]">&ldquo;What if we did it differently?&rdquo;</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Values & Manifesto */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Curious.", desc: "Always questioning assumptions and exploring modern tools." },
              { title: "Ownership.", desc: "Taking end-to-end responsibility from commit to production." },
              { title: "Learning.", desc: "Accelerating personal and technical depth every sprint." },
              { title: "Builders.", desc: "Writing code and designing products that move things forward." },
            ].map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-lg font-black text-[#5d35e0] block">{v.title}</span>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions List */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#5d35e0]">OPPORTUNITIES</span>
                <h2 className="text-3xl font-black text-slate-900 mt-1">Open Positions</h2>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Nodes: Chennai · Bhopal · Pune · Remote Options
              </p>
            </div>

            <div className="space-y-4">
              {OPEN_ROLES.map((role) => (
                <div
                  key={role.title}
                  className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5d35e0] hover:bg-white hover:shadow-xl hover:shadow-[#5d35e0]/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#5d35e0]/10 text-[#5d35e0]">
                        {role.team}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {role.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900">{role.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">{role.description}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {role.skills.map((skill) => (
                        <span key={skill} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5d35e0]/25 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>Apply for this Role</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Message */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0738] text-white text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black">
              If you&apos;re looking for just another job, there are plenty.<br />
              If you&apos;re looking to build something — let&apos;s talk.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
              Don&apos;t see your specific role? Transmit your portfolio and github link to our leadership team directly.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white font-bold text-sm shadow-lg shadow-[#5d35e0]/30 transition-all cursor-pointer"
              >
                <span>Send Open Application →</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
