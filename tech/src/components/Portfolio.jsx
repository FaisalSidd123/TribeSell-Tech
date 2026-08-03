import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'AeroStock E-Commerce platform',
    category: 'Web Development',
    tags: ['Next.js', 'PostgreSQL', 'Stripe API'],
    image: '/portfolio_web.png',
    gridClass: 'lg:col-span-7',
  },
  {
    title: 'Velo Wealth Management App',
    category: 'Mobile Development',
    tags: ['React Native', 'Node.js', 'Biometrics'],
    image: '/portfolio_mobile.png',
    gridClass: 'lg:col-span-5',
  },
  {
    title: 'Solstice Brand Architecture',
    category: 'Graphic Design',
    tags: ['Branding', 'Typography', 'Logo Systems'],
    image: '/portfolio_design.png',
    gridClass: 'lg:col-span-5',
  },
  {
    title: 'Looking for a custom build?',
    category: 'Collaborate',
    tags: ['Web', 'Mobile', 'Design'],
    image: null,
    gridClass: 'lg:col-span-7 bg-indigo-600 text-white flex flex-col justify-between p-10 min-h-[300px]',
  },
];

// Shared animation constants
const ease = [0.16, 1, 0.3, 1];
const viewport = { once: true, amount: 0.2 };

export default function Portfolio() {
  const handleCTA = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-[#0F0F10] relative z-10 overflow-hidden">

      {/* Ambient glowing wash shape */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Ghost number background */}
      <div className="absolute top-12 right-6 md:right-16 text-[180px] md:text-[240px] font-display font-bold text-white/[0.02] leading-none select-none pointer-events-none z-0">
        02
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
              <span className="text-[10px] font-bold tracking-[0.15em] text-indigo-400 uppercase">Our Work</span>
            </motion.div>

            {/* Split-weight headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-[1.15] mb-6 max-w-xl"
            >
              <span className="text-white">Bespoke systems </span>
              <span className="text-neutral-500">crafted for selective brands.</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="text-neutral-400 text-base leading-relaxed max-w-[520px]"
            >
              We do not use cookie-cutter templates. Every system is hand-engineered to load fast, rank high, and feel premium.
            </motion.p>
          </div>

          {/* Right: Project count stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="flex items-center gap-6 shrink-0"
          >
            <div className="flex flex-col items-center text-center px-5 py-4 bg-white/[0.03] border border-white/5 rounded-xl">
              <span className="text-2xl font-display font-bold text-indigo-400">15+</span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mt-1">Featured<br/>Projects</span>
            </div>
            <div className="flex flex-col items-center text-center px-5 py-4 bg-white/[0.03] border border-white/5 rounded-xl">
              <span className="text-2xl font-display font-bold text-indigo-400">98%</span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mt-1">Client<br/>Satisfaction</span>
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Portfolio Grid — alternating slide directions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {PROJECTS.map((project, idx) => {
            // Alternating slide direction: odd from left, even from right
            const slideX = idx % 2 === 0 ? -60 : 60;

            // Check if it's the CTA callout card
            if (project.image === null) {
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: slideX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.8, ease, delay: idx * 0.1 }}
                  className={`rounded-2xl border border-indigo-700/10 ${project.gridClass}`}
                >
                  <div className="h-full flex flex-col justify-between items-start text-left">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight mt-4 mb-6 max-w-sm">
                        {project.title}
                      </h3>
                      <p className="opacity-80 text-sm max-w-md mb-8">
                        Let's map out your specifications, develop a tailored prototype, and build a high-performance system for your business.
                      </p>
                    </div>

                    <motion.a
                      href="#contact"
                      onClick={(e) => handleCTA(e, '#contact')}
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-50 text-indigo-600 text-xs font-bold uppercase rounded-full shadow-md transition-all duration-300"
                    >
                      Start a Project
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: slideX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease } }}
                className="bg-[#161618] border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/20 hover:shadow-[0_20px_50px_rgba(79,70,229,0.06)] transition-all duration-300 text-left lg:col-span-6 lg:odd:col-span-7 lg:even:col-span-5"
              >
                {/* Image Container with Zoom effect */}
                <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-neutral-900 relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease }}
                    className="w-full h-full object-cover object-center select-none opacity-90"
                    draggable="false"
                  />
                  <div className="absolute top-4 left-4 bg-[#161618]/95 backdrop-blur-sm border border-white/5 px-3 py-1 rounded-full text-[10px] font-bold text-neutral-300 uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
