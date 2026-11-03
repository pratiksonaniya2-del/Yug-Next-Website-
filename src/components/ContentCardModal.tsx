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
  Briefcase,
  Mail,
  Phone,
  Send,
  Zap,
  ArrowRight,
  Landmark,
  Truck,
  HeartPulse,
  Package,
  Globe2,
  Code2,
  Camera,
  Utensils,
  BookOpen,
} from "lucide-react";
import YugNextLogo from "./YugNextLogo";

export type ModalType =
  | "whatWeDo"
  | "whoWeAre"
  | "products"
  | "industries"
  | "community"
  | "news"
  | "investors"
  | "careers"
  | "contact"
  | "insights"
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

  // Lock body scroll when modal is open and locked
  useEffect(() => {
    if (activeModal && isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModal, isLocked]);

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
              <YugNextLogo size="sm" variant="icon" />
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-purple-600 block">
                  YUGNEXT • STEP INTO TOMORROW
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {activeModal === "whatWeDo" && "What We Do — Digital Presence to Possibility"}
                  {activeModal === "products" && "Products — Ideas That Solve"}
                  {activeModal === "whoWeAre" && "Who We Are — Technology With a Reason to Exist"}
                  {activeModal === "industries" && "Industries — Different Problems. One Common Need."}
                  {activeModal === "community" && "Community — The Future Isn't Built Alone"}
                  {(activeModal === "news" || activeModal === "insights") && "News & Milestones — Journey Ahead"}
                  {activeModal === "investors" && "Investors — Backing the Journey Ahead"}
                  {activeModal === "careers" && "Careers — Don't Just Work for the Future. Build It."}
                  {activeModal === "contact" && "Contact — Got an Idea? Let's See Where It Goes."}
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
                className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 text-slate-600 hover:text-purple-700 transition-colors cursor-pointer"
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
                <div className="p-6 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
                    WHAT WE DO
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black">
                    From Digital Presence to Digital Possibility.
                  </h4>
                  <p className="text-sm text-purple-200 max-w-3xl leading-relaxed">
                    Yugnext works across software, digital solutions, products and technology-led initiatives to help businesses and organisations move forward.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-purple-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-purple-900">
                      Our Services & Initiatives (4)
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* School Websites */}
                    <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3 hover:border-purple-300 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">School Websites</h5>
                      <span className="text-xs font-semibold text-purple-600 block">Education Technology</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Comprehensive digital portals for schools with student dashboards, online admissions, and fee integration.
                      </p>
                    </div>

                    {/* Photo Studio Websites */}
                    <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3 hover:border-purple-300 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                        <Camera className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">Photo Studio Websites</h5>
                      <span className="text-xs font-semibold text-indigo-600 block">Creative Media Portfolios</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        High-resolution dynamic portfolios, client proofing galleries, and automated booking systems for photographers.
                      </p>
                    </div>

                    {/* Restaurant & Cafe Websites */}
                    <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3 hover:border-purple-300 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <Utensils className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">Restaurant &amp; Cafe Websites</h5>
                      <span className="text-xs font-semibold text-emerald-600 block">Hospitality &amp; Dining</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Interactive digital menus, table reservation engines, QR code ordering, and local SEO dominance.
                      </p>
                    </div>

                    {/* Coaching Institutes */}
                    <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3 hover:border-purple-300 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-extrabold text-slate-900">Coaching Institutes</h5>
                      <span className="text-xs font-semibold text-pink-600 block">EdTech &amp; Academy Portals</span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Test series portals, study material vaults, batch schedules, and student progress tracking engines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Link to Products */}
                <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h5 className="font-extrabold text-slate-900">Looking for our Proprietary Products?</h5>
                    <p className="text-xs text-slate-600">Discover ShikshaSathi, CampusNeeds, and Settler.</p>
                  </div>
                  <button
                    onClick={() => onSelectModal && onSelectModal("products")}
                    className="px-5 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 transition-colors inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 2. PRODUCTS MODAL */}
            {activeModal === "products" && (
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
                    PRODUCTS PHILOSOPHY
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black">
                    Ideas Are Everywhere. Products That Solve Are Rare.
                  </h4>
                  <p className="text-sm text-purple-200 max-w-3xl leading-relaxed">
                    We believe the best products don't begin with: “What can we build?” They begin with: “What needs solving?” That's the philosophy behind the products we're building.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* ShikshaSathi */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between space-y-4 hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 block">
                        EDUCATION TECHNOLOGY
                      </span>
                      <h5 className="text-xl font-extrabold text-slate-900">ShikshaSathi</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Technology built around making education more connected, accessible and useful.
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectModal && onSelectModal("contact")}
                      className="pt-3 border-t border-purple-50 text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center justify-between cursor-pointer"
                    >
                      <span>Explore ShikshaSathi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* CampusNeeds */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between space-y-4 hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                          LAUNCH SOON
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 block">
                        LOGISTICS
                      </span>
                      <h5 className="text-xl font-extrabold text-slate-900">CampusNeeds</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A digital approach to simplifying everyday needs, movements, and experiences across campus ecosystems.
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectModal && onSelectModal("contact")}
                      className="pt-3 border-t border-purple-50 text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center justify-between cursor-pointer"
                    >
                      <span>Stay Notified</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Settler */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between space-y-4 hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center">
                          <Layers className="w-6 h-6" />
                        </div>
                        <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                          LAUNCH SOON
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600 block">
                        FINANCE
                      </span>
                      <h5 className="text-xl font-extrabold text-slate-900">Settler</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A product focused on solving practical housing, deposit security, and student accommodation challenges.
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectModal && onSelectModal("contact")}
                      className="pt-3 border-t border-purple-50 text-xs font-bold text-pink-700 hover:text-pink-900 flex items-center justify-between cursor-pointer"
                    >
                      <span>Stay Notified</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 3. WHO WE ARE MODAL */}
            {activeModal === "whoWeAre" && (
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
                    WHO WE ARE
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black">
                    We're Not Here Just to Follow What's Next.
                  </h4>
                  <p className="text-sm text-purple-200 leading-relaxed max-w-3xl">
                    Yugnext is a technology-driven organisation working across software, digital solutions and products to solve problems that matter. We work with businesses, institutions and communities across industries — bringing together technology, people and partnerships to create meaningful outcomes.
                  </p>
                  <div className="pt-3 border-t border-purple-800 text-xs font-bold text-purple-300 tracking-wide">
                    Our ambition is simple: <br />
                    <span className="text-white text-sm font-extrabold leading-relaxed block mt-1">
                      Build things people need<br />
                      Create things people remember<br />
                      Move things forward.
                    </span>
                  </div>
                </div>

                {/* Subsections: About Us, Leadership, Alliances */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* About Us */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 block">
                      ABOUT US
                    </span>
                    <h5 className="text-lg font-extrabold text-slate-900">
                      Technology With a Reason to Exist.
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The digital world is full of things that look impressive. We're more interested in things that actually work. At Yugnext, we combine technology with an understanding of the people and industries we're building for.
                    </p>
                    <div className="p-3 rounded-xl bg-purple-50 text-[11px] text-purple-900 space-y-1 font-medium">
                      <p>• What problem are we solving?</p>
                      <p>• Who are we solving it for?</p>
                      <p>• What would better look like?</p>
                    </div>
                    <p className="text-xs font-bold text-slate-800">
                      Understand. Build. Improve. Move Forward. That's Yugnext.
                    </p>
                  </div>

                  {/* Leadership */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 block">
                      LEADERSHIP
                    </span>
                    <h5 className="text-lg font-extrabold text-slate-900">
                      People Who Ask What's Next.
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Behind every product, partnership and idea is a team willing to question the obvious and build the possible. Meet the people shaping Yugnext and the direction we're taking it.
                    </p>
                    <div className="pt-2 text-xs text-slate-500 font-mono">
                      Governance: Pvt Ltd Structure • Executive Board • MANIT Advisory
                    </div>
                  </div>
                </div>

                {/* Strategic Alliances & Network */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                      STRATEGIC ALLIANCES
                    </span>
                    <h5 className="text-xl font-black">Some Things Are Better Built Together.</h5>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The right partnership doesn't simply add another logo. It multiplies what both sides can do. Our strategic alliances connect Yugnext with organisations and institutions that share our vision for technology-led growth and meaningful impact.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/10 text-center font-bold text-sm">ROLTA</div>
                    <div className="p-3 rounded-xl bg-white/10 text-center font-bold text-sm">NexanAcademy</div>
                    <div className="p-3 rounded-xl bg-white/10 text-center font-bold text-sm">MANIT Bhopal</div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-purple-300 font-bold">
                      DELIVERY NETWORK: CHENNAI · BHOPAL · AGRA
                    </span>
                    <span>Different cities. Different talent. One direction. Forward.</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. INDUSTRIES MODAL */}
            {activeModal === "industries" && (
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
                    INDUSTRIES
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black">
                    Different Industries. Different Problems. One Thing in Common.
                  </h4>
                  <p className="text-sm text-purple-200 max-w-3xl leading-relaxed">
                    Technology changes from industry to industry. The need for better solutions doesn't.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* EDUCATION */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h5 className="text-lg font-black text-slate-900">EDUCATION</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Building technology and digital initiatives for a world where learning is becoming increasingly connected.
                    </p>
                  </div>

                  {/* FINANCE */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h5 className="text-lg font-black text-slate-900">FINANCE</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Creating digital possibilities for an industry where trust, speed and accessibility matter.
                    </p>
                  </div>

                  {/* LOGISTICS */}
                  <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                      <Truck className="w-5 h-5" />
                    </div>
                    <h5 className="text-lg font-black text-slate-900">LOGISTICS</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Helping build smarter digital experiences for an increasingly connected movement of people and goods.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-2">
                  <h5 className="text-base font-extrabold text-purple-950">And We're Just Getting Started.</h5>
                  <p className="text-xs text-slate-600 max-w-2xl mx-auto">
                    Our work isn't limited to three industries. Wherever there is a meaningful problem, there is an opportunity to build something better.
                  </p>
                </div>
              </div>
            )}

            {/* 5. COMMUNITY MODAL */}
            {activeModal === "community" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
                    COMMUNITY
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black">
                    The Future Isn't Built Alone.
                  </h4>
                  <p className="text-sm text-purple-200 leading-relaxed max-w-3xl">
                    Technology moves faster when people share ideas. We believe in creating spaces where people can learn, collaborate, experiment and build together.
                  </p>
                  <p className="text-xs text-purple-300 leading-relaxed">
                    Our community is part of the larger Yugnext ecosystem — bringing together people, ideas and opportunities that can create something bigger than any one of them alone.
                  </p>
                  <div className="pt-2 text-sm font-extrabold text-white tracking-widest">
                    Learn. Connect. Build.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-purple-700">MANIT Students Cohort</span>
                    <h5 className="text-base font-bold text-slate-900">Campus Builders & Developers</h5>
                    <p className="text-xs text-slate-500">Hackathons, technical discussions, open-source projects, and peer incubation.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-indigo-700">Ekjut Initiative</span>
                    <h5 className="text-base font-bold text-slate-900">Collaborative Ecosystem</h5>
                    <p className="text-xs text-slate-500">Connecting student mentors, industry developers, and local institutions.</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => onSelectModal && onSelectModal("contact")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 transition-colors cursor-pointer"
                  >
                    <span>Join the Community</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 6. NEWS & MILESTONES MODAL */}
            {(activeModal === "news" || activeModal === "insights") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Corporate Milestones & Timeline</h4>
                    <p className="text-xs text-slate-500">Official verified company history</p>
                  </div>
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                    Verified Events
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                        21 OCTOBER 2026
                      </span>
                      <span className="text-[11px] text-emerald-600 font-bold">Incorporated</span>
                    </div>
                    <h5 className="text-base font-bold text-slate-900">Incorporated as a Private Limited Company</h5>
                    <p className="text-xs text-slate-600">
                      Officially registered and structured under the Companies Act as YugNext Private Limited.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        8 MAY 2026
                      </span>
                      <span className="text-[11px] text-purple-600 font-bold">Incubation & Grant</span>
                    </div>
                    <h5 className="text-base font-bold text-slate-900">Received ₹50,000 Seed Funding & Got Incubated</h5>
                    <p className="text-xs text-slate-600">
                      Successfully incubated at MANIT Bhopal with initial grant funding to establish foundational platforms.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 7. INVESTORS MODAL */}
            {activeModal === "investors" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
                    INVESTORS & GOVERNANCE
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black">
                    Backing the Journey Ahead.
                  </h4>
                  <p className="text-sm text-purple-200 leading-relaxed max-w-3xl">
                    Building for tomorrow takes more than an idea. It takes people willing to believe in the idea — and support the work required to turn it into reality. Yugnext is building with long-term ambition, supported by people and institutions who see the possibilities ahead.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-purple-700">Institutional Incubation</span>
                    <h5 className="text-base font-bold text-slate-900">MANIT Incubation Centre</h5>
                    <p className="text-xs text-slate-500">Seed stage infrastructure, lab access, and institutional mentoring.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-emerald-700">Grant Funding</span>
                    <h5 className="text-base font-bold text-slate-900">₹50,000 Seed Grant</h5>
                    <p className="text-xs text-slate-500">Disbursed on 8 May 2026 for product development and pilot validation.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-indigo-700">Corporate Structure</span>
                    <h5 className="text-base font-bold text-slate-900">Private Limited Governance</h5>
                    <p className="text-xs text-slate-500">Cap table management, audit compliance, and enterprise alliance readiness.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 8. CAREERS MODAL */}
            {activeModal === "careers" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#0e0738] border border-purple-900/30 text-white space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
                    CAREERS AT YUGNEXT
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black">
                    Don't Just Work for the Future. Build It.
                  </h4>
                  <p className="text-sm text-purple-200 leading-relaxed max-w-3xl">
                    We're looking for people who don't stop at: “That's how it's done.” We're looking for people who ask: “What if we did it differently?”
                  </p>
                  <p className="text-xs text-purple-300">
                    At Yugnext, you'll work across technology, products, industries and ideas — and have the opportunity to help shape what comes next. If you're looking for just another job, there are plenty. If you're looking to build something — let's talk.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-purple-50 text-purple-900 font-bold text-xs text-center border border-purple-100">
                    People who are curious.
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 text-purple-900 font-bold text-xs text-center border border-purple-100">
                    People who take ownership.
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 text-purple-900 font-bold text-xs text-center border border-purple-100">
                    People who want to learn.
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 text-purple-900 font-bold text-xs text-center border border-purple-100">
                    People who want to build.
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => onSelectModal && onSelectModal("contact")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 transition-colors cursor-pointer"
                  >
                    <span>View Open Positions / Connect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 9. CONTACT MODAL */}
            {activeModal === "contact" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 p-6 rounded-2xl bg-purple-950 text-white space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                    START THE CONVERSATION
                  </span>
                  <h4 className="text-2xl font-bold text-white">Got an Idea? Let's See Where It Goes.</h4>
                  <p className="text-xs text-purple-200 leading-relaxed">
                    Maybe you have a business problem. Maybe you have an idea. Maybe you need a technology partner. Maybe you simply think there's a better way to do something.
                  </p>
                  <div className="text-xs space-y-2 text-purple-300 pt-3 border-t border-purple-800">
                    <p className="font-bold text-white">Delivery Hubs:</p>
                    <p>CHENNAI · BHOPAL · AGRA</p>
                    <p className="text-[11px] text-purple-400">Different cities. Different talent. One direction. Forward.</p>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-purple-100 space-y-4">
                  <h4 className="text-base font-bold text-slate-900">Start the conversation</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Name</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Organisation</label>
                      <input
                        type="text"
                        placeholder="Company / University / Organisation"
                        className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">What would you like to build?</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your idea, problem or requirements..."
                        className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <button
                      onClick={() => alert("Thank you! Your message has been sent to Yugnext.")}
                      className="w-full py-3 rounded-xl bg-purple-700 text-white font-bold text-xs hover:bg-purple-800 transition-colors shadow-md shadow-purple-600/30 cursor-pointer"
                    >
                      Send Message →
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Card Footer Quick Navigation */}
          <div className="px-6 sm:px-8 py-3.5 border-t border-purple-100 bg-white flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2 shrink-0">
            <span className="font-mono text-[11px]">
              YUGNEXT • STEP INTO TOMORROW • CHENNAI · BHOPAL · AGRA
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-purple-100 text-purple-800 font-bold hover:bg-purple-200 transition-colors cursor-pointer"
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