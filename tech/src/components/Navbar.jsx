import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ theme = 'light' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#0F0F10]/85 backdrop-blur-md border-b border-white/5 shadow-xs py-4'
            : 'bg-[#FAFAF9]/85 backdrop-blur-md border-b border-[#0F0F0F]/5 shadow-xs py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`flex items-center gap-2.5 text-xl font-display font-bold tracking-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#0F0F0F]'
          }`}
        >
          <img src="/tribesell_logo.png" alt="TribeSell" className="w-8 h-8 object-contain" />
          <span>TribeSell</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isDark
                    ? 'text-white/70 hover:text-indigo-400'
                    : 'text-[#0F0F0F]/70 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/10 transition-all duration-200"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-1.5 transition-colors duration-300 ${
            isDark ? 'text-white/80 hover:text-indigo-400' : 'text-[#0F0F0F]/80 hover:text-indigo-600'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden fixed inset-x-0 top-[72px] border-b shadow-lg px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-5 duration-200 ${
            isDark
              ? 'bg-[#0F0F10] border-white/5 shadow-black/40'
              : 'bg-[#FAFAF9] border-[#0F0F0F]/5 shadow-neutral-200'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  isDark ? 'text-white/80 hover:text-indigo-400' : 'text-[#0F0F0F]/80 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="w-full text-center py-3.5 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/10"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}
