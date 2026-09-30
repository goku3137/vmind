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
    <div className="w-full min-h-screen bg-[#FCF9F6] text-[#4A3C41] font-sans selection:bg-[#C47C76] selection:text-white font-medium overflow-hidden">
      


      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-visible">
        {/* Animated Background Gradients (Warm Rose & Soft Peach) */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(196,124,118,0.12)_0%,transparent_60%)] pointer-events-none -translate-y-1/2 translate-x-1/4"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(234,213,211,0.3)_0%,transparent_60%)] pointer-events-none translate-y-1/4 -translate-x-1/4"
        />

        {/* Floating Abstract Shapes */}
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-24 h-24 border border-[#C47C76]/30 rounded-3xl -z-10 hidden md:block"
        />
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, -90, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[#EAD5D3]/40 rounded-full -z-10 hidden md:block"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.12fr_0.88fr] gap-12 items-center relative z-10">
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="visible"
            className="pt-10 lg:pt-0"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#EAD5D3] shadow-[0_4px_12px_rgba(196,124,118,0.08)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47C76] animate-pulse"></span>
              <span className="text-[11.5px] tracking-[0.2em] uppercase text-[#A8635D] font-extrabold">
                MARRYWISE™ EXCLUSIVE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-[44px] md:text-[56px] lg:text-[68px] font-bold leading-[1.1] text-[#33252A] mb-6 tracking-tight" style={{ perspective: 1000 }}>
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
                className="inline-block origin-bottom font-serif italic text-[#C47C76]"
              >
                connection 
              </motion.span>
              {' '}in one honest journey.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[18px] md:text-[20px] leading-relaxed text-[#5D4E54] mb-8 max-w-[90%]">
              A private, guided 1:1 marriage counseling program for couples who want to rebuild trust, fix communication, and heal deeply.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="flex flex-col gap-4 mb-10">
              {["Stop the endless arguments and silence.", "Break free from past resentments.", "Find clarity on the future of your relationship."].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#C47C76] to-[#A8635D] flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#5D4E54] text-[16.5px] font-medium leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="font-serif italic text-[#C47C76] text-[22px] mb-8">You deserve a marriage that feels like home.</motion.p>
            
            <motion.div variants={fadeInUp} className="w-full">
              <a 
                href="https://wa.me/918157039987?text=I%20want%20to%20book%20for%20marriage%20counseling"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#C47C76] to-[#A8635D] text-white font-extrabold text-[17.5px] py-4 px-8 rounded-2xl shadow-[0_10px_26px_rgba(196,124,118,0.35)] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(196,124,118,0.45)] transition-all w-full md:max-w-[320px] group overflow-hidden relative"
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
            <div className="absolute inset-0 bg-[#C47C76] blur-[80px] opacity-20 translate-y-10 rounded-full z-0"></div>
            
            <motion.div 
              whileHover={{ rotateY: 4, rotateX: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white/70 backdrop-blur-xl rounded-[28px] shadow-[0_30px_80px_rgba(51,37,42,0.12)] border border-white/60 overflow-hidden max-w-[380px] mx-auto md:mx-0 w-full relative z-10"
            >
              <div className="aspect-[4/4.5] bg-[#F4EBE9] relative flex items-center justify-center overflow-hidden">
                <Image src="/wp-content/uploads/2026/02/IMG_8055.JPG-scaled.jpeg" alt="Ranjini Vijith" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E22]/60 via-transparent to-transparent opacity-80"></div>

                <div className="absolute left-4 bottom-4 bg-white/95 backdrop-blur-md rounded-2xl py-2.5 px-4 text-[12px] font-bold text-[#33252A] shadow-xl flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#19A67A] shadow-[0_0_8px_#19A67A] animate-pulse"></span>
                  Accepting Couples
                </div>
              </div>
              <div className="p-6 bg-white/90">
                <h3 className="font-serif text-[26px] font-bold text-[#33252A] mb-1">Ranjini Vijith</h3>
                <p className="text-[12.5px] text-[#A8635D] font-bold tracking-wide uppercase mb-3">Lead Clinical Psychologist</p>
                <div className="h-[1px] w-12 bg-[#EAD5D3] mb-3"></div>
                <p className="text-[12.5px] text-[#7C6971] font-medium leading-relaxed">Founder & CEO, ORUMA | Clinical Hypnotherapist | Relationship & Family Therapist</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-[#33252A] text-[#F9F5F4] py-6 relative overflow-hidden">
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
              <b className="font-serif text-2xl text-[#EAD5D3] block">{item.stat}</b>
              <span className="text-[12.5px] text-[#C4A8A5] tracking-[0.03em] uppercase">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pain Section - Ultra Premium Glass */}
      <section className="py-24 px-4 relative overflow-hidden bg-white">
        <motion.div variants={floatAnimation} animate="animate" className="absolute top-10 right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#F4EBE9] to-transparent blur-2xl -z-10" />
        <motion.div variants={floatAnimation} animate="animate" style={{ animationDelay: "2s" }} className="absolute bottom-20 left-[5%] w-40 h-40 bg-gradient-to-tr from-[#EAD5D3] to-transparent blur-3xl -z-10" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block text-[#A8635D] font-bold tracking-[0.2em] text-[11px] uppercase mb-3 border border-[#EAD5D3] px-3 py-1 rounded-full">The Reality</span>
            <h2 className="font-serif text-4xl md:text-[46px] leading-[1.1] text-[#33252A]">
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
                className="bg-[#FCF9F6]/80 backdrop-blur-lg border border-[#F4EBE9] rounded-2xl p-8 shadow-[0_8px_30px_rgba(51,37,42,0.03)] hover:shadow-[0_20px_40px_rgba(196,124,118,0.08)] flex gap-5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#F4EBE9] flex items-center justify-center shrink-0 group-hover:bg-[#C47C76] group-hover:border-[#C47C76] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#C47C76] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <b className="font-serif text-[#33252A] text-[20px] block mb-2 group-hover:text-[#A8635D] transition-colors">{pain.title}</b>
                  <p className="text-[#7C6971] text-[15.5px] leading-relaxed">{pain.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeInUp} className="text-center text-[#C47C76] font-bold text-[22px] mt-16 tracking-wide font-serif italic">
            It doesn't have to stay this way.
          </motion.p>
        </motion.div>
      </section>

      {/* Transformation Section */}
      <section className="bg-[#FAF6F3] py-24 px-4 border-t border-[#F4EBE9]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-[46px] text-[#33252A] text-center mb-16">
            What happens when you do the work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
            {/* Before */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="bg-white rounded-[24px] p-10 shadow-sm border border-[#F4EBE9] relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#BFA4A1] to-[#D4C3C1] rounded-t-[24px]"></div>
              <h3 className="text-[14px] tracking-[0.15em] uppercase text-[#967C79] font-bold mb-8">Before Counseling</h3>
              <ul className="space-y-6">
                {["Constant misunderstandings", "Feeling unappreciated", "Loneliness inside marriage", "Avoiding difficult conversations"].map((item, i) => (
                  <li key={i} className="flex gap-4 text-[16px] text-[#7C6971]">
                    <span className="text-[#BFA4A1] shrink-0 mt-0.5">
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
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-[#F4EBE9] flex items-center justify-center text-[#C47C76] z-10 rotate-90 md:rotate-0 mx-auto"
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
              className="bg-white rounded-[24px] p-10 shadow-[0_20px_60px_rgba(196,124,118,0.15)] border border-[#EAD5D3] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C47C76] to-[#D4AF37] rounded-t-[24px]"></div>
              
              {/* Shine effect */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }} 
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
              />
              <h3 className="text-[14px] tracking-[0.15em] uppercase text-[#A8635D] font-bold mb-8">After Counseling</h3>
              <ul className="space-y-6">
                {["Clear, calm communication", "Feeling seen & valued", "Deep emotional intimacy", "Healthy conflict resolution"].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex gap-4 text-[16px] font-medium text-[#33252A]"
                  >
                    <span className="text-[#C47C76] shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span> 
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.p variants={fadeInUp} className="text-center mt-16 text-[20px] text-[#5D4E54]">
            You are one <b className="text-[#C47C76] font-serif italic text-[24px]">honest conversation</b> away from a breakthrough.
          </motion.p>
        </motion.div>
      </section>

      {/* Offer / Pricing Section - Ultra Luxe */}
      <section className="bg-[#1F1518] text-[#F9F5F4] py-32 px-4 relative overflow-hidden">
        {/* Luxury Radial Mesh Gradients */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(196,124,118,0.3)_0%,transparent_50%)]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.15)_0%,transparent_60%)]"
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
            <motion.span variants={fadeInUp} className="inline-block border border-white/20 rounded-full px-4 py-1.5 text-[#EAD5D3] text-[11px] tracking-[0.25em] uppercase font-bold mb-6">The Program</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[48px] md:text-[64px] text-white leading-tight mb-8">
              MARRY<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D779] italic">WISE</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#C4A8A5] text-[19px] leading-relaxed">
              A complete structured framework for couples. We don't just talk about problems; we provide <b className="text-white font-medium border-b border-[#D4AF37]/50 pb-0.5">practical psychological tools</b> to fix them.
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
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border-l-4 border-[#C47C76] rounded-r-2xl p-6 flex gap-6 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#C47C76]/20 flex items-center justify-center shrink-0 shadow-inner border border-[#C47C76]/30">
                    <svg className="w-6 h-6 text-[#C47C76]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                  </div>
                  <div>
                    <b className="font-serif text-white text-[22px] block mb-2">Relationship Assessment</b>
                    <p className="text-[#C4A8A5] text-[15.5px] leading-relaxed">Deep dive into your core relationship dynamics and hidden triggers.</p>
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-r-2xl p-6 flex gap-6 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 shadow-inner border border-[#D4AF37]/30">
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <div>
                    <b className="font-serif text-white text-[22px] block mb-2">Communication Toolkits</b>
                    <p className="text-[#C4A8A5] text-[15.5px] leading-relaxed">Learn the exact scripts and methods to communicate without fighting.</p>
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border-l-4 border-[#C47C76] rounded-r-2xl p-6 flex gap-6 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#C47C76]/20 flex items-center justify-center shrink-0 shadow-inner border border-[#C47C76]/30">
                    <svg className="w-6 h-6 text-[#C47C76]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <div>
                    <b className="font-serif text-white text-[22px] block mb-2">Trust Rebuilding Framework</b>
                    <p className="text-[#C4A8A5] text-[15.5px] leading-relaxed">Step-by-step guidance to restore emotional safety and fidelity.</p>
                  </div>
                </motion.div>

                {/* Item 4 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-r-2xl p-6 flex gap-6 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 shadow-inner border border-[#D4AF37]/30">
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <b className="font-serif text-white text-[22px] block mb-2">100% Confidentiality</b>
                    <p className="text-[#C4A8A5] text-[15.5px] leading-relaxed">A safe, non-judgmental space for both partners to be heard.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Buy Card with Ultra 3D Gold Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              style={{ perspective: 1200 }}
              className="sticky top-28 z-20"
            >
              <motion.div 
                whileHover={{ rotateY: -2, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white text-[#2B2326] rounded-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-[#F3D779]/30 overflow-hidden transform-gpu"
              >
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#F3D779] text-[#4A3906] text-center font-extrabold text-[13.5px] py-2.5 tracking-[0.08em] uppercase relative overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                  Currently Accepting Couples
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="font-serif text-[22px] text-[#33252A] font-bold text-center">Private 1:1 Session</h3>
                  <div className="text-center my-5">
                    <div className="text-[15px] font-medium text-[#7C6971] leading-relaxed px-4">
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
                      className="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#C47C76] to-[#A8635D] text-white font-extrabold text-[17.5px] py-4 px-6 rounded-xl shadow-[0_14px_32px_rgba(196,124,118,0.3)] hover:shadow-[0_20px_40px_rgba(196,124,118,0.5)] transition-all w-full text-center relative overflow-hidden group"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                      <span className="relative tracking-wide">SECURE YOUR SLOT</span>
                      <span className="text-[12px] font-medium opacity-90 font-normal relative">Book via WhatsApp / UPI</span>
                    </a>
                  </motion.div>

                  <div className="grid grid-cols-3 gap-2 mt-8 text-center pt-6 border-t border-[#F4EBE9]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FCF9F6] border border-[#EAD5D3] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#C47C76]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </div>
                      <span className="text-[11.5px] text-[#7C6971] font-bold">100% Secure</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FCF9F6] border border-[#EAD5D3] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <span className="text-[11.5px] text-[#7C6971] font-bold">Private</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FCF9F6] border border-[#EAD5D3] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#C47C76]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <span className="text-[11.5px] text-[#7C6971] font-bold">Flexible</span>
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
