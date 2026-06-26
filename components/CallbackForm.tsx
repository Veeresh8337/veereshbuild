"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    status: "saas",
    course: "medium", // Mapping status -> projectType, course -> budget
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", status: "saas", course: "medium" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Information Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary">Let's Collaborate</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-machina tracking-tight text-white leading-tight">
              Ready To Ship Your <span className="text-primary">MVP?</span>
            </h2>
            <p className="text-grey-400 font-manrope text-base md:text-lg leading-relaxed max-w-md">
              Let's build a high-performance web app, mobile app, or AI customer service agent together. Fill in your project scoping details for a strategy call.
            </p>

            {/* Direct Contacts List */}
            <div className="flex flex-col gap-4.5 mt-4 text-sm text-grey-300">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-grey-500 font-bold uppercase tracking-wider">Direct WhatsApp</p>
                  <p className="font-semibold text-white">+91 91091 58249</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-grey-500 font-bold uppercase tracking-wider">Email Inquiry</p>
                  <p className="font-semibold text-white">hello@veeresh.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-grey-500 font-bold uppercase tracking-wider">Based In</p>
                  <p className="font-semibold text-white text-xs md:text-sm">
                    Belagavi / Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Column */}
          <div className="lg:col-span-6">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-grey-900 to-black border border-white/5 hover:border-primary/10 transition-all duration-300 shadow-xl shadow-black">
              {submitted ? (
                /* Success Message State */
                <div className="flex flex-col items-center justify-center text-center py-8 gap-4 animate-[fade-in_0.5s_ease-out]">
                  <CheckCircle2 className="w-16 h-16 text-green-400 animate-bounce" />
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Request Received!</h3>
                  <p className="text-sm text-grey-400 max-w-xs font-manrope">
                    Thanks for reaching out! I will review your requirements and reach out to you on WhatsApp within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-lg font-bold text-white font-manrope mb-2 border-b border-white/5 pb-3">
                    Inquire About A Project Build
                  </h3>

                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-xs font-medium">
                      {error}
                    </div>
                  )}

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-wider text-grey-400">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Founder Name"
                      className="px-4 py-3 rounded-xl bg-grey-900 border border-white/10 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-wider text-grey-400">
                      Phone Number (WhatsApp Preferred)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      maxLength={10}
                      className="px-4 py-3 rounded-xl bg-grey-900 border border-white/10 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  {/* Double Row for Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="status" className="text-[10px] uppercase font-bold tracking-wider text-grey-400">
                        Project Type
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl bg-grey-900 border border-white/10 text-white text-sm focus:border-primary focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="saas">SaaS / Web App</option>
                        <option value="mobile">React Native Mobile App</option>
                        <option value="ai">AI / LLM Integration</option>
                        <option value="other">Full-stack Consult</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="course" className="text-[10px] uppercase font-bold tracking-wider text-grey-400">
                        Budget Range
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl bg-grey-900 border border-white/10 text-white text-sm focus:border-primary focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="low">Under ₹1,00,000</option>
                        <option value="medium">₹1,00,000 - ₹3,00,000</option>
                        <option value="high">₹3,00,000 - ₹5,00,000</option>
                        <option value="enterprise">₹5,00,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white text-sm font-bold rounded-xl transition-all duration-300 transform active:scale-[0.98] cursor-pointer shadow-lg shadow-primary/20"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Book Strategy Call</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
