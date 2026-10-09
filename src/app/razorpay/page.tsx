"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  User, 
  Mail, 
  Phone,
  ChevronDown 
} from "lucide-react";
import { getCatalogItem, CatalogItem, CATALOG } from "@/data/catalog";

const C = {
  crimson: "#7B0B2E",
  pink: "#E8185A",
  blush: "#FDE8EF",
  softBorder: "#F5C6D0",
  darkText: "#2A0A14",
  mutedText: "#6A2B3D",
};

declare global {
  interface Window {
    Razorpay: any;
  }
}

function RazorpayCheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL param can be ?item=, ?program=, ?course=, ?booking=, ?id=
  const paramId = 
    searchParams.get("item") || 
    searchParams.get("program") || 
    searchParams.get("course") || 
    searchParams.get("booking") || 
    searchParams.get("id");

  const [selectedItem, setSelectedItem] = useState<CatalogItem>(() => getCatalogItem(paramId));
  const [isChangingCourse, setIsChangingCourse] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Sync state if URL changes
  useEffect(() => {
    if (paramId) {
      setSelectedItem(getCatalogItem(paramId));
    }
  }, [paramId]);

  const handleSelectProgram = (item: CatalogItem) => {
    setSelectedItem(item);
    setIsChangingCourse(false);
    router.replace(`/razorpay?item=${item.id}`, { scroll: false });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("vmind-item-change", { detail: item }));
    }
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Invalid phone number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // 1. Create order on Next.js backend
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programId: selectedItem.id,
          customerName: formData.name.trim(),
          customerEmail: formData.email.trim(),
          customerPhone: formData.phone.trim(),
        }),
      });

      const orderData = await res.json();

      if (!res.ok || !orderData.id) {
        throw new Error(orderData.error || "Unable to initiate payment with Razorpay.");
      }

      // 2. Open Razorpay Checkout modal
      const options = {
        key: orderData.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "VMind • Ranjini Vijith",
        description: selectedItem.title,
        order_id: orderData.id,
        image: "/wp-content/uploads/2026/02/Untitled-design-86.png",
        prefill: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          contact: formData.phone.trim(),
        },
        theme: {
          color: C.pink,
        },
        handler: function (response: any) {
          const params = new URLSearchParams({
            payment_id: response.razorpay_payment_id || "",
            order_id: response.razorpay_order_id || orderData.id,
            item: selectedItem.id,
            name: formData.name.trim(),
            amount: selectedItem.price.toString(),
          });
          router.push(`/thank-you?${params.toString()}`);
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK is not loaded. Please refresh the page and try again.");
      }

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        console.error("Payment failed", response.error);
        setApiError(response.error.description || "Payment failed. Please try again.");
        setIsLoading(false);
      });

      paymentObject.open();
    } catch (err: any) {
      console.error("Razorpay Error:", err);
      setApiError(err.message || "Something went wrong while connecting to Razorpay.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <div className="min-h-[calc(100vh-60px)] bg-gradient-to-b from-[#FFF5F8] via-[#FDF2F5] to-white pt-20 pb-6 px-4 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-md w-full"
        >
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-[0_15px_40px_rgba(123,11,46,0.08)] border border-[#F5C6D0]/60 relative">
            
            {/* Header: Course Name, Small Change Button & Price */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#F5C6D0]/40">
              <div className="flex-1 mr-3">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8185A]">
                    Course / Booking
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsChangingCourse(!isChangingCourse)}
                    className="text-[11px] font-semibold text-[#7B0B2E]/75 hover:text-[#E8185A] transition-colors flex items-center gap-0.5 cursor-pointer underline underline-offset-2"
                  >
                    <span>{isChangingCourse ? "Done" : "Change"}</span>
                    <ChevronDown size={11} className={`transition-transform duration-200 ${isChangingCourse ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <h1 className="font-serif text-lg sm:text-xl font-bold text-[#7B0B2E] leading-tight">
                  {selectedItem.title}
                </h1>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] font-semibold text-[#6A2B3D] block">Amount</span>
                <span className="font-serif text-2xl font-bold text-[#E8185A]">
                  ₹{selectedItem.price.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Small In-place Course Switcher */}
            <AnimatePresence>
              {isChangingCourse && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mb-3.5 p-2.5 bg-[#FFF5F8] border border-[#F5C6D0] rounded-xl text-xs overflow-hidden"
                >
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7B0B2E] mb-1">
                    Select Course or Session:
                  </label>
                  <select
                    value={selectedItem.id}
                    onChange={(e) => {
                      const item = getCatalogItem(e.target.value);
                      handleSelectProgram(item);
                    }}
                    className="w-full bg-white border border-[#F5C6D0] rounded-lg px-2.5 py-1.5 text-xs text-[#7B0B2E] font-medium focus:outline-none focus:ring-1 focus:ring-[#E8185A] cursor-pointer"
                  >
                    <optgroup label="Webinars & Masterclasses">
                      <option value="marrywise-webinar">MarryWise Webinar — ₹499</option>
                    </optgroup>
                    <optgroup label="1-on-1 Guidance & Therapy">
                      <option value="marrywise-session">MarryWise 1-to-1 Guidance Session — ₹1,999</option>
                      <option value="couple-counselling">Couple Counselling Session — ₹1,999</option>
                      <option value="individual-therapy">Individual Therapy Session — ₹1,499</option>
                      <option value="relationship-counselling">Relationship Counselling Session — ₹1,499</option>
                      <option value="teenage-parenting">Teenage & Parenting Consultation — ₹1,499</option>
                      <option value="nri-consultation">NRI Online Global Consultation — ₹2,499</option>
                      <option value="postpartum-support">Postpartum Support Session — ₹1,499</option>
                      <option value="sexual-wellness">Intimacy & Sexual Wellness Session — ₹1,999</option>
                    </optgroup>
                    <optgroup label="Programs & Courses">
                      <option value="marrywise-complete">MarryWise Complete Program — ₹4,999</option>
                      <option value="dream-mind">Dream Mind Reprogramming — ₹2,999</option>
                      <option value="stress-healing">Stress Healing Journey — ₹1,999</option>
                      <option value="money-blocks">Reset Your Money Blocks — ₹1,999</option>
                      <option value="shewise">SheWise Program — ₹2,499</option>
                    </optgroup>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Registration Details Form */}
            <form onSubmit={handlePayment} className="space-y-3.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7B0B2E]">
                Your Registration Details
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B0B2E] mb-1">
                  Full Name <span className="text-[#E8185A]">*</span>
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2 rounded-xl border text-sm text-[#2A0A14] bg-[#FAFAFA] focus:bg-white focus:outline-none transition-all ${
                      errors.name ? "border-red-400 focus:ring-1 focus:ring-red-200" : "border-gray-200 focus:border-[#E8185A] focus:ring-1 focus:ring-[#E8185A]/20"
                    }`}
                  />
                </div>
                {errors.name && <p className="text-[11px] text-red-500 mt-0.5 font-medium">{errors.name}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B0B2E] mb-1">
                  Email Address <span className="text-[#E8185A]">*</span>
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2 rounded-xl border text-sm text-[#2A0A14] bg-[#FAFAFA] focus:bg-white focus:outline-none transition-all ${
                      errors.email ? "border-red-400 focus:ring-1 focus:ring-red-200" : "border-gray-200 focus:border-[#E8185A] focus:ring-1 focus:ring-[#E8185A]/20"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[11px] text-red-500 mt-0.5 font-medium">{errors.email}</p>}
              </div>

              {/* WhatsApp / Phone */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B0B2E] mb-1">
                  WhatsApp / Phone <span className="text-[#E8185A]">*</span>
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2 rounded-xl border text-sm text-[#2A0A14] bg-[#FAFAFA] focus:bg-white focus:outline-none transition-all ${
                      errors.phone ? "border-red-400 focus:ring-1 focus:ring-red-200" : "border-gray-200 focus:border-[#E8185A] focus:ring-1 focus:ring-[#E8185A]/20"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-red-500 mt-0.5 font-medium">{errors.phone}</p>}
              </div>

              {/* Note or Consultation Concern (Optional) */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7B0B2E] mb-1">
                  Note or Preferred Timing <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Preferred evening slot, questions..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm text-[#2A0A14] bg-[#FAFAFA] focus:bg-white focus:border-[#E8185A] focus:ring-1 focus:ring-[#E8185A]/20 focus:outline-none transition-all"
                />
              </div>

              {apiError && (
                <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-medium">
                  {apiError}
                </div>
              )}

              {/* Pay Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white font-bold text-sm sm:text-base py-3 px-5 rounded-xl shadow-[0_10px_25px_rgba(232,24,90,0.35)] transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:hover:scale-100 flex items-center justify-center gap-2 cursor-pointer mt-4"
                style={{ backgroundColor: C.pink }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock size={16} />
                    Pay ₹{selectedItem.price.toLocaleString("en-IN")} via Razorpay
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="pt-2 flex items-center justify-center gap-3 text-[11px] text-gray-400">
                <span className="flex items-center gap-1 font-medium text-gray-600">
                  <ShieldCheck size={14} className="text-green-600" />
                  256-Bit SSL Encrypted
                </span>
                <span>•</span>
                <span>Secured by Razorpay</span>
              </div>
            </form>

          </div>
        </motion.div>
      </div>
    </>
  );
}

export default function RazorpayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFF5F8] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <svg className="animate-spin h-8 w-8 text-[#E8185A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm font-semibold text-[#7B0B2E]">Loading VMind Secure Checkout...</span>
          </div>
        </div>
      }
    >
      <RazorpayCheckoutContent />
    </Suspense>
  );
}
