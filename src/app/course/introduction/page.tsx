"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Premium Psychology SVGs
const PsychIcons = [
  <svg key="brain" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/></svg>,
  <svg key="leaf" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  <svg key="heart" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  <svg key="puzzle" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.409 0l-1.568-1.568a1.226 1.226 0 0 0-.878-.289c-.322.049-.648-.059-.878-.289l-1.568-1.568a2.404 2.404 0 0 1 0-3.409l1.61-1.61a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 3.409 0l1.568 1.568c.23.23.556.338.878.289Z"/></svg>,
];

export default function CourseLandingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#f8f9fa] overflow-hidden pt-32 pb-24 selection:bg-[#19A67A] selection:text-white">
      
      {/* Rare & Creative 'Neural Mind Bloom' Background Model */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-[0.35] pointer-events-none z-0 flex items-center justify-center">
        {/* Core Glowing Neural Center */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 bg-[#FDB813] rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2], rotate: [0, -180] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-[#19A67A] rounded-full blur-[120px]"
        />
        
        {/* 12 Intersecting Organic Neural Petals/Pathways */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute origin-bottom top-0 left-1/2 -translate-x-1/2 h-[400px] w-[200px]"
            initial={{ rotate: i * 30 }}
            animate={{ 
              rotate: [i * 30, i * 30 + 360],
            }}
            transition={{ 
              rotate: { duration: 150, repeat: Infinity, ease: "linear" },
            }}
          >
            <motion.div
              animate={{
                scaleY: [1, 1.1, 1],
                scaleX: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4
              }}
              className="w-full h-full"
            >
              <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Organic sweeping curve representing brain pathways / growth */}
                <path d="M100 400C100 400 0 200 0 100C0 44.77 44.77 0 100 0C155.23 0 200 44.77 200 100C200 200 100 400 100 400Z" 
                      stroke={`url(#gradient-${i})`} strokeWidth="3" 
                      fill={`url(#fill-${i})`} fillOpacity="0.1"/>
                <path d="M100 400C100 400 50 250 50 150C50 90 70 30 100 10C130 30 150 90 150 150C150 250 100 400 100 400Z" 
                      stroke="#0B7A75" strokeWidth="1" strokeOpacity="0.5"/>
                <defs>
                  <linearGradient id={`gradient-${i}`} x1="100" y1="0" x2="100" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor={i % 2 === 0 ? "#19A67A" : "#0B7A75"}/>
                    <stop offset="1" stopColor="#FDB813" stopOpacity="0"/>
                  </linearGradient>
                  <radialGradient id={`fill-${i}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(300 100)">
                    <stop stopColor={i % 3 === 0 ? "#FDB813" : "#19A67A"} stopOpacity="0.8"/>
                    <stop offset="1" stopColor="#0B7A75" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightweight Infinite Sliding Psychology Marquees (Optimized for 60fps) */}
      <div className="absolute inset-0 z-0 opacity-10 text-[#0B7A75] pointer-events-none flex flex-col justify-around overflow-hidden py-20">
        {[...Array(3)].map((_, rowIndex) => {
          const isLeft = rowIndex % 2 === 0;
          const duration = 60 + rowIndex * 15; // Slow, graceful, no lag
          const scale = 2 + rowIndex * 0.5;
          const iconOffset = rowIndex % PsychIcons.length;

          return (
            <motion.div 
              key={`row-${rowIndex}`}
              animate={{ x: isLeft ? [0, -1000] : [-1000, 0] }}
              transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
              className="flex space-x-[200px] whitespace-nowrap"
              style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
            >
              {[...Array(12)].map((_, i) => (
                <div key={`icon-${rowIndex}-${i}`} className="inline-block px-10">
                  {PsychIcons[(i + iconOffset) % PsychIcons.length]}
                </div>
              ))}
            </motion.div>
          );
        })}
      </div>

      <section className="relative w-full max-w-7xl mx-auto px-4 z-10 flex flex-col items-center" style={{ perspective: 1200 }}>
        
        {/* Professional yet Dynamic Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="text-center space-y-6 mb-16 relative"
        >
          <motion.div 
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#19A67A]/30 bg-white/80 backdrop-blur-sm text-[#0B7A75] font-bold tracking-widest text-xs uppercase shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#19A67A] mr-2 animate-pulse"></span>
            Exclusive Masterclass
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight tracking-tight text-gray-900">
            Master Emotional <br />
            <motion.span 
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-[#0B7A75] via-[#19A67A] to-[#FDB813]"
            >
              Resilience
            </motion.span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            A transformative, guided journey designed by professional psychologists to help you navigate life's toughest challenges with clarity and strength.
          </p>
        </motion.div>
        
        {/* Premium Static Video Player (Scaled down further to 2xl) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-2xl z-20 group mx-auto"
        >
          {/* Elegant deep glow that gently pulses */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#19A67A]/20 to-[#FDB813]/20 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-black/5 border border-white/50 shadow-[0_20px_50px_rgba(11,122,117,0.15)] transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_30px_60px_rgba(11,122,117,0.25)]">
            <iframe 
              className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
              src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&mute=0&loop=1&playlist=aqz-KE-bpKQ&controls=1&showinfo=0&rel=0" 
              title="Course Introduction Video" 
              frameBorder="0" 
              scrolling="no"
              style={{ overflow: 'hidden' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Ultra Premium Feature Cards with Dramatic Entry */}
        <div className="w-full max-w-6xl mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-30 perspective-1000 pb-20">
          {[
            { step: "01", icon: "🧠", title: "Cognitive Tools", desc: "Evidence-based frameworks to effectively reframe negative thoughts." },
            { step: "02", icon: "✨", title: "Professional Care", desc: "Designed by certified clinical psychologist Ranjini Vijith.", isMain: true },
            { step: "03", icon: "🌱", title: "Guided Growth", desc: "Structured, step-by-step modules for your personal evolution." }
          ].map((card, idx) => {
            // Distinct entry directions for each card
            const initialPos = idx === 0 ? { x: -250, opacity: 0, rotateY: -30 } : 
                               idx === 1 ? { y: 250, opacity: 0, scale: 0.8 } : 
                                           { x: 250, opacity: 0, rotateY: 30 };
                                           
            return (
              <motion.div 
                key={idx}
                initial={initialPos}
                whileInView={{ x: 0, y: 0, opacity: 1, rotateY: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: idx * 0.2, type: "spring", bounce: 0.3 }}
                whileHover={{ scale: 1.03, y: -10, transition: { duration: 0.3 } }}
                className={`relative overflow-hidden p-10 rounded-[2.5rem] flex flex-col items-start ${
                  card.isMain 
                    ? 'bg-gradient-to-br from-[#0B7A75] to-[#19A67A] text-white shadow-[0_20px_50px_rgba(11,122,117,0.4)]' 
                    : 'bg-white/90 backdrop-blur-xl border border-white/60 text-gray-900 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]'
                } transition-shadow duration-500`}
              >
                {/* Moving Background Elements (Internal) */}
                <motion.div 
                  animate={{ 
                    x: [0, 20, -20, 0], 
                    y: [0, -30, 20, 0],
                    scale: [1, 1.2, 0.8, 1]
                  }}
                  transition={{ duration: 8 + idx * 2, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${
                    card.isMain ? 'bg-white/20' : 'bg-[#19A67A]/10'
                  }`}
                />
                <motion.div 
                  animate={{ 
                    x: [0, -30, 10, 0], 
                    y: [0, 20, -10, 0]
                  }}
                  transition={{ duration: 10 + idx, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl ${
                    card.isMain ? 'bg-[#FDB813]/20' : 'bg-[#FDB813]/5'
                  }`}
                />
                
                {/* Step Badge - Drops in */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative z-10 text-xs font-bold tracking-widest mb-8 px-3 py-1 rounded-full ${
                    card.isMain ? 'bg-white/20 text-white shadow-inner' : 'bg-[#19A67A]/10 text-[#0B7A75]'
                  }`}
                >
                  STEP {card.step}
                </motion.div>
                
                {/* Floating Icon Container - Swings in */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring", delay: 0.6 + idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <motion.div 
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ${
                      card.isMain ? 'bg-white/20 backdrop-blur-md border border-white/30' : 'bg-gradient-to-br from-[#e0efeb] to-white border border-[#19A67A]/10'
                    }`}
                  >
                    {card.icon}
                  </motion.div>
                </motion.div>
                
                {/* Text Elements - Slide in from right */}
                <motion.h3 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative z-10 text-2xl font-black font-heading mb-4 ${card.isMain ? 'text-white' : 'text-gray-900'}`}
                >
                  {card.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative z-10 text-base leading-relaxed mb-8 flex-grow ${card.isMain ? 'text-white/90' : 'text-gray-500'}`}
                >
                  {card.desc}
                </motion.p>
                
                {card.isMain && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    className="w-full mt-auto"
                  >
                    <Link 
                      href="/contact/"
                      className="relative z-10 w-full group flex items-center justify-center py-4 bg-white text-[#0B7A75] rounded-2xl font-bold tracking-widest uppercase hover:bg-[#FDB813] hover:text-white transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] text-sm overflow-hidden"
                    >
                      {/* Moving shine effect on button */}
                      <motion.div 
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                      />
                      <span className="relative z-10 flex items-center">
                        Enroll Now
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </section>
    </div>
  );
}
