"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Shield,
  Layers,
  MapPin,
} from "lucide-react";
import { ModalType } from "./ContentCardModal";

interface HeroProps {
  onOpenModal?: (modal: ModalType) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const glowRef = useRef<HTMLDivElement | null>(null);

  // Cursor-follow ambient glow exactly like yugnext.in
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const xPct = (e.clientX / window.innerWidth) * 100;
      const yPct = (e.clientY / window.innerHeight) * 100;
      glowRef.current.style.setProperty("--x", `${xPct}%`);
      glowRef.current.style.setProperty("--y", `${yPct}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A0818] text-[#EFEDFA] pt-12 md:pt-20 pb-20 lg:pb-28">
      {/* 1. Ambient Background: Dot Grid Field + Cursor-Tracking Glow from yugnext.in */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="field" />
        <div ref={glowRef} className="glow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-10 items-center">
          
          {/* ================= LEFT COLUMN: HERO HEADLINE & ACTIONS ================= */}
          <div className="space-y-6">
            
            {/* Top Badge with Pulsing Soft-Violet Dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#2A2450] bg-[#12102A]/80 backdrop-blur text-xs font-mono text-[#9B7BF0]">
              <span className="w-2 h-2 rounded-full bg-[#9B7BF0] badge-dot" />
              <span className="tracking-[0.18em] uppercase font-semibold">
                YUGNEXT PRIVATE LIMITED
              </span>
            </div>

            {/* Main Headline with Gradient Violet Typography from yugnext.in */}
            <h1 className="font-display font-semibold text-[2.5rem] leading-[1.08] sm:text-5xl md:text-[3.25rem] text-[#EFEDFA] tracking-tight">
              Your next website is being built —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B7BF0] to-[#6C3CE3]">
                premium, without the price tag.
              </span>
            </h1>

            {/* Description Copy */}
            <p className="text-[#A79FCB] text-base md:text-lg leading-relaxed max-w-lg font-light">
              We&apos;re putting the finishing touches on Yugnext: fast, professional business websites at a price small businesses can actually afford. Reach out now and we&apos;ll have your project first in line at launch.
            </p>

            {/* Action Buttons: Phone Call + Direct Email */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="tel:+919310346182"
                className="inline-flex items-center justify-center gap-2.5 bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-display font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-[#6C3CE3]/35 hover:shadow-xl hover:shadow-[#6C3CE3]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white text-white" />
                <span>Call +91 93103 46182</span>
              </a>

              <a
                href="mailto:yugnextofficial@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 border border-[#2A2450] bg-[#12102A]/60 hover:bg-[#9B7BF0]/10 hover:border-[#9B7BF0] text-[#EFEDFA] font-display font-semibold text-sm px-6 py-3.5 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#A79FCB]" />
                <span>yugnextofficial@gmail.com</span>
              </a>
            </div>

            {/* Quick Helper Subtext & Delivery Network Node Info */}
            <div className="space-y-2 pt-1">
              <p className="text-xs text-[#A79FCB]/70 font-mono">
                One tap to call or email — no forms, no waiting.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#9B7BF0]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Strategic Delivery Network: CHENNAI · BHOPAL · AGRA</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: SIGNATURE BROWSER MOCKUP BUILDING ITSELF ================= */}
          <div>
            <div className="relative rounded-2xl border border-[#2A2450] bg-[#12102A] shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Window Chrome Header */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#2A2450] bg-[#181534]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3A2E63]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3A2E63]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3A2E63]" />
                
                {/* Search Address Bar with Cursor Blink */}
                <div className="ml-3 flex-1 h-6 rounded-md bg-[#0A0818]/70 flex items-center px-3 border border-[#2A2450]/60">
                  <span className="font-mono text-[11px] text-[#A79FCB]">yourbusiness.com</span>
                  <span className="w-[7px] h-[13px] bg-[#9B7BF0]/80 ml-1 cursor-blink" />
                </div>
              </div>

              {/* Self-Building Page Canvas */}
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Navbar mock lines */}
                <div className="flex items-center justify-between">
                  <div className="mock-line w-24" style={{ animationDelay: "0.2s" }} />
                  <div className="flex gap-2">
                    <div className="mock-line w-10" style={{ animationDelay: "0.3s" }} />
                    <div className="mock-line w-10" style={{ animationDelay: "0.35s" }} />
                    <div className="mock-line w-10" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>

                {/* Hero card block */}
                <div
                  className="mock-block rounded-xl border border-[#2A2450] bg-gradient-to-br from-[#181534] to-[#0A0818] p-5 sm:p-6"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="mock-line w-3/4 h-4 mb-3" style={{ animationDelay: "0.6s" }} />
                  <div className="mock-line w-1/2 mb-5" style={{ animationDelay: "0.7s" }} />
                  <div
                    className="mock-line w-32 h-8 !rounded-lg"
                    style={{
                      animationDelay: "0.8s",
                      background: "linear-gradient(90deg, #6C3CE3, #9B7BF0, #6C3CE3)",
                      backgroundSize: "200% 100%",
                    }}
                  />
                </div>

                {/* 3 feature blocks grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div
                    className="mock-block rounded-lg border border-[#2A2450] bg-[#181534]/50 p-3 space-y-2"
                    style={{ animationDelay: "0.9s" }}
                  >
                    <div className="mock-line w-6 h-6 !rounded-md" style={{ animationDelay: "1s" }} />
                    <div className="mock-line w-full" style={{ animationDelay: "1.05s" }} />
                  </div>
                  <div
                    className="mock-block rounded-lg border border-[#2A2450] bg-[#181534]/50 p-3 space-y-2"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="mock-line w-6 h-6 !rounded-md" style={{ animationDelay: "1.1s" }} />
                    <div className="mock-line w-full" style={{ animationDelay: "1.15s" }} />
                  </div>
                  <div
                    className="mock-block rounded-lg border border-[#2A2450] bg-[#181534]/50 p-3 space-y-2"
                    style={{ animationDelay: "1.1s" }}
                  >
                    <div className="mock-line w-6 h-6 !rounded-md" style={{ animationDelay: "1.2s" }} />
                    <div className="mock-line w-full" style={{ animationDelay: "1.25s" }} />
                  </div>
                </div>

              </div>

            </div>

            {/* Sub-caption from yugnext.in */}
            <p className="text-center font-mono text-[11px] text-[#A79FCB]/60 mt-4 tracking-wide">
              a preview of what we build for you — live soon
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
