"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { MapPin, Heart, Star, Users, MessageCircle, Shield, ArrowRight, CheckCircle2, Clock, Calendar, PlayCircle } from 'lucide-react';
import RazorpayButton from '@/components/RazorpayButton';

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
  blush: '#FDE8EF',  // Soft pink background
  crimson: '#7B0B2E',  // Dark crimson text & headings
  pink: '#E8185A',  // Vibrant pink for buttons/accents
  soft: '#F5C6D0',  // Soft pink for borders
  text: '#2A0A14',  // Very dark ink for main text
  muted: '#5C1528',  // Muted crimson for paragraphs
};

const WA = "https://wa.me/918157039987?text=I%20want%20to%20book%20a%201:1%20MARRyWISE%20Session";
const WA_WEBINAR = "https://wa.me/918157039987?text=I%20want%20to%20register%20for%20the%20webinar%20to%20know%20more%20about%20the%20Oruma%20/%20Marrywise%20program.";

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
      <header className="relative z-40 border-b shadow-sm transition-all duration-300" style={{ backgroundColor: '#7B0B2E', borderColor: 'rgba(245, 198, 208, 0.2)' }}>
        <div className="max-w-[1080px] mx-auto px-4 md:px-6 flex items-center justify-between h-[44px] md:h-[48px]">
          <a href="#top" className="flex items-center no-underline group">
            <Image
              src="/images/together_gently_logo.png"
              alt="Together, Gently"
              width={120}
              height={32}
              priority
              className="h-6 md:h-7 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <nav className="hidden md:flex items-center gap-5 md:gap-6 font-medium">
            <a href="#about" className="text-[13px] text-[#FDE8EF] hover:text-white transition-colors">About</a>
            <a href="#why" className="text-[13px] text-[#FDE8EF] hover:text-white transition-colors">Why ORUMA</a>
            <a href="#bonus" className="text-[13px] text-[#FDE8EF] hover:text-white transition-colors">Bonuses</a>
            <a href="#stories" className="text-[13px] text-[#FDE8EF] hover:text-white transition-colors">Stories</a>
            <a href="#faq" className="text-[13px] text-[#FDE8EF] hover:text-white transition-colors">FAQ</a>
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

            <motion.div variants={fadeInUp} className="mb-10 w-full flex flex-col items-center">
              <h2 className="text-[20px] md:text-[24px] font-bold mb-6 text-center tracking-tight leading-relaxed max-w-[600px]" style={{ color: C.crimson }}>
                വിവാഹത്തിന് മുമ്പ് നിങ്ങൾ ഈ കാര്യങ്ങളൊക്കെ സംസാരിച്ചിട്ടുണ്ടോ?
              </h2>
              <div className="w-full max-w-[320px] mx-auto rounded-[24px] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] border-[4px] border-white bg-black">
                <video
                  src="/videos/oruma_short.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full aspect-[9/16] object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full shadow-sm mb-8 font-semibold text-[13px] tracking-wide" style={{ border: `1px solid ${C.soft}`, color: C.crimson }}>
              <Star size={14} className="text-[#E8185A]" fill="currentColor" />
              MARRYWISE
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-[32px] sm:text-[40px] md:text-[52px] font-serif font-bold leading-[1.2] mb-[16px] max-w-[700px] mx-auto tracking-tight" style={{ color: C.crimson }}>
              Build a Healthier, Happier Relationship
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-[16px] md:text-[20px] font-bold mb-[24px] tracking-wide uppercase" style={{ color: C.pink }}>
              Guidance | Clarity | Lasting Change
            </motion.p>

            <motion.p variants={fadeInUp} className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.7] max-w-[640px] mx-auto mb-[40px] font-medium" style={{ color: C.muted }}>
              Relationship &amp; Marriage-നെ കുറിച്ച് practical guidance നേടാനും, നിങ്ങളുടെ journey-ന് അനുയോജ്യമായ next step തിരഞ്ഞെടുക്കാനും.
            </motion.p>

            {/* Individual photos have been moved below */}

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
      <section id="about" className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white scroll-mt-[80px]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.div variants={stagger}>
              <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: C.pink }}>About ORUMA</motion.p>
              <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-6 leading-[1.2] tracking-tight" style={{ color: C.crimson }}>ORUMA — സന്തോഷമുള്ള ദാമ്പത്യത്തിലേക്കുള്ള വഴി</motion.h2>
              <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] leading-[1.7] mb-10 font-medium max-w-[700px] mx-auto" style={{ color: C.muted }}>
                ORUMA ഒരു couple focused psychological support platform ആണ്. വിവാഹത്തിന് മുമ്പും ശേഷവും couples ന് വേണ്ട clarity, communication skills, emotional connection എന്നിവ qualified therapists ന്റെ guidance ലൂടെ നൽകുന്നു. <b className="font-bold" style={{ color: C.crimson }}>ORUMA</b> ഞങ്ങളുടെ signature couple workshop ആണ്.
              </motion.p>

              <motion.div variants={fadeInUp} className="mb-10 w-full max-w-[500px] mx-auto rounded-[24px] overflow-hidden shadow-md">
                <Image src="/images/ranjini_speaking.jpg" alt="Ranjini Speaking" width={500} height={400} className="w-full h-auto" />
              </motion.div>

              <motion.div variants={stagger} className="grid grid-cols-3 gap-4 max-w-[600px] mx-auto">
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

            <motion.div variants={fadeInUp} className="mt-[50px] w-full max-w-[500px] mx-auto rounded-[24px] overflow-hidden shadow-md">
              <Image src="/images/new_traditional_couple.jpg" alt="Pre marriage couple" width={500} height={600} className="w-full h-auto" />
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-[40px] w-full max-w-[600px] mx-auto rounded-[24px] overflow-hidden shadow-md">
            <Image src="/images/new_long_distance.jpg" alt="Long distance couple" width={600} height={400} className="w-full h-auto" />
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
            {/* Native Video */}
            <motion.div variants={fadeInUp} className="w-full max-w-[800px] aspect-video rounded-[24px] overflow-hidden shadow-lg relative bg-white ring-1 ring-black/5" style={{ border: `6px solid white` }}>
              <video
                src="/videos/glimpse.mp4"
                className="w-full h-full object-cover rounded-[18px]"
                autoPlay
                loop
                muted
                playsInline
                controls
              ></video>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. WE START WITH YOU (ORIENTATION) */}
      <section className="py-[50px] md:py-[80px] px-4 md:px-6" style={{ backgroundColor: C.crimson }}>
        <div className="max-w-[1000px] mx-auto text-center md:text-left">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={stagger}>
              <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-4 tracking-[0.15em] uppercase" style={{ color: '#FBBDD0' }}>WE DON&apos;T START WITH THE PROGRAM</motion.div>
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

            <motion.div variants={fadeInUp} className="hidden md:block w-full aspect-square rounded-[24px] overflow-hidden border-[6px] border-white/10 shadow-2xl relative">
              <Image src="/images/ranjini_desk.jpg" alt="Therapist talking" fill className="object-cover" />
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
              <span>Practice </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 12. WHY CHOOSE ORUMA */}
      <section id="why" className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white scroll-mt-[80px]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-[13px] font-bold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: C.pink }}>Why choose ORUMA?</motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-5 leading-[1.2] text-center tracking-tight" style={{ color: C.crimson }}>എന്തുകൊണ്ട് ORUMA?</motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] md:text-[17px] text-center max-w-[700px] mx-auto mb-12 font-medium leading-relaxed" style={{ color: C.muted }}>ഇത് വെറും ഒരു online program അല്ല. Generic marriage tips അല്ല — നിങ്ങൾ രണ്ടുപേർക്കും വേണ്ടി personalise ചെയ്ത ഒരു journey.</motion.p>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <CheckCircle2 size={24} className="text-[#E8185A]" />, title: "Qualified Therapists", text: "Trained psychologists & relationship counsellors ആണ് ഓരോ session ഉം guide ചെയ്യുന്നത്." },
                { icon: <CheckCircle2 size={24} className="text-[#E8185A]" />, title: "Personalised Journey", text: "Orientation ൽ നിങ്ങളെ മനസ്സിലാക്കിയ ശേഷം മാത്രം program plan ചെയ്യുന്നു." },
                { icon: <MessageCircle size={24} className="text-[#E8185A]" />, title: "നമ്മുടെ ഭാഷയിൽ", text: "Malayalam ൽ, Kerala family culture മനസ്സിലാക്കി — comfortable ആയി സംസാരിക്കാം." },
                { icon: <Users size={24} className="text-[#E8185A]" />, title: "Both Partners Together", text: "രണ്ടുപേരും ഒരുമിച്ച് പഠിക്കുന്നു, സംസാരിക്കുന്നു, practice ചെയ്യുന്നു." },
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
            <motion.h2 variants={fadeInUp} className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-10 leading-[1.2] text-center md:text-left tracking-tight" style={{ color: C.crimson }}>ഇത് വെറും ഒരു online program അല്ല.</motion.h2>

            <motion.div variants={fadeInUp} className="mb-[40px] w-full max-w-[500px] mx-auto rounded-[24px] overflow-hidden shadow-md">
              <Image src="/images/ranjini_pillow.jpg" alt="Ranjini Vijith" width={500} height={600} className="w-full h-auto" />
            </motion.div>

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

      {/* 14.5 NEW COUPLE IMAGE */}
      <section className="py-[30px] px-4 md:px-6 flex justify-center bg-white">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Image
            src="/images/ranjini_desk.jpg"
            alt="Ranjini Vijith Group Therapy"
            width={600}
            height={750}
            className="w-full h-auto rounded-[24px] shadow-lg"
          />
        </motion.div>
      </section>

      {/* 15. BONUS OFFER */}
      <section id="bonus" className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white scroll-mt-[80px]">
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
      <section id="stories" className="py-[50px] md:py-[80px] px-4 md:px-6 scroll-mt-[80px]">
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
      <section id="faq" className="py-[50px] md:py-[80px] px-4 md:px-6 bg-white scroll-mt-[80px]">
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
      <section id="book" className="py-[60px] md:py-[100px] px-4 md:px-6 bg-white relative">
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-block text-[13px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{ color: C.pink, borderColor: C.soft }}>YOUR NEXT STEP</div>
              <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-6 leading-[1.2] tracking-tight" style={{ color: C.crimson }}>Choose Your MarryWise Journey</h2>
              <p className="text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[600px] mx-auto" style={{ color: C.muted }}>
                നിങ്ങളുടെ relationship &amp; marriage journey-ൽ നിങ്ങൾക്ക് ആവശ്യമുള്ള option തിരഞ്ഞെടുക്കാം.
              </p>
            </motion.div>

            {/* TWO OPTIONS */}
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 mb-[80px]">
              
              {/* Option 1: Webinar */}
              <motion.div variants={fadeInUp} className="rounded-[32px] p-8 md:p-10 text-center shadow-[0_20px_50px_rgba(123,11,46,0.15)] flex flex-col relative overflow-hidden" style={{ backgroundColor: C.crimson }}>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none opacity-20 -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: C.pink }}></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[60px] pointer-events-none opacity-10 translate-y-1/2 -translate-x-1/3" style={{ backgroundColor: C.pink }}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8">
                    <span className="bg-white/10 text-white/90 text-[12px] font-bold uppercase tracking-widest px-5 py-2 rounded-full border border-white/10">Option 1</span>
                  </div>
                  
                  <h3 className="font-serif text-[28px] md:text-[32px] font-bold mb-2 text-white">MARRYWISE WEBINAR</h3>
                  <div className="text-[13px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#FBBDD0' }}>Learn &amp; Explore</div>
                  
                  <div className="font-serif text-[56px] md:text-[64px] font-bold tracking-tight mb-8 leading-none text-white drop-shadow-md">₹499</div>
                  
                  <p className="text-[15px] md:text-[16px] font-medium mb-10 leading-relaxed text-left text-white/90 flex-grow">
                    Relationship &amp; Marriage-നെ കുറിച്ച് കൂടുതൽ learn ചെയ്യാനും, MarryWise Program എന്താണെന്ന് മനസ്സിലാക്കാനും, ഇത് നിങ്ങൾക്ക് suitable ആണോ എന്ന് decide ചെയ്യാനും webinar-ൽ പങ്കെടുക്കാം.
                  </p>
                  
                  <div className="bg-black/20 rounded-[20px] p-6 mb-10 text-left border border-white/5 backdrop-blur-sm">
                    <div className="font-bold text-[14px] mb-3 text-white flex items-center gap-2"><Star size={16} className="text-[#FBBDD0]"/> Best for you if:</div>
                    <p className="text-[14.5px] font-medium leading-relaxed m-0 text-white/80">ആദ്യം program മനസ്സിലാക്കി, ശേഷം നിങ്ങളുടെ next step decide ചെയ്യാൻ ആഗ്രഹിക്കുന്നുവെങ്കിൽ.</p>
                  </div>
                  
                  <RazorpayButton 
                    programId="marrywise-webinar" 
                    programName="MarryWise Webinar"
                    className="w-full text-white font-bold text-[16px] py-[20px] rounded-full shadow-[0_10px_25px_rgba(232,24,90,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 border border-[#ff4d85]/30"
                    style={{ backgroundColor: C.pink }}>
                    JOIN ₹499 WEBINAR <ArrowRight size={20} />
                  </RazorpayButton>
                </div>
              </motion.div>

              {/* Option 2: 1-to-1 */}
              <motion.div variants={fadeInUp} className="rounded-[32px] p-8 md:p-10 text-center shadow-[0_20px_50px_rgba(123,11,46,0.15)] flex flex-col relative overflow-hidden" style={{ backgroundColor: C.crimson }}>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none opacity-20 -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: C.pink }}></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[60px] pointer-events-none opacity-10 translate-y-1/2 -translate-x-1/3" style={{ backgroundColor: C.pink }}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8">
                    <span className="bg-white/10 text-white/90 text-[12px] font-bold uppercase tracking-widest px-5 py-2 rounded-full border border-white/10">Option 2</span>
                  </div>
                  
                  <h3 className="font-serif text-[28px] md:text-[32px] font-bold mb-2 text-white">ONE-TO-ONE GUIDANCE</h3>
                  <div className="text-[13px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#FBBDD0' }}>Personalised Guidance</div>
                  
                  
                  
                  <p className="text-[15px] md:text-[16px] font-medium mb-10 leading-relaxed text-left text-white/90 flex-grow">
                    നിങ്ങളുടെ personal relationship / marriage situation നേരിട്ട് discuss ചെയ്ത്, നിങ്ങളുടെ specific situation അനുസരിച്ചുള്ള personalised guidance നേടാം.
                  </p>
                  
                  <div className="bg-black/20 rounded-[20px] p-6 mb-10 text-left border border-white/5 backdrop-blur-sm">
                    <div className="font-bold text-[14px] mb-3 text-white flex items-center gap-2"><Star size={16} className="text-[#FBBDD0]"/> Best for you if:</div>
                    <p className="text-[14.5px] font-medium leading-relaxed m-0 text-white/80">നിങ്ങളുടെ situation നേരിട്ട് discuss ചെയ്ത് personalised guidance ആവശ്യമാണെങ്കിൽ.</p>
                  </div>
                  
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="w-full text-white font-bold text-[16px] py-[20px] rounded-full shadow-[0_10px_25px_rgba(232,24,90,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 border border-[#ff4d85]/30"
                    style={{ backgroundColor: C.pink }}>
                    BOOK ONE-TO-ONE SESSION <ArrowRight size={20} />
                  </a>
                </div>
              </motion.div>

            </motion.div>

            {/* NOT SURE */}
            <motion.div variants={fadeInUp} className="bg-[#FDF2F5] rounded-[32px] p-10 md:p-12 mb-[80px] text-center max-w-[900px] mx-auto shadow-sm border border-[#F5C6D0]/50 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E8185A] opacity-5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#E8185A] opacity-5 rounded-full blur-2xl"></div>
              <h3 className="font-serif text-[24px] md:text-[30px] font-bold mb-8 relative z-10" style={{ color: C.crimson }}>NOT SURE WHICH ONE TO CHOOSE?</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
                <p className="text-[16px] md:text-[18px] font-medium m-0 leading-relaxed" style={{ color: C.muted }}>Start with the <b style={{ color: C.crimson }} className="bg-white px-3 py-1 rounded-lg shadow-sm border border-[#F5C6D0] ml-1">₹499 Webinar</b><br className="hidden md:block"/> if you want to learn &amp; explore.</p>
                <div className="hidden md:block w-[2px] h-[60px] bg-gradient-to-b from-transparent via-[#E8185A]/30 to-transparent"></div>
                <div className="md:hidden h-[2px] w-[80px] bg-gradient-to-r from-transparent via-[#E8185A]/30 to-transparent"></div>
                <p className="text-[16px] md:text-[18px] font-medium m-0 leading-relaxed" style={{ color: C.muted }}>Choose the <b style={{ color: C.crimson }} className="bg-white px-3 py-1 rounded-lg shadow-sm border border-[#F5C6D0] ml-1">Session</b><br className="hidden md:block"/> if you need personalised guidance.</p>
              </div>
            </motion.div>

            {/* WHAT HAPPENS NEXT */}
            <motion.div variants={fadeInUp} className="max-w-[1000px] mx-auto text-center mb-[80px]">
              <div className="inline-block text-[13px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-8 border" style={{ color: C.pink, borderColor: C.soft }}>THE FLOW</div>
              <h3 className="font-serif text-[32px] md:text-[40px] font-bold mb-12" style={{ color: C.crimson }}>WHAT HAPPENS NEXT?</h3>
              
              <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-8">
                <div className="bg-white rounded-[24px] p-8 w-full md:w-1/2 shadow-lg border border-[#F5C6D0]/40 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E8185A] opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <div className="font-serif text-[20px] font-bold tracking-tight mb-4" style={{ color: C.pink }}>₹499 WEBINAR</div>
                  <div className="text-[15px] md:text-[17px] font-medium flex items-center justify-center flex-wrap gap-2" style={{ color: C.muted }}>
                    <span>Learn</span> <ArrowRight size={14} className="text-[#E8185A]/50"/>
                    <span>Understand</span> <ArrowRight size={14} className="text-[#E8185A]/50"/>
                    <b style={{ color: C.crimson }}>Explore MarryWise</b>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="font-serif font-bold text-[24px] italic text-[#E8185A]/40 bg-[#FDF2F5] px-4 py-2 rounded-full">OR</div>
                </div>
                
                <div className="bg-white rounded-[24px] p-8 w-full md:w-1/2 shadow-lg border border-[#F5C6D0]/40 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E8185A] opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <div className="font-serif text-[20px] font-bold tracking-tight mb-4" style={{ color: C.pink }}>ONE-TO-ONE</div>
                  <div className="text-[15px] md:text-[17px] font-medium flex items-center justify-center flex-wrap gap-2" style={{ color: C.muted }}>
                    <span>Personalised Guidance</span> <ArrowRight size={14} className="text-[#E8185A]/50"/>
                    <span>Clarity</span> <ArrowRight size={14} className="text-[#E8185A]/50"/>
                    <b style={{ color: C.crimson }}>Explore MarryWise</b>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="bg-[#FDF2F5] p-3 rounded-full border border-[#F5C6D0]">
                  <ArrowRight size={28} className="rotate-90 text-[#E8185A]" />
                </div>
              </div>
              
              <div className="text-white rounded-[32px] p-10 md:p-14 shadow-[0_20px_50px_rgba(123,11,46,0.15)] relative overflow-hidden" style={{ backgroundColor: C.crimson }}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20 -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: C.pink }}></div>
                <h4 className="font-serif text-[28px] md:text-[36px] font-bold mb-6 relative z-10">MARRYWISE COMPLETE PROGRAM</h4>
                <p className="text-[16px] md:text-[18px] font-medium leading-relaxed opacity-90 m-0 max-w-[800px] mx-auto relative z-10">
                  Webinar attend ചെയ്തതിന് ശേഷമോ, One-to-One Guidance Session കഴിഞ്ഞതിന് ശേഷമോ, MarryWise Program നിങ്ങൾക്ക് suitable ആണെന്ന് തോന്നുന്നുവെങ്കിൽ course-ലേക്ക് join ചെയ്യാം.
                </p>
              </div>
            </motion.div>

            {/* START YOUR JOURNEY */}
            <motion.div variants={fadeInUp} className="text-center max-w-[600px] mx-auto mb-10">
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold mb-6" style={{ color: C.crimson }}>START YOUR MARRYWISE JOURNEY</h3>
              <p className="text-[16px] md:text-[18px] font-medium mb-10" style={{ color: C.muted }}>നിങ്ങൾക്ക് അനുയോജ്യമായ വഴി തിരഞ്ഞെടുക്കൂ.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <RazorpayButton 
                  programId="marrywise-webinar"
                  programName="MarryWise Webinar"
                  className="w-full sm:w-auto text-white font-bold text-[16px] py-[20px] px-[40px] rounded-full shadow-[0_10px_25px_rgba(232,24,90,0.3)] transition-transform hover:scale-105 flex items-center justify-center gap-2"
                  style={{ backgroundColor: C.pink }}>
                  JOIN ₹499 WEBINAR <ArrowRight size={20} />
                </RazorpayButton>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto text-white font-bold text-[16px] py-[20px] px-[40px] rounded-full shadow-[0_10px_25px_rgba(123,11,46,0.3)] transition-transform hover:scale-105 flex items-center justify-center gap-2"
                  style={{ backgroundColor: C.crimson }}>
                  BOOK ONE-TO-ONE SESSION <ArrowRight size={20} />
                </a>
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
              <a href="https://www.instagram.com/ranjinivijith_psychologist?stkn=MXJpZGp1YWw3NngzMA==" target="_blank" rel="noopener noreferrer" className="block mb-4 hover:text-white transition-colors text-[15px]">Instagram</a>
              <a href="https://oruma.me" target="_blank" rel="noopener noreferrer" className="block mb-4 hover:text-white transition-colors text-[15px]">Website (oruma.me)</a>
              <a href="https://www.facebook.com/share/19Nt53qCQ6/" target="_blank" rel="noopener noreferrer" className="block mb-4 hover:text-white transition-colors text-[15px]">Facebook</a>
              <a href="https://youtube.com/@orumacounselling?si=tCrLS43-AqY8q4OK" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[15px]">YouTube</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-[60px] pt-[30px] text-center text-[13px] opacity-70">
            © 2026 Marriways. All rights reserved. · Privacy Policy · Terms
          </div>
        </div>
      </footer>

      {/* 22. STICKY BAR */}
      <div className="fixed left-0 right-0 bottom-0 bg-white/95 backdrop-blur-md p-[12px_16px] flex items-center justify-center gap-3 md:gap-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t"
        style={{ borderColor: C.soft }}>
        <RazorpayButton 
          programId="marrywise-webinar"
          programName="MarryWise Webinar"
          className="flex-1 max-w-[240px] text-center font-bold text-[14px] md:text-[16px] py-[12px] md:py-[14px] px-2 rounded-full shadow-sm transition-all"
          style={{ backgroundColor: 'white', color: C.crimson, border: `2px solid ${C.soft}` }}>
          Join ₹499 Webinar
        </RazorpayButton>
        <motion.a href={WA} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="flex-1 max-w-[240px] text-center text-white font-bold text-[14px] md:text-[16px] py-[14px] px-2 rounded-full shadow-[0_4px_14px_rgba(232,24,90,0.3)] transition-shadow"
          style={{ backgroundColor: C.pink }}>
          Book One-to-One Session
        </motion.a>
      </div>

      {/* WhatsApp Floating Icon Removed */}

    </div>
  );
}
