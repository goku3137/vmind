"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { MapPin, Heart, Star, Users, MessageCircle, Shield, ArrowRight, CheckCircle2, Clock, Calendar, PlayCircle } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.05 } }
};

// ── Original Marrywise Colours ────────────────────────────
const C = {
  blush:   '#FDE8EF',  // Soft pink background
  crimson: '#7B0B2E',  // Dark crimson text & headings
  pink:    '#E8185A',  // Vibrant pink for buttons/accents
  soft:    '#F5C6D0',  // Soft pink for borders
  text:    '#2A0A14',  // Very dark ink for main text
  muted:   '#5C1528',  // Muted crimson for paragraphs
};

const WA = "https://wa.me/918157039987?text=I%20want%20to%20book%20a%201:1%20MARRyWISE%20Session";

export default function MarryWiseLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "ഇത് വിവാഹത്തിന് മുമ്പുള്ള couples ന് മാത്രമാണോ?", a: "അല്ല. Marriage ന് തയ്യാറെടുക്കുന്ന couples നും, married life കൂടുതൽ consciously build ചെയ്യാൻ ആഗ്രഹിക്കുന്ന couples നും ഇത് ഉപയോഗപ്രദമാണ്." },
    { q: "ഇത് Couple Therapy ആണോ?", a: "അല്ല. ഇത് structured relationship & marriage development program ആണ്." },
    { q: "Program എത്ര ദിവസം ഉണ്ട്?", a: "നിങ്ങളുടെ requirements നും schedule നും അനുസരിച്ച് One to One Orientation ൽ duration ഉം fee structure ഉം plan ചെയ്യും." },
    { q: "എല്ലാവരുടെയും മുന്നിൽ personal കാര്യങ്ങൾ പറയേണ്ടി വരുമോ?", a: "ഇല്ല. ഇത് completely private ആണ്. Personal sharing നിർബന്ധമല്ല." },
    { q: "Partner മറ്റൊരു country ൽ ആണെങ്കിൽ?", a: "പ്രശ്നമില്ല. Online ആയി രണ്ടുപേർക്കും participate ചെയ്യാം." },
    { q: "രണ്ടുപേരും ഒരുമിച്ച് join ചെയ്യണോ?", a: "Best result ന് രണ്ടുപേരും join ചെയ്യുന്നതാണ് നല്ലത്. Long distance ആണെങ്കിൽ രണ്ടിടത്തു നിന്നും online ആയി join ചെയ്യാം." },
    { q: "ഞങ്ങൾക്ക് ഇപ്പോൾ പ്രശ്നങ്ങളൊന്നുമില്ല. എന്നിട്ടും join ചെയ്യണോ?", a: "അതെ. ORUMA problem-solving നേക്കാൾ preparation ന് വേണ്ടിയുള്ളതാണ് — പ്രശ്നങ്ങൾ വരുന്നതിന് മുമ്പ് തയ്യാറെടുക്കാൻ." },
  ];

  return (
    <div className="w-full min-h-screen font-sans overflow-x-hidden pb-24 selection:bg-[#E8185A] selection:text-white" style={{ backgroundColor: C.blush, color: C.text }}>
      
      {/* 1. TOP RIBBON */}
      <div className="w-full text-center py-3 px-4 text-[13px] tracking-wide relative z-[60] font-medium flex items-center justify-center gap-2"
        style={{ backgroundColor: C.crimson, color: 'white' }}>
        <MapPin size={14} className="opacity-80" />
        <span>Online · Worldwide — No Pressure, No Judgement, Just Clarity</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm transition-all duration-300" style={{ borderColor: C.soft }}>
        <div className="max-w-[1080px] mx-auto px-4 md:px-6 flex items-center justify-between h-[72px]">
          <a href="#top" className="flex items-center gap-3 no-underline group">
            <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center shadow-sm transition-transform group-hover:scale-105" style={{ backgroundColor: C.crimson }}>
              <Heart size={18} className="text-white" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <b className="font-serif text-[22px] tracking-tight leading-none" style={{ color: C.crimson }}>ORUMA</b>
              <small className="text-[10px] tracking-[0.15em] uppercase leading-none mt-1 font-bold" style={{ color: C.muted }}>Workshop</small>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#about" className="text-[14px] hover:text-[#E8185A] transition-colors" style={{ color: C.text }}>About</a>
            <a href="#why" className="text-[14px] hover:text-[#E8185A] transition-colors" style={{ color: C.text }}>Why ORUMA</a>
            <a href="#bonus" className="text-[14px] hover:text-[#E8185A] transition-colors" style={{ color: C.text }}>Bonuses</a>
            <a href="#stories" className="text-[14px] hover:text-[#E8185A] transition-colors" style={{ color: C.text }}>Stories</a>
            <a href="#faq" className="text-[14px] hover:text-[#E8185A] transition-colors" style={{ color: C.text }}>FAQ</a>
          </nav>
        </div>
      </header>

      {/* 3. HERO */}
      <section id="top" className="relative px-4 md:px-6 pt-[80px] pb-[60px] overflow-visible text-center">
        {/* Ambient Gradients */}
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5], rotate: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none -translate-y-1/3 translate-x-1/4"
          style={{ background: 'radial-gradient(circle, rgba(232,24,90,0.06) 0%, transparent 70%)' }} />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4], rotate: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none translate-y-1/3 -translate-x-1/4"
          style={{ background: 'radial-gradient(circle, rgba(123,11,46,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
            
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full shadow-sm mb-8 font-semibold text-[13px] tracking-wide" style={{ border: `1px solid ${C.soft}`, color: C.crimson }}>
              <Star size={14} className="text-[#E8185A]" fill="currentColor" />
              An ORUMA Couple Workshop
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-[32px] sm:text-[40px] md:text-[52px] font-serif font-bold leading-[1.2] mb-[24px] max-w-[700px] mx-auto tracking-tight" style={{ color: C.crimson }}>
              സ്നേഹം മാത്രം പോരാ. <em className="italic font-medium pr-1" style={{ color: C.pink }}>ഒരുമിച്ച്</em> ഒരു ജീവിതം build ചെയ്യാനും തയ്യാറാകണം.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.7] max-w-[640px] mx-auto mb-[40px] font-medium" style={{ color: C.muted }}>
              <b style={{ color: C.crimson }}>ORUMA</b> — വിവാഹത്തിന് മുമ്പാണോ, പുതിയതായി വിവാഹിതരാണോ, അതോ long distance relationship ലാണോ? മൂന്നു സാഹചര്യത്തിലും therapist guided ആയി ORUMA നിങ്ങൾക്കൊപ്പമുണ്ട്.
            </motion.p>

            {/* Collage from HTML */}
            <motion.div variants={fadeInUp} className="relative flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-[200px_160px] gap-3 sm:gap-4 mt-2 mb-14 max-w-[540px] mx-auto z-20 w-full">
              <div className="relative rounded-[24px] overflow-hidden shadow-md col-span-1 sm:row-span-2 aspect-[4/5] sm:aspect-auto bg-gray-100 group">
                <img src="/images/new_traditional_couple.jpg" alt="Kerala wedding couple" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <span className="absolute left-4 bottom-4 bg-white/95 text-[#7B0B2E] text-[12px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Heart size={14} className="text-[#E8185A]" fill="currentColor" /> Pre Marriage
                </span>
              </div>
              <div className="relative rounded-[24px] overflow-hidden shadow-md aspect-[4/3] sm:aspect-auto bg-gray-100 group">
                <img src="/images/new_kitchen_couple.jpg" alt="Newly married couple" className="w-full h-full object-cover object-center sm:object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <span className="absolute left-4 bottom-4 bg-white/95 text-[#7B0B2E] text-[12px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Users size={14} className="text-[#0E7C7B]" /> Newly Married
                </span>
              </div>
              <div className="relative rounded-[24px] overflow-hidden shadow-md aspect-[4/3] sm:aspect-auto bg-gray-100 group">
                <img src="/images/new_long_distance.jpg" alt="Long distance couple on video call" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <span className="absolute left-4 bottom-4 bg-white/95 text-[#7B0B2E] text-[12px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <MapPin size={14} className="text-[#E8185A]" /> Long Distance
                </span>
              </div>
              <div className="absolute -right-6 -bottom-6 bg-white rounded-2xl p-4 px-5 shadow-xl text-[14px] flex gap-3 items-center z-10 border border-gray-100">
                <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#FDE8EF]">
                  <MessageCircle size={18} className="text-[#E8185A]" />
                </div>
                <div className="flex flex-col text-left">
                  <b className="text-[#7B0B2E] text-[14px] leading-tight font-bold">Therapist Guided</b>
                  <span className="text-[#5C1528] text-[12px] font-medium leading-tight mt-0.5">Not just videos</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full flex flex-col items-center">
              <motion.a href={WA} target="_blank" rel="noopener noreferrer" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 text-white font-bold text-[16px] md:text-[18px] py-[18px] px-10 rounded-full shadow-[0_8px_25px_rgba(232,24,90,0.3)] transition-colors"
                style={{ backgroundColor: C.pink }}>
                One to One Orientation Session ബുക്ക് ചെയ്യൂ <ArrowRight size={20} />
              </motion.a>
              
              <div className="flex flex-wrap items-center justify-center gap-[24px] mt-8 text-[14px] font-semibold" style={{ color: C.muted }}>
                <span className="flex items-center gap-2"><Shield size={16} className="text-[#0E7C7B]" /> Private &amp; Confidential</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-[#0E7C7B]" /> Attend from Anywhere</span>
                <span className="flex items-center gap-2"><Users size={16} className="text-[#0E7C7B]" /> For Both Partners</span>
                <span className="flex items-center gap-2"><MessageCircle size={16} className="text-[#0E7C7B]" /> Malayalam &amp; English</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. ABOUT ORUMA */}
      <section id="about" className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="relative w-full max-w-[320px] mx-auto aspect-[9/16] rounded-[24px] overflow-hidden shadow-lg bg-gray-100">
              <video 
                src="/videos/oruma_short.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline
                controls
              ></video>
            </motion.div>
            <motion.div variants={stagger}>
              <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: C.pink }}>About ORUMA</motion.p>
              <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-6 leading-[1.2] tracking-tight" style={{ color: C.crimson }}>ORUMA — സന്തോഷമുള്ള ദാമ്പത്യത്തിലേക്കുള്ള വഴി</motion.h2>
              <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] leading-[1.7] mb-8 font-medium" style={{ color: C.muted }}>
                ORUMA ഒരു couple focused psychological support platform ആണ്. വിവാഹത്തിന് മുമ്പും ശേഷവും couples ന് വേണ്ട clarity, communication skills, emotional connection എന്നിവ qualified therapists ന്റെ guidance ലൂടെ നൽകുന്നു. <b className="font-bold" style={{ color: C.crimson }}>ORUMA</b> ഞങ്ങളുടെ signature couple workshop ആണ്.
              </motion.p>
              
              <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
                <motion.div variants={fadeInUp} className="rounded-2xl p-5 text-center shadow-sm" style={{ backgroundColor: C.blush, border: `1px solid ${C.soft}` }}>
                  <b className="block font-serif text-[28px] mb-1" style={{ color: C.pink }}>500+</b>
                  <span className="text-[13px] font-semibold tracking-wide" style={{ color: C.muted }}>Couples guided</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-2xl p-5 text-center shadow-sm" style={{ backgroundColor: C.blush, border: `1px solid ${C.soft}` }}>
                  <b className="block font-serif text-[28px] mb-1" style={{ color: C.pink }}>10+</b>
                  <span className="text-[13px] font-semibold tracking-wide" style={{ color: C.muted }}>Years exp</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-2xl p-5 text-center shadow-sm" style={{ backgroundColor: C.blush, border: `1px solid ${C.soft}` }}>
                  <b className="block font-serif text-[28px] mb-1" style={{ color: C.pink }}>100%</b>
                  <span className="text-[13px] font-semibold tracking-wide" style={{ color: C.muted }}>Confidential</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. WHO IS ORUMA FOR */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: C.pink }}>Who is ORUMA for?</motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-12 leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>മൂന്നു സാഹചര്യത്തിലും ORUMA നിങ്ങൾക്കൊപ്പം</motion.h2>
            
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Pre-Marriage", title: "വിവാഹത്തിന് മുമ്പ്", icon: <Heart size={20} className="text-[#E8185A]" />, img: "/images/new_traditional_couple.jpg", text: "Engagement കഴിഞ്ഞോ? Expectations, family, finance, intimacy — എല്ലാം വിവാഹത്തിന് മുമ്പേ clear ആക്കാം.", imgClass: "object-top" },
                { label: "Newly Married", title: "പുതിയതായി വിവാഹിതർ", icon: <Users size={20} className="text-[#E8185A]" />, img: "/images/new_couch_couple.jpg", text: "ആദ്യ വർഷത്തെ adjustments, in laws, responsibilities — ചെറിയ പ്രശ്നങ്ങൾ വലുതാകുന്നതിന് മുമ്പ് handle ചെയ്യാം.", imgClass: "object-top" },
                { label: "Long Distance", title: "Long Distance", icon: <MapPin size={20} className="text-[#E8185A]" />, img: "/images/new_long_distance.jpg", text: "Gulf, abroad, വേറെ നഗരം — ദൂരെയാണെങ്കിലും connection strong ആക്കാം, ഒരുമിച്ച് താമസിക്കാൻ തയ്യാറെടുക്കാം.", imgClass: "object-top" },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ border: `1px solid ${C.soft}` }}>
                  <div className="h-[220px] sm:h-[200px] w-full bg-gray-100 relative group">
                    <img src={card.img} alt={card.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${card.imgClass || 'object-center'}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A0A14]/80 via-[#2A0A14]/20 to-transparent flex items-end p-5">
                      <span className="text-white font-serif font-bold text-[26px] tracking-wide drop-shadow-md leading-tight">{card.label}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[20px] font-bold mb-3 flex items-center gap-2.5" style={{ color: C.crimson }}>
                      {card.icon} {card.title}
                    </h3>
                    <p className="text-[15px] font-medium leading-relaxed" style={{ color: C.muted }}>{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. TOPICS */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase" style={{ color: C.pink }}>HAVE YOU TALKED ABOUT THESE?</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-5 leading-[1.2] tracking-tight" style={{ color: C.crimson }}>ഒരുമിച്ച് ഒരു ജീവിതം തുടങ്ങുമ്പോൾ...</motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] mb-10 font-medium max-w-[640px] mx-auto leading-relaxed" style={{ color: C.muted }}>താഴെ പറയുന്ന കാര്യങ്ങളെക്കുറിച്ച് മുൻകൂട്ടി സംസാരിച്ചിട്ടുണ്ടോ?</motion.p>
            
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-3">
              {["Communication", "Emotional Connection", "Family & In-Laws", "Money Management", "Career", "Responsibilities", "Parenting", "Intimacy", "Future Planning"].map((chip, i) => (
                <motion.span key={chip} variants={fadeInUp} whileHover={{ scale: 1.05, backgroundColor: C.soft }} className="px-5 py-[12px] rounded-full text-[15px] font-semibold bg-white cursor-default transition-colors shadow-sm" style={{ color: C.crimson, border: `1px solid ${C.soft}` }}>
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. QUOTE / WORRIES */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="bg-white rounded-r-[24px] rounded-l-[12px] p-10 my-10 shadow-sm" style={{ borderLeft: `6px solid ${C.pink}` }}>
              <p className="text-[20px] md:text-[24px] font-serif italic m-0 font-medium leading-relaxed tracking-tight" style={{ color: C.crimson }}>&quot;ഞങ്ങളുടെ relationship നല്ലതാണ്… പക്ഷേ future നെക്കുറിച്ച് എല്ലാം clear ആണോ?&quot;</p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] mb-8 font-semibold" style={{ color: C.muted }}>ഒരുപക്ഷേ നിങ്ങൾ ചിന്തിക്കുന്നുണ്ടാകാം —</motion.p>
            
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-5">
              {[
                "Long distance കഴിഞ്ഞ് ഒരുമിച്ച് ജീവിക്കുമ്പോൾ എന്തൊക്കെ മാറ്റങ്ങൾ വരും?",
                "Career & household responsibilities എങ്ങനെ share ചെയ്യും?",
                "Children & parenting നെക്കുറിച്ച് രണ്ടുപേർക്കും ഒരേ vision ആണോ?",
                "Misunderstandings വലിയ conflicts ആകാതെ എങ്ങനെ handle ചെയ്യും?",
                "Relationship ൽ emotional & physical connection എങ്ങനെ maintain ചെയ്യും?"
              ].map((worry, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start bg-white p-6 rounded-[20px] shadow-sm" style={{ border: `1px solid ${C.soft}` }}>
                  <span className="shrink-0 font-bold text-[20px] mt-0.5" style={{ color: C.pink }}>—</span>
                  <span className="leading-relaxed font-medium text-[15px]" style={{ color: C.text }}>{worry}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-[24px] p-[40px] text-center mt-[48px] shadow-sm" style={{ border: `1px solid ${C.soft}` }}>
              <p className="text-[16px] md:text-[18px] font-bold m-0 leading-relaxed" style={{ color: C.crimson }}>ഇവയെല്ലാം പ്രശ്നം വന്നതിന് ശേഷം സംസാരിക്കേണ്ട കാര്യങ്ങളല്ല — Marriage ന് മുമ്പ് തന്നെ സംസാരിച്ച് മനസ്സിലാക്കേണ്ട കാര്യങ്ങളാണ്.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. WORLDWIDE */}
      <section className="py-[40px] px-4 md:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-[24px] p-[32px_40px] shadow-sm text-center md:text-left" style={{ border: `1px solid ${C.soft}` }}>
            <div className="w-[60px] h-[60px] rounded-full bg-[#FDE8EF] flex items-center justify-center shrink-0">
              <MapPin size={30} className="text-[#E8185A]" />
            </div>
            <p className="text-[16px] m-0 font-medium leading-relaxed" style={{ color: C.muted }}>
              നിങ്ങൾ കേരളത്തിലായാലും, Gulf, UK, Canada, USA, Australia അല്ലെങ്കിൽ ലോകത്തിന്റെ മറ്റേതെങ്കിലും ഭാഗത്തായാലും — partner മറ്റൊരു city/country ൽ ആണെങ്കിലും, രണ്ടുപേർക്കും ഒരുമിച്ച് online ആയി participate ചെയ്യാം.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. VIDEOS */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="text-center mb-12">
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase" style={{ color: C.pink }}>LISTEN &amp; LEARN</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[1.2] tracking-tight" style={{ color: C.crimson }}>A Glimpse Into Your Journey</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="flex justify-center">
            {/* Normal video (16:9) */}
            <motion.div variants={fadeInUp} className="w-full max-w-[800px] aspect-video rounded-[24px] overflow-hidden shadow-lg relative bg-white ring-1 ring-black/5" style={{ border: `6px solid white` }}>
              <iframe
                src="https://www.youtube.com/embed/o7ob0xhcLcY?rel=0&amp;modestbranding=1"
                className="absolute inset-0 w-full h-full rounded-[18px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. WE START WITH YOU (ORIENTATION) */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6" style={{ backgroundColor: C.crimson }}>
        <div className="max-w-[1000px] mx-auto text-center md:text-left">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={stagger}>
              <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase" style={{ color: '#FBBDD0' }}>WE DON&apos;T START WITH THE COURSE</motion.div>
              <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-6 leading-[1.2] text-white tracking-tight">ഞങ്ങൾ തുടങ്ങുന്നത് നിങ്ങളെ മനസ്സിലാക്കിക്കൊണ്ടാണ്.</motion.h2>
              <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] mb-8 font-medium leading-relaxed" style={{ color: C.blush }}>
                Program നേരിട്ട് videos കൊണ്ട് തുടങ്ങുന്നില്ല. ആദ്യം ഒരു <strong className="text-white font-bold bg-[#E8185A] px-2.5 py-1 rounded-md ml-1 shadow-sm">One to One Orientation Session</strong>. ഈ session ൽ നിങ്ങളുടെ —
              </motion.p>
              
              <motion.div variants={stagger} className="flex flex-col gap-4 mt-6 mb-8 text-left pl-4 md:pl-0">
                {["Relationship Stage", "Current Concerns", "Expectations & Challenges", "Future Goals"].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-center text-[15px] md:text-[17px] font-semibold text-white">
                    <span className="font-bold flex items-center justify-center w-6 h-6 rounded-full bg-white/10" style={{ color: C.pink }}><CheckCircle2 size={14} /></span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] font-medium m-0 mt-8 leading-relaxed" style={{ color: C.blush }}>
                — എന്നിവ മനസ്സിലാക്കി, നിങ്ങൾക്ക് അനുയോജ്യമായ structured journey എങ്ങനെ work ചെയ്യുമെന്ന് വ്യക്തമായി guide ചെയ്യും.
              </motion.p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="hidden md:block w-full aspect-square rounded-[24px] overflow-hidden border-[6px] border-white/10 shadow-2xl relative bg-[#a04a63]">
              <img src="/images/ranjini_desk.jpg" alt="Therapist talking" className="w-full h-full object-cover mix-blend-overlay opacity-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 11. THE JOURNEY (COMPONENTS) */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase" style={{ color: C.pink }}>THE ORUMA JOURNEY</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-5 leading-[1.2] tracking-tight" style={{ color: C.crimson }}>ഒരു Couple Journey</motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] mb-12 font-medium max-w-[640px] mx-auto leading-relaxed" style={{ color: C.muted }}>One to One Orientation കഴിഞ്ഞ്, step by step ആയി guide ചെയ്യുന്ന ഒരു structured program.</motion.p>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { icon: <PlayCircle size={28} className="text-[#E8185A]" strokeWidth={1.5} />, label: "Videos" },
                { icon: <CheckCircle2 size={28} className="text-[#E8185A]" strokeWidth={1.5} />, label: "Reflections" },
                { icon: <Heart size={28} className="text-[#E8185A]" strokeWidth={1.5} />, label: "Couple Activities" },
                { icon: <CheckCircle2 size={28} className="text-[#E8185A]" strokeWidth={1.5} />, label: "Practical Exercises" },
                { icon: <MessageCircle size={28} className="text-[#E8185A]" strokeWidth={1.5} />, label: "Guided Live Sessions" },
                { icon: <Users size={28} className="text-[#E8185A]" strokeWidth={1.5} />, label: "Private WhatsApp Group" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(123,11,46,0.06)' }} className="bg-white rounded-[24px] p-8 shadow-sm transition-all text-center flex flex-col items-center justify-center gap-4" style={{ border: `1px solid ${C.soft}` }}>
                  <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#FDE8EF]">
                    {item.icon}
                  </div>
                  <span className="text-[15px] font-bold tracking-wide" style={{ color: C.crimson }}>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center flex-wrap gap-4 mt-[56px] font-serif text-[24px] md:text-[28px] font-bold" style={{ color: C.pink }}>
              <span>Learn</span><span className="font-normal italic" style={{ color: '#D4A5B5' }}>→</span>
              <span>Reflect</span><span className="font-normal italic" style={{ color: '#D4A5B5' }}>→</span>
              <span>Discuss</span><span className="font-normal italic" style={{ color: '#D4A5B5' }}>→</span>
              <span>Practise</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 12. WHY CHOOSE ORUMA */}
      <section id="why" className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: C.pink }}>Why choose ORUMA?</motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-5 leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>എന്തുകൊണ്ട് ORUMA?</motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] text-center max-w-[700px] mx-auto mb-12 font-medium leading-relaxed" style={{ color: C.muted }}>ഇത് വെറും ഒരു online course അല്ല. Generic marriage tips അല്ല — നിങ്ങൾ രണ്ടുപേർക്കും വേണ്ടി personalise ചെയ്ത ഒരു journey.</motion.p>
            
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <CheckCircle2 size={24} className="text-[#E8185A]" />, title: "Qualified Therapists", text: "Trained psychologists & relationship counsellors ആണ് ഓരോ session ഉം guide ചെയ്യുന്നത്." },
                { icon: <CheckCircle2 size={24} className="text-[#E8185A]" />, title: "Personalised Journey", text: "Orientation ൽ നിങ്ങളെ മനസ്സിലാക്കിയ ശേഷം മാത്രം program plan ചെയ്യുന്നു." },
                { icon: <MessageCircle size={24} className="text-[#E8185A]" />, title: "നമ്മുടെ ഭാഷയിൽ", text: "Malayalam ൽ, Kerala family culture മനസ്സിലാക്കി — comfortable ആയി സംസാരിക്കാം." },
                { icon: <Users size={24} className="text-[#E8185A]" />, title: "Both Partners Together", text: "രണ്ടുപേരും ഒരുമിച്ച് പഠിക്കുന്നു, സംസാരിക്കുന്നു, practise ചെയ്യുന്നു." },
                { icon: <Shield size={24} className="text-[#E8185A]" />, title: "100% Confidential", text: "നിങ്ങളുടെ കാര്യങ്ങൾ നിങ്ങൾക്കിടയിൽ മാത്രം. No judgement." },
                { icon: <MapPin size={24} className="text-[#E8185A]" />, title: "Anywhere, Anytime", text: "Kerala, Gulf, abroad — online ആയി എവിടെ നിന്നും join ചെയ്യാം." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow" style={{ border: `1px solid ${C.soft}` }}>
                  <div className="w-[56px] h-[56px] rounded-[18px] flex items-center justify-center mb-5" style={{ backgroundColor: C.blush }}>{item.icon}</div>
                  <h3 className="text-[16px] md:text-[18px] font-bold mb-3" style={{ color: C.crimson }}>{item.title}</h3>
                  <p className="text-[15px] font-medium leading-relaxed" style={{ color: C.muted }}>{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* 13. WHAT MAKES DIFFERENT */}
      <section className="py-[40px] md:py-[60px] px-4 md:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase text-center md:text-left" style={{ color: C.pink }}>WHAT MAKES THIS DIFFERENT</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-10 leading-[1.2] text-center md:text-left tracking-tight" style={{ color: C.crimson }}>ഇത് വെറും ഒരു online course അല്ല.</motion.h2>
            
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 mt-6">
              <div className="flex gap-4 bg-white/80 rounded-[20px] p-6 items-center justify-center md:justify-start" style={{ border: `1px solid ${C.soft}` }}>
                <span className="text-[16px] line-through font-medium" style={{ color: '#D4A5B5' }}>Generic marriage tips</span>
              </div>
              <div className="flex gap-4 bg-white rounded-[20px] p-8 items-center justify-center shadow-sm text-center md:text-left relative overflow-hidden" style={{ border: `1px solid ${C.pink}` }}>
                <div className="absolute inset-0 bg-[#FDE8EF]/20 pointer-events-none"></div>
                <span className="text-[15px] md:text-[17px] font-bold leading-relaxed relative z-10" style={{ color: C.crimson }}>നിങ്ങൾ കേൾക്കും <span className="text-[#D4A5B5] mx-1">→</span> ചിന്തിക്കും <span className="text-[#D4A5B5] mx-1">→</span> Partner നൊപ്പം സംസാരിക്കും <span className="text-[#D4A5B5] mx-1">→</span> Activities ചെയ്യും <span className="text-[#D4A5B5] mx-1">→</span> Therapist guidance നൊപ്പം apply ചെയ്യും</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-[24px] p-[40px] mt-10 text-center shadow-sm" style={{ border: `1px solid ${C.soft}` }}>
              <p className="text-[16px] md:text-[18px] font-bold m-0 leading-relaxed" style={{ color: C.crimson }}>ലക്ഷ്യം: Better Understanding · Better Communication · Better Preparation · A Stronger Future Together.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 14. BENEFITS */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6" style={{ backgroundColor: C.blush }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: C.pink }}>What you&apos;ll gain</motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-12 leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>ORUMA join ചെയ്താൽ നിങ്ങൾക്ക് കിട്ടുന്നത്</motion.h2>
            
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "പരസ്പരം expectations clear ആയി അറിയാം — surprises ഇല്ലാതെ ജീവിതം തുടങ്ങാം",
                "Arguments ഇല്ലാതെ difficult topics സംസാരിക്കാനുള്ള communication skills",
                "Parents & in laws നൊപ്പം healthy boundaries maintain ചെയ്യാനുള്ള clarity",
                "Money, career, household — ഒരുമിച്ച് plan ചെയ്യാനുള്ള practical tools",
                "Misunderstandings വലിയ conflicts ആകാതെ handle ചെയ്യാനുള്ള വഴികൾ",
                "Emotional & physical intimacy യെക്കുറിച്ച് safe space ൽ open ആയി സംസാരിക്കാം",
                "Long distance ൽ നിന്ന് ഒരുമിച്ച് ജീവിക്കുന്നതിലേക്കുള്ള smooth transition",
                "ഒരു shared vision — Better Understanding, Better Communication, A Stronger Future Together"
              ].map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-5 items-start bg-white p-6 rounded-[20px] shadow-sm border border-white hover:border-[#F5C6D0] transition-colors">
                  <div className="shrink-0 mt-0.5" style={{ color: C.pink }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-[16px] font-semibold leading-relaxed" style={{ color: C.text }}>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 15. BONUS OFFER */}
      <section id="bonus" className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="rounded-[32px] p-6 md:p-14 relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(160deg, #7B0C2E, #a8164a)' }}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#ffd27a] text-[#5a0820] font-black text-[14px] px-5 py-2.5 rounded-full mb-6 shadow-sm">
              <Star size={16} fill="currentColor" /> Exclusive Joining Bonus
            </motion.div>
            <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#ffd27a' }}>Free with ORUMA</motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[34px] md:text-[44px] font-bold mb-12 leading-[1.2] text-white tracking-tight">Workshop ൽ join ചെയ്യുന്നവർക്ക് ഈ bonuses free!</motion.h2>
            
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-5 mb-12">
              {[
                { icon: <CheckCircle2 size={28} className="text-[#ffd27a]" />, title: "ORUMA Couple Workbook", text: "Reflections, conversation prompts, exercises — ഒരുമിച്ച് fill ചെയ്യാനുള്ള printable workbook." },
                { icon: <MessageCircle size={28} className="text-[#ffd27a]" />, title: "100 Couple Conversation Cards", text: "വിവാഹത്തിന് മുമ്പ് ചോദിക്കേണ്ട ചോദ്യങ്ങൾ — weekly date night ന്." },
                { icon: <CheckCircle2 size={28} className="text-[#ffd27a]" />, title: "Couple Budget Planner", text: "Joint finance, savings goals, monthly budget — ready to use template." },
                { icon: <Calendar size={28} className="text-[#ffd27a]" />, title: "30 Day Connection Challenge", text: "ദിവസവും 10 മിനിറ്റ് — bond strong ആക്കാനുള്ള small activities." },
                { icon: <PlayCircle size={28} className="text-[#ffd27a]" />, title: "Session Recordings Access", text: "Live sessions miss ആയാലും later കാണാം." },
                { icon: <Users size={28} className="text-[#ffd27a]" />, title: "1 Follow-up Check-in Call", text: "Program കഴിഞ്ഞ് ഒരു മാസത്തിന് ശേഷം therapist നൊപ്പം ഒരു follow up." }
              ].map((bonus, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white/10 border border-white/20 rounded-[24px] p-6 flex gap-5 backdrop-blur-md hover:bg-white/15 transition-colors">
                  <div className="shrink-0 mt-1">{bonus.icon}</div>
                  <div>
                    <h3 className="text-white text-[15px] md:text-[17px] font-bold mb-2">{bonus.title}</h3>
                    <p className="text-white/85 text-[15px] leading-relaxed font-medium">{bonus.text}</p>
                    <span className="inline-block mt-4 bg-[#ffd27a] text-[#5a0820] font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">Free Bonus</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-[#7B0B2E] font-bold text-[15px] md:text-[19px] py-4 px-12 rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
                Bonuses ഉറപ്പാക്കൂ — ഇപ്പോൾ ബുക്ക് ചെയ്യൂ <ArrowRight size={20} />
              </a>
              <p className="text-[14px] text-white/70 mt-5 font-medium tracking-wide">*Limited seats per batch. Offer valid for this batch only.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 16. TESTIMONIALS */}
      <section id="stories" className="py-[50px] md:py-[80px] px-4 md:px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: C.pink }}>Couple Stories</motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-12 leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>ORUMA യിലൂടെ കടന്നുപോയ couples പറയുന്നു</motion.h2>
            
            <motion.div variants={stagger} className="flex overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 md:overflow-visible md:pb-0" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              {[
                { text: "\"Engagement കഴിഞ്ഞ് ഞങ്ങൾക്ക് ഒരുപാട് doubts ഉണ്ടായിരുന്നു. Orientation കഴിഞ്ഞപ്പോൾ തന്നെ ഒരുപാട് clarity കിട്ടി.\"", initial: "A", name: "Anjali & Vishnu", details: "Pre marriage" },
                { text: "\"Gulf ൽ നിന്ന് നാട്ടിലേക്ക് വന്നപ്പോൾ ഉള്ള adjustments ന് ഈ program വലിയ help ആയി.\"", initial: "S", name: "Sruthy & Rahul", details: "Long distance" },
                { text: "\"In laws വിഷയം സംസാരിക്കുമ്പോൾ എപ്പോഴും വഴക്കായിരുന്നു. ഇപ്പോൾ calm ആയി സംസാരിക്കാൻ പഠിച്ചു.\"", initial: "R", name: "Reshma & Kiran", details: "Newly married" },
                { text: "\"Couple workbook ലെ exercises ഞങ്ങൾ ഇപ്പോഴും weekend ൽ ചെയ്യാറുണ്ട്.\"", initial: "N", name: "Neethu & Amal", details: "Pre marriage" },
                { text: "\"Money management നെക്കുറിച്ച് ആദ്യമായി open ആയി സംസാരിച്ചത് ഈ program ലാണ്.\"", initial: "J", name: "Jiji & Thomas", details: "Newly married" },
                { text: "\"Therapist വളരെ friendly ആയിരുന്നു. Judgement ഇല്ലാതെ എല്ലാം സംസാരിക്കാൻ പറ്റി.\"", initial: "M", name: "Meera & Haris", details: "Long distance" }
              ].map((t, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white rounded-[24px] p-8 flex flex-col gap-5 min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-start shadow-sm hover:shadow-md transition-shadow" style={{ border: `1px solid ${C.soft}` }}>
                  <div className="flex gap-1 text-[#E8185A]">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-[16px] font-medium leading-relaxed italic" style={{ color: C.text }}>{t.text}</p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                    <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center font-bold text-[16px] md:text-[18px]" style={{ backgroundColor: C.blush, color: C.crimson }}>{t.initial}</div>
                    <div className="flex flex-col">
                      <b className="text-[15px]" style={{ color: C.crimson }}>{t.name}</b>
                      <small className="text-[13px] font-semibold" style={{ color: C.muted }}>{t.details}</small>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 17. HOW IT WORKS */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: C.pink }}>How it works</motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-12 leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>4 simple steps</motion.h2>
            
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-[#F5C6D0] z-0 border-dashed border-b-2"></div>
              {[
                { title: "Book Orientation", text: "One to One Orientation Session ബുക്ക് ചെയ്യൂ." },
                { title: "Meet Your Therapist", text: "Relationship stage, concerns, goals മനസ്സിലാക്കുന്നു." },
                { title: "Start ORUMA Journey", text: "Videos, activities, live sessions, workbook." },
                { title: "Grow Together", text: "Follow-up support & private WhatsApp group." },
              ].map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white rounded-[24px] p-8 relative z-10 text-center shadow-sm hover:-translate-y-1 transition-transform" style={{ border: `1px solid ${C.soft}` }}>
                  <div className="w-[48px] h-[48px] mx-auto rounded-full flex items-center justify-center font-bold text-white mb-5 text-[16px] md:text-[18px] shadow-md" style={{ backgroundColor: C.crimson }}>{i + 1}</div>
                  <h3 className="text-[16px] md:text-[18px] font-bold mb-3" style={{ color: C.crimson }}>{step.title}</h3>
                  <p className="text-[15px] font-medium leading-relaxed" style={{ color: C.muted }}>{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 18. COACH / THERAPIST */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase text-center" style={{ color: C.pink }}>MEET YOUR THERAPIST</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-[40px] leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>Why Couples Trust Ranjini Vijith</motion.h2>
            
            <motion.div variants={fadeInUp} className="bg-white rounded-[32px] p-[40px] md:p-[56px] text-center shadow-lg border border-white">
              <div className="w-[240px] mx-auto p-3 rounded-[24px] relative mb-[40px]" style={{ backgroundColor: C.blush }}>
                <div className="aspect-[4/5] relative rounded-[16px] overflow-hidden shadow-inner">
                  <Image src="/images/ranjini_sofa.jpg" alt="Ranjini Vijith" fill sizes="(max-width: 768px) 100vw, 240px" className="object-cover object-top" />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full py-[10px] px-4 md:px-6 text-[14px] font-bold whitespace-nowrap shadow-lg flex items-center gap-2" style={{ color: C.crimson, border: `1px solid ${C.soft}` }}>
                  <Star size={16} className="text-[#E8185A]" fill="currentColor" /> <b className="font-black text-[15px]" style={{ color: C.pink }}>35,000+</b> Helped
                </div>
              </div>

              <h3 className="font-serif text-[30px] font-bold mb-2 mt-4" style={{ color: C.crimson }}>Ranjini Vijith</h3>
              <div className="text-[15px] font-bold mb-8 tracking-wide uppercase" style={{ color: C.pink }}>Founder, ORUMA Healing Therapy Centre</div>
              
              <div className="text-left flex flex-col gap-4 mt-8 bg-[#FDE8EF]/40 p-8 rounded-[24px]" style={{ border: `1px solid ${C.soft}` }}>
                {["Psychologist", "Clinical Hypnotherapist", "Family Therapist", "Founder — ORUMA Healing Therapy Centre"].map((cred, i) => (
                  <div key={i} className="flex gap-4 items-center text-[16px] font-semibold" style={{ color: C.text }}>
                    <CheckCircle2 size={18} className="text-[#E8185A]" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 19. FAQ */}
      <section id="faq" className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase text-center" style={{ color: C.pink }}>YOU MAY HAVE QUESTIONS</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-12 leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>സാധാരണ ചോദ്യങ്ങൾ (FAQ)</motion.h2>

            <motion.div variants={stagger} className="space-y-4">
              {faqs.map((f, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white rounded-[20px] shadow-sm transition-all hover:shadow-md" style={{ border: `1px solid ${C.soft}` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left font-bold text-[15px] md:text-[17px] rounded-[20px]"
                    style={{ color: C.crimson }}>
                    {f.q}
                    <span className={`text-[24px] font-light transition-transform duration-300 ml-3 flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''}`} style={{ color: C.pink }}>
                      +
                    </span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                    <p className="px-4 md:px-6 pb-6 pt-0 text-[15.5px] m-0 font-medium leading-relaxed" style={{ color: C.muted }}>{f.a}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 20. PRICING / BOOKING */}
      <section id="book" className="py-[50px] md:py-[80px] px-4 md:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase text-center" style={{ color: C.pink }}>YOUR NEXT STEP</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-6 leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>Book Your One to One Orientation</motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] mb-12 font-medium leading-relaxed text-center max-w-[640px] mx-auto" style={{ color: C.muted }}>
              നിങ്ങളുടെ relationship നെക്കുറിച്ച് സംസാരിക്കാനും, program എങ്ങനെ നിങ്ങളെ guide ചെയ്യുമെന്ന് മനസ്സിലാക്കാനും — ഇപ്പോൾ തന്നെ session book ചെയ്യൂ.
            </motion.p>

            <motion.div variants={fadeInUp} className="rounded-[32px] p-[48px_32px] md:p-[64px_48px] text-center shadow-[0_20px_60px_rgba(123,11,46,0.15)] relative overflow-hidden" style={{ backgroundColor: C.crimson }}>
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20 -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: C.pink }}></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none opacity-10 translate-y-1/2 -translate-x-1/3" style={{ backgroundColor: C.pink }}></div>

              <div className="relative z-10 max-w-[500px] mx-auto">
                <div className="text-[13px] font-bold tracking-[0.18em] uppercase mb-6 inline-block bg-white/10 px-5 py-2 rounded-full" style={{ color: '#FBBDD0' }}>ORUMA ORIENTATION SESSION</div>
                <h3 className="font-serif text-[26px] sm:text-[30px] md:text-[36px] font-bold mb-[20px] text-white">One to One Orientation</h3>
                <div className="font-serif text-[64px] font-bold text-white leading-none">₹999</div>
                <div className="text-[15px] font-medium mb-10 mt-5 bg-black/20 inline-block px-5 py-1.5 rounded-full text-white/90">One time · 60 minute private session</div>
                
                <div className="text-left flex flex-col gap-5 my-[40px] text-[16px] font-medium text-white/95 bg-white/10 p-8 rounded-[24px] backdrop-blur-sm border border-white/15">
                  {[
                    "60 min private session, online",
                    "Understand your relationship stage & goals",
                    "A guided walkthrough of your personalized journey",
                    "Both partners can join, from anywhere"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircle2 size={20} className="text-[#FBBDD0] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                
                <motion.a href={WA} target="_blank" rel="noopener noreferrer" 
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-white font-bold text-[16px] md:text-[18px] py-[22px] rounded-full shadow-[0_12px_28px_rgba(232,24,90,0.35)] text-center flex items-center justify-center gap-2"
                  style={{ backgroundColor: C.pink }}>
                  Book My One to One Session <ArrowRight size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 21. FOOTER */}
      <footer className="bg-[#4A0A1F] text-[#f3d6df] pt-[80px] pb-[100px] md:pb-[80px] px-4 md:px-6 font-medium mt-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12">
            <div>
              <h4 className="text-white font-serif text-[28px] font-bold mb-5">ORUMA</h4>
              <p className="text-[15px] leading-relaxed max-w-[360px] opacity-90">Pre marriage &amp; couple wellbeing. ORUMA — A Marriways Couple Workshop.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] md:text-[17px] mb-6">Contact</h4>
              <a href="tel:+918157039987" className="block mb-4 hover:text-white transition-colors text-[15px] flex items-center gap-2">Phone: +91 81570 39987</a>
              <a href="mailto:renjinivijith9987@gmail.com" className="block hover:text-white transition-colors text-[15px] flex items-center gap-2">Email: renjinivijith9987@gmail.com</a>
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] md:text-[17px] mb-6">Follow</h4>
              <a href="#" className="block mb-4 hover:text-white transition-colors text-[15px]">Instagram</a>
              <a href="#" className="block mb-4 hover:text-white transition-colors text-[15px]">Facebook</a>
              <a href="#" className="block hover:text-white transition-colors text-[15px]">YouTube</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-[60px] pt-[30px] text-center text-[13px] opacity-70">
            © 2026 Marriways. All rights reserved. · Privacy Policy · Terms
          </div>
        </div>
      </footer>

      {/* 22. STICKY BAR */}
      <div className="fixed left-0 right-0 bottom-0 bg-white/95 backdrop-blur-md p-[16px_24px] flex items-center justify-between z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t pl-[96px] md:pl-6"
        style={{ borderColor: C.soft }}>
        <div className="flex flex-col leading-[1.2]">
          <span className="font-serif font-bold text-[22px]" style={{ color: C.crimson }}>₹999</span>
          <span className="text-[12px] font-semibold" style={{ color: C.muted }}>One to One Orientation</span>
        </div>
        <motion.a href={WA} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="text-white font-bold text-[16px] py-[14px] px-8 rounded-full flex-shrink-0 shadow-[0_4px_14px_rgba(232,24,90,0.3)] transition-shadow"
          style={{ backgroundColor: C.pink }}>
          Book Now →
        </motion.a>
      </div>

      {/* 23. WHATSAPP FLOATING ICON */}
      <a href={WA} target="_blank" rel="noopener noreferrer" 
        className="fixed left-4 bottom-[20px] md:bottom-6 z-[70] w-[64px] h-[64px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_24px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
        <svg viewBox="0 0 32 32" className="w-[36px] h-[36px] fill-white">
          <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.3.6 4.5 1.8 6.4L3 29l7-1.8c1.8 1 3.9 1.5 6 1.5 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6C5.2 9.9 10 5.2 16 5.2s10.8 4.7 10.8 10.6S22 26.4 16 26.4zm5.9-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2s0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6s0-.4 0-.6-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z"/>
        </svg>
      </a>

    </div>
  );
}
