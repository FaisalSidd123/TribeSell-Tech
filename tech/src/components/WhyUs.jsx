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

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#FAFAF9] relative z-10 border-t border-[#0F0F0F]/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column - Principles (Numbered List) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">Why TribeSell</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0F0F0F] mb-12 max-w-lg">
              We design and build with rigorous standards.
            </h2>

            <div className="space-y-12">
              {PRINCIPLES.map((principle) => (
                <div key={principle.num} className="flex gap-6 md:gap-10 border-b border-[#0F0F0F]/5 pb-10 last:border-b-0 last:pb-0">
                  {/* Big Number */}
                  <span className="text-2xl font-display font-bold text-indigo-600 shrink-0">
                    {principle.num}
                  </span>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-display font-semibold text-[#0F0F0F] mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-xl">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Studio Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
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
          </div>
        </div>

      </div>
    </section>
  );
}
