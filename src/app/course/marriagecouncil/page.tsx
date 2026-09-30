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
      
      {/* Top Announcement Bar - Deep Espresso */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-[#2A1E22] text-[#F3EBE9] text-[13.5px] text-center py-2.5 font-semibold z-40 relative mt-[72px] md:mt-[80px]"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-[#EAD5D3] mr-2 animate-pulse"></span>
        Only <b>5 Slots</b> remaining this week.
      </motion.div>

      {/* Hero Section */}
      <section className="relative px-4 pt-12 pb-16 lg:pb-24 overflow-visible">
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
          >
            <motion.span variants={fadeInUp} className="inline-block text-[12.5px] tracking-[0.16em] uppercase text-[#C47C76] font-bold mb-4">
              The Marriage Intensive™
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold leading-[1.2] text-[#33252A] mb-4" style={{ perspective: 1000 }}>
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
            
            <motion.p variants={fadeInUp} className="text-[17.5px] text-[#5D4E54] mb-6">
              A private, guided 1:1 marriage counseling program for couples who want to rebuild trust, fix communication, and heal deeply.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="flex flex-col gap-3 italic text-[#7C6971] text-[16px] mb-8">
              {["Stop the endless arguments and silence.", "Break free from past resentments.", "Find clarity on the future of your relationship."].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-3 items-center">
                  <motion.span 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ delay: 0.8 + (i * 0.2), type: "spring" }} 
                    className="text-[#C47C76] font-bold not-italic"
                  >
                    ✓
                  </motion.span> 
                  {item}
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="font-bold text-[#33252A] text-[17.5px] mb-6">You deserve a marriage that feels like home.</motion.p>
            
            <motion.div variants={fadeInUp}>
              <a 
                href="https://wa.me/918157039987?text=I%20want%20to%20book%20for%20marriage%20counseling"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#C47C76] to-[#A8635D] text-white font-extrabold text-[17.5px] py-4 px-8 rounded-2xl shadow-[0_10px_26px_rgba(196,124,118,0.35)] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(196,124,118,0.45)] transition-all max-w-[320px] w-full group overflow-hidden relative"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-56 opacity-10"></span>
                <span className="relative tracking-wide">BOOK YOUR SESSION</span>
                <span className="text-[12px] font-medium opacity-90 font-normal relative">₹999 Only • Secure Checkout</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Coach Card with Warm Glow */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            style={{ perspective: 1000 }}
          >
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-[22px] shadow-[0_24px_60px_rgba(51,37,42,0.08)] border border-[#F4EBE9] overflow-hidden max-w-[360px] mx-auto md:mx-0 w-full relative group transform-gpu"
            >
              <div className="aspect-[4/4.5] bg-gradient-to-br from-[#F4EBE9] to-[#EAD5D3] relative flex items-center justify-center overflow-hidden">
                <Image src="/wp-content/uploads/2026/02/IMG_8055.JPG-scaled.jpeg" alt="Ranjini Vijith" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="absolute left-3.5 bottom-3.5 bg-white/95 backdrop-blur-sm rounded-xl py-2 px-3.5 text-[12.5px] font-bold text-[#33252A] shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C47C76] animate-pulse"></span>
                  Accepting Clients
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-[23px] font-bold text-[#33252A]">Ranjini Vijith</h3>
                <p className="text-[13px] text-[#A8635D] font-semibold mt-1">CLINICAL PSYCHOLOGIST & RELATIONSHIP COACH</p>
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

      {/* Pain Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div variants={floatAnimation} animate="animate" className="absolute top-10 right-[10%] w-16 h-16 rounded-full border-4 border-[#C47C76]/15 -z-10" />
        <motion.div variants={floatAnimation} animate="animate" style={{ animationDelay: "2s" }} className="absolute bottom-20 left-[5%] w-20 h-20 bg-[#EAD5D3]/40 rounded-xl rotate-12 -z-10" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#33252A] text-center mb-10">
            Is this how your relationship feels right now?
          </motion.h2>
          <div className="space-y-4">
            {[
              { title: "Walking on eggshells", desc: "You constantly watch what you say to avoid triggering another massive argument." },
              { title: "Emotional distance", desc: "You live together like roommates. The warmth, intimacy, and friendship are gone." },
              { title: "Broken trust", desc: "Past hurts, betrayal, or lies make it impossible to feel secure and safe." },
              { title: "Repeating cycles", desc: "You have the same fights over and over, but nothing ever gets resolved." }
            ].map((pain, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white border border-[#F4EBE9] rounded-2xl p-5 shadow-[0_10px_30px_rgba(51,37,42,0.04)] flex gap-4 transition-colors hover:border-[#C47C76]/40 cursor-default"
              >
                <div className="w-7 h-7 rounded-lg border-2 border-[#C47C76] text-[#C47C76] flex items-center justify-center font-bold text-sm shrink-0 mt-1">✕</div>
                <div>
                  <b className="text-[#33252A] text-[16px] block mb-1">{pain.title}</b>
                  <p className="text-[#7C6971] text-[15px] leading-relaxed">{pain.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeInUp} className="text-center text-[#C47C76] font-bold text-[17.5px] mt-10">
            It doesn't have to stay this way.
          </motion.p>
        </motion.div>
      </section>

      {/* Transformation Section */}
      <section className="bg-gradient-to-b from-[#F7EFEF] to-[#FCF9F6] py-20 px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-[34px] text-[#33252A] text-center mb-12">
            What happens when you do the work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-stretch">
            {/* Before */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="bg-white rounded-[18px] p-8 shadow-sm border border-[#F4EBE9] border-t-4 border-t-[#BFA4A1] hover:shadow-md transition-shadow"
            >
              <h3 className="text-[15px] tracking-[0.12em] uppercase text-[#967C79] font-bold mb-6">Before Counseling</h3>
              <ul className="space-y-4">
                {["Constant misunderstandings", "Feeling unappreciated", "Loneliness inside marriage", "Avoiding difficult conversations"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15.5px] text-[#5D4E54]">
                    <span className="text-[#BFA4A1] font-bold">✕</span> {item}
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
              className="text-3xl text-[#C47C76] font-bold flex items-center justify-center rotate-90 md:rotate-0 py-4 md:py-0"
            >
              <motion.span animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>➔</motion.span>
            </motion.div>
            
            {/* After */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
              className="bg-gradient-to-b from-white to-[#FAF4F3] rounded-[18px] p-8 shadow-md border border-[#F4EBE9] border-t-4 border-t-[#D4AF37] hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              {/* Shine effect */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }} 
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
              />
              <h3 className="text-[15px] tracking-[0.12em] uppercase text-[#B38D19] font-bold mb-6">After Counseling</h3>
              <ul className="space-y-4">
                {["Clear, calm communication", "Feeling seen & valued", "Deep emotional intimacy", "Healthy conflict resolution"].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex gap-3 text-[15.5px] text-[#33252A]"
                  >
                    <span className="text-[#C47C76] font-extrabold">✓</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.p variants={fadeInUp} className="text-center mt-10 text-[16.5px] text-[#5D4E54]">
            You are one <b>honest conversation</b> away from a breakthrough.
          </motion.p>
        </motion.div>
      </section>

      {/* Offer / Pricing Section */}
      <section className="bg-[linear-gradient(170deg,#33252A,#1F1518)] text-[#F9F5F4] py-20 px-4 relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(234,213,211,0.15)_0%,transparent_60%)] -translate-x-1/2 pointer-events-none"
        />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="text-[#EAD5D3] text-[12.5px] tracking-[0.16em] uppercase font-bold mb-4 block">The Program</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-[44px] text-white leading-tight mb-6">
              The Marriage <span className="text-[#EAD5D3] italic">Intensive</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#C4A8A5] text-[16.5px]">
              A complete structured framework for couples. We don't just talk about problems; we provide <b>practical psychological tools</b> to fix them.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 mt-14 items-start text-left">
            {/* Value Stack */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-col gap-4"
            >
              {[
                { icon: "🧠", title: "Relationship Assessment", desc: "Deep dive into your core relationship dynamics and hidden triggers." },
                { icon: "💬", title: "Communication Toolkits", desc: "Learn the exact scripts and methods to communicate without fighting." },
                { icon: "🤝", title: "Trust Rebuilding Framework", desc: "Step-by-step guidance to restore emotional safety and fidelity." },
                { icon: "🔒", title: "100% Confidentiality", desc: "A safe, non-judgmental space for both partners to be heard." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4 transition-colors"
                >
                  <div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <b className="text-[#F9F5F4] text-[16px] block mb-1">{item.title}</b>
                    <p className="text-[#C4A8A5] text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buy Card with 3D Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              style={{ perspective: 1200 }}
              className="sticky top-24 z-20"
            >
              <motion.div 
                whileHover={{ rotateY: -3, rotateX: 3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white text-[#2B2326] rounded-[22px] shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden transform-gpu"
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
                    <span className="text-[17px] text-[#9A8A8E] line-through mr-2">₹2,500</span>
                    <span className="font-serif text-[58px] font-bold text-[#C47C76] leading-none">₹999</span>
                    <div className="text-[13.5px] text-[#7C6971] mt-1">per 60-minute session</div>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-[#F9F0EE] text-[#A8635D] font-bold border border-[#F2DFDD] rounded-full px-4 py-1.5 text-[13.5px]">
                      <span className="w-2 h-2 rounded-full bg-[#C47C76] animate-pulse"></span>
                      Only 5 Slots Left
                    </div>
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

                  <div className="grid grid-cols-3 gap-2 mt-6 text-center">
                    <div className="text-[11.5px] text-[#7C6971] font-semibold leading-[1.4]"><span className="block text-[18px] mb-1">🔒</span> 100% Secure</div>
                    <div className="text-[11.5px] text-[#7C6971] font-semibold leading-[1.4]"><span className="block text-[18px] mb-1">🤝</span> Private</div>
                    <div className="text-[11.5px] text-[#7C6971] font-semibold leading-[1.4]"><span className="block text-[18px] mb-1">📅</span> Flexible</div>
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
