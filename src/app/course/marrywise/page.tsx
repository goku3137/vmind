"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.05 } }
};

// ── Colours ──────────────────────────────────────────────
// blush:  #FDE8EF  crimson: #7B0B2E  hotpink: #E8185A  soft: #F5C6D0

const C = {
  blush:   '#FDE8EF',
  crimson: '#7B0B2E',
  pink:    '#E8185A',
  soft:    '#F5C6D0',
  text:    '#2A0A14',
  muted:   '#5C1528',
};

const WA = "https://wa.me/918157039987?text=I%20want%20to%20book%20a%201:1%20MARRyWISE%20Session";

// ── Reusable pill badge ───────────────────────────────────
function EyeBrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4"
      style={{ backgroundColor: C.blush, borderColor: C.soft }}>
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.pink }} />
      <span className="text-[11px] tracking-[0.22em] uppercase font-bold" style={{ color: C.crimson }}>
        {children}
      </span>
    </div>
  );
}

// ── CTA button ────────────────────────────────────────────
function CTAButton({ text = "BOOK MY 1:1 SESSION", sub }: { text?: string; sub?: string }) {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      className="inline-flex flex-col items-center justify-center gap-0.5 text-white font-bold text-[16px] py-4 px-10 rounded-full hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
      style={{ backgroundColor: C.pink, boxShadow: `0 12px 35px rgba(232,24,90,0.35)` }}>
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <span className="relative tracking-wide">{text}</span>
      {sub && <span className="relative text-[12px] font-normal opacity-80">{sub}</span>}
    </a>
  );
}

// ── FAQ data ──────────────────────────────────────────────
const faqs = [
  { q: "ഈ session ആർക്കൊക്കെ suitable ആണ്?", a: "Engaged couples, newly married couples, couples facing communication issues, or anyone who wants to understand themselves and their partner better. No prior therapy experience needed." },
  { q: "Session online ആണോ offline ആണോ?", a: "Both options are available. Google Meet / Zoom through online, or in-person at our Trivandrum / Attingal centre. You can choose what's comfortable for you." },
  { q: "ഇത് confidential ആണോ?", a: "100%. Everything shared in the session is strictly private. We follow professional ethical standards. Nothing leaves the room." },
  { q: "ഒരാൾ മാത്രം attend ചെയ്യാൻ പറ്റുമോ?", a: "Yes. Individual sessions are also welcome. Understanding yourself is the first step to a healthier relationship." },
  { q: "Session കഴിഞ്ഞ് follow-up ഉണ്ടോ?", a: "Yes. Based on the discovery session, Ranjini will recommend a personalised next step — whether it's a structured program, individual sessions, or couple's therapy." },
];

