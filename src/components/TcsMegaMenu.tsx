"use client";

import React, { useEffect } from "react";
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
        className="absolute top-full left-0 w-full bg-white border-b border-purple-200/90 shadow-2xl z-50 max-h-[82vh] overflow-y-auto"
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Top Control Bar: Active Category Breadcrumb + Close Button */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-purple-100">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                YUGNEXT
              </span>
              <span className="text-slate-300 font-mono text-xs">/</span>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 text-xs font-bold transition-all cursor-pointer border border-slate-200 hover:border-purple-300"
                title="Close Menu (ESC)"
              >
                <span>Close</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-slate-500 font-mono border border-slate-200">ESC</span>
                <X className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* 1. WHAT WE DO MEGA PANEL */}
          {activeModal === "whatWeDo" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: Strategic Thesis */}
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col justify-between space-y-4 shadow-md">
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

              {/* Center Column: 4 Services Matrix */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 space-y-2 hover:border-purple-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-900">NexanAcademy</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Technology and digital initiatives built around evolving needs in learning and business.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-purple-700 pt-1">Learn &amp; Scale →</span>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-2 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-900">Pravaah</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Digital solutions designed to turn ideas and opportunities into practical outcomes.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-indigo-700 pt-1">Explore Engine →</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-2 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <Shield className="w-4 h-4" />
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-900">OWASP</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Building with a stronger focus on security and responsible digital practices.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 pt-1">Security Standards →</span>
                </div>

                <div className="p-4 rounded-xl bg-pink-50/60 border border-pink-100 space-y-2 hover:border-pink-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-900">Pathfinder School</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Technology-led initiatives focused on creating better learning opportunities and experiences.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-pink-700 pt-1">Academic Initiatives →</span>
                </div>
              </div>

              {/* Right Column: Fast Spotlight to Products */}
              <div className="lg:col-span-3 p-5 rounded-2xl bg-slate-50 border border-purple-100 space-y-3.5 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 block">
                    PROPRIETARY SUITE
                  </span>
                  <h5 className="text-sm font-black text-slate-900">
                    Products That Solve
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Flagship digital products engineered to solve practical bottlenecks:
                  </p>
                </div>
                <div className="space-y-1.5 text-xs font-bold text-slate-800">
                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-100/70 border border-purple-100 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>• ShikshaSathi (EdTech)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                  </button>
                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-100/70 border border-purple-100 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>• CampusNeeds (Campus)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                  </button>
                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-100/70 border border-purple-100 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>• Settler (Relocation)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pink-600" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. PRODUCTS MEGA PANEL (PROPORTIONAL, BALANCED, ZERO EMPTY DEAD SPACE) */}
          {activeModal === "products" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Product Philosophy */}
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col justify-between space-y-4 shadow-md">
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
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="pt-2 text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center justify-between cursor-pointer border-t border-purple-50"
                  >
                    <span>Explore ShikshaSathi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* CampusNeeds */}
                <div className="p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-3">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100/60 px-2 py-0.5 rounded-md">
                        CAMPUS
                      </span>
                    </div>
                    <h5 className="text-base font-black text-slate-900">CampusNeeds</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      A digital approach to simplifying everyday needs and experiences across campus ecosystems.
                    </p>
                    <div className="space-y-1 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-indigo-500 shrink-0" />
                        <span>Everyday utilities simplified</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-indigo-500 shrink-0" />
                        <span>Decentralized campus marketplace</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="pt-2 text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center justify-between cursor-pointer border-t border-indigo-50"
                  >
                    <span>Explore CampusNeeds</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Settler */}
                <div className="p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-3">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-100/60 px-2 py-0.5 rounded-md">
                        LIVING
                      </span>
                    </div>
                    <h5 className="text-base font-black text-slate-900">Settler</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      A product focused on solving practical relocation and housing challenges through modern tech.
                    </p>
                    <div className="space-y-1 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-pink-500 shrink-0" />
                        <span>Verified student accommodations</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-pink-500 shrink-0" />
                        <span>Frictionless city relocation</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="pt-2 text-xs font-bold text-pink-700 hover:text-pink-900 flex items-center justify-between cursor-pointer border-t border-pink-50"
                  >
                    <span>Explore Settler</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* 3. WHO WE ARE MEGA PANEL */}
          {activeModal === "whoWeAre" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col justify-between space-y-4">
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
                <div className="p-3.5 rounded-xl bg-white/[0.08] border border-white/[0.1] text-xs space-y-1 font-mono">
                  <span className="text-pink-300 font-bold block">OUR AMBITION:</span>
                  <p className="text-slate-200 font-medium">Build things people need · Create things people remember · Move things forward.</p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    <h5 className="text-sm font-extrabold text-slate-900">Delivery Network</h5>
                  </div>
                  <p className="text-base font-black text-purple-700">CHENNAI · BHOPAL · PUNE</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Different cities. Different talent. One direction: Forward.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-indigo-600" />
                    <h5 className="text-sm font-extrabold text-slate-900">Strategic Alliances</h5>
                  </div>
                  <p className="text-base font-black text-indigo-700">ROLTA · MANIT · Nexan</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    High-trust partnerships multiplying what both sides can do.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-emerald-600" />
                      <h5 className="text-sm font-extrabold text-slate-900">Technology With a Reason to Exist</h5>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">CORE PHILOSOPHY</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Understand. Build. Improve. Move Forward. That means asking the difficult questions before writing the easy code: What problem are we solving? Who are we solving it for? What would better look like? Then we build.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 4. INDUSTRIES MEGA PANEL */}
          {activeModal === "industries" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col justify-between space-y-4">
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
                <div className="pt-3 border-t border-purple-800/60">
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="inline-flex items-center gap-2 text-xs font-bold text-pink-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Discuss Industry Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col justify-between space-y-4">
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
                <div className="pt-2">
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="inline-flex items-center gap-2 text-xs font-bold text-pink-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Join the YugNext Community</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col justify-between space-y-4">
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

          {/* 7. CAREERS MEGA PANEL */}
          {activeModal === "careers" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col justify-between space-y-4">
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
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all"
                  >
                    <span>View Open Positions →</span>
                  </button>
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
                    Work across software, products, industries, and live delivery hubs in Chennai, Bhopal, and Pune.
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
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col justify-between space-y-4">
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
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
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
