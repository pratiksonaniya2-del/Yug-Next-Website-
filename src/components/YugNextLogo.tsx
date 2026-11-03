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
}: YugNextLogoProps) {
  // Height classes preserving aspect ratio (~3.44:1)
  const sizeClasses = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-12",
    xl: "h-14 sm:h-16",
  }[size];

  const iconSizeClasses = {
    sm: "h-7 w-auto",
    md: "h-9 w-auto",
    lg: "h-11 w-auto",
    xl: "h-14 w-auto",
  }[size];

  if (variant === "icon") {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/images/yugnext-icon.png"
          alt="YUGNEXT"
          className={`${iconSizeClasses} object-contain rounded-md drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official High-Quality YugNext Logo with slightly rounded corners */}
      <img
        src="/images/yugnext-logo-rounded.png"
        alt="YUGNEXT • STEP INTO TOMORROW"
        className={`${sizeClasses} w-auto object-contain rounded-md sm:rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.02]`}
      />
    </div>
  );
}
