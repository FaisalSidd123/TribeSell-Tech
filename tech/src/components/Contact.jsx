import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', budget: '$10k - $25k', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', budget: '$10k - $25k', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-[#0F0F10] relative z-10 overflow-hidden">



      {/* Ambient glowing wash shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Soft Accent-Tinted Band Card */}
        <div className="bg-indigo-500/5 border border-white/5 rounded-3xl p-8 md:p-16 text-left relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Background Wash inside Card */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Column (Info) */}
          <div className="lg:col-span-5 flex flex-col justify-between relative z-10">
            <div>
              <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
                Let's construct <br />something <span className="text-indigo-400">great.</span>
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
                Tell us about your web, mobile, or branding specifications. Our senior engineers will review and schedule a direct strategy session.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">Direct Email</p>
                <a href="mailto:hello@tribesell.com" className="text-base font-semibold text-white hover:text-indigo-400 transition-colors">
                  hello@tribesell.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">Office Location</p>
                <p className="text-sm font-medium text-neutral-300">
                  San Francisco &bull; Berlin &bull; Remote
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Interactive Form) */}
          <div className="lg:col-span-7 relative z-10 bg-[#161618] border border-white/5 rounded-2xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">Project Received!</h3>
                <p className="text-neutral-400 text-sm max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out. A senior member of our development team will analyze your requirements and follow up within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 hover:underline"
                >
                  Submit another message <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="name" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-indigo-500 focus:bg-neutral-950 rounded-lg text-sm text-white placeholder-neutral-600 outline-hidden transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="email" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-indigo-500 focus:bg-neutral-950 rounded-lg text-sm text-white placeholder-neutral-600 outline-hidden transition-all"
                    />
                  </div>
                </div>

                {/* Project Budget Selection */}
                <div className="flex flex-col text-left">
                  <label htmlFor="budget" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-indigo-500 focus:bg-neutral-950 rounded-lg text-sm text-white outline-hidden transition-all cursor-pointer"
                  >
                    <option value="Less than $10k">Less than $10,000</option>
                    <option value="$10k - $25k">$10,000 &ndash; $25,000</option>
                    <option value="$25k - $50k">$25,000 &ndash; $50,000</option>
                    <option value="$50k+">$50,000 +</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col text-left">
                  <label htmlFor="message" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Project Guidelines & Scope *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about the features, app screens, or branding style you want to build..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-indigo-500 focus:bg-neutral-950 rounded-lg text-sm text-white placeholder-neutral-600 outline-hidden transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing details...
                    </span>
                  ) : (
                    <>
                      Submit Project Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
