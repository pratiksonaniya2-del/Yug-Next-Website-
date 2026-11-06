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
  MessageCircle,
} from "lucide-react";
import { InstagramIcon, WhatsAppIcon, LinkedInIcon } from "./SocialIcons";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Take services/ build website",
    place: "Madhya Pradesh",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Take services/ build website",
        place: "Madhya Pradesh",
        message: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
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
                MANIT ROLTA Incubation Centre, Bhopal, Madhya Pradesh, India.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#EFEDFA]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center text-[#9B7BF0]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#9B7BF0] block text-[10px] uppercase font-bold">Inquiries</span>
                    <a href="mailto:yugnextofficial@gmail.com" className="font-semibold text-[#EFEDFA] hover:text-[#9B7BF0] transition-colors">
                      yugnextofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center text-[#9B7BF0]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#9B7BF0] block text-[10px] uppercase font-bold">Helpline</span>
                    <a href="tel:+919310346182" className="font-semibold text-[#EFEDFA] hover:text-[#9B7BF0] transition-colors">
                      +91 93103 46182
                    </a>
                  </div>
                </div>

                {/* Social & Direct Contact Channels */}
                <div className="pt-3 border-t border-[#2A2450]/80">
                  <span className="text-[#9B7BF0] block text-[10px] uppercase font-bold mb-2">
                    Connect Directly
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/919310346182"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on WhatsApp"
                      className="w-8 h-8 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-emerald-500/60 hover:bg-emerald-500/10 text-emerald-400 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/yugnextofficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Connect on LinkedIn"
                      className="w-8 h-8 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-blue-500/60 hover:bg-blue-500/10 text-[#0077B5] flex items-center justify-center transition-all cursor-pointer"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/yugnextofficial?vrfl=MWk3eXdjdXVmYjJkaQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow on Instagram"
                      className="w-8 h-8 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-pink-500/60 hover:bg-pink-500/10 text-pink-400 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="tel:+919310346182"
                      title="Call Us"
                      className="w-8 h-8 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-violet-500/60 hover:bg-violet-500/10 text-violet-400 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:yugnextofficial@gmail.com"
                      title="Send an Email"
                      className="w-8 h-8 rounded-lg bg-[#181534] border border-[#2A2450] hover:border-[#9B7BF0]/60 hover:bg-[#6C3CE3]/15 text-[#9B7BF0] flex items-center justify-center transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
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
                  <span className="text-[#A79FCB] text-[11px]">Incubation Centre</span>
                </div>
                <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                  <span className="font-bold text-[#EFEDFA] block">Chennai Hub</span>
                  <span className="text-[#A79FCB] text-[11px]">Coaching Website delivered</span>
                </div>
                <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                  <span className="font-bold text-[#EFEDFA] block">Delhi NCR</span>
                  <span className="text-[#A79FCB] text-[11px]">Regional office</span>
                </div>
                <div className="p-3 rounded-xl bg-[#181534] border border-[#2A2450]">
                  <span className="font-bold text-[#EFEDFA] block">Agra Hub</span>
                  <span className="text-[#A79FCB] text-[11px]">Registered Office</span>
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
                      Place *
                    </label>
                    <select
                      value={formData.place}
                      onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181534] border border-[#2A2450] text-[#EFEDFA] text-sm focus:outline-none focus:border-[#9B7BF0] transition-all"
                    >
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands (UT)</option>
                      <option value="Chandigarh">Chandigarh (UT)</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu (UT)</option>
                      <option value="Delhi">Delhi (NCT)</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir (UT)</option>
                      <option value="Ladakh">Ladakh (UT)</option>
                      <option value="Lakshadweep">Lakshadweep (UT)</option>
                      <option value="Puducherry">Puducherry (UT)</option>
                      <option value="Out of India">Out of India</option>
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
                    <option value="Take services/ build website">Take services/ build website</option>
                    <option value="Shikshasathi (School Digital Solutions)">Shikshasathi (School Digital Solutions)</option>
                    <option value="Invest in company">Invest in company</option>
                    <option value="Sponsor community">Sponsor community</option>
                    <option value="Join Us (Intern/Job)">Join Us (Intern/Job)</option>
                    <option value="General inquiry">General inquiry</option>
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

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl bg-[#6C3CE3] hover:bg-[#5b2dd4] text-white font-bold text-sm shadow-md shadow-[#6C3CE3]/25 hover:shadow-lg hover:shadow-[#6C3CE3]/35 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    loading ? "opacity-70 cursor-wait" : ""
                  }`}
                >
                  <Send className={`w-4 h-4 ${loading ? "animate-pulse" : ""}`} />
                  <span>{loading ? "Transmitting to Database..." : "Transmit Inquiry to Delivery Hub"}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
