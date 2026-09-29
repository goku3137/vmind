import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#0B7A75] shadow-md">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
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
          <Link href="/" className="text-white hover:text-gray-200 text-sm font-bold uppercase tracking-wider">Home</Link>
          <Link href="/service/" className="text-white hover:text-gray-200 text-sm font-bold uppercase tracking-wider">Services</Link>
          <Link href="/contact/" className="text-white hover:text-gray-200 text-sm font-bold uppercase tracking-wider">Contact Us</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact/" className="bg-[#19A67A] text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#148C66] transition-colors">
            CONTACT NOW
          </Link>
        </div>

        {/* Mobile Menu Toggle (Placeholder) */}
        <button className="md:hidden p-2 text-white" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
  );
}
