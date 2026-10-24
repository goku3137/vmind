"use client";

import React, { useEffect } from "react";

// =========================================================================
// RAZORPAY INTEGRATION DISABLED & COMMENTED OUT
// REDIRECTING DIRECTLY TO TAGMANGO COURSE PAY SECTION
// =========================================================================

const TAGMANGO_CHECKOUT_URL = "https://learn.dreammind.in/web/checkout/6ad86d03aa1a5b2f036ee3d9";

export default function RazorpayPage() {
  useEffect(() => {
    // Immediate redirect to TagMango checkout
    window.location.replace(TAGMANGO_CHECKOUT_URL);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F8] via-[#FDF2F5] to-white flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(123,11,46,0.08)] border border-[#F5C6D0]/60">
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#FDE8EF] flex items-center justify-center text-[#E8185A]">
          <svg className="animate-spin h-7 w-7 text-[#E8185A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>

        <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#7B0B2E] mb-2">
          Redirecting to Checkout...
        </h1>
        <p className="text-sm text-[#6A2B3D] mb-6 leading-relaxed">
          You are being redirected directly to the official course & webinar enrollment portal.
        </p>

        <a
          href={TAGMANGO_CHECKOUT_URL}
          className="inline-flex items-center justify-center w-full bg-[#E8185A] hover:bg-[#c9114a] text-white font-bold py-3.5 px-6 rounded-full shadow-[0_10px_25px_rgba(232,24,90,0.35)] transition-transform hover:scale-[1.02] text-sm"
        >
          Click Here If Not Redirected
        </a>
      </div>
    </div>
  );
}

/*
// =========================================================================
// PREVIOUS RAZORPAY INTEGRATION CODE (COMMENTED OUT AS REQUESTED)
// =========================================================================

import { useState, Suspense } from "react";
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

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// function RazorpayCheckoutContent() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const paramId = 
//     searchParams.get("item") || 
//     searchParams.get("program") || 
//     searchParams.get("course") || 
//     searchParams.get("booking") || 
//     searchParams.get("serviceId") || 
//     searchParams.get("service_id") || 
//     searchParams.get("id");

//   const [selectedItem, setSelectedItem] = useState<CatalogItem>(() => getCatalogItem(paramId));
//   const [isChangingCourse, setIsChangingCourse] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     note: "",
//   });

//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [apiError, setApiError] = useState<string | null>(null);

//   useEffect(() => {
//     if (paramId) {
//       setSelectedItem(getCatalogItem(paramId));
//     }
//   }, [paramId]);

//   const handleSelectProgram = (item: CatalogItem) => {
//     setSelectedItem(item);
//     setIsChangingCourse(false);
//     router.replace(`/razorpay?item=${item.id}`, { scroll: false });
//     if (typeof window !== "undefined") {
//       window.dispatchEvent(new CustomEvent("vmind-item-change", { detail: item }));
//     }
//   };

//   const validateForm = () => {
//     const errs: { [key: string]: string } = {};
//     if (!formData.name.trim()) {
//       errs.name = "Full name is required";
//     }
//     if (!formData.email.trim()) {
//       errs.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
//       errs.email = "Invalid email format";
//     }
//     if (!formData.phone.trim()) {
//       errs.phone = "Phone is required";
//     } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
//       errs.phone = "Invalid phone number";
//     }
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handlePayment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setApiError(null);

//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/razorpay", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           programId: selectedItem.id,
//           customerName: formData.name.trim(),
//           customerEmail: formData.email.trim(),
//           customerPhone: formData.phone.trim(),
//         }),
//       });

//       const orderData = await res.json();

//       if (!res.ok || !orderData.id) {
//         throw new Error(orderData.error || "Unable to initiate payment with Razorpay.");
//       }

//       const options = {
//         key: orderData.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: orderData.currency || "INR",
//         name: "VMind • Ranjini Vijith",
//         description: selectedItem.title,
//         order_id: orderData.id,
//         image: "/wp-content/uploads/2026/02/Untitled-design-86.png",
//         prefill: {
//           name: formData.name.trim(),
//           email: formData.email.trim(),
//           contact: formData.phone.trim(),
//         },
//         theme: {
//           color: C.pink,
//         },
//         handler: function (response: any) {
//           const params = new URLSearchParams({
//             payment_id: response.razorpay_payment_id || "",
//             order_id: response.razorpay_order_id || orderData.id,
//             item: selectedItem.id,
//             name: formData.name.trim(),
//             amount: selectedItem.price.toString(),
//           });
//           router.push(`/thank-you?${params.toString()}`);
//         },
//         modal: {
//           ondismiss: function () {
//             setIsLoading(false);
//           },
//         },
//       };

//       if (!window.Razorpay) {
//         throw new Error("Razorpay SDK is not loaded. Please refresh the page and try again.");
//       }

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.on("payment.failed", function (response: any) {
//         console.error("Payment failed", response.error);
//         setApiError(response.error.description || "Payment failed. Please try again.");
//         setIsLoading(false);
//       });

//       paymentObject.open();
//     } catch (err: any) {
//       console.error("Razorpay Error:", err);
//       setApiError(err.message || "Something went wrong while connecting to Razorpay.");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <Script
//         id="razorpay-checkout-js"
//         src="https://checkout.razorpay.com/v1/checkout.js"
//         strategy="lazyOnload"
//       />
//       ...
//     </>
//   );
// }
*/
