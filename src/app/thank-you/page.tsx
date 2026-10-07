"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const C = {
  blush: '#FDE8EF',
  crimson: '#7B0B2E',
  pink: '#E8185A',
  soft: '#F5C6D0',
  text: '#2A0A14',
  muted: '#5C1528',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: C.blush }}>
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-lg w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(123,11,46,0.1)] overflow-hidden border"
        style={{ borderColor: C.soft }}
      >
        <div className="p-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: `${C.pink}15`, color: C.pink }}
          >
            <CheckCircle2 size={40} strokeWidth={2.5} />
          </motion.div>
          
          <h1 className="text-3xl font-bold font-serif mb-4" style={{ color: C.crimson }}>
            Payment Successful! 🎉
          </h1>
          
          <p className="text-[16px] leading-relaxed mb-8" style={{ color: C.muted }}>
            Thank you for registering for the MarryWise Webinar. We are thrilled to have you join us!
          </p>

          <div className="w-full bg-[#FDF2F5] rounded-2xl p-6 mb-8 border border-[#F5C6D0]/50 text-left flex items-start gap-4">
            <div className="p-3 bg-white rounded-full shadow-sm shrink-0" style={{ color: C.crimson }}>
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[16px] mb-1" style={{ color: C.crimson }}>Check your email</h3>
              <p className="text-[14px] leading-relaxed opacity-90" style={{ color: C.muted }}>
                We have automatically created your TagMango account. Please check your email inbox (and spam folder) for the TagMango login link to access your webinar dashboard.
              </p>
            </div>
          </div>

          <Link href="/program/marrywise">
            <button className="w-full font-bold text-[16px] py-[16px] px-8 rounded-full shadow-[0_10px_25px_rgba(232,24,90,0.3)] transition-transform hover:scale-105 flex items-center justify-center gap-2 text-white"
              style={{ backgroundColor: C.pink }}>
              Return to Homepage <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
