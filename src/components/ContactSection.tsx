"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Building,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Shikshasetu (EdTech)",
    hub: "Bhopal (HQ)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0A0818] text-[#EFEDFA] relative border-t border-[#2A2450]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#6C3CE3]/20 text-[#9B7BF0] border border-[#6C3CE3]/30">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT WITH YUGNEXT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EFEDFA] tracking-tight">
            Let&apos;s Build the Next Big Thing <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B7BF0] to-[#6C3CE3]">Together</span>
          </h2>
          <p className="text-[#A79FCB] text-base sm:text-lg font-light">
            Whether you are an institution administrator, prospective investor, enterprise client, or ambitious student, we are eager to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Delivery Hub Cards & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-[#12102A] border border-[#2A2450] text-[#EFEDFA] p-8 shadow-xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9B7BF0]">
                Official Head Office
              </span>
              <h3 className="text-2xl font-bold text-[#EFEDFA]">YugNext Private Limited</h3>
              <p className="text-xs text-[#A79FCB] leading-relaxed font-light">
                Incubation Wing & Technology Operations, Central Innovation Hub, MANIT, Bhopal, Madhya Pradesh, India.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#EFEDFA]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center text-[#9B7BF0]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#9B7BF0] block text-[10px] uppercase font-bold">Inquiries</span>
                    <span className="font-semibold text-[#EFEDFA]">yugnextofficial@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center text-[#9B7BF0]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#9B7BF0] block text-[10px] uppercase font-bold">Helpline</span>
                    <span className="font-semibold text-[#EFEDFA]">+91 93103 46182</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Hub Quick Matrix */}
            <div className="rounded-3xl bg-[#12102A] border border-[#2A2450] p-6 shadow-md space-y-3 text-[#EFEDFA]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9B7BF0]">
                Regional Delivery Coordinates
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                  <span className="font-bold text-[#EFEDFA] block">Bhopal Hub</span>
                  <span className="text-[#A79FCB] text-[11px]">HQ & MANIT Incubation</span>
                </div>
                <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                  <span className="font-bold text-[#EFEDFA] block">Chennai Hub</span>
                  <span className="text-[#A79FCB] text-[11px]">Deep Tech & Cloud Lab</span>
                </div>
                <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                  <span className="font-bold text-[#EFEDFA] block">Delhi NCR</span>
                  <span className="text-[#A79FCB] text-[11px]">Strategic Alliances</span>
                </div>
                <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                  <span className="font-bold text-[#EFEDFA] block">Agra Hub</span>
                  <span className="text-[#A79FCB] text-[11px]">Enterprise Delivery</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#12102A] rounded-3xl border border-[#2A2450] p-8 sm:p-10 shadow-xl text-[#EFEDFA]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#EFEDFA]">Inquiry Received!</h3>
                <p className="text-sm text-[#A79FCB] max-w-md mx-auto font-light">
                  Thank you for reaching out to YugNext. A member of our executive team from the nearest delivery hub will connect with you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#6C3CE3] text-white text-xs font-bold hover:bg-[#5b2dd4] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A79FCB] block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181534] border border-[#2A2450] text-[#EFEDFA] placeholder-[#A79FCB]/50 text-sm focus:outline-none focus:border-[#9B7BF0] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A79FCB] block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aditi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181534] border border-[#2A2450] text-[#EFEDFA] placeholder-[#A79FCB]/50 text-sm focus:outline-none focus:border-[#9B7BF0] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A79FCB] block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181534] border border-[#2A2450] text-[#EFEDFA] placeholder-[#A79FCB]/50 text-sm focus:outline-none focus:border-[#9B7BF0] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A79FCB] block mb-1.5">
                      Preferred Delivery Hub
                    </label>
                    <select
                      value={formData.hub}
                      onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181534] border border-[#2A2450] text-[#EFEDFA] text-sm focus:outline-none focus:border-[#9B7BF0] transition-all"
                    >
                      <option value="Bhopal (HQ)">Bhopal (HQ & Incubation)</option>
                      <option value="Chennai">Chennai (Deep Tech & Security)</option>
                      <option value="Delhi NCR">Delhi NCR (Alliances & Corporate)</option>
                      <option value="Agra">Agra (Innovation & Enterprise Delivery)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#A79FCB] block mb-1.5">
                    Area of Interest *
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181534] border border-[#2A2450] text-[#EFEDFA] text-sm focus:outline-none focus:border-[#9B7BF0] transition-all"
                  >
                    <option value="Web Solutions">Business & Institutional Websites</option>
                    <option value="Shikshasathi (EdTech)">ShikshaSathi (Higher Education Platform)</option>
                    <option value="CampusNeeds">CampusNeeds (Student Campus Marketplace)</option>
                    <option value="Settler">Settler (Relocation & Accommodations)</option>
                    <option value="NexanAcademy">NexanAcademy (Upskilling Cohorts)</option>
                    <option value="Investor Relations">Investor Relations & Incubation</option>
                    <option value="Careers / Internships">Careers / Student Hiring</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#A79FCB] block mb-1.5">
                    Your Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your campus, project, or partnership goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181534] border border-[#2A2450] text-[#EFEDFA] placeholder-[#A79FCB]/50 text-sm focus:outline-none focus:border-[#9B7BF0] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-bold text-sm shadow-md shadow-[#6C3CE3]/25 hover:shadow-lg hover:shadow-[#6C3CE3]/35 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Delivery Hub</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
