"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ArrowRight, Calendar, MessageSquare, ExternalLink, Receipt } from "lucide-react";
import Link from "next/link";
import { getCatalogItem } from "@/data/catalog";

const C = {
  blush: "#FDE8EF",
  crimson: "#7B0B2E",
  pink: "#E8185A",
  soft: "#F5C6D0",
  text: "#2A0A14",
  muted: "#5C1528",
};

function ThankYouContent() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("item") || searchParams.get("program");
  const paymentId = searchParams.get("payment_id");
  const customerName = searchParams.get("name");
  const amount = searchParams.get("amount");

  const item = getCatalogItem(itemId);

  const isBooking = item.category === "booking";
  const isWebinar = item.category === "webinar";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-28 pb-16" style={{ backgroundColor: C.blush }}>
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(123,11,46,0.1)] overflow-hidden border"
        style={{ borderColor: C.soft }}
      >
        <div className="p-8 sm:p-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm"
            style={{ backgroundColor: `${C.pink}15`, color: C.pink }}
          >
            <CheckCircle2 size={42} strokeWidth={2.5} />
          </motion.div>
          
          <h1 className="text-2xl sm:text-3xl font-bold font-serif mb-2" style={{ color: C.crimson }}>
            Payment Successful! 🎉
          </h1>

          <p className="text-sm sm:text-base leading-relaxed mb-6 font-medium" style={{ color: C.muted }}>
            {customerName ? `Thank you, ${customerName}! ` : "Thank you! "}
            Your payment for <b className="text-[#E8185A]">{item.title}</b> has been received.
          </p>

          {/* Payment receipt badge */}
          {paymentId && (
            <div className="w-full bg-[#FFF5F8] border border-[#F5C6D0]/70 rounded-2xl p-4 mb-6 text-left flex items-center justify-between text-xs text-[#7B0B2E]">
              <div className="flex items-center gap-2">
                <Receipt size={16} className="text-[#E8185A]" />
                <span>Payment Reference:</span>
              </div>
              <span className="font-mono font-bold text-gray-800">{paymentId}</span>
            </div>
          )}

          {/* Dynamic Next Steps Box */}
          <div className="w-full bg-[#FDF2F5] rounded-2xl p-6 mb-8 border border-[#F5C6D0]/50 text-left flex items-start gap-4">
            <div className="p-3 bg-white rounded-full shadow-sm shrink-0" style={{ color: C.crimson }}>
              {isBooking ? <Calendar size={24} /> : isWebinar ? <Mail size={24} /> : <MessageSquare size={24} />}
            </div>
            <div>
              <h3 className="font-bold text-base mb-1" style={{ color: C.crimson }}>
                {isBooking ? "Scheduling Your Session" : isWebinar ? "Check your email for access" : "Next Steps"}
              </h3>
              <p className="text-sm leading-relaxed opacity-90" style={{ color: C.muted }}>
                {isBooking 
                  ? "Our team will reach out to you via WhatsApp / Phone to confirm your preferred date and time slot for the consultation."
                  : isWebinar
                    ? "We have registered your session. Please check your email inbox (and spam folder) for the login link to access your webinar dashboard."
                    : "Course materials and orientation details are sent to your registered email address."
                }
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <a
              href={`https://wa.me/918157039987?text=Hi%20VMind,%20I%20have%20completed%20the%20payment%20for%20${encodeURIComponent(item.title)}${paymentId ? `%20(Ref:%20${paymentId})` : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-[0_10px_25px_rgba(232,24,90,0.3)] transition-transform hover:scale-105 flex items-center justify-center gap-2 text-white"
              style={{ backgroundColor: C.pink }}
            >
              Confirm on WhatsApp <ExternalLink size={16} />
            </a>

            <Link href="/" className="block">
              <button 
                type="button"
                className="w-full font-bold text-sm py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-[#7B0B2E] hover:bg-[#FDE8EF]"
              >
                Return to Homepage <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FDE8EF] flex items-center justify-center">
          <div className="animate-spin h-8 w-8 text-[#E8185A]"></div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
