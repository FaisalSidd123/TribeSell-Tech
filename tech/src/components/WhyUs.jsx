import React from 'react';
import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Expert Craftsmanship Only',
    description: 'We code every system by hand without cheap drag-and-drop templates. You get robust React components, streamlined styling, and unique design layouts tailored to your user persona.'
  },
  {
    num: '02',
    title: 'Engineered Performance',
    description: 'A slow page is a dead page. We optimize assets, design clean DOM hierarchies, and deliver high Lighthouse and Core Web Vitals scores to maximize your SEO search equity.'
  },
  {
    num: '03',
    title: 'Organic Micro-Animations',
    description: 'We integrate Framer Motion and GSAP ScrollTrigger to build smooth scroll effects, hover states, and staggered entrance sequences that feel professional and alive.'
  },
  {
    num: '04',
    title: 'Direct Senior Access',
    description: 'No junior project handlers or administrative middlemen. You collaborate directly with senior architects and designers to ensure requirements are translated correctly.'
  }
];

// Shared animation constants
const ease = [0.16, 1, 0.3, 1];
const viewport = { once: true, amount: 0.2 };

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#FAFAF9] relative z-10 border-t border-[#0F0F0F]/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column - Principles (Numbered List) */}
          <div className="lg:col-span-7 text-left">
            {/* Eyebrow pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/8 border border-indigo-500/10 rounded-full mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.15em] text-indigo-700 uppercase">Why TribeSell</span>
            </motion.div>

            {/* Split-weight headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-[1.15] mb-12 max-w-lg"
            >
              <span className="text-[#0F0F0F]">We design and build </span>
              <span className="text-neutral-400">with rigorous standards.</span>
            </motion.h2>

            <div className="space-y-0">
              {PRINCIPLES.map((principle, idx) => (
                <motion.div
                  key={principle.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.7, ease, delay: 0.2 + idx * 0.12 }}
                  className="flex gap-6 md:gap-10 border-b border-[#0F0F0F]/5 py-10 first:pt-0 last:border-b-0 last:pb-0"
                >
                  {/* Big Number — scale entrance */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease, delay: 0.3 + idx * 0.12 }}
                    className="text-2xl font-display font-bold text-indigo-600/80 shrink-0"
                  >
                    {principle.num}
                  </motion.span>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-display font-semibold text-[#0F0F0F] mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-xl">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Studio Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center lg:sticky lg:top-32"
          >
            {/* Soft decorative background shape */}
            <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl -rotate-2 scale-102 blur-sm pointer-events-none" />

            <div className="relative overflow-hidden rounded-2xl border border-[#0F0F0F]/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] aspect-[4/5] w-full max-w-[380px]">
              <img
                src="/why_us.png"
                alt="TribeSell creative agency studio space"
                className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
