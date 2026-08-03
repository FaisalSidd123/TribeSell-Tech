import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

export default function Hero({ start = false }) {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollTrigger parallax scrub
    const ctx = gsap.context(() => {
      // Parallax for right column mockup visual
      gsap.to(rightColRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // Fade and slight pull down for left column text on scroll
      gsap.to(leftColRef.current, {
        opacity: 0.25,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCTA = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Easing curve
  const easeCurve = [0.16, 1, 0.3, 1];

  // Framer Motion Variants for Staggered Entrance Sync
  const eyebrowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeCurve, delay: 0.1 } }
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve, delay: 0.2 } }
  };

  const subheadlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve, delay: 0.35 } }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve, delay: 0.5 } }
  };

  const trustVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: easeCurve, delay: 0.7 } }
  };

  const mockupVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: easeCurve, delay: 0.3 } }
  };

  const chip1Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: [0, -6, 0],
      transition: { 
        opacity: { duration: 0.5, delay: 0.9 },
        scale: { duration: 0.5, delay: 0.9 },
        y: {
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut',
          delay: 0.9
        }
      }
    }
  };

  const chip2Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: [0, 8, 0],
      transition: { 
        opacity: { duration: 0.5, delay: 1.1 },
        scale: { duration: 0.5, delay: 1.1 },
        y: {
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut',
          delay: 1.1
        }
      }
    }
  };

  const chip3Variants = {
    hidden: { opacity: 0, scale: 0.8, y: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: [0, -8, 0],
      transition: { 
        opacity: { duration: 0.5, delay: 1.3 },
        scale: { duration: 0.5, delay: 1.3 },
        y: {
          repeat: Infinity,
          duration: 4.5,
          ease: 'easeInOut',
          delay: 1.3
        }
      }
    }
  };

  const animState = start ? 'visible' : 'hidden';

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center bg-[#FAFAF9]"
    >
      {/* Background soft color-wash blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Tech touch: Subtle dot-grid */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[radial-gradient(#E6E6E3_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none z-0 [mask-image:linear-gradient(to_left,white,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column (55%) */}
        <div ref={leftColRef} className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow badge */}
          <motion.div
            variants={eyebrowVariants}
            initial="hidden"
            animate={animState}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/8 border border-indigo-500/10 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-wider text-indigo-700 uppercase">
              Web &bull; Mobile &bull; Design
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={headlineVariants}
            initial="hidden"
            animate={animState}
            className="text-[#0F0F0F] font-display font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}
          >
            We Build Premium <br />
            <span className="text-indigo-600">Digital Experiences.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={subheadlineVariants}
            initial="hidden"
            animate={animState}
            className="text-neutral-500 text-lg md:text-xl font-normal leading-relaxed max-w-[500px] mb-8"
          >
            TribeSell is an elite design and development agency. We craft high-performance websites, bespoke mobile apps, and premium brand identities.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate={animState}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              onClick={(e) => handleCTA(e, '#contact')}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/25 transition-all duration-300"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            
            <motion.a
              href="#portfolio"
              onClick={(e) => handleCTA(e, '#portfolio')}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#FAFAF9] border border-[#0F0F0F]/10 hover:border-[#0F0F0F]/20 text-[#0F0F0F] font-medium rounded-full hover:bg-neutral-50 transition-all duration-300"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            variants={trustVariants}
            initial="hidden"
            animate={animState}
            className="flex items-center gap-6 py-2 border-t border-[#0F0F0F]/5 w-full max-w-[480px]"
          >
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display text-[#0F0F0F]">50+</span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Projects Done</span>
            </div>
            <div className="h-8 w-px bg-[#0F0F0F]/5"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display text-[#0F0F0F]">3</span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Disciplines</span>
            </div>
            <div className="h-8 w-px bg-[#0F0F0F]/5"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display text-[#0F0F0F]">100%</span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">In-House Quality</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column (45%) */}
        <div ref={rightColRef} className="lg:col-span-5 relative flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
          {/* Main Visual Composition */}
          <motion.div
            variants={mockupVariants}
            initial="hidden"
            animate={animState}
            className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl bg-white border border-[#0F0F0F]/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            <img
              src="/hero_dashboard.png"
              alt="TribeSell premium dashboard"
              className="w-full h-full object-cover object-top select-none"
              draggable="false"
            />
          </motion.div>

          {/* Floating UI Chip 1: Design Check */}
          <motion.div
            variants={chip1Variants}
            initial="hidden"
            animate={animState}
            className="absolute -top-6 left-4 md:-left-8 bg-white border border-[#0F0F0F]/5 rounded-xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center gap-2.5 z-20 pointer-events-none select-none"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F0F0F]">Design Verified</p>
              <p className="text-[10px] text-neutral-400">Pixel Perfect Quality</p>
            </div>
          </motion.div>

          {/* Floating UI Chip 2: Client Satisfaction */}
          <motion.div
            variants={chip2Variants}
            initial="hidden"
            animate={animState}
            className="absolute -bottom-6 right-4 md:-right-4 bg-white border border-[#0F0F0F]/5 rounded-xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center gap-2.5 z-20 pointer-events-none select-none"
          >
            <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F0F0F]">98% Satisfaction</p>
              <p className="text-[10px] text-neutral-400">Based on client reviews</p>
            </div>
          </motion.div>

          {/* Floating UI Chip 3: Security */}
          <motion.div
            variants={chip3Variants}
            initial="hidden"
            animate={animState}
            className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white border border-[#0F0F0F]/5 rounded-xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center gap-2.5 z-20 pointer-events-none select-none hidden md:flex"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F0F0F]">100% Secure Code</p>
              <p className="text-[10px] text-neutral-400">Industry standards</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
