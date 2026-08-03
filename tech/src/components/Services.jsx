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

export default function Services() {
  const cardVariants = {
    rest: { y: 0 },
    hover: { 
      y: -8, 
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const capVariants = {
    rest: { opacity: 0.6, y: 0 },
    hover: { opacity: 1, y: -2, transition: { duration: 0.3 } }
  };

  return (
    <section id="services" className="py-32 bg-[#0F0F10] relative z-10 overflow-hidden">


      {/* Ambient glowing wash shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-xl text-left mb-16 md:mb-20">
          <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">Our Expertise</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-6">
            Elite digital disciplines combined under one roof.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            We operate at the intersection of robust code and fine art. Here is how we help modern startups and enterprise teams build digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardVariants}
                className="bg-[#161618] border border-white/5 rounded-2xl p-8 text-left hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${service.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

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
                      <motion.li
                        key={cap}
                        variants={capVariants}
                        className="flex items-center gap-2 text-xs text-neutral-300"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{cap}</span>
                      </motion.li>
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
