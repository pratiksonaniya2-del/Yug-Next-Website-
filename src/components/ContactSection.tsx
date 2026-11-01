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
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-purple-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT WITH YUGNEXT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Build the Next Big Thing <span className="purple-gradient-text">Together</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you are a university administrator, prospective investor, enterprise client, or ambitious student, we are eager to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Delivery Hub Cards & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8 shadow-xl shadow-purple-900/15 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                Official Head Office
              </span>
              <h3 className="text-2xl font-bold text-white">YugNext Private Limited</h3>
              <p className="text-xs text-purple-200 leading-relaxed">
                Incubation Wing & Technology Operations, Central Innovation Hub, MANIT, Bhopal, Madhya Pradesh, India.
              </p>

              <div className="space-y-3 pt-2 text-xs text-purple-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-purple-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-purple-300 block text-[10px] uppercase font-bold">Inquiries</span>
                    <span className="font-semibold text-white">contact@yugnext.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-purple-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-purple-300 block text-[10px] uppercase font-bold">Helpline</span>
                    <span className="font-semibold text-white">+91 (Delivery Network Desk)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Hub Quick Matrix */}
            <div className="rounded-3xl bg-white border border-purple-100 p-6 shadow-md space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-800">
                Regional Delivery Coordinates
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-purple-50/70">
                  <span className="font-bold text-purple-900 block">Bhopal Hub</span>
                  <span className="text-slate-500 text-[11px]">HQ & MANIT Incubation</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-50/70">
                  <span className="font-bold text-purple-900 block">Chennai Hub</span>
                  <span className="text-slate-500 text-[11px]">Deep Tech & OWASP Lab</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-50/70">
                  <span className="font-bold text-purple-900 block">Delhi NCR</span>
                  <span className="text-slate-500 text-[11px]">Strategic Alliances</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-50/70">
                  <span className="font-bold text-purple-900 block">Agra Hub</span>
                  <span className="text-slate-500 text-[11px]">Pathfinder Innovation</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-purple-100 p-8 sm:p-10 shadow-xl shadow-purple-900/5">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Inquiry Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to YugNext. A member of our executive team from the nearest delivery hub will connect with you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-bold hover:bg-purple-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aditi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Preferred Delivery Hub
                    </label>
                    <select
                      value={formData.hub}
                      onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                    >
                      <option value="Bhopal (HQ)">Bhopal (HQ & Incubation)</option>
                      <option value="Chennai">Chennai (Deep Tech & Security)</option>
                      <option value="Delhi NCR">Delhi NCR (Alliances & Corporate)</option>
                      <option value="Agra">Agra (Innovation & Mentorship)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Area of Interest *
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                  >
                    <option value="Shikshasetu (EdTech)">Shikshasetu (Higher Education Platform)</option>
                    <option value="CampusNeeds">CampusNeeds (Student Campus Marketplace)</option>
                    <option value="Settler">Settler (Relocation & Accommodations)</option>
                    <option value="NexonAcademy">NexonAcademy (Upskilling Cohorts)</option>
                    <option value="Pravah">Pravah (Enterprise Digital Engineering)</option>
                    <option value="OWASP">OWASP (Cybersecurity & Audit)</option>
                    <option value="Investor Relations">Investor Relations & Incubation</option>
                    <option value="Careers / Internships">Careers / Student Hiring</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Your Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your campus, project, or partnership goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
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
