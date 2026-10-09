'use client';

import React, { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { usePathname, useSearchParams } from 'next/navigation';
import { getThemeForItem, ThemeType } from '@/data/catalog';

export function Footer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlItem = searchParams?.get('item') || searchParams?.get('program') || searchParams?.get('course') || searchParams?.get('booking');

  const computeInitialTheme = (): ThemeType => {
    if (pathname === '/program/marrywise') return 'marrywise';
    if (pathname === '/program' || (pathname?.startsWith('/program/') && !pathname.includes('marrywise'))) return 'program';
    if (pathname === '/razorpay' || pathname === '/thank-you' || pathname === '/webinar') {
      return getThemeForItem(urlItem);
    }
    return 'counselling';
  };

  const [activeTheme, setActiveTheme] = useState<ThemeType>(computeInitialTheme);

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
  const isPremiumFooter = isMarriageCouncilTheme || isProgramTheme;

  // On checkout page (/razorpay), show a sleek distraction-free footer instead of giant marketing footer
  if (pathname === '/razorpay') {
    return (
      <footer className="w-full py-4 text-center text-xs text-[#7B0B2E]/60 border-t border-[#F5C6D0]/40 relative z-20 bg-white/50 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 font-medium">
          <span className="flex items-center gap-1 text-green-700">
            🔒 256-Bit SSL Encrypted
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>Secured by Razorpay</span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>© 2026 VMind • Ranjini Vijith</span>
        </div>
      </footer>
    );
  }

  const footerBg = isMarriageCouncilTheme 
    ? 'bg-[#7B0B2E] border-[#F5C6D0]/20' 
    : isProgramTheme 
      ? 'bg-[#75AADB] border-[#C5E0F2]/20' 
      : 'bg-[#0B7A75] border-[#148C66]';

  const glowColor = isMarriageCouncilTheme 
    ? 'bg-[#E8185A]' 
    : isProgramTheme 
      ? 'bg-[#5BA4DA]' 
      : 'bg-[#19A67A]';

  const brandColor = isMarriageCouncilTheme 
    ? 'text-[#FBBDD0]' 
    : isProgramTheme 
      ? 'text-[#E8F4FA]' 
      : 'text-[#F4E6E3]';

  const lineBg = isMarriageCouncilTheme 
    ? 'bg-[#E8185A]' 
    : isProgramTheme 
      ? 'bg-[#E8F4FA]' 
      : 'bg-[#F4E6E3]';

  const buttonBg = isMarriageCouncilTheme 
    ? 'bg-[#E8185A] text-white hover:bg-[#c9114a] shadow-[0_0_20px_rgba(232,24,90,0.3)] hover:shadow-[0_0_30px_rgba(232,24,90,0.5)]' 
    : isProgramTheme 
      ? 'bg-[#3A82B8] text-white hover:bg-[#2e6d9b] shadow-[0_0_20px_rgba(58,130,184,0.3)] hover:shadow-[0_0_30px_rgba(58,130,184,0.5)]' 
      : 'bg-[#D48C8C] text-white hover:bg-[#B36B6B]';

  const footerLink = isMarriageCouncilTheme 
    ? (pathname === '/razorpay' ? '/program/marrywise' : 'https://wa.me/918157039987?text=I%20want%20to%20book%20for%20marriage%20counseling') 
    : '/contact';

  const buttonText = isMarriageCouncilTheme 
    ? (pathname === '/razorpay' ? 'EXPLORE MARRYWISE' : 'SECURE YOUR SLOT')
    : 'Enroll Today';

  if (isPremiumFooter) {
    return (
      <footer className={`w-full relative z-40 overflow-hidden border-t ${footerBg}`}>
        {/* Interactive Pixel Grid Background */}
        <div className="absolute inset-0 z-0 flex flex-wrap" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))',
          gridAutoRows: '40px'
        }}>
          {[...Array(300)].map((_, i) => (
            <div 
              key={i} 
              className={`w-full h-full border-[0.5px] transition-colors duration-1000 hover:duration-0 ${
                isMarriageCouncilTheme 
                  ? 'border-[#E8185A]/10 hover:bg-[#E8185A]/20' 
                  : 'border-[#E8F4FA]/20 hover:bg-[#E8F4FA]/40'
              }`}
            />
          ))}
        </div>

        {/* Floating Abstract Glows behind text */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-[100%] blur-[120px] opacity-40 pointer-events-none z-0 ${glowColor}`}></div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 md:px-8 relative z-10 pointer-events-none">
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
            
            <div className="max-w-2xl pointer-events-auto">
              <h3 className={`${brandColor} uppercase tracking-[0.2em] text-sm font-bold mb-4 flex items-center`}>
                <span className={`w-8 h-[1px] mr-4 ${lineBg}`}></span>
                {isMarriageCouncilTheme ? 'ORUMA COUNSELLING' : 'ORUMA PATHWAYS'}
              </h3>
              <p className="text-2xl md:text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                {isMarriageCouncilTheme ? (
                  <>Rebuilding trust, connection &amp;<br />emotional intimacy in marriage.</>
                ) : (
                  <>Your mind is your most powerful tool.<br />Let us help you sharpen it.</>
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pointer-events-auto text-left md:text-right">
              <div className="space-y-4">
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Location</p>
                <p className="text-white text-base font-light">Trivandrum &amp;<br/>Attingal, Kerala</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Connect</p>
                <a href="mailto:renjinivijith9987@gmail.com" className="text-white text-base font-light hover:text-[#FBBDD0] transition-colors block">
                  Email Us
                </a>
                <a href="tel:+918157039987" className="text-white text-base font-light hover:text-[#FBBDD0] transition-colors block">
                  +91 81570 39987
                </a>
                <div className="flex gap-4 pt-2 justify-start md:justify-end">
                  <a href="https://www.instagram.com/ranjinivijith_psychologist?stkn=MXJpZGp1YWw3NngzMA==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FBBDD0] transition-colors text-xs font-bold">Instagram</a>
                  <a href="https://www.facebook.com/share/19Nt53qCQ6/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FBBDD0] transition-colors text-xs font-bold">Facebook</a>
                  <a href="https://youtube.com/@orumacounselling?si=tCrLS43-AqY8q4OK" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FBBDD0] transition-colors text-xs font-bold">YouTube</a>
                </div>
              </div>
            </div>

          </div>

          {/* High-Converting Sales Quote / CTA */}
          <div className="border-t border-white/10 pt-10 flex flex-col items-center pointer-events-auto">
            <h2 className="text-[13vw] md:text-[7vw] leading-none font-black tracking-tighter w-full text-center hover:scale-[1.02] transition-transform duration-700 cursor-default" style={{ letterSpacing: '-0.02em' }}>
              {isMarriageCouncilTheme ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
                  HEAL TOGETHER.
                </span>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
                  ORUMA PATHWAYS.
                </span>
              )}
            </h2>
            
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 gap-6 md:gap-4">
              <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Founder of Oruma • Clinical Psychologist</span>
              
              <a 
                href={footerLink} 
                target={footerLink.startsWith('http') ? "_blank" : undefined}
                rel={footerLink.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`px-10 py-4 font-bold rounded-full text-[13px] uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 ${buttonBg}`}
              >
                {buttonText}
              </a>

              <span className="text-white/30 text-xs font-medium tracking-widest uppercase">© 2026 Ranjini Vijith</span>
            </div>
          </div>

        </div>
      </footer>
    );
  }

  // Standard Footer for general Counselling & default pages
  return (
    <footer className="w-full">
      <div className="bg-[#19A67A] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[url('/wp-content/uploads/2026/02/rectangle-dots.png')] bg-contain bg-no-repeat opacity-20 -z-0 transform rotate-180"></div>
        <div className="absolute left-0 top-0 w-64 h-64 bg-[url('/wp-content/uploads/2026/02/rectangle-dots.png')] bg-contain bg-no-repeat opacity-20 -z-0"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 pl-4 md:pl-12">
          <AnimatedSection animation="fadeInLeft" className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white tracking-wide">RANJINI VIJITH -Psychologist</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-white">Founder of ORUMA</h3>
              <p className="text-white text-lg">Clinical Hypnotherapist &amp; Clinical Access Bars Therapist</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInRight" className="space-y-6 md:pl-16">
            <div className="flex items-center text-white tracking-widest text-sm uppercase font-bold">
              <span className="w-8 h-[1px] bg-white mr-4"></span>
              Contact Us
            </div>
            <ul className="space-y-6 pt-2">
              <li className="flex items-center text-white hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                KERALA
              </li>
              <li className="flex items-center text-white hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                renjinivijith9987@gmail.com
              </li>
              <li className="flex items-center text-white hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 8157039987
              </li>
            </ul>
            
            <div className="pt-6">
              <div className="flex items-center text-white tracking-widest text-sm uppercase font-bold mb-4">
                <span className="w-8 h-[1px] bg-white mr-4"></span>
                Follow Us
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/ranjinivijith_psychologist?stkn=MXJpZGp1YWw3NngzMA==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDB813] transition-colors text-sm font-bold tracking-wider">INSTAGRAM</a>
                <a href="https://oruma.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDB813] transition-colors text-sm font-bold tracking-wider">WEBSITE</a>
                <a href="https://www.facebook.com/share/19Nt53qCQ6/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDB813] transition-colors text-sm font-bold tracking-wider">FACEBOOK</a>
                <a href="https://youtube.com/@orumacounselling?si=tCrLS43-AqY8q4OK" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDB813] transition-colors text-sm font-bold tracking-wider">YOUTUBE</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className="bg-[#f4f7f6] py-6 text-center text-gray-800 font-medium text-sm border-t border-gray-200">
        <p>Copyright &copy; 2026 Ranjini Vijith. All rights reserved</p>
      </div>
    </footer>
  );
}
