import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import Industries from "@/components/Industries";
import InsightsNews from "@/components/InsightsNews";
import CareersInvestors from "@/components/CareersInvestors";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="products"></div>
      <div id="services"></div>
      <WhatWeDo />
      <div id="about"></div>
      <div id="alliances"></div>
      <div id="leadership"></div>
      <WhoWeAre />
      <Industries />
      <InsightsNews />
      <CareersInvestors />
      <ContactSection />
      <Footer />
    </main>
  );
}
