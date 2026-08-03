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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl text-left mb-16 md:mb-20">
          <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-6">
            Bespoke systems crafted for selective brands.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            We do not use cookie-cutter templates. Every system is hand-engineered to load fast, rank high, and feel premium.
          </p>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {PROJECTS.map((project) => {
            // Check if it's the CTA callout card
            if (project.image === null) {
              return (
                <div
                  key={project.title}
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

                    <a
                      href="#contact"
                      onClick={(e) => handleCTA(e, '#contact')}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-50 text-indigo-600 text-xs font-bold uppercase rounded-full shadow-md transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      Start a Project
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <motion.div
                key={project.title}
                className="bg-[#161618] border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/20 transition-all duration-300 text-left lg:col-span-6 lg:odd:col-span-7 lg:even:col-span-5"
                whileHover="hover"
              >
                {/* Image Container with Zoom effect */}
                <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-neutral-900 relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={{
                      hover: { scale: 1.03 }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
