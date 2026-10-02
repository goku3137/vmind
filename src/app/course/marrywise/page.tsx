"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

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
    { q: "ഇത് വിവാഹത്തിന് മുമ്പുള്ള couples-ന് മാത്രമാണോ?", a: "അല്ല. Marriage-ന് തയ്യാറെടുക്കുന്ന couples-നും, married life കൂടുതൽ consciously build ചെയ്യാൻ ആഗ്രഹിക്കുന്ന couples-നും ഇത് ഉപയോഗപ്രദമാണ്." },
    { q: "ഇത് Couple Therapy ആണോ?", a: "അല്ല. ഇത് structured relationship & marriage development program ആണ്." },
    { q: "എല്ലാവരുടെയും മുന്നിൽ personal കാര്യങ്ങൾ പറയേണ്ടി വരുമോ?", a: "ഇല്ല. Personal sharing നിർബന്ധമല്ല." },
    { q: "Partner മറ്റൊരു country-ൽ ആണെങ്കിൽ?", a: "പ്രശ്നമില്ല. Online ആയി രണ്ടുപേർക്കും participate ചെയ്യാം." },
    { q: "Course-ൽ എന്തൊക്കെയാണ് പഠിക്കുന്നത്?", a: "Complete journey, structure, activities, sessions എന്നിവ One-to-One Orientation-ൽ വിശദമായി explain ചെയ്യും." },
  ];

  return (
    <div className="w-full min-h-screen font-sans overflow-x-hidden pb-24 selection:bg-[#E8185A] selection:text-white" style={{ backgroundColor: C.blush, color: C.text }}>
      
      {/* 1. TOP RIBBON */}
      <div className="w-full text-center py-2.5 px-4 text-[13px] tracking-wide relative z-50 font-semibold"
        style={{ backgroundColor: C.crimson, color: 'white' }}>
        🌍 Online · Worldwide — No Pressure, No Judgement, Just Clarity
      </div>

      {/* 2. HERO */}
      <section className="relative px-4 pt-[52px] pb-[40px] overflow-visible text-center">
        {/* Ambient Gradients */}
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5], rotate: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none -translate-y-1/3 translate-x-1/4"
          style={{ background: 'radial-gradient(circle, rgba(232,24,90,0.09) 0%, transparent 65%)' }} />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4], rotate: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none translate-y-1/3 -translate-x-1/4"
          style={{ background: 'radial-gradient(circle, rgba(123,11,46,0.08) 0%, transparent 65%)' }} />

        <div className="max-w-[680px] mx-auto relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
            
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 mb-8">
              <div className="w-[36px] h-[36px] relative">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full block">
                  <circle cx="16" cy="20" r="11" stroke={C.pink} strokeWidth="3"/>
                  <circle cx="24" cy="20" r="11" stroke={C.crimson} strokeWidth="3"/>
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-[24px] tracking-[0.03em] leading-none" style={{ color: C.crimson }}>ORUMA</span>
                <span className="font-sans text-[10.5px] tracking-[0.15em] mt-[3px] font-bold" style={{ color: C.pink }}>RELATIONSHIP &amp; MARRIAGE JOURNEY</span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-[32px] md:text-[42px] font-serif font-bold leading-[1.15] mb-[20px] max-w-[540px] mx-auto" style={{ color: C.crimson }}>
              സ്നേഹം മാത്രം പോരാ. <em className="italic font-light pr-1" style={{ color: C.pink }}>ഒരുമിച്ച്</em> ഒരു ജീവിതം build ചെയ്യാനും തയ്യാറാകണം.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-[16.5px] leading-[1.65] max-w-[500px] mx-auto mb-[32px] font-medium" style={{ color: C.muted }}>
              വിവാഹത്തിന് മുമ്പാണോ? Long-distance relationship-ലാണോ? അതോ married life എങ്ങനെ handle ചെയ്യണമെന്ന് clarity വേണോ — മൂന്നു സാഹചര്യത്തിലും ORUMA നിങ്ങൾക്കൊപ്പമുണ്ട്.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-3 w-full max-w-[480px] mx-auto text-left mb-[36px]">
              {[
                `"Marriage കഴിഞ്ഞാൽ ഞങ്ങൾ എങ്ങനെ adjust ചെയ്യും?"`,
                `"Parents & in-laws-നൊപ്പം healthy boundaries എങ്ങനെ maintain ചെയ്യും?"`,
                `"Future-നെക്കുറിച്ച് ഞങ്ങളുടെ expectations same ആണോ?"`
              ].map((q, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white/90 backdrop-blur-sm rounded-[12px] px-5 py-[14px] text-[15px] font-medium shadow-sm" style={{ border: `1px solid ${C.soft}`, color: C.text }}>
                  {q}
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full">
              <motion.a href={WA} target="_blank" rel="noopener noreferrer" 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block text-white font-bold text-[16px] py-[18px] px-8 rounded-full shadow-[0_12px_35px_rgba(232,24,90,0.35)]"
                style={{ backgroundColor: C.pink }}>
                One-to-One Orientation Session ബുക്ക് ചെയ്യൂ
              </motion.a>
              
              <div className="flex flex-wrap items-center justify-center gap-[20px] mt-6 text-[13px] font-medium" style={{ color: C.muted }}>
                <span className="flex items-center gap-1.5">🔒 Private &amp; Confidential</span>
                <span className="flex items-center gap-1.5">🌍 Attend from Anywhere</span>
                <span className="flex items-center gap-1.5">💑 For Both Partners</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. TOPICS */}
      <section className="py-[40px] px-4">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-2 tracking-[0.1em] uppercase" style={{ color: C.pink }}>HAVE YOU TALKED ABOUT THESE?</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[38px] font-bold mb-3 leading-[1.15]" style={{ color: C.crimson }}>ഒരുമിച്ച് ഒരു ജീവിതം തുടങ്ങുമ്പോൾ...</motion.h2>
            <motion.p variants={fadeInUp} className="text-[16.5px] mb-6 font-medium" style={{ color: C.muted }}>താഴെ പറയുന്ന കാര്യങ്ങളെക്കുറിച്ച് മുൻകൂട്ടി സംസാരിച്ചിട്ടുണ്ടോ?</motion.p>
            
            <motion.div variants={stagger} className="flex flex-wrap gap-[10px] mt-[20px]">
              {["Communication", "Emotional Connection", "Family & In-Laws", "Money Management", "Career", "Responsibilities", "Parenting", "Intimacy", "Future Planning"].map((chip, i) => (
                <motion.span key={chip} variants={fadeInUp} whileHover={{ scale: 1.05, backgroundColor: C.soft }} className="px-4 py-[10px] rounded-full text-[14px] font-semibold bg-white cursor-pointer transition-colors" style={{ color: C.crimson, border: `1px solid ${C.soft}` }}>
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. QUOTE / WORRIES */}
      <section className="py-[40px] px-4">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="bg-white rounded-r-2xl rounded-l-md p-8 my-8 shadow-sm" style={{ borderLeft: `5px solid ${C.pink}` }}>
              <p className="text-[18px] md:text-[20px] font-serif italic m-0" style={{ color: C.text }}>&quot;ഞങ്ങളുടെ relationship നല്ലതാണ്… പക്ഷേ future-നെക്കുറിച്ച് എല്ലാം clear ആണോ?&quot;</p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[16.5px] mb-5 font-medium" style={{ color: C.muted }}>ഒരുപക്ഷേ നിങ്ങൾ ചിന്തിക്കുന്നുണ്ടാകാം —</motion.p>
            
            <motion.div variants={stagger} className="flex flex-col gap-3.5 mt-[20px]">
              {[
                "Long-distance കഴിഞ്ഞ് ഒരുമിച്ച് ജീവിക്കുമ്പോൾ എന്തൊക്കെ മാറ്റങ്ങൾ വരും?",
                "Career & household responsibilities എങ്ങനെ share ചെയ്യും?",
                "Children & parenting-നെക്കുറിച്ച് രണ്ടുപേർക്കും ഒരേ vision ആണോ?",
                "Misunderstandings വലിയ conflicts ആകാതെ എങ്ങനെ handle ചെയ്യും?",
                "Relationship-ൽ emotional & physical connection എങ്ങനെ maintain ചെയ്യും?"
              ].map((worry, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-3 items-start text-[15.5px] font-medium" style={{ color: C.text }}>
                  <span className="shrink-0 font-bold" style={{ color: C.pink }}>—</span>
                  <span className="leading-relaxed">{worry}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-[16px] p-[28px] text-center mt-[36px]" style={{ border: `1px solid ${C.soft}` }}>
              <p className="text-[17px] font-semibold m-0" style={{ color: C.crimson }}>ഇവയെല്ലാം പ്രശ്നം വന്നതിന് ശേഷം സംസാരിക്കേണ്ട കാര്യങ്ങളല്ല — Marriage-ന് മുമ്പ് തന്നെ സംസാരിച്ച് മനസ്സിലാക്കേണ്ട കാര്യങ്ങളാണ്.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. WORLDWIDE */}
      <section className="py-[30px] px-4">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="flex items-center gap-[16px] bg-white rounded-[16px] p-[20px_24px] shadow-sm" style={{ border: `1px solid ${C.soft}` }}>
            <span className="text-[32px] shrink-0">🌍</span>
            <p className="text-[15px] m-0 font-medium leading-relaxed" style={{ color: C.muted }}>
              നിങ്ങൾ കേരളത്തിലായാലും, Gulf, UK, Canada, USA, Australia അല്ലെങ്കിൽ ലോകത്തിന്റെ മറ്റേതെങ്കിലും ഭാഗത്തായാലും — partner മറ്റൊരു city/country-ൽ ആണെങ്കിലും, രണ്ടുപേർക്കും ഒരുമിച്ച് online ആയി participate ചെയ്യാം.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5.5 VIDEOS */}
      <section className="py-[50px] px-4">
        <div className="max-w-[840px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="text-center mb-8">
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-3 tracking-[0.1em] uppercase" style={{ color: C.pink }}>LISTEN &amp; LEARN</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[38px] font-bold leading-[1.15]" style={{ color: C.crimson }}>A Glimpse Into Your Journey</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Normal video (16:9) */}
            <motion.div variants={fadeInUp} className="w-full md:w-[60%] aspect-video rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(123,11,46,0.12)] relative bg-white" style={{ border: `6px solid white` }}>
              <iframe
                src="https://www.youtube.com/embed/o7ob0xhcLcY?rel=0&amp;modestbranding=1"
                className="absolute inset-0 w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
            {/* Short video (9:16) */}
            <motion.div variants={fadeInUp} className="w-full max-w-[300px] md:w-[35%] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(123,11,46,0.12)] relative bg-white mx-auto md:mx-0" style={{ border: `6px solid white` }}>
              <iframe
                src="https://www.youtube.com/embed/rg_yUoac7yI?rel=0&amp;modestbranding=1"
                className="absolute inset-0 w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. WE START WITH YOU */}
      <section className="py-[60px] px-4 mt-8" style={{ backgroundColor: C.crimson }}>
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-3 tracking-[0.1em] uppercase" style={{ color: '#FBBDD0' }}>WE DON&apos;T START WITH THE COURSE</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[38px] font-bold mb-5 leading-[1.15] text-white">ഞങ്ങൾ തുടങ്ങുന്നത് നിങ്ങളെ മനസ്സിലാക്കിക്കൊണ്ടാണ്.</motion.h2>
            <motion.p variants={fadeInUp} className="text-[16px] mb-6 font-medium leading-relaxed" style={{ color: C.blush }}>
              Program നേരിട്ട് videos കൊണ്ട് തുടങ്ങുന്നില്ല. ആദ്യം ഒരു <strong className="text-white font-bold">One-to-One Orientation Session</strong>. ഈ session-ൽ നിങ്ങളുടെ —
            </motion.p>
            
            <motion.div variants={stagger} className="flex flex-col gap-3.5 mt-5 mb-6 pl-2">
              {["Relationship Stage", "Current Concerns", "Expectations & Challenges", "Future Goals"].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-3 items-center text-[16px] font-medium text-white">
                  <span className="font-bold" style={{ color: C.pink }}>—</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-[16px] font-medium m-0 mt-6 leading-relaxed" style={{ color: C.blush }}>
              — എന്നിവ മനസ്സിലാക്കി, നിങ്ങൾക്ക് അനുയോജ്യമായ structured journey എങ്ങനെ work ചെയ്യുമെന്ന് വ്യക്തമായി guide ചെയ്യും.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 7. 6-DAY JOURNEY */}
      <section className="py-[60px] px-4">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-3 tracking-[0.1em] uppercase" style={{ color: C.pink }}>THE JOURNEY</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[38px] font-bold mb-4 leading-[1.15]" style={{ color: C.crimson }}>ഒരു Couple Journey</motion.h2>
            <motion.p variants={fadeInUp} className="text-[16.5px] mb-8 font-medium" style={{ color: C.muted }}>One-to-One Orientation കഴിഞ്ഞ്, step-by-step ആയി guide ചെയ്യുന്ന ഒരു structured program.</motion.p>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {[
                { icon: "🎥", label: "Videos" },
                { icon: "✍️", label: "Reflections" },
                { icon: "💑", label: "Couple Activities" },
                { icon: "📝", label: "Practical Exercises" },
                { icon: "🎤", label: "Therapist-Guided Live Sessions" },
                { icon: "📱", label: "Private Couple WhatsApp Group" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(123,11,46,0.1)' }} className="bg-white rounded-[14px] p-5 text-center shadow-sm cursor-pointer transition-shadow" style={{ border: `1px solid ${C.soft}` }}>
                  <span className="text-[26px] block mb-3 drop-shadow-sm">{item.icon}</span>
                  <span className="text-[13.5px] font-bold tracking-[0.02em]" style={{ color: C.crimson }}>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center flex-wrap gap-2.5 mt-[32px] font-serif text-[17px] font-bold" style={{ color: C.pink }}>
              <span>Learn</span><span className="font-normal" style={{ color: C.soft }}>→</span>
              <span>Reflect</span><span className="font-normal" style={{ color: C.soft }}>→</span>
              <span>Discuss</span><span className="font-normal" style={{ color: C.soft }}>→</span>
              <span>Practise</span><span className="font-normal" style={{ color: C.soft }}>→</span>
              <span>Grow</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. WHAT MAKES DIFFERENT */}
      <section className="py-[40px] px-4">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-3 tracking-[0.1em] uppercase" style={{ color: C.pink }}>WHAT MAKES THIS DIFFERENT</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[38px] font-bold mb-8 leading-[1.15]" style={{ color: C.crimson }}>ഇത് വെറും ഒരു online course അല്ല.</motion.h2>
            
            <motion.div variants={fadeInUp} className="flex flex-col gap-3.5 mt-6">
              <div className="flex gap-3 bg-white/60 rounded-[14px] p-5 items-start" style={{ border: `1px solid ${C.soft}` }}>
                <span className="text-[15.5px] line-through flex-1 font-medium" style={{ color: '#D4A5B5' }}>Generic marriage tips</span>
              </div>
              <div className="flex gap-3 bg-white rounded-[14px] p-5 items-start shadow-sm" style={{ border: `1px solid ${C.pink}` }}>
                <span className="text-[15.5px] font-bold flex-1 leading-relaxed" style={{ color: C.crimson }}>നിങ്ങൾ കേൾക്കും → ചിന്തിക്കും → Partner-നൊപ്പം സംസാരിക്കും → Activities ചെയ്യും → Therapist guidance-നൊപ്പം apply ചെയ്യും</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-[16px] p-[28px] mt-8 text-left" style={{ border: `1px solid ${C.soft}` }}>
              <p className="text-[16.5px] font-semibold m-0 leading-relaxed" style={{ color: C.crimson }}>ലക്ഷ്യം: Better Understanding · Better Communication · Better Preparation · A Stronger Future Together.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-[60px] px-4">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-3 tracking-[0.1em] uppercase" style={{ color: C.pink }}>YOU MAY HAVE QUESTIONS</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[38px] font-bold mb-8 leading-[1.15]" style={{ color: C.crimson }}>Frequently Asked</motion.h2>

            <motion.div variants={stagger} className="space-y-0 bg-white rounded-[20px] p-2 shadow-sm" style={{ border: `1px solid ${C.soft}` }}>
              {faqs.map((f, i) => (
                <motion.div key={i} variants={fadeInUp} style={{ borderBottom: i === faqs.length - 1 ? 'none' : `1px solid ${C.soft}` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-[20px] px-4 text-left font-bold text-[16px] hover:bg-gray-50 rounded-xl transition-colors"
                    style={{ color: C.crimson }}>
                    {f.q}
                    <span className={`text-[22px] font-light transition-transform duration-300 ml-3 ${openFaq === i ? 'rotate-45' : ''}`} style={{ color: C.pink }}>
                      +
                    </span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                    <p className="px-4 pb-[22px] text-[15px] m-0 font-medium leading-relaxed" style={{ color: C.muted }}>{f.a}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. COACH */}
      <section className="py-[40px] px-4">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-3 tracking-[0.1em] uppercase" style={{ color: C.pink }}>MEET YOUR THERAPIST</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[38px] font-bold mb-[24px] leading-[1.15]" style={{ color: C.crimson }}>Why Couples Trust Ranjini Vijith</motion.h2>
            
            <motion.div variants={fadeInUp} className="bg-white rounded-[24px] p-[32px] text-center shadow-sm" style={{ border: `1px solid ${C.soft}` }}>
              <div className="w-[220px] mx-auto p-2.5 rounded-[20px] relative mb-[28px]" style={{ backgroundColor: C.blush }}>
                <div className="aspect-[4/5] relative rounded-[14px] overflow-hidden">
                  <Image src="/wp-content/uploads/2026/02/IMG_8055.JPG-scaled.jpeg" alt="Ranjini Vijith" fill sizes="(max-width: 768px) 100vw, 220px" className="object-cover object-top" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full py-[8px] px-5 text-[13px] font-bold whitespace-nowrap shadow-md" style={{ color: C.crimson, border: `1px solid ${C.soft}` }}>
                  <b className="font-black" style={{ color: C.pink }}>35,000+</b> Helped
                </div>
              </div>

              <h3 className="font-serif text-[24px] font-bold mb-1.5 mt-2" style={{ color: C.crimson }}>Ranjini Vijith</h3>
              <div className="text-[14px] font-bold mb-6 tracking-wide" style={{ color: C.pink }}>Founder, ORUMA Healing Therapy Centre</div>
              
              <div className="text-left flex flex-col gap-3 mt-6 bg-white p-6 rounded-2xl" style={{ border: `1px solid ${C.soft}` }}>
                {["Psychologist", "Clinical Hypnotherapist", "Family Therapist", "Founder — ORUMA Healing Therapy Centre"].map((cred, i) => (
                  <div key={i} className="flex gap-3 items-start text-[15px] font-medium" style={{ color: C.text }}>
                    <span className="mt-[3px] text-[14px]" style={{ color: C.pink }}>✦</span>
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[13px] font-medium italic" style={{ color: '#D4A5B5' }}>Add a short personal note or years of practice here to make this section fully yours.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 11. PRICING / BOOKING */}
      <section id="book" className="py-[60px] px-4">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-[13px] font-bold mb-3 tracking-[0.1em] uppercase" style={{ color: C.pink }}>YOUR NEXT STEP</motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[38px] font-bold mb-5 leading-[1.15]" style={{ color: C.crimson }}>Book Your One-to-One Orientation</motion.h2>
            <motion.p variants={fadeInUp} className="text-[16.5px] mb-10 font-medium leading-relaxed" style={{ color: C.muted }}>
              നിങ്ങളുടെ relationship-നെക്കുറിച്ച് സംസാരിക്കാനും, program എങ്ങനെ നിങ്ങളെ guide ചെയ്യുമെന്ന് മനസ്സിലാക്കാനും — ഇപ്പോൾ തന്നെ session book ചെയ്യൂ.
            </motion.p>

            <motion.div variants={fadeInUp} className="rounded-[24px] p-[40px_32px] text-center shadow-[0_20px_60px_rgba(123,11,46,0.15)] relative overflow-hidden" style={{ backgroundColor: C.crimson }}>
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none opacity-20 -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: C.pink }}></div>

              <div className="relative z-10">
                <div className="text-[13px] font-bold tracking-[0.15em] uppercase mb-4" style={{ color: '#FBBDD0' }}>ORUMA ORIENTATION SESSION</div>
                <h3 className="font-serif text-[26px] font-bold mb-[16px] text-white">One-to-One Orientation</h3>
                <div className="font-serif text-[48px] font-bold text-white leading-none">₹999</div>
                <div className="text-[14px] font-medium mb-8 mt-3" style={{ color: C.soft }}>One-time · 60-minute private session</div>
                
                <div className="text-left flex flex-col gap-3.5 my-[30px] text-[15px] font-medium text-white/90 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  {[
                    "60-min private session, online",
                    "Understand your relationship stage & goals",
                    "A guided walkthrough of your 6-day journey",
                    "Both partners can join, from anywhere"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="font-black mt-0.5" style={{ color: '#FBBDD0' }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <motion.a href={WA} target="_blank" rel="noopener noreferrer" 
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-white font-bold text-[17px] py-[18px] rounded-full shadow-[0_12px_28px_rgba(232,24,90,0.35)] text-center"
                  style={{ backgroundColor: C.pink }}>
                  Book My One-to-One Session
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="text-center pt-[40px] pb-[30px] px-4 text-[13px] font-medium leading-relaxed border-t mt-8" style={{ color: C.muted, borderColor: C.soft }}>
        <p className="mb-2"><strong className="font-bold text-[14px]" style={{ color: C.crimson }}>ORUMA</strong> — Start With Clarity. Build With Understanding. Grow Together.</p>
        <p>Online · Worldwide 🌍 &nbsp;·&nbsp; No Pressure · No Judgement · Just Clarity ❤️</p>
      </footer>

      {/* 13. STICKY BAR */}
      <div className="fixed left-0 right-0 bottom-0 bg-white/90 backdrop-blur-md p-[14px_20px] flex items-center justify-between z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]"
        style={{ borderTop: `1px solid ${C.soft}` }}>
        <div className="flex flex-col leading-[1.2]">
          <span className="font-serif font-bold text-[20px]" style={{ color: C.crimson }}>₹999</span>
          <span className="text-[11.5px] font-medium" style={{ color: C.muted }}>One-to-One Orientation Session</span>
        </div>
        <motion.a href="#book" 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="text-white font-bold text-[15px] py-[14px] px-6 rounded-full flex-shrink-0 shadow-[0_4px_14px_rgba(232,24,90,0.3)]"
          style={{ backgroundColor: C.pink }}>
          Book Now →
        </motion.a>
      </div>

    </div>
  );
}