export default function MarryWiseLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen font-sans selection:bg-[#E8185A] selection:text-white overflow-x-hidden"
      style={{ backgroundColor: C.blush, color: C.text }}>

      {/* ══ ANNOUNCEMENT BAR ════════════════════════════════ */}
      <div className="text-white text-center py-2.5 px-4 text-[13px] font-semibold tracking-wide"
        style={{ backgroundColor: C.crimson }}>
        <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2 align-middle" />
        Limited Slots Available — <span style={{ color: '#FBBDD0' }}>Book Your Private 1:1 Discovery Session</span>
      </div>

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="relative px-4 pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <motion.div animate={{ scale: [1,1.12,1], opacity: [0.5,0.8,0.5] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none -translate-y-1/3 translate-x-1/4"
          style={{ background: 'radial-gradient(circle, rgba(232,24,90,0.09) 0%, transparent 65%)' }} />
        <motion.div animate={{ scale: [1,1.2,1], opacity: [0.4,0.6,0.4] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none translate-y-1/3 -translate-x-1/4"
          style={{ background: 'radial-gradient(circle, rgba(123,11,46,0.08) 0%, transparent 65%)' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border"
              style={{ backgroundColor: 'rgba(255,255,255,0.75)', borderColor: C.soft, backdropFilter: 'blur(12px)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: C.pink }} />
              <span className="text-[12px] tracking-[0.25em] uppercase font-bold" style={{ color: C.crimson }}>MARRyWISE</span>
            </motion.div>

            <motion.h1 variants={fadeInUp}
              className="text-[38px] md:text-[58px] lg:text-[68px] font-serif font-bold leading-[1.1] tracking-tight"
              style={{ color: C.crimson }}>
              <span className="italic font-light" style={{ color: C.pink }}>Understanding yourself</span>
              <br />and building a healthier<br className="hidden md:block" /> relationship together.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-[18px] md:text-[21px] leading-relaxed max-w-2xl font-light" style={{ color: C.muted }}>
              Love is the beginning. Marriage is the journey.<br />Are you truly prepared to build a life together?
            </motion.p>

            <motion.div variants={fadeInUp}>
              <CTAButton text="BEGIN YOUR JOURNEY" sub="Book Private 1:1 Session →" />
            </motion.div>

            {/* Trust micro-badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[13px]" style={{ color: C.muted }}>
              {[
                { icon: "🔒", label: "100% Confidential" },
                { icon: "💬", label: "No Judgment" },
                { icon: "⏱️", label: "30 Minutes" },
              ].map(b => (
                <span key={b.label} className="flex items-center gap-1.5 font-medium">
                  <span>{b.icon}</span>{b.label}
                </span>
              ))}
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* ══ PROOF STRIP ════════════════════════════════════ */}
      <section className="py-6 border-y" style={{ backgroundColor: C.crimson, borderColor: 'rgba(245,198,208,0.2)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "10+", label: "Years Experience" },
              { stat: "1000+", label: "Couples Supported" },
              { stat: "100%", label: "Confidential" },
              { stat: "5 ⭐", label: "Client Rating" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <b className="block text-[28px] font-serif font-bold text-white">{s.stat}</b>
                <span className="text-[12px] font-medium tracking-wide uppercase" style={{ color: '#FBBDD0' }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ══ INSIGHTS & PERSPECTIVES ═════════════════════════════ */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: C.blush }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <EyeBrow>Insights</EyeBrow>
            <h2 className="text-[30px] md:text-[42px] font-serif font-bold mb-4" style={{ color: C.crimson }}>
              Why Prepare for Marriage?
            </h2>
            <p className="text-[17px] max-w-xl mx-auto font-light" style={{ color: C.muted }}>
              Hear insights on the importance of understanding yourself and your partner.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Video 1 (16:9 Landscape) */}
            <div className="w-full md:w-[60%] rounded-[24px] overflow-hidden border bg-white shadow-xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/o7ob0xhcLcY"
                  title="Why Marriage Counseling?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="px-5 py-4" style={{ backgroundColor: C.blush }}>
                <p className="font-serif font-semibold text-[15px]" style={{ color: C.crimson }}>The Need for Guidance</p>
                <p className="text-[13px] mt-1 font-light" style={{ color: C.muted }}>Why marriage counseling is essential</p>
              </div>
            </div>

            {/* Video 2 (9:16 Portrait) */}
            <div className="w-[70%] sm:w-[50%] md:w-[35%] lg:w-[30%] rounded-[24px] overflow-hidden border bg-white shadow-xl">
              <div className="relative w-full" style={{ paddingBottom: '177.77%' }}>
                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/rg_yUoac7yI"
                  title="Counseling Recommendation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="px-5 py-4" style={{ backgroundColor: C.blush }}>
                <p className="font-serif font-semibold text-[15px]" style={{ color: C.crimson }}>A Word of Recommendation</p>
                <p className="text-[13px] mt-1 font-light" style={{ color: C.muted }}>A perspective on Ranjini's sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══ PREPARATION ════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-7">
            <EyeBrow>Your Marriage Deserves Preparation Too</EyeBrow>
            <h2 className="text-[32px] md:text-[42px] font-serif font-bold leading-tight uppercase tracking-tight" style={{ color: C.crimson }}>
              YOUR MARRIAGE DESERVES <br />
              <span className="italic font-light" style={{ color: C.pink }}>PREPARATION TOO.</span>
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed" style={{ color: C.muted }}>
              <p>Wedding-ന് വേണ്ടി നിങ്ങൾ months തയ്യാറെടുക്കും.</p>
              <div className="flex flex-wrap gap-2">
                {['Venue.', 'Dress.', 'Photography.', 'Food.', 'Guests.', 'Budget.'].map(w => (
                  <span key={w} className="px-3 py-1 rounded-full text-[14px] font-semibold" style={{ backgroundColor: C.blush, color: C.crimson }}>{w}</span>
                ))}
              </div>
              <div className="w-10 h-px" style={{ backgroundColor: C.soft }} />
              <p className="font-semibold text-[20px]" style={{ color: C.text }}>പക്ഷേ…</p>
              <p className="text-[21px] font-serif leading-snug" style={{ color: C.pink }}>
                ഒരു ജീവിതം ഒരുമിച്ച് ജീവിക്കാൻ നിങ്ങൾ എത്രത്തോളം തയ്യാറെടുക്കുന്നു?
              </p>
              <p>കാരണം wedding ഒരു day ആണ്.<br /><b style={{ color: C.crimson }}>Marriage is a journey.</b></p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="relative h-[520px] rounded-[32px] overflow-hidden flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${C.blush} 0%, #FBBDD0 100%)`, boxShadow: `0 20px 60px rgba(232,24,90,0.12)` }}>
            <div className="w-5/6 h-5/6 rounded-[24px] flex items-center justify-center p-8 text-center relative border"
              style={{ backgroundColor: 'rgba(255,255,255,0.45)', borderColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)' }}>
              <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(232,24,90,0.1)' }} />
                <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(123,11,46,0.08)' }} />
              </div>
              <p className="font-serif text-[24px] font-light leading-snug relative z-10" style={{ color: C.crimson }}>
                &ldquo;Prepare for the <b className="font-bold">marriage</b>,<br />not just the{' '}
                <span className="italic" style={{ color: C.pink }}>wedding</span>.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ PAIN POINTS ════════════════════════════════════ */}
      <section className="py-24 px-4" style={{ backgroundColor: C.blush }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-14">
            <motion.div variants={fadeInUp}><EyeBrow>The Reality</EyeBrow></motion.div>
            <motion.h2 variants={fadeInUp} className="text-[30px] md:text-[42px] font-serif font-bold mb-4" style={{ color: C.crimson }}>
              Is This How Your Relationship Feels?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[17px] max-w-xl mx-auto font-light" style={{ color: C.muted }}>
              Many couples struggle silently. You are not alone — and it doesn&apos;t have to stay this way.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Walking on eggshells", desc: "You constantly watch what you say to avoid triggering another argument." },
              { title: "Emotional distance", desc: "You live together like roommates — the warmth and intimacy are gone." },
              { title: "Repeating cycles", desc: "The same fights happen over and over but nothing ever truly resolves." },
              { title: "Feeling unheard", desc: "You share feelings but your partner doesn't seem to understand or care." },
              { title: "Communication breakdowns", desc: "Simple conversations spiral into silence or shouting matches." },
              { title: "Fear of the future", desc: "You love each other but wonder if you&apos;re truly compatible long-term." },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 flex gap-4 items-start border transition-all"
                style={{ borderColor: C.soft, boxShadow: '0 4px 20px rgba(232,24,90,0.05)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: C.blush }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: C.pink }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <b className="block font-serif text-[17px] mb-1" style={{ color: C.crimson }}>{p.title}</b>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: C.muted }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center font-serif italic text-[22px] mt-14" style={{ color: C.pink }}>
            It doesn&apos;t have to stay this way.
          </motion.p>
        </div>
      </section>

      {/* ══ BEFORE / AFTER ════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <EyeBrow>The Transformation</EyeBrow>
            <h2 className="text-[30px] md:text-[42px] font-serif font-bold" style={{ color: C.crimson }}>
              What Happens When You Do The Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            {/* Before */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="rounded-[22px] p-8 border" style={{ backgroundColor: '#FFF5F7', borderColor: C.soft }}>
              <div className="w-full h-1.5 rounded-full mb-7" style={{ backgroundColor: C.soft }} />
              <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold mb-6" style={{ color: '#9B7080' }}>Before</h3>
              <ul className="space-y-4">
                {["Constant misunderstandings", "Feeling unseen & unheard", "Loneliness inside marriage", "Avoiding hard conversations", "Arguments that go nowhere"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-[15px]" style={{ color: C.muted }}>
                    <span className="mt-1 shrink-0 w-4 h-4 flex items-center justify-center text-[#C4A0B0]">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Arrow */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }}
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto rotate-90 md:rotate-0"
              style={{ backgroundColor: C.blush, border: `1.5px solid ${C.soft}` }}>
              <motion.svg animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: C.pink }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.div>

            {/* After */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[22px] p-8 border relative overflow-hidden"
              style={{ backgroundColor: 'white', borderColor: C.soft, boxShadow: `0 20px 50px rgba(232,24,90,0.1)` }}>
              <div className="w-full h-1.5 rounded-full mb-7" style={{ background: `linear-gradient(90deg, ${C.pink}, #FBBDD0)` }} />
              <h3 className="text-[12px] tracking-[0.2em] uppercase font-bold mb-6" style={{ color: C.pink }}>After</h3>
              <ul className="space-y-4">
                {["Clear, calm communication", "Feeling seen & deeply valued", "Emotional intimacy restored", "Healthy conflict resolution", "A shared vision for the future"].map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex gap-3 items-start text-[15px] font-medium" style={{ color: C.crimson }}>
                    <span className="mt-0.5 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: C.pink }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="text-center text-[19px] mt-12" style={{ color: C.text }}>
            You are one <b className="font-serif italic text-[22px]" style={{ color: C.pink }}>honest conversation</b> away from a breakthrough.
          </p>
        </div>
      </section>

      {/* ══ THERAPIST ══════════════════════════════════════ */}
      <section className="py-24 px-4 text-white relative overflow-hidden" style={{ backgroundColor: C.crimson }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(232,24,90,0.25) 0%, transparent 60%)' }} />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-14 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full md:w-[36%] shrink-0">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden relative" style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
              <Image src="/wp-content/uploads/2026/02/IMG_8055.JPG-scaled.jpeg" alt="Ranjini Vijith" fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.crimson} 0%, transparent 55%)`, opacity: 0.9 }} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[64%] space-y-5">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border text-[12px] tracking-[0.2em] uppercase"
              style={{ borderColor: 'rgba(245,198,208,0.3)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#F5C6D0' }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#FBBDD0' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Meet Your Therapist
            </div>

            <h2 className="text-[38px] md:text-[50px] font-serif font-bold text-white">RANJINI VIJITH</h2>
            <p className="font-medium tracking-wide text-[14px] uppercase" style={{ color: '#FBBDD0' }}>
              Psychologist · Clinical Hypnotherapist<br />Relationship &amp; Marriage Therapist
            </p>
            <div className="w-14 h-px" style={{ backgroundColor: 'rgba(245,198,208,0.3)' }} />
            <p className="text-[16px] leading-relaxed max-w-lg" style={{ color: '#F5C6D0' }}>
              Relationship, emotional wellbeing, marriage &amp; personal growth മേഖലകളിൽ structured guidance നൽകുന്നു.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 pt-2">
              {[
                "10+ years clinical experience in relationship & marriage therapy",
                "Certified Clinical Hypnotherapist — specialised in emotional healing",
                "Founder of ORUMA — a trusted mental wellness brand in Kerala",
                "Trilingual sessions: Malayalam, English, Hindi",
              ].map((c, i) => (
                <li key={i} className="flex gap-3 items-start text-[14.5px]" style={{ color: '#F5C6D0' }}>
                  <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: C.pink }} />
                  {c}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Professional.', 'Confidential.', 'Compassionate.'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-xl text-sm font-medium"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(245,198,208,0.15)', color: '#F5C6D0' }}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-bold text-xl uppercase tracking-[0.3em] pt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>ORUMA</p>
          </motion.div>
        </div>
      </section>

      {/* ══ WHAT YOU'LL EXPLORE ════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <EyeBrow>What You&apos;ll Explore</EyeBrow>
            <h2 className="text-[30px] md:text-[42px] font-serif font-bold" style={{ color: C.crimson }}>
              What Happens in Your 1:1 Session
            </h2>
            <p className="text-[17px] max-w-xl mx-auto mt-4 font-light" style={{ color: C.muted }}>
              A safe, guided 30-minute conversation to understand where you are and what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "💬", title: "Your Relationship Story", desc: "We listen to your journey — how you met, where you are now, and what feels stuck." },
              { icon: "🧠", title: "Current Concerns", desc: "Communication gaps, emotional distance, family concerns, trust — we map it all out clearly." },
              { icon: "🔮", title: "Future Questions", desc: "What do you want your relationship to look like? We help you visualise and plan for it." },
              { icon: "👤", title: "Self-Understanding", desc: "Understand your own patterns, attachment style, and how it impacts your relationship." },
              { icon: "🤝", title: "Expectations Alignment", desc: "Clarity on what you and your partner need from each other — without assumptions." },
              { icon: "🗺️", title: "Your Next Step", desc: "You leave with a clear, personalised recommendation for your journey forward." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-7 border transition-all"
                style={{ backgroundColor: C.blush, borderColor: C.soft }}>
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-serif font-bold text-[18px] mb-2" style={{ color: C.crimson }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEXT TESTIMONIALS ══════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <EyeBrow>Client Reviews</EyeBrow>
            <h2 className="text-[30px] md:text-[40px] font-serif font-bold" style={{ color: C.crimson }}>
              What Couples Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Arun & Divya", role: "Married 2 years", text: "We were constantly arguing about small things. Ranjini helped us see the real patterns. Now we actually listen to each other.", initials: "AD" },
              { name: "Priya M.", role: "Engaged", text: "Before our wedding I wanted to understand myself better. This session gave me more clarity than months of self-reflection alone.", initials: "P" },
              { name: "Shyam & Meera", role: "Married 5 years", text: "We had drifted apart emotionally. The session was the turning point. We finally started talking — really talking.", initials: "SM" },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-7 border relative" style={{ backgroundColor: '#FFF8FA', borderColor: C.soft }}>
                <div className="text-5xl font-black leading-none mb-4 opacity-10 absolute top-4 left-5" style={{ color: C.pink }}>&ldquo;</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="italic text-[14px] leading-relaxed mb-5" style={{ color: C.muted }}>{t.text}</p>
                <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: C.soft }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                    style={{ backgroundColor: C.pink }}>{t.initials}</div>
                  <div>
                    <p className="font-bold text-[13px]" style={{ color: C.crimson }}>{t.name}</p>
                    <p className="text-[11px]" style={{ color: C.muted }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOOKING / OFFER ════════════════════════════════ */}
      <section id="booking" className="py-24 px-4" style={{ backgroundColor: C.blush }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="bg-white rounded-[32px] p-10 md:p-16 relative overflow-hidden border"
            style={{ borderColor: C.soft, boxShadow: `0 24px 80px rgba(232,24,90,0.09)` }}>
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(232,24,90,0.08)' }} />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(123,11,46,0.05)' }} />

            <div className="text-center space-y-7 relative z-10">
              <div>
                <EyeBrow>Your First Step</EyeBrow>
                <h2 className="text-[28px] md:text-[38px] font-serif font-bold" style={{ color: C.crimson }}>
                  Private 1:1 Relationship<br className="hidden md:block" /> Discovery Session
                </h2>
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border" style={{ backgroundColor: C.blush, borderColor: C.soft }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: C.pink }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold tracking-wide text-[15px]" style={{ color: C.text }}>30 Minutes · Private · Online or In-Person</span>
              </div>

              <p className="text-[16px] leading-relaxed max-w-2xl mx-auto" style={{ color: C.muted }}>
                <span className="font-bold" style={{ color: C.crimson }}>MARRyWISE</span> journey തുടങ്ങുന്നതിന് മുമ്പ് നിങ്ങളുടെ relationship, current concerns, expectations, communication, family concerns, future questions എന്നിവയെക്കുറിച്ച് ഒരു private conversation.
              </p>

              <div className="rounded-2xl p-6 border inline-block mx-auto" style={{ backgroundColor: 'rgba(253,232,239,0.6)', borderColor: C.soft }}>
                <p className="font-serif italic text-[20px]" style={{ color: C.pink }}>
                  <span className="font-bold">No judgement.</span> No pressure. Just clarity.
                </p>
              </div>

              {/* Checklist */}
              <ul className="text-left grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {["Understand your relationship patterns", "Identify communication gaps", "Align on future expectations", "Gain clarity with no pressure", "100% confidential conversation", "Personalised next-step recommendation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14.5px]" style={{ color: C.muted }}>
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: C.pink }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <CTAButton text="[ BOOK MY 1:1 SESSION ]" sub="Limited slots available — Book via WhatsApp" />
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[12px] font-medium border-t" style={{ borderColor: C.soft, color: C.muted }}>
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: C.pink }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> 100% Secure</span>
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: C.pink }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> Private Session</span>
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: C.pink }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> Flexible Timing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <EyeBrow>FAQ</EyeBrow>
            <h2 className="text-[30px] md:text-[40px] font-serif font-bold" style={{ color: C.crimson }}>
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border overflow-hidden transition-all"
                style={{ borderColor: openFaq === i ? C.pink : C.soft }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[15px]"
                  style={{ color: C.crimson }}>
                  {f.q}
                  <span className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center border text-[18px] font-bold transition-all"
                    style={{ borderColor: openFaq === i ? C.pink : C.soft, backgroundColor: openFaq === i ? C.pink : C.blush, color: openFaq === i ? 'white' : C.pink, transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                    +
                  </span>
                </button>
                <div style={{ maxHeight: openFaq === i ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <p className="px-6 pb-5 text-[14.5px] leading-relaxed border-t pt-4" style={{ color: C.muted, borderColor: C.soft }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════ */}
      <section className="py-24 px-4 text-center text-white relative overflow-hidden" style={{ backgroundColor: C.crimson }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom, rgba(232,24,90,0.2) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(245,198,208,0.15)', border: '1px solid rgba(245,198,208,0.3)' }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#FBBDD0' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <h3 className="text-[12px] tracking-[0.25em] font-bold uppercase" style={{ color: '#FBBDD0' }}>One Question To Begin With</h3>

          <p className="text-[26px] md:text-[34px] font-serif font-medium leading-snug italic px-4 text-white">
            &ldquo;We love each other. But are we truly prepared to build a life together?&rdquo;
          </p>

          <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'rgba(245,198,208,0.3)' }} />

          <p className="text-[18px]" style={{ color: '#F5C6D0' }}>
            If that question made you pause…<br />
            <span className="font-semibold text-white">Maybe this journey is for you.</span>
          </p>

          <div className="space-y-3">
            <h4 className="text-[20px] font-serif font-bold tracking-tight text-white">MARRyWISE</h4>
            <div className="inline-block px-8 py-4 rounded-full border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(245,198,208,0.2)' }}>
              <p className="font-bold tracking-widest text-[13px] uppercase" style={{ color: '#FBBDD0' }}>
                <span className="text-white">LOVE IS THE BEGINNING.</span><br />MARRIAGE IS THE JOURNEY.
              </p>
            </div>
          </div>

          <div className="pb-4">
            <CTAButton text="[ BOOK YOUR 30-MINUTE 1:1 SESSION ]" />
          </div>
        </div>
      </section>

    </div>
  );
}
