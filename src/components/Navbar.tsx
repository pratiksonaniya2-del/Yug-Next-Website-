"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Globe2,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Sparkles,
  Command,
  Check,
} from "lucide-react";
import { ModalType } from "./ContentCardModal";
import TcsMegaMenu from "./TcsMegaMenu";
import YugNextLogo from "./YugNextLogo";

// Search catalog for TCS-style command search
const SEARCH_DATABASE: { title: string; category: string; id: ModalType; desc: string }[] = [
  { title: "NexanAcademy", category: "Services (What We Do)", id: "whatWeDo", desc: "Technology & digital initiatives built around evolving needs in learning and business." },
  { title: "Pravaah", category: "Services (What We Do)", id: "whatWeDo", desc: "Digital solutions designed to turn ideas and opportunities into practical outcomes." },
  { title: "Cybersecurity & Compliance", category: "Services (What We Do)", id: "whatWeDo", desc: "Building with a stronger focus on security and responsible digital practices." },
  { title: "Pathfinder School", category: "Services (What We Do)", id: "whatWeDo", desc: "Technology-led initiatives focused on creating better learning opportunities." },
  { title: "ShikshaSathi", category: "Products", id: "products", desc: "Technology built around making education more connected, accessible and useful." },
  { title: "CampusNeeds", category: "Products", id: "products", desc: "A digital approach to simplifying everyday needs across campus ecosystems." },
  { title: "Settler", category: "Products", id: "products", desc: "A product focused on solving practical problems through modern technology." },
  { title: "Education Industry", category: "Industries", id: "industries", desc: "Digital initiatives for a world where learning is increasingly connected." },
  { title: "Finance Industry", category: "Industries", id: "industries", desc: "Digital possibilities where trust, speed and accessibility matter." },
  { title: "Logistics Industry", category: "Industries", id: "industries", desc: "Smarter digital experiences for movement of people and goods." },
  { title: "Delivery Network (Chennai · Bhopal · Agra)", category: "Who We Are", id: "whoWeAre", desc: "Strategic delivery network spanning Chennai, Bhopal, and Agra." },
  { title: "Strategic Alliances (ROLTA, NexanAcademy, MANIT)", category: "Who We Are", id: "whoWeAre", desc: "High-trust partnerships multiplying technology-led growth." },
  { title: "Leadership & Identity", category: "Who We Are", id: "whoWeAre", desc: "People who question the obvious and build what is next." },
  { title: "Community Ecosystem", category: "Community", id: "community", desc: "Spaces to learn, collaborate, experiment and build together." },
  { title: "MANIT Bhopal Seed Funding (₹50K Grant)", category: "Investors", id: "investors", desc: "Initial seed capital sanctioned by MANIT innovation cell for core platform development." },
  { title: "Private Limited Incorporation (ROC Compliance)", category: "Investors", id: "investors", desc: "Formally registered under Companies Act 2013 on 21 Oct 2026." },
  { title: "Careers (Don't Just Work for the Future. Build It.)", category: "Careers", id: "careers", desc: "Looking for people who ask 'What if we did it differently?'" },
  { title: "Contact Solutions Hub", category: "Contact", id: "contact", desc: "Got an idea? Let's see where it goes. Send message directly." },
];

interface NavbarProps {
  activeModal?: ModalType;
  isLocked?: boolean;
  onOpenModal?: (modal: ModalType) => void;
  onClickModal?: (modal: ModalType) => void;
  onCloseMegaMenu?: () => void;
}

const ROUTE_MAP: Record<string, string> = {
  whatWeDo: "/services",
  whoWeAre: "/about",
  products: "/shikshasathi",
  industries: "/industries",
  community: "/community",
  news: "/invest",
  investors: "/invest",
  careers: "/careers",
  contact: "/#contact",
};

