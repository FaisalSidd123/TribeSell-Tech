import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Palette, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'High-performance, SEO-optimized, pixel-perfect web systems built with modern frameworks to drive your business forward.',
    capabilities: [
      'Next.js & React Architectures',
      'Headless Commerce Systems',
      'API & Backend Integrations',
      'Core Web Vitals Optimization',
    ],
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-[0_0_20px_rgba(79,70,229,0.15)]',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Bespoke native and hybrid mobile applications for iOS & Android with buttery-smooth interactions and offline-first capabilities.',
    capabilities: [
      'React Native & Flutter Apps',
      'Dynamic Sync & Push Systems',
      'Apple/Google Store Deployments',
      'Wearable & Device Integrations',
    ],
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-[0_0_20px_rgba(79,70,229,0.15)]',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Sleek editorial identities, design system guidelines, and user experience layouts that build confidence and elevate brands.',
    capabilities: [
      'UI/UX Design Systems',
      'Brand Identity & Guidelines',
      'Premium Pitch Deck Design',
      'Custom Mockups & Graphics',
    ],
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-[0_0_20px_rgba(79,70,229,0.15)]',
  },
];

// Shared animation constants
const ease = [0.16, 1, 0.3, 1];
const viewport = { once: true, amount: 0.2 };

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#0F0F10] relative z-10 overflow-hidden">

      {/* Ambient glowing wash shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Ghost number background */}
      <div className="absolute top-12 left-6 md:left-16 text-[180px] md:text-[240px] font-display font-bold text-white/[0.02] leading-none select-none pointer-events-none z-0">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header — Desktop: left heading + right stat */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
          {/* Left: Heading block */}
          <div className="max-w-xl text-left">
            {/* Eyebrow pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/15 rounded-full mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.15em] text-indigo-400 uppercase">Our Expertise</span>
            </motion.div>

            {/* Split-weight headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-[1.15] mb-6 max-w-xl"
            >
              <span className="text-white">Elite digital disciplines </span>
              <span className="text-neutral-500">combined under one roof.</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="text-neutral-400 text-base leading-relaxed max-w-[520px]"
            >
              We operate at the intersection of robust code and fine art. Here is how we help modern startups and enterprise teams build digital products.
            </motion.p>
          </div>

          {/* Right: Stat card counterpart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="flex items-center gap-6 lg:gap-8 shrink-0"
          >
            <div className="flex flex-col items-center text-center px-5 py-4 bg-white/[0.03] border border-white/5 rounded-xl">
              <span className="text-2xl font-display font-bold text-indigo-400">3</span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mt-1">Core<br/>Disciplines</span>
            </div>
            <div className="flex flex-col items-center text-center px-5 py-4 bg-white/[0.03] border border-white/5 rounded-xl">
              <span className="text-2xl font-display font-bold text-indigo-400">50+</span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mt-1">Projects<br/>Delivered</span>
            </div>
            <div className="flex flex-col items-center text-center px-5 py-4 bg-white/[0.03] border border-white/5 rounded-xl">
              <span className="text-2xl font-display font-bold text-indigo-400">100%</span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mt-1">In-House<br/>Quality</span>
            </div>
          </motion.div>
        </div>

        {/* Services Grid — staggered slide-up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease } }}
                className="bg-[#161618] border border-white/5 rounded-2xl p-8 text-left hover:border-indigo-500/20 hover:shadow-[0_20px_50px_rgba(79,70,229,0.06)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Badge — scale + rotate entrance */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, ease, delay: 0.3 + idx * 0.12 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${service.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities List */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <p className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-4">Capabilities</p>
                  <ul className="space-y-3">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2 text-xs text-neutral-300 group-hover:text-neutral-200 transition-colors duration-200"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
