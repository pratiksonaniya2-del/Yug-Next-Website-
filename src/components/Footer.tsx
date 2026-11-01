"use client";

import React from "react";
import {
  ArrowUp,
  MapPin,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Brand Statement & Delivery Coordinates */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 border-b border-slate-800 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-extrabold text-lg">
                Y
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Yug<span className="text-purple-400">Next</span>
              </span>
              <span className="text-[10px] font-bold bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800 uppercase">
                Pvt. Ltd.
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pioneering high-impact software, campus platforms, and security ecosystems. Home to Shikshasetu, CampusNeeds, Settler, NexonAcademy, and backed by MANIT innovation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <span className="text-purple-400 font-bold block">Incorporation</span>
              <span className="text-slate-300">Oct 21, 2026 (Pvt Ltd)</span>
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <span className="text-purple-400 font-bold block">Incubation Funding</span>
              <span className="text-slate-300">₹50K Grant (MANIT)</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-purple-700 hover:bg-purple-600 text-white transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-Column Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Col 1: What We Do */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-purple-400">
              What We Do?
            </h4>
            <ul className="space-y-2">
              <li className="font-semibold text-slate-400">Proprietary Products:</li>
              <li><a href="#products" className="hover:text-purple-400 transition-colors">Shikshasetu (EdTech)</a></li>
              <li><a href="#products" className="hover:text-purple-400 transition-colors">CampusNeeds (Marketplace)</a></li>
              <li><a href="#products" className="hover:text-purple-400 transition-colors">Settler (Relocation)</a></li>
              
              <li className="font-semibold text-slate-400 pt-2">Specialized Services:</li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">NexonAcademy</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Pravah Engineering</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">OWASP Security</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Pathfinder School</a></li>
            </ul>
          </div>

          {/* Col 2: Who We Are */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-purple-400">
              Who We Are?
            </h4>
            <ul className="space-y-2">
              <li><a href="#who-we-are" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#who-we-are" className="hover:text-purple-400 transition-colors">Leadership & Governance</a></li>
              
              <li className="font-semibold text-slate-400 pt-2">Community:</li>
              <li><a href="#who-we-are" className="hover:text-purple-400 transition-colors">Ekjut Youth Movement</a></li>
              <li><a href="#who-we-are" className="hover:text-purple-400 transition-colors">MANIT Student Network</a></li>

              <li className="font-semibold text-slate-400 pt-2">Alliances:</li>
              <li><a href="#alliances" className="hover:text-purple-400 transition-colors">ROLTA Alliance</a></li>
              <li><a href="#alliances" className="hover:text-purple-400 transition-colors">MANIT Incubation</a></li>
              <li><a href="#alliances" className="hover:text-purple-400 transition-colors">Gov. of India Programs</a></li>
            </ul>
          </div>

          {/* Col 3: Delivery Network */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-purple-400">
              Delivery Network
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Bhopal Hub</span>
                  <p className="text-[10px] text-slate-500">Central HQ & Incubation</p>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Chennai Hub</span>
                  <p className="text-[10px] text-slate-500">Deep Tech & OWASP Wing</p>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Delhi NCR</span>
                  <p className="text-[10px] text-slate-500">Corporate & Govt Alliances</p>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Agra Hub</span>
                  <p className="text-[10px] text-slate-500">Regional Innovation Lab</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-purple-400">
              Industries
            </h4>
            <ul className="space-y-2">
              <li><a href="#industries" className="hover:text-purple-400 transition-colors">Education & Campuses</a></li>
              <li><a href="#industries" className="hover:text-purple-400 transition-colors">Finance & Automated Ledgers</a></li>
              <li><a href="#industries" className="hover:text-purple-400 transition-colors">Logistics & Transit Relocation</a></li>
              <li><a href="#industries" className="hover:text-purple-400 transition-colors">Health & Campus EHR</a></li>
            </ul>

            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-purple-400 pt-4">
              Insights & News
            </h4>
            <ul className="space-y-2">
              <li><a href="#insights" className="hover:text-purple-400 transition-colors">Oct 2026: Pvt Ltd Incorporation</a></li>
              <li><a href="#insights" className="hover:text-purple-400 transition-colors">May 2026: ₹50K Incubation</a></li>
              <li><a href="#insights" className="hover:text-purple-400 transition-colors">Upcoming Events (Coming Soon)</a></li>
              <li><a href="#insights" className="hover:text-purple-400 transition-colors">Customer Stories & Awards</a></li>
            </ul>
          </div>

          {/* Col 5: Corporate & Careers */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-purple-400">
              Investors & Talent
            </h4>
            <ul className="space-y-2">
              <li><a href="#investors" className="hover:text-purple-400 transition-colors">Investor Relations</a></li>
              <li><a href="#investors" className="hover:text-purple-400 transition-colors">Cap Table & MCA Compliance</a></li>
              <li><a href="#careers" className="hover:text-purple-400 transition-colors">Careers & Open Roles</a></li>
              <li><a href="#careers" className="hover:text-purple-400 transition-colors">Student Fellowship Program</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Direct Contact Desk</a></li>
            </ul>

            <div className="pt-3">
              <span className="text-[10px] text-slate-500 uppercase font-mono block mb-1">
                Security Standard:
              </span>
              <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OWASP Verified Defense</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row md:items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 YugNext Private Limited. All rights reserved. Recognized Startup & MANIT Incubated Company.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-400 transition-colors">Security & OWASP Protocols</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-400 transition-colors">MCA Disclosures</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
