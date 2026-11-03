"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { ModalType } from "@/components/ContentCardModal";

// Below-the-fold sections are dynamically code-split for ultra-fast initial paint & hydration
const WhoWeAreSection = dynamic(() => import("@/components/WhoWeAreSection"), {
  ssr: true,
});
const NationwideReachSection = dynamic(() => import("@/components/NationwideReachSection"), {
  ssr: true,
});
const InvestorsCareersSection = dynamic(() => import("@/components/InvestorsCareersSection"), {
  ssr: true,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const handleClickModal = (modal: ModalType) => {
    if (activeModal === modal) {
      setIsLocked(false);
      setActiveModal(null);
    } else {
      setActiveModal(modal);
      setIsLocked(true);
    }
  };

  const closeModal = () => {
    setIsLocked(false);
    setActiveModal(null);
  };

  return (
    <main className="min-h-screen bg-[#0A0818] text-[#EFEDFA] flex flex-col justify-between selection:bg-[#6C3CE3] selection:text-white">
      
      {/* 1. TCS-Style Header with Logo & Command Search */}
      <Navbar
        activeModal={activeModal}
        isLocked={isLocked}
        onOpenModal={(modal) => handleClickModal(modal)}
        onClickModal={handleClickModal}
        onCloseMegaMenu={closeModal}
      />

      {/* 2. Hero Section */}
      <Hero onOpenModal={(modal) => handleClickModal(modal)} />

      {/* 3. THE PROBLEM & SOLUTION SECTION with The YugNext Stepping Man Traveling in Center */}
      <ProblemSolutionSection />

      {/* 4. WHAT WE DO (WHITE BG) — Page 1 of Wireframe */}
      <WhatWeDoSection />

      {/* 6. WHO WE ARE (DARK BG) — Page 2 of Wireframe */}
      <WhoWeAreSection />

      {/* 7. NATIONWIDE REACH (Map of India: Chennai, Bhopal, Agra) — Page 2 of Wireframe */}
      <NationwideReachSection />

      {/* 8. INVESTORS & CAREERS (Side-by-Side Cards) — Page 3 of Wireframe */}
      <InvestorsCareersSection />

      {/* 9. CONTACT US — Page 3 of Wireframe */}
      <ContactSection />

      {/* 10. Enterprise Footer with 3-Layer Animated Waves */}
      <Footer onOpenModal={(modal) => handleClickModal(modal)} />

    </main>
  );
}
