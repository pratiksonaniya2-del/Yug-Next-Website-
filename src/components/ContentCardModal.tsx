"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Lock,
  Unlock,
  GraduationCap,
  Building2,
  Layers,
  Sparkles,
  Compass,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle2,
  Users,
  Shield,
  Calendar,
  Clock,
  Quote,
  Briefcase,
  FileText,
  Mail,
  Phone,
  Send,
  Zap,
  ArrowRight,
  Landmark,
  Truck,
  HeartPulse,
} from "lucide-react";

export type ModalType =
  | "whatWeDo"
  | "whoWeAre"
  | "industries"
  | "insights"
  | "investors"
  | "careers"
  | "contact"
  | null;

interface ContentCardModalProps {
  activeModal: ModalType;
  isLocked?: boolean;
  onClose: () => void;
  onToggleLock?: () => void;
  onSelectModal?: (modal: ModalType) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ContentCardModal({
  activeModal,
  isLocked = false,
  onClose,
  onToggleLock,
  onSelectModal,
  onMouseEnter,
  onMouseLeave,
}: ContentCardModalProps) {
  const [activeSubTab, setActiveSubTab] = useState<string>("default");

  // Reset subtab on modal change
  useEffect(() => {
    setActiveSubTab("default");
  }, [activeModal]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
        
        {/* Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`absolute inset-0 transition-opacity ${
            isLocked ? "bg-slate-950/80 backdrop-blur-md" : "bg-slate-950/40 backdrop-blur-sm"
          }`}
        />

        {/* Dedicated Interactive Card (Cognizant Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl shadow-purple-950/40 border border-purple-100 flex flex-col overflow-hidden z-10"
        >
          
          {/* Card Sticky Header */}
          <div className="px-6 sm:px-8 py-5 border-b border-purple-100 bg-white/95 backdrop-blur-md flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
                <span className="font-extrabold text-lg">Y</span>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-purple-600 block">
                  YUGNEXT INTERACTIVE OVERVIEW
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {activeModal === "whatWeDo" && "What We Do — Products & Services"}
                  {activeModal === "whoWeAre" && "Who We Are — Identity, Alliances & Hubs"}
                  {activeModal === "industries" && "Industries We Transform"}
                  {activeModal === "insights" && "Insights, Milestones & Recognitions"}
                  {activeModal === "investors" && "Investor Relations & Governance"}
                  {activeModal === "careers" && "Careers & Talent Acceleration"}
                  {activeModal === "contact" && "Connect with Delivery Network"}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {/* Lock / Unlock Status Toggle Button */}
              {onToggleLock && (
                <button
                  onClick={onToggleLock}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isLocked
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                      : "bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200"
                  }`}
                  title={isLocked ? "Card is locked. Click to unlock." : "Preview mode. Click to lock card."}
                >
                  {isLocked ? (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>Card Locked</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-3.5 h-3.5 text-purple-500" />
                      <span>Click to Lock</span>
                    </>
                  )}
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 text-slate-600 hover:text-purple-700 transition-colors"
                title="Close Card"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8 bg-slate-50/40">
            
            {/* 1. WHAT WE DO MODAL */}
            {activeModal === "whatWeDo" && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-purple-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-purple-900">
                      Proprietary Products (3)
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Shikshasetu */}
                    <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">Shikshasetu</h5>
                      <span className="text-xs font-semibold text-purple-600 block">Higher EdTech Platform</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A unified digital bridge connecting universities, faculty, and scholars. Streamlines academic records, course tracking, fee reconciliation, and departmental communication.
                      </p>
                      <div className="pt-2 border-t border-purple-50 text-[11px] text-slate-500 font-medium">
                        ✓ Unified Student-Faculty Portal <br />
                        ✓ Automated Academic Ledger
                      </div>
                    </div>

                    {/* CampusNeeds */}
                    <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">CampusNeeds</h5>
                      <span className="text-xs font-semibold text-indigo-600 block">Campus Marketplace & Utilities</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Comprehensive student campus life, hostel utility requests, verified peer-to-peer student marketplace, and frictionless micro-transactions.
                      </p>
                      <div className="pt-2 border-t border-purple-50 text-[11px] text-slate-500 font-medium">
                        ✓ Peer-to-Peer Student Marketplace <br />
                        ✓ Hostel Utility & Essentials Dispatch
                      </div>
                    </div>

                    {/* Settler */}
                    <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">Settler</h5>
                      <span className="text-xs font-semibold text-pink-600 block">Student Living & Relocation</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Eliminates the stress of relocating for higher education and internships. Verifies rental accommodations, roommate matching, and digital deposit agreements.
                      </p>
                      <div className="pt-2 border-t border-purple-50 text-[11px] text-slate-500 font-medium">
                        ✓ Verified Student PGs & Apartments <br />
                        ✓ Algorithmic Roommate Compatibility
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialized Services */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-purple-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-900">
                      Specialized Services (2)
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* NexonAcademy */}
                    <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">NexonAcademy</h5>
                      <span className="text-xs font-semibold text-purple-600 block">Cohort-Based Tech Engineering</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Intensive cohort-based engineering bootcamps designed with leading practitioners. Covers production-grade codebases, system architecture, and 1-on-1 engineering mentorship.
                      </p>
                    </div>

                    {/* Pathfinder School */}
                    <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">Pathfinder School</h5>
                      <span className="text-xs font-semibold text-amber-600 block">Career Steering & Talent Incubator</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Empowers school and university students to discover high-growth tech careers through personalized psychometric mapping, guest masterclasses, and executive coaching.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. WHO WE ARE MODAL */}
            {activeModal === "whoWeAre" && (
              <div className="space-y-8">
                {/* About & Corporate Governance */}
                <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                    Corporate Identity
                  </span>
                  <h4 className="text-2xl font-black text-slate-900">
                    YugNext Private Limited
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Incorporated on <strong>October 21, 2026</strong> as a registered Private Limited company and backed by <strong>₹50K Seed Incubation Funding</strong> from MANIT Bhopal. We combine student innovation, academic rigor, and enterprise partnerships.
                  </p>
                </div>

                {/* Community & Alliances Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Community */}
                  <div className="p-6 rounded-2xl bg-purple-50/80 border border-purple-100 space-y-3">
                    <h5 className="text-base font-extrabold text-purple-950 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-700" />
                      Community Backbone
                    </h5>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p>• <strong>Ekjut Initiative:</strong> Grassroots youth movement driving community impact, digital enablement, and collaborative student hackathons.</p>
                      <p>• <strong>MANIT Students:</strong> Direct synergy with student innovators and software engineers at Maulana Azad National Institute of Technology.</p>
                    </div>
                  </div>

                  {/* Strategic Alliances */}
                  <div className="p-6 rounded-2xl bg-indigo-50/80 border border-indigo-100 space-y-3">
                    <h5 className="text-base font-extrabold text-indigo-950 flex items-center gap-2">
                      <Award className="w-4 h-4 text-indigo-700" />
                      Strategic Alliances
                    </h5>
                    <div className="space-y-1.5 text-xs font-semibold text-slate-800">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>ROLTA (Enterprise Technology Partner)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>MANIT Bhopal Incubation Lab</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>Gov. of India Innovation Frameworks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>NexonAcademy Skill Alliance</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global Delivery Network */}
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-purple-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    Global Delivery Network (4 Strategic Hubs)
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-sm">
                      <span className="font-extrabold text-slate-900 text-sm block">Bhopal Hub</span>
                      <span className="text-[11px] text-purple-600 font-semibold block">Central HQ & Incubation</span>
                      <p className="text-[11px] text-slate-500 mt-1">MANIT Innovation Center, Bhopal, MP</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-sm">
                      <span className="font-extrabold text-slate-900 text-sm block">Chennai Hub</span>
                      <span className="text-[11px] text-purple-600 font-semibold block">Deep Tech Wing</span>
                      <p className="text-[11px] text-slate-500 mt-1">OMR IT Corridor, Chennai, TN</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-sm">
                      <span className="font-extrabold text-slate-900 text-sm block">Delhi NCR</span>
                      <span className="text-[11px] text-purple-600 font-semibold block">Corporate & Alliances</span>
                      <p className="text-[11px] text-slate-500 mt-1">Cyber City, Gurugram / New Delhi</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-sm">
                      <span className="font-extrabold text-slate-900 text-sm block">Agra Hub</span>
                      <span className="text-[11px] text-purple-600 font-semibold block">Pathfinder Lab</span>
                      <p className="text-[11px] text-slate-500 mt-1">Innovation Center, Sanjay Place, Agra, UP</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. INDUSTRIES MODAL */}
            {activeModal === "industries" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900">Education</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Transforming higher education campuses through unified administrative platforms (Shikshasetu), student utility marketplaces (CampusNeeds), and production tech bootcamps (NexonAcademy).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900">Finance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Modernizing institutional ledger workflows, fee installment splitters, student micro-transactions, and rental deposit escrow protection with bank-grade security.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900">Logistics</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Eliminating friction in student relocation via Settler, automated campus delivery dispatch, and coordinated transit between Bhopal, Chennai, Agra, and Delhi NCR.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900">Health</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Digital student infirmary records, campus emergency alert dispatch, wellness counseling coordination, and confidential health records privacy.
                  </p>
                </div>
              </div>
            )}

            {/* 4. INSIGHTS MODAL */}
            {activeModal === "insights" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Verified Milestone 1 */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                      21 October 2026
                    </span>
                    <h5 className="text-lg font-extrabold text-slate-900">
                      Incorporated as Private Limited Company
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      YugNext completed formal incorporation under the Companies Act, cementing corporate governance, board oversight, and institutional investor readiness.
                    </p>
                  </div>

                  {/* Verified Milestone 2 */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                      8 May 2026
                    </span>
                    <h5 className="text-lg font-extrabold text-slate-900">
                      Received ₹50K Seed Funding & Incubation
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Secured ₹50K in seed grant capital alongside formal research incubation at Maulana Azad National Institute of Technology (MANIT) Bhopal.
                    </p>
                  </div>
                </div>

                {/* Events Coming Soon */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300">
                    Events Calendar • Coming Soon
                  </span>
                  <h4 className="text-xl font-extrabold text-white">
                    YugNext Tech Summit & Hackathon 2026
                  </h4>
                  <p className="text-xs text-purple-200">
                    Flagship student engineering symposium and hackathon connecting student builders across Bhopal, Chennai, Agra, and Delhi NCR.
                  </p>
                </div>
              </div>
            )}

            {/* 5. INVESTORS MODAL */}
            {activeModal === "investors" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-950 text-white space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                    Institutional Investment Thesis
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    Capital Efficiency Backed by Real University Distribution
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                    Combining enterprise software delivery with sticky campus platforms (Shikshasetu, CampusNeeds, Settler). Incorporated as a Private Limited company with verified MCA compliance and MANIT institutional backing.
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                    <div className="p-3 rounded-xl bg-white/10">
                      <div className="text-xl font-black text-white">₹50K+</div>
                      <div className="text-[10px] text-purple-200">Seed Grant</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10">
                      <div className="text-xl font-black text-white">Oct 2026</div>
                      <div className="text-[10px] text-purple-200">Pvt Ltd Incorporated</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10">
                      <div className="text-xl font-black text-white">MANIT</div>
                      <div className="text-[10px] text-purple-200">Incubator Partner</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      if (onSelectModal) onSelectModal("contact");
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800"
                  >
                    <span>Request Executive Deck</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 6. CAREERS MODAL */}
            {activeModal === "careers" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Current Openings</h4>
                    <p className="text-xs text-slate-500">Active hiring across our 4 delivery centers</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Active Hiring
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Engineering</span>
                    <h5 className="text-base font-bold text-slate-900">Full-Stack Software Engineer (Next.js & TypeScript)</h5>
                    <p className="text-xs text-slate-500">Bhopal HQ / Hybrid • 1-3 Years / Passionate Freshers</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Cloud Core</span>
                    <h5 className="text-base font-bold text-slate-900">Cloud Infrastructure & Backend Engineer</h5>
                    <p className="text-xs text-slate-500">Chennai Hub / Remote • 1-4 Years</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-[11px] font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded">Campus Growth</span>
                    <h5 className="text-base font-bold text-slate-900">Campus Ecosystem & Community Lead</h5>
                    <p className="text-xs text-slate-500">MANIT Bhopal & Delhi NCR • Student Leaders</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Operations</span>
                    <h5 className="text-base font-bold text-slate-900">Product Operations & Onboarding Specialist</h5>
                    <p className="text-xs text-slate-500">Agra Innovation Lab • 0-2 Years</p>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => {
                      if (onSelectModal) onSelectModal("contact");
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800"
                  >
                    <span>Submit Candidate Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 7. CONTACT MODAL */}
            {activeModal === "contact" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 p-6 rounded-2xl bg-purple-900 text-white space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                    Delivery Coordinates
                  </span>
                  <h4 className="text-xl font-bold text-white">YugNext Private Limited</h4>
                  <p className="text-xs text-purple-200">
                    Incubation Wing & Technology Center, Central Innovation Hub, MANIT, Bhopal, MP.
                  </p>
                  <div className="text-xs space-y-2 text-purple-200 pt-2 border-t border-purple-800">
                    <p>• Inquiries: <strong>contact@yugnext.com</strong></p>
                    <p>• Delivery Hubs: Bhopal, Chennai, Agra, Delhi NCR</p>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-purple-100 space-y-4">
                  <h4 className="text-base font-bold text-slate-900">Transmit Direct Inquiry</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <select className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600">
                      <option>Shikshasetu (EdTech Platform)</option>
                      <option>CampusNeeds (Student Marketplace)</option>
                      <option>Settler (Relocation Housing)</option>
                      <option>NexonAcademy (Tech Cohort)</option>
                      <option>Pathfinder School (Mentorship)</option>
                      <option>Investor Relations</option>
                      <option>Careers & Internships</option>
                    </select>
                    <textarea
                      rows={3}
                      placeholder="Message / Campus or Partnership Details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button
                      onClick={() => alert("Thank you! Your inquiry has been transmitted to YugNext delivery desk.")}
                      className="w-full py-3 rounded-xl bg-purple-700 text-white font-bold text-xs hover:bg-purple-800 transition-colors shadow-md shadow-purple-600/30"
                    >
                      Send Message to Delivery Hub
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Card Footer Quick Tabs */}
          <div className="px-6 sm:px-8 py-3.5 border-t border-purple-100 bg-white flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2 shrink-0">
            <span className="font-mono text-[11px]">
              YugNext Private Limited • MANIT Bhopal Incubated
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-purple-100 text-purple-800 font-bold hover:bg-purple-200 transition-colors"
              >
                Close Card
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
