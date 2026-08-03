import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Design System',
    description: 'We align on your product strategy, compile design components, and outline the technical blueprint.',
    detail: 'Before writing code, we design interactive high-fidelity mockups using a custom styling token library tailored to your brand.'
  },
  {
    num: '02',
    title: 'Pixel-Perfect Prototyping',
    description: 'We transform creative layouts into clean responsive frontend components with rich micro-animations.',
    detail: 'We build interactive states and clean transitions early on so you can feel the final application feel and usability.'
  },
  {
    num: '03',
    title: 'Robust Architecture',
    description: 'We code custom web platforms and mobile apps using lightweight, future-proof frameworks.',
    detail: 'We develop clean, modular architectures using React/Vite/NextJS. Security and core performance are baked in.'
  },
  {
    num: '04',
    title: 'Launch & Performance Tuning',
    description: 'We optimize Core Web Vitals, set up continuous delivery pipelines, and launch smoothly.',
    detail: 'Our custom QA checklists cover SEO tags, security configuration, speed optimization, and responsive design audits.'
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const container = containerRef.current;

      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      // Calculate how far to translate the track to show all elements
      const travelDistance = -(trackWidth - viewportWidth + 96);

      // Pin the section and scroll horizontal track
      const mainAnim = gsap.to(track, {
        x: travelDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${trackWidth - viewportWidth + 300}`,
          invalidateOnRefresh: true,
        }
      });

      // Animate the progress bar fill
      const progressAnim = gsap.to(progressRef.current, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${trackWidth - viewportWidth + 300}`,
          scrub: 0.8,
        }
      });

      return () => {
        mainAnim.kill();
        progressAnim.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div id="process" ref={containerRef} className="relative bg-[#FAFAF9] z-10 lg:min-h-screen">
      {/* Desktop Sticky Container */}
      <div className="lg:h-screen lg:sticky lg:top-0 overflow-hidden flex flex-col justify-center py-20 lg:py-0">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 w-full mb-10 lg:mb-16">
          <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">Our Workflow</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0F0F0F] max-w-lg">
            A transparent, highly-refined execution method.
          </h2>
        </div>

        {/* Progress bar container (Desktop Only) */}
        <div className="hidden lg:block max-w-7xl mx-auto px-6 w-full mb-12">
          <div className="progress-bar-container rounded-full overflow-hidden">
            <div ref={progressRef} className="progress-bar-fill rounded-full" />
          </div>
        </div>

        {/* Horizontal Track (for Desktop) / Vertical Stack (for Mobile) */}
        <div className="relative w-full">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-12 lg:gap-24 px-6 lg:px-24 w-full max-w-7xl mx-auto lg:max-w-none lg:w-max relative"
          >
            {STEPS.map((step, idx) => (
              <div
                key={step.num}
                className="w-full lg:w-[380px] bg-white border border-[#0F0F0F]/5 rounded-2xl p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] shrink-0 flex flex-col justify-between"
              >
                <div>
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-display font-bold text-indigo-600/20">{step.num}</span>
                    <span className="text-[10px] font-bold tracking-wider text-indigo-600 bg-indigo-500/8 px-2.5 py-1 rounded-full uppercase">
                      Phase {idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-semibold text-[#0F0F0F] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>
                
                {/* Secondary detail block */}
                <div className="border-t border-[#0F0F0F]/5 pt-6 mt-4">
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
