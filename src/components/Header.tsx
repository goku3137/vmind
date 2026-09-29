"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B7A75] shadow-md py-2' : 'bg-[#0B7A75]/90 lg:bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex items-center">
          <Link href="/">
            <Image 
              src="/wp-content/uploads/2026/02/Untitled-design-86.png" 
              alt="VMind Counselling Center" 
              width={50}
              height={50}
              className="h-12 w-12 rounded-full object-cover bg-white p-0.5"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 items-center">
          <Link href="/" className="text-white hover:text-gray-200 text-sm font-bold uppercase tracking-wider relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FDB813] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/service/" className="text-white hover:text-gray-200 text-sm font-bold uppercase tracking-wider relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FDB813] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact/" className="text-white hover:text-gray-200 text-sm font-bold uppercase tracking-wider relative group">
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FDB813] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact/" className="bg-[#19A67A] text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#148C66] hover:scale-105 transition-all transform shadow-md">
            CONTACT NOW
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Off-canvas Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B7A75] flex flex-col pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-bold uppercase tracking-wider">Home</Link>
              <Link href="/service/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-bold uppercase tracking-wider">Services</Link>
              <Link href="/contact/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-bold uppercase tracking-wider">Contact Us</Link>
            </nav>
            <div className="mt-10">
              <Link href="/contact/" onClick={() => setIsMobileMenuOpen(false)} className="inline-block bg-[#19A67A] text-white px-8 py-4 rounded-full font-bold text-lg tracking-wide shadow-md">
                CONTACT NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
