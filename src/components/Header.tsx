"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const pathname = usePathname();
  const isCoursePage = pathname?.includes('/course');
  const isMarriageCouncilPage = pathname === '/course/marrywise';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom theme colors for the marriage council page
  const headerBg = isMarriageCouncilPage 
    ? (isScrolled ? 'bg-[#2A1E22]/50 backdrop-blur-md border-b border-[#EAD5D3]/20' : 'bg-[#2A1E22]/95 border-b border-[#EAD5D3]/10') 
    : isCoursePage ? 'bg-[#0B7A75] md:bg-[#0B7A75]/90' : 'bg-[#0B7A75]/90';
    
  const hoverAccent = isMarriageCouncilPage ? 'hover:text-[#C47C76]' : 'hover:text-[#FDB813]';
  const buttonClass = isMarriageCouncilPage 
    ? 'bg-[#C47C76] hover:bg-[#A8635D]' 
    : 'bg-[#19A67A] hover:bg-[#148C66]';
  const mobileFocusRing = isMarriageCouncilPage ? 'focus:ring-[#C47C76]' : 'focus:ring-[#FDB813]';
  const mobileMenuBg = isMarriageCouncilPage ? 'bg-[#2A1E22]' : 'bg-[#0B7A75]';

  return (
    <header className={`w-full fixed top-0 z-50 backdrop-blur-md shadow-md py-3 md:py-4 transition-colors duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="logo flex items-center">
          <Link href="/">
            <Image 
              src="/wp-content/uploads/2026/02/Untitled-design-86.png" 
              alt="VMind Counselling Center" 
              width={40}
              height={40}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover p-0.5 bg-white shadow-sm"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 lg:space-x-10 items-center">
          <Link href="/" className={`text-white text-sm font-bold uppercase tracking-wider transition-colors ${hoverAccent}`}>
            Home
          </Link>
          <Link href="/service/" className={`text-white text-sm font-bold uppercase tracking-wider transition-colors ${hoverAccent}`}>
            Services
          </Link>
          <Link href="/course/" className={`text-white text-sm font-bold uppercase tracking-wider transition-colors ${hoverAccent}`}>
            Courses
          </Link>
          <Link href="/contact/" className={`text-white text-sm font-bold uppercase tracking-wider transition-colors ${hoverAccent}`}>
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href={isMarriageCouncilPage ? "https://wa.me/918157039987?text=I%20want%20to%20book%20for%20marriage%20counseling" : "/contact/"}
            target={isMarriageCouncilPage ? "_blank" : undefined}
            rel={isMarriageCouncilPage ? "noopener noreferrer" : undefined}
            className={`text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-all transform shadow-md ${buttonClass}`}
          >
            {isMarriageCouncilPage ? 'BOOK SESSION' : 'CONTACT NOW'}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 text-white rounded-md focus:outline-none focus:ring-2 z-50 relative ${mobileFocusRing} ${mobileMenuBg}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Off-canvas Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed inset-0 z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto pb-10 ${mobileMenuBg}`}
          >
            <nav className="flex flex-col space-y-6 text-center mt-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-white text-2xl font-bold uppercase tracking-wider ${hoverAccent}`}>Home</Link>
              <Link href="/service/" onClick={() => setIsMobileMenuOpen(false)} className={`text-white text-2xl font-bold uppercase tracking-wider ${hoverAccent}`}>Services</Link>
              <Link href="/course/" onClick={() => setIsMobileMenuOpen(false)} className={`text-white text-2xl font-bold uppercase tracking-wider ${hoverAccent}`}>Courses</Link>
              <Link href="/contact/" onClick={() => setIsMobileMenuOpen(false)} className={`text-white text-2xl font-bold uppercase tracking-wider ${hoverAccent}`}>Contact Us</Link>
            </nav>
            <div className="mt-12 text-center">
              <Link 
                href={isMarriageCouncilPage ? "https://wa.me/918157039987?text=I%20want%20to%20book%20for%20marriage%20counseling" : "/contact/"}
                target={isMarriageCouncilPage ? "_blank" : undefined}
                rel={isMarriageCouncilPage ? "noopener noreferrer" : undefined}
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`inline-block text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide shadow-lg border border-white/20 active:scale-95 transition-transform ${buttonClass}`}
              >
                {isMarriageCouncilPage ? 'BOOK SESSION' : 'CONTACT NOW'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
