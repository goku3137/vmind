"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Animation variants for reusability
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
  }
};

const floatAnimation: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function CourseLandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#FAF6F0] text-[#2D2A26] font-sans selection:bg-[#0F4C5C] selection:text-white font-medium overflow-hidden">
      


      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-visible">
        {/* Animated Background Gradients (Warm Rose & Soft Peach) */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,124,106,0.12)_0%,transparent_60%)] pointer-events-none -translate-y-1/2 translate-x-1/4"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(232,225,216,0.3)_0%,transparent_60%)] pointer-events-none translate-y-1/4 -translate-x-1/4"
        />

        {/* Therapeutic 3D Glassmorphic Floating Orbs */}
        <motion.div 
          animate={{ 
            y: [0, -40, 0], 
            rotateX: [0, 15, 0], 
            rotateY: [0, -15, 0] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ perspective: 1000 }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#C97C6A]/20 to-transparent backdrop-blur-2xl border border-white/40 shadow-[0_20px_40px_rgba(201,124,106,0.15)] -z-10 hidden md:block"
        >
          <div className="absolute inset-2 rounded-full border border-white/20"></div>
        </motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 50, 0], 
            rotateX: [0, -20, 0], 
            rotateY: [0, 20, 0] 
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ perspective: 1000 }}
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-bl from-[#0F4C5C]/10 to-transparent backdrop-blur-xl border border-white/30 shadow-[0_30px_60px_rgba(15,76,92,0.1)] -z-10 hidden md:block"
        >
          <div className="absolute inset-4 rounded-full border border-white/10 border-dashed"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.12fr_0.88fr] gap-12 items-center relative z-10">
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="visible"
            className="pt-10 lg:pt-0"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#E8E1D8] shadow-[0_4px_12px_rgba(201,124,106,0.08)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C97C6A] animate-pulse"></span>
              <span className="text-[11.5px] tracking-[0.2em] uppercase text-[#D98E48] font-extrabold">
                MARRYWISE™ EXCLUSIVE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-[48px] md:text-[64px] lg:text-[76px] font-black leading-[1.02] tracking-tighter text-[#0F4C5C] mb-6" style={{ perspective: 1000 }}>
              <motion.span 
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="inline-block origin-bottom"
              >
                From conflict to 
              </motion.span>
              <br/>
              <motion.span 
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="inline-block origin-bottom font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#C97C6A] to-[#D98E48] pr-2"
              >
                connection 
              </motion.span>
              {' '}in one honest journey.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[18px] md:text-[20px] leading-relaxed text-[#2D2A26] mb-8 max-w-[90%]">
              A private, guided 1:1 marriage counseling program for couples who want to rebuild trust, fix communication, and heal deeply.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="flex flex-col gap-4 mb-10">
              {["Stop the endless arguments and silence.", "Break free from past resentments.", "Find clarity on the future of your relationship."].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#C97C6A] to-[#D98E48] flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#2D2A26] text-[17.5px] font-medium leading-relaxed tracking-wide">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="font-serif italic text-[#C97C6A] text-[22px] mb-8">You deserve a marriage that feels like home.</motion.p>
            
            <motion.div variants={fadeInUp} className="w-full">
              <a 
                href="https://wa.me/918157039987?text=I%20want%20to%20book%20for%20marriage%20counseling"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#C97C6A] to-[#D98E48] text-white font-extrabold text-[17.5px] py-4 px-8 rounded-2xl shadow-[0_10px_26px_rgba(201,124,106,0.35)] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(201,124,106,0.45)] transition-all w-full md:max-w-[320px] group overflow-hidden relative"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-56 opacity-10"></span>
                <span className="relative tracking-wide">BOOK YOUR SESSION</span>
                <span className="text-[12px] font-medium opacity-90 font-normal relative">Limited Slots Available • Secure Checkout</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Coach Card with Glass Glow */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            style={{ perspective: 1200 }}
            className="relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-[#C97C6A] blur-[80px] opacity-20 translate-y-10 rounded-full z-0"></div>
            
            <motion.div 
              whileHover={{ rotateY: 4, rotateX: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white/70 backdrop-blur-xl rounded-[28px] shadow-[0_30px_80px_rgba(15,76,92,0.12)] border border-white/60 overflow-hidden max-w-[380px] mx-auto md:mx-0 w-full relative z-10"
            >
              <div className="aspect-[4/4.5] bg-[#E8E1D8] relative flex items-center justify-center overflow-hidden">
                <Image src="/wp-content/uploads/2026/02/IMG_8055.JPG-scaled.jpeg" alt="Ranjini Vijith" fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C5C]/60 via-transparent to-transparent opacity-80"></div>

                <div className="absolute left-4 bottom-4 bg-white/95 backdrop-blur-md rounded-2xl py-2.5 px-4 text-[12px] font-bold text-[#0F4C5C] shadow-xl flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#19A67A] shadow-[0_0_8px_#19A67A] animate-pulse"></span>
                  Accepting Couples
                </div>
              </div>
              <div className="p-6 bg-white/90">
                <h3 className="font-serif text-[26px] font-bold text-[#0F4C5C] mb-1">Ranjini Vijith</h3>
                <p className="text-[12.5px] text-[#D98E48] font-bold tracking-wide uppercase mb-3">Lead Clinical Psychologist</p>
                <div className="h-[1px] w-12 bg-[#E8E1D8] mb-3"></div>
                <p className="text-[12.5px] text-[#4A4540] font-medium leading-relaxed">Founder & CEO, ORUMA | Clinical Hypnotherapist | Relationship & Family Therapist</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-[#0F4C5C] text-[#F9F5F4] py-6 relative overflow-hidden">
        <motion.div 
          animate={{ x: ["-10%", "10%"] }} 
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:250%_250%] pointer-events-none"
        />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10 relative z-10"
        >
          {[
            { stat: "10+", label: "Years Experience" },
            { stat: "1000+", label: "Couples Supported" },
            { stat: "100%", label: "Confidentiality" },
            { stat: "5/5", label: "Client Rating" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <b className="font-serif text-2xl text-[#E8E1D8] block">{item.stat}</b>
              <span className="text-[12.5px] text-[#9CAF88] tracking-[0.03em] uppercase">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pain Section - Ultra Premium Glass */}
      <section className="py-24 px-4 relative overflow-hidden bg-white">
        <motion.div variants={floatAnimation} animate="animate" className="absolute top-10 right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#E8E1D8] to-transparent blur-2xl -z-10" />
        <motion.div variants={floatAnimation} animate="animate" style={{ animationDelay: "2s" }} className="absolute bottom-20 left-[5%] w-40 h-40 bg-gradient-to-tr from-[#E8E1D8] to-transparent blur-3xl -z-10" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block text-[#D98E48] font-bold tracking-[0.2em] text-[11px] uppercase mb-3 border border-[#E8E1D8] px-3 py-1 rounded-full">The Reality</span>
            <h2 className="font-serif text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F4C5C]">
              Is this how your relationship <br className="hidden md:block"/> feels right now?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Walking on eggshells", desc: "You constantly watch what you say to avoid triggering another massive argument." },
              { title: "Emotional distance", desc: "You live together like roommates. The warmth, intimacy, and friendship are gone." },
              { title: "Broken trust", desc: "Past hurts, betrayal, or lies make it impossible to feel secure and safe." },
              { title: "Repeating cycles", desc: "You have the same fights over and over, but nothing ever gets resolved." }
            ].map((pain, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="bg-[#FAF6F0]/80 backdrop-blur-lg border border-[#E8E1D8] rounded-2xl p-8 shadow-[0_8px_30px_rgba(15,76,92,0.03)] hover:shadow-[0_20px_40px_rgba(201,124,106,0.08)] flex gap-5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#E8E1D8] flex items-center justify-center shrink-0 group-hover:bg-[#C97C6A] group-hover:border-[#C97C6A] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#C97C6A] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <b className="font-serif text-[#0F4C5C] text-[20px] block mb-2 group-hover:text-[#D98E48] transition-colors">{pain.title}</b>
                  <p className="text-[#4A4540] text-[16px] leading-relaxed tracking-wide">{pain.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeInUp} className="text-center text-[#C97C6A] font-bold text-[22px] mt-16 tracking-wide font-serif italic">
            It doesn't have to stay this way.
          </motion.p>
        </motion.div>
      </section>

      {/* Transformation Section with 2D/3D Animated SVG Connection Line */}
      <section className="bg-[#FAF6F0] py-24 px-4 border-t border-[#E8E1D8] relative overflow-hidden">
        {/* Animated Background Connection Wave */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <motion.path 
              d="M0,500 C300,800 700,200 1000,500" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C97C6A" stopOpacity="0" />
                <stop offset="50%" stopColor="#C97C6A" stopOpacity="1" />
                <stop offset="100%" stopColor="#0F4C5C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F4C5C] text-center mb-16">
            What happens when you do the work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
            {/* Before */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="bg-white rounded-[24px] p-10 shadow-sm border border-[#E8E1D8] relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E8E1D8] to-[#EFEAE4] rounded-t-[24px]"></div>
              <h3 className="text-[14px] tracking-[0.15em] uppercase text-[#8C857D] font-bold mb-8">Before Counseling</h3>
              <ul className="space-y-6">
                {["Constant misunderstandings", "Feeling unappreciated", "Loneliness inside marriage", "Avoiding difficult conversations"].map((item, i) => (
                  <li key={i} className="flex gap-4 text-[16px] text-[#4A4540]">
                    <span className="text-[#A39C95] shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                    </span> 
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Arrow */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-[#E8E1D8] flex items-center justify-center text-[#C97C6A] z-10 rotate-90 md:rotate-0 mx-auto"
            >
              <motion.svg animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.div>
            
            {/* After */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
              className="bg-white rounded-[24px] p-10 shadow-[0_20px_60px_rgba(201,124,106,0.15)] border border-[#E8E1D8] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C97C6A] to-[#D98E48] rounded-t-[24px]"></div>
              
              {/* Shine effect */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }} 
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
              />
              <h3 className="text-[14px] tracking-[0.15em] uppercase text-[#D98E48] font-bold mb-8">After Counseling</h3>
              <ul className="space-y-6">
                {["Clear, calm communication", "Feeling seen & valued", "Deep emotional intimacy", "Healthy conflict resolution"].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex gap-4 text-[16px] font-medium text-[#0F4C5C]"
                  >
                    <span className="text-[#C97C6A] shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span> 
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.p variants={fadeInUp} className="text-center mt-16 text-[20px] text-[#2D2A26]">
            You are one <b className="text-[#C97C6A] font-serif italic text-[24px]">honest conversation</b> away from a breakthrough.
          </motion.p>
        </motion.div>
      </section>

      {/* Offer / Pricing Section - Ultra Luxe */}
      <section className="bg-[#0F4C5C] text-[#F9F5F4] py-32 px-4 relative overflow-hidden">
        {/* Luxury Radial Mesh Gradients */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(201,124,106,0.3)_0%,transparent_50%)]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(217,142,72,0.15)_0%,transparent_60%)]"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="inline-block border border-white/20 rounded-full px-4 py-1.5 text-[#E8E1D8] text-[11px] tracking-[0.25em] uppercase font-bold mb-6">The Program</motion.span>
            <motion.h2 variants={fadeInUp} className="text-[56px] md:text-[80px] font-black text-white leading-[0.9] tracking-tighter mb-8">
              MARRY<span className="text-[#EBB985] italic font-serif pr-2 drop-shadow-[0_4px_12px_rgba(217,142,72,0.4)]">WISE</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#9CAF88] text-[19px] leading-relaxed">
              A complete structured framework for couples. We don't just talk about problems; we provide <b className="text-white font-medium border-b border-[#D98E48]/50 pb-0.5">practical psychological tools</b> to fix them.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 mt-20 items-center text-left">
            {/* Value Stack */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-6">
                {/* Item 1 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border-l-4 border-[#C97C6A] rounded-r-2xl p-6 flex gap-6 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#C97C6A]/20 flex items-center justify-center shrink-0 shadow-inner border border-[#C97C6A]/30">
                    <svg className="w-6 h-6 text-[#C97C6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                  </div>
                  <div>
                    <b className="font-serif text-white text-[22px] block mb-2">Relationship Assessment</b>
                    <p className="text-[#9CAF88] text-[15.5px] leading-relaxed">Deep dive into your core relationship dynamics and hidden triggers.</p>
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border-l-4 border-[#D98E48] rounded-r-2xl p-6 flex gap-6 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#D98E48]/20 flex items-center justify-center shrink-0 shadow-inner border border-[#D98E48]/30">
                    <svg className="w-6 h-6 text-[#D98E48]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <div>
                    <b className="font-serif text-white text-[22px] block mb-2">Communication Toolkits</b>
                    <p className="text-[#9CAF88] text-[15.5px] leading-relaxed">Learn the exact scripts and methods to communicate without fighting.</p>
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border-l-4 border-[#C97C6A] rounded-r-2xl p-6 flex gap-6 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#C97C6A]/20 flex items-center justify-center shrink-0 shadow-inner border border-[#C97C6A]/30">
                    <svg className="w-6 h-6 text-[#C97C6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <div>
                    <b className="font-serif text-white text-[22px] block mb-2">Trust Rebuilding Framework</b>
                    <p className="text-[#9CAF88] text-[15.5px] leading-relaxed">Step-by-step guidance to restore emotional safety and fidelity.</p>
                  </div>
                </motion.div>

                {/* Item 4 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border-l-4 border-[#D98E48] rounded-r-2xl p-6 flex gap-6 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#D98E48]/20 flex items-center justify-center shrink-0 shadow-inner border border-[#D98E48]/30">
                    <svg className="w-6 h-6 text-[#D98E48]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <b className="font-serif text-white text-[22px] block mb-2">100% Confidentiality</b>
                    <p className="text-[#9CAF88] text-[15.5px] leading-relaxed">A safe, non-judgmental space for both partners to be heard.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Buy Card with Ultra 3D Gold Hologram Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              style={{ perspective: 1500 }}
              className="sticky top-28 z-20"
            >
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ rotateY: -4, rotateX: 4, scale: 1.03 }}
                className="bg-white text-[#2D2A26] rounded-[24px] shadow-[0_40px_100px_rgba(15,76,92,0.3)] border border-[#EBB985]/50 overflow-hidden transform-gpu relative"
              >
                {/* 3D Holographic Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#D98E48]/5 pointer-events-none"></div>
                <div className="bg-gradient-to-r from-[#D98E48] to-[#EBB985] text-[#4A2C10] text-center font-extrabold text-[13.5px] py-2.5 tracking-[0.08em] uppercase relative overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                  Currently Accepting Couples
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="font-serif text-[22px] text-[#0F4C5C] font-bold text-center">Private 1:1 Session</h3>
                  <div className="text-center my-5">
                    <div className="text-[15px] font-medium text-[#4A4540] leading-relaxed px-4">
                      Rebuild your foundation with our exclusive 60-minute private counseling sessions.
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a 
                      href="https://wa.me/918157039987?text=I%20want%20to%20book%20for%20marriage%20counseling"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#C97C6A] to-[#D98E48] text-white font-extrabold text-[17.5px] py-4 px-6 rounded-xl shadow-[0_14px_32px_rgba(201,124,106,0.3)] hover:shadow-[0_20px_40px_rgba(201,124,106,0.5)] transition-all w-full text-center relative overflow-hidden group"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                      <span className="relative tracking-wide">SECURE YOUR SLOT</span>
                      <span className="text-[12px] font-medium opacity-90 font-normal relative">Book via WhatsApp / UPI</span>
                    </a>
                  </motion.div>

                  <div className="grid grid-cols-3 gap-2 mt-8 text-center pt-6 border-t border-[#E8E1D8]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#E8E1D8] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#C97C6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </div>
                      <span className="text-[11.5px] text-[#4A4540] font-bold">100% Secure</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#E8E1D8] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#D98E48]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <span className="text-[11.5px] text-[#4A4540] font-bold">Private</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#E8E1D8] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#C97C6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <span className="text-[11.5px] text-[#4A4540] font-bold">Flexible</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
