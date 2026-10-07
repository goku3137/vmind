"use client";

import { useState } from "react";
import Head from "next/head";
import Script from "next/script";

// Add Razorpay window type
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function WebinarCheckout() {
  const [isLoading, setIsLoading] = useState(false);

  const makePayment = async () => {
    setIsLoading(true);
    
    // Webinar price in INR
    const amount = 499;

    try {
      // 1. Create order on our Next.js backend
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      
      const order = await res.json();

      if (!order.id) {
        throw new Error("Failed to create order");
      }

      // 2. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: order.amount,
        currency: order.currency,
        name: "VMind Webinar",
        description: "Book your exclusive webinar session",
        order_id: order.id,
        handler: function (response: any) {
          // This runs when payment is successful
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          // You can also redirect the user here: 
          // window.location.href = "/thank-you";
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#E8185A", // Match your branding color
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      
    } catch (error) {
      console.error(error);
      alert("Something went wrong with the payment!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="min-h-screen bg-[#FDF2F5] flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-xl overflow-hidden border border-[#F5C6D0]/50">
          <div className="bg-[#E8185A] px-6 py-10 text-center">
            <h1 className="text-3xl font-bold text-white mb-2 font-serif">MarryWise Webinar</h1>
            <p className="text-white/90">Join our masterclass and transform your life</p>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-[#F5C6D0]/30">
              <span className="text-[#4A0A1F] font-medium">Access Fee</span>
              <span className="text-3xl font-bold text-[#E8185A] font-serif">₹499</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600">Live 2-hour interactive session</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600">Q&A directly with the experts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600">Lifetime access to the recording</span>
              </li>
            </ul>

            <button
              onClick={makePayment}
              disabled={isLoading}
              className="w-full bg-[#E8185A] hover:bg-[#C11248] text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(232,24,90,0.3)]"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Book Webinar Now"
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              Secured by Razorpay. All major UPI, Credit/Debit cards accepted.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
