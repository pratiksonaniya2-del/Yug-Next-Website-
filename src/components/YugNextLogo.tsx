"use client";

import React from "react";

interface YugNextLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon";
  theme?: "light" | "dark";
}

export default function YugNextLogo({
  className = "",
  size = "md",
  variant = "full",
  theme = "light",
}: YugNextLogoProps) {
  // Dimension mappings
  const iconDimensions = {
    sm: { w: 30, h: 36 },
    md: { w: 38, h: 46 },
    lg: { w: 48, h: 58 },
    xl: { w: 64, h: 78 },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official YugNext Split Rounded Emblem */}
      <svg
        width={iconDimensions.w}
        height={iconDimensions.h}
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm select-none"
      >
        <defs>
          <clipPath id="yugnextLogoClip">
            <rect width="100" height="120" rx="26" />
          </clipPath>
        </defs>

        <g clipPath="url(#yugnextLogoClip)">
          {/* Left Half: Deep Midnight Indigo / Navy */}
          <rect x="0" y="0" width="50" height="120" fill="#0e0738" />

          {/* Right Half: Vibrant Royal Electric Violet */}
          <rect x="50" y="0" width="50" height="120" fill="#5d35e0" />

          {/* Vertical Split Center Hairline */}
          <line x1="50" y1="0" x2="50" y2="120" stroke="#000000" strokeWidth="0.8" opacity="0.3" />

          {/* --- The Stepping Person Icon (Step Into Tomorrow) --- */}
          {/* Head (Centered white circle) */}
          <circle cx="50" cy="32" r="11" fill="#ffffff" />

          {/* Torso (Vertical white center trunk) */}
          <rect x="47" y="44" width="6" height="26" rx="3" fill="#ffffff" />

          {/* Left Arm (Diagonal pointing down-left, soft violet tone over dark side) */}
          <line
            x1="49"
            y1="50"
            x2="31"
            y2="66"
            stroke="#9d7df7"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Right Arm (Diagonal pointing down-right, crisp solid white over purple side) */}
          <line
            x1="51"
            y1="50"
            x2="69"
            y2="66"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Left Leg (Stepping forward-left, soft violet tone) */}
          <line
            x1="48"
            y1="68"
            x2="33"
            y2="95"
            stroke="#9d7df7"
            strokeWidth="6.5"
            strokeLinecap="round"
          />

          {/* Right Leg (Stepping back-right, solid white) */}
          <line
            x1="52"
            y1="68"
            x2="67"
            y2="95"
            stroke="#ffffff"
            strokeWidth="6.5"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Brand Typography Wordmark (YUG + NEXT + STEP INTO TOMORROW) */}
      {variant === "full" && (
        <div className="flex flex-col text-left">
          <div className="flex items-center tracking-[0.14em] font-black text-lg sm:text-xl leading-none">
            <span className={theme === "dark" ? "text-white" : "text-[#0e0738]"}>
              YUG
            </span>
            <span className="text-[#5d35e0] ml-0.5">NEXT</span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-[#5d35e0]/60" />
            <span className="text-[8px] sm:text-[9px] tracking-[0.26em] uppercase font-bold text-[#5d35e0]">
              STEP INTO TOMORROW
            </span>
            <span className="h-[1px] w-3 bg-[#5d35e0]/60" />
          </div>
        </div>
      )}
    </div>
  );
}
