"use client";

import React, { useState } from "react";
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
  Code2,
  Smartphone,
  Palette,
  Brain,
  CheckSquare,
  Server,
  Share2,
  Megaphone,
  PenTool,
  Film,
  Camera,
  Coins,
  Scale,
  X,
  FileText,
  ExternalLink,
  Lock,
} from "lucide-react";

interface RoleTask {
  category: "Technical" | "Marketing" | "Sales & Funding" | "Legal & Finance";
  title: string;
  location: string;
  workHours: string;
  department: string;
  description: string;
  skills: string[];
  tasks: string[];
}

export default function CareersPage() {
  const [selectedTaskRole, setSelectedTaskRole] = useState<RoleTask | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("All");

  const OPEN_ROLES: RoleTask[] = [
    // 1. TECHNOLOGY & DEVELOPMENT (Technical)
    {
      category: "Technical",
      department: "Technology & Development",
      title: "Web Development",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Build, deploy, and scale high-performance responsive web applications, robust backends, and database architectures across our platforms.",
      skills: ["HTML", "CSS", "JavaScript", "NodeJs", "Express js", "Mongodb", "MySQL", "Reactjs"],
      tasks: [
        "Develop pixel-perfect, accessible, and responsive user interfaces with HTML, CSS, JavaScript, and Reactjs.",
        "Architect resilient RESTful APIs and microservices using Node.js and Express.js.",
        "Design schema, queries, indexing, and data models using MongoDB and MySQL.",
        "Integrate client-side states with real-time backend updates and ensure cross-browser speed optimization.",
        "Perform code reviews, unit testing, and maintain CI/CD pipelines.",
      ],
    },
    {
      category: "Technical",
      department: "Technology & Development",
      title: "App Development",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Create cross-platform mobile apps for Android and iOS powering our student, school, and community products.",
      skills: ["React Native", "DBMS / SQL"],
      tasks: [
        "Develop robust cross-platform mobile interfaces in React Native for iOS and Android.",
        "Handle offline-first data synchronization, local caching, and secure token storage.",
        "Interface with SQL / DBMS backends for high-velocity queries and transactions.",
        "Optimize native bundle size, memory consumption, and frame rates across diverse handheld devices.",
      ],
    },
    {
      category: "Technical",
      department: "Technology & Development",
      title: "UI/UX Design",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Design intuitive interfaces, interactive wireframes, design systems, and delightful user journeys.",
      skills: ["Figma"],
      tasks: [
        "Create high-fidelity wireframes, interactive prototypes, and design specs in Figma.",
        "Build and evolve a unified design system and reusable token library.",
        "Conduct usability testing and turn user feedback into actionable interface refinements.",
        "Collaborate closely with frontend engineers to ensure design-to-code fidelity.",
      ],
    },
    {
      category: "Technical",
      department: "Technology & Development",
      title: "AI/ML Design",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Design and implement machine learning workflows, data analysis pipelines, and intelligent AI models.",
      skills: ["Python & its libraries"],
      tasks: [
        "Develop predictive models, prompt workflows, and AI heuristics using Python (NumPy, Pandas, Scikit-learn, PyTorch).",
        "Process, clean, and analyze institutional and student datasets to surface actionable metrics.",
        "Integrate ML models into production API endpoints with low latency.",
        "Evaluate algorithm accuracy, bias, and performance under real-world usage.",
      ],
    },
    {
      category: "Technical",
      department: "Technology & Development",
      title: "Product Management, Testing & Quality Assurance",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Oversee product roadmaps, validate user requirements, and ensure zero-defect software releases.",
      skills: ["Basic Web dev"],
      tasks: [
        "Define clear product user stories, feature acceptance criteria, and sprint backlogs.",
        "Execute automated and manual functional, regression, and cross-device QA audits.",
        "Leverage basic web dev knowledge (inspecting DOM, network requests, console errors) to triage issues quickly.",
        "Bridge the gap between business objectives, design teams, and engineering output.",
      ],
    },
    {
      category: "Technical",
      department: "Technology & Development",
      title: "DevOps & Cloud Infrastructure",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Architect cloud infrastructure, maintain automated CI/CD pipelines, container orchestration, and server reliability.",
      skills: ["AWS", "Linux", "Docker", "Kubernetes", "IaC"],
      tasks: [
        "Manage cloud environments, VPCs, compute nodes, and security policies on AWS.",
        "Administer Linux servers, access controls, SSH configurations, and system hardening.",
        "Containerize services with Docker and orchestrate resilient deployments via Kubernetes.",
        "Provision and automate infrastructure via code (IaC) with continuous integration workflows.",
      ],
    },

    // 2. MARKETING
    {
      category: "Marketing",
      department: "Marketing & Growth",
      title: "Social Media Manager",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Drive brand storytelling, social media strategies, audience engagement, and performance ad campaigns.",
      skills: ["Digital Marketing", "Performance Marketing"],
      tasks: [
        "Plan, schedule, and curate content calendars across LinkedIn, Instagram, and Twitter/X.",
        "Run performance marketing ad sets, track CAC/LTV, and optimize conversion funnels.",
        "Engage with follower communities, manage direct messaging, and run interactive polls/giveaways.",
        "Analyze weekly engagement analytics and iterate on highest-performing creative formats.",
      ],
    },
    {
      category: "Marketing",
      department: "Marketing & Growth",
      title: "Public Relations Executive",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Manage media relationships, company press statements, institutional partnerships, and event coverage.",
      skills: ["PR & Media Outreach", "Brand Communications", "Press Releases", "Social Networking"],
      tasks: [
        "Draft and syndicate official press releases, newsroom bulletins, and institutional memos.",
        "Establish partnerships with college press bodies, education publications, and tech blogs.",
        "Coordinate media appearances, podcast sessions, and campus PR activities.",
      ],
    },
    {
      category: "Marketing",
      department: "Marketing & Growth",
      title: "Content Writer",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Craft persuasive copy, editorial articles, case studies, website copy, and strategic messaging.",
      skills: ["Content Writing", "Copywriting", "SEO Optimization"],
      tasks: [
        "Write engaging website copy, email campaigns, blogs, and product documentation.",
        "Incorporate SEO best practices, keyword research, and readability standards.",
        "Work with tech teams to translate technical architecture into compelling user stories.",
      ],
    },
    {
      category: "Marketing",
      department: "Marketing & Growth",
      title: "Graphic Designer",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Design creative posters, banners, brochures, logos, brand identities, and event collaterals.",
      skills: [
        "Canva",
        "Photoshop",
        "Colour theory",
        "Typography",
        "Image editing",
        "Vector graphics",
        "Motion graphics",
        "Brand identity",
      ],
      tasks: [
        "Design high-impact visual banners, infographics, brochures, and announcement cards.",
        "Maintain brand consistency across all visual guidelines, color palettes, and typography.",
        "Collaborate with marketing managers to produce ad creatives tailored for high CTR.",
      ],
    },
    {
      category: "Marketing",
      department: "Marketing & Growth",
      title: "Video Editor",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Edit punchy promotional videos, product demo reels, student interviews, and social reels.",
      skills: ["Video Editing", "Any video editing software", "Reels/Shorts"],
      tasks: [
        "Edit high-retention short-form videos for Instagram Reels and YouTube Shorts.",
        "Produce polished product walkthroughs, keynote highlights, and corporate announcements.",
        "Perform color grading, audio leveling, motion graphics, and typography overlays.",
      ],
    },
    {
      category: "Marketing",
      department: "Marketing & Growth",
      title: "Photographer & Videographer",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Capture live campus events, institutional demos, founder keynotes, and high-resolution media. Shot videos for promotional reels.",
      skills: ["Photography", "Cinematography", "Lighting & Sound", "Field Production"],
      tasks: [
        "Direct and film on-ground footage at hackathons, college partner hubs, and incubation events.",
        "Shoot and produce high-impact videos for promotional reels and campus launches.",
        "Capture professional portraits, behind-the-scenes moments, and documentary-style visual assets.",
        "Manage cameras, lenses, microphones, and lighting equipment on location.",
      ],
    },
    {
      category: "Sales & Funding",
      department: "Sales & Funding",
      title: "Sales & Funding Executive",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Drive strategic institutional deals, school ERP adoptions, investor relations, and sponsorship initiatives.",
      skills: ["Institutional Sales", "Investor Pitching", "Sponsorship Outreach", "Negotiation"],
      tasks: [
        "Identify and outreach to educational institutions, schools, and coaching centres for product subscriptions.",
        "Connect with grant bodies, incubators, angel syndicates, and CSR funds for capital deployment.",
        "Facilitate campus event sponsorships and strategic brand partnerships.",
        "Conduct live solution demos and manage end-to-end deal negotiations through closing.",
      ],
    },
    {
      category: "Legal & Finance",
      department: "Legal & Finance",
      title: "Legal & Finance Executive",
      location: "Bhopal / Remote",
      workHours: "Flexible Hours",
      description: "Manage business laws, legal compliance, finance, contracts, and stay updated with current affairs.",
      skills: ["Business Laws & finance", "Contracts", "Current awareness"],
      tasks: [
        "Manage business laws, corporate legal compliance, and regulatory governance.",
        "Draft, review, and maintain client master service agreements (MSAs), contracts, and NDAs.",
        "Oversee corporate finance, bookkeeping, invoicing, tax compliance, and fiscal statements.",
        "Stay proactively updated with current legal affairs, commercial regulations, and policy amendments.",
      ],
    },
  ];

  const categories = ["All", "Technical", "Marketing", "Sales & Funding", "Legal & Finance"];

  const filteredRoles = activeCategoryFilter === "All"
    ? OPEN_ROLES
    : OPEN_ROLES.filter((r) => r.category === activeCategoryFilter);

  return (
    <main className="min-h-screen bg-[#0A0818] text-[#EFEDFA] flex flex-col justify-between selection:bg-[#6C3CE3] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-[#0a0422] text-white relative overflow-hidden border-b border-[#2A2450]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-[#5d35e0]/20 blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-[#9B7BF0] font-bold">CAREERS</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
                <Briefcase className="w-3.5 h-3.5 text-[#9B7BF0]" />
                <span>JOIN THE TEAM • OPEN ROLES</span>
              </div>

              {/* Top Deadline Banner Highlight */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10 animate-pulse">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Task submission deadline : 28 may 2026</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Don&apos;t Just Work for the Future. <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B7BF0] via-[#A78BFA] to-[#6C3CE3]">
                Build It.
              </span>
            </h1>

            <p className="text-[#A79FCB] text-base sm:text-xl leading-relaxed font-light">
              We&apos;re looking for people who don&apos;t stop at: <strong className="text-white">&ldquo;That&apos;s how it&apos;s done.&rdquo;</strong> We&apos;re looking for people who ask: <strong className="text-[#9B7BF0]">&ldquo;What if we did it differently?&rdquo;</strong> Join our interdisciplinary team across engineering, marketing, sales, and operations.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#open-roles-section"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Browse Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://forms.gle/nHvDnkWkEQiReFBP9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#12102A] hover:bg-[#1A1638] text-[#C4B5FD] text-xs sm:text-sm font-semibold border border-[#2A2450] transition-all cursor-pointer"
              >
                <span>Direct Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Manifesto: What do we expect from you? */}
      <section className="py-16 bg-[#0A0818] border-b border-[#2A2450]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              What do we expect from you?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Curious.", desc: "Always questioning assumptions and exploring modern tools & frameworks." },
              { title: "Ownership.", desc: "Taking end-to-end responsibility from first commit to production delivery." },
              { title: "Learning.", desc: "Accelerating personal, technical, and domain depth every sprint." },
              { title: "Builders & Innovators", desc: "Creating code, design, and systems that tangibly move businesses forward." },
            ].map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-[#12102A] border border-[#2A2450] space-y-2 hover:border-[#6C3CE3]/50 transition-colors">
                <span className="text-xl font-black text-[#9B7BF0] block">{v.title}</span>
                <p className="text-xs text-[#A79FCB] leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions List with Category Filter */}
          <div id="open-roles-section" className="space-y-8 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2A2450]">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#9B7BF0] uppercase block mb-1">
                  CURRENT VACANCIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">Open Positions</h2>
                <p className="text-xs sm:text-sm text-[#A79FCB] mt-1">
                  Explore available roles across Technology, Marketing, Sales &amp; Funding, and Legal &amp; Finance.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeCategoryFilter === cat
                        ? "bg-[#6C3CE3] text-white shadow-md shadow-[#6C3CE3]/30"
                        : "bg-[#12102A] text-[#A79FCB] hover:text-white border border-[#2A2450] hover:border-[#6C3CE3]/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* List of Roles: Clean White Background Cards */}
            <div className="space-y-4">
              {filteredRoles.map((role) => (
                <div
                  key={role.title}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#6C3CE3] hover:shadow-xl hover:shadow-[#6C3CE3]/10 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
                >
                  <div className="space-y-3 max-w-3xl">
                    {/* Header Badges: Category pill, Location, Work Hours */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-purple-100 text-[#5d35e0] border border-purple-200">
                        {role.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-700 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                        <MapPin className="w-3.5 h-3.5 text-[#5d35e0]" />
                        <span>{role.location}</span>
                      </span>
                      <span className="text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{role.workHours}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#5d35e0] transition-colors">
                      {role.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {role.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: View Tasks (Locked) & Apply for this Role */}
                  <div className="shrink-0 flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2 lg:pt-0">
                    <div className="relative group/lock">
                      <button
                        type="button"
                        disabled
                        className="px-5 py-2.5 rounded-full bg-slate-100/90 text-slate-400 text-xs sm:text-sm font-semibold border border-slate-200 cursor-not-allowed flex items-center gap-2 select-none"
                      >
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                        <span>View Tasks</span>
                      </button>

                      {/* Tooltip on hover */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/lock:flex items-center justify-center px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[11px] font-medium whitespace-nowrap shadow-xl z-20 animate-in fade-in zoom-in-95 duration-150">
                        <span>will be available soon</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
                      </div>
                    </div>

                    <a
                      href="https://forms.gle/nHvDnkWkEQiReFBP9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>Apply for this Role</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Manifesto Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12102A] via-[#1a1447] to-[#12102A] border border-[#2A2450] text-white text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black">
              If you&apos;re looking for just another job, there are plenty.<br />
              If you&apos;re looking to build something impactful — let&apos;s talk.
            </h3>
            <p className="text-xs sm:text-sm text-[#A79FCB] max-w-xl mx-auto font-light leading-relaxed">
              Don&apos;t see your specific expertise listed? Submit your portfolio and resume directly to our leadership team.
            </p>
            <div className="pt-2">
              <a
                href="https://forms.gle/nHvDnkWkEQiReFBP9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-bold text-sm shadow-lg shadow-[#6C3CE3]/30 transition-all cursor-pointer"
              >
                <span>Send Open Application →</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* VIEW TASKS MODAL */}
      {selectedTaskRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12102A] border border-[#2A2450] p-6 sm:p-10 shadow-2xl space-y-6 text-[#EFEDFA]">
            
            <button
              onClick={() => setSelectedTaskRole(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#6C3CE3]/20 text-[#A78BFA] border border-[#6C3CE3]/30">
                  {selectedTaskRole.category}
                </span>
                <span className="text-[11px] font-mono text-[#C4B5FD] px-3 py-1 rounded-full bg-[#181534] border border-[#2A2450]">
                  {selectedTaskRole.location}
                </span>
                <span className="text-[11px] font-mono text-emerald-300 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                  {selectedTaskRole.workHours}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {selectedTaskRole.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A79FCB] leading-relaxed">
                {selectedTaskRole.description}
              </p>

              {/* Skills List */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono font-bold text-white uppercase block">
                  Required Technologies &amp; Skills:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedTaskRole.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-[#181534] border border-[#6C3CE3]/40 text-[#C4B5FD] font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Tasks List */}
              <div className="pt-4 space-y-3">
                <span className="text-xs font-mono font-bold text-white uppercase block">
                  Core Responsibilities &amp; Tasks:
                </span>
                <ul className="space-y-2.5">
                  {selectedTaskRole.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C4B5FD]/90 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2A2450] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setSelectedTaskRole(null)}
                className="px-5 py-2.5 rounded-full bg-[#181534] hover:bg-[#201c46] text-[#A79FCB] hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                Close
              </button>

              <a
                href="https://forms.gle/nHvDnkWkEQiReFBP9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-2.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Apply for this Position →</span>
              </a>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
