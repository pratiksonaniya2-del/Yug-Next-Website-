"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Users,
  Building2,
  Code2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  isSquare?: boolean;
  objectPosition?: string;
}

export default function LeadershipPage() {
  // Row 1: 1 Leader (Harsh Rathore)
  const leader: TeamMember = {
    name: "Harsh Rathore",
    role: "Founder & Chief Executive Officer (CEO)",
    image: "/team/Harsh.jpeg",
    isSquare: false,
    objectPosition: "object-top",
  };

  // Row 2: 3 Members (Rihansh Ahuja, Pratik Sonaniya, Ankit Anand)
  // Pratik Sonaniya is square (isSquare: true)
  const row2: TeamMember[] = [
    {
      name: "Rihansh Ahuja",
      role: "Co-Founder & Strategic Operations",
      image: "/team/Rihansh.jpeg",
      isSquare: false,
      objectPosition: "object-top",
    },
    {
      name: "Pratik Sonaniya",
      role: "Co-Founder & Technology Lead",
      image: "/team/Pratik.jpeg",
      isSquare: true, // User requested: "Mera wala square hee rehne dena"
      objectPosition: "object-[center_95%]", // Centers exactly on Pratik's face from the lower half
    },
    {
      name: "Ankit Anand",
      role: "Core Team & Product Engineering",
      image: "/team/Ankit.jpeg",
      isSquare: false,
      objectPosition: "object-top",
    },
  ];

  // Row 3: 3 Members (Namish Jain, Anshika Bhargava, Amita Pal)
  const row3: TeamMember[] = [
    {
      name: "Namish Jain",
      role: "Core Team & Systems Engineering",
      image: "/team/Namish.jpeg",
      isSquare: false,
      objectPosition: "object-top",
    },
    {
      name: "Anshika Bhargava",
      role: "Core Team & Design Architecture",
      image: "/team/Anshika.jpeg",
      isSquare: false,
      objectPosition: "object-top",
    },
    {
      name: "Amita Pal",
      role: "Core Team & Product Operations",
      image: "/team/Amita.jpeg",
      isSquare: false,
      objectPosition: "object-top",
    },
  ];

  const renderCard = (member: TeamMember, priority = false) => {
    return (
      <div
        key={member.name}
        className="group relative rounded-3xl bg-[#12102A] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#6C3CE3]/15 flex flex-col justify-between"
      >
        {/* Image Container with precise aspect ratios */}
        <div className="p-4 sm:p-5 pb-0">
          <div
            className={`w-full overflow-hidden rounded-2xl bg-[#181534] border border-[#2A2450] relative ${
              member.isSquare ? "aspect-square" : "aspect-[4/5]"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                member.objectPosition || "object-top"
              }`}
              loading={priority ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12102A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </div>
        </div>

        {/* Member Details - Only Full Name */}
        <div className="p-5 sm:p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#C4B5FD] transition-colors tracking-tight">
            {member.name}
          </h3>
        </div>
      </div>
    );
  };

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
            <Link href="/about" className="hover:text-white transition-colors">WHO WE ARE</Link>
            <span>/</span>
            <span className="text-[#9B7BF0] font-bold">LEADERSHIP</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
              <Users className="w-3.5 h-3.5 text-[#9B7BF0]" />
              <span>LEADERSHIP &amp; CORE TEAM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              People Shaping What&apos;s Next.
            </h1>

            <p className="text-[#A79FCB] text-base sm:text-lg leading-relaxed font-light">
              A dedicated team of builders, engineers, and strategists leading YUGNEXT from campus roots to scaled corporate execution.
            </p>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-16 sm:py-24 bg-[#0A0818] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          
          {/* Row 1 (Desktop: Centered Single Leader / Mobile: Top item) */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md">
              {renderCard(leader, true)}
            </div>
          </div>

          {/* Row 2 (Desktop: 3 in a line / Mobile: stacked) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {row2.map((m) => renderCard(m))}
          </div>

          {/* Row 3 (Desktop: 3 in a line / Mobile: stacked) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {row3.map((m) => renderCard(m))}
          </div>

          {/* Team Ethos Banner */}
          <div className="pt-10">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12102A] via-[#17133a] to-[#12102A] border border-[#2A2450] text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="space-y-2 max-w-2xl mx-auto">
                <span className="text-xs font-mono font-bold text-[#9B7BF0] uppercase tracking-wider">
                  TEAM ETHOS
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Built on Radical Ownership
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  United across Bhopal, Agra, and NCR nodes. Moving ideas into reliable, production-grade solutions that genuinely create an impact.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#6C3CE3]/30 transition-all cursor-pointer"
                >
                  <span>Explore Open Opportunities →</span>
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
