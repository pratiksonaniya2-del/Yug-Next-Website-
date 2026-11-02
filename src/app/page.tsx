"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import NationwideReachSection from "@/components/NationwideReachSection";
import InvestorsCareersSection from "@/components/InvestorsCareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ModalType } from "@/components/ContentCardModal";

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
    <main className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#5d35e0] selection:text-white">
      
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

      {/* 7. NATIONWIDE REACH (Map of India: Chennai, Bhopal, Pune) — Page 2 of Wireframe */}
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
