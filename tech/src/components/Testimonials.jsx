import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "TribeSell developed our mobile app in record time. The user experience is incredibly fluid, and our clients frequently comment on the buttery-smooth scrolling and secure authentication. The level of detail is unmatched.",
    author: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "Velo Finance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Working with TribeSell was a major catalyst for our web sales. They optimized our performance scores, built a premium e-commerce dashboard, and improved our user conversion rate by 32% within months of launch.",
    author: "Michael Chen",
    role: "Founder & CEO",
    company: "AeroStock Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The design guidelines and UI system developed by TribeSell are phenomenal. They truly understand clean typography, deliberate color, and whitespace. Our in-house engineers find the React components exceptionally clean.",
    author: "Alena Rostova",
    role: "Brand Director",
    company: "Solstice Space",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

// Shared animation constants
const ease = [0.16, 1, 0.3, 1];
const viewport = { once: true, amount: 0.2 };

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      filter: 'blur(6px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      filter: 'blur(6px)'
    })
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAFAF9] relative z-10 border-t border-[#0F0F0F]/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-xl text-left">
            {/* Eyebrow pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/8 border border-indigo-500/10 rounded-full mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.15em] text-indigo-700 uppercase">Client Feedback</span>
            </motion.div>

            {/* Split-weight headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-[1.15] max-w-xl"
            >
              <span className="text-[#0F0F0F]">What builders and brands say </span>
              <span className="text-neutral-400">about our deliveries.</span>
            </motion.h2>
          </div>

          {/* Right: Navigation arrows (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="hidden lg:flex items-center gap-3"
          >
            <motion.button
              onClick={handlePrev}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-[#0F0F0F]/10 hover:border-indigo-600 hover:text-indigo-600 flex items-center justify-center bg-white text-[#0F0F0F]/80 shadow-xs hover:shadow-md transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-[#0F0F0F]/10 hover:border-indigo-600 hover:text-indigo-600 flex items-center justify-center bg-white text-[#0F0F0F]/80 shadow-xs hover:shadow-md transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Testimonial Box — blur-to-focus transition */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={viewport}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="relative max-w-4xl"
        >
          {/* Main Card */}
          <div className="bg-white border border-[#0F0F0F]/5 rounded-3xl p-8 md:p-16 text-left shadow-[0_15px_40px_rgba(0,0,0,0.015)] relative overflow-hidden min-h-[380px] md:min-h-[320px] flex flex-col justify-between">
            {/* Top decorative quote icon */}
            <div className="absolute top-6 right-8 text-neutral-100 select-none pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1.5]" />
            </div>

            <div className="relative z-10 flex-grow">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col h-full justify-between"
                >
                  {/* Quote content */}
                  <p className="text-[#0F0F0F] font-display text-lg md:text-2xl font-medium leading-relaxed mb-8 max-w-2xl">
                    &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={TESTIMONIALS[activeIndex].avatar}
                      alt={TESTIMONIALS[activeIndex].author}
                      className="w-12 h-12 rounded-full object-cover border border-[#0F0F0F]/5"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#0F0F0F]">{TESTIMONIALS[activeIndex].author}</p>
                      <p className="text-xs text-neutral-400">
                        {TESTIMONIALS[activeIndex].role} &bull; <span className="text-indigo-600">{TESTIMONIALS[activeIndex].company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Carousel Arrows */}
          <div className="flex items-center justify-end gap-3 mt-8 lg:hidden">
            <motion.button
              onClick={handlePrev}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-[#0F0F0F]/10 hover:border-indigo-600 hover:text-indigo-600 flex items-center justify-center bg-white text-[#0F0F0F]/80 shadow-xs hover:shadow-md transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-[#0F0F0F]/10 hover:border-indigo-600 hover:text-indigo-600 flex items-center justify-center bg-white text-[#0F0F0F]/80 shadow-xs hover:shadow-md transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-8 bg-indigo-600' : 'w-1.5 bg-[#0F0F0F]/10 hover:bg-[#0F0F0F]/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
