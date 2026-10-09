"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getThemeForItem, ThemeType } from '@/data/catalog';

export function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlItem = searchParams?.get('item') || searchParams?.get('program') || searchParams?.get('course') || searchParams?.get('booking');

  // Dynamic theme state
  const computeInitialTheme = (): ThemeType => {
    if (pathname === '/program/marrywise') return 'marrywise';
    if (pathname === '/program' || (pathname?.startsWith('/program/') && !pathname.includes('marrywise'))) return 'program';
    if (pathname === '/razorpay' || pathname === '/thank-you' || pathname === '/webinar') {
      return getThemeForItem(urlItem);
    }
    return 'counselling';
  };

  const [activeTheme, setActiveTheme] = useState<ThemeType>(computeInitialTheme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync active theme on route, query, or dynamic event change
  useEffect(() => {
    setActiveTheme(computeInitialTheme());

    const handleThemeEvent = (e: any) => {
      if (e.detail?.id) {
        setActiveTheme(getThemeForItem(e.detail.id));
      }
    };
    window.addEventListener('vmind-item-change', handleThemeEvent);
    return () => window.removeEventListener('vmind-item-change', handleThemeEvent);
  }, [pathname, urlItem]);

  const isMarriageCouncilTheme = activeTheme === 'marrywise';
  const isProgramTheme = activeTheme === 'program';

  // Dynamic colors matching the landing page
  const headerBg = isMarriageCouncilTheme
    ? (isScrolled ? 'bg-[#7B0B2E]/90 backdrop-blur-md border-b border-[#F5C6D0]/20 shadow-md' : 'bg-[#7B0B2E] border-b border-[#F5C6D0]/15 shadow-sm')
    : isProgramTheme
      ? (isScrolled ? 'bg-[#75AADB]/90 backdrop-blur-lg border-b border-[#C5E0F2]/50 shadow-md' : 'bg-[#75AADB] border-b border-[#C5E0F2]/30 shadow-sm')
      : (isScrolled ? 'bg-[#0B7A75]/95 backdrop-blur-md shadow-md' : 'bg-[#0B7A75]');

  const hoverAccent = isMarriageCouncilTheme 
    ? 'hover:text-[#FBBDD0]' 
    : isProgramTheme 
      ? 'hover:text-[#E8F4FA]' 
      : 'hover:text-[#FDB813]';

  const activeColor = isMarriageCouncilTheme 
    ? 'text-[#FBBDD0]' 
    : isProgramTheme 
      ? 'text-[#E8F4FA]' 
      : 'text-[#FDB813]';

  const buttonClass = isMarriageCouncilTheme
    ? 'bg-[#E8185A] text-white shadow-[0_10px_25px_rgba(232,24,90,0.35)] hover:shadow-[0_15px_30px_rgba(232,24,90,0.5)] hover:bg-[#c9114a]'
    : isProgramTheme
      ? 'bg-[#3A82B8] text-white shadow-[0_8px_20px_rgba(58,130,184,0.3)] hover:shadow-[0_12px_25px_rgba(58,130,184,0.5)] hover:bg-[#2e6d9b]'
      : 'bg-gradient-to-br from-[#19A67A] to-[#0B7A75] text-white shadow-[0_10px_25px_rgba(25,166,122,0.3)] hover:shadow-[0_15px_30px_rgba(25,166,122,0.5)]';

  const mobileFocusRing = isMarriageCouncilTheme 
    ? 'focus:ring-[#E8185A]' 
    : isProgramTheme 
      ? 'focus:ring-[#C5E0F2]' 
      : 'focus:ring-[#FDB813]';

  const mobileMenuBg = isMarriageCouncilTheme
    ? 'bg-gradient-to-b from-[#7B0B2E]/98 to-[#3d0517]/98 backdrop-blur-3xl'
    : isProgramTheme
      ? 'bg-gradient-to-b from-[#75AADB]/98 to-[#4a87b8]/98 backdrop-blur-3xl'
      : 'bg-gradient-to-b from-[#0B7A75]/98 to-[#06423f]/98 backdrop-blur-3xl';

  // Only hide at the very top of the marrywise landing page before scroll; always show on /razorpay
  const hideHeaderAtTop = pathname === '/program/marrywise' && !isScrolled;
  const headerVisibilityClass = hideHeaderAtTop
    ? '-translate-y-full opacity-0 pointer-events-none'
    : 'translate-y-0 opacity-100 pointer-events-auto';

  const ctaLink = isMarriageCouncilTheme
    ? (pathname === '/razorpay' ? '/program/marrywise' : 'https://wa.me/918157039987?text=I%20want%20to%20book%20for%20marriage%20counseling')
    : isProgramTheme
      ? '/program/'
      : '/contact/';

  const ctaText = isMarriageCouncilTheme
    ? (pathname === '/razorpay' ? 'EXPLORE MARRYWISE' : 'BOOK SESSION')
    : isProgramTheme
      ? 'EXPLORE PROGRAMS'
      : 'CONTACT NOW';

  return (
    <>
      <header className={`w-full fixed top-0 z-50 transition-all duration-500 transform ${headerVisibilityClass} ${headerBg} py-3 md:py-4`}>
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center relative z-50">
          
          {/* Logo */}
          <div className="logo flex items-center">
            {isMarriageCouncilTheme ? (
              <Link href="/program/marrywise" className="block">
                <Image 
                  src="/images/together_gently_logo.png" 
                  alt="Together, Gently" 
                  width={200}
                  height={60}
                  priority
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
            ) : (
              <Link href="/">
                <Image 
                  src="/wp-content/uploads/2026/02/Untitled-design-86.png" 
                  alt="VMind Counselling Center" 
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover p-0.5 bg-white shadow-sm"
                />
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10 items-center">
            <Link href="/" className={`text-white text-sm font-bold uppercase tracking-wider transition-colors ${hoverAccent}`}>
              Home
            </Link>
            <Link href="/service/" className={`text-white text-sm font-bold uppercase tracking-wider transition-colors ${hoverAccent}`}>
              Services
            </Link>
            <Link href="/program/" className={`text-white text-sm font-bold uppercase tracking-wider transition-colors ${hoverAccent}`}>
              Programs
            </Link>
            <Link href="/contact/" className={`text-white text-sm font-bold uppercase tracking-wider transition-colors ${hoverAccent}`}>
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href={ctaLink}
              target={ctaLink.startsWith('http') ? "_blank" : undefined}
              rel={ctaLink.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-all transform shadow-md ${buttonClass}`}
            >
              {ctaText}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 text-white rounded-md focus:outline-none focus:ring-2 z-50 relative ${mobileFocusRing}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </header>

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
            <nav className="flex flex-col space-y-6 text-center mt-12">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/service/' },
                { name: 'Programs', path: '/program/' },
                { name: 'Contact Us', path: '/contact/' }
              ].map((link, idx) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + (idx * 0.05), type: "spring", stiffness: 200 }}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className={`text-[28px] font-bold uppercase tracking-[0.15em] transition-colors block py-2 ${pathname === link.path || (link.path !== '/' && pathname?.startsWith(link.path)) ? activeColor : `text-white/80 hover:text-white ${hoverAccent}`}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, type: "spring" }}
              className="mt-auto pt-16 text-center pb-8"
            >
              <Link 
                href={ctaLink}
                target={ctaLink.startsWith('http') ? "_blank" : undefined}
                rel={ctaLink.startsWith('http') ? "noopener noreferrer" : undefined}
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`inline-block text-white px-10 py-4 rounded-full font-bold text-[15px] tracking-widest shadow-lg active:scale-95 transition-transform w-full max-w-[280px] ${buttonClass}`}
              >
                {ctaText}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
