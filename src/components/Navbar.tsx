"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Sparkles,
  GraduationCap,
  Layers,
  Building2,
  Globe2,
  Compass,
  ArrowRight,
  Menu,
  X,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { ModalType } from "./ContentCardModal";

interface NavbarProps {
  onOpenModal: (modal: ModalType) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <>
      {/* Top Banner Notice: Corporate Milestone */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white text-xs py-2 px-4 border-b border-purple-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-purple-600/60 text-purple-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-purple-400/30">
              Corporate Milestone
            </span>
            <span className="font-medium text-purple-100 flex items-center gap-1.5 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              Officially incorporated as a Private Limited company (Oct 21, 2026) • Secured ₹50K Seed Funding
            </span>
          </div>
          <button
            onClick={() => onOpenModal("insights")}
            className="hidden md:inline-flex items-center gap-1 font-semibold text-purple-300 hover:text-white transition-colors shrink-0 ml-4 text-xs cursor-pointer"
          >
            <span>Read Timeline Card</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Floating Glassmorphic Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/90 backdrop-blur-2xl shadow-xl shadow-purple-950/5 border-b border-purple-100"
            : "py-4 bg-white/80 backdrop-blur-xl border-b border-purple-100/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-xl tracking-tight">Y</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-950 group-hover:text-purple-700 transition-colors">
                Yug<span className="text-purple-600">Next</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-purple-600 -mt-0.5">
                Pvt. Ltd.
              </span>
            </div>
          </button>

          {/* Desktop Navigation Buttons (Opens Dedicated Cognizant-Style Cards) */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            <button
              onClick={() => onOpenModal("whatWeDo")}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>What We Do</span>
            </button>

            <button
              onClick={() => onOpenModal("whoWeAre")}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Who We Are</span>
            </button>

            <button
              onClick={() => onOpenModal("industries")}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all cursor-pointer"
            >
              Industries
            </button>

            <button
              onClick={() => onOpenModal("insights")}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all cursor-pointer"
            >
              Insights
            </button>

            <button
              onClick={() => onOpenModal("investors")}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all cursor-pointer"
            >
              Investors
            </button>

            <button
              onClick={() => onOpenModal("careers")}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Careers</span>
              <span className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.2 rounded-full font-bold">
                Hiring
              </span>
            </button>
          </nav>

          {/* Right Utility & Contact CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50 transition-colors border border-purple-100"
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

            <button
              onClick={() => onOpenModal("contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white text-sm font-bold shadow-md shadow-purple-600/30 hover:shadow-lg hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (Triggers Cards) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-purple-100 px-5 py-6 shadow-2xl space-y-2.5 z-40 relative">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("whatWeDo");
            }}
            className="w-full text-left p-3 rounded-xl bg-purple-50/70 text-slate-900 font-bold text-sm"
          >
            What We Do (Products & Services)
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("whoWeAre");
            }}
            className="w-full text-left p-3 rounded-xl bg-purple-50/70 text-slate-900 font-bold text-sm"
          >
            Who We Are (Identity, Alliances, Hubs)
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("industries");
            }}
            className="w-full text-left p-3 rounded-xl bg-purple-50/70 text-slate-900 font-bold text-sm"
          >
            Industries (Education, Finance, Logistics, Health)
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("insights");
            }}
            className="w-full text-left p-3 rounded-xl bg-purple-50/70 text-slate-900 font-bold text-sm"
          >
            Insights & News
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("investors");
            }}
            className="w-full text-left p-3 rounded-xl bg-purple-50/70 text-slate-900 font-bold text-sm"
          >
            Investors
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("careers");
            }}
            className="w-full text-left p-3 rounded-xl bg-purple-50/70 text-slate-900 font-bold text-sm"
          >
            Careers (Hiring Active)
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("contact");
            }}
            className="w-full py-3.5 bg-purple-700 text-white rounded-xl font-bold text-center mt-2"
          >
            Contact Delivery Hub
          </button>
        </div>
      )}
    </>
  );
}
