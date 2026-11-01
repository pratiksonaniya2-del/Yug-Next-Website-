"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Shield,
  GraduationCap,
  Layers,
  Building2,
  Cpu,
  Globe2,
  Calendar,
  Newspaper,
  Award,
  Users,
  Compass,
  ArrowRight,
  Menu,
  X,
  MapPin,
  HeartHandshake,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDropdowns = () => setActiveMenu(null);

  return (
    <>
      {/* Top Banner Notice: Recent Milestone */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Milestone Update
            </span>
            <span className="font-medium text-purple-100">
              🎉 Officially incorporated as Pvt Ltd company (Oct 21, 2026) & Secured 50K Incubation Funding!
            </span>
          </div>
          <a
            href="#insights"
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-white hover:text-purple-200 transition-colors shrink-0 ml-4"
          >
            Read Story <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Floating Glassmorphic Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/85 backdrop-blur-xl shadow-lg shadow-purple-900/5 border-b border-purple-100"
            : "py-4 bg-white/70 backdrop-blur-md border-b border-purple-50"
        }`}
        onMouseLeave={closeDropdowns}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-xl tracking-tight">Y</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                Yug<span className="text-purple-600">Next</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-purple-600">
                Pvt. Ltd.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* What We Do? Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("whatWeDo")}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeMenu === "whatWeDo"
                    ? "text-purple-700 bg-purple-50"
                    : "text-slate-700 hover:text-purple-600 hover:bg-purple-50/60"
                }`}
              >
                <span>What We Do?</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "whatWeDo" ? "rotate-180 text-purple-700" : ""
                  }`}
                />
              </button>

              {/* What We Do? Dropdown Panel */}
              <AnimatePresence>
                {activeMenu === "whatWeDo" && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-[680px] rounded-2xl bg-white/95 backdrop-blur-2xl shadow-2xl shadow-purple-900/15 border border-purple-100 p-6 z-50 grid grid-cols-2 gap-6"
                  >
                    {/* Products Column */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-purple-100">
                        <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-purple-800">
                          Proprietary Products
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <a
                          href="#products"
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-purple-100 text-purple-700 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover/item:text-purple-700 flex items-center gap-1.5">
                              Shikshasetu
                              <span className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.2 rounded font-medium">
                                EdTech
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Smart digital bridge connecting students, faculties & administration.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#products"
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover/item:text-purple-700 flex items-center gap-1.5">
                              CampusNeeds
                              <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.2 rounded font-medium">
                                Ecosystem
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Comprehensive student campus life, utilities & services marketplace.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#products"
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-pink-100 text-pink-700 group-hover/item:bg-pink-600 group-hover/item:text-white transition-colors">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover/item:text-purple-700 flex items-center gap-1.5">
                              Settler
                              <span className="text-[10px] bg-pink-100 text-pink-700 px-1.5 py-0.2 rounded font-medium">
                                Relocation
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Hassle-free student onboarding, accommodation & local settlement.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Services Column */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-purple-100">
                        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-800">
                          Specialized Services
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <a
                          href="#services"
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-purple-100 text-purple-700 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover/item:text-purple-700">
                              NexonAcademy
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Next-generation cohort-based skill engineering & tech leadership.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#services"
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover/item:text-purple-700">
                              Pravah
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Fluid enterprise digital workflows & custom engineering pipelines.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#services"
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                            <Shield className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover/item:text-purple-700">
                              OWASP Security
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Enterprise application vulnerability defense & compliance audits.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#services"
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-amber-100 text-amber-700 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                            <Compass className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover/item:text-purple-700">
                              Pathfinder School
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Career navigation & talent steering for aspiring leaders.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Who We Are? Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("whoWeAre")}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeMenu === "whoWeAre"
                    ? "text-purple-700 bg-purple-50"
                    : "text-slate-700 hover:text-purple-600 hover:bg-purple-50/60"
                }`}
              >
                <span>Who We Are?</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "whoWeAre" ? "rotate-180 text-purple-700" : ""
                  }`}
                />
              </button>

              {/* Who We Are? Dropdown Panel */}
              <AnimatePresence>
                {activeMenu === "whoWeAre" && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute -left-20 mt-2 w-[720px] rounded-2xl bg-white/95 backdrop-blur-2xl shadow-2xl shadow-purple-900/15 border border-purple-100 p-6 z-50 grid grid-cols-3 gap-6"
                  >
                    {/* Column 1: Identity & Industries */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-3 pb-2 border-b border-purple-100">
                        Identity & Sectors
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a
                            href="#about"
                            className="block font-semibold text-slate-800 hover:text-purple-700 hover:translate-x-1 transition-transform"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#leadership"
                            className="block font-semibold text-slate-800 hover:text-purple-700 hover:translate-x-1 transition-transform"
                          >
                            Leadership & Team
                          </a>
                        </li>
                      </ul>

                      <div className="mt-4 pt-3 border-t border-purple-100">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                          Industries Served:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {["Education", "Finance", "Logistics", "Health"].map((ind) => (
                            <span
                              key={ind}
                              className="text-[11px] bg-purple-50 text-purple-700 font-semibold px-2 py-0.5 rounded-full border border-purple-100"
                            >
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Community & Alliances */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-3 pb-2 border-b border-purple-100">
                        Community & Alliances
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-bold text-slate-400 block mb-1">
                            Community Initiatives:
                          </span>
                          <p className="text-xs font-medium text-slate-700">
                            • <strong>Ekjut</strong> (Youth Impact)
                          </p>
                          <p className="text-xs font-medium text-slate-700">
                            • <strong>MANIT Students</strong> (Tech Hub)
                          </p>
                        </div>

                        <div className="pt-2 border-t border-purple-50">
                          <span className="text-xs font-bold text-slate-400 block mb-1">
                            Strategic Alliances:
                          </span>
                          <div className="space-y-1 text-xs font-semibold text-slate-700">
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                              <span>ROLTA</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                              <span>MANIT Incubation</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                              <span>Gov. of India Initiatives</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                              <span>NexonAcademy</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Global Delivery Network */}
                    <div className="bg-gradient-to-br from-purple-50/70 to-indigo-50/50 p-3.5 rounded-xl border border-purple-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-purple-700" />
                        Delivery Network
                      </h4>
                      <p className="text-xs text-slate-600 mb-3">
                        Strategic tech infrastructure across premier Indian hubs:
                      </p>
                      <ul className="space-y-1.5 text-xs font-semibold text-purple-950">
                        <li className="flex items-center justify-between">
                          <span>Chennai</span>
                          <span className="text-[10px] text-purple-600 font-normal">Tech Hub</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Bhopal</span>
                          <span className="text-[10px] text-purple-600 font-normal">HQ / Incubation</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Agra</span>
                          <span className="text-[10px] text-purple-600 font-normal">Innovation Wing</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Delhi NCR</span>
                          <span className="text-[10px] text-purple-600 font-normal">Corporate Office</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
            <a
              href="#insights"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50/60 transition-all"
            >
              Insights
            </a>
            <a
              href="#investors"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50/60 transition-all"
            >
              Investors
            </a>
            <a
              href="#careers"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50/60 transition-all flex items-center gap-1"
            >
              Careers
              <span className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.2 rounded-full font-bold">
                Hiring
              </span>
            </a>
          </nav>

          {/* Right Utility & CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-purple-50 transition-colors border border-purple-100"
              >
                <Globe2 className="w-3.5 h-3.5 text-purple-600" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-28 bg-white rounded-xl shadow-xl border border-purple-100 py-1 z-50 text-xs">
                  {["EN - English", "HI - हिन्दी", "TA - தமிழ்"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang.slice(0, 2));
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 hover:bg-purple-50 hover:text-purple-700 font-medium"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white text-sm font-bold shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-purple-100 px-4 py-6 shadow-xl"
          >
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-2">
                  What We Do?
                </span>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    Shikshasetu (EdTech)
                  </a>
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    CampusNeeds
                  </a>
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    Settler
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    NexonAcademy
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    Pravah
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    OWASP & Pathfinder
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-purple-100">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-2">
                  Who We Are?
                </span>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    About Us & Team
                  </a>
                  <a
                    href="#alliances"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    Strategic Alliances
                  </a>
                  <a
                    href="#delivery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    Delivery Network
                  </a>
                  <a
                    href="#industries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-purple-50/50 rounded-lg font-medium text-slate-800"
                  >
                    Industries
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-purple-100">
                <a
                  href="#insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-slate-800 py-1"
                >
                  Insights & News
                </a>
                <a
                  href="#investors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-slate-800 py-1"
                >
                  Investors
                </a>
                <a
                  href="#careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-slate-800 py-1"
                >
                  Careers
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 w-full text-center py-3 bg-purple-600 text-white rounded-xl font-bold"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
