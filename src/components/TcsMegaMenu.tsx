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
      {/* Background Dim Backdrop (TCS Style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 top-[68px] bg-slate-950/40 backdrop-blur-sm z-40"
      />

      {/* TCS Full-Width Mega-Menu Dropdown Panel */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-2xl border-b border-purple-200/90 shadow-2xl shadow-purple-950/20 z-50 max-h-[82vh] overflow-y-auto"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          
          {/* Top Control Bar: Active Indicator + Lock/Unlock + Close */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-purple-100">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700">
                YUGNEXT • TCS-STYLE MEGA NAVIGATION
              </span>
              <span className="text-slate-300 font-mono text-xs">/</span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
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
              {/* Close Button with ESC hint */}
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 text-xs font-bold transition-all cursor-pointer border border-slate-200 hover:border-purple-300"
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Strategic Thesis */}
              <div className="lg:col-span-4 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  CAPABILITIES & SERVICES
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  From Digital Presence to Digital Possibility.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  Yugnext works across software, digital solutions, products and technology-led initiatives to help businesses and organisations move forward.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="inline-flex items-center gap-2 text-xs font-bold text-purple-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Connect with Solutions Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Center Column: 4 Services Matrix */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2 hover:border-purple-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h5 className="text-sm font-extrabold text-slate-900">NexanAcademy</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Technology and digital initiatives built around evolving needs in learning and business.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2 hover:border-indigo-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h5 className="text-sm font-extrabold text-slate-900">Pravaah</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Digital solutions designed to turn ideas and opportunities into practical outcomes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2 hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h5 className="text-sm font-extrabold text-slate-900">OWASP</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Building with a stronger focus on security and responsible digital practices.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-2 hover:border-pink-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h5 className="text-sm font-extrabold text-slate-900">Pathfinder School</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Technology-led initiatives focused on creating better learning opportunities and experiences.
                  </p>
                </div>
              </div>

              {/* Right Column: Fast Spotlight to Products */}
              <div className="lg:col-span-3 p-6 rounded-3xl bg-slate-50 border border-purple-100 space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 block">
                  PROPRIETARY SUITE
                </span>
                <h5 className="text-base font-extrabold text-slate-900">
                  Products That Solve
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Discover our flagship digital products engineered to solve practical bottlenecks:
                </p>
                <div className="space-y-2 text-xs font-bold text-slate-800">
                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2 rounded-xl hover:bg-purple-100/60 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>• ShikshaSathi</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                  </button>
                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2 rounded-xl hover:bg-purple-100/60 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>• CampusNeeds</span>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                  </button>
                  <button
                    onClick={() => onSelectModal("products")}
                    className="w-full text-left p-2 rounded-xl hover:bg-purple-100/60 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>• Settler</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pink-600" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. PRODUCTS MEGA PANEL */}
          {activeModal === "products" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Product Philosophy */}
              <div className="lg:col-span-4 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  PRODUCT PHILOSOPHY
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  Ideas Are Everywhere. Products That Solve Are Rare.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  We believe the best products don't begin with: “What can we build?” They begin with: “What needs solving?” That's the philosophy behind the products we're building.
                </p>
              </div>

              {/* Center & Right: 3 Core Products */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* ShikshaSathi */}
                <div className="p-6 rounded-3xl bg-purple-50/50 border border-purple-100 space-y-4 hover:border-purple-300 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 block">
                      EDUCATION TECHNOLOGY
                    </span>
                    <h5 className="text-lg font-black text-slate-900">ShikshaSathi</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Technology built around making education more connected, accessible and useful.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="pt-3 border-t border-purple-100 text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center justify-between cursor-pointer"
                  >
                    <span>Explore ShikshaSathi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* CampusNeeds */}
                <div className="p-6 rounded-3xl bg-indigo-50/50 border border-indigo-100 space-y-4 hover:border-indigo-300 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 block">
                      CAMPUS ECOSYSTEM
                    </span>
                    <h5 className="text-lg font-black text-slate-900">CampusNeeds</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A digital approach to simplifying everyday needs and experiences across the campus ecosystem.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="pt-3 border-t border-indigo-100 text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center justify-between cursor-pointer"
                  >
                    <span>Explore CampusNeeds</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Settler */}
                <div className="p-6 rounded-3xl bg-pink-50/50 border border-pink-100 space-y-4 hover:border-pink-300 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600 block">
                      PRACTICAL LIVING
                    </span>
                    <h5 className="text-lg font-black text-slate-900">Settler</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A product focused on solving practical problems through technology.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="pt-3 border-t border-pink-100 text-xs font-bold text-pink-700 hover:text-pink-900 flex items-center justify-between cursor-pointer"
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Purpose & Ambition */}
              <div className="lg:col-span-4 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  WHO WE ARE
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  We're Not Here Just to Follow What's Next.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  Yugnext is a technology-driven organisation working across software, digital solutions and products to solve problems that matter.
                </p>
                <div className="pt-3 border-t border-purple-800 text-xs font-bold text-purple-300">
                  Our ambition is simple: <br />
                  <span className="text-white font-extrabold text-sm">
                    • Build things people need. • Create things people remember. • Move things forward.
                  </span>
                </div>
              </div>

              {/* Center Column: About Us & Leadership */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 block">
                    ABOUT US
                  </span>
                  <h5 className="text-base font-extrabold text-slate-900">
                    Technology With a Reason to Exist.
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The digital world is full of things that look impressive. We're more interested in things that actually work.
                  </p>
                  <div className="text-[11px] text-purple-900 font-semibold space-y-0.5 pt-1">
                    <p>• What problem are we solving?</p>
                    <p>• Who are we solving it for?</p>
                    <p>• What would better look like?</p>
                  </div>
                  <p className="text-xs font-bold text-slate-800 pt-1">
                    Understand. Build. Improve. Move Forward. That's Yugnext.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 block">
                    LEADERSHIP
                  </span>
                  <h5 className="text-base font-extrabold text-slate-900">
                    People Who Ask What's Next.
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Behind every product, partnership and idea is a team willing to question the obvious and build the possible.
                  </p>
                </div>
              </div>

              {/* Right Column: Strategic Alliances & Delivery Hubs */}
              <div className="lg:col-span-3 p-6 rounded-3xl bg-slate-900 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400 block">
                  STRATEGIC ALLIANCES
                </span>
                <h5 className="text-base font-bold text-white">Some Things Are Better Built Together.</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our strategic alliances connect Yugnext with organisations and institutions that share our vision:
                </p>
                <div className="space-y-1.5 text-xs font-bold text-purple-300">
                  <p>• ROLTA</p>
                  <p>• NexanAcademy</p>
                  <p>• MANIT Bhopal</p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-purple-400">
                  DELIVERY NETWORK: <br />
                  <strong className="text-white text-xs">CHENNAI · BHOPAL · PUNE</strong>
                  <p className="text-[10px] text-slate-400 pt-1">One direction. Forward.</p>
                </div>
              </div>
            </div>
          )}

          {/* 4. INDUSTRIES MEGA PANEL */}
          {activeModal === "industries" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  INDUSTRIES
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  Different Industries. Different Problems. One Thing in Common.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  Technology changes from industry to industry. The need for better solutions doesn't.
                </p>
              </div>

              {/* Middle 3 Columns */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-6 rounded-3xl bg-purple-50/50 border border-purple-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-black text-slate-900">EDUCATION</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Building technology and digital initiatives for a world where learning is becoming increasingly connected.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-black text-slate-900">FINANCE</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Creating digital possibilities for an industry where trust, speed and accessibility matter.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-indigo-50/50 border border-indigo-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-black text-slate-900">LOGISTICS</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Helping build smarter digital experiences for an increasingly connected movement of people and goods.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. COMMUNITY MEGA PANEL */}
          {activeModal === "community" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  COMMUNITY
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  The Future Isn't Built Alone.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  Technology moves faster when people share ideas. We believe in creating spaces where people can learn, collaborate, experiment and build together.
                </p>
                <div className="text-sm font-extrabold text-white tracking-widest pt-2">
                  Learn. Connect. Build.
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
                  <h5 className="text-sm font-bold text-slate-900">MANIT Students Cohort</h5>
                  <p className="text-xs text-slate-600">Collaborative builder initiatives, hackathons, and campus developers.</p>
                </div>
                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                  <h5 className="text-sm font-bold text-slate-900">Ekjut Initiative</h5>
                  <p className="text-xs text-slate-600">Student mentors, developer circles, and local technology initiatives.</p>
                </div>
                <div className="sm:col-span-2 pt-2 flex justify-end">
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 transition-colors cursor-pointer"
                  >
                    <span>Join the Community →</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 6. NEWS MEGA PANEL */}
          {(activeModal === "news" || activeModal === "insights") && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  CORPORATE MILESTONES
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  Milestones & Corporate Journey.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  Verified historical milestones shaping YugNext Private Limited.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                    21 OCTOBER 2026
                  </span>
                  <h5 className="text-base font-bold text-slate-900">Incorporated as a Private Limited Company</h5>
                  <p className="text-xs text-slate-600">
                    Officially incorporated under the Companies Act as YugNext Private Limited.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                  <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                    8 MAY 2026
                  </span>
                  <h5 className="text-base font-bold text-slate-900">Received ₹50,000 Seed Funding & Incubated</h5>
                  <p className="text-xs text-slate-600">
                    Incubated at MANIT Bhopal with ₹50K grant funding for foundational development.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 7. CAREERS MEGA PANEL */}
          {activeModal === "careers" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  CAREERS AT YUGNEXT
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  Don't Just Work for the Future. Build It.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  We're looking for people who don't stop at: “That's how it's done.” We're looking for people who ask: “What if we did it differently?”
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 rounded-xl bg-purple-50 text-purple-900 font-bold text-xs border border-purple-100">
                    People who are curious.
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 text-purple-900 font-bold text-xs border border-purple-100">
                    People who take ownership.
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 text-purple-900 font-bold text-xs border border-purple-100">
                    People who want to learn.
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 text-purple-900 font-bold text-xs border border-purple-100">
                    People who want to build.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-600">
                    If you're looking for just another job, there are plenty. If you're looking to build something — let's talk.
                  </p>
                  <button
                    onClick={() => onSelectModal("contact")}
                    className="px-6 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800 transition-colors shrink-0 cursor-pointer"
                  >
                    View Open Positions →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 8. CONTACT MEGA PANEL */}
          {activeModal === "contact" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  START THE CONVERSATION
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  Got an Idea? Let's See Where It Goes.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  Maybe you have a business problem. Maybe you have an idea. Maybe you need a technology partner. Maybe you simply think there's a better way to do something.
                </p>
                <div className="pt-3 border-t border-purple-800 text-xs text-purple-300 font-mono">
                  DELIVERY NETWORK: <br />
                  <strong className="text-white text-xs">CHENNAI · BHOPAL · PUNE</strong>
                  <p className="text-[11px] text-purple-400 pt-1">Different cities. Different talent. One direction. Forward.</p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-purple-50/40 p-6 rounded-3xl border border-purple-100 space-y-3">
                <h5 className="text-sm font-bold text-slate-900">Start the conversation</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-purple-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-purple-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <input
                    type="text"
                    placeholder="Organisation"
                    className="sm:col-span-2 w-full px-3.5 py-2 rounded-xl bg-white border border-purple-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <textarea
                    rows={2}
                    placeholder="What would you like to build?"
                    className="sm:col-span-2 w-full px-3.5 py-2 rounded-xl bg-white border border-purple-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <button
                  onClick={() => alert("Thank you! Your inquiry has been sent to Yugnext.")}
                  className="w-full py-2.5 rounded-xl bg-purple-700 text-white font-bold text-xs hover:bg-purple-800 transition-colors shadow-md shadow-purple-600/30 cursor-pointer"
                >
                  Send Message →
                </button>
              </div>
            </div>
          )}

          {/* 9. INVESTORS MEGA PANEL */}
          {activeModal === "investors" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                  INVESTOR RELATIONS
                </span>
                <h4 className="text-2xl font-black leading-tight text-white">
                  Backing the Journey Ahead.
                </h4>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  Building for tomorrow takes more than an idea. It takes people willing to believe in the idea — and support the work required to turn it into reality. Yugnext is building with long-term ambition, supported by people and institutions who see the possibilities ahead.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
                  <span className="text-[11px] font-bold text-purple-700">Incubation</span>
                  <h5 className="text-sm font-bold text-slate-900">MANIT Incubation Centre</h5>
                  <p className="text-xs text-slate-500">Seed stage infrastructure & lab support.</p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-700">Seed Grant</span>
                  <h5 className="text-sm font-bold text-slate-900">₹50,000 Seed Funding</h5>
                  <p className="text-xs text-slate-500">Disbursed on 8 May 2026 for core builds.</p>
                </div>
                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                  <span className="text-[11px] font-bold text-indigo-700">Alliances</span>
                  <h5 className="text-sm font-bold text-slate-900">ROLTA Ecosystem</h5>
                  <p className="text-xs text-slate-500">Strategic enterprise collaboration.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </>
  );
}