export default function Navbar({
  activeModal,
  isLocked = false,
  onOpenModal,
  onClickModal,
  onCloseMegaMenu,
}: NavbarProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Two Icons States (TCS Style)
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN - English");
  const [selectedRegion, setSelectedRegion] = useState("India (HQ: Bhopal)");

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Autofocus input when search modal opens
  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setSearchQuery("");
    }
  }, [searchModalOpen]);

  // Handle ESC key for search modal and dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (searchModalOpen) setSearchModalOpen(false);
        if (langDropdownOpen) setLangDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchModalOpen, langDropdownOpen]);

  // Toggle mega-menu tab on click ONLY (No hover), or navigate if on subpage
  const handleNavClick = (modal: ModalType) => {
    if (onOpenModal || onClickModal) {
      if (activeModal === modal) {
        if (onCloseMegaMenu) onCloseMegaMenu();
        else if (onClickModal) onClickModal(null);
        else onOpenModal?.(null);
      } else {
        if (onClickModal) onClickModal(modal);
        else onOpenModal?.(modal);
      }
    } else {
      // Direct navigation when rendered on subpages
      if (modal && ROUTE_MAP[modal]) {
        router.push(ROUTE_MAP[modal]);
      }
    }
  };

  const navItems: { label: string; id: ModalType }[] = [
    { label: "What We Do", id: "whatWeDo" },
    { label: "Who We Are", id: "whoWeAre" },
    { label: "Investors", id: "investors" },
    { label: "Careers", id: "careers" },
    { label: "Contact", id: "contact" },
  ];

  // Filtered search items
  const filteredSearch = searchQuery.trim() === ""
    ? SEARCH_DATABASE.slice(0, 6)
    : SEARCH_DATABASE.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      {/* Main Floating Glassmorphic Header with Attached TCS Mega-Menu */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 relative ${
          isScrolled
            ? "py-2 bg-[#0A0818]/95 backdrop-blur-2xl shadow-lg shadow-black/40 border-b border-[#2A2450]"
            : "py-2.5 sm:py-3 bg-[#0A0818]/85 backdrop-blur-md border-b border-[#2A2450]/80 shadow-xs"
        }`}
      >
        <div className="relative z-50 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo - Official YugNext Split Emblem & Stepping Human */}
          <Link
            href="/"
            onClick={() => {
              if (activeModal && onCloseMegaMenu) onCloseMegaMenu();
            }}
            className="flex items-center group text-left cursor-pointer shrink-0 hover:opacity-90 transition-opacity"
          >
            <YugNextLogo size="md" variant="full" theme="dark" />
          </Link>

          {/* Desktop Navigation Links — SINGLE LINE, NO WRAPPING, BEAUTIFULLY SPACED */}
          <nav className="hidden xl:flex items-center space-x-1 shrink-0">
            {navItems.map((item) => {
              const isActive = activeModal === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#6C3CE3] text-white font-bold ring-1 ring-[#9B7BF0]/50 shadow-md shadow-[#6C3CE3]/30"
                      : "text-[#A79FCB] hover:text-[#EFEDFA] hover:bg-white/[0.06]"
                  }`}
                  aria-expanded={isActive}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                      isActive
                        ? "rotate-180 text-white"
                        : "text-[#A79FCB] group-hover:text-[#9B7BF0]"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right Side Utility Controls: 2 Icons (Search & Globe) + CTA Button */}
          <div className="hidden sm:flex items-center space-x-2 xl:space-x-2.5 shrink-0">
            
            {/* ICON 1: TCS-STYLE SEARCH BUTTON */}
            <button
              onClick={() => {
                setSearchModalOpen(true);
                setLangDropdownOpen(false);
              }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#A79FCB] hover:text-[#EFEDFA] hover:bg-white/[0.08] transition-all border border-[#2A2450] hover:border-[#9B7BF0] cursor-pointer shadow-xs active:scale-95 shrink-0"
              title="Search YugNext (TCS Style)"
              aria-label="Search YugNext"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* ICON 2: TCS-STYLE REGION / LANGUAGE GLOBE BUTTON */}
            <div className="relative shrink-0">
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setSearchModalOpen(false);
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border cursor-pointer shadow-xs active:scale-95 ${
                  langDropdownOpen
                    ? "bg-[#6C3CE3] border-[#9B7BF0] text-white"
                    : "text-[#A79FCB] hover:text-[#EFEDFA] hover:bg-white/[0.08] border-[#2A2450] hover:border-[#9B7BF0]"
                }`}
                title="Global Regions & Language"
                aria-label="Select Country or Language"
              >
                <Globe2 className="w-4 h-4 text-[#9B7BF0]" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#0A0818]" />
              </button>

              {/* Language & Worldwide Region Dropdown */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#12102A] rounded-2xl shadow-2xl border border-[#2A2450] py-3 z-50 text-xs animate-in fade-in slide-in-from-top-2 duration-150 text-[#EFEDFA]">
                  <div className="px-4 pb-2 border-b border-[#2A2450]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9B7BF0] block">
                      GLOBAL DELIVERY NETWORK
                    </span>
                    <p className="text-[#EFEDFA] font-extrabold text-sm mt-0.5">
                      CHENNAI · BHOPAL · AGRA
                    </p>
                  </div>

                  <div className="px-4 py-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A79FCB] block mb-1">
                      SELECT LANGUAGE
                    </span>
                    {[
                      "EN - English (Default)",
                      "HI - हिन्दी (India)",
                      "TA - தமிழ் (Tamil Nadu)",
                    ].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between font-medium cursor-pointer transition-colors ${
                          selectedLang === lang
                            ? "bg-[#6C3CE3] text-white font-bold"
                            : "hover:bg-white/[0.06] text-[#A79FCB] hover:text-white"
                        }`}
                      >
                        <span>{lang}</span>
                        {selectedLang === lang && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    ))}
                  </div>

                  <div className="px-4 pt-2 border-t border-[#2A2450]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A79FCB] block mb-1">
                      OPERATING JURISDICTION
                    </span>
                    <div className="p-2 rounded-xl bg-[#181534] border border-[#2A2450] flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#9B7BF0] shrink-0" />
                      <span className="text-[#EFEDFA] font-semibold text-[11px]">
                        Corporate HQ: Bhopal, MP, India
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Button: Step Into Tomorrow */}
            <button
              onClick={() => handleNavClick("whatWeDo")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 hover:shadow-lg hover:shadow-[#6C3CE3]/35 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap ml-1"
            >
              <span>Step Into Tomorrow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Search + Hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 rounded-xl text-[#A79FCB] hover:bg-white/[0.08] hover:text-[#EFEDFA] transition-colors cursor-pointer border border-[#2A2450]"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#A79FCB] hover:bg-white/[0.08] hover:text-[#EFEDFA] transition-colors cursor-pointer border border-[#2A2450]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>

        {/* TCS Full-Width Attached Mega-Menu Dropdown Panel */}
        <TcsMegaMenu
          activeModal={activeModal || null}
          isLocked={isLocked}
          onClose={onCloseMegaMenu || (() => {})}
          onSelectModal={(modal) => {
            if (onClickModal) onClickModal(modal);
            else if (onOpenModal) onOpenModal(modal);
            else if (modal && ROUTE_MAP[modal]) router.push(ROUTE_MAP[modal]);
          }}
        />
      </header>

      {/* TCS-STYLE INTERACTIVE SEARCH OVERLAY MODAL */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-[#12102A] rounded-3xl shadow-2xl border border-[#2A2450] overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Search Input Bar */}
            <div className="p-4 sm:p-5 border-b border-[#2A2450] flex items-center gap-3">
              <Search className="w-5 h-5 text-[#9B7BF0] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, products, hubs, or insights..."
                className="w-full text-base sm:text-lg font-medium text-[#EFEDFA] placeholder:text-[#A79FCB]/60 outline-none bg-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-full text-[#A79FCB] hover:text-[#EFEDFA] text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-[#A79FCB] hover:text-white text-xs font-bold transition-colors cursor-pointer"
                title="Close (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Suggestion Pills */}
            <div className="px-5 py-3 bg-[#181534]/70 border-b border-[#2A2450] flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-[#A79FCB]/80 tracking-wider">
                TOPICS:
              </span>
              {["NexanAcademy", "ShikshaSathi", "Pravaah", "CampusNeeds", "Settler", "MANIT"].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSearchQuery(topic)}
                  className="px-2.5 py-1 rounded-full bg-[#12102A] hover:bg-[#6C3CE3] text-[#A79FCB] hover:text-white border border-[#2A2450] font-semibold cursor-pointer transition-colors whitespace-nowrap"
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Live Filtered Results */}
            <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 divide-y divide-[#2A2450]">
              {filteredSearch.length === 0 ? (
                <div className="py-12 text-center text-[#A79FCB] space-y-2">
                  <p className="font-bold text-sm">No results found for &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-xs text-[#A79FCB]/70">Try searching for ShikshaSathi, NexanAcademy, Bhopal, or Careers</p>
                </div>
              ) : (
                filteredSearch.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      setSearchModalOpen(false);
                      handleNavClick(item.id);
                    }}
                    className="w-full text-left p-3.5 rounded-2xl hover:bg-white/[0.06] transition-colors flex items-start justify-between group cursor-pointer"
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-extrabold text-[#EFEDFA] group-hover:text-[#9B7BF0] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#A79FCB] leading-relaxed font-light line-clamp-1 sm:line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A79FCB]/40 group-hover:text-[#9B7BF0] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </button>
                ))
              )}
            </div>

            {/* Search Footer */}
            <div className="p-3 bg-[#0A0818] border-t border-[#2A2450] flex items-center justify-between text-[11px] text-[#A79FCB] px-5">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#181534] border border-[#2A2450] text-[#EFEDFA] font-mono text-[10px]">ESC</kbd> to exit search</span>
              <span className="font-semibold text-[#9B7BF0]">YugNext TCS-Style Search</span>
            </div>

          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0818] border-b border-[#2A2450] px-5 py-6 shadow-2xl space-y-2.5 z-40 relative">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick(item.id);
              }}
              className="w-full text-left p-3 rounded-xl bg-[#12102A] text-[#EFEDFA] font-bold text-sm hover:bg-[#181534] transition-colors cursor-pointer flex items-center justify-between border border-[#2A2450]"
            >
              <span>{item.label}</span>
              <ChevronDown className="w-4 h-4 text-[#9B7BF0]" />
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick("whatWeDo");
              }}
              className="w-full py-3 rounded-xl bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-bold text-center text-sm shadow-md cursor-pointer transition-colors"
            >
              Step Into Tomorrow →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
