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

const LANGUAGES = [
  { label: "EN - English (Default)", code: "en", short: "EN" },
  { label: "HI - हिन्दी (India)", code: "hi", short: "HI" },
  { label: "TA - தமிழ் (Tamil Nadu)", code: "ta", short: "TA" },
];

// Search catalog mapping directly to landing page sections & core subpages
const SEARCH_DATABASE: { title: string; category: string; targetUrl: string; desc: string }[] = [
  { title: "School Websites", category: "Services", targetUrl: "/#what-we-do", desc: "Comprehensive digital portals for schools with student dashboards, admissions & fees." },
  { title: "Photo Studio Websites", category: "Services", targetUrl: "/#what-we-do", desc: "High-resolution portfolios, client proofing galleries & automated bookings." },
  { title: "Restaurant & Cafe Websites", category: "Services", targetUrl: "/#what-we-do", desc: "Interactive digital menus, table reservation engines & QR code ordering." },
  { title: "Coaching Institutes", category: "Services", targetUrl: "/#what-we-do", desc: "Test series portals, study material vaults & student progress tracking." },
  { title: "All 6 Services Page", category: "Services Page", targetUrl: "/services", desc: "Explore school, photo studio, restaurant, coaching, society, and gym services." },
  { title: "ShikshaSathi", category: "Products", targetUrl: "/shikshasathi", desc: "Technology built around making education more connected, accessible and useful." },
  { title: "CampusNeeds (Logistics)", category: "Products", targetUrl: "/#what-we-do", desc: "A digital approach to simplifying everyday logistics across campus ecosystems." },
  { title: "Settler (Finance)", category: "Products", targetUrl: "/#what-we-do", desc: "Solving practical relocation & housing challenges through technology." },
  { title: "Delivery Network (Chennai · Bhopal · Agra)", category: "Network", targetUrl: "/#reach", desc: "Strategic delivery network spanning NCR, Bhopal, and Agra." },
  { title: "Who We Are & Strategic Alliances", category: "Company", targetUrl: "/#who-we-are", desc: "Technology with a reason to exist. ROLTA · MANIT · Nexan alliances." },
  { title: "Invest in Company", category: "Investors", targetUrl: "/#investors", desc: "Capital growth, equity participation, competitive fixed interest, and MANIT seed grant." },
  { title: "Support Community & Societies", category: "Community", targetUrl: "/#community", desc: "Funding & sponsorships for student societies in return for campus brand publicity." },
  { title: "Careers at YugNext", category: "Careers", targetUrl: "/#careers", desc: "Open positions for Software Engineers, Cloud Architects, and Growth Leads." },
  { title: "Contact Us", category: "Contact", targetUrl: "/#contact", desc: "Start the conversation. Connect with solutions desk directly." },
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
  activeModal: controlledActiveModal,
  isLocked: controlledIsLocked = false,
  onOpenModal,
  onClickModal,
  onCloseMegaMenu,
}: NavbarProps) {
  const router = useRouter();
  const [internalActiveModal, setInternalActiveModal] = useState<ModalType>(null);
  const [internalIsLocked, setInternalIsLocked] = useState<boolean>(false);

  const isControlled = onOpenModal !== undefined || onClickModal !== undefined;
  const activeModal = isControlled ? controlledActiveModal : internalActiveModal;
  const isLocked = isControlled ? controlledIsLocked : internalIsLocked;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Two Icons States (TCS Style)
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN - English (Default)");
  const [selectedLangCode, setSelectedLangCode] = useState("EN");
  const [selectedRegion, setSelectedRegion] = useState("India (HQ: Bhopal)");

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize and synchronize language
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCode = localStorage.getItem("yugnext_lang") || "en";
      const found = LANGUAGES.find((l) => l.code === savedCode);
      if (found) {
        setSelectedLang(found.label);
        setSelectedLangCode(found.short);
      }

      // Initialize Google Translate script
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        (window as any).googleTranslateElementInit = () => {
          if ((window as any).google?.translate?.TranslateElement) {
            new (window as any).google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,hi,ta",
                autoDisplay: false,
              },
              "google_translate_element"
            );
          }
        };
      }
    }
  }, []);

  const handleLanguageChange = (langLabel: string, langCode: string) => {
    const found = LANGUAGES.find((l) => l.code === langCode);
    setSelectedLang(langLabel);
    setSelectedLangCode(found ? found.short : "EN");
    setLangDropdownOpen(false);

    if (typeof window !== "undefined") {
      localStorage.setItem("yugnext_lang", langCode);

      const host = window.location.hostname;
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${host};`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${host};`;

      const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event("change"));
      } else {
        window.location.reload();
      }
    }
  };

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

  // Handle opening modal on click or hover
  const openModal = (modal: ModalType) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (isControlled) {
      if (onClickModal) onClickModal(modal);
      else onOpenModal?.(modal);
    } else {
      setInternalActiveModal(modal);
    }
  };

  const closeModal = () => {
    if (isControlled) {
      if (onCloseMegaMenu) onCloseMegaMenu();
      else if (onClickModal) onClickModal(null);
      else onOpenModal?.(null);
    } else {
      setInternalActiveModal(null);
    }
  };

  const handleMouseEnterItem = (modal: ModalType) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    openModal(modal);
  };

  const handleMouseLeaveNav = () => {
    if (isLocked) return;
    hoverTimeoutRef.current = setTimeout(() => {
      closeModal();
    }, 200);
  };

  const handleNavClick = (modal: ModalType) => {
    if (activeModal === modal) {
      closeModal();
    } else {
      openModal(modal);
    }
  };

  const navItems: { label: string; id: ModalType }[] = [
    { label: "What We Do", id: "whatWeDo" },
    { label: "Who We Are", id: "whoWeAre" },
    { label: "Investors", id: "investors" },
    { label: "Careers", id: "careers" },
  ];

  const handleContactClick = (e?: React.MouseEvent) => {
    closeModal();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      if (e) e.preventDefault();
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  const handleSearchResultClick = (targetUrl: string) => {
    setSearchModalOpen(false);
    if (activeModal && onCloseMegaMenu) {
      onCloseMegaMenu();
    }
    if (targetUrl.startsWith("/#")) {
      const hash = targetUrl.replace("/#", "");
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        el.classList.add("ring-2", "ring-[#6C3CE3]");
        setTimeout(() => el.classList.remove("ring-2", "ring-[#6C3CE3]"), 2200);
      } else {
        router.push(targetUrl);
      }
    } else {
      router.push(targetUrl);
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (filteredSearch.length > 0) {
      handleSearchResultClick(filteredSearch[0].targetUrl);
      return;
    }
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;
    const elements = document.querySelectorAll("h1, h2, h3, h4, h5, p, span, button");
    for (const el of Array.from(elements)) {
      if (el.textContent && el.textContent.toLowerCase().includes(query)) {
        setSearchModalOpen(false);
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        (el as HTMLElement).classList.add("ring-2", "ring-[#6C3CE3]");
        setTimeout(() => (el as HTMLElement).classList.remove("ring-2", "ring-[#6C3CE3]"), 2200);
        return;
      }
    }
  };

  // Filtered search items
  const filteredSearch = searchQuery.trim() === ""
    ? SEARCH_DATABASE.slice(0, 8)
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
          <nav
            onMouseLeave={handleMouseLeaveNav}
            className="hidden xl:flex items-center space-x-1 shrink-0"
          >
            {navItems.map((item) => {
              const isActive = activeModal === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => handleMouseEnterItem(item.id)}
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

            {/* Direct Contact Us Link (No dropdown arrow, hover underline, redirects directly to #contact) */}
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="inline-flex items-center px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold text-[#A79FCB] hover:text-white hover:underline underline-offset-4 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Contact Us
            </Link>
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
                className={`h-9 px-3 rounded-full flex items-center gap-1.5 transition-all border cursor-pointer shadow-xs active:scale-95 ${
                  langDropdownOpen
                    ? "bg-[#6C3CE3] border-[#9B7BF0] text-white"
                    : "text-[#A79FCB] hover:text-[#EFEDFA] hover:bg-white/[0.08] border-[#2A2450] hover:border-[#9B7BF0]"
                }`}
                title="Global Regions & Language"
                aria-label="Select Country or Language"
              >
                <Globe2 className="w-4 h-4 text-[#9B7BF0]" />
                <span className="text-[11px] font-mono font-bold text-[#EFEDFA] uppercase">
                  {selectedLangCode}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </button>

              {/* Language & Worldwide Region Dropdown */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#12102A] rounded-2xl shadow-2xl border border-[#2A2450] py-3 z-50 text-xs animate-in fade-in slide-in-from-top-2 duration-150 text-[#EFEDFA]">
                  <div className="px-4 pb-2 border-b border-[#2A2450]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9B7BF0] block">
                      GLOBAL DELIVERY NETWORK
                    </span>
                    <p className="text-[#EFEDFA] font-extrabold text-sm mt-0.5">
                      NCR · BHOPAL · AGRA
                    </p>
                  </div>

                  <div className="px-4 py-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A79FCB] block mb-1">
                      SELECT LANGUAGE
                    </span>
                    {LANGUAGES.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => handleLanguageChange(item.label, item.code)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between font-medium cursor-pointer transition-colors ${
                          selectedLangCode === item.short
                            ? "bg-[#6C3CE3] text-white font-bold"
                            : "hover:bg-white/[0.06] text-[#A79FCB] hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {selectedLangCode === item.short && <Check className="w-3.5 h-3.5 text-white" />}
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
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6C3CE3]/25 hover:shadow-lg hover:shadow-[#6C3CE3]/35 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap ml-1"
            >
              <span>Step Into Tomorrow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Search + Language + Hamburger */}
          <div className="xl:hidden flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setSearchModalOpen(false);
              }}
              className="p-2 rounded-xl text-[#A79FCB] hover:bg-white/[0.08] hover:text-[#EFEDFA] transition-colors cursor-pointer border border-[#2A2450] flex items-center gap-1 text-xs font-mono font-bold"
              title="Change Language"
            >
              <Globe2 className="w-4 h-4 text-[#9B7BF0]" />
              <span className="text-[10px] text-[#EFEDFA]">{selectedLangCode}</span>
            </button>
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 rounded-xl text-[#A79FCB] hover:bg-white/[0.08] hover:text-[#EFEDFA] transition-colors cursor-pointer border border-[#2A2450]"
              title="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#A79FCB] hover:bg-white/[0.08] hover:text-[#EFEDFA] transition-colors cursor-pointer border border-[#2A2450]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </button>
          </div>

        </div>

        {/* TCS Full-Width Attached Mega-Menu Dropdown Panel */}
        <div
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) {
              clearTimeout(hoverTimeoutRef.current);
              hoverTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeaveNav}
        >
          <TcsMegaMenu
            activeModal={activeModal || null}
            isLocked={isLocked}
            onClose={closeModal}
            onSelectModal={(modal) => {
              if (modal && ROUTE_MAP[modal]) {
                closeModal();
                router.push(ROUTE_MAP[modal]);
              } else if (onClickModal) {
                onClickModal(modal);
              } else if (onOpenModal) {
                onOpenModal(modal);
              } else {
                setInternalActiveModal(modal);
              }
            }}
          />
        </div>
      </header>

      {/* Hidden Google Translate Target */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* TCS-STYLE INTERACTIVE SEARCH OVERLAY MODAL */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-[#12102A] rounded-3xl shadow-2xl border border-[#2A2450] overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="p-4 sm:p-5 border-b border-[#2A2450] flex items-center gap-3">
              <Search className="w-5 h-5 text-[#9B7BF0] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across page sections, products, services, hubs..."
                className="w-full text-base sm:text-lg font-medium text-[#EFEDFA] placeholder:text-[#A79FCB]/60 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white text-xs font-bold transition-colors shrink-0 cursor-pointer"
              >
                Go
              </button>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-full text-[#A79FCB] hover:text-[#EFEDFA] text-xs cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="p-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-[#A79FCB] hover:text-white text-xs font-bold transition-colors cursor-pointer"
                title="Close (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Suggestion Pills */}
            <div className="px-5 py-3 bg-[#181534]/70 border-b border-[#2A2450] flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-[#A79FCB]/80 tracking-wider">
                TOPICS:
              </span>
              {["School Websites", "ShikshaSathi", "CampusNeeds", "Settler", "Invest", "Careers", "Bhopal"].map((topic) => (
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
                  <p className="font-bold text-sm">No direct database match for &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-xs text-[#A79FCB]/70">Press Enter or click &lsquo;Go&rsquo; to find and jump to matching content on this page</p>
                </div>
              ) : (
                filteredSearch.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleSearchResultClick(item.targetUrl)}
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
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#9B7BF0] shrink-0 mt-1">
                      <span className="hidden sm:inline">
                        {item.targetUrl.startsWith("/#") ? "Scroll to section" : "Go to page"}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Search Footer */}
            <div className="p-3 bg-[#0A0818] border-t border-[#2A2450] flex items-center justify-between text-[11px] text-[#A79FCB] px-5">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#181534] border border-[#2A2450] text-[#EFEDFA] font-mono text-[10px]">Enter</kbd> to redirect immediately</span>
              <span className="font-semibold text-[#9B7BF0]">YugNext Quick Navigation</span>
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
          <Link
            href="/#contact"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleContactClick(e);
            }}
            className="w-full text-left p-3 rounded-xl bg-[#12102A] text-[#EFEDFA] font-bold text-sm hover:bg-[#181534] hover:underline underline-offset-4 transition-colors cursor-pointer block border border-[#2A2450]"
          >
            <span>Contact Us</span>
          </Link>
          <div className="pt-2">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleContactClick(e);
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
