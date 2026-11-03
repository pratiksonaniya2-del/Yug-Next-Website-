"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  X,
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
  Zap,
  ArrowRight,
  Landmark,
  Truck,
  Globe2,
  Mail,
  Send,
  Calendar,
  Package,
  Check,
  Camera,
  Utensils,
  BookOpen,
  Briefcase,
  Lock,
  Newspaper,
  FileText,
} from "lucide-react";
import { ModalType } from "./ContentCardModal";

interface TcsMegaMenuProps {
  activeModal: ModalType;
  onClose: () => void;
  onSelectModal: (modal: ModalType) => void;
  isLocked?: boolean;
  onToggleLock?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function TcsMegaMenu({
  activeModal,
  isLocked,
  onClose,
  onToggleLock,
  onSelectModal,
  onMouseEnter,
  onMouseLeave,
}: TcsMegaMenuProps) {
  // ESC key support to close mega menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!activeModal) return null;

  return (
    <>
      {/* Background Dim Backdrop (Starts at top 0 with no offset gaps) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/45 backdrop-blur-xs z-30"
      />

      {/* TCS Full-Width Mega-Menu Dropdown Panel (100% solid white, flush with navbar) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute top-full left-0 w-full bg-[#12102A] border-b border-[#2A2450] shadow-2xl z-50 max-h-[82vh] overflow-y-auto text-[#EFEDFA]"
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Top Control Bar: Active Category Breadcrumb + Close Button */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#2A2450]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9B7BF0] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B7BF0]">
                YUGNEXT
              </span>
              <span className="text-[#A79FCB]/60 font-mono text-xs">/</span>
              <span className="text-xs font-bold text-[#EFEDFA] uppercase tracking-wide">
                {activeModal === "whatWeDo" && "What We Do — Capabilities & Services"}
                {activeModal === "products" && "Products — Ideas That Solve"}
                {activeModal === "whoWeAre" && "Who We Are — Technology With a Reason to Exist"}
                {activeModal === "industries" && "Industries — Different Problems. One Common Need."}
                {activeModal === "community" && "Community — The Future Isn't Built Alone"}
                {(activeModal === "news" || activeModal === "insights") && "News & Milestones — Journey Ahead"}
                {activeModal === "careers" && "Careers — Don't Just Work for the Future. Build It."}
                {activeModal === "contact" && "Contact — Got an Idea? Let's See Where It Goes."}
                {activeModal === "investors" && "Investors — Backing the Journey Ahead"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-[#EFEDFA] text-xs font-bold transition-all cursor-pointer border border-[#2A2450]"
                title="Close Menu (ESC)"
              >
                <span>Close</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#181534] text-[#A79FCB] font-mono border border-[#2A2450]">ESC</span>
                <X className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* 1. WHAT WE DO MEGA PANEL */}
          {activeModal === "whatWeDo" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: Strategic Thesis */}
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4 shadow-md">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                    CAPABILITIES &amp; SERVICES
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    From Digital Presence to Digital Possibility.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    Yugnext works across software, digital solutions, products and technology-led initiatives to help businesses and organisations move forward.
                  </p>
                </div>
                <div className="pt-3 border-t border-purple-800/60">
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="inline-flex items-center gap-2 text-xs font-bold text-pink-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Connect with Solutions Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Center Column: Services Container with Exact Landing Page Services */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-white/[0.04] border border-[#2A2450] space-y-3.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-[#2A2450]/60">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#9B7BF0]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B7BF0]">
                      SERVICES
                    </span>
                  </div>
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="text-[11px] font-bold text-[#A79FCB] hover:text-[#EFEDFA] transition-colors flex items-center gap-1"
                  >
                    <span>View all (6)</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="p-3.5 rounded-xl bg-[#181534] border border-[#2A2450] hover:border-[#6C3CE3] hover:bg-[#1E1942] transition-all flex flex-col justify-between group space-y-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                          <GraduationCap className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-mono text-[#9B7BF0] font-bold">EDUCATION</span>
                      </div>
                      <h5 className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">School Websites</h5>
                      <p className="text-[11px] text-[#A79FCB] leading-relaxed font-light line-clamp-2">
                        Comprehensive digital portals with student dashboards, admissions &amp; fee systems.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#9B7BF0] flex items-center gap-1 pt-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    href="/services"
                    onClick={onClose}
                    className="p-3.5 rounded-xl bg-[#181534] border border-[#2A2450] hover:border-[#6C3CE3] hover:bg-[#1E1942] transition-all flex flex-col justify-between group space-y-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                          <Camera className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-mono text-[#9B7BF0] font-bold">CREATIVE MEDIA</span>
                      </div>
                      <h5 className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">Photo Studio Websites</h5>
                      <p className="text-[11px] text-[#A79FCB] leading-relaxed font-light line-clamp-2">
                        High-res portfolios, client proofing galleries &amp; automated booking engines.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#9B7BF0] flex items-center gap-1 pt-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    href="/services"
                    onClick={onClose}
                    className="p-3.5 rounded-xl bg-[#181534] border border-[#2A2450] hover:border-[#6C3CE3] hover:bg-[#1E1942] transition-all flex flex-col justify-between group space-y-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                          <Utensils className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-mono text-[#9B7BF0] font-bold">HOSPITALITY</span>
                      </div>
                      <h5 className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">Restaurant &amp; Cafe Websites</h5>
                      <p className="text-[11px] text-[#A79FCB] leading-relaxed font-light line-clamp-2">
                        Interactive digital menus, table reservation engines &amp; QR code ordering.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#9B7BF0] flex items-center gap-1 pt-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    href="/services"
                    onClick={onClose}
                    className="p-3.5 rounded-xl bg-[#181534] border border-[#2A2450] hover:border-[#6C3CE3] hover:bg-[#1E1942] transition-all flex flex-col justify-between group space-y-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                          <BookOpen className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-mono text-[#9B7BF0] font-bold">EDTECH</span>
                      </div>
                      <h5 className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">Coaching Institutes</h5>
                      <p className="text-[11px] text-[#A79FCB] leading-relaxed font-light line-clamp-2">
                        Test series portals, study material vaults &amp; student progress tracking.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#9B7BF0] flex items-center gap-1 pt-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Fast Spotlight to Products */}
              <div className="lg:col-span-3 p-5 rounded-2xl bg-white/[0.04] border border-[#2A2450] space-y-3.5 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9B7BF0] block">
                    PROPRIETARY SUITE
                  </span>
                  <h5 className="text-sm font-black text-white">
                    Products That Solve
                  </h5>
                  <p className="text-xs text-[#A79FCB] leading-relaxed">
                    Flagship digital products engineered to solve practical bottlenecks:
                  </p>
                </div>
                <div className="space-y-2 text-xs font-bold">
                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-white">• ShikshaSathi (EdTech)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9B7BF0]" />
                  </button>

                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-white">• CampusNeeds (Logistics)</span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Launch soon
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9B7BF0]" />
                  </button>

                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-white">• Settler (Finance)</span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Launch soon
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9B7BF0]" />
                  </button>

                  <Link
                    href="/services"
                    onClick={onClose}
                    className="w-full text-center py-2.5 px-3 rounded-xl bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 mt-2"
                  >
                    <span>Explore Full Services Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 2. PRODUCTS MEGA PANEL (PROPORTIONAL, BALANCED, ZERO EMPTY DEAD SPACE) */}
          {activeModal === "products" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Product Philosophy */}
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4 shadow-md">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-pink-300 block">
                    PRODUCT PHILOSOPHY
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    Ideas Are Everywhere. Products That Solve Are Rare.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    We believe the best products don&apos;t begin with: &ldquo;What can we build?&rdquo; They begin with: &ldquo;What needs solving?&rdquo; That&apos;s the philosophy behind the products we&apos;re building.
                  </p>
                </div>
                <div className="pt-3 border-t border-purple-800/60">
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="inline-flex items-center gap-2 text-xs font-bold text-pink-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Request Product Collaboration</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Center & Right: 3 Core Products (Compact, balanced, with feature highlights) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* ShikshaSathi */}
                <div className="p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-3">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 bg-purple-100/60 px-2 py-0.5 rounded-md">
                        EDTECH
                      </span>
                    </div>
                    <h5 className="text-base font-black text-slate-900">ShikshaSathi</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Technology built around making education more connected, accessible and useful.
                    </p>
                    <div className="space-y-1 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>Connected academic ecosystem</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>Centralized student &amp; faculty hub</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/shikshasathi"
                    onClick={onClose}
                    className="pt-2 text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center justify-between cursor-pointer border-t border-purple-50"
                  >
                    <span>Explore ShikshaSathi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* CampusNeeds */}
                <div className="p-5 rounded-2xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3] hover:shadow-lg transition-all flex flex-col justify-between space-y-3">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9B7BF0] bg-[#6C3CE3]/15 px-2 py-0.5 rounded-md border border-[#6C3CE3]/30">
                          LOGISTICS
                        </span>
                        <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          LAUNCH SOON
                        </span>
                      </div>
                    </div>
                    <h5 className="text-base font-black text-white">CampusNeeds</h5>
                    <p className="text-xs text-[#A79FCB] leading-relaxed font-light">
                      A digital approach to simplifying everyday needs and logistics across campus ecosystems.
                    </p>
                    <div className="space-y-1 text-[11px] text-[#A79FCB]/80 pt-1 border-t border-[#2A2450]">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#9B7BF0] shrink-0" />
                        <span>Everyday utilities simplified</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#9B7BF0] shrink-0" />
                        <span>Decentralized campus marketplace</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="pt-2 text-xs font-bold text-[#9B7BF0] hover:text-white flex items-center justify-between cursor-pointer border-t border-[#2A2450]"
                  >
                    <span>Stay Notified</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Settler */}
                <div className="p-5 rounded-2xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3] hover:shadow-lg transition-all flex flex-col justify-between space-y-3">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#6C3CE3]/20 text-[#9B7BF0] flex items-center justify-center font-bold">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9B7BF0] bg-[#6C3CE3]/15 px-2 py-0.5 rounded-md border border-[#6C3CE3]/30">
                          FINANCE
                        </span>
                        <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          LAUNCH SOON
                        </span>
                      </div>
                    </div>
                    <h5 className="text-base font-black text-white">Settler</h5>
                    <p className="text-xs text-[#A79FCB] leading-relaxed font-light">
                      A product focused on solving practical relocation, payments &amp; housing challenges through modern tech.
                    </p>
                    <div className="space-y-1 text-[11px] text-[#A79FCB]/80 pt-1 border-t border-[#2A2450]">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#9B7BF0] shrink-0" />
                        <span>Verified student accommodations</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#9B7BF0] shrink-0" />
                        <span>Frictionless city relocation</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="pt-2 text-xs font-bold text-[#9B7BF0] hover:text-white flex items-center justify-between cursor-pointer border-t border-[#2A2450]"
                  >
                    <span>Stay Notified</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* 3. WHO WE ARE MEGA PANEL */}
          {activeModal === "whoWeAre" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                    WHO WE ARE
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    We&apos;re Not Here Just to Follow What&apos;s Next.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    Yugnext is a technology-driven organisation working across software, digital solutions and products to solve problems that matter.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.08] border border-white/[0.1] text-xs space-y-1.5 font-mono">
                  <span className="text-pink-300 font-bold block">OUR AMBITION:</span>
                  <p className="text-slate-200 font-medium leading-relaxed">
                    Build things people need<br />
                    Create things people remember<br />
                    Move things forward.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/about"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9d7df7] hover:text-white transition-colors"
                  >
                    <span>Read Full About Us Page →</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: 2 Navigation Columns (Matching ss 3) */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-white/[0.04] border border-[#2A2450] grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                
                {/* Column 1 */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9B7BF0] block pb-1 border-b border-[#2A2450]">
                    ORGANIZATION &amp; PRESENCE
                  </span>

                  <Link
                    href="/industries"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">
                      Industries
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/about#leadership"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">
                      Leadership
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/community"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">
                      Community
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/about#alliances"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">
                      Strategic Alliances
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/reach"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors block">
                        Global Delivery Network
                      </span>
                      <span className="text-[10px] font-mono text-[#A79FCB] block">
                        CHENNAI · BHOPAL · AGRA
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>

                {/* Column 2 */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9B7BF0] block pb-1 border-b border-[#2A2450]">
                    STORIES &amp; ENGAGEMENT
                  </span>

                  <Link
                    href="/community#events"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">
                      Events
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/news"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">
                      News
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/services"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">
                      Customer Stories
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/news#awards"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#181534] hover:bg-[#1E1942] border border-[#2A2450] hover:border-[#6C3CE3]/60 transition-all group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#9B7BF0] transition-colors">
                      Awards &amp; Recognitions
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79FCB] group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>

              </div>
            </div>
          )}

          {/* 4. INDUSTRIES MEGA PANEL */}
          {activeModal === "industries" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                    SECTOR IMPACT
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    Different Industries. Different Problems. One Common Need.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    Technology changes from industry to industry. The need for better solutions doesn&apos;t.
                  </p>
                </div>
                <div className="pt-3 border-t border-purple-800/60 flex items-center justify-between">
                  <Link
                    href="/industries"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9d7df7] hover:text-white transition-colors"
                  >
                    <span>Explore All Industries →</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2 hover:bg-white hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h5 className="text-base font-extrabold text-slate-900">EDUCATION</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Building technology and digital initiatives for a world where learning is becoming increasingly connected.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2 hover:bg-white hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <h5 className="text-base font-extrabold text-slate-900">FINANCE</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Creating digital possibilities for an industry where trust, speed and accessibility matter.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-pink-50/60 border border-pink-100 space-y-2 hover:bg-white hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                    <Truck className="w-4 h-4" />
                  </div>
                  <h5 className="text-base font-extrabold text-slate-900">LOGISTICS</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Helping build smarter digital experiences for an increasingly connected movement of people and goods.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. COMMUNITY MEGA PANEL */}
          {activeModal === "community" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                    COMMUNITY ECOSYSTEM
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    The Future Isn&apos;t Built Alone.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    Technology moves faster when people share ideas. We believe in creating spaces where people can learn, collaborate, experiment and build together.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/community"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9d7df7] hover:text-white transition-colors"
                  >
                    <span>View Full Community Page →</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2 hover:bg-white hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <h5 className="text-base font-extrabold text-slate-900">Learn.</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Gain practical insights and hands-on exposure across modern engineering and digital stacks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2 hover:bg-white hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h5 className="text-base font-extrabold text-slate-900">Connect.</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Collaborate with founders, engineers, and mentors shaping new ventures.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-pink-50/60 border border-pink-100 space-y-2 hover:bg-white hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h5 className="text-base font-extrabold text-slate-900">Build.</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Turn ideas into shipped prototypes and impactful production platforms.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 6. NEWS & MILESTONES MEGA PANEL */}
          {(activeModal === "news" || activeModal === "insights") && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                    VERIFIED TIMELINE
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    Milestones &amp; The Journey Ahead.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    Documented institutional achievements and verified corporate progress.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-mono font-bold text-purple-700">21 OCTOBER 2026</span>
                  </div>
                  <h5 className="text-base font-extrabold text-slate-900">Private Limited Incorporation</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Formally registered as YugNext Private Limited under the Registrar of Companies (ROC), establishing our legal foundation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-mono font-bold text-emerald-700">8 MAY 2026</span>
                  </div>
                  <h5 className="text-base font-extrabold text-slate-900">₹50,000 Institutional Seed Grant</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Awarded initial seed funding by MANIT Bhopal innovation council to develop our foundational technology architecture.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* INVESTORS & GOVERNANCE MEGA PANEL */}
          {activeModal === "investors" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                    INVESTORS &amp; GOVERNANCE
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    Backing the Journey Ahead.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    Building for tomorrow takes more than an idea. Supported by institutional seed funding from MANIT Bhopal and formal corporate incorporation.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/invest"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all"
                  >
                    <span>Investor Portal Details →</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <span className="text-xs font-mono font-bold text-purple-700 block">INCUBATION</span>
                  <h5 className="text-base font-extrabold text-slate-900">MANIT Innovation Cell</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Institutional mentorship, physical infrastructure, and innovation lab access at MANIT Bhopal.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-700 block">SEED CAPITAL</span>
                  <h5 className="text-base font-extrabold text-slate-900">₹50,000 Seed Grant</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Sanctioned seed capital disbursed on 8 May 2026 for platform architecture and pilot validation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
                  <span className="text-xs font-mono font-bold text-indigo-700 block">GOVERNANCE</span>
                  <h5 className="text-base font-extrabold text-slate-900">Pvt. Ltd. Incorporation</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Formally registered on 21 Oct 2026 under the Companies Act 2013 with complete statutory compliance.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 7. CAREERS MEGA PANEL */}
          {activeModal === "careers" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-pink-300 block">
                    JOIN THE TEAM
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    Don&apos;t Just Work for the Future. Build It.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    We&apos;re looking for people who don&apos;t stop at: &ldquo;That&apos;s how it&apos;s done.&rdquo; We&apos;re looking for people who ask: &ldquo;What if we did it differently?&rdquo;
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/careers"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d35e0] hover:bg-[#4d28c8] text-white text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all"
                  >
                    <span>View Open Positions →</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 space-y-1.5">
                  <h5 className="text-sm font-extrabold text-slate-900">People Who Are Curious</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    We value continuous learners who explore new paradigms and push technical boundaries.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-1.5">
                  <h5 className="text-sm font-extrabold text-slate-900">People Who Take Ownership</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    We empower team members to take true pride and responsibility for the systems they architect.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-1.5">
                  <h5 className="text-sm font-extrabold text-slate-900">Cross-Disciplinary Exposure</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Work across software, products, industries, and live delivery hubs in Chennai, Bhopal, and Agra.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-pink-50/60 border border-pink-100 space-y-1.5">
                  <h5 className="text-sm font-extrabold text-slate-900">If You Want to Build — Let&apos;s Talk</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    If you&apos;re looking for just another job, there are plenty. If you want to build something real, join us.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 8. CONTACT MEGA PANEL */}
          {activeModal === "contact" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                    START THE CONVERSATION
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    Got an Idea? Let&apos;s See Where It Goes.
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    Maybe you have a business problem. Maybe you have an idea. Maybe you need a technology partner. Maybe you simply think there&apos;s a better way to do something.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.08] border border-white/[0.1] text-xs font-mono space-y-1">
                  <span className="text-pink-300 font-bold block">DIRECT DESK:</span>
                  <span className="text-slate-200">contact@yugnext.com</span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-4">
                <h5 className="text-base font-black text-slate-900">Send a Message Directly</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="p-3 rounded-xl bg-white border border-purple-200 outline-none focus:border-purple-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="p-3 rounded-xl bg-white border border-purple-200 outline-none focus:border-purple-600"
                  />
                  <input
                    type="text"
                    placeholder="Organisation / Company"
                    className="p-3 rounded-xl bg-white border border-purple-200 outline-none focus:border-purple-600 sm:col-span-2"
                  />
                  <textarea
                    placeholder="What would you like to build? *"
                    rows={3}
                    className="p-3 rounded-xl bg-white border border-purple-200 outline-none focus:border-purple-600 sm:col-span-2 resize-none"
                  />
                </div>
                <button
                  onClick={() => alert("Thank you! Your message has been routed to YugNext solutions desk.")}
                  className="w-full py-3 rounded-xl bg-[#5d35e0] hover:bg-[#4d28c8] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message →</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </>
  );
}